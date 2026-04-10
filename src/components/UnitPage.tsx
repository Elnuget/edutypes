import { useEffect, useMemo, useRef, useState } from 'react';
import type {
  LessonExercise,
  LessonContentBlock,
  UnitLesson,
} from '../data/unit-types';
import { validateExerciseWithCompiler } from '../lib/exercise-validator';
import {
  getCompletedLessonsCount,
  getNextLesson,
  isLessonCompleted,
  isLessonUnlocked,
  type UnitProgress,
} from '../lib/unit-progress';

type UnitPageProps = {
  unitLabel: string;
  validationLabel: string;
  lessons: UnitLesson[];
  progress: UnitProgress;
  onBack: () => void;
  onChangeDraft: (lessonId: string, exerciseId: string, value: string) => void;
  onCompleteLesson: (lessonId: string) => void;
  onResetProgress: () => void;
  onSelectLesson: (lessonId: string) => void;
  onSetLessonStage: (lessonId: string, stageIndex: number) => void;
  onSetExerciseValidated: (
    lessonId: string,
    exerciseId: string,
    validated: boolean,
  ) => void;
};

type LessonStage =
  | {
      id: string;
      kind: 'intro';
      label: string;
      title: string;
      body: string[];
    }
  | {
      id: string;
      kind: 'content';
      label: string;
      title: string;
      body: string[];
      code?: string;
    }
  | {
      id: string;
      kind: 'exercise';
      label: string;
      exercise: LessonExercise;
    };

