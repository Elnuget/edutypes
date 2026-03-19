export type LessonContentBlock = {
  title: string;
  body: string[];
  code?: string;
};

export type LessonExercise = {
  id: string;
  title: string;
  instructions: string[];
  placeholder: string;
  minLength: number;
  checks: ExerciseCheck[];
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

export type UnitLesson = {
  id: string;
  step: string;
  title: string;
  summary: string;
  goal: string;
  content: LessonContentBlock[];
  exercises: LessonExercise[];
};

export const unitOneLessons: UnitLesson[] = [
  {
    id: 'u1-l1',
    step: '1',
    title: 'Const, let y function',
    summary:
      'Aprendes a leer una linea simple y una funcion simple.',
    goal:
      'Saber que hace cada parte antes de escribirla.',
    content: [
      {
        title: 'Tarjeta 1: const y let',
        body: [
          '`const` crea un dato que no quieres cambiar. `let` crea un dato que si puede cambiar despues.',
          'En `const moduleName: string = \'Unidad 1\';`, `moduleName` es el nombre, `: string` es el tipo, `=` conecta con el valor y `;` cierra la linea.',
        ],
        code: "const moduleName: string = 'Unidad 1';\nlet totalExercises: number = 6;",
      },
      {
        title: 'Tarjeta 2: function',
        body: [
          '`function` crea una accion con nombre. Los parentesis `( )` guardan lo que entra y las llaves `{ }` guardan el codigo.',
          'En `function greetStudent(name: string): string { ... }`, `name: string` es la entrada, `: string` fuera del parentesis es lo que devuelve y `return` es lo que entrega.',
        ],
        code:
          "function greetStudent(name: string, level: number): string {\n  return `${name} esta en el nivel ${level}`;\n}",
      },
    ],
    exercises: [
      {
        id: 'typed-variables',
        title: 'Ejercicio 1: variables tipadas',
        instructions: [
          'Escribe primero una linea con `const` para un texto fijo llamado `moduleName`.',
          'Despues escribe una linea con `let` para un numero llamado `totalExercises`.',
          'Termina con otra linea que use `let` o `const` para un booleano llamado `hasCertificate`.',
        ],
        placeholder:
          "const moduleName: string = 'Unidad 1';\nlet totalExercises: number = 6;\nlet hasCertificate: boolean = true;",
        minLength: 80,
        checks: [
          {
            kind: 'includes',
            needle: 'const modulename: string',
            success: 'declaraste una constante con nombre y tipo string',
            error: 'falta una declaracion de `moduleName` usando `const` y tipo `string`.',
          },
          {
            kind: 'includes',
            needle: 'let totalexercises: number',
            success: 'declaraste una variable numerica con `let`',
            error: 'falta `totalExercises` con tipo `number` usando `let`.',
          },
          {
            kind: 'oneOf',
            needles: ['let hascertificate: boolean', 'const hascertificate: boolean'],
            success: 'declaraste el booleano `hasCertificate`',
            error: 'falta `hasCertificate` con tipo `boolean`.',
          },
        ],
      },
      {
        id: 'typed-function',
        title: 'Ejercicio 2: funcion con tipos',
        instructions: [
          'Escribe la palabra `function`, luego el nombre `greetStudent`.',
          'Dentro de parentesis agrega `name: string` y `level: number`.',
          'Despues del parentesis indica que devuelve `string` y usa `return` dentro de las llaves.',
        ],
        placeholder:
          "function greetStudent(name: string, level: number): string {\n  return `${name} esta en el nivel ${level}`;\n}",
        minLength: 90,
        checks: [
          {
            kind: 'includes',
            needle: 'function greetstudent',
            success: 'escribiste la palabra `function` y el nombre de la funcion',
            error: 'falta declarar la funcion `greetStudent`.',
          },
          {
            kind: 'includes',
            needle: 'name: string',
            success: 'tipaste el parametro `name`',
            error: 'falta el parametro `name: string`.',
          },
          {
            kind: 'includes',
            needle: 'level: number',
            success: 'tipaste el parametro `level`',
            error: 'falta el parametro `level: number`.',
          },
          {
            kind: 'includes',
            needle: '): string',
            success: 'definiste el tipo de retorno',
            error: 'falta indicar que la funcion devuelve `string`.',
          },
          {
            kind: 'includes',
            needle: 'return',
            success: 'incluiste `return` dentro de la funcion',
            error: 'falta la sentencia `return` dentro de la funcion.',
          },
        ],
      },
    ],
  },
  {
    id: 'u1-l2',
    step: '2',
    title: 'Objetos como contratos basicos',
    summary:
      'Aprendes a escribir un objeto y a leer sus propiedades.',
    goal:
      'Saber como se arma un objeto paso a paso.',
    content: [
      {
        title: 'Tarjeta 1: como se escribe un objeto',
        body: [
          'Un objeto junta varios datos bajo un solo nombre. En `student`, guardas varias propiedades en una sola estructura.',
          'Las primeras llaves del tipo dicen que propiedades esperas. Las llaves de abajo guardan los valores reales. `name: string` significa propiedad `name` de tipo texto.',
        ],
        code:
          "const student: { name: string; completed: number; premium: boolean } = {\n  name: 'Ana',\n  completed: 3,\n  premium: false,\n};",
      },
      {
        title: 'Tarjeta 2: como leer student.name',
        body: [
          'El punto `.` sirve para entrar a una propiedad. `student.name` significa: entra a `student` y toma `name`.',
          'En una funcion puedes pedir un objeto completo como entrada. Asi TypeScript revisa que entren las propiedades correctas.',
        ],
        code:
          "function printStudent(student: { name: string; completed: number }): string {\n  return `${student.name} completo ${student.completed} lecciones`;\n}",
      },
    ],
    exercises: [
      {
        id: 'student-object',
        title: 'Ejercicio 1: crea un objeto student',
        instructions: [
          'Declara una constante `student` con las propiedades `name`, `completed` y `premium`.',
          'Tipa `name` como `string`, `completed` como `number` y `premium` como `boolean`.',
          'Asigna valores coherentes al objeto.',
        ],
        placeholder:
          "const student: { name: string; completed: number; premium: boolean } = {\n  name: 'Laura',\n  completed: 4,\n  premium: true,\n};",
        minLength: 130,
        checks: [
          {
            kind: 'includes',
            needle: 'const student: { name: string; completed: number; premium: boolean }',
            success: 'tipaste el objeto `student` con las tres propiedades',
            error: 'falta tipar `student` con `name`, `completed` y `premium`.',
          },
          {
            kind: 'includes',
            needle: 'name:',
            success: 'incluiste la propiedad `name`',
            error: 'falta la propiedad `name` dentro del objeto.',
          },
          {
            kind: 'includes',
            needle: 'completed:',
            success: 'incluiste la propiedad `completed`',
            error: 'falta la propiedad `completed` dentro del objeto.',
          },
          {
            kind: 'includes',
            needle: 'premium:',
            success: 'incluiste la propiedad `premium`',
            error: 'falta la propiedad `premium` dentro del objeto.',
          },
        ],
      },
      {
        id: 'student-summary',
        title: 'Ejercicio 2: funcion que consume un objeto',
        instructions: [
          'Escribe una funcion `printStudent` que reciba un parametro `student` con `name` y `completed`.',
          'La funcion debe devolver un texto indicando cuantas lecciones completo el estudiante.',
          'No uses `any` ni dejes el parametro sin tipo.',
        ],
        placeholder:
          "function printStudent(student: { name: string; completed: number }): string {\n  return `${student.name} completo ${student.completed} lecciones`;\n}",
        minLength: 120,
        checks: [
          {
            kind: 'includes',
            needle: 'function printstudent',
            success: 'nombraste la funcion `printStudent`',
            error: 'falta declarar la funcion `printStudent`.',
          },
          {
            kind: 'includes',
            needle: 'student: { name: string; completed: number }',
            success: 'tipaste el parametro `student`',
            error: 'falta tipar el parametro `student` con `name` y `completed`.',
          },
          {
            kind: 'includes',
            needle: '): string',
            success: 'definiste el retorno como string',
            error: 'falta indicar que la funcion devuelve `string`.',
          },
          {
            kind: 'includes',
            needle: 'student.name',
            success: 'usas `student.name` en el resultado',
            error: 'falta usar `student.name` dentro del `return`.',
          },
          {
            kind: 'includes',
            needle: 'student.completed',
            success: 'usas `student.completed` en el resultado',
            error: 'falta usar `student.completed` dentro del `return`.',
          },
        ],
      },
    ],
  },
  {
    id: 'u1-l3',
    step: '3',
    title: 'Arrays, tuplas y parametros utiles',
    summary:
      'Aprendes a escribir listas y pares con orden.',
    goal:
      'Saber cuando usar `[]` y cuando usar una tupla.',
    content: [
      {
        title: 'Tarjeta 1: arrays',
        body: [
          '`string[]` significa lista de textos. Los corchetes `[ ]` junto al tipo convierten ese tipo en una lista.',
          'En el valor real, los corchetes tambien encierran los elementos. Cada coma `,` separa un elemento del siguiente.',
        ],
        code: "const topics: string[] = ['variables', 'funciones'];",
      },
      {
        title: 'Tarjeta 2: tuplas',
        body: [
          'Una tupla es una lista corta con orden fijo. En `[string, number]`, primero va un texto y despues un numero.',
          "Si escribes `['funciones', 2]`, el orden importa. Si cambias el orden, TypeScript marca error.",
        ],
        code: "const lessonPair: [string, number] = ['funciones', 2];",
      },
    ],
    exercises: [
      {
        id: 'topics-array',
        title: 'Ejercicio 1: array de temas',
        instructions: [
          'Declara una constante `topics` de tipo `string[]`.',
          'Incluye al menos tres temas de la unidad.',
          'Despues escribe una funcion `countTopics` que reciba `topics: string[]` y devuelva un `number`.',
        ],
        placeholder:
          "const topics: string[] = ['variables', 'objetos', 'arrays'];\n\nfunction countTopics(topics: string[]): number {\n  return topics.length;\n}",
        minLength: 120,
        checks: [
          {
            kind: 'includes',
            needle: 'const topics: string[]',
            success: 'declaraste un array de strings',
            error: 'falta declarar `topics` con tipo `string[]`.',
          },
          {
            kind: 'includes',
            needle: 'function counttopics',
            success: 'declaraste la funcion `countTopics`',
            error: 'falta la funcion `countTopics`.',
          },
          {
            kind: 'includes',
            needle: 'topics: string[]',
            success: 'tipaste el parametro de la funcion',
            error: 'falta el parametro `topics: string[]` en la funcion.',
          },
          {
            kind: 'includes',
            needle: '): number',
            success: 'la funcion devuelve number',
            error: 'falta indicar que la funcion devuelve `number`.',
          },
          {
            kind: 'includes',
            needle: 'topics.length',
            success: 'usas la longitud del array para contar temas',
            error: 'falta usar `topics.length` dentro del `return`.',
          },
        ],
      },
      {
        id: 'lesson-tuple',
        title: 'Ejercicio 2: tupla con orden fijo',
        instructions: [
          'Declara una constante `lessonPair` de tipo `[string, number]`.',
          'En la primera posicion guarda el nombre de una leccion.',
          'En la segunda posicion guarda su numero dentro de la unidad.',
        ],
        placeholder: "const lessonPair: [string, number] = ['funciones', 2];",
        minLength: 50,
        checks: [
          {
            kind: 'includes',
            needle: 'const lessonpair: [string, number]',
            success: 'declaraste la tupla con el orden correcto',
            error: 'falta declarar `lessonPair` como tupla `[string, number]`.',
          },
        ],
      },
    ],
  },
  {
    id: 'u1-l4',
    step: '4',
    title: 'Mini reto integrador',
    summary:
      'Juntas lo basico en un ejemplo pequeno y real.',
    goal:
      'Combinar objeto, array y funcion sin perder claridad.',
    content: [
      {
        title: 'Tarjeta 1: objeto mas array',
        body: [
          'Aqui unes dos ideas: un objeto `lesson` y una lista `tags`.',
          'No hay sintaxis nueva. Solo repites lo ya visto: `:` para tipos, `{ }` para objeto, `[ ]` para lista y `=` para asignar el valor.',
        ],
        code:
          "const lesson: { title: string; duration: number; published: boolean } = {\n  title: 'Fundamentos',\n  duration: 45,\n  published: true,\n};\n\nconst tags: string[] = ['typescript', 'basico'];",
      },
      {
        title: 'Tarjeta 2: funcion final',
        body: [
          'La funcion final recibe tres datos: `title`, `duration` y `tags`. Cada coma separa un parametro del siguiente.',
          'En `tags.join`, el punto `.` entra al array y usa `join` para unir todo en un solo texto.',
        ],
        code:
          "function summarizeLesson(title: string, duration: number, tags: string[]): string {\n  return `${title} dura ${duration} minutos y usa ${tags.join(', ')}`;\n}",
      },
    ],
    exercises: [
      {
        id: 'lesson-model',
        title: 'Ejercicio 1: modela una leccion',
        instructions: [
          'Declara una constante `lesson` con `title`, `duration` y `published`.',
          'Tipa el objeto en la misma declaracion.',
          'Agrega una constante `tags` de tipo `string[]` con al menos dos etiquetas.',
        ],
        placeholder:
          "const lesson: { title: string; duration: number; published: boolean } = {\n  title: 'Tipos basicos',\n  duration: 35,\n  published: true,\n};\n\nconst tags: string[] = ['typescript', 'unidad-1'];",
        minLength: 170,
        checks: [
          {
            kind: 'includes',
            needle: 'const lesson: { title: string; duration: number; published: boolean }',
            success: 'tipaste el objeto `lesson` con sus tres propiedades',
            error: 'falta tipar `lesson` con `title`, `duration` y `published`.',
          },
          {
            kind: 'includes',
            needle: 'const tags: string[]',
            success: 'declaraste `tags` como array de strings',
            error: 'falta declarar `tags` con tipo `string[]`.',
          },
        ],
      },
      {
        id: 'lesson-summary',
        title: 'Ejercicio 2: resume la leccion con una funcion',
        instructions: [
          'Escribe una funcion `summarizeLesson` que reciba `title: string`, `duration: number` y `tags: string[]`.',
          'La funcion debe devolver un `string` que resuma la leccion.',
          'Usa `tags.join` dentro del `return`.',
        ],
        placeholder:
          "function summarizeLesson(title: string, duration: number, tags: string[]): string {\n  return `${title} dura ${duration} minutos y usa ${tags.join(', ')}`;\n}",
        minLength: 130,
        checks: [
          {
            kind: 'includes',
            needle: 'function summarizelesson',
            success: 'declaraste la funcion `summarizeLesson`',
            error: 'falta la funcion `summarizeLesson`.',
          },
          {
            kind: 'includes',
            needle: 'title: string',
            success: 'tipaste `title` como string',
            error: 'falta el parametro `title: string`.',
          },
          {
            kind: 'includes',
            needle: 'duration: number',
            success: 'tipaste `duration` como number',
            error: 'falta el parametro `duration: number`.',
          },
          {
            kind: 'includes',
            needle: 'tags: string[]',
            success: 'tipaste `tags` como array de strings',
            error: 'falta el parametro `tags: string[]`.',
          },
          {
            kind: 'includes',
            needle: '): string',
            success: 'indicaste que la funcion devuelve string',
            error: 'falta indicar que la funcion devuelve `string`.',
          },
          {
            kind: 'includes',
            needle: 'tags.join',
            success: 'usas `tags.join` para resumir las etiquetas',
            error: 'falta usar `tags.join` dentro del `return`.',
          },
        ],
      },
    ],
  },
];
