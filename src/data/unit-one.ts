import type { UnitLesson } from './unit-types';

export const unitOneLessons: UnitLesson[] = [
  {
    id: 'u1-l1',
    step: '1',
    title: 'Const, let y function',
    summary: 'Aprendes la forma base de una linea y luego la forma base de una funcion.',
    goal: 'Entender [[const]], [[let]], [[:]], [[=]], [[function]] y [[return]].',
    content: [
      {
        title: 'Tarjeta 1: const y let',
        body: [
          '[[const]] crea un dato que no vas a cambiar. [[let]] crea un dato que si puede cambiar.',
          'Por ahora mira solo estas dos palabras. Primero eliges [[const]] o [[let]], despues escribes el nombre.',
        ],
        code: "const moduleName = 'Unidad 1';\nlet currentStep = 1;",
      },
      {
        title: 'Tarjeta 2: nombre, tipo y dos puntos',
        body: [
          'En [[moduleName: string]], [[moduleName]] es el nombre. El `:` une el nombre con el tipo.',
          'Despues del `:` escribes el tipo. Aqui [[string]] significa texto y [[number]] significa numero.',
        ],
        code: "const moduleName: string = 'Unidad 1';\nlet totalExercises: number = 14;",
      },
      {
        title: 'Tarjeta 3: signo igual y punto y coma',
        body: [
          'El [[=]] pone el valor real. A la izquierda queda la forma. A la derecha queda el dato.',
          'El [[;]] cierra la linea. En EduTypes lo usamos siempre para que la estructura se vea clara.',
        ],
        code: "const teacherName: string = 'Ana';\nlet hasCertificate: boolean = false;",
      },
      {
        title: 'Tarjeta 4: function sin entradas',
        body: [
          '[[function]] crea una accion con nombre. Despues va el nombre de la funcion.',
          'El `(` abre la zona de entrada y el `)` la cierra. Si no entra nada, se quedan vacios. Las llaves `{}` guardan el bloque.',
        ],
        code: "function openLesson() {\n}\n\nfunction closeLesson() {\n}",
      },
      {
        title: 'Tarjeta 5: parametros y coma',
        body: [
          'Un parametro repite esta mini forma: [[nombre]], luego `:`, luego [[tipo]].',
          'Si tienes dos parametros, la coma `,` los separa. Cada uno conserva su propio tipo.',
        ],
        code: "function setLevel(level: number, studentName: string) {\n}",
      },
      {
        title: 'Tarjeta 6: retorno y return',
        body: [
          'Despues del `)` puedes escribir `: tipo` para decir lo que la funcion va a devolver.',
          'Dentro del bloque, [[return]] entrega ese resultado final. Si prometes [[string]], debes devolver texto.',
        ],
        code:
          "function greetStudent(name: string): string {\n  return name;\n}",
      },
      {
        title: 'Tarjeta 7: ver el resultado en consola',
        body: [
          '[[console.log]] muestra un resultado en la consola. Sirve para ver lo que tu codigo produce.',
          'Primero guardas un valor o llamas una funcion. Despues pasas ese resultado a [[console.log(...)]] para verlo.',
        ],
        code:
          "const result = greetStudent('Ana');\nconsole.log(result);",
      },
    ],
    exercises: [
      {
        id: 'u1-l1-c1-e1',
        title: 'Ejercicio 1: usa const',
        instructions: [
          'Escribe una sola linea con [[const]].',
          'El nombre debe ser `moduleName` y el valor puede ser un texto corto.',
        ],
        placeholder: "const moduleName = 'Unidad 1';",
        minLength: 24,
        checks: [
          {
            kind: 'includes',
            needle: 'const modulename =',
            success: 'usaste `const` y escribiste `moduleName`',
            error: 'falta `const moduleName = ...`.',
          },
        ],
      },
      {
        id: 'u1-l1-c1-e2',
        title: 'Ejercicio 2: usa let',
        instructions: [
          'Escribe una sola linea con [[let]].',
          'El nombre debe ser `currentStep` y el valor debe ser un numero.',
        ],
        placeholder: '',
        minLength: 20,
        checks: [
          {
            kind: 'includes',
            needle: 'let currentstep =',
            success: 'usaste `let` y escribiste `currentStep`',
            error: 'falta `let currentStep = ...`.',
          },
        ],
      },
      {
        id: 'u1-l1-c2-e1',
        title: 'Ejercicio 3: tipa un texto',
        instructions: [
          'Escribe `unitLabel` con tipo [[string]].',
          'Asegurate de poner `:` entre el nombre y el tipo.',
        ],
        placeholder: "const unitLabel: string = 'Inicio';",
        minLength: 28,
        checks: [
          {
            kind: 'includes',
            needle: 'const unitlabel: string =',
            success: 'tipaste `unitLabel` como `string`',
            error: 'falta `const unitLabel: string = ...`.',
          },
        ],
      },
      {
        id: 'u1-l1-c2-e2',
        title: 'Ejercicio 4: tipa un numero',
        instructions: [
          'Escribe `totalExercises` con tipo [[number]].',
          'No olvides el `:` antes del tipo.',
        ],
        placeholder: '',
        minLength: 30,
        checks: [
          {
            kind: 'includes',
            needle: 'let totalexercises: number =',
            success: 'tipaste `totalExercises` como `number`',
            error: 'falta `let totalExercises: number = ...`.',
          },
        ],
      },
      {
        id: 'u1-l1-c3-e1',
        title: 'Ejercicio 5: asigna y cierra',
        instructions: [
          'Escribe `teacherName` con tipo `string`.',
          'Debe usar [[=]] y terminar con [[;]].',
        ],
        placeholder: "const teacherName: string = 'Ana';",
        minLength: 30,
        checks: [
          {
            kind: 'includes',
            needle: 'const teachername: string =',
            success: 'usaste `=` para asignar `teacherName`',
            error: 'falta `const teacherName: string = ...`.',
          },
          {
            kind: 'includes',
            needle: ';',
            success: 'cerraste la linea con `;`',
            error: 'falta `;` al final de la linea.',
          },
        ],
      },
      {
        id: 'u1-l1-c3-e2',
        title: 'Ejercicio 6: booleano cerrado',
        instructions: [
          'Escribe `hasCertificate` con tipo `boolean`.',
          'Tambien debe usar [[=]] y terminar con [[;]].',
        ],
        placeholder: '',
        minLength: 34,
        checks: [
          {
            kind: 'includes',
            needle: 'let hascertificate: boolean =',
            success: 'tipaste `hasCertificate` como `boolean`',
            error: 'falta `let hasCertificate: boolean = ...`.',
          },
          {
            kind: 'includes',
            needle: ';',
            success: 'cerraste la linea con `;`',
            error: 'falta `;` al final de la linea.',
          },
        ],
      },
      {
        id: 'u1-l1-c4-e1',
        title: 'Ejercicio 7: funcion vacia',
        instructions: [
          'Escribe una funcion `openLesson` sin parametros.',
          'Debe tener `()` y tambien `{}`.',
        ],
        placeholder: "function openLesson() {\n}",
        minLength: 22,
        checks: [
          {
            kind: 'includes',
            needle: 'function openlesson()',
            success: 'escribiste la firma de `openLesson`',
            error: 'falta `function openLesson() {}`.',
          },
          {
            kind: 'includes',
            needle: '{',
            success: 'incluiste la llave de apertura',
            error: 'falta `{` para abrir el bloque.',
          },
          {
            kind: 'includes',
            needle: '}',
            success: 'incluiste la llave de cierre',
            error: 'falta `}` para cerrar el bloque.',
          },
        ],
      },
      {
        id: 'u1-l1-c4-e2',
        title: 'Ejercicio 8: otra funcion vacia',
        instructions: [
          'Escribe una funcion `closeLesson` sin parametros.',
          'Debe conservar `()` y `{}`.',
        ],
        placeholder: '',
        minLength: 22,
        checks: [
          {
            kind: 'includes',
            needle: 'function closelesson()',
            success: 'escribiste `closeLesson`',
            error: 'falta `function closeLesson() {}`.',
          },
          {
            kind: 'includes',
            needle: '{',
            success: 'incluiste la llave de apertura',
            error: 'falta `{` para abrir el bloque.',
          },
          {
            kind: 'includes',
            needle: '}',
            success: 'incluiste la llave de cierre',
            error: 'falta `}` para cerrar el bloque.',
          },
        ],
      },
      {
        id: 'u1-l1-c5-e1',
        title: 'Ejercicio 9: un parametro',
        instructions: [
          'Escribe `setLevel` con un parametro `level: number`.',
          'Por ahora puede quedar con bloque vacio.',
        ],
        placeholder: "function setLevel(level: number) {\n}",
        minLength: 32,
        checks: [
          {
            kind: 'includes',
            needle: 'function setlevel(level: number)',
            success: 'escribiste `setLevel(level: number)`',
            error: 'falta `function setLevel(level: number) {}`.',
          },
        ],
      },
      {
        id: 'u1-l1-c5-e2',
        title: 'Ejercicio 10: dos parametros',
        instructions: [
          'Escribe `renameStudent` con `name: string` y `level: number`.',
          'La coma debe separar los dos parametros.',
        ],
        placeholder: '',
        minLength: 54,
        checks: [
          {
            kind: 'includes',
            needle: 'function renamestudent',
            success: 'escribiste `renameStudent`',
            error: 'falta `renameStudent`.',
          },
          {
            kind: 'includes',
            needle: 'name: string',
            success: 'incluiste `name: string`',
            error: 'falta `name: string`.',
          },
          {
            kind: 'includes',
            needle: 'level: number',
            success: 'incluiste `level: number`',
            error: 'falta `level: number`.',
          },
          {
            kind: 'includes',
            needle: ',',
            success: 'separaste los parametros con coma',
            error: 'falta la coma entre parametros.',
          },
        ],
      },
      {
        id: 'u1-l1-c6-e1',
        title: 'Ejercicio 11: return simple',
        instructions: [
          'Escribe `getUnitName`.',
          'Debe devolver `string` y usar [[return]].',
        ],
        placeholder:
          "function getUnitName(): string {\n  return 'Unidad 1';\n}",
        minLength: 54,
        checks: [
          {
            kind: 'includes',
            needle: 'function getunitname(): string',
            success: 'marcaste que `getUnitName` devuelve `string`',
            error: 'falta `function getUnitName(): string { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'return',
            success: 'incluiste `return`',
            error: 'falta `return`.',
          },
        ],
      },
      {
        id: 'u1-l1-c6-e2',
        title: 'Ejercicio 12: return con parametro',
        instructions: [
          'Escribe `greetStudent` con `name: string`.',
          'Debe devolver `string` usando [[return]].',
        ],
        placeholder: '',
        minLength: 60,
        checks: [
          {
            kind: 'includes',
            needle: 'function greetstudent(name: string): string',
            success: 'escribiste la firma de `greetStudent`',
            error: 'falta `function greetStudent(name: string): string { ... }`.',
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
            success: 'usas `name` en la funcion',
            error: 'falta usar `name` dentro del resultado.',
          },
        ],
      },
      {
        id: 'u1-l1-c7-e1',
        title: 'Ejercicio 13: muestra el resultado',
        instructions: [
          'Guarda el resultado de `greetStudent(\'Ana\')` en una constante `result`.',
          'Luego usa [[console.log(result)]].',
        ],
        placeholder:
          "const result = greetStudent('Ana');\nconsole.log(result);",
        minLength: 44,
        checks: [
          {
            kind: 'includes',
            needle: 'const result = greetstudent(',
            success: 'guardaste el resultado en `result`',
            error: 'falta `const result = greetStudent(...)`.',
          },
          {
            kind: 'includes',
            needle: 'console.log(result)',
            success: 'mostraste `result` en consola',
            error: 'falta `console.log(result)`.',
          },
        ],
      },
      {
        id: 'u1-l1-c7-e2',
        title: 'Ejercicio 14: consola directa',
        instructions: [
          'Escribe una sola linea con [[console.log]].',
          'Dentro muestra un texto corto como `Unidad 1 lista`.',
        ],
        placeholder: '',
        minLength: 18,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(',
            success: 'usaste `console.log(...)`',
            error: 'falta `console.log(...)`.',
          },
        ],
      },
    ],
  },
  {
    id: 'u1-l2',
    step: '2',
    title: 'Objetos como contratos basicos',
    summary: 'Aprendes a escribir un objeto pieza por pieza antes de usarlo en funciones.',
    goal: 'Entender [[{}]], [[propiedad: tipo]], [[propiedad: valor]] y [[objeto.propiedad]].',
    content: [
      {
        title: 'Tarjeta 1: un objeto con una propiedad',
        body: [
          'Un [[objeto]] junta datos bajo un solo nombre. Aqui todo vive dentro de [[student]].',
          'Las llaves `{}` en el tipo describen la forma. Las llaves `{}` despues de `=` guardan el valor real.',
        ],
        code:
          "const student: { name: string } = {\n  name: 'Ana',\n};",
      },
      {
        title: 'Tarjeta 2: dos puntos, punto y coma y coma',
        body: [
          'En el tipo, `:` une la propiedad con su tipo. El `;` separa una propiedad del tipo de la siguiente.',
          'En el objeto real, `:` une la propiedad con su valor. La coma `,` separa un valor del siguiente.',
        ],
        code:
          "const student: { name: string; level: number } = {\n  name: 'Ana',\n  level: 2,\n};",
      },
      {
        title: 'Tarjeta 3: tipo arriba y valor abajo',
        body: [
          'Antes de [[=]] escribes el [[tipo esperado]]. Despues de [[=]] escribes el [[objeto real]].',
          'Arriba dices que debe existir. Abajo llenas esa forma con datos concretos.',
        ],
        code:
          "const badge: { label: string; unlocked: boolean } = {\n  label: 'Inicio',\n  unlocked: false,\n};",
      },
      {
        title: 'Tarjeta 4: objeto mas grande',
        body: [
          'Puedes sumar mas propiedades si mantienes el mismo orden: nombre, `:`, tipo o valor.',
          'Cada linea interna del objeto representa una pieza distinta del mismo dato grande.',
        ],
        code:
          "const course: { title: string; active: boolean; level: number } = {\n  title: 'TS basico',\n  active: true,\n  level: 1,\n};",
      },
      {
        title: 'Tarjeta 5: entrar con el punto',
        body: [
          'El punto `.` entra al objeto y toma una pieza interna. [[student.name]] significa: entra a `student` y toma `name`.',
          'A la izquierda del punto va el objeto grande. A la derecha va la propiedad exacta que quieres leer.',
        ],
        code:
          "student.name\ncourse.title",
      },
      {
        title: 'Tarjeta 6: objeto como parametro',
        body: [
          'Una funcion tambien puede recibir un objeto entero. Primero va el nombre del parametro y despues `:` con el tipo de objeto.',
          'Eso te deja usar [[student.name]] o [[student.level]] dentro del bloque.',
        ],
        code:
          "function readStudent(student: { name: string; level: number }): string {\n  return student.name;\n}",
      },
      {
        title: 'Tarjeta 7: ver una propiedad en consola',
        body: [
          'Tambien puedes mostrar una propiedad del objeto con [[console.log]].',
          'Si escribes [[console.log(student.name)]], la consola ensena solo esa pieza y no todo el objeto.',
        ],
        code:
          "console.log(student.name);\nconsole.log(course.active);",
      },
    ],
    exercises: [
      {
        id: 'u1-l2-c1-e1',
        title: 'Ejercicio 1: objeto con una propiedad',
        instructions: [
          'Escribe `student` con una sola propiedad `name` de tipo `string`.',
          'Debes escribir el tipo y tambien el objeto real.',
        ],
        placeholder:
          "const student: { name: string } = {\n  name: 'Laura',\n};",
        minLength: 52,
        checks: [
          {
            kind: 'includes',
            needle: 'const student: { name: string } =',
            success: 'tipaste `student` con `name: string`',
            error: 'falta `const student: { name: string } = ...`.',
          },
          {
            kind: 'includes',
            needle: 'name:',
            success: 'incluiste la propiedad `name`',
            error: 'falta `name:` dentro del objeto.',
          },
        ],
      },
      {
        id: 'u1-l2-c1-e2',
        title: 'Ejercicio 2: otro objeto simple',
        instructions: [
          'Escribe `profile` con una sola propiedad `title` de tipo `string`.',
          'La idea es repetir la misma forma con otro nombre.',
        ],
        placeholder: '',
        minLength: 48,
        checks: [
          {
            kind: 'includes',
            needle: 'const profile: { title: string } =',
            success: 'tipaste `profile` con `title: string`',
            error: 'falta `const profile: { title: string } = ...`.',
          },
          {
            kind: 'includes',
            needle: 'title:',
            success: 'incluiste la propiedad `title`',
            error: 'falta `title:` dentro del objeto.',
          },
        ],
      },
      {
        id: 'u1-l2-c2-e1',
        title: 'Ejercicio 3: dos propiedades',
        instructions: [
          'Escribe `student` con `name: string` y `level: number`.',
          'En el tipo usa `;` y en el objeto real usa `,`.',
        ],
        placeholder:
          "const student: { name: string; level: number } = {\n  name: 'Ana',\n  level: 2,\n};",
        minLength: 76,
        checks: [
          {
            kind: 'includes',
            needle: 'const student: { name: string; level: number } =',
            success: 'el tipo de `student` tiene dos propiedades',
            error: 'falta `const student: { name: string; level: number } = ...`.',
          },
          {
            kind: 'includes',
            needle: 'level:',
            success: 'incluiste `level:`',
            error: 'falta `level:` dentro del objeto.',
          },
        ],
      },
      {
        id: 'u1-l2-c2-e2',
        title: 'Ejercicio 4: otro objeto de dos propiedades',
        instructions: [
          'Escribe `badge` con `label: string` y `unlocked: boolean`.',
          'Mantiene la misma idea: tipo arriba y valor abajo.',
        ],
        placeholder: '',
        minLength: 78,
        checks: [
          {
            kind: 'includes',
            needle: 'const badge: { label: string; unlocked: boolean } =',
            success: 'tipaste `badge` correctamente',
            error: 'falta `const badge: { label: string; unlocked: boolean } = ...`.',
          },
          {
            kind: 'includes',
            needle: 'unlocked:',
            success: 'incluiste `unlocked:`',
            error: 'falta `unlocked:` dentro del objeto.',
          },
        ],
      },
      {
        id: 'u1-l2-c3-e1',
        title: 'Ejercicio 5: tipo arriba, valor abajo',
        instructions: [
          'Escribe `course` con `title` y `active`.',
          'Primero debe ir el tipo y despues el objeto real.',
        ],
        placeholder:
          "const course: { title: string; active: boolean } = {\n  title: 'TS basico',\n  active: true,\n};",
        minLength: 82,
        checks: [
          {
            kind: 'includes',
            needle: 'const course: { title: string; active: boolean } =',
            success: 'pusiste el tipo de `course` antes de `=`',
            error: 'falta `const course: { title: string; active: boolean } = ...`.',
          },
          {
            kind: 'includes',
            needle: 'title:',
            success: 'incluiste `title:`',
            error: 'falta `title:` dentro del objeto real.',
          },
          {
            kind: 'includes',
            needle: 'active:',
            success: 'incluiste `active:`',
            error: 'falta `active:` dentro del objeto real.',
          },
        ],
      },
      {
        id: 'u1-l2-c3-e2',
        title: 'Ejercicio 6: otro tipo arriba',
        instructions: [
          'Escribe `lesson` con `title: string` y `published: boolean`.',
          'No cambies el orden entre tipo y valor.',
        ],
        placeholder: '',
        minLength: 80,
        checks: [
          {
            kind: 'includes',
            needle: 'const lesson: { title: string; published: boolean } =',
            success: 'respetaste el orden tipo arriba y valor abajo',
            error: 'falta `const lesson: { title: string; published: boolean } = ...`.',
          },
          {
            kind: 'includes',
            needle: 'published:',
            success: 'incluiste `published:`',
            error: 'falta `published:` dentro del objeto real.',
          },
        ],
      },
      {
        id: 'u1-l2-c4-e1',
        title: 'Ejercicio 7: objeto con tres propiedades',
        instructions: [
          'Escribe `course` con `title`, `active` y `level`.',
          'Cada propiedad debe conservar su propio tipo.',
        ],
        placeholder:
          "const course: { title: string; active: boolean; level: number } = {\n  title: 'TS basico',\n  active: true,\n  level: 1,\n};",
        minLength: 112,
        checks: [
          {
            kind: 'includes',
            needle: 'const course: { title: string; active: boolean; level: number } =',
            success: 'tipaste las tres propiedades de `course`',
            error: 'falta tipar `course` con `title`, `active` y `level`.',
          },
        ],
      },
      {
        id: 'u1-l2-c4-e2',
        title: 'Ejercicio 8: otro objeto grande',
        instructions: [
          'Escribe `studentCard` con `name: string`, `level: number` y `premium: boolean`.',
          'La meta es practicar un objeto un poco mas grande.',
        ],
        placeholder: '',
        minLength: 112,
        checks: [
          {
            kind: 'includes',
            needle: 'const studentcard: { name: string; level: number; premium: boolean } =',
            success: 'creaste `studentCard` con tres propiedades',
            error: 'falta `const studentCard: { name: string; level: number; premium: boolean } = ...`.',
          },
        ],
      },
      {
        id: 'u1-l2-c5-e1',
        title: 'Ejercicio 9: usa student.name',
        instructions: [
          'Escribe una sola linea con [[student.name]].',
          'Aqui solo practicas el punto.',
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
        id: 'u1-l2-c5-e2',
        title: 'Ejercicio 10: usa course.title',
        instructions: [
          'Escribe una sola linea con `course.title`.',
          'Asi repites el mismo patron con otro objeto.',
        ],
        placeholder: '',
        minLength: 10,
        checks: [
          {
            kind: 'includes',
            needle: 'course.title',
            success: 'usaste `course.title`',
            error: 'falta `course.title`.',
          },
        ],
      },
      {
        id: 'u1-l2-c6-e1',
        title: 'Ejercicio 11: funcion con objeto',
        instructions: [
          'Escribe `readStudent` con el parametro `student: { name: string; level: number }`.',
          'Debe devolver `string` con `return student.name;`.',
        ],
        placeholder:
          "function readStudent(student: { name: string; level: number }): string {\n  return student.name;\n}",
        minLength: 90,
        checks: [
          {
            kind: 'includes',
            needle: 'function readstudent',
            success: 'escribiste `readStudent`',
            error: 'falta `readStudent`.',
          },
          {
            kind: 'includes',
            needle: 'student: { name: string; level: number }',
            success: 'tipaste el parametro `student`',
            error: 'falta el tipo del parametro `student`.',
          },
          {
            kind: 'includes',
            needle: 'student.name',
            success: 'usas `student.name` dentro de la funcion',
            error: 'falta `student.name` dentro del `return`.',
          },
        ],
      },
      {
        id: 'u1-l2-c6-e2',
        title: 'Ejercicio 12: otra funcion con objeto',
        instructions: [
          'Escribe `readBadge` con el parametro `badge: { label: string; unlocked: boolean }`.',
          'No basta con declarar `badge` arriba: ese tipo tambien debe ir dentro del parametro.',
          'Debe devolver `boolean` con `return badge.unlocked;`.',
        ],
        placeholder: '',
        minLength: 92,
        checks: [
          {
            kind: 'includes',
            needle: 'function readbadge',
            success: 'escribiste `readBadge`',
            error: 'falta `readBadge`.',
          },
          {
            kind: 'includes',
            needle: 'badge: { label: string; unlocked: boolean }',
            success: 'tipaste el parametro `badge`',
            error: 'falta el tipo del parametro `badge`.',
          },
          {
            kind: 'includes',
            needle: 'badge.unlocked',
            success: 'usas `badge.unlocked`',
            error: 'falta `badge.unlocked` dentro del `return`.',
          },
        ],
      },
      {
        id: 'u1-l2-c7-e1',
        title: 'Ejercicio 13: consola con propiedad',
        instructions: [
          'Si ya no esta escrito arriba, vuelve a escribir `student` completo.',
          'Debajo usa [[console.log(student.name)]]. La consola debe mostrar solo esa propiedad.',
        ],
        placeholder: 'console.log(student.name);',
        minLength: 18,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(student.name)',
            success: 'mostraste `student.name` en consola',
            error: 'falta `console.log(student.name)`.',
          },
        ],
      },
      {
        id: 'u1-l2-c7-e2',
        title: 'Ejercicio 14: consola con otra propiedad',
        instructions: [
          'Si ya no esta escrito arriba, vuelve a escribir `course` completo.',
          'Debajo usa `console.log(course.active)`. La consola debe mostrar ese valor.',
        ],
        placeholder: '',
        minLength: 18,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(course.active)',
            success: 'mostraste `course.active` en consola',
            error: 'falta `console.log(course.active)`.',
          },
        ],
      },
    ],
  },
  {
    id: 'u1-l3',
    step: '3',
    title: 'Arrays, tuplas y parametros utiles',
    summary: 'Aprendes listas, posiciones y luego listas cortas con orden fijo.',
    goal: 'Entender [[string[]]], [[[]]], [[,]], [[topics[0]]] y [[length]].',
    content: [
      {
        title: 'Tarjeta 1: array con un solo texto',
        body: [
          '[[string[]]] significa lista de textos. El `[]` pegado al tipo convierte ese tipo en lista.',
          'En el valor real tambien usas `[]`, pero ahi guardas los elementos concretos.',
        ],
        code:
          "const topics: string[] = ['variables'];",
      },
      {
        title: 'Tarjeta 2: varios elementos y comas',
        body: [
          'Dentro del array real, la coma `,` separa un elemento del siguiente.',
          'Si todos son texto, el tipo sigue siendo [[string[]]] aunque tengas uno, dos o tres elementos.',
        ],
        code:
          "const topics: string[] = ['variables', 'objetos', 'arrays'];",
      },
      {
        title: 'Tarjeta 3: posiciones',
        body: [
          '[[topics[0]]] pide la primera posicion. [[topics[1]]] pide la segunda.',
          'Los arrays empiezan en cero. El numero entre `[` y `]` dice que posicion quieres leer.',
        ],
        code:
          "topics[0]\ntopics[1]",
      },
      {
        title: 'Tarjeta 4: contar con length',
        body: [
          '[[topics.length]] cuenta cuantos elementos hay en el array.',
          'El punto entra al array y [[length]] devuelve el total actual.',
        ],
        code:
          "function countTopics(topics: string[]): number {\n  return topics.length;\n}",
      },
      {
        title: 'Tarjeta 5: tupla basica',
        body: [
          'Una [[tupla]] es una lista corta con orden fijo. En [[string, number]], primero va texto y despues numero.',
          'Aqui el orden importa mas que en un array comun, porque cada posicion tiene un trabajo fijo.',
        ],
        code:
          "const lessonPair: [string, number] = ['funciones', 2];",
      },
      {
        title: 'Tarjeta 6: array como parametro',
        body: [
          'Una funcion tambien puede recibir un array. Eso se escribe en el parametro como [[topics: string[]]].',
          'Luego dentro del bloque puedes leer posiciones como [[topics[0]]] o usar [[topics.length]].',
        ],
        code:
          "function firstTopic(topics: string[]): string {\n  return topics[0];\n}",
      },
      {
        title: 'Tarjeta 7: ver arrays en consola',
        body: [
          'Puedes mostrar una posicion o el total con [[console.log]].',
          'Eso ayuda a comprobar si realmente estas leyendo el elemento correcto o contando bien la lista.',
        ],
        code:
          "console.log(topics[0]);\nconsole.log(topics.length);",
      },
    ],
    exercises: [
      {
        id: 'u1-l3-c1-e1',
        title: 'Ejercicio 1: array de un texto',
        instructions: [
          'Escribe `topics` como `string[]` con un solo elemento.',
          'Debe ser una lista de textos desde el inicio.',
        ],
        placeholder: "const topics: string[] = ['variables'];",
        minLength: 34,
        checks: [
          {
            kind: 'includes',
            needle: 'const topics: string[] =',
            success: 'declaraste `topics` como `string[]`',
            error: 'falta `const topics: string[] = ...`.',
          },
        ],
      },
      {
        id: 'u1-l3-c1-e2',
        title: 'Ejercicio 2: otro array simple',
        instructions: [
          'Escribe `labels` como `string[]` con un solo texto.',
          'La idea es repetir la misma estructura.',
        ],
        placeholder: '',
        minLength: 32,
        checks: [
          {
            kind: 'includes',
            needle: 'const labels: string[] =',
            success: 'declaraste `labels` como `string[]`',
            error: 'falta `const labels: string[] = ...`.',
          },
        ],
      },
      {
        id: 'u1-l3-c2-e1',
        title: 'Ejercicio 3: varios temas',
        instructions: [
          'Escribe `topics` con al menos tres textos.',
          'Debes usar comas para separarlos.',
        ],
        placeholder: "const topics: string[] = ['variables', 'objetos', 'arrays'];",
        minLength: 54,
        checks: [
          {
            kind: 'includes',
            needle: 'const topics: string[] =',
            success: 'mantuviste `topics` como array de textos',
            error: 'falta `const topics: string[] = ...`.',
          },
          {
            kind: 'includes',
            needle: ',',
            success: 'separaste elementos con coma',
            error: 'falta la coma entre elementos del array.',
          },
        ],
      },
      {
        id: 'u1-l3-c2-e2',
        title: 'Ejercicio 4: otra lista con comas',
        instructions: [
          'Escribe `modules` como `string[]` con tres textos.',
          'Tambien debe usar comas entre elementos.',
        ],
        placeholder: '',
        minLength: 54,
        checks: [
          {
            kind: 'includes',
            needle: 'const modules: string[] =',
            success: 'creaste `modules` como `string[]`',
            error: 'falta `const modules: string[] = ...`.',
          },
          {
            kind: 'includes',
            needle: ',',
            success: 'separaste elementos con coma',
            error: 'falta la coma entre elementos del array.',
          },
        ],
      },
      {
        id: 'u1-l3-c3-e1',
        title: 'Ejercicio 5: primera posicion',
        instructions: [
          'Escribe una sola linea con [[topics[0]]].',
          'Aqui solo practicas la primera posicion.',
        ],
        placeholder: 'topics[0];',
        minLength: 8,
        checks: [
          {
            kind: 'includes',
            needle: 'topics[0]',
            success: 'usaste `topics[0]`',
            error: 'falta `topics[0]`.',
          },
        ],
      },
      {
        id: 'u1-l3-c3-e2',
        title: 'Ejercicio 6: segunda posicion',
        instructions: [
          'Escribe una sola linea con `topics[1]`.',
          'Asi comparas dos posiciones distintas.',
        ],
        placeholder: '',
        minLength: 8,
        checks: [
          {
            kind: 'includes',
            needle: 'topics[1]',
            success: 'usaste `topics[1]`',
            error: 'falta `topics[1]`.',
          },
        ],
      },
      {
        id: 'u1-l3-c4-e1',
        title: 'Ejercicio 7: cuenta con length',
        instructions: [
          'Escribe `countTopics` con parametro `topics: string[]`.',
          'Debe devolver `number` con `return topics.length;`.',
        ],
        placeholder:
          "function countTopics(topics: string[]): number {\n  return topics.length;\n}",
        minLength: 72,
        checks: [
          {
            kind: 'includes',
            needle: 'function counttopics(topics: string[]): number',
            success: 'escribiste la firma de `countTopics`',
            error: 'falta `function countTopics(topics: string[]): number { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'topics.length',
            success: 'usas `topics.length`',
            error: 'falta `topics.length` dentro del `return`.',
          },
        ],
      },
      {
        id: 'u1-l3-c4-e2',
        title: 'Ejercicio 8: otra funcion de conteo',
        instructions: [
          'Escribe `countLabels` con parametro `labels: string[]`.',
          'Tambien debe devolver `number` con `return labels.length;`.',
        ],
        placeholder: '',
        minLength: 72,
        checks: [
          {
            kind: 'includes',
            needle: 'function countlabels(labels: string[]): number',
            success: 'escribiste `countLabels`',
            error: 'falta `function countLabels(labels: string[]): number { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'labels.length',
            success: 'usas `labels.length`',
            error: 'falta `labels.length` dentro del `return`.',
          },
        ],
      },
      {
        id: 'u1-l3-c5-e1',
        title: 'Ejercicio 9: tupla base',
        instructions: [
          'Escribe `lessonPair` como `[string, number]`.',
          'Primero va texto y despues numero.',
        ],
        placeholder: "const lessonPair: [string, number] = ['funciones', 2];",
        minLength: 44,
        checks: [
          {
            kind: 'includes',
            needle: 'const lessonpair: [string, number] =',
            success: 'escribiste `lessonPair` como tupla',
            error: 'falta `const lessonPair: [string, number] = ...`.',
          },
        ],
      },
      {
        id: 'u1-l3-c5-e2',
        title: 'Ejercicio 10: otra tupla',
        instructions: [
          'Escribe `stepInfo` como `[string, number]`.',
          'Mantiene el mismo orden: texto y luego numero.',
        ],
        placeholder: '',
        minLength: 40,
        checks: [
          {
            kind: 'includes',
            needle: 'const stepinfo: [string, number] =',
            success: 'escribiste `stepInfo` como tupla',
            error: 'falta `const stepInfo: [string, number] = ...`.',
          },
        ],
      },
      {
        id: 'u1-l3-c6-e1',
        title: 'Ejercicio 11: primer elemento por funcion',
        instructions: [
          'Escribe `firstTopic` con parametro `topics: string[]`.',
          'Debe devolver `string` con `return topics[0];`.',
        ],
        placeholder:
          "function firstTopic(topics: string[]): string {\n  return topics[0];\n}",
        minLength: 66,
        checks: [
          {
            kind: 'includes',
            needle: 'function firsttopic(topics: string[]): string',
            success: 'escribiste la firma de `firstTopic`',
            error: 'falta `function firstTopic(topics: string[]): string { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'topics[0]',
            success: 'usas `topics[0]`',
            error: 'falta `topics[0]` dentro del `return`.',
          },
        ],
      },
      {
        id: 'u1-l3-c6-e2',
        title: 'Ejercicio 12: segundo elemento por funcion',
        instructions: [
          'Escribe `secondTopic` con parametro `topics: string[]`.',
          'Debe devolver `string` con `return topics[1];`.',
        ],
        placeholder: '',
        minLength: 68,
        checks: [
          {
            kind: 'includes',
            needle: 'function secondtopic(topics: string[]): string',
            success: 'escribiste `secondTopic`',
            error: 'falta `function secondTopic(topics: string[]): string { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'topics[1]',
            success: 'usas `topics[1]`',
            error: 'falta `topics[1]` dentro del `return`.',
          },
        ],
      },
      {
        id: 'u1-l3-c7-e1',
        title: 'Ejercicio 13: consola con posicion',
        instructions: [
          'Si ya no esta escrito arriba, vuelve a escribir `topics` completo.',
          'Debajo usa [[console.log(topics[0])]]. La consola debe mostrar el primer tema.',
        ],
        placeholder: 'console.log(topics[0]);',
        minLength: 18,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(topics[0])',
            success: 'mostraste `topics[0]` en consola',
            error: 'falta `console.log(topics[0])`.',
          },
        ],
      },
      {
        id: 'u1-l3-c7-e2',
        title: 'Ejercicio 14: consola con total',
        instructions: [
          'Si ya no esta escrito arriba, vuelve a escribir `topics` completo.',
          'Debajo usa `console.log(topics.length)`. La consola debe mostrar cuantas posiciones tiene la lista.',
        ],
        placeholder: '',
        minLength: 18,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(topics.length)',
            success: 'mostraste `topics.length` en consola',
            error: 'falta `console.log(topics.length)`.',
          },
        ],
      },
    ],
  },
  {
    id: 'u1-l4',
    step: '4',
    title: 'Mini reto integrador',
    summary: 'Juntas variables, objetos, arrays, funciones y consola en un flujo corto.',
    goal: 'Unir [[objeto]], [[array]], [[function]], [[return]] y [[console.log]].',
    content: [
      {
        title: 'Tarjeta 1: varias piezas en un mismo archivo',
        body: [
          'Un archivo puede tener varias piezas separadas: una constante simple, un objeto y un array.',
          'No se mezclan si cada una tiene su propio nombre y su propia estructura.',
        ],
        code:
          "const unitName: string = 'Unidad 1';\nconst tags: string[] = ['typescript', 'basico'];",
      },
      {
        title: 'Tarjeta 2: objeto lesson mas tags',
        body: [
          'Aqui juntas un [[objeto]] `lesson` y un [[array]] `tags`.',
          'No hay sintaxis nueva. Solo reaparecen `:`, `{}`, `[]`, `=` y `;`.',
        ],
        code:
          "const lesson: { title: string; duration: number; published: boolean } = {\n  title: 'Fundamentos',\n  duration: 45,\n  published: true,\n};\n\nconst tags: string[] = ['typescript', 'basico'];",
      },
      {
        title: 'Tarjeta 3: firma con varios parametros',
        body: [
          'La funcion final recibe varias piezas. Cada coma `,` separa un parametro del siguiente.',
          'Cada parametro mantiene su forma: [[nombre]], luego `:`, luego [[tipo]].',
        ],
        code:
          "function summarizeLesson(title: string, duration: number, tags: string[]): string {\n  return '';\n}",
      },
      {
        title: 'Tarjeta 4: return del resumen',
        body: [
          'Dentro del [[return]] unes piezas que ya conoces. [[title]] pone el nombre y [[duration]] pone el numero.',
          'La funcion completa no inventa nada nuevo. Solo combina datos ya tipados.',
        ],
        code:
          "function buildTitle(title: string, duration: number): string {\n  return `${title} dura ${duration} minutos`;\n}",
      },
      {
        title: 'Tarjeta 5: join para unir etiquetas',
        body: [
          '[[tags.join(', ')]] toma una lista y la convierte en un solo texto.',
          'El punto entra al array. `join` pega los elementos usando el separador que escribes dentro del parentesis.',
        ],
        code:
          "function showTagList(tags: string[]): string {\n  return tags.join(', ');\n}",
      },
      {
        title: 'Tarjeta 6: consola final',
        body: [
          'Despues de construir un resultado, puedes mostrarlo con [[console.log]].',
          'Asi el ejercicio no termina solo en compilar: tambien puedes ver la salida real.',
        ],
        code:
          "const summary = summarizeLesson('Fundamentos', 45, ['typescript', 'basico']);\nconsole.log(summary);",
      },
      {
        title: 'Tarjeta 7: flujo completo',
        body: [
          'El flujo final es este: escribes datos, llamas una funcion y luego muestras el resultado.',
          'Primero preparas [[lesson]] y [[tags]]. Despues construyes [[summary]]. Al final haces [[console.log(summary)]].',
        ],
        code:
          "const summary = summarizeLesson(lesson.title, lesson.duration, tags);\nconsole.log(summary);",
      },
    ],
    exercises: [
      {
        id: 'u1-l4-c1-e1',
        title: 'Ejercicio 1: dos piezas simples',
        instructions: [
          'Escribe `unitName` con tipo `string`.',
          'Debajo escribe `tags` como `string[]` con al menos dos textos.',
        ],
        placeholder:
          "const unitName: string = 'Unidad 1';\nconst tags: string[] = ['typescript', 'basico'];",
        minLength: 62,
        checks: [
          {
            kind: 'includes',
            needle: 'const unitname: string =',
            success: 'escribiste `unitName`',
            error: 'falta `const unitName: string = ...`.',
          },
          {
            kind: 'includes',
            needle: 'const tags: string[] =',
            success: 'escribiste `tags` como `string[]`',
            error: 'falta `const tags: string[] = ...`.',
          },
        ],
      },
      {
        id: 'u1-l4-c1-e2',
        title: 'Ejercicio 2: otra pareja simple',
        instructions: [
          'Escribe `unitLabel` con tipo `string`.',
          'Debajo escribe `topics` como `string[]`.',
        ],
        placeholder: '',
        minLength: 56,
        checks: [
          {
            kind: 'includes',
            needle: 'const unitlabel: string =',
            success: 'escribiste `unitLabel`',
            error: 'falta `const unitLabel: string = ...`.',
          },
          {
            kind: 'includes',
            needle: 'const topics: string[] =',
            success: 'escribiste `topics` como `string[]`',
            error: 'falta `const topics: string[] = ...`.',
          },
        ],
      },
      {
        id: 'u1-l4-c2-e1',
        title: 'Ejercicio 3: crea lesson',
        instructions: [
          'Escribe el objeto `lesson`.',
          'Debe tener `title`, `duration` y `published`.',
        ],
        placeholder:
          "const lesson: { title: string; duration: number; published: boolean } = {\n  title: 'Tipos basicos',\n  duration: 35,\n  published: true,\n};",
        minLength: 96,
        checks: [
          {
            kind: 'includes',
            needle: 'const lesson: { title: string; duration: number; published: boolean } =',
            success: 'tipaste `lesson` con las tres propiedades',
            error: 'falta tipar `lesson` con `title`, `duration` y `published`.',
          },
        ],
      },
      {
        id: 'u1-l4-c2-e2',
        title: 'Ejercicio 4: tags del reto',
        instructions: [
          'Escribe `tags` como `string[]`.',
          'Debe tener al menos dos etiquetas.',
        ],
        placeholder: '',
        minLength: 32,
        checks: [
          {
            kind: 'includes',
            needle: 'const tags: string[] =',
            success: 'escribiste `tags` para el reto',
            error: 'falta `const tags: string[] = ...`.',
          },
        ],
      },
      {
        id: 'u1-l4-c3-e1',
        title: 'Ejercicio 5: firma de summarizeLesson',
        instructions: [
          'Escribe la funcion `summarizeLesson`.',
          'Debe recibir `title`, `duration` y `tags` con sus tipos.',
        ],
        placeholder:
          "function summarizeLesson(title: string, duration: number, tags: string[]): string {\n  return '';\n}",
        minLength: 84,
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
        ],
      },
      {
        id: 'u1-l4-c3-e2',
        title: 'Ejercicio 6: firma de buildTitle',
        instructions: [
          'Escribe `buildTitle` con `title: string` y `duration: number`.',
          'Debe devolver `string`.',
        ],
        placeholder: '',
        minLength: 72,
        checks: [
          {
            kind: 'includes',
            needle: 'function buildtitle(title: string, duration: number): string',
            success: 'escribiste la firma de `buildTitle`',
            error: 'falta `function buildTitle(title: string, duration: number): string { ... }`.',
          },
        ],
      },
      {
        id: 'u1-l4-c4-e1',
        title: 'Ejercicio 7: return con title y duration',
        instructions: [
          'Escribe `buildTitle` completa.',
          'Debe usar [[return]] y mencionar `title` y `duration` en el texto.',
        ],
        placeholder:
          "function buildTitle(title: string, duration: number): string {\n  return `${title} dura ${duration} minutos`;\n}",
        minLength: 86,
        checks: [
          {
            kind: 'includes',
            needle: 'function buildtitle',
            success: 'la funcion existe',
            error: 'falta `buildTitle`.',
          },
          {
            kind: 'includes',
            needle: 'return',
            success: 'incluiste `return`',
            error: 'falta `return`.',
          },
          {
            kind: 'includes',
            needle: 'title',
            success: 'usas `title` en el resultado',
            error: 'falta `title` dentro del resultado.',
          },
          {
            kind: 'includes',
            needle: 'duration',
            success: 'usas `duration` en el resultado',
            error: 'falta `duration` dentro del resultado.',
          },
        ],
      },
      {
        id: 'u1-l4-c4-e2',
        title: 'Ejercicio 8: otro return corto',
        instructions: [
          'Escribe `showDuration` con parametro `duration: number`.',
          'Debe devolver `string` usando [[return]].',
        ],
        placeholder: '',
        minLength: 62,
        checks: [
          {
            kind: 'includes',
            needle: 'function showduration(duration: number): string',
            success: 'escribiste la firma de `showDuration`',
            error: 'falta `function showDuration(duration: number): string { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'return',
            success: 'incluiste `return`',
            error: 'falta `return`.',
          },
        ],
      },
      {
        id: 'u1-l4-c5-e1',
        title: 'Ejercicio 9: usa join',
        instructions: [
          'Escribe `showTagList` con parametro `tags: string[]`.',
          'Debe devolver `string` con `return tags.join(\', \');`.',
        ],
        placeholder:
          "function showTagList(tags: string[]): string {\n  return tags.join(', ');\n}",
        minLength: 66,
        checks: [
          {
            kind: 'includes',
            needle: 'function showtaglist(tags: string[]): string',
            success: 'escribiste la firma de `showTagList`',
            error: 'falta `function showTagList(tags: string[]): string { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'tags.join',
            success: 'usas `tags.join`',
            error: 'falta `tags.join` dentro del `return`.',
          },
        ],
      },
      {
        id: 'u1-l4-c5-e2',
        title: 'Ejercicio 10: resumen con join',
        instructions: [
          'Escribe `summarizeLesson` completa.',
          'Dentro usa [[return]] y [[tags.join]].',
        ],
        placeholder: '',
        minLength: 96,
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
            success: 'usas `tags.join` en el resumen',
            error: 'falta `tags.join` dentro del resumen.',
          },
        ],
      },
      {
        id: 'u1-l4-c6-e1',
        title: 'Ejercicio 11: consola con resumen fijo',
        instructions: [
          'Guarda el resultado de `summarizeLesson` en `summary`.',
          'Luego usa [[console.log(summary)]].',
        ],
        placeholder:
          "const summary = summarizeLesson('Fundamentos', 45, ['typescript', 'basico']);\nconsole.log(summary);",
        minLength: 88,
        checks: [
          {
            kind: 'includes',
            needle: 'const summary = summarizelesson(',
            success: 'guardaste el resultado en `summary`',
            error: 'falta `const summary = summarizeLesson(...)`.',
          },
          {
            kind: 'includes',
            needle: 'console.log(summary)',
            success: 'mostraste `summary` en consola',
            error: 'falta `console.log(summary)`.',
          },
        ],
      },
      {
        id: 'u1-l4-c6-e2',
        title: 'Ejercicio 12: consola con tags',
        instructions: [
          'Si ya no esta escrito arriba, vuelve a escribir `tags` completo.',
          'Debajo usa `console.log(tags.join(\', \'))`. Asi ves el texto final de las etiquetas.',
        ],
        placeholder: '',
        minLength: 26,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(tags.join(',
            success: 'mostraste `tags.join(...)` en consola',
            error: 'falta `console.log(tags.join(...))`.',
          },
        ],
      },
      {
        id: 'u1-l4-c7-e1',
        title: 'Ejercicio 13: construye summary desde lesson',
        instructions: [
          'Escribe una linea que cree `summary` usando `lesson.title`, `lesson.duration` y `tags`.',
          'Debes llamar a `summarizeLesson(...)` con esas tres piezas.',
        ],
        placeholder:
          "const summary = summarizeLesson(lesson.title, lesson.duration, tags);",
        minLength: 68,
        checks: [
          {
            kind: 'includes',
            needle: 'const summary = summarizelesson(',
            success: 'llamaste a `summarizeLesson(...)`',
            error: 'falta `const summary = summarizeLesson(...)`.',
          },
          {
            kind: 'includes',
            needle: 'lesson.title',
            success: 'usas `lesson.title`',
            error: 'falta `lesson.title` en la llamada.',
          },
          {
            kind: 'includes',
            needle: 'lesson.duration',
            success: 'usas `lesson.duration`',
            error: 'falta `lesson.duration` en la llamada.',
          },
        ],
      },
      {
        id: 'u1-l4-c7-e2',
        title: 'Ejercicio 14: muestra summary final',
        instructions: [
          'Si ya no esta escrito arriba, vuelve a escribir `const summary = summarizeLesson(...)`.',
          'Debajo usa [[console.log(summary)]]. Este es el cierre del flujo completo.',
        ],
        placeholder: '',
        minLength: 18,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(summary)',
            success: 'mostraste `summary` en consola',
            error: 'falta `console.log(summary)`.',
          },
        ],
      },
    ],
  },
];
