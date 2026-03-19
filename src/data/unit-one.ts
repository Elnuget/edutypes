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
    summary: 'Lees variables y funciones sin memorizar de mas.',
    goal: 'Entender [[nombre]], [[tipo]], [[=]] y [[return]].',
    content: [
      {
        title: 'Tarjeta 1: const y let',
        body: [
          '[[const]] crea un dato fijo. [[let]] crea un dato que puede cambiar.',
          "En `const moduleName: string = 'Unidad 1';`, [[moduleName]] es el nombre, [[string]] es el tipo y [[=]] une con el valor.",
        ],
        code: "const moduleName: string = 'Unidad 1';\nlet totalExercises: number = 6;",
      },
      {
        title: 'Tarjeta 2: function',
        body: [
          '[[function]] crea una accion con nombre. `()` guarda lo que entra y `{}` guarda el bloque de codigo.',
          'En `function greetStudent(name: string): string { ... }`, [[name: string]] es la entrada, [[string]] es lo que sale y [[return]] entrega el resultado.',
        ],
        code:
          "function greetStudent(name: string, level: number): string {\n  return `${name} esta en el nivel ${level}`;\n}",
      },
    ],
    exercises: [
      {
        id: 'u1-l1-c1-e1',
        title: 'Ejercicio 1: escribe moduleName',
        instructions: [
          'Escribe una sola linea con [[const]].',
          'El nombre debe ser `moduleName` y el tipo debe ser `string`.',
        ],
        placeholder: "const moduleName: string = 'Unidad 1';",
        minLength: 30,
        checks: [
          {
            kind: 'includes',
            needle: 'const modulename: string =',
            success: 'escribiste `moduleName` con `const` y tipo `string`',
            error: 'falta `const moduleName: string = ...`.',
          },
        ],
      },
      {
        id: 'u1-l1-c1-e2',
        title: 'Ejercicio 2: numero y booleano',
        instructions: [
          'Escribe una linea para `totalExercises` con [[let]] y tipo `number`.',
          'Debajo escribe otra linea para `hasCertificate` con tipo `boolean`.',
        ],
        placeholder: '',
        minLength: 45,
        checks: [
          {
            kind: 'includes',
            needle: 'let totalexercises: number',
            success: 'escribiste `totalExercises` como `number`',
            error: 'falta `let totalExercises: number = ...`.',
          },
          {
            kind: 'oneOf',
            needles: ['let hascertificate: boolean', 'const hascertificate: boolean'],
            success: 'escribiste `hasCertificate` como `boolean`',
            error: 'falta `hasCertificate` con tipo `boolean`.',
          },
        ],
      },
      {
        id: 'u1-l1-c2-e1',
        title: 'Ejercicio 3: firma de la funcion',
        instructions: [
          'Escribe la funcion `greetStudent`.',
          'Debe recibir `name: string` y `level: number`.',
        ],
        placeholder:
          "function greetStudent(name: string, level: number): string {\n  return '';\n}",
        minLength: 70,
        checks: [
          {
            kind: 'includes',
            needle: 'function greetstudent',
            success: 'escribiste el nombre de la funcion',
            error: 'falta la funcion `greetStudent`.',
          },
          {
            kind: 'includes',
            needle: 'name: string',
            success: 'agregaste `name: string`',
            error: 'falta `name: string`.',
          },
          {
            kind: 'includes',
            needle: 'level: number',
            success: 'agregaste `level: number`',
            error: 'falta `level: number`.',
          },
          {
            kind: 'includes',
            needle: '): string',
            success: 'marcaste retorno `string`',
            error: 'falta `): string`.',
          },
        ],
      },
      {
        id: 'u1-l1-c2-e2',
        title: 'Ejercicio 4: return real',
        instructions: [
          'Vuelve a escribir `greetStudent` completa.',
          'Dentro usa [[return]] y menciona `name` y `level` en el texto.',
        ],
        placeholder: '',
        minLength: 80,
        checks: [
          {
            kind: 'includes',
            needle: 'function greetstudent',
            success: 'la funcion existe',
            error: 'falta la funcion `greetStudent`.',
          },
          {
            kind: 'includes',
            needle: 'return',
            success: 'incluiste `return`',
            error: 'falta `return`.',
          },
          {
            kind: 'includes',
            needle: 'name',
            success: 'usas `name`',
            error: 'falta usar `name` dentro del resultado.',
          },
          {
            kind: 'includes',
            needle: 'level',
            success: 'usas `level`',
            error: 'falta usar `level` dentro del resultado.',
          },
        ],
      },
    ],
  },
  {
    id: 'u1-l2',
    step: '2',
    title: 'Objetos como contratos basicos',
    summary: 'Aprendes a juntar varios datos en un objeto.',
    goal: 'Entender [[{}]], [[name: string]] y [[student.name]].',
    content: [
      {
        title: 'Tarjeta 1: como se escribe un objeto',
        body: [
          'Un objeto junta varios datos bajo un solo nombre. Aqui todo vive dentro de [[student]].',
          'Las llaves del tipo dicen que esperas. Las llaves de abajo guardan los valores reales. [[name: string]] significa propiedad `name` de tipo texto.',
        ],
        code:
          "const student: { name: string; completed: number; premium: boolean } = {\n  name: 'Ana',\n  completed: 3,\n  premium: false,\n};",
      },
      {
        title: 'Tarjeta 2: como leer student.name',
        body: [
          'El punto `.` sirve para entrar a una propiedad. [[student.name]] significa: entra a `student` y toma `name`.',
          'Una funcion tambien puede pedir un objeto entero como entrada. Asi TypeScript revisa si el objeto tiene lo correcto.',
        ],
        code:
          "function printStudent(student: { name: string; completed: number }): string {\n  return `${student.name} completo ${student.completed} lecciones`;\n}",
      },
    ],
    exercises: [
      {
        id: 'u1-l2-c1-e1',
        title: 'Ejercicio 1: tipo del objeto',
        instructions: [
          'Escribe `student` con tipo de objeto.',
          'Debe tener `name`, `completed` y `premium`.',
        ],
        placeholder:
          "const student: { name: string; completed: number; premium: boolean } = {\n  name: 'Laura',\n  completed: 4,\n  premium: true,\n};",
        minLength: 90,
        checks: [
          {
            kind: 'includes',
            needle: 'const student: { name: string; completed: number; premium: boolean }',
            success: 'el tipo de `student` esta completo',
            error: 'falta tipar `student` con `name`, `completed` y `premium`.',
          },
        ],
      },
      {
        id: 'u1-l2-c1-e2',
        title: 'Ejercicio 2: valores del objeto',
        instructions: [
          'Escribe otra vez el objeto `student` completo.',
          'Agrega valores para `name`, `completed` y `premium`.',
        ],
        placeholder: '',
        minLength: 90,
        checks: [
          {
            kind: 'includes',
            needle: 'const student:',
            success: 'mantienes la declaracion de `student`',
            error: 'falta declarar `student` con `const`.',
          },
          {
            kind: 'includes',
            needle: 'name:',
            success: 'agregaste `name`',
            error: 'falta la propiedad `name`.',
          },
          {
            kind: 'includes',
            needle: 'completed:',
            success: 'agregaste `completed`',
            error: 'falta la propiedad `completed`.',
          },
          {
            kind: 'includes',
            needle: 'premium:',
            success: 'agregaste `premium`',
            error: 'falta la propiedad `premium`.',
          },
        ],
      },
      {
        id: 'u1-l2-c2-e1',
        title: 'Ejercicio 3: firma de printStudent',
        instructions: [
          'Escribe la funcion `printStudent`.',
          'El parametro `student` debe tener `name` y `completed`.',
        ],
        placeholder:
          "function printStudent(student: { name: string; completed: number }): string {\n  return '';\n}",
        minLength: 75,
        checks: [
          {
            kind: 'includes',
            needle: 'function printstudent',
            success: 'escribiste `printStudent`',
            error: 'falta `printStudent`.',
          },
          {
            kind: 'includes',
            needle: 'student: { name: string; completed: number }',
            success: 'tipaste el parametro `student`',
            error: 'falta el tipo del parametro `student`.',
          },
          {
            kind: 'includes',
            needle: '): string',
            success: 'marcaste retorno `string`',
            error: 'falta `): string`.',
          },
        ],
      },
      {
        id: 'u1-l2-c2-e2',
        title: 'Ejercicio 4: usa student.name',
        instructions: [
          'Escribe otra vez `printStudent` completa.',
          'Dentro usa [[student.name]] y [[student.completed]].',
        ],
        placeholder: '',
        minLength: 85,
        checks: [
          {
            kind: 'includes',
            needle: 'function printstudent',
            success: 'la funcion existe',
            error: 'falta `printStudent`.',
          },
          {
            kind: 'includes',
            needle: 'student.name',
            success: 'usas `student.name`',
            error: 'falta `student.name`.',
          },
          {
            kind: 'includes',
            needle: 'student.completed',
            success: 'usas `student.completed`',
            error: 'falta `student.completed`.',
          },
          {
            kind: 'includes',
            needle: 'return',
            success: 'incluiste `return`',
            error: 'falta `return`.',
          },
        ],
      },
    ],
  },
  {
    id: 'u1-l3',
    step: '3',
    title: 'Arrays, tuplas y parametros utiles',
    summary: 'Aprendes listas y pares con orden fijo.',
    goal: 'Entender [[[]]], comas y posiciones.',
    content: [
      {
        title: 'Tarjeta 1: arrays',
        body: [
          '[[string[]]] significa lista de textos. `[]` junto al tipo convierte ese tipo en lista.',
          'En el valor real, `[]` encierra los elementos y cada coma `,` separa uno del siguiente.',
        ],
        code: "const topics: string[] = ['variables', 'funciones'];",
      },
      {
        title: 'Tarjeta 2: tuplas',
        body: [
          'Una tupla es una lista corta con orden fijo. En [[string, number]], primero va texto y despues numero.',
          "Si escribes `['funciones', 2]`, el [[orden]] importa. Si lo cambias, TypeScript marca error.",
        ],
        code: "const lessonPair: [string, number] = ['funciones', 2];",
      },
    ],
    exercises: [
      {
        id: 'u1-l3-c1-e1',
        title: 'Ejercicio 1: crea topics',
        instructions: [
          'Escribe `topics` como lista de textos.',
          'Debe tener al menos tres elementos.',
        ],
        placeholder: "const topics: string[] = ['variables', 'objetos', 'arrays'];",
        minLength: 55,
        checks: [
          {
            kind: 'includes',
            needle: 'const topics: string[]',
            success: 'escribiste `topics` como `string[]`',
            error: 'falta declarar `topics` con tipo `string[]`.',
          },
        ],
      },
      {
        id: 'u1-l3-c1-e2',
        title: 'Ejercicio 2: cuenta temas',
        instructions: [
          'Escribe `countTopics`.',
          'Debe recibir `topics: string[]` y devolver `number` usando `topics.length`.',
        ],
        placeholder: '',
        minLength: 80,
        checks: [
          {
            kind: 'includes',
            needle: 'function counttopics',
            success: 'escribiste `countTopics`',
            error: 'falta `countTopics`.',
          },
          {
            kind: 'includes',
            needle: 'topics: string[]',
            success: 'tipaste `topics`',
            error: 'falta `topics: string[]`.',
          },
          {
            kind: 'includes',
            needle: '): number',
            success: 'marcaste retorno `number`',
            error: 'falta `): number`.',
          },
          {
            kind: 'includes',
            needle: 'topics.length',
            success: 'usas `topics.length`',
            error: 'falta `topics.length`.',
          },
        ],
      },
      {
        id: 'u1-l3-c2-e1',
        title: 'Ejercicio 3: lessonPair',
        instructions: [
          'Escribe `lessonPair` como tupla `[string, number]`.',
          'Primero va un texto y despues un numero.',
        ],
        placeholder: "const lessonPair: [string, number] = ['funciones', 2];",
        minLength: 45,
        checks: [
          {
            kind: 'includes',
            needle: 'const lessonpair: [string, number]',
            success: 'escribiste la tupla `lessonPair`',
            error: 'falta `const lessonPair: [string, number] = ...`.',
          },
        ],
      },
      {
        id: 'u1-l3-c2-e2',
        title: 'Ejercicio 4: otra tupla',
        instructions: [
          'Escribe otra tupla `[string, number]` con nombre distinto.',
          'Debe mantener el mismo orden: texto y luego numero.',
        ],
        placeholder: '',
        minLength: 40,
        checks: [
          {
            kind: 'includes',
            needle: ': [string, number] =',
            success: 'mantuviste el tipo de tupla',
            error: 'falta el tipo `[string, number]`.',
          },
          {
            kind: 'includes',
            needle: '[',
            success: 'creaste la lista corta',
            error: 'falta el valor de la tupla.',
          },
          {
            kind: 'includes',
            needle: ',',
            success: 'separaste las dos posiciones',
            error: 'falta la coma entre las dos posiciones.',
          },
        ],
      },
    ],
  },
  {
    id: 'u1-l4',
    step: '4',
    title: 'Mini reto integrador',
    summary: 'Juntas lo basico en un ejemplo corto.',
    goal: 'Unir [[objeto]], [[array]] y [[funcion]].',
    content: [
      {
        title: 'Tarjeta 1: objeto mas array',
        body: [
          'Aqui unes dos ideas: un [[objeto]] `lesson` y una [[lista]] `tags`.',
          'No hay sintaxis nueva. Solo repites `:`, `{}`, `[]` y `=`.',
        ],
        code:
          "const lesson: { title: string; duration: number; published: boolean } = {\n  title: 'Fundamentos',\n  duration: 45,\n  published: true,\n};\n\nconst tags: string[] = ['typescript', 'basico'];",
      },
      {
        title: 'Tarjeta 2: funcion final',
        body: [
          'La funcion final recibe `title`, `duration` y `tags`. Cada coma separa un parametro.',
          'En [[tags.join]], el punto entra al array y usa `join` para unir todo.',
        ],
        code:
          "function summarizeLesson(title: string, duration: number, tags: string[]): string {\n  return `${title} dura ${duration} minutos y usa ${tags.join(', ')}`;\n}",
      },
    ],
    exercises: [
      {
        id: 'u1-l4-c1-e1',
        title: 'Ejercicio 1: crea lesson',
        instructions: [
          'Escribe el objeto `lesson`.',
          'Debe tener `title`, `duration` y `published`.',
        ],
        placeholder:
          "const lesson: { title: string; duration: number; published: boolean } = {\n  title: 'Tipos basicos',\n  duration: 35,\n  published: true,\n};",
        minLength: 95,
        checks: [
          {
            kind: 'includes',
            needle: 'const lesson: { title: string; duration: number; published: boolean }',
            success: 'tipaste el objeto `lesson`',
            error: 'falta tipar `lesson` con `title`, `duration` y `published`.',
          },
        ],
      },
      {
        id: 'u1-l4-c1-e2',
        title: 'Ejercicio 2: crea tags',
        instructions: [
          'Debajo escribe `tags` como `string[]`.',
          'Agrega al menos dos etiquetas.',
        ],
        placeholder: '',
        minLength: 35,
        checks: [
          {
            kind: 'includes',
            needle: 'const tags: string[]',
            success: 'escribiste `tags` como array de strings',
            error: 'falta `const tags: string[] = ...`.',
          },
        ],
      },
      {
        id: 'u1-l4-c2-e1',
        title: 'Ejercicio 3: firma de summarizeLesson',
        instructions: [
          'Escribe la funcion `summarizeLesson`.',
          'Debe recibir `title`, `duration` y `tags` con sus tipos.',
        ],
        placeholder:
          "function summarizeLesson(title: string, duration: number, tags: string[]): string {\n  return '';\n}",
        minLength: 80,
        checks: [
          {
            kind: 'includes',
            needle: 'function summarizelesson',
            success: 'escribiste `summarizeLesson`',
            error: 'falta `summarizeLesson`.',
          },
          {
            kind: 'includes',
            needle: 'title: string',
            success: 'tipaste `title`',
            error: 'falta `title: string`.',
          },
          {
            kind: 'includes',
            needle: 'duration: number',
            success: 'tipaste `duration`',
            error: 'falta `duration: number`.',
          },
          {
            kind: 'includes',
            needle: 'tags: string[]',
            success: 'tipaste `tags`',
            error: 'falta `tags: string[]`.',
          },
          {
            kind: 'includes',
            needle: '): string',
            success: 'marcaste retorno `string`',
            error: 'falta indicar que devuelve `string`.',
          },
        ],
      },
      {
        id: 'u1-l4-c2-e2',
        title: 'Ejercicio 4: resumen final',
        instructions: [
          'Escribe otra vez `summarizeLesson` completa.',
          'Dentro usa [[return]] y [[tags.join]].',
        ],
        placeholder: '',
        minLength: 95,
        checks: [
          {
            kind: 'includes',
            needle: 'function summarizelesson',
            success: 'la funcion existe',
            error: 'falta `summarizeLesson`.',
          },
          {
            kind: 'includes',
            needle: 'return',
            success: 'incluiste `return`',
            error: 'falta `return`.',
          },
          {
            kind: 'includes',
            needle: 'tags.join',
            success: 'usas `tags.join`',
            error: 'falta usar `tags.join` dentro del `return`.',
          },
        ],
      },
    ],
  },
];
