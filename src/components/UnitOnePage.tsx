import { useEffect, useMemo, useRef, useState } from 'react';
import type {
  LessonExercise,
  LessonContentBlock,
  UnitLesson,
} from '../data/unit-one';
import { validateExerciseWithCompiler } from '../lib/exercise-validator';
import {
  getCompletedLessonsCount,
  getNextLesson,
  isLessonCompleted,
  isLessonUnlocked,
  type UnitProgress,
} from '../lib/unit-progress';

type UnitOnePageProps = {
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

function UnitOnePage({
  lessons,
  progress,
  onBack,
  onChangeDraft,
  onCompleteLesson,
  onResetProgress,
  onSelectLesson,
  onSetLessonStage,
  onSetExerciseValidated,
}: UnitOnePageProps) {
  const [feedback, setFeedback] = useState<{
    tone: 'success' | 'error';
    text: string;
  } | null>(null);
  const [pasteNotice, setPasteNotice] = useState<string | null>(null);
  const [isReviewing, setIsReviewing] = useState(false);
  const [editorCursor, setEditorCursor] = useState({ line: 1, column: 1 });
  const [editorWidth, setEditorWidth] = useState(0);
  const [logicalLineHeights, setLogicalLineHeights] = useState<number[]>([]);
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
  const nextLesson = getNextLesson(lessons, activeLesson.id);
  const isLastStage = activeStageIndex === stages.length - 1;
  const activeExercise =
    activeStage.kind === 'exercise' ? activeStage.exercise : null;
  const activeExerciseValidated = activeExercise
    ? progress.validatedExercises[activeLesson.id]?.[activeExercise.id] === true
    : false;
  const activeDraft = activeExercise
    ? progress.drafts[activeLesson.id]?.[activeExercise.id] ?? ''
    : '';
  const logicalLines = useMemo(() => {
    const lines = activeDraft.split('\n');
    return lines.length > 0 ? lines : [''];
  }, [activeDraft]);
  const editorLineCount = Math.max(6, logicalLines.length);

  useEffect(() => {
    setPasteNotice(null);
    setFeedback(null);
    setEditorCursor({ line: 1, column: 1 });
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
        setFeedback({
          tone: 'error',
          text: 'No pude revisar tu ejercicio con el compilador en este intento.',
        });
        return;
      }

      setIsReviewing(false);

      if (!result.ok) {
        onSetExerciseValidated(activeLesson.id, activeExercise.id, false);

        const parts: string[] = [];

        parts.push(
          result.compilerOk
            ? 'Compilacion TypeScript: correcta.'
            : `Compilacion TypeScript: incorrecta. ${result.compilerErrors.join(' ')}`,
        );

        if (result.ruleErrors.length > 0) {
          parts.push(`Objetivo del ejercicio: ${result.ruleErrors.join(' ')}`);
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
        text: `Compilacion TypeScript: correcta. Objetivo del ejercicio: cumplido. Detecte: ${result.successes.join(', ')}.`,
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
        text: `Leccion completada. Sigue con ${nextLesson.title}.`,
      });
      return;
    }

    setFeedback({
      tone: 'success',
      text: 'Unidad 1 completada.',
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
              <span className="tag">Unidad 1</span>
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
                </div>
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
            <button className="button button--ghost button--full" onClick={onResetProgress}>
              Reiniciar progreso
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default UnitOnePage;