function renderRichText(text: string) {
  return text.split(/(`[^`]+`|\[\[[^[\]]+\]\])/g).filter(Boolean).map((part, index) => {
    if (part.startsWith('[[') && part.endsWith(']]')) {
      return (
        <strong key={`${part}-${index}`} className="lesson-highlight">
          {part.slice(2, -2)}
        </strong>
      );
    }

    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={`${part}-${index}`}>{part.slice(1, -1)}</code>;
    }

    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

function getEditorCursor(text: string, selectionStart: number) {
  const safePosition = Math.max(0, Math.min(selectionStart, text.length));
  const before = text.slice(0, safePosition);
  const lines = before.split('\n');

  return {
    line: lines.length,
    column: lines[lines.length - 1].length + 1,
  };
}

function exerciseExpectsConsoleOutput(exercise: LessonExercise) {
  if (exercise.responseKind === 'text') {
    return false;
  }

  const instructionText = exercise.instructions.join(' ').toLowerCase();

  if (instructionText.includes('console.log') || instructionText.includes('consola')) {
    return true;
  }

  return exercise.checks.some((check) => {
    if (check.kind === 'includes') {
      return check.needle.toLowerCase().includes('console.log');
    }

    return check.needles.some((needle) => needle.toLowerCase().includes('console.log'));
  });
}

function buildExerciseSuccessMessage(
  validationLabel: string,
  result: Awaited<ReturnType<typeof validateExerciseWithCompiler>>,
  exercise: LessonExercise,
) {
  const parts = ['Excelente. Este ejercicio ya quedo correcto.'];

  parts.push(`${validationLabel}: correcta.`);
  parts.push('Objetivo del ejercicio: cumplido.');

  if (result.successes.length > 0) {
    parts.push(`Detecte: ${result.successes.join(', ')}.`);
  }

  if (exercise.responseKind !== 'text' && result.runtimeOutput.length > 0) {
    parts.push('Y ademas ya dejaste una salida visible en la consola.');
  }

  if (exercise.responseKind !== 'text' && result.runtimeError) {
    parts.push(`La consola aun marco este detalle: ${result.runtimeError}`);
  }

  return parts.join(' ');
}

function buildLessonStages(lesson: UnitLesson): LessonStage[] {
  const introStage: LessonStage = {
    id: `${lesson.id}-intro`,
    kind: 'intro',
    label: 'Inicio',
    title: lesson.title,
    body: [lesson.summary, lesson.goal],
  };

  const learningStages: LessonStage[] = [];
  const exerciseIndexes = new Set<number>();

  for (let index = 0; index < lesson.content.length; index += 1) {
    const block: LessonContentBlock | undefined = lesson.content[index];

    if (block) {
      learningStages.push({
        id: `${lesson.id}-content-${index}`,
        kind: 'content',
        label: `Tarjeta ${index + 1}`,
        title: block.title,
        body: block.body,
        code: block.code,
      });
    }

    const firstExerciseIndex = index * 2;
    const secondExerciseIndex = firstExerciseIndex + 1;

    for (const exerciseIndex of [firstExerciseIndex, secondExerciseIndex]) {
      const exercise = lesson.exercises[exerciseIndex];

      if (!exercise) {
        continue;
      }

      exerciseIndexes.add(exerciseIndex);
      learningStages.push({
        id: `${lesson.id}-exercise-${exerciseIndex}`,
        kind: 'exercise',
        label: `Ejercicio ${exerciseIndex + 1}`,
        exercise,
      });
    }
  }

  lesson.exercises.forEach((exercise, exerciseIndex) => {
    if (exerciseIndexes.has(exerciseIndex)) {
      return;
    }

    learningStages.push({
      id: `${lesson.id}-exercise-${exerciseIndex}`,
      kind: 'exercise',
      label: `Ejercicio ${exerciseIndex + 1}`,
      exercise,
    });
  });

  return [introStage, ...learningStages];
}

function UnitPage({
  unitLabel,
  validationLabel,
  lessons,
  progress,
  onBack,
  onChangeDraft,
  onCompleteLesson,
  onResetProgress,
  onSelectLesson,
  onSetLessonStage,
  onSetExerciseValidated,
}: UnitPageProps) {
  const [feedback, setFeedback] = useState<{
    tone: 'success' | 'error';
    text: string;
  } | null>(null);
  const [pasteNotice, setPasteNotice] = useState<string | null>(null);
  const [isReviewing, setIsReviewing] = useState(false);
  const [editorCursor, setEditorCursor] = useState({ line: 1, column: 1 });
  const [editorWidth, setEditorWidth] = useState(0);
  const [logicalLineHeights, setLogicalLineHeights] = useState<number[]>([]);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [consoleError, setConsoleError] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const gutterRef = useRef<HTMLDivElement | null>(null);
  const lineMeasureRefs = useRef<Array<HTMLDivElement | null>>([]);

  const activeLesson =
    lessons.find((lesson) => lesson.id === progress.activeLessonId) ?? lessons[0];
  const stages = useMemo(() => buildLessonStages(activeLesson), [activeLesson]);
  const savedStageIndex = progress.stageIndexes[activeLesson.id] ?? 0;
  const activeStageIndex = Math.min(savedStageIndex, stages.length - 1);
  const activeStage = stages[activeStageIndex];
  const completedLessons = getCompletedLessonsCount(lessons, progress);
  const activeLessonCompleted = isLessonCompleted(progress, activeLesson.id);
  const nextLesson = getNextLesson(lessons, activeLesson.id);
  const isLastStage = activeStageIndex === stages.length - 1;
  const activeExercise =
    activeStage.kind === 'exercise' ? activeStage.exercise : null;
  const activeExerciseValidated = activeExercise
    ? progress.validatedExercises[activeLesson.id]?.[activeExercise.id] === true
    : false;
  const activeExerciseIsText = activeExercise?.responseKind === 'text';
  const activeExerciseExpectsConsole = activeExercise
    ? exerciseExpectsConsoleOutput(activeExercise)
    : false;
  const activeDraft = activeExercise
    ? progress.drafts[activeLesson.id]?.[activeExercise.id] ?? ''
    : '';
  const activeLessonValidatedCount = activeLesson.exercises.filter(
    (exercise) => progress.validatedExercises[activeLesson.id]?.[exercise.id] === true,
  ).length;
  const activeLessonProgressPercent = Math.round(
    ((activeStageIndex + 1) / stages.length) * 100,
  );
  const overallUnitProgressPercent = Math.round(
    ((completedLessons + (activeLessonCompleted ? 0 : (activeStageIndex + 1) / stages.length)) /
      lessons.length) *
      100,
  );
  const logicalLines = useMemo(() => {
    const lines = activeDraft.split('\n');
    return lines.length > 0 ? lines : [''];
  }, [activeDraft]);
  const editorLineCount = Math.max(6, logicalLines.length);

  useEffect(() => {
    setPasteNotice(null);
    setFeedback(null);
    setEditorCursor({ line: 1, column: 1 });
    setConsoleOutput([]);
    setConsoleError(null);
  }, [activeLesson.id, activeStageIndex]);

  useEffect(() => {
    const textarea = textareaRef.current;

    if (!textarea || typeof ResizeObserver === 'undefined') {
      return;
    }

    const updateWidth = () => {
      setEditorWidth(textarea.clientWidth);
    };

    updateWidth();

    const observer = new ResizeObserver(() => {
      updateWidth();
    });

    observer.observe(textarea);

    return () => {
      observer.disconnect();
    };
  }, [activeLesson.id, activeStageIndex]);

  useEffect(() => {
    const computedLineHeight = textareaRef.current
      ? Number.parseFloat(window.getComputedStyle(textareaRef.current).lineHeight)
      : 24;
    const fallbackLineHeight = Number.isFinite(computedLineHeight) ? computedLineHeight : 24;

    const measuredHeights = logicalLines.map((_, index) => {
      const element = lineMeasureRefs.current[index];
      return element ? Math.max(element.getBoundingClientRect().height, fallbackLineHeight) : fallbackLineHeight;
    });

    while (measuredHeights.length < editorLineCount) {
      measuredHeights.push(fallbackLineHeight);
    }

    setLogicalLineHeights(measuredHeights);
  }, [editorLineCount, editorWidth, logicalLines]);

  const syncGutterScroll = (scrollTop: number) => {
    if (gutterRef.current) {
      gutterRef.current.scrollTop = scrollTop;
    }
  };

  const updateCursorFromTextarea = (target: HTMLTextAreaElement) => {
    setEditorCursor(getEditorCursor(target.value, target.selectionStart ?? 0));
  };

  const goToStage = (index: number) => {
    const boundedIndex = Math.max(0, Math.min(index, stages.length - 1));
    onSetLessonStage(activeLesson.id, boundedIndex);
  };

  const handleResetProgress = () => {
    const shouldReset = window.confirm(
      'Estas seguro de reiniciar el progreso? Se borraran tus ejercicios, validaciones y avance guardado en esta unidad.',
    );

    if (!shouldReset) {
      return;
    }

    onResetProgress();
    setFeedback({
      tone: 'success',
      text: 'El progreso de esta unidad se reinicio por completo.',
    });
    setPasteNotice(null);
    setConsoleOutput([]);
    setConsoleError(null);
  };

  const handlePrimaryAction = async () => {
    if (activeExercise && !activeExerciseValidated) {
      const draft = progress.drafts[activeLesson.id]?.[activeExercise.id] ?? '';
      setIsReviewing(true);

      let result: Awaited<ReturnType<typeof validateExerciseWithCompiler>>;

      try {
        result = await validateExerciseWithCompiler(activeExercise.id, draft);
      } catch {
        setIsReviewing(false);
        onSetExerciseValidated(activeLesson.id, activeExercise.id, false);
        setConsoleOutput([]);
        setConsoleError(null);
        setFeedback({
          tone: 'error',
          text: 'No pude revisar tu ejercicio con el analizador en este intento.',
        });
        return;
      }

      setIsReviewing(false);
      setConsoleOutput(result.runtimeOutput);
      setConsoleError(result.runtimeError);

      if (!result.ok) {
        onSetExerciseValidated(activeLesson.id, activeExercise.id, false);

        const parts: string[] = [];

        if (activeExercise.responseKind === 'text') {
          parts.push(
            result.ruleErrors.length === 0
              ? `${validationLabel}: correcta.`
              : `${validationLabel}: necesita un ajuste.`,
          );
        } else {
          parts.push(
            result.compilerOk
              ? `${validationLabel}: correcta.`
              : `${validationLabel}: incorrecta. ${result.compilerErrors.join(' ')}`,
          );
        }

        if (result.ruleErrors.length > 0) {
          parts.push(`Objetivo del ejercicio: ${result.ruleErrors.join(' ')}`);
        }

        if (
          activeExerciseExpectsConsole &&
          result.compilerOk &&
          !result.runtimeError &&
          result.runtimeOutput.length === 0
        ) {
          parts.push(
            'Salida visible: este ejercicio espera que aparezca algo en la consola de abajo. Revisa si tambien debes reescribir la variable, funcion o clase antes de usar `console.log(...)` o antes de hacer la llamada final.',
          );
        }

        setFeedback({
          tone: 'error',
          text: parts.join(' '),
        });
        return;
      }

      onSetExerciseValidated(activeLesson.id, activeExercise.id, true);
      setFeedback({
        tone: 'success',
        text: buildExerciseSuccessMessage(validationLabel, result, activeExercise),
      });
      return;
    }

    if (!isLastStage) {
      goToStage(activeStageIndex + 1);
      return;
    }

    onCompleteLesson(activeLesson.id);

    if (nextLesson) {
      setFeedback({
        tone: 'success',
        text: `Muy bien. Cerraste esta leccion completa. Sigue con ${nextLesson.title}.`,
      });
      return;
    }

    setFeedback({
      tone: 'success',
      text: `${unitLabel} completada. Terminaste toda esta unidad con exito.`,
    });
  };

  return (
    <div className="page-shell page-shell--lesson">
      <main className="lesson-stage">
        <section className="lesson-frame">
          <header className="lesson-frame__top">
            <button className="button button--ghost" onClick={onBack}>
              Salir
            </button>

            <div className="lesson-frame__status">
              <span className="tag">{unitLabel}</span>
              <span className="lesson-frame__counter">
                {activeStageIndex + 1}/{stages.length}
              </span>
            </div>
          </header>

          <div className="lesson-strip">
            {lessons.map((lesson) => {
              const unlocked = isLessonUnlocked(lessons, progress, lesson.id);
              const completed = isLessonCompleted(progress, lesson.id);
              const active = lesson.id === activeLesson.id;

              return (
                <button
                  key={lesson.id}
                  className={`lesson-chip ${active ? 'lesson-chip--active' : ''}`}
                  disabled={!unlocked}
                  onClick={() => onSelectLesson(lesson.id)}
                >
                  <span>{lesson.step}</span>
                  <small>{completed ? 'ok' : unlocked ? 'lista' : 'cerrada'}</small>
                </button>
              );
            })}
          </div>

          <section className="lesson-progress-panel" aria-label="Progreso de la unidad">
            <div className="lesson-progress-panel__stats">
              <div className="progress-stat">
                <span className="progress-stat__label">Unidad</span>
                <strong>{overallUnitProgressPercent}%</strong>
                <small>{completedLessons}/{lessons.length} lecciones cerradas</small>
              </div>

              <div className="progress-stat">
                <span className="progress-stat__label">Leccion actual</span>
                <strong>{activeLessonProgressPercent}%</strong>
                <small>{activeStageIndex + 1}/{stages.length} pasos recorridos</small>
              </div>

              <div className="progress-stat">
                <span className="progress-stat__label">Ejercicios</span>
                <strong>{activeLessonValidatedCount}</strong>
                <small>{activeLesson.exercises.length} ejercicios en esta leccion</small>
              </div>
            </div>

            <div className="progress-track-block">
              <div className="progress-track-block__top">
                <strong>Avance de la unidad</strong>
                <span>{overallUnitProgressPercent}%</span>
              </div>
              <div className="progress-track" aria-hidden>
                <span
                  className="progress-track__fill"
                  style={{ width: `${overallUnitProgressPercent}%` }}
                />
              </div>
            </div>

            <div className="stage-dots" aria-label="Pasos de la leccion actual">
              {stages.map((stage, index) => {
                const isCompleted = index < activeStageIndex;
                const isActive = index === activeStageIndex;

                return (
                  <span
                    key={stage.id}
                    className={`stage-dot ${isCompleted ? 'stage-dot--completed' : ''} ${isActive ? 'stage-dot--active' : ''}`}
                    title={stage.label}
                  />
                );
              })}
            </div>
          </section>

          <article className="stage-card">
            <div className="stage-card__label">{activeStage.label}</div>

            {activeStage.kind === 'intro' ? (
              <div className="stage-card__content">
                <h1>{activeStage.title}</h1>
                {activeStage.body.map((paragraph) => (
                  <p key={paragraph}>{renderRichText(paragraph)}</p>
                ))}
              </div>
            ) : null}

            {activeStage.kind === 'content' ? (
              <div className="stage-card__content">
                <h1>{activeStage.title}</h1>
                {activeStage.body.map((paragraph) => (
                  <p key={paragraph}>{renderRichText(paragraph)}</p>
                ))}
                {activeStage.code ? <pre>{activeStage.code}</pre> : null}
              </div>
            ) : null}

            {activeStage.kind === 'exercise' ? (
              <div className="stage-card__content stage-card__content--exercise">
                <h1>{activeStage.exercise.title}</h1>

                <ul className="exercise-card__instructions">
                  {activeStage.exercise.instructions.map((instruction) => (
                    <li key={instruction}>{renderRichText(instruction)}</li>
                  ))}
                </ul>

                {activeExerciseIsText ? (
                  <div className="response-editor-shell">
                    <div className="code-editor__meta">
                      <span>{editorLineCount} lineas</span>
                      <span>{activeDraft.trim().split(/\s+/).filter(Boolean).length} palabras</span>
                    </div>

                    <textarea
                      ref={textareaRef}
                      className="response-editor"
                      spellCheck={true}
                      value={activeDraft}
                      onChange={(event) => {
                        setFeedback(null);
                        updateCursorFromTextarea(event.target);
                        onChangeDraft(activeLesson.id, activeStage.exercise.id, event.target.value);
                      }}
                      onClick={(event) => {
                        updateCursorFromTextarea(event.currentTarget);
                      }}
                      onKeyUp={(event) => {
                        updateCursorFromTextarea(event.currentTarget);
                      }}
                      onSelect={(event) => {
                        updateCursorFromTextarea(event.currentTarget);
                      }}
                      onPaste={(event) => {
                        event.preventDefault();
                        setPasteNotice('Pegar esta bloqueado. Escribe tu respuesta con tus palabras.');
                      }}
                      onDrop={(event) => {
                        event.preventDefault();
                        setPasteNotice('Arrastrar tambien esta bloqueado.');
                      }}
                      placeholder={activeStage.exercise.placeholder}
                    />
                  </div>
                ) : (
                  <div className="code-editor-shell">
                    <div className="code-editor__meta">
                      <span>{editorLineCount} lineas</span>
                      <span>
                        Linea {editorCursor.line}, columna {editorCursor.column}
                      </span>
                    </div>

                    <div className="code-editor__frame">
                      <div ref={gutterRef} className="code-editor__gutter" aria-hidden>
                        {Array.from({ length: editorLineCount }, (_, index) => (
                          <span
                            key={index + 1}
                            style={{
                              height: `${logicalLineHeights[index] ?? 24}px`,
                            }}
                          >
                            {index + 1}
                          </span>
                        ))}
                      </div>

                      <textarea
                        ref={textareaRef}
                        className="code-editor"
                        spellCheck={false}
                        value={activeDraft}
                        onChange={(event) => {
                          setFeedback(null);
                          setConsoleOutput([]);
                          setConsoleError(null);
                          updateCursorFromTextarea(event.target);
                          onChangeDraft(activeLesson.id, activeStage.exercise.id, event.target.value);
                        }}
                        onClick={(event) => {
                          updateCursorFromTextarea(event.currentTarget);
                        }}
                        onKeyUp={(event) => {
                          updateCursorFromTextarea(event.currentTarget);
                        }}
                        onSelect={(event) => {
                          updateCursorFromTextarea(event.currentTarget);
                        }}
                        onScroll={(event) => {
                          syncGutterScroll(event.currentTarget.scrollTop);
                        }}
                        onPaste={(event) => {
                          event.preventDefault();
                          setPasteNotice('Pegar esta bloqueado. Solo teclado.');
                        }}
                        onDrop={(event) => {
                          event.preventDefault();
                          setPasteNotice('Arrastrar tambien esta bloqueado.');
                        }}
                        placeholder={activeStage.exercise.placeholder}
                      />
                    </div>

                    <div className="code-editor__measure" aria-hidden>
                      <div
                        className="code-editor__measure-content"
                        style={{
                          width: editorWidth > 0 ? `${editorWidth}px` : undefined,
                        }}
                      >
                        {logicalLines.map((line, index) => (
                          <div
                            key={`${index}-${line}`}
                            ref={(element) => {
                              lineMeasureRefs.current[index] = element;
                            }}
                            className="code-editor__measure-line"
                          >
                            {line || ' '}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="console-card">
                      <div className="console-card__label">Consola</div>
                      {consoleError ? (
                        <p className="console-card__error">{consoleError}</p>
                      ) : consoleOutput.length > 0 ? (
                        <pre className="console-card__output">
                          {consoleOutput.join('\n')}
                        </pre>
                      ) : (
                        <p className="console-card__empty">
                          {activeExerciseExpectsConsole
                            ? 'Este ejercicio espera una salida visible. Revisa que exista la variable, funcion o clase necesaria y que termines mostrando algo en consola.'
                            : 'Aun no hay salida. Usa `console.log(...)` si quieres ver resultado.'}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : null}
          </article>

          {pasteNotice ? <p className="feedback feedback--warning">{pasteNotice}</p> : null}
          {feedback ? (
            <p className={`feedback ${feedback.tone === 'error' ? 'feedback--error' : ''}`}>
              {feedback.text}
            </p>
          ) : null}

          <footer className="lesson-frame__actions">
            <button
              className="button button--secondary"
              disabled={activeStageIndex === 0 || isReviewing}
              onClick={() => goToStage(activeStageIndex - 1)}
            >
              Izquierda
            </button>

            <div className="lesson-frame__actions-meta">
              <strong>{activeLesson.title}</strong>
              <span>
                {activeExercise
                  ? activeExerciseValidated
                    ? 'ejercicio validado'
                    : activeExerciseIsText
                      ? 'primero revisa tu respuesta'
                      : 'primero revisa este ejercicio'
                  : `${completedLessons}/${lessons.length} lecciones completadas`}
              </span>
            </div>

            <button
              className="button button--primary"
              disabled={isReviewing}
              onClick={() => {
                void handlePrimaryAction();
              }}
            >
              {activeExercise
                ? isReviewing
                  ? 'Revisando...'
                  : activeExerciseValidated
                    ? isLastStage
                      ? 'Completar'
                      : 'Derecha'
                    : 'Revisar'
                : isLastStage
                  ? 'Completar'
                  : 'Derecha'}
            </button>
          </footer>

          <div className="lesson-frame__bottom">
            <button
              className="button button--ghost button--full"
              onClick={handleResetProgress}
            >
              Reiniciar progreso
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default UnitPage;
