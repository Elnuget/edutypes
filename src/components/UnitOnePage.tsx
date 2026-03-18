import { useEffect, useState } from 'react';
import type { LessonExercise, UnitLesson } from '../data/unit-one';
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

function UnitOnePage({
  lessons,
  progress,
  onBack,
  onChangeDraft,
  onCompleteLesson,
  onResetProgress,
  onSelectLesson,
}: UnitOnePageProps) {
  const [feedback, setFeedback] = useState<string | null>(null);
  const [pasteNotice, setPasteNotice] = useState<string | null>(null);

  const activeLesson =
    lessons.find((lesson) => lesson.id === progress.activeLessonId) ?? lessons[0];
  const completedLessons = getCompletedLessonsCount(lessons, progress);
  const nextLesson = getNextLesson(lessons, activeLesson.id);

  useEffect(() => {
    setPasteNotice(null);
  }, [activeLesson.id]);

  const handleCompleteLesson = () => {
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
      setFeedback(
        `Leccion completada. Se desbloqueo ${nextLesson.step}. ${nextLesson.title}.`,
      );
      return;
    }

    setFeedback('Unidad 1 completada. Ya cubriste toda la base practica inicial.');
  };

  return (
    <div className="page-shell">
      <header className="lesson-hero">
        <nav className="topbar">
          <button className="button button--ghost" onClick={onBack}>
            Volver al mapa
          </button>
          <span className="tag">Unidad 1 en progreso</span>
        </nav>

        <div className="lesson-hero__grid">
          <div className="lesson-hero__copy">
            <p className="eyebrow">Unidad 1</p>
            <h1>Fundamentos del lenguaje</h1>
            <p className="hero__description">
              Esta unidad se estudia en orden. Cada leccion tiene contenido breve
              y una practica escrita que debe resolverse tecleando codigo.
            </p>
          </div>

          <div className="lesson-hero__stats">
            <div className="stat-card">
              <strong>{completedLessons}</strong>
              <span>lecciones completadas</span>
            </div>
            <div className="stat-card">
              <strong>{lessons.length - completedLessons}</strong>
              <span>lecciones pendientes</span>
            </div>
            <div className="stat-card">
              <strong>localStorage</strong>
              <span>progreso persistente</span>
            </div>
          </div>
        </div>
      </header>

      <main className="lesson-layout">
        <aside className="lesson-sidebar">
          <div className="sidebar-card">
            <p className="eyebrow">Secuencia</p>
            <div className="lesson-list">
              {lessons.map((lesson) => {
                const unlocked = isLessonUnlocked(lessons, progress, lesson.id);
                const completed = isLessonCompleted(progress, lesson.id);
                const active = lesson.id === activeLesson.id;

                return (
                  <button
                    key={lesson.id}
                    className={`lesson-list__item ${
                      active ? 'lesson-list__item--active' : ''
                    }`}
                    disabled={!unlocked}
                    onClick={() => onSelectLesson(lesson.id)}
                  >
                    <span className="lesson-list__step">{lesson.step}</span>
                    <span className="lesson-list__body">
                      <strong>{lesson.title}</strong>
                      <small>
                        {completed ? 'Completada' : unlocked ? 'Disponible' : 'Bloqueada'}
                      </small>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="sidebar-card">
            <p className="eyebrow">Reglas</p>
            <ul className="rules-list">
              <li>Lee el contenido antes de escribir.</li>
              <li>No se permite pegar codigo en la leccion.</li>
              <li>La siguiente leccion se abre solo al completar la actual.</li>
            </ul>
            <button className="button button--secondary button--full" onClick={onResetProgress}>
              Reiniciar progreso de la unidad
            </button>
          </div>
        </aside>

        <section className="lesson-main">
          <article className="lesson-card">
            <div className="lesson-card__header">
              <span className="unit-card__number">Leccion {activeLesson.step}</span>
              <h2>{activeLesson.title}</h2>
              <p>{activeLesson.summary}</p>
            </div>

            <div className="lesson-goal">
              <strong>Objetivo practico</strong>
              <p>{activeLesson.goal}</p>
            </div>

            <div className="lesson-content">
              <div className="content-heading">
                <p className="eyebrow">Contenido</p>
                <h3>Explicacion breve antes de escribir codigo</h3>
              </div>

              {activeLesson.content.map((block) => (
                <article className="content-block" key={block.title}>
                  <h4>{block.title}</h4>
                  {block.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {block.code ? <pre>{block.code}</pre> : null}
                </article>
              ))}
            </div>
          </article>

          <article className="practice-card">
            <div className="content-heading">
              <p className="eyebrow">Leccion escrita</p>
              <h3>Resuelve escribiendo codigo a mano</h3>
            </div>

            <p className="practice-note">
              El editor bloquea pegar contenido. La idea es que el estudiante
              escriba y piense cada tipo, parametro y estructura.
            </p>

            {activeLesson.exercises.map((exercise) => (
              <article className="exercise-card" key={exercise.id}>
                <div className="exercise-card__header">
                  <strong>{exercise.title}</strong>
                  <span>Minimo {exercise.minLength} caracteres</span>
                </div>

                <ul className="exercise-card__instructions">
                  {exercise.instructions.map((instruction) => (
                    <li key={instruction}>{instruction}</li>
                  ))}
                </ul>

                <textarea
                  className="code-editor"
                  spellCheck={false}
                  value={progress.drafts[activeLesson.id]?.[exercise.id] ?? ''}
                  onChange={(event) => {
                    setFeedback(null);
                    onChangeDraft(activeLesson.id, exercise.id, event.target.value);
                  }}
                  onPaste={(event) => {
                    event.preventDefault();
                    setPasteNotice('Pegar esta desactivado. Esta leccion se resuelve solo con teclado.');
                  }}
                  onDrop={(event) => {
                    event.preventDefault();
                    setPasteNotice('Arrastrar texto o archivos tambien esta bloqueado.');
                  }}
                  placeholder={exercise.placeholder}
                />
              </article>
            ))}

            {pasteNotice ? <p className="feedback feedback--warning">{pasteNotice}</p> : null}
            {feedback ? <p className="feedback">{feedback}</p> : null}

            <div className="practice-card__actions">
              <button className="button button--primary" onClick={handleCompleteLesson}>
                {isLessonCompleted(progress, activeLesson.id)
                  ? 'Revisar nuevamente'
                  : 'Completar y desbloquear'}
              </button>

              {nextLesson ? (
                <span className="practice-card__next">
                  Siguiente: {nextLesson.step}. {nextLesson.title}
                </span>
              ) : (
                <span className="practice-card__next">Esta es la ultima leccion de la unidad.</span>
              )}
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default UnitOnePage;
