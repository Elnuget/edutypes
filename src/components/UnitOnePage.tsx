import { useEffect, useMemo, useState } from 'react';
import type { LessonExercise, LessonContentBlock, UnitLesson } from '../data/unit-one';
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

function normalizeCode(value: string) {
  return value.toLowerCase().replace(/\s+/g, ' ').trim();
}

function validateExercise(exercise: LessonExercise, value: string) {
  const normalized = normalizeCode(value);

  if (value.trim().length < exercise.minLength) {
    return `Escribe mas codigo en "${exercise.title}".`;
  }

  for (const check of exercise.checks) {
    if (!normalized.includes(check)) {
      return `Falta una parte clave en "${exercise.title}": ${check}`;
    }
  }

  return null;
}

function buildLessonStages(lesson: UnitLesson): LessonStage[] {
  const introStage: LessonStage = {
    id: `${lesson.id}-intro`,
    kind: 'intro',
    label: 'Inicio',
    title: lesson.title,
    body: [lesson.summary, lesson.goal],
  };

  const contentStages: LessonStage[] = lesson.content.map(
    (block: LessonContentBlock, index) => ({
      id: `${lesson.id}-content-${index}`,
      kind: 'content',
      label: `Bloque ${index + 1}`,
      title: block.title,
      body: block.body,
      code: block.code,
    }),
  );

  const exerciseStages: LessonStage[] = lesson.exercises.map((exercise, index) => ({
    id: `${lesson.id}-exercise-${index}`,
    kind: 'exercise',
    label: `Practica ${index + 1}`,
    exercise,
  }));

  return [introStage, ...contentStages, ...exerciseStages];
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
}: UnitOnePageProps) {
  const [feedback, setFeedback] = useState<string | null>(null);
  const [pasteNotice, setPasteNotice] = useState<string | null>(null);

  const activeLesson =
    lessons.find((lesson) => lesson.id === progress.activeLessonId) ?? lessons[0];
  const stages = useMemo(() => buildLessonStages(activeLesson), [activeLesson]);
  const savedStageIndex = progress.stageIndexes[activeLesson.id] ?? 0;
  const activeStageIndex = Math.min(savedStageIndex, stages.length - 1);
  const activeStage = stages[activeStageIndex];
  const completedLessons = getCompletedLessonsCount(lessons, progress);
  const nextLesson = getNextLesson(lessons, activeLesson.id);
  const isLastStage = activeStageIndex === stages.length - 1;

  useEffect(() => {
    setPasteNotice(null);
    setFeedback(null);
  }, [activeLesson.id, activeStageIndex]);

  const goToStage = (index: number) => {
    const boundedIndex = Math.max(0, Math.min(index, stages.length - 1));
    onSetLessonStage(activeLesson.id, boundedIndex);
  };

  const handlePrimaryAction = () => {
    if (!isLastStage) {
      goToStage(activeStageIndex + 1);
      return;
    }

    for (const exercise of activeLesson.exercises) {
      const draft = progress.drafts[activeLesson.id]?.[exercise.id] ?? '';
      const error = validateExercise(exercise, draft);

      if (error) {
        setFeedback(error);
        return;
      }
    }

    onCompleteLesson(activeLesson.id);

    if (nextLesson) {
      setFeedback(`Leccion completada. Sigue con ${nextLesson.title}.`);
      return;
    }

    setFeedback('Unidad 1 completada.');
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
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ) : null}

            {activeStage.kind === 'content' ? (
              <div className="stage-card__content">
                <h1>{activeStage.title}</h1>
                {activeStage.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {activeStage.code ? <pre>{activeStage.code}</pre> : null}
              </div>
            ) : null}

            {activeStage.kind === 'exercise' ? (
              <div className="stage-card__content stage-card__content--exercise">
                <h1>{activeStage.exercise.title}</h1>

                <ul className="exercise-card__instructions">
                  {activeStage.exercise.instructions.map((instruction) => (
                    <li key={instruction}>{instruction}</li>
                  ))}
                </ul>

                <textarea
                  className="code-editor"
                  spellCheck={false}
                  value={progress.drafts[activeLesson.id]?.[activeStage.exercise.id] ?? ''}
                  onChange={(event) => {
                    setFeedback(null);
                    onChangeDraft(activeLesson.id, activeStage.exercise.id, event.target.value);
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
            ) : null}
          </article>

          {pasteNotice ? <p className="feedback feedback--warning">{pasteNotice}</p> : null}
          {feedback ? <p className="feedback">{feedback}</p> : null}

          <footer className="lesson-frame__actions">
            <button
              className="button button--secondary"
              disabled={activeStageIndex === 0}
              onClick={() => goToStage(activeStageIndex - 1)}
            >
              Izquierda
            </button>

            <div className="lesson-frame__actions-meta">
              <strong>{activeLesson.title}</strong>
              <span>{completedLessons}/{lessons.length} lecciones completadas</span>
            </div>

            <button className="button button--primary" onClick={handlePrimaryAction}>
              {isLastStage ? 'Completar' : 'Derecha'}
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
