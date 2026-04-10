export type LessonContentBlock = {
  title: string;
  body: string[];
  code?: string;
};

export type ExerciseCheck =
  | {
      kind: 'includes';
      needle: string;
      success: string;
      error: string;
    }
  | {
      kind: 'oneOf';
      needles: string[];
      success: string;
      error: string;
    };

export type LessonExercise = {
  id: string;
  title: string;
  instructions: string[];
  placeholder: string;
  minLength: number;
  checks: ExerciseCheck[];
  responseKind?: 'code' | 'text';
  expectedAnswer?:
    | {
        kind: 'integer';
        value: number;
      }
    | {
        kind: 'keywords';
        include: string[];
        minWords?: number;
      };
};

export type UnitLesson = {
  id: string;
  step: string;
  title: string;
  summary: string;
  goal: string;
  content: LessonContentBlock[];
  exercises: LessonExercise[];
};
