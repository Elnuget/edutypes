import { useEffect, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import HomePage from './components/HomePage';
import UnitOnePage from './components/UnitOnePage';
import { unitOneLessons } from './data/unit-one';
import { unitTwoLessons } from './data/unit-two';
import type { UnitLesson } from './data/unit-types';
import {
  createInitialProgress,
  getCompletedLessonsCount,
  isLessonUnlocked,
  readUnitProgress,
  saveUnitProgress,
  type UnitProgress,
} from './lib/unit-progress';

type Route = 'home' | 'unit-01' | 'unit-02';

const UNIT_ONE_STORAGE_KEY = 'edutypes.unit-01.progress';
const UNIT_TWO_STORAGE_KEY = 'edutypes.unit-02.progress';

function getRouteFromHash(): Route {
  if (window.location.hash === '#unidad-1') {
    return 'unit-01';
  }

  if (window.location.hash === '#unidad-2') {
    return 'unit-02';
  }

  return 'home';
}

function App() {
  const [route, setRoute] = useState<Route>(getRouteFromHash);
  const [unitOneProgress, setUnitOneProgress] = useState<UnitProgress>(() =>
    readUnitProgress(UNIT_ONE_STORAGE_KEY, unitOneLessons),
  );
  const [unitTwoProgress, setUnitTwoProgress] = useState<UnitProgress>(() =>
    readUnitProgress(UNIT_TWO_STORAGE_KEY, unitTwoLessons),
  );

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
    saveUnitProgress(UNIT_ONE_STORAGE_KEY, unitOneProgress);
  }, [unitOneProgress]);

  useEffect(() => {
    saveUnitProgress(UNIT_TWO_STORAGE_KEY, unitTwoProgress);
  }, [unitTwoProgress]);

  const goToHome = () => {
    window.location.hash = '';
  };

  const goToUnitOne = () => {
    window.location.hash = 'unidad-1';
  };

  const goToUnitTwo = () => {
    window.location.hash = 'unidad-2';
  };

  const updateExerciseDraft = (
    setProgress: Dispatch<SetStateAction<UnitProgress>>,
    lessonId: string,
    exerciseId: string,
    value: string,
  ) => {
    setProgress((current) => ({
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
    lessons: UnitLesson[],
    progress: UnitProgress,
    setProgress: Dispatch<SetStateAction<UnitProgress>>,
    lessonId: string,
  ) => {
    if (!isLessonUnlocked(lessons, progress, lessonId)) {
      return;
    }

    setProgress((current) => ({
      ...current,
      activeLessonId: lessonId,
    }));
  };

  const setLessonStage = (
    setProgress: Dispatch<SetStateAction<UnitProgress>>,
    lessonId: string,
    stageIndex: number,
  ) => {
    setProgress((current) => ({
      ...current,
      activeLessonId: lessonId,
      stageIndexes: {
        ...current.stageIndexes,
        [lessonId]: stageIndex,
      },
    }));
  };

  const setExerciseValidated = (
    setProgress: Dispatch<SetStateAction<UnitProgress>>,
    lessonId: string,
    exerciseId: string,
    validated: boolean,
  ) => {
    setProgress((current) => ({
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
    lessons: UnitLesson[],
    setProgress: Dispatch<SetStateAction<UnitProgress>>,
    lessonId: string,
  ) => {
    const lessonIndex = lessons.findIndex((lesson) => lesson.id === lessonId);
    const nextLesson = lessons[lessonIndex + 1];

    setProgress((current) => {
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

  const resetUnitOneProgress = () => {
    setUnitOneProgress(createInitialProgress(unitOneLessons[0].id));
  };

  const resetUnitTwoProgress = () => {
    setUnitTwoProgress(createInitialProgress(unitTwoLessons[0].id));
  };

  const unitOneCompletedLessons = getCompletedLessonsCount(unitOneLessons, unitOneProgress);
  const unitTwoCompletedLessons = getCompletedLessonsCount(unitTwoLessons, unitTwoProgress);
  const unitOneCompleted = unitOneCompletedLessons === unitOneLessons.length;
  const unitTwoUnlocked = unitOneCompleted;

  if (route === 'unit-02' && !unitTwoUnlocked) {
    window.location.hash = '';
    return null;
  }

  if (route === 'unit-01') {
    return (
      <UnitOnePage
        unitLabel="Unidad 1"
        lessons={unitOneLessons}
        progress={unitOneProgress}
        onBack={goToHome}
        onChangeDraft={(lessonId, exerciseId, value) =>
          updateExerciseDraft(setUnitOneProgress, lessonId, exerciseId, value)
        }
        onCompleteLesson={(lessonId) =>
          completeLesson(unitOneLessons, setUnitOneProgress, lessonId)
        }
        onResetProgress={resetUnitOneProgress}
        onSelectLesson={(lessonId) =>
          selectLesson(unitOneLessons, unitOneProgress, setUnitOneProgress, lessonId)
        }
        onSetLessonStage={(lessonId, stageIndex) =>
          setLessonStage(setUnitOneProgress, lessonId, stageIndex)
        }
        onSetExerciseValidated={(lessonId, exerciseId, validated) =>
          setExerciseValidated(setUnitOneProgress, lessonId, exerciseId, validated)
        }
      />
    );
  }

  if (route === 'unit-02') {
    return (
      <UnitOnePage
        unitLabel="Unidad 2"
        lessons={unitTwoLessons}
        progress={unitTwoProgress}
        onBack={goToHome}
        onChangeDraft={(lessonId, exerciseId, value) =>
          updateExerciseDraft(setUnitTwoProgress, lessonId, exerciseId, value)
        }
        onCompleteLesson={(lessonId) =>
          completeLesson(unitTwoLessons, setUnitTwoProgress, lessonId)
        }
        onResetProgress={resetUnitTwoProgress}
        onSelectLesson={(lessonId) =>
          selectLesson(unitTwoLessons, unitTwoProgress, setUnitTwoProgress, lessonId)
        }
        onSetLessonStage={(lessonId, stageIndex) =>
          setLessonStage(setUnitTwoProgress, lessonId, stageIndex)
        }
        onSetExerciseValidated={(lessonId, exerciseId, validated) =>
          setExerciseValidated(setUnitTwoProgress, lessonId, exerciseId, validated)
        }
      />
    );
  }

  return (
    <HomePage
      unitOneCompletedLessons={unitOneCompletedLessons}
      unitOneTotalLessons={unitOneLessons.length}
      unitOneCompleted={unitOneCompleted}
      unitTwoCompletedLessons={unitTwoCompletedLessons}
      unitTwoTotalLessons={unitTwoLessons.length}
      unitTwoUnlocked={unitTwoUnlocked}
      onOpenUnitOne={goToUnitOne}
      onOpenUnitTwo={goToUnitTwo}
    />
  );
}

export default App;
