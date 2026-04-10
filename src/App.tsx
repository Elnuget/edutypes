import { useEffect, useMemo, useState } from 'react';
import CourseCatalogPage from './components/CourseCatalogPage';
import HomePage from './components/HomePage';
import UnitPage from './components/UnitPage';
import { courses, getCourseDefinition, getCourseUnit } from './data/course';
import type { CourseDefinition, CourseUnitDefinition } from './data/course';
import type { UnitLesson } from './data/unit-types';
import { downloadCourseCertificate } from './lib/certificate';
import {
  createInitialProgress,
  getCompletedLessonsCount,
  isLessonUnlocked,
  readUnitProgress,
  saveUnitProgress,
  type UnitProgress,
} from './lib/unit-progress';

type Route =
  | { kind: 'catalog' }
  | { kind: 'course'; courseId: string }
  | { kind: 'unit'; courseId: string; unitSlug: string };

type ProgressByUnit = Record<string, UnitProgress>;

type CourseUnitState = {
  definition: CourseUnitDefinition;
  progress: UnitProgress;
  completedLessons: number;
  totalLessons: number;
  completed: boolean;
  unlocked: boolean;
  lockedReason: string;
};

const allUnits = courses.flatMap((course) => course.units);

function getRouteFromHash(): Route {
  const segments = window.location.hash.replace(/^#/, '').split('/').filter(Boolean);

  if (segments[0] !== 'curso') {
    return { kind: 'catalog' };
  }

  const courseId = segments[1];

  if (!courseId || !getCourseDefinition(courseId)) {
    return { kind: 'catalog' };
  }

  if (segments.length === 2) {
    return { kind: 'course', courseId };
  }

  const unitSlug = segments[2];

  if (unitSlug && getCourseUnit(courseId, unitSlug)) {
    return { kind: 'unit', courseId, unitSlug };
  }

  return { kind: 'catalog' };
}

function buildInitialProgressState() {
  return Object.fromEntries(
    allUnits.map((unit) => [unit.id, readUnitProgress(unit.storageKey, unit.lessons)]),
  ) as ProgressByUnit;
}

function hasStartedUnit(progress: UnitProgress) {
  return (
    progress.completedLessonIds.length > 0 ||
    Object.keys(progress.drafts).length > 0 ||
    Object.keys(progress.stageIndexes).length > 0 ||
    Object.keys(progress.validatedExercises).length > 0
  );
}

function getCourseUnitStates(course: CourseDefinition, progressByUnit: ProgressByUnit): CourseUnitState[] {
  let previousCompleted = true;

  return course.units.map((unit, index) => {
    const progress =
      progressByUnit[unit.id] ?? createInitialProgress(unit.lessons[0].id);
    const completedLessons = getCompletedLessonsCount(unit.lessons, progress);
    const totalLessons = unit.lessons.length;
    const completed = completedLessons === totalLessons;
    const unlocked = index === 0 ? true : previousCompleted;
    const previousLabel = index > 0 ? course.units[index - 1].label : course.units[0].label;
    const lockedReason = `Se desbloquea al completar ${previousLabel}`;

    previousCompleted = completed;

    return {
      definition: unit,
      progress,
      completedLessons,
      totalLessons,
      completed,
      unlocked,
      lockedReason,
    };
  });
}

function App() {
  const [route, setRoute] = useState<Route>(getRouteFromHash);
  const [progressByUnit, setProgressByUnit] = useState<ProgressByUnit>(buildInitialProgressState);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRouteFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [route]);

  useEffect(() => {
    allUnits.forEach((unit) => {
      const progress = progressByUnit[unit.id];
      if (progress) {
        saveUnitProgress(unit.storageKey, progress);
      }
    });
  }, [progressByUnit]);

  const currentCourse =
    route.kind === 'catalog' ? null : getCourseDefinition(route.courseId);
  const currentUnit =
    route.kind === 'unit' ? getCourseUnit(route.courseId, route.unitSlug) : null;
  const currentCourseUnitStates = useMemo(
    () => (currentCourse ? getCourseUnitStates(currentCourse, progressByUnit) : []),
    [currentCourse, progressByUnit],
  );

  const goToCatalog = () => {
    window.location.hash = '';
  };

  const goToCourse = (courseId: string) => {
    window.location.hash = `curso/${courseId}`;
  };

  const goToUnit = (courseId: string, unitSlug: string) => {
    window.location.hash = `curso/${courseId}/${unitSlug}`;
  };

  const updateUnitProgress = (
    unitId: string,
    updater: (current: UnitProgress) => UnitProgress,
  ) => {
    setProgressByUnit((current) => {
      const unitDefinition = allUnits.find((unit) => unit.id === unitId);
      if (!unitDefinition) {
        return current;
      }

      const unitProgress = current[unitId] ?? createInitialProgress(unitDefinition.lessons[0].id);

      return {
        ...current,
        [unitId]: updater(unitProgress),
      };
    });
  };

  const updateExerciseDraft = (
    unitId: string,
    lessonId: string,
    exerciseId: string,
    value: string,
  ) => {
    updateUnitProgress(unitId, (current) => ({
      ...current,
      activeLessonId: lessonId,
      drafts: {
        ...current.drafts,
        [lessonId]: {
          ...current.drafts[lessonId],
          [exerciseId]: value,
        },
      },
      validatedExercises: {
        ...current.validatedExercises,
        [lessonId]: {
          ...current.validatedExercises[lessonId],
          [exerciseId]: false,
        },
      },
    }));
  };

  const selectLesson = (
    unitId: string,
    lessons: UnitLesson[],
    progress: UnitProgress,
    lessonId: string,
  ) => {
    if (!isLessonUnlocked(lessons, progress, lessonId)) {
      return;
    }

    updateUnitProgress(unitId, (current) => ({
      ...current,
      activeLessonId: lessonId,
    }));
  };

  const setLessonStage = (unitId: string, lessonId: string, stageIndex: number) => {
    updateUnitProgress(unitId, (current) => ({
      ...current,
      activeLessonId: lessonId,
      stageIndexes: {
        ...current.stageIndexes,
        [lessonId]: stageIndex,
      },
    }));
  };

  const setExerciseValidated = (
    unitId: string,
    lessonId: string,
    exerciseId: string,
    validated: boolean,
  ) => {
    updateUnitProgress(unitId, (current) => ({
      ...current,
      validatedExercises: {
        ...current.validatedExercises,
        [lessonId]: {
          ...current.validatedExercises[lessonId],
          [exerciseId]: validated,
        },
      },
    }));
  };

  const completeLesson = (
    unitId: string,
    lessons: UnitLesson[],
    lessonId: string,
  ) => {
    const lessonIndex = lessons.findIndex((lesson) => lesson.id === lessonId);
    const nextLesson = lessons[lessonIndex + 1];

    updateUnitProgress(unitId, (current) => {
      const completedLessonIds = current.completedLessonIds.includes(lessonId)
        ? current.completedLessonIds
        : [...current.completedLessonIds, lessonId];

      return {
        ...current,
        completedLessonIds,
        stageIndexes: {
          ...current.stageIndexes,
          [lessonId]: current.stageIndexes[lessonId] ?? 0,
          ...(nextLesson ? { [nextLesson.id]: 0 } : {}),
        },
        activeLessonId: nextLesson?.id ?? lessonId,
      };
    });
  };

  const resetUnitProgress = (unitId: string, firstLessonId: string) => {
    setProgressByUnit((current) => ({
      ...current,
      [unitId]: createInitialProgress(firstLessonId),
    }));
  };

  const catalogItems = courses.map((course) => {
    const unitStates = getCourseUnitStates(course, progressByUnit);
    const completedUnits = unitStates.filter((unit) => unit.completed).length;
    const started = unitStates.some((unit) => hasStartedUnit(unit.progress));

    return {
      id: course.id,
      title: course.title,
      eyebrow: course.eyebrow,
      description: course.description,
      progressLabel: `${completedUnits}/${course.units.length} unidades`,
      actionLabel:
        completedUnits === course.units.length
          ? 'Revisar curso'
          : started
            ? 'Continuar curso'
            : 'Abrir curso',
      totalUnits: course.units.length,
      completedUnits,
    };
  });

  if (route.kind === 'unit' && (!currentCourse || !currentUnit)) {
    window.location.hash = '';
    return null;
  }

  if (route.kind === 'unit' && currentCourse && currentUnit) {
    const unitState = currentCourseUnitStates.find(
      (entry) => entry.definition.id === currentUnit.id,
    );

    if (!unitState || !unitState.unlocked) {
      goToCourse(currentCourse.id);
      return null;
    }

    return (
      <UnitPage
        unitLabel={currentUnit.label}
        validationLabel={currentCourse.validationLabel}
        lessons={currentUnit.lessons}
        progress={unitState.progress}
        onBack={() => goToCourse(currentCourse.id)}
        onChangeDraft={(lessonId, exerciseId, value) =>
          updateExerciseDraft(currentUnit.id, lessonId, exerciseId, value)
        }
        onCompleteLesson={(lessonId) =>
          completeLesson(currentUnit.id, currentUnit.lessons, lessonId)
        }
        onResetProgress={() => resetUnitProgress(currentUnit.id, currentUnit.lessons[0].id)}
        onSelectLesson={(lessonId) =>
          selectLesson(currentUnit.id, currentUnit.lessons, unitState.progress, lessonId)
        }
        onSetLessonStage={(lessonId, stageIndex) =>
          setLessonStage(currentUnit.id, lessonId, stageIndex)
        }
        onSetExerciseValidated={(lessonId, exerciseId, validated) =>
          setExerciseValidated(currentUnit.id, lessonId, exerciseId, validated)
        }
      />
    );
  }

  if (route.kind === 'course' && currentCourse) {
    const completedUnits = currentCourseUnitStates.filter((unit) => unit.completed).length;
    const certificateReady = completedUnits === currentCourse.units.length;

    return (
      <HomePage
        courseId={currentCourse.id}
        courseTitle={currentCourse.title}
        courseEyebrow={currentCourse.eyebrow}
        heroTitle={currentCourse.heroTitle}
        description={currentCourse.description}
        tags={currentCourse.tags}
        progressLabel={`${completedUnits}/${currentCourse.units.length} unidades completas`}
        units={currentCourseUnitStates.map((unit) => ({
          id: unit.definition.id,
          label: unit.definition.label,
          title: unit.definition.title,
          focus: unit.definition.focus,
          completedLessons: unit.completedLessons,
          totalLessons: unit.totalLessons,
          completed: unit.completed,
          unlocked: unit.unlocked,
          lockedReason: unit.lockedReason,
        }))}
        certificate={
          currentCourse.certificate
            ? {
                ready: certificateReady,
                storageKey: currentCourse.certificate.storageKey,
                institutionName: currentCourse.certificate.institutionName,
                issuerName: currentCourse.certificate.issuerName,
                issuerRole: currentCourse.certificate.issuerRole,
                onDownload: async (studentName: string) => {
                  await downloadCourseCertificate({
                    studentName,
                    courseTitle: currentCourse.title,
                    unitTitle: currentCourse.units[0]?.title ?? 'unidad completada',
                    institutionName: currentCourse.certificate?.institutionName ?? 'UDLA',
                    issuerName: currentCourse.certificate?.issuerName ?? 'Paola Guevara',
                    issuerRole: currentCourse.certificate?.issuerRole ?? 'Ing.',
                    logoSrc: currentCourse.certificate?.logoSrc,
                  });
                },
              }
            : undefined
        }
        onBack={goToCatalog}
        onOpenUnit={(unitId) => {
          const selectedUnit = currentCourse.units.find((unit) => unit.id === unitId);
          if (selectedUnit) {
            goToUnit(currentCourse.id, selectedUnit.slug);
          }
        }}
      />
    );
  }

  return <CourseCatalogPage courses={catalogItems} onOpenCourse={goToCourse} />;
}

export default App;
