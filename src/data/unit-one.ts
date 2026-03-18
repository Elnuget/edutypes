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
  checks: string[];
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
    title: 'Variables, tipos e inferencia',
    summary:
      'Empiezas entendiendo cuando TypeScript deduce tipos y cuando debes declararlos tu.',
    goal:
      'Escribir variables y funciones sencillas con tipos explicitos para quitar ambiguedad desde el principio.',
    content: [
      {
        title: 'Lo importante de TypeScript al inicio',
        body: [
          'TypeScript no cambia la logica de JavaScript; agrega informacion para que el codigo sea mas claro, verificable y mantenible.',
          'En esta unidad no vas a memorizar teoria larga: vas a escribir variables, funciones y estructuras basicas hasta que el tipado se vuelva natural.',
        ],
      },
      {
        title: 'Inferencia vs anotacion',
        body: [
          'Si el valor deja el tipo clarisimo, el compilador puede inferirlo. Si el valor forma parte de un contrato importante, conviene anotar el tipo de forma explicita.',
          'Piensa asi: inferir sirve para avanzar rapido; anotar sirve para dejar reglas visibles.',
        ],
        code:
          "const topic = 'variables';\nlet students = 24;\nlet published: boolean = true;\n\nfunction enroll(name: string): string {\n  return `Bienvenido ${name}`;\n}",
      },
    ],
    exercises: [
      {
        id: 'typed-variables',
        title: 'Ejercicio 1: variables tipadas',
        instructions: [
          'Declara una constante `moduleName` de tipo `string` con el valor `Unidad 1`.',
          'Declara una variable `totalExercises` de tipo `number` con el valor `6`.',
          'Declara una variable `hasCertificate` de tipo `boolean` con el valor `true`.',
        ],
        placeholder:
          "const moduleName: string = 'Unidad 1';\nlet totalExercises: number = 6;\nlet hasCertificate: boolean = true;",
        minLength: 80,
        checks: [
          'const modulename: string',
          'let totalexercises: number',
          'let hascertificate: boolean',
        ],
      },
      {
        id: 'typed-function',
        title: 'Ejercicio 2: funcion con tipos',
        instructions: [
          'Escribe una funcion `greetStudent` que reciba `name: string` y `level: number`.',
          'La funcion debe devolver un `string` usando `return`.',
          'Usa una plantilla de texto para mencionar nombre y nivel.',
        ],
        placeholder:
          "function greetStudent(name: string, level: number): string {\n  return `${name} esta en el nivel ${level}`;\n}",
        minLength: 90,
        checks: [
          'function greetstudent',
          'name: string',
          'level: number',
          '): string',
          'return',
        ],
      },
    ],
  },
  {
    id: 'u1-l2',
    step: '2',
    title: 'Objetos como contratos basicos',
    summary:
      'Ahora modelas datos reales usando objetos con propiedades tipadas y funciones que dependen de ese contrato.',
    goal:
      'Definir estructuras de objetos claras y usarlas como parametros sin perder seguridad de tipos.',
    content: [
      {
        title: 'Pensar en forma de contrato',
        body: [
          'Un objeto tipado obliga a que cada propiedad exista con el tipo correcto. Eso evita objetos ambiguos y reduce errores cuando el proyecto crece.',
          'La pregunta practica siempre es la misma: que datos necesita este bloque de codigo y de que tipo debe ser cada uno.',
        ],
      },
      {
        title: 'Objeto tipado en linea',
        body: [
          'Todavia no necesitas interfaces para empezar a ganar claridad. Un objeto con tipo en linea ya te obliga a ser preciso con nombre, cantidad y estado.',
        ],
        code:
          "const student: { name: string; completed: number; premium: boolean } = {\n  name: 'Ana',\n  completed: 3,\n  premium: false,\n};",
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
          'const student: { name: string; completed: number; premium: boolean }',
          'name:',
          'completed:',
          'premium:',
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
          'function printstudent',
          'student: { name: string; completed: number }',
          '): string',
          'student.name',
          'student.completed',
        ],
      },
    ],
  },
  {
    id: 'u1-l3',
    step: '3',
    title: 'Arrays, tuplas y parametros utiles',
    summary:
      'TypeScript tambien protege listas y pares de datos. Aqui escribes estructuras comunes de trabajo diario.',
    goal:
      'Usar arrays y tuplas con tipos concretos, y pasarlos a funciones sin perder claridad.',
    content: [
      {
        title: 'Arrays con tipo fijo',
        body: [
          'Cuando sabes que una lista contiene solo strings, numeros o booleanos, dilo. Asi cada operacion sobre esa lista queda protegida.',
          'Esto es especialmente util en rutas, etiquetas, ids y colecciones de configuracion.',
        ],
        code:
          "const topics: string[] = ['variables', 'funciones', 'objetos'];\nconst scores: number[] = [10, 9, 8];",
      },
      {
        title: 'Tuplas para pares con orden exacto',
        body: [
          'Una tupla sirve cuando el orden importa y cada posicion tiene un tipo distinto. No es una lista libre: es una estructura exacta.',
        ],
        code: "const lessonPair: [string, number] = ['arrays', 3];",
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
          'const topics: string[]',
          'function counttopics',
          'topics: string[]',
          '): number',
          'topics.length',
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
        checks: ['const lessonpair: [string, number]'],
      },
    ],
  },
  {
    id: 'u1-l4',
    step: '4',
    title: 'Mini reto integrador',
    summary:
      'Cierras la unidad combinando variables, objetos, arrays y funciones en un mismo bloque de codigo.',
    goal:
      'Escribir una solucion pequena pero completa que ya se parezca al codigo que usaras en una aplicacion real.',
    content: [
      {
        title: 'Integrar en vez de repetir',
        body: [
          'Dominar una base no es recitar definiciones. Es poder juntar piezas simples y producir codigo que se lea bien y mantenga sus reglas.',
          'Este reto final de la unidad mezcla exactamente lo que ya practicaste: tipos primitivos, objetos, arrays, tuplas y funciones.',
        ],
      },
      {
        title: 'Una base pequena pero seria',
        body: [
          'Si este tipo de codigo ya te sale con comodidad, estas construyendo la base correcta para pasar luego a modelado de tipos mas avanzado.',
        ],
        code:
          "const lesson: { title: string; duration: number; published: boolean } = {\n  title: 'Fundamentos',\n  duration: 45,\n  published: true,\n};\n\nconst tags: string[] = ['typescript', 'basico'];",
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
          'const lesson: { title: string; duration: number; published: boolean }',
          'const tags: string[]',
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
          'function summarizelesson',
          'title: string',
          'duration: number',
          'tags: string[]',
          '): string',
          'tags.join',
        ],
      },
    ],
  },
];
