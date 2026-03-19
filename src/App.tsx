import { useEffect, useState } from 'react';
import HomePage from './components/HomePage';
import UnitOnePage from './components/UnitOnePage';
import { unitOneLessons } from './data/unit-one';
import {
  createInitialProgress,
  getCompletedLessonsCount,
  isLessonUnlocked,
  readUnitProgress,
  saveUnitProgress,
  type UnitProgress,
} from './lib/unit-progress';

type Route = 'home' | 'unit-01';

function getRouteFromHash(): Route {
  return window.location.hash === '#unidad-1' ? 'unit-01' : 'home';
}

function App() {
  const [route, setRoute] = useState<Route>(getRouteFromHash);
  const [unitOneProgress, setUnitOneProgress] = useState<UnitProgress>(() =>
    readUnitProgress(unitOneLessons),
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
    saveUnitProgress(unitOneProgress);
  }, [unitOneProgress]);

  const goToHome = () => {
    window.location.hash = '';
  };

  const goToUnitOne = () => {
    window.location.hash = 'unidad-1';
  };

  const updateExerciseDraft = (
    lessonId: string,
    exerciseId: string,
    value: string,
  ) => {
    setUnitOneProgress((current) => ({
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

  const selectLesson = (lessonId: string) => {
    if (!isLessonUnlocked(unitOneLessons, unitOneProgress, lessonId)) {
      return;
    }

    setUnitOneProgress((current) => ({
      ...current,
      activeLessonId: lessonId,
    }));
  };

  const setLessonStage = (lessonId: string, stageIndex: number) => {
    setUnitOneProgress((current) => ({
      ...current,
      activeLessonId: lessonId,
      stageIndexes: {
        ...current.stageIndexes,
        [lessonId]: stageIndex,
      },
    }));
  };

  const setExerciseValidated = (
    lessonId: string,
    exerciseId: string,
    validated: boolean,
  ) => {
    setUnitOneProgress((current) => ({
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

  const completeLesson = (lessonId: string) => {
    const lessonIndex = unitOneLessons.findIndex((lesson) => lesson.id === lessonId);
    const nextLesson = unitOneLessons[lessonIndex + 1];

    setUnitOneProgress((current) => {
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

  const completedLessons = getCompletedLessonsCount(unitOneLessons, unitOneProgress);

  if (route === 'unit-01') {
    return (
      <UnitOnePage
        lessons={unitOneLessons}
        progress={unitOneProgress}
        onBack={goToHome}
        onChangeDraft={updateExerciseDraft}
        onCompleteLesson={completeLesson}
        onResetProgress={resetUnitOneProgress}
        onSelectLesson={selectLesson}
        onSetLessonStage={setLessonStage}
        onSetExerciseValidated={setExerciseValidated}
      />
    );
  }

  return (
    <HomePage
      completedLessons={completedLessons}
      totalLessons={unitOneLessons.length}
      onOpenUnitOne={goToUnitOne}
    />
  );
}

export default App;
