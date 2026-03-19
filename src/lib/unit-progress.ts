import type { UnitLesson } from '../data/unit-one';

export type UnitProgress = {
  activeLessonId: string;
  completedLessonIds: string[];
  drafts: Record<string, Record<string, string>>;
  stageIndexes: Record<string, number>;
  validatedExercises: Record<string, Record<string, boolean>>;
};

const UNIT_ONE_STORAGE_KEY = 'edutypes.unit-01.progress';

export function createInitialProgress(firstLessonId: string): UnitProgress {
  return {
    activeLessonId: firstLessonId,
    completedLessonIds: [],
    drafts: {},
    stageIndexes: {},
    validatedExercises: {},
  };
}

function normalizeProgress(
  lessons: UnitLesson[],
  value: Partial<UnitProgress> | null | undefined,
): UnitProgress {
  const initial = createInitialProgress(lessons[0].id);

  if (!value) {
    return initial;
  }

  const requestedCompletedLessonIds = Array.isArray(value.completedLessonIds)
    ? value.completedLessonIds.filter((lessonId): lessonId is string =>
        lessons.some((lesson) => lesson.id === lessonId),
      )
    : [];

  const requestedCompletedSet = new Set(requestedCompletedLessonIds);
  const completedLessonIds: string[] = [];

  for (const lesson of lessons) {
    if (!requestedCompletedSet.has(lesson.id)) {
      break;
    }

    completedLessonIds.push(lesson.id);
  }

  const maxUnlockedIndex = Math.min(completedLessonIds.length, lessons.length - 1);
  const fallbackActiveLessonId = lessons[maxUnlockedIndex].id;
  const allowedLessonIds = new Set(
    lessons.slice(0, maxUnlockedIndex + 1).map((lesson) => lesson.id),
  );
  const activeLessonId =
    typeof value.activeLessonId === 'string' && allowedLessonIds.has(value.activeLessonId)
      ? value.activeLessonId
      : fallbackActiveLessonId;

  const drafts =
    value.drafts && typeof value.drafts === 'object' ? value.drafts : initial.drafts;
  const stageIndexes =
    value.stageIndexes && typeof value.stageIndexes === 'object'
      ? value.stageIndexes
      : initial.stageIndexes;
  const validatedExercises =
    value.validatedExercises && typeof value.validatedExercises === 'object'
      ? value.validatedExercises
      : initial.validatedExercises;

  return {
    activeLessonId,
    completedLessonIds,
    drafts,
    stageIndexes,
    validatedExercises,
  };
}

export function readUnitProgress(lessons: UnitLesson[]): UnitProgress {
  if (typeof window === 'undefined') {
    return createInitialProgress(lessons[0].id);
  }

  const raw = window.localStorage.getItem(UNIT_ONE_STORAGE_KEY);

  if (!raw) {
    return createInitialProgress(lessons[0].id);
  }

  try {
    return normalizeProgress(lessons, JSON.parse(raw) as Partial<UnitProgress>);
  } catch {
    return createInitialProgress(lessons[0].id);
  }
}

export function saveUnitProgress(progress: UnitProgress) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(UNIT_ONE_STORAGE_KEY, JSON.stringify(progress));
}

export function isLessonCompleted(progress: UnitProgress, lessonId: string) {
  return progress.completedLessonIds.includes(lessonId);
}

export function isLessonUnlocked(
  lessons: UnitLesson[],
  progress: UnitProgress,
  lessonId: string,
) {
  const lessonIndex = lessons.findIndex((lesson) => lesson.id === lessonId);

  if (lessonIndex <= 0) {
    return true;
  }

  return isLessonCompleted(progress, lessons[lessonIndex - 1].id);
}

export function getCompletedLessonsCount(
  lessons: UnitLesson[],
  progress: UnitProgress,
) {
  return lessons.filter((lesson) => isLessonCompleted(progress, lesson.id)).length;
}

export function getNextLesson(lessons: UnitLesson[], lessonId: string) {
  const lessonIndex = lessons.findIndex((lesson) => lesson.id === lessonId);

  if (lessonIndex === -1) {
    return null;
  }

  return lessons[lessonIndex + 1] ?? null;
}
