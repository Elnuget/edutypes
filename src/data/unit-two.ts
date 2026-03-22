import type { UnitLesson } from './unit-types';

export const unitTwoLessons: UnitLesson[] = [
  {
    id: 'u2-l1',
    step: '1',
    title: 'Type alias y salida visible',
    summary: 'Aprendes que hace `type`, como nombra un tipo y como reutilizarlo.',
    goal: 'Entender [[type]], [[AliasName]], [[=]] y [[console.log]].',
    content: [
      {
        title: 'Tarjeta 1: la palabra type',
        body: [
          '[[type]] crea un nombre para un tipo. No guarda un valor real. Solo crea una etiqueta reutilizable.',
          'En `type UserName = string;`, [[UserName]] es el nombre del alias. Todavia no existe una variable real.',
        ],
        code: "type UserName = string;",
      },
      {
        title: 'Tarjeta 2: el signo igual en un alias',
        body: [
          'En un alias, el [[=]] une el nombre nuevo con el tipo real. A la derecha escribes el tipo verdadero.',
          'Si escribes `type Score = number;`, [[Score]] queda conectado con [[number]].',
        ],
        code: "type UserName = string;\ntype Score = number;",
      },
      {
        title: 'Tarjeta 3: usar el alias en una constante',
        body: [
          "Despues puedes usar el alias en una variable real. En `const userName: UserName = 'Ana';`, el alias aparece donde iria el tipo.",
          'Aqui ya tienes dos capas: el alias arriba y la constante abajo.',
        ],
        code:
          "type UserName = string;\nconst userName: UserName = 'Ana';",
      },
      {
        title: 'Tarjeta 4: ver el valor en consola',
        body: [
          '[[console.log]] muestra el valor real en la consola. El tipo protege la forma, pero la consola ensena el dato.',
          'Asi puedes comprobar que `userName` y `score` no solo compilan: tambien producen una salida visible.',
        ],
        code:
          "type UserName = string;\ntype Score = number;\n\nconst userName: UserName = 'Ana';\nconst score: Score = 10;\n\nconsole.log(userName);\nconsole.log(score);",
      },
    ],
    exercises: [
      {
        id: 'u2-l1-c1-e1',
        title: 'Ejercicio 1: alias de texto',
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
        title: 'Ejercicio 2: alias de numero',
        instructions: [
          'Escribe `type Score = number;`.',
          'Repite la misma estructura con otro tipo.',
        ],
        placeholder: '',
        minLength: 18,
        checks: [
          {
            kind: 'includes',
            needle: 'type score = number',
            success: 'creaste el alias `Score`',
            error: 'falta `type Score = number;`.',
          },
        ],
      },
      {
        id: 'u2-l1-c2-e1',
        title: 'Ejercicio 3: otro alias simple',
        instructions: [
          'Escribe `type IsActive = boolean;`.',
          'La idea es practicar que el alias tambien puede apuntar a `boolean`.',
        ],
        placeholder: 'type IsActive = boolean;',
        minLength: 22,
        checks: [
          {
            kind: 'includes',
            needle: 'type isactive = boolean',
            success: 'creaste el alias `IsActive`',
            error: 'falta `type IsActive = boolean;`.',
          },
        ],
      },
      {
        id: 'u2-l1-c2-e2',
        title: 'Ejercicio 4: otro alias de texto',
        instructions: [
          'Escribe `type CourseTitle = string;`.',
          'Asi repites el mismo patron con otro nombre.',
        ],
        placeholder: '',
        minLength: 24,
        checks: [
          {
            kind: 'includes',
            needle: 'type coursetitle = string',
            success: 'creaste el alias `CourseTitle`',
            error: 'falta `type CourseTitle = string;`.',
          },
        ],
      },
      {
        id: 'u2-l1-c3-e1',
        title: 'Ejercicio 5: constante con alias',
        instructions: [
          'Escribe `userName` usando el alias `UserName`.',
          'Asigna un texto real.',
        ],
        placeholder:
          "type UserName = string;\nconst userName: UserName = 'Ana';",
        minLength: 46,
        checks: [
          {
            kind: 'includes',
            needle: 'type username = string',
            success: 'mantuviste el alias `UserName`',
            error: 'falta el alias `UserName`.',
          },
          {
            kind: 'includes',
            needle: 'const username: username =',
            success: 'usaste el alias en `userName`',
            error: 'falta `const userName: UserName = ...`.',
          },
        ],
      },
      {
        id: 'u2-l1-c3-e2',
        title: 'Ejercicio 6: numero con alias',
        instructions: [
          'Escribe `score` usando el alias `Score`.',
          'Asigna un numero real.',
        ],
        placeholder: '',
        minLength: 40,
        checks: [
          {
            kind: 'includes',
            needle: 'type score = number',
            success: 'mantuviste el alias `Score`',
            error: 'falta el alias `Score`.',
          },
          {
            kind: 'includes',
            needle: 'const score: score =',
            success: 'usaste el alias en `score`',
            error: 'falta `const score: Score = ...`.',
          },
        ],
      },
      {
        id: 'u2-l1-c4-e1',
        title: 'Ejercicio 7: consola con userName',
        instructions: [
          'Escribe `userName` completo y luego usa `console.log(userName);`.',
          'Queremos ver un texto real en la consola visual.',
        ],
        placeholder:
          "type UserName = string;\nconst userName: UserName = 'Ana';\nconsole.log(userName);",
        minLength: 70,
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
        id: 'u2-l1-c4-e2',
        title: 'Ejercicio 8: consola con score',
        instructions: [
          'Escribe `score` completo y luego usa `console.log(score);`.',
          'La consola debe mostrar el numero real.',
        ],
        placeholder: '',
        minLength: 64,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(score)',
            success: 'agregaste `console.log(score)`',
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
    goal: 'Entender [[type Student = {...}]], [[;]], [[student.name]] y [[console.log]].',
    content: [
      {
        title: 'Tarjeta 1: alias de objeto simple',
        body: [
          'Un alias tambien puede describir un objeto completo. En `type Student = { name: string };`, [[Student]] ya no es texto simple: es una forma de objeto.',
          'Las llaves `{}` guardan la lista de propiedades que ese objeto debe tener.',
        ],
        code:
          "type Student = { name: string };",
      },
      {
        title: 'Tarjeta 2: sumar otra propiedad',
        body: [
          'Dentro del alias de objeto, cada propiedad usa `:` para unir nombre y tipo. El `;` separa una propiedad de la siguiente.',
          'Si agregas `level: number`, el contrato ahora exige nombre y nivel.',
        ],
        code:
          "type Student = { name: string; level: number };",
      },
      {
        title: 'Tarjeta 3: crear el objeto real',
        body: [
          'Despues usas el alias en una constante real. En `const student: Student = ...`, el alias va donde iria el tipo.',
          'Luego puedes entrar con el punto y leer `student.name` o `student.level`.',
        ],
        code:
          "type Student = { name: string; level: number };\nconst student: Student = { name: 'Ana', level: 1 };\nstudent.name;\nstudent.level;",
      },
      {
        title: 'Tarjeta 4: mostrar propiedades en consola',
        body: [
          'Cada propiedad tambien se puede mostrar con [[console.log]].',
          'Eso vuelve visible la diferencia entre el contrato de arriba y los valores reales del objeto de abajo.',
        ],
        code:
          "type Student = { name: string; level: number };\nconst student: Student = { name: 'Ana', level: 1 };\nconsole.log(student.name);\nconsole.log(student.level);",
      },
    ],
    exercises: [
      {
        id: 'u2-l2-c1-e1',
        title: 'Ejercicio 1: alias con una propiedad',
        instructions: [
          'Escribe `type Student = { name: string };`.',
          'Aqui solo practicas la forma mas corta del alias de objeto.',
        ],
        placeholder: 'type Student = { name: string };',
        minLength: 30,
        checks: [
          {
            kind: 'includes',
            needle: 'type student = { name: string }',
            success: 'creaste `Student` con una propiedad',
            error: 'falta `type Student = { name: string };`.',
          },
        ],
      },
      {
        id: 'u2-l2-c1-e2',
        title: 'Ejercicio 2: constante con una propiedad',
        instructions: [
          'Debajo escribe `const student: Student = ...`.',
          'El objeto real debe tener `name`.',
        ],
        placeholder: '',
        minLength: 54,
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
            success: 'agregaste `name:`',
            error: 'falta `name:` dentro del objeto.',
          },
        ],
      },
      {
        id: 'u2-l2-c2-e1',
        title: 'Ejercicio 3: agrega level',
        instructions: [
          'Escribe `type Student = { name: string; level: number };`.',
          'Debes separar las dos propiedades con `;`.',
        ],
        placeholder: 'type Student = { name: string; level: number };',
        minLength: 46,
        checks: [
          {
            kind: 'includes',
            needle: 'type student = { name: string; level: number }',
            success: 'el alias `Student` ya tiene dos propiedades',
            error: 'falta `type Student = { name: string; level: number };`.',
          },
        ],
      },
      {
        id: 'u2-l2-c2-e2',
        title: 'Ejercicio 4: objeto con dos propiedades',
        instructions: [
          'Escribe `const student: Student = ...` con `name` y `level`.',
          'Debes asignar valores reales a las dos propiedades.',
        ],
        placeholder: '',
        minLength: 72,
        checks: [
          {
            kind: 'includes',
            needle: 'const student: student =',
            success: 'mantuviste `student` con el alias correcto',
            error: 'falta `const student: Student = ...`.',
          },
          {
            kind: 'includes',
            needle: 'level:',
            success: 'agregaste `level:`',
            error: 'falta `level:` dentro del objeto.',
          },
        ],
      },
      {
        id: 'u2-l2-c3-e1',
        title: 'Ejercicio 5: lee student.name',
        instructions: [
          'Escribe una sola linea con [[student.name]].',
          'Aqui solo practicas el acceso con punto.',
        ],
        placeholder: 'student.name;',
        minLength: 10,
        checks: [
          {
            kind: 'includes',
            needle: 'student.name',
            success: 'usaste `student.name`',
            error: 'falta `student.name`.',
          },
        ],
      },
      {
        id: 'u2-l2-c3-e2',
        title: 'Ejercicio 6: lee student.level',
        instructions: [
          'Escribe una sola linea con `student.level`.',
          'Asi practicas otra propiedad del mismo objeto.',
        ],
        placeholder: '',
        minLength: 11,
        checks: [
          {
            kind: 'includes',
            needle: 'student.level',
            success: 'usaste `student.level`',
            error: 'falta `student.level`.',
          },
        ],
      },
      {
        id: 'u2-l2-c4-e1',
        title: 'Ejercicio 7: consola con name',
        instructions: [
          'Escribe `student` completo y luego usa `console.log(student.name);`.',
          'La consola debe mostrar solo el nombre.',
        ],
        placeholder:
          "type Student = { name: string; level: number };\nconst student: Student = { name: 'Ana', level: 1 };\nconsole.log(student.name);",
        minLength: 96,
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
        id: 'u2-l2-c4-e2',
        title: 'Ejercicio 8: consola con level',
        instructions: [
          'Escribe `student` completo y luego usa `console.log(student.level);`.',
          'La consola debe mostrar el nivel real.',
        ],
        placeholder: '',
        minLength: 96,
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
    summary: 'Ahora conoces la otra forma comun de declarar contratos reutilizables.',
    goal: 'Entender [[interface]], [[Course]], [[const course: Course]] y [[course.title]].',
    content: [
      {
        title: 'Tarjeta 1: la palabra interface',
        body: [
          '[[interface]] tambien describe objetos. Se parece a un alias de objeto, pero ya no usa `=`.',
          'En `interface Course { ... }`, el nombre [[Course]] va justo despues de [[interface]].',
        ],
        code:
          "interface Course {\n  title: string;\n}",
      },
      {
        title: 'Tarjeta 2: propiedades dentro de la interface',
        body: [
          'Dentro de la interface, cada propiedad sigue usando `:` para unir nombre y tipo.',
          'El `;` sigue separando una propiedad de la siguiente, igual que en varios objetos y aliases que ya viste.',
        ],
        code:
          "interface Course {\n  title: string;\n  published: boolean;\n}",
      },
      {
        title: 'Tarjeta 3: usar la interface en una constante',
        body: [
          'Despues puedes escribir `const course: Course = ...`. La interface vive arriba y el objeto real vive abajo.',
          'Eso te deja leer propiedades como [[course.title]] con una forma ya controlada.',
        ],
        code:
          "interface Course {\n  title: string;\n  published: boolean;\n}\n\nconst course: Course = { title: 'TS', published: true };\ncourse.title;",
      },
      {
        title: 'Tarjeta 4: interface en funciones y consola',
        body: [
          'Una funcion tambien puede recibir un dato tipado con interface. Luego puedes mostrar una propiedad en [[console.log]].',
          'Asi ves que la interface sirve tanto para variables como para parametros.',
        ],
        code:
          "interface Course {\n  title: string;\n  published: boolean;\n}\n\nfunction printCourse(course: Course) {\n  console.log(course.title);\n}",
      },
    ],
    exercises: [
      {
        id: 'u2-l3-c1-e1',
        title: 'Ejercicio 1: interface minima',
        instructions: [
          'Escribe `interface Course` con solo `title: string;`.',
          'Aqui practicas la forma minima de una interface.',
        ],
        placeholder:
          "interface Course {\n  title: string;\n}",
        minLength: 34,
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
            success: 'agregaste `title: string`',
            error: 'falta `title: string`.',
          },
        ],
      },
      {
        id: 'u2-l3-c1-e2',
        title: 'Ejercicio 2: otra interface minima',
        instructions: [
          'Escribe `interface Module` con solo `name: string;`.',
          'La idea es repetir la misma forma con otro nombre.',
        ],
        placeholder: '',
        minLength: 34,
        checks: [
          {
            kind: 'includes',
            needle: 'interface module',
            success: 'creaste `Module` como interface',
            error: 'falta `interface Module { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'name: string',
            success: 'agregaste `name: string`',
            error: 'falta `name: string`.',
          },
        ],
      },
      {
        id: 'u2-l3-c2-e1',
        title: 'Ejercicio 3: interface Course completa',
        instructions: [
          'Escribe `interface Course` con `title: string;` y `published: boolean;`.',
          'Debes separar las dos propiedades con `;`.',
        ],
        placeholder:
          "interface Course {\n  title: string;\n  published: boolean;\n}",
        minLength: 52,
        checks: [
          {
            kind: 'includes',
            needle: 'interface course',
            success: 'mantuviste la interface `Course`',
            error: 'falta `interface Course { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'published: boolean',
            success: 'agregaste `published: boolean`',
            error: 'falta `published: boolean`.',
          },
        ],
      },
      {
        id: 'u2-l3-c2-e2',
        title: 'Ejercicio 4: interface Lesson completa',
        instructions: [
          'Escribe `interface Lesson` con `title: string;` y `duration: number;`.',
          'Asi practicas otra interface con dos propiedades.',
        ],
        placeholder: '',
        minLength: 52,
        checks: [
          {
            kind: 'includes',
            needle: 'interface lesson',
            success: 'creaste `Lesson` como interface',
            error: 'falta `interface Lesson { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'duration: number',
            success: 'agregaste `duration: number`',
            error: 'falta `duration: number`.',
          },
        ],
      },
      {
        id: 'u2-l3-c3-e1',
        title: 'Ejercicio 5: const course',
        instructions: [
          'Escribe `course` usando la interface `Course`.',
          'Asigna valores reales a `title` y `published`.',
        ],
        placeholder:
          "interface Course {\n  title: string;\n  published: boolean;\n}\n\nconst course: Course = { title: 'TS', published: true };",
        minLength: 92,
        checks: [
          {
            kind: 'includes',
            needle: 'const course: course =',
            success: 'usaste la interface en `course`',
            error: 'falta `const course: Course = ...`.',
          },
          {
            kind: 'includes',
            needle: 'title:',
            success: 'agregaste `title:`',
            error: 'falta `title:` dentro del objeto.',
          },
          {
            kind: 'includes',
            needle: 'published:',
            success: 'agregaste `published:`',
            error: 'falta `published:` dentro del objeto.',
          },
        ],
      },
      {
        id: 'u2-l3-c3-e2',
        title: 'Ejercicio 6: otra constante tipada',
        instructions: [
          'Escribe `courseDraft` usando la interface `Course`.',
          'Tambien debe tener `title` y `published`.',
        ],
        placeholder: '',
        minLength: 96,
        checks: [
          {
            kind: 'includes',
            needle: 'const coursedraft: course =',
            success: 'usaste `Course` en `courseDraft`',
            error: 'falta `const courseDraft: Course = ...`.',
          },
        ],
      },
      {
        id: 'u2-l3-c4-e1',
        title: 'Ejercicio 7: printCourse',
        instructions: [
          'Escribe `function printCourse(course: Course) { ... }`.',
          'Dentro usa `console.log(course.title);`.',
        ],
        placeholder:
          "interface Course {\n  title: string;\n  published: boolean;\n}\n\nfunction printCourse(course: Course) {\n  console.log(course.title);\n}",
        minLength: 112,
        checks: [
          {
            kind: 'includes',
            needle: 'function printcourse(course: course)',
            success: 'escribiste la firma de `printCourse`',
            error: 'falta `function printCourse(course: Course) { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'console.log(course.title)',
            success: 'mostraste `course.title` en consola',
            error: 'falta `console.log(course.title);`.',
          },
        ],
      },
      {
        id: 'u2-l3-c4-e2',
        title: 'Ejercicio 8: printPublished',
        instructions: [
          'Escribe `function printPublished(course: Course) { ... }`.',
          'Dentro usa `console.log(course.published);`.',
        ],
        placeholder: '',
        minLength: 112,
        checks: [
          {
            kind: 'includes',
            needle: 'function printpublished(course: course)',
            success: 'escribiste la firma de `printPublished`',
            error: 'falta `function printPublished(course: Course) { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'console.log(course.published)',
            success: 'mostraste `course.published` en consola',
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
    goal: 'Entender [[|]], [[literal types]], [[Status]] y [[Code]].',
    content: [
      {
        title: 'Tarjeta 1: union simple',
        body: [
          'Una union como [[string | number]] significa: este dato puede ser texto o numero.',
          'La barra `|` se lee como "o". No significa los dos al mismo tiempo, sino una opcion permitida.',
        ],
        code:
          "type Code = string | number;",
      },
      {
        title: 'Tarjeta 2: union de valores exactos',
        body: [
          'Un [[literal type]] restringe el valor a opciones exactas. En `type Status = \'draft\' | \'published\';` ya no entra cualquier texto.',
          'Eso hace el tipo mas estricto: solo acepta las palabras declaradas en la union.',
        ],
        code:
          "type Status = 'draft' | 'published';",
      },
      {
        title: 'Tarjeta 3: variables con union',
        body: [
          'Despues puedes usar el alias en una constante real. La variable queda limitada por lo que el alias permite.',
          'Si el alias es [[Code]], la variable puede ser texto o numero. Si el alias es [[Status]], solo acepta las dos palabras exactas.',
        ],
        code:
          "type Code = string | number;\ntype Status = 'draft' | 'published';\n\nconst code: Code = 404;\nconst status: Status = 'draft';",
      },
      {
        title: 'Tarjeta 4: ver unions en consola',
        body: [
          'La union decide lo que esta permitido. [[console.log]] solo enseña el valor real que elegiste.',
          'Eso ayuda a separar dos capas: regla del tipo arriba y salida visible abajo.',
        ],
        code:
          "type Code = string | number;\ntype Status = 'draft' | 'published';\n\nconst code: Code = 404;\nconst status: Status = 'draft';\n\nconsole.log(code);\nconsole.log(status);",
      },
    ],
    exercises: [
      {
        id: 'u2-l4-c1-e1',
        title: 'Ejercicio 1: union simple',
        instructions: [
          'Escribe `type Code = string | number;`.',
          'Aqui practicas una union de dos tipos base.',
        ],
        placeholder: 'type Code = string | number;',
        minLength: 24,
        checks: [
          {
            kind: 'includes',
            needle: 'type code = string | number',
            success: 'creaste `Code` como union simple',
            error: 'falta `type Code = string | number;`.',
          },
        ],
      },
      {
        id: 'u2-l4-c1-e2',
        title: 'Ejercicio 2: otra union simple',
        instructions: [
          'Escribe `type Result = string | number;`.',
          'La idea es repetir la misma estructura con otro nombre.',
        ],
        placeholder: '',
        minLength: 26,
        checks: [
          {
            kind: 'includes',
            needle: 'type result = string | number',
            success: 'creaste `Result` como union simple',
            error: 'falta `type Result = string | number;`.',
          },
        ],
      },
      {
        id: 'u2-l4-c2-e1',
        title: 'Ejercicio 3: literal union',
        instructions: [
          'Escribe `type Status = \'draft\' | \'published\';`.',
          'Aqui practicas una union de valores exactos.',
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
        id: 'u2-l4-c2-e2',
        title: 'Ejercicio 4: otra union de literales',
        instructions: [
          'Escribe `type Theme = \'light\' | \'dark\';`.',
          'Asi repites el patron con otras dos palabras exactas.',
        ],
        placeholder: '',
        minLength: 28,
        checks: [
          {
            kind: 'includes',
            needle: "type theme = 'light' | 'dark'",
            success: 'creaste `Theme` como union de literales',
            error: 'falta `type Theme = \'light\' | \'dark\';`.',
          },
        ],
      },
      {
        id: 'u2-l4-c3-e1',
        title: 'Ejercicio 5: const code',
        instructions: [
          'Escribe `const code: Code = 404;`.',
          'La constante debe usar el alias `Code`.',
        ],
        placeholder:
          "type Code = string | number;\nconst code: Code = 404;",
        minLength: 40,
        checks: [
          {
            kind: 'includes',
            needle: 'const code: code =',
            success: 'usaste `Code` en `code`',
            error: 'falta `const code: Code = ...`.',
          },
        ],
      },
      {
        id: 'u2-l4-c3-e2',
        title: 'Ejercicio 6: const status',
        instructions: [
          'Escribe `const status: Status = \'draft\';`.',
          'La constante debe usar el alias `Status`.',
        ],
        placeholder: '',
        minLength: 42,
        checks: [
          {
            kind: 'includes',
            needle: 'const status: status =',
            success: 'usaste `Status` en `status`',
            error: 'falta `const status: Status = ...`.',
          },
        ],
      },
      {
        id: 'u2-l4-c4-e1',
        title: 'Ejercicio 7: consola con code',
        instructions: [
          'Escribe `code` completo y luego usa `console.log(code);`.',
          'La consola debe mostrar el valor real.',
        ],
        placeholder:
          "type Code = string | number;\nconst code: Code = 404;\nconsole.log(code);",
        minLength: 58,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(code)',
            success: 'agregaste `console.log(code)`',
            error: 'falta `console.log(code);`.',
          },
        ],
      },
      {
        id: 'u2-l4-c4-e2',
        title: 'Ejercicio 8: consola con status',
        instructions: [
          'Escribe `status` completo y luego usa `console.log(status);`.',
          'La consola debe mostrar uno de los valores permitidos.',
        ],
        placeholder: '',
        minLength: 64,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(status)',
            success: 'agregaste `console.log(status)`',
            error: 'falta `console.log(status);`.',
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
    goal: 'Entender [[typeof]], [[if]], rama [[string]] y rama [[number]].',
    content: [
      {
        title: 'Tarjeta 1: firma con union',
        body: [
          'Primero declaras una funcion que recibe una union. En `value: string | number`, todavia no sabes cual de las dos formas llego.',
          'Por eso no puedes tratarlo como texto o numero sin preguntar antes.',
        ],
        code:
          "function printValue(value: string | number) {\n}",
      },
      {
        title: 'Tarjeta 2: la pregunta con typeof',
        body: [
          "[[typeof]] mira el tipo real en tiempo de ejecucion. Con `typeof value === 'string'` preguntas si llego texto.",
          'Solo dentro de esa rama el valor se reduce a [[string]].',
        ],
        code:
          "function printValue(value: string | number) {\n  if (typeof value === 'string') {\n    console.log(value.toUpperCase());\n  }\n}",
      },
      {
        title: 'Tarjeta 3: la rama del numero',
        body: [
          'Si no entro a la rama string, puedes usar un [[else]] para el caso numero.',
          'Asi cada rama usa solo metodos que pertenecen al tipo correcto.',
        ],
        code:
          "function printValue(value: string | number) {\n  if (typeof value === 'string') {\n    console.log(value.toUpperCase());\n  } else {\n    console.log(value.toFixed(0));\n  }\n}",
      },
      {
        title: 'Tarjeta 4: probar las dos ramas',
        body: [
          'Despues llamas la funcion con un texto y con un numero. Eso te deja ver dos salidas distintas.',
          'El narrowing no es solo teoria: la consola muestra que cada rama hizo algo diferente.',
        ],
        code:
          "printValue('hola');\nprintValue(42);",
      },
    ],
    exercises: [
      {
        id: 'u2-l5-c1-e1',
        title: 'Ejercicio 1: firma de printValue',
        instructions: [
          'Escribe `function printValue(value: string | number) {}`.',
          'Aqui solo practicas la firma con union.',
        ],
        placeholder:
          "function printValue(value: string | number) {\n}",
        minLength: 44,
        checks: [
          {
            kind: 'includes',
            needle: 'function printvalue(value: string | number)',
            success: 'escribiste la firma con union',
            error: 'falta `function printValue(value: string | number) {}`.',
          },
        ],
      },
      {
        id: 'u2-l5-c1-e2',
        title: 'Ejercicio 2: otra firma con union',
        instructions: [
          'Escribe `function showValue(value: string | number) {}`.',
          'La idea es repetir la misma firma con otro nombre.',
        ],
        placeholder: '',
        minLength: 42,
        checks: [
          {
            kind: 'includes',
            needle: 'function showvalue(value: string | number)',
            success: 'escribiste la firma de `showValue`',
            error: 'falta `function showValue(value: string | number) {}`.',
          },
        ],
      },
      {
        id: 'u2-l5-c2-e1',
        title: 'Ejercicio 3: rama string',
        instructions: [
          'Dentro usa `if (typeof value === \'string\')`.',
          'En esa rama muestra `console.log(value.toUpperCase());`.',
        ],
        placeholder:
          "function printValue(value: string | number) {\n  if (typeof value === 'string') {\n    console.log(value.toUpperCase());\n  }\n}",
        minLength: 112,
        checks: [
          {
            kind: 'includes',
            needle: "typeof value === 'string'",
            success: 'creaste la rama string',
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
        id: 'u2-l5-c2-e2',
        title: 'Ejercicio 4: misma rama en showValue',
        instructions: [
          'Escribe `showValue` con la misma rama `typeof value === \'string\'`.',
          'Dentro usa `console.log(value.toUpperCase());`.',
        ],
        placeholder: '',
        minLength: 110,
        checks: [
          {
            kind: 'includes',
            needle: 'function showvalue(value: string | number)',
            success: 'mantuviste la firma de `showValue`',
            error: 'falta `function showValue(value: string | number) { ... }`.',
          },
          {
            kind: 'includes',
            needle: "typeof value === 'string'",
            success: 'creaste la rama string en `showValue`',
            error: 'falta `typeof value === \'string\'` en `showValue`.',
          },
        ],
      },
      {
        id: 'u2-l5-c3-e1',
        title: 'Ejercicio 5: rama number',
        instructions: [
          'Completa `printValue` con `else`.',
          'En esa rama usa `console.log(value.toFixed(0));`.',
        ],
        placeholder:
          "function printValue(value: string | number) {\n  if (typeof value === 'string') {\n    console.log(value.toUpperCase());\n  } else {\n    console.log(value.toFixed(0));\n  }\n}",
        minLength: 154,
        checks: [
          {
            kind: 'includes',
            needle: 'else',
            success: 'agregaste la segunda rama',
            error: 'falta `else` para el otro caso.',
          },
          {
            kind: 'includes',
            needle: 'console.log(value.tofixed(0))',
            success: 'agregaste la salida para numero',
            error: 'falta `console.log(value.toFixed(0));`.',
          },
        ],
      },
      {
        id: 'u2-l5-c3-e2',
        title: 'Ejercicio 6: rama number en showValue',
        instructions: [
          'Completa `showValue` con `else`.',
          'En esa rama usa `console.log(value.toFixed(0));`.',
        ],
        placeholder: '',
        minLength: 150,
        checks: [
          {
            kind: 'includes',
            needle: 'else',
            success: 'agregaste la segunda rama en `showValue`',
            error: 'falta `else` en `showValue`.',
          },
          {
            kind: 'includes',
            needle: 'console.log(value.tofixed(0))',
            success: 'agregaste la salida numero en `showValue`',
            error: 'falta `console.log(value.toFixed(0));` en `showValue`.',
          },
        ],
      },
      {
        id: 'u2-l5-c4-e1',
        title: 'Ejercicio 7: prueba texto',
        instructions: [
          'Si ya no esta escrita arriba, vuelve a escribir `printValue` completa.',
          'Debajo escribe `printValue(\'hola\')`. La consola debe mostrar la rama string.',
        ],
        placeholder: "printValue('hola');",
        minLength: 12,
        checks: [
          {
            kind: 'includes',
            needle: "printvalue('hola')",
            success: 'probaste el caso string',
            error: 'falta `printValue(\'hola\')`.',
          },
        ],
      },
      {
        id: 'u2-l5-c4-e2',
        title: 'Ejercicio 8: prueba numero',
        instructions: [
          'Si ya no esta escrita arriba, vuelve a escribir `printValue` completa.',
          'Debajo escribe `printValue(42)`. La consola debe mostrar la rama number.',
        ],
        placeholder: '',
        minLength: 10,
        checks: [
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
    summary: 'Cierras la unidad con una union de objetos donde `kind` decide la rama.',
    goal: 'Entender [[kind]], rama [[text]], rama [[count]] y pruebas reales.',
    content: [
      {
        title: 'Tarjeta 1: la propiedad kind',
        body: [
          'En una [[discriminated union]], una propiedad como [[kind]] decide que forma del objeto tienes delante.',
          'Si `kind` es `text`, existe `message`. Si `kind` es `count`, existe `total`.',
        ],
        code:
          "type Event =\n  | { kind: 'text'; message: string }\n  | { kind: 'count'; total: number };",
      },
      {
        title: 'Tarjeta 2: la rama text',
        body: [
          "Primero preguntas `if (event.kind === 'text')`. Solo dentro de esa rama puedes usar [[event.message]].",
          'La propiedad discriminante actua como un semaforo: te dice que camino puedes usar.',
        ],
        code:
          "function printEvent(event: Event) {\n  if (event.kind === 'text') {\n    console.log(event.message);\n  }\n}",
      },
      {
        title: 'Tarjeta 3: la rama count',
        body: [
          'Despues agregas la otra rama con [[else]]. Ahi ya no usas `message`: usas [[event.total]].',
          'Cada rama se queda con las propiedades que si le pertenecen.',
        ],
        code:
          "function printEvent(event: Event) {\n  if (event.kind === 'text') {\n    console.log(event.message);\n  } else {\n    console.log(event.total);\n  }\n}",
      },
      {
        title: 'Tarjeta 4: probar las dos formas',
        body: [
          "Al final llamas la funcion una vez con `kind: 'text'` y otra con `kind: 'count'`.",
          'La consola te deja ver que la union realmente cambio de camino segun el dato recibido.',
        ],
        code:
          "printEvent({ kind: 'text', message: 'hola' });\nprintEvent({ kind: 'count', total: 3 });",
      },
    ],
    exercises: [
      {
        id: 'u2-l6-c1-e1',
        title: 'Ejercicio 1: rama text',
        instructions: [
          'Escribe `type Event` con la rama `text`.',
          'Debe incluir `kind: \'text\'` y `message: string`.',
        ],
        placeholder:
          "type Event =\n  | { kind: 'text'; message: string };",
        minLength: 48,
        checks: [
          {
            kind: 'includes',
            needle: "kind: 'text'",
            success: 'agregaste la rama `text`',
            error: 'falta la rama con `kind: \'text\'`.',
          },
          {
            kind: 'includes',
            needle: 'message: string',
            success: 'agregaste `message: string`',
            error: 'falta `message: string`.',
          },
        ],
      },
      {
        id: 'u2-l6-c1-e2',
        title: 'Ejercicio 2: agrega rama count',
        instructions: [
          'Completa `type Event` con la rama `count`.',
          'Debe incluir `kind: \'count\'` y `total: number`.',
        ],
        placeholder: '',
        minLength: 84,
        checks: [
          {
            kind: 'includes',
            needle: "kind: 'count'",
            success: 'agregaste la rama `count`',
            error: 'falta la rama con `kind: \'count\'`.',
          },
          {
            kind: 'includes',
            needle: 'total: number',
            success: 'agregaste `total: number`',
            error: 'falta `total: number`.',
          },
        ],
      },
      {
        id: 'u2-l6-c2-e1',
        title: 'Ejercicio 3: firma de printEvent',
        instructions: [
          'Escribe `function printEvent(event: Event) {}`.',
          'Aqui solo practicas la firma antes de la logica.',
        ],
        placeholder:
          "function printEvent(event: Event) {\n}",
        minLength: 34,
        checks: [
          {
            kind: 'includes',
            needle: 'function printevent(event: event)',
            success: 'escribiste la firma de `printEvent`',
            error: 'falta `function printEvent(event: Event) {}`.',
          },
        ],
      },
      {
        id: 'u2-l6-c2-e2',
        title: 'Ejercicio 4: rama text en la funcion',
        instructions: [
          'Dentro revisa `if (event.kind === \'text\')`.',
          'En esa rama usa `console.log(event.message);`.',
        ],
        placeholder: '',
        minLength: 104,
        checks: [
          {
            kind: 'includes',
            needle: "event.kind === 'text'",
            success: 'creaste la rama `text`',
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
        id: 'u2-l6-c3-e1',
        title: 'Ejercicio 5: rama count',
        instructions: [
          'Completa `printEvent` con `else`.',
          'En esa rama usa `console.log(event.total);`.',
        ],
        placeholder:
          "function printEvent(event: Event) {\n  if (event.kind === 'text') {\n    console.log(event.message);\n  } else {\n    console.log(event.total);\n  }\n}",
        minLength: 144,
        checks: [
          {
            kind: 'includes',
            needle: 'else',
            success: 'agregaste la rama final',
            error: 'falta `else` para la rama `count`.',
          },
          {
            kind: 'includes',
            needle: 'console.log(event.total)',
            success: 'mostraste `event.total`',
            error: 'falta `console.log(event.total);`.',
          },
        ],
      },
      {
        id: 'u2-l6-c3-e2',
        title: 'Ejercicio 6: funcion completa',
        instructions: [
          'Escribe `printEvent` completa con las dos ramas.',
          'Debe mostrar `event.message` en un caso y `event.total` en el otro.',
        ],
        placeholder: '',
        minLength: 146,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(event.message)',
            success: 'mantuviste la salida de `message`',
            error: 'falta `console.log(event.message);`.',
          },
          {
            kind: 'includes',
            needle: 'console.log(event.total)',
            success: 'mantuviste la salida de `total`',
            error: 'falta `console.log(event.total);`.',
          },
        ],
      },
      {
        id: 'u2-l6-c4-e1',
        title: 'Ejercicio 7: prueba text',
        instructions: [
          'Si ya no esta escrita arriba, vuelve a escribir `printEvent` completa.',
          'Debajo escribe `printEvent({ kind: \'text\', message: \'hola\' })`. La consola debe mostrar la rama text.',
        ],
        placeholder:
          "printEvent({ kind: 'text', message: 'hola' });",
        minLength: 34,
        checks: [
          {
            kind: 'includes',
            needle: "printevent({ kind: 'text'",
            success: 'probaste la rama `text`',
            error: 'falta una llamada con `kind: \'text\'`.',
          },
        ],
      },
      {
        id: 'u2-l6-c4-e2',
        title: 'Ejercicio 8: prueba count',
        instructions: [
          'Si ya no esta escrita arriba, vuelve a escribir `printEvent` completa.',
          'Debajo escribe `printEvent({ kind: \'count\', total: 3 })`. La consola debe mostrar la rama count.',
        ],
        placeholder: '',
        minLength: 34,
        checks: [
          {
            kind: 'includes',
            needle: "printevent({ kind: 'count'",
            success: 'probaste la rama `count`',
            error: 'falta una llamada con `kind: \'count\'`.',
          },
        ],
      },
    ],
  },
];
