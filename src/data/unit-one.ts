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
      'Primero entiendes las palabras base del codigo y como se arma una linea antes de escribir por tu cuenta.',
    goal:
      'Reconocer que hace cada parte de una declaracion y de una funcion para escribir con sentido, no copiando formas.',
    content: [
      {
        title: 'Que significa const',
        body: [
          'Usas `const` cuando quieres crear un nombre para un dato y no planeas reasignarlo despues.',
          'En una linea como `const courseName: string = "EduTypes";`, `const` crea la variable, `courseName` es el nombre, `: string` dice el tipo y `=` asigna el valor.',
        ],
        code: "const courseName: string = 'EduTypes';",
      },
      {
        title: 'Que significa let',
        body: [
          'Usas `let` cuando el valor puede cambiar mas adelante. Piensalo como una caja cuyo contenido puede actualizarse.',
          'En `let progress: number = 0;`, `let` indica que la variable puede cambiar, `progress` es el nombre, `number` es el tipo y `0` es el valor inicial.',
        ],
        code: 'let progress: number = 0;',
      },
      {
        title: 'Como leer una declaracion',
        body: [
          'Lee la linea de izquierda a derecha: palabra clave, nombre, tipo, signo igual, valor y punto y coma.',
          'La palabra clave dice como se comporta la variable. El nombre te dice que guarda. El tipo define que clase de dato acepta. El valor es el dato concreto.',
        ],
        code:
          "const moduleName: string = 'Unidad 1';\nlet totalExercises: number = 6;\nlet hasCertificate: boolean = true;",
      },
      {
        title: 'Que significa function',
        body: [
          'Una `function` agrupa instrucciones bajo un nombre para poder reutilizarlas.',
          'En `function greetStudent(name: string): string { ... }`, `greetStudent` es el nombre, `name: string` es el parametro de entrada y `: string` despues del parentesis indica lo que devuelve.',
        ],
        code:
          "function greetStudent(name: string): string {\n  return `Hola ${name}`;\n}",
      },
      {
        title: 'Las partes internas de una funcion',
        body: [
          'Los parentesis contienen entradas. Las llaves contienen el bloque de codigo. `return` significa "esto es lo que la funcion entrega al final".',
          'Si entiendes nombre, parametros, tipo de retorno y `return`, ya puedes empezar a escribir funciones simples con sentido.',
        ],
        code:
          "function enrollStudent(name: string, level: number): string {\n  return `${name} entra al nivel ${level}`;\n}",
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
        title: 'Como leer la linea completa',
        body: [
          'En `const student: { name: string; completed: number; premium: boolean } = { ... };`, `const` crea el nombre, `student` es la variable y el primer `:` significa "ahora voy a describir su tipo".',
          'Las primeras llaves `{ }` contienen el contrato del objeto. Dentro, cada propiedad se escribe como `nombre: tipo` y el `;` separa una propiedad tipada de la siguiente.',
        ],
        code:
          "const student: { name: string; completed: number; premium: boolean } = {\n  name: 'Ana',\n  completed: 3,\n  premium: false,\n};",
      },
      {
        title: 'Tipo arriba, valor abajo',
        body: [
          'Despues de `=` ya no escribes el tipo esperado: escribes el objeto real. Las segundas llaves `{ }` contienen los valores concretos.',
          "En `name: 'Ana'`, `name` es la propiedad, `:` separa propiedad y valor, y `'Ana'` es el dato real. Las comas `,` separan una propiedad con valor de la siguiente.",
        ],
        code:
          "{\n  name: 'Ana',\n  completed: 3,\n  premium: false,\n}",
      },
      {
        title: 'Objeto tipado en linea',
        body: [
          'Todavia no necesitas interfaces para empezar a ganar claridad. Un objeto con tipo en linea ya te obliga a ser preciso con nombre, cantidad y estado.',
          'Fijate en que el mismo `:` aparece dos veces con trabajos distintos: arriba une propiedad con tipo (`name: string`) y abajo une propiedad con valor (`name: \'Ana\'`).',
        ],
        code:
          "const student: { name: string; completed: number; premium: boolean } = {\n  name: 'Ana',\n  completed: 3,\n  premium: false,\n};",
      },
      {
        title: 'Como leer student.name',
        body: [
          'Cuando escribes `student.name`, el punto `.` significa "entra al objeto `student` y toma su propiedad `name`".',
          'Esa idea es clave: primero nombras el objeto, luego con `.` eliges la propiedad exacta que quieres leer.',
        ],
        code: "student.name\nstudent.completed",
      },
      {
        title: 'Objeto dentro de una funcion',
        body: [
          'En `function printStudent(student: { name: string; completed: number }): string`, el parametro se llama `student` y despues del `:` se describe la forma exacta del objeto que puede entrar.',
          'Los parentesis `( )` contienen la entrada, las llaves del tipo describen sus propiedades, y `: string` fuera del parentesis dice lo que la funcion devuelve al final.',
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
        title: 'Que significa string[]',
        body: [
          "En `const topics: string[] = ['variables', 'funciones'];`, `string[]` significa \"una lista donde cada posicion debe ser string\".",
          'Los corchetes `[ ]` junto al tipo convierten ese tipo simple en una lista. El `=` separa el contrato del valor real que vas a guardar.',
        ],
        code: "const topics: string[] = ['variables', 'funciones'];",
      },
      {
        title: 'Como leer los corchetes y comas',
        body: [
          'En el valor real, `[ ]` encierran todos los elementos del array. Cada coma `,` separa un elemento del siguiente.',
          "Si escribes `['variables', 'funciones', 'objetos']`, cada texto ocupa una posicion distinta dentro de la misma lista.",
        ],
        code: "['variables', 'funciones', 'objetos']",
      },
      {
        title: 'Tuplas para pares con orden exacto',
        body: [
          'Una tupla sirve cuando el orden importa y cada posicion tiene un tipo distinto. No es una lista libre: es una estructura exacta.',
        ],
        code: "const lessonPair: [string, number] = ['arrays', 3];",
      },
      {
        title: 'Como leer una tupla',
        body: [
          'En `[string, number]`, la primera posicion debe ser `string` y la segunda debe ser `number`. La coma `,` separa posiciones, no opciones.',
          "Cuando escribes `['arrays', 3]`, el primer valor llena la primera posicion y el segundo valor llena la segunda. Si inviertes el orden, TypeScript marca error.",
        ],
        code: "const lessonPair: [string, number] = ['arrays', 3];",
      },
      {
        title: 'Array como parametro',
        body: [
          'En `function countTopics(topics: string[]): number`, el parametro se llama `topics` y `: string[]` significa que la funcion espera una lista de textos.',
          'El punto en `topics.length` entra al array y pide una propiedad interna llamada `length`, que devuelve cuantas posiciones tiene la lista.',
        ],
        code:
          "function countTopics(topics: string[]): number {\n  return topics.length;\n}",
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
      {
        title: 'Como leer el bloque integrado',
        body: [
          'Primero declaras un objeto `lesson` con su contrato arriba y sus valores abajo. Despues declaras `tags` como `string[]`, o sea una lista de textos.',
          'La idea no es memorizar la forma completa: debes reconocer que cada simbolo ya lo viste antes. `:` une nombre con tipo o valor, `{ }` encierran objetos, `[ ]` encierran listas y `=` conecta definicion con dato real.',
        ],
        code:
          "const lesson: { title: string; duration: number; published: boolean } = {\n  title: 'Fundamentos',\n  duration: 45,\n  published: true,\n};\n\nconst tags: string[] = ['typescript', 'basico'];",
      },
      {
        title: 'Como leer la funcion final',
        body: [
          'En `function summarizeLesson(title: string, duration: number, tags: string[]): string`, cada coma separa parametros y cada parametro repite la misma estructura: `nombre: tipo`.',
          "Dentro del `return`, `tags.join(', ')` usa el punto `.` para entrar al array `tags` y ejecutar `join`, que une sus elementos en un solo texto.",
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
