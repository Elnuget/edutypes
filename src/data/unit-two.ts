import type { UnitLesson } from './unit-types';

export const unitTwoLessons: UnitLesson[] = [
  {
    id: 'u2-l1',
    step: '1',
    title: 'Type alias y salida visible',
    summary: 'Empiezas con aliases simples y ves resultados con console.log.',
    goal: 'Entender `type`, reutilizacion y salida en consola.',
    content: [
      {
        title: 'Tarjeta 1: type basico',
        body: [
          '[[type]] crea un nombre reutilizable para un tipo. Asi no repites lo mismo una y otra vez.',
          'En `type UserName = string;`, [[UserName]] es el alias y [[string]] es el tipo real.',
        ],
        code:
          "type UserName = string;\nconst userName: UserName = 'Ana';",
      },
      {
        title: 'Tarjeta 2: console.log',
        body: [
          '[[console.log]] muestra un valor cuando el codigo se ejecuta. Aqui ya no solo escribes: tambien ves salida.',
          'Si escribes `console.log(userName);`, la app podra enseñarte esa salida en la consola visual.',
        ],
        code:
          "type UserName = string;\nconst userName: UserName = 'Ana';\nconsole.log(userName);",
      },
    ],
    exercises: [
      {
        id: 'u2-l1-c1-e1',
        title: 'Ejercicio 1: alias UserName',
        instructions: [
          'Escribe `type UserName = string;`.',
          'Aqui solo practicas la forma minima de un alias.',
        ],
        placeholder: 'type UserName = string;',
        minLength: 20,
        checks: [
          {
            kind: 'includes',
            needle: 'type username = string',
            success: 'creaste el alias `UserName`',
            error: 'falta `type UserName = string;`.',
          },
        ],
      },
      {
        id: 'u2-l1-c1-e2',
        title: 'Ejercicio 2: variable con alias',
        instructions: [
          'Debajo escribe `userName` usando el alias `UserName`.',
          'Asigna un texto real.',
        ],
        placeholder: '',
        minLength: 40,
        checks: [
          {
            kind: 'includes',
            needle: 'type username = string',
            success: 'mantuviste el alias',
            error: 'falta el alias `UserName`.',
          },
          {
            kind: 'includes',
            needle: 'const username: username =',
            success: 'escribiste `userName` usando el alias',
            error: 'falta `const userName: UserName = ...`.',
          },
        ],
      },
      {
        id: 'u2-l1-c2-e1',
        title: 'Ejercicio 3: muestra userName',
        instructions: [
          'Escribe `userName` y luego usa `console.log(userName);`.',
          'Queremos ver la salida en la consola visual.',
        ],
        placeholder:
          "type UserName = string;\nconst userName: UserName = 'Ana';\nconsole.log(userName);",
        minLength: 60,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(username)',
            success: 'agregaste `console.log(userName)`',
            error: 'falta `console.log(userName);`.',
          },
        ],
      },
      {
        id: 'u2-l1-c2-e2',
        title: 'Ejercicio 4: console.log con otro alias',
        instructions: [
          'Crea `type Score = number;` y una constante `score`.',
          'Luego usa `console.log(score);`.',
        ],
        placeholder: '',
        minLength: 55,
        checks: [
          {
            kind: 'includes',
            needle: 'type score = number',
            success: 'creaste el alias `Score`',
            error: 'falta `type Score = number;`.',
          },
          {
            kind: 'includes',
            needle: 'const score: score =',
            success: 'creaste la constante `score`',
            error: 'falta `const score: Score = ...`.',
          },
          {
            kind: 'includes',
            needle: 'console.log(score)',
            success: 'agregaste la salida en consola',
            error: 'falta `console.log(score);`.',
          },
        ],
      },
    ],
  },
  {
    id: 'u2-l2',
    step: '2',
    title: 'Objetos con type alias',
    summary: 'Ahora el alias deja de ser simple y empieza a describir objetos.',
    goal: 'Modelar un objeto reutilizable y leerlo en consola.',
    content: [
      {
        title: 'Tarjeta 1: alias de objeto',
        body: [
          'Un alias tambien puede describir un objeto completo. Eso evita repetir la forma del objeto en cada variable.',
          'En `type Student = { name: string; level: number };`, [[Student]] describe una forma reutilizable.',
        ],
        code:
          "type Student = { name: string; level: number };\nconst student: Student = { name: 'Ana', level: 1 };",
      },
      {
        title: 'Tarjeta 2: leer propiedades y mostrarlas',
        body: [
          'Despues puedes usar el alias en una variable real y leer propiedades como `student.name`.',
          'Con `console.log(student.name);` ya ves el resultado concreto del dato tipado.',
        ],
        code:
          "type Student = { name: string; level: number };\nconst student: Student = { name: 'Ana', level: 1 };\nconsole.log(student.name);",
      },
    ],
    exercises: [
      {
        id: 'u2-l2-c1-e1',
        title: 'Ejercicio 1: type Student',
        instructions: [
          'Escribe `type Student` con `name: string` y `level: number`.',
          'Solo practica el contrato.',
        ],
        placeholder: 'type Student = { name: string; level: number };',
        minLength: 40,
        checks: [
          {
            kind: 'includes',
            needle: 'type student = { name: string; level: number }',
            success: 'creaste `Student` con sus dos propiedades',
            error: 'falta `type Student = { name: string; level: number };`.',
          },
        ],
      },
      {
        id: 'u2-l2-c1-e2',
        title: 'Ejercicio 2: const student',
        instructions: [
          'Debajo escribe `const student: Student = ...`.',
          'Asigna valores a `name` y `level`.',
        ],
        placeholder: '',
        minLength: 70,
        checks: [
          {
            kind: 'includes',
            needle: 'const student: student =',
            success: 'usaste el alias en `student`',
            error: 'falta `const student: Student = ...`.',
          },
          {
            kind: 'includes',
            needle: 'name:',
            success: 'agregaste `name`',
            error: 'falta `name:`.',
          },
          {
            kind: 'includes',
            needle: 'level:',
            success: 'agregaste `level`',
            error: 'falta `level:`.',
          },
        ],
      },
      {
        id: 'u2-l2-c2-e1',
        title: 'Ejercicio 3: console.log(student.name)',
        instructions: [
          'Escribe `student` completo y usa `console.log(student.name);`.',
          'Queremos ver solo el nombre en la consola visual.',
        ],
        placeholder:
          "type Student = { name: string; level: number };\nconst student: Student = { name: 'Ana', level: 1 };\nconsole.log(student.name);",
        minLength: 90,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(student.name)',
            success: 'mostraste `student.name` en consola',
            error: 'falta `console.log(student.name);`.',
          },
        ],
      },
      {
        id: 'u2-l2-c2-e2',
        title: 'Ejercicio 4: console.log(student.level)',
        instructions: [
          'Vuelve a escribir `student` completo.',
          'Ahora usa `console.log(student.level);`.',
        ],
        placeholder: '',
        minLength: 90,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(student.level)',
            success: 'mostraste `student.level` en consola',
            error: 'falta `console.log(student.level);`.',
          },
        ],
      },
    ],
  },
  {
    id: 'u2-l3',
    step: '3',
    title: 'Interfaces',
    summary: 'Ahora conoces la forma mas comun de declarar contratos reutilizables.',
    goal: 'Entender interface y compararla con type alias de objeto.',
    content: [
      {
        title: 'Tarjeta 1: interface',
        body: [
          '[[interface]] tambien sirve para describir objetos. Es muy comun cuando modelas entidades o props.',
          'En `interface Course { title: string; published: boolean; }`, el nombre va despues de `interface`.',
        ],
        code:
          "interface Course {\n  title: string;\n  published: boolean;\n}\n\nconst course: Course = { title: 'TS', published: true };",
      },
      {
        title: 'Tarjeta 2: usar interface y mostrar salida',
        body: [
          'Luego puedes crear un objeto real con ese contrato y usarlo en `console.log`.',
          'Eso te deja ver el valor real y no solo la forma del tipo.',
        ],
        code:
          "interface Course {\n  title: string;\n  published: boolean;\n}\n\nconst course: Course = { title: 'TS', published: true };\nconsole.log(course.title);",
      },
    ],
    exercises: [
      {
        id: 'u2-l3-c1-e1',
        title: 'Ejercicio 1: interface Course',
        instructions: [
          'Escribe `interface Course` con `title` y `published`.',
          'Aqui solo practicas la estructura de la interface.',
        ],
        placeholder:
          "interface Course {\n  title: string;\n  published: boolean;\n}",
        minLength: 48,
        checks: [
          {
            kind: 'includes',
            needle: 'interface course',
            success: 'creaste `Course` como interface',
            error: 'falta `interface Course { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'title: string',
            success: 'agregaste `title`',
            error: 'falta `title: string`.',
          },
          {
            kind: 'includes',
            needle: 'published: boolean',
            success: 'agregaste `published`',
            error: 'falta `published: boolean`.',
          },
        ],
      },
      {
        id: 'u2-l3-c1-e2',
        title: 'Ejercicio 2: const course',
        instructions: [
          'Debajo escribe `const course: Course = ...`.',
          'Asigna valores reales a `title` y `published`.',
        ],
        placeholder: '',
        minLength: 72,
        checks: [
          {
            kind: 'includes',
            needle: 'const course: course =',
            success: 'usaste la interface en `course`',
            error: 'falta `const course: Course = ...`.',
          },
        ],
      },
      {
        id: 'u2-l3-c2-e1',
        title: 'Ejercicio 3: console.log(course.title)',
        instructions: [
          'Escribe `course` completo y luego usa `console.log(course.title);`.',
          'La salida debe mostrar el titulo.',
        ],
        placeholder:
          "interface Course {\n  title: string;\n  published: boolean;\n}\n\nconst course: Course = { title: 'TS', published: true };\nconsole.log(course.title);",
        minLength: 110,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(course.title)',
            success: 'agregaste `console.log(course.title)`',
            error: 'falta `console.log(course.title);`.',
          },
        ],
      },
      {
        id: 'u2-l3-c2-e2',
        title: 'Ejercicio 4: console.log(course.published)',
        instructions: [
          'Vuelve a escribir `course` completo.',
          'Ahora usa `console.log(course.published);`.',
        ],
        placeholder: '',
        minLength: 110,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(course.published)',
            success: 'agregaste `console.log(course.published)`',
            error: 'falta `console.log(course.published);`.',
          },
        ],
      },
    ],
  },
  {
    id: 'u2-l4',
    step: '4',
    title: 'Union types y literal types',
    summary: 'Ahora un dato ya no tiene que aceptar solo una forma.',
    goal: 'Combinar tipos y restringir valores concretos.',
    content: [
      {
        title: 'Tarjeta 1: union simple',
        body: [
          'Una union como `string | number` significa: este dato puede ser texto o numero.',
          'Un literal type como `\'draft\' | \'published\'` restringe el valor a opciones exactas.',
        ],
        code:
          "type Status = 'draft' | 'published';\nconst status: Status = 'draft';",
      },
      {
        title: 'Tarjeta 2: mostrar la union en consola',
        body: [
          'Tambien puedes usar ese valor restringido en tiempo de ejecucion y mostrarlo con `console.log`.',
          'Asi entiendes que el tipo protege y la consola enseña el valor real.',
        ],
        code:
          "type Status = 'draft' | 'published';\nconst status: Status = 'draft';\nconsole.log(status);",
      },
    ],
    exercises: [
      {
        id: 'u2-l4-c1-e1',
        title: 'Ejercicio 1: type Status',
        instructions: [
          'Escribe `type Status = \'draft\' | \'published\';`.',
          'Aqui practicas una union de literales.',
        ],
        placeholder: "type Status = 'draft' | 'published';",
        minLength: 32,
        checks: [
          {
            kind: 'includes',
            needle: "type status = 'draft' | 'published'",
            success: 'creaste `Status` como union de literales',
            error: 'falta `type Status = \'draft\' | \'published\';`.',
          },
        ],
      },
      {
        id: 'u2-l4-c1-e2',
        title: 'Ejercicio 2: const status',
        instructions: [
          'Debajo escribe `const status: Status = ...`.',
          'Usa uno de los dos valores permitidos.',
        ],
        placeholder: '',
        minLength: 45,
        checks: [
          {
            kind: 'includes',
            needle: 'const status: status =',
            success: 'usaste `Status` en una constante',
            error: 'falta `const status: Status = ...`.',
          },
        ],
      },
      {
        id: 'u2-l4-c2-e1',
        title: 'Ejercicio 3: console.log(status)',
        instructions: [
          'Escribe `status` completo y luego usa `console.log(status);`.',
          'La consola debe mostrar el valor literal elegido.',
        ],
        placeholder:
          "type Status = 'draft' | 'published';\nconst status: Status = 'draft';\nconsole.log(status);",
        minLength: 70,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(status)',
            success: 'agregaste `console.log(status)`',
            error: 'falta `console.log(status);`.',
          },
        ],
      },
      {
        id: 'u2-l4-c2-e2',
        title: 'Ejercicio 4: string | number',
        instructions: [
          'Escribe `type Code = string | number;`.',
          'Luego crea `const code: Code = 404;` y usa `console.log(code);`.',
        ],
        placeholder: '',
        minLength: 60,
        checks: [
          {
            kind: 'includes',
            needle: 'type code = string | number',
            success: 'creaste `Code` como union simple',
            error: 'falta `type Code = string | number;`.',
          },
          {
            kind: 'includes',
            needle: 'const code: code =',
            success: 'creaste `code` usando el alias',
            error: 'falta `const code: Code = ...`.',
          },
          {
            kind: 'includes',
            needle: 'console.log(code)',
            success: 'agregaste `console.log(code)`',
            error: 'falta `console.log(code);`.',
          },
        ],
      },
    ],
  },
  {
    id: 'u2-l5',
    step: '5',
    title: 'Narrowing con typeof',
    summary: 'Ahora aprendes a preguntar que tipo llego antes de usarlo.',
    goal: 'Reducir una union a un caso concreto con `typeof`.',
    content: [
      {
        title: 'Tarjeta 1: if y typeof',
        body: [
          'Con `typeof` puedes preguntar si un valor es `string`, `number` u otro tipo primitivo.',
          'Eso ayuda a [[narrowing]]: primero preguntas, luego usas el valor con seguridad.',
        ],
        code:
          "function printValue(value: string | number): void {\n  if (typeof value === 'string') {\n    console.log(value.toUpperCase());\n  }\n}",
      },
      {
        title: 'Tarjeta 2: ramas distintas, salidas distintas',
        body: [
          'Si el valor es texto, haces una cosa. Si es numero, haces otra. Cada rama puede mostrar una salida diferente.',
          'Eso convierte una union en una decision clara y visible.',
        ],
        code:
          "function printValue(value: string | number): void {\n  if (typeof value === 'string') {\n    console.log(value.toUpperCase());\n    return;\n  }\n\n  console.log(value.toFixed(0));\n}",
      },
    ],
    exercises: [
      {
        id: 'u2-l5-c1-e1',
        title: 'Ejercicio 1: firma de printValue',
        instructions: [
          'Escribe `printValue(value: string | number): void`.',
          'Aqui solo practicas la firma con union.',
        ],
        placeholder:
          "function printValue(value: string | number): void {\n}",
        minLength: 50,
        checks: [
          {
            kind: 'includes',
            needle: 'function printvalue(value: string | number): void',
            success: 'escribiste la firma con union',
            error: 'falta `function printValue(value: string | number): void {}`.',
          },
        ],
      },
      {
        id: 'u2-l5-c1-e2',
        title: 'Ejercicio 2: rama string',
        instructions: [
          'Dentro usa `if (typeof value === \'string\')`.',
          'En esa rama muestra `console.log(value.toUpperCase());`.',
        ],
        placeholder: '',
        minLength: 95,
        checks: [
          {
            kind: 'includes',
            needle: "typeof value === 'string'",
            success: 'creaste la rama `string`',
            error: 'falta `typeof value === \'string\'`.',
          },
          {
            kind: 'includes',
            needle: 'console.log(value.touppercase())',
            success: 'mostraste el texto en mayusculas',
            error: 'falta `console.log(value.toUpperCase());`.',
          },
        ],
      },
      {
        id: 'u2-l5-c2-e1',
        title: 'Ejercicio 3: rama number',
        instructions: [
          'Agrega el caso numero fuera del `if`.',
          'Muestra `console.log(value.toFixed(0));`.',
        ],
        placeholder:
          "function printValue(value: string | number): void {\n  if (typeof value === 'string') {\n    console.log(value.toUpperCase());\n    return;\n  }\n\n  console.log(value.toFixed(0));\n}",
        minLength: 140,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(value.tofixed(0))',
            success: 'agregaste la salida para numero',
            error: 'falta `console.log(value.toFixed(0));`.',
          },
        ],
      },
      {
        id: 'u2-l5-c2-e2',
        title: 'Ejercicio 4: prueba dos llamadas',
        instructions: [
          'Escribe `printValue` completa.',
          'Debajo llama `printValue(\'hola\')` y `printValue(42)` para ver dos salidas.',
        ],
        placeholder: '',
        minLength: 150,
        checks: [
          {
            kind: 'includes',
            needle: "printvalue('hola')",
            success: 'probaste el caso string',
            error: 'falta `printValue(\'hola\')`.',
          },
          {
            kind: 'includes',
            needle: 'printvalue(42)',
            success: 'probaste el caso number',
            error: 'falta `printValue(42)`.',
          },
        ],
      },
    ],
  },
  {
    id: 'u2-l6',
    step: '6',
    title: 'Discriminated unions',
    summary: 'Cierras la unidad con una union mas seria y una propiedad que decide la rama.',
    goal: 'Usar una propiedad discriminante para elegir el camino correcto.',
    content: [
      {
        title: 'Tarjeta 1: kind decide la rama',
        body: [
          'En una discriminated union, una propiedad como `kind` decide cual forma del objeto tienes delante.',
          'Si `kind` es `\'text\'`, usas `message`. Si `kind` es `\'count\'`, usas `total`.',
        ],
        code:
          "type Event =\n  | { kind: 'text'; message: string }\n  | { kind: 'count'; total: number };",
      },
      {
        title: 'Tarjeta 2: mostrar salida segun kind',
        body: [
          'La rama correcta se elige leyendo `event.kind`. Luego cada rama usa solo las propiedades que le pertenecen.',
          'Esto se siente como una pequena piramide: primero identificas, luego actuas, luego muestras la salida.',
        ],
        code:
          "function printEvent(event: Event): void {\n  if (event.kind === 'text') {\n    console.log(event.message);\n    return;\n  }\n\n  console.log(event.total);\n}",
      },
    ],
    exercises: [
      {
        id: 'u2-l6-c1-e1',
        title: 'Ejercicio 1: type Event',
        instructions: [
          'Escribe `type Event` con dos ramas: `text` y `count`.',
          'La rama `text` usa `message`. La rama `count` usa `total`.',
        ],
        placeholder:
          "type Event =\n  | { kind: 'text'; message: string }\n  | { kind: 'count'; total: number };",
        minLength: 80,
        checks: [
          {
            kind: 'includes',
            needle: "kind: 'text'",
            success: 'agregaste la rama `text`',
            error: 'falta la rama con `kind: \'text\'`.',
          },
          {
            kind: 'includes',
            needle: "kind: 'count'",
            success: 'agregaste la rama `count`',
            error: 'falta la rama con `kind: \'count\'`.',
          },
        ],
      },
      {
        id: 'u2-l6-c1-e2',
        title: 'Ejercicio 2: firma de printEvent',
        instructions: [
          'Escribe `function printEvent(event: Event): void`.',
          'Solo practica la firma antes de escribir la logica.',
        ],
        placeholder: '',
        minLength: 40,
        checks: [
          {
            kind: 'includes',
            needle: 'function printevent(event: event): void',
            success: 'escribiste la firma de `printEvent`',
            error: 'falta `function printEvent(event: Event): void {}`.',
          },
        ],
      },
      {
        id: 'u2-l6-c2-e1',
        title: 'Ejercicio 3: rama text',
        instructions: [
          'Dentro revisa `if (event.kind === \'text\')`.',
          'En esa rama usa `console.log(event.message);`.',
        ],
        placeholder:
          "function printEvent(event: Event): void {\n  if (event.kind === 'text') {\n    console.log(event.message);\n  }\n}",
        minLength: 95,
        checks: [
          {
            kind: 'includes',
            needle: "event.kind === 'text'",
            success: 'revisaste la rama `text`',
            error: 'falta `event.kind === \'text\'`.',
          },
          {
            kind: 'includes',
            needle: 'console.log(event.message)',
            success: 'mostraste `event.message`',
            error: 'falta `console.log(event.message);`.',
          },
        ],
      },
      {
        id: 'u2-l6-c2-e2',
        title: 'Ejercicio 4: rama count y pruebas',
        instructions: [
          'Completa `printEvent` con la rama `count` y `console.log(event.total);`.',
          'Debajo llama una vez con `kind: \'text\'` y otra con `kind: \'count\'`.',
        ],
        placeholder: '',
        minLength: 150,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(event.total)',
            success: 'mostraste `event.total`',
            error: 'falta `console.log(event.total);`.',
          },
          {
            kind: 'includes',
            needle: "kind: 'text'",
            success: 'probaste la rama `text`',
            error: 'falta una llamada de prueba con `kind: \'text\'`.',
          },
          {
            kind: 'includes',
            needle: "kind: 'count'",
            success: 'probaste la rama `count`',
            error: 'falta una llamada de prueba con `kind: \'count\'`.',
          },
        ],
      },
    ],
  },
];
