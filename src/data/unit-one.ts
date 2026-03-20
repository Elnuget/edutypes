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
      {
        title: 'Tarjeta 3: orden de una linea',
        body: [
          'Una linea simple suele seguir este orden: [[palabra clave]], [[nombre]], [[tipo]], [[=]], [[valor]].',
          'Si cambias ese orden, TypeScript se confunde. Primero nombras, despues tipas y al final das el valor real.',
        ],
        code:
          "const courseTitle: string = 'EduTypes';\nlet currentLevel: number = 1;",
      },
      {
        title: 'Tarjeta 4: punto y coma',
        body: [
          'El [[;]] cierra una linea. Le dice a TypeScript: aqui termina esta instruccion.',
          'No siempre es obligatorio, pero en EduTypes lo usaremos para que la estructura se vea clara desde el inicio.',
        ],
        code:
          "const teacherName: string = 'Ana';\nlet studentCount: number = 12;",
      },
      {
        title: 'Tarjeta 5: parentesis y parametros',
        body: [
          'En una funcion, `(` abre la zona de entrada y `)` la cierra. Dentro van los [[parametros]].',
          'Cada parametro repite la misma mini-estructura: [[nombre]], luego `:`, luego [[tipo]].',
        ],
        code:
          "function createGreeting(name: string, level: number): string {\n  return `${name} va en ${level}`;\n}",
      },
      {
        title: 'Tarjeta 6: llaves y bloque',
        body: [
          'Las llaves `{}` en una funcion guardan el [[bloque]] de codigo. Todo lo que la funcion hace vive dentro de ellas.',
          'Dentro de ese bloque, [[return]] marca el valor final que la funcion entrega al terminar.',
        ],
        code:
          "function showName(name: string): string {\n  return name;\n}",
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
      {
        id: 'u1-l1-c3-e1',
        title: 'Ejercicio 5: orden correcto',
        instructions: [
          'Escribe `courseTitle` con [[const]] y tipo `string`.',
          'Respeta el orden: nombre, tipo y luego valor.',
        ],
        placeholder: "const courseTitle: string = 'EduTypes';",
        minLength: 32,
        checks: [
          {
            kind: 'includes',
            needle: 'const coursetitle: string =',
            success: 'respetaste el orden de la linea',
            error: 'falta `const courseTitle: string = ...`.',
          },
        ],
      },
      {
        id: 'u1-l1-c3-e2',
        title: 'Ejercicio 6: numero con orden correcto',
        instructions: [
          'Escribe `currentLevel` con [[let]] y tipo `number`.',
          'No cambies el orden de las partes de la linea.',
        ],
        placeholder: '',
        minLength: 28,
        checks: [
          {
            kind: 'includes',
            needle: 'let currentlevel: number =',
            success: 'escribiste `currentLevel` con el orden correcto',
            error: 'falta `let currentLevel: number = ...`.',
          },
        ],
      },
      {
        id: 'u1-l1-c4-e1',
        title: 'Ejercicio 7: linea cerrada',
        instructions: [
          'Escribe `teacherName` con `const` y tipo `string`.',
          'La linea debe terminar con [[;]].',
        ],
        placeholder: "const teacherName: string = 'Ana';",
        minLength: 30,
        checks: [
          {
            kind: 'includes',
            needle: 'const teachername: string =',
            success: 'escribiste `teacherName`',
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
        id: 'u1-l1-c4-e2',
        title: 'Ejercicio 8: otra linea cerrada',
        instructions: [
          'Escribe `studentCount` con `let` y tipo `number`.',
          'Tambien debe terminar con [[;]].',
        ],
        placeholder: '',
        minLength: 28,
        checks: [
          {
            kind: 'includes',
            needle: 'let studentcount: number =',
            success: 'escribiste `studentCount`',
            error: 'falta `let studentCount: number = ...`.',
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
        id: 'u1-l1-c5-e1',
        title: 'Ejercicio 9: un parametro',
        instructions: [
          'Escribe `showName` con un parametro `name: string`.',
          'Debe devolver `string`.',
        ],
        placeholder:
          "function showName(name: string): string {\n  return '';\n}",
        minLength: 58,
        checks: [
          {
            kind: 'includes',
            needle: 'function showname',
            success: 'escribiste `showName`',
            error: 'falta `showName`.',
          },
          {
            kind: 'includes',
            needle: 'name: string',
            success: 'agregaste `name: string`',
            error: 'falta `name: string`.',
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
        id: 'u1-l1-c5-e2',
        title: 'Ejercicio 10: dos parametros',
        instructions: [
          'Escribe `createGreeting` con `name: string` y `level: number`.',
          'Separa los parametros con una coma.',
        ],
        placeholder: '',
        minLength: 70,
        checks: [
          {
            kind: 'includes',
            needle: 'function creategreeting',
            success: 'escribiste `createGreeting`',
            error: 'falta `createGreeting`.',
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
        title: 'Ejercicio 11: bloque con return',
        instructions: [
          'Escribe `showName` completa.',
          'Debe tener llaves y usar [[return]].',
        ],
        placeholder:
          "function showName(name: string): string {\n  return name;\n}",
        minLength: 60,
        checks: [
          {
            kind: 'includes',
            needle: 'function showname',
            success: 'la funcion existe',
            error: 'falta `showName`.',
          },
          {
            kind: 'includes',
            needle: '{',
            success: 'abriste el bloque',
            error: 'falta `{` para abrir el bloque.',
          },
          {
            kind: 'includes',
            needle: 'return',
            success: 'incluiste `return`',
            error: 'falta `return`.',
          },
          {
            kind: 'includes',
            needle: '}',
            success: 'cerraste el bloque',
            error: 'falta `}` para cerrar el bloque.',
          },
        ],
      },
      {
        id: 'u1-l1-c6-e2',
        title: 'Ejercicio 12: bloque con texto',
        instructions: [
          'Escribe una funcion `showLevel` que reciba `level: number`.',
          'Dentro usa llaves y [[return]] para devolver un texto.',
        ],
        placeholder: '',
        minLength: 64,
        checks: [
          {
            kind: 'includes',
            needle: 'function showlevel',
            success: 'escribiste `showLevel`',
            error: 'falta `showLevel`.',
          },
          {
            kind: 'includes',
            needle: 'level: number',
            success: 'tipaste `level`',
            error: 'falta `level: number`.',
          },
          {
            kind: 'includes',
            needle: 'return',
            success: 'incluiste `return`',
            error: 'falta `return`.',
          },
          {
            kind: 'includes',
            needle: '}',
            success: 'cerraste el bloque',
            error: 'falta `}` para cerrar el bloque.',
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
      {
        title: 'Tarjeta 3: dos puntos y comas',
        body: [
          'Dentro del tipo, `:` une [[propiedad]] con [[tipo]]. Dentro del valor, `:` une [[propiedad]] con [[dato real]].',
          'El `;` separa propiedades del tipo. La `,` separa propiedades con valor dentro del objeto real.',
        ],
        code:
          "const profile: { name: string; premium: boolean } = {\n  name: 'Ana',\n  premium: true,\n};",
      },
      {
        title: 'Tarjeta 4: tipo arriba y valor abajo',
        body: [
          'Antes de `=`, escribes el [[tipo esperado]]. Despues de `=`, escribes el [[objeto real]].',
          'Arriba dices la forma. Abajo escribes los datos concretos que llenan esa forma.',
        ],
        code:
          "const course: { title: string; active: boolean } = {\n  title: 'TS basico',\n  active: true,\n};",
      },
      {
        title: 'Tarjeta 5: llaves del objeto',
        body: [
          'Las llaves del tipo `{}` y las llaves del valor `{}` se parecen, pero no hacen el mismo trabajo.',
          'Unas describen. Las otras guardan. Por eso es importante no mezclarlas ni cerrarlas mal.',
        ],
        code:
          "const badge: { label: string; unlocked: boolean } = {\n  label: 'Inicio',\n  unlocked: false,\n};",
      },
      {
        title: 'Tarjeta 6: objeto como parametro',
        body: [
          'Cuando una funcion recibe un objeto, el [[nombre del parametro]] va primero y su [[tipo de objeto]] va despues de `:`.',
          'Eso permite escribir `student.name` dentro de la funcion sin perder claridad.',
        ],
        code:
          "function readCourse(course: { title: string; active: boolean }): string {\n  return course.title;\n}",
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
      {
        id: 'u1-l2-c3-e1',
        title: 'Ejercicio 5: profile tipado',
        instructions: [
          'Escribe `profile` con las propiedades `name` y `premium`.',
          'Usa `:` para los tipos y `=` para asignar el objeto.',
        ],
        placeholder:
          "const profile: { name: string; premium: boolean } = {\n  name: 'Ana',\n  premium: true,\n};",
        minLength: 75,
        checks: [
          {
            kind: 'includes',
            needle: 'const profile: { name: string; premium: boolean }',
            success: 'tipaste `profile` correctamente',
            error: 'falta `const profile: { name: string; premium: boolean } = ...`.',
          },
        ],
      },
      {
        id: 'u1-l2-c3-e2',
        title: 'Ejercicio 6: propiedades reales',
        instructions: [
          'Escribe otra vez `profile` completa.',
          'Asegurate de poner `name:` y `premium:` dentro del objeto real.',
        ],
        placeholder: '',
        minLength: 70,
        checks: [
          {
            kind: 'includes',
            needle: 'const profile:',
            success: 'mantienes la declaracion de `profile`',
            error: 'falta declarar `profile`.',
          },
          {
            kind: 'includes',
            needle: 'name:',
            success: 'incluiste `name:`',
            error: 'falta `name:` dentro del objeto.',
          },
          {
            kind: 'includes',
            needle: 'premium:',
            success: 'incluiste `premium:`',
            error: 'falta `premium:` dentro del objeto.',
          },
        ],
      },
      {
        id: 'u1-l2-c4-e1',
        title: 'Ejercicio 7: course tipado',
        instructions: [
          'Escribe `course` con `title` y `active`.',
          'Primero debe ir el tipo y despues el objeto real.',
        ],
        placeholder:
          "const course: { title: string; active: boolean } = {\n  title: 'TS basico',\n  active: true,\n};",
        minLength: 78,
        checks: [
          {
            kind: 'includes',
            needle: 'const course: { title: string; active: boolean }',
            success: 'tipaste `course` correctamente',
            error: 'falta `const course: { title: string; active: boolean } = ...`.',
          },
        ],
      },
      {
        id: 'u1-l2-c4-e2',
        title: 'Ejercicio 8: objeto real de course',
        instructions: [
          'Escribe otra vez `course` completa.',
          'Asegurate de poner `title:` y `active:` dentro del objeto real.',
        ],
        placeholder: '',
        minLength: 70,
        checks: [
          {
            kind: 'includes',
            needle: 'const course:',
            success: 'mantienes `course`',
            error: 'falta declarar `course`.',
          },
          {
            kind: 'includes',
            needle: 'title:',
            success: 'incluiste `title:`',
            error: 'falta `title:`.',
          },
          {
            kind: 'includes',
            needle: 'active:',
            success: 'incluiste `active:`',
            error: 'falta `active:`.',
          },
        ],
      },
      {
        id: 'u1-l2-c5-e1',
        title: 'Ejercicio 9: badge completo',
        instructions: [
          'Escribe `badge` con `label` y `unlocked`.',
          'Usa bien las llaves del tipo y las llaves del objeto.',
        ],
        placeholder:
          "const badge: { label: string; unlocked: boolean } = {\n  label: 'Inicio',\n  unlocked: false,\n};",
        minLength: 84,
        checks: [
          {
            kind: 'includes',
            needle: 'const badge: { label: string; unlocked: boolean }',
            success: 'tipaste `badge`',
            error: 'falta `const badge: { label: string; unlocked: boolean } = ...`.',
          },
          {
            kind: 'includes',
            needle: '{',
            success: 'incluiste llaves',
            error: 'faltan llaves en la declaracion.',
          },
          {
            kind: 'includes',
            needle: '}',
            success: 'cerraste las llaves',
            error: 'falta `}` para cerrar.',
          },
        ],
      },
      {
        id: 'u1-l2-c5-e2',
        title: 'Ejercicio 10: propiedades de badge',
        instructions: [
          'Escribe otra vez `badge` completa.',
          'Dentro del objeto real agrega `label:` y `unlocked:`.',
        ],
        placeholder: '',
        minLength: 68,
        checks: [
          {
            kind: 'includes',
            needle: 'label:',
            success: 'incluiste `label:`',
            error: 'falta `label:`.',
          },
          {
            kind: 'includes',
            needle: 'unlocked:',
            success: 'incluiste `unlocked:`',
            error: 'falta `unlocked:`.',
          },
        ],
      },
      {
        id: 'u1-l2-c6-e1',
        title: 'Ejercicio 11: firma con objeto',
        instructions: [
          'Escribe `readCourse` con un parametro `course` de tipo objeto.',
          'El objeto debe tener `title` y `active`.',
        ],
        placeholder:
          "function readCourse(course: { title: string; active: boolean }): string {\n  return '';\n}",
        minLength: 82,
        checks: [
          {
            kind: 'includes',
            needle: 'function readcourse',
            success: 'escribiste `readCourse`',
            error: 'falta `readCourse`.',
          },
          {
            kind: 'includes',
            needle: 'course: { title: string; active: boolean }',
            success: 'tipaste el parametro `course`',
            error: 'falta el tipo del parametro `course`.',
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
        id: 'u1-l2-c6-e2',
        title: 'Ejercicio 12: usa course.title',
        instructions: [
          'Escribe `readCourse` completa.',
          'Dentro usa [[course.title]] y [[return]].',
        ],
        placeholder: '',
        minLength: 74,
        checks: [
          {
            kind: 'includes',
            needle: 'function readcourse',
            success: 'la funcion existe',
            error: 'falta `readCourse`.',
          },
          {
            kind: 'includes',
            needle: 'course.title',
            success: 'usas `course.title`',
            error: 'falta `course.title`.',
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
      {
        title: 'Tarjeta 3: length y posicion',
        body: [
          '[[topics.length]] cuenta cuantos elementos tiene el array. El punto entra al array y `length` devuelve el total.',
          'En una tupla, cada posicion ya tiene un trabajo fijo. La primera no puede actuar como la segunda.',
        ],
        code:
          "function countTopics(topics: string[]): number {\n  return topics.length;\n}",
      },
      {
        title: 'Tarjeta 4: tipo de array y valor de array',
        body: [
          "En `topics: string[]`, la parte `string[]` es el [[tipo]]. En `['a', 'b']`, los corchetes guardan el [[valor real]].",
          'Se ve parecido, pero arriba describes y abajo llenas la lista con datos concretos.',
        ],
        code:
          "const labels: string[] = ['inicio', 'tipos', 'funciones'];",
      },
      {
        title: 'Tarjeta 5: comas y orden en tuplas',
        body: [
          'La coma `,` separa posiciones. En una tupla no significa "o", significa [[primero esto]] y [[despues esto]].',
          'Si la tupla es `[string, number]`, no puedes poner primero el numero y luego el texto.',
        ],
        code:
          "const stepInfo: [string, number] = ['arrays', 3];",
      },
      {
        title: 'Tarjeta 6: arrays como entrada',
        body: [
          'Una funcion tambien puede recibir un array como entrada. Eso se escribe en el parametro, por ejemplo [[topics: string[]]].',
          'Despues, dentro del bloque, puedes leer propiedades del array como `length`.',
        ],
        code:
          "function firstTopic(topics: string[]): string {\n  return topics[0];\n}",
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
      {
        id: 'u1-l3-c3-e1',
        title: 'Ejercicio 5: usa length',
        instructions: [
          'Escribe `countTopics`.',
          'Dentro usa [[topics.length]] para devolver la cantidad.',
        ],
        placeholder:
          "function countTopics(topics: string[]): number {\n  return topics.length;\n}",
        minLength: 72,
        checks: [
          {
            kind: 'includes',
            needle: 'function counttopics',
            success: 'escribiste `countTopics`',
            error: 'falta `countTopics`.',
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
        id: 'u1-l3-c3-e2',
        title: 'Ejercicio 6: otra lista de textos',
        instructions: [
          'Escribe una nueva lista de textos con otro nombre.',
          'Debe seguir usando el tipo `string[]`.',
        ],
        placeholder: '',
        minLength: 34,
        checks: [
          {
            kind: 'includes',
            needle: ': string[] =',
            success: 'mantuviste el tipo `string[]`',
            error: 'falta el tipo `string[]` en la nueva lista.',
          },
        ],
      },
      {
        id: 'u1-l3-c4-e1',
        title: 'Ejercicio 7: labels',
        instructions: [
          'Escribe `labels` como `string[]`.',
          'Agrega al menos tres textos dentro del array.',
        ],
        placeholder: "const labels: string[] = ['inicio', 'tipos', 'funciones'];",
        minLength: 56,
        checks: [
          {
            kind: 'includes',
            needle: 'const labels: string[] =',
            success: 'escribiste `labels` como `string[]`',
            error: 'falta `const labels: string[] = ...`.',
          },
        ],
      },
      {
        id: 'u1-l3-c4-e2',
        title: 'Ejercicio 8: otro array de textos',
        instructions: [
          'Escribe otro array de textos con otro nombre.',
          'Debe seguir usando [[string[]]] y corchetes con valores reales.',
        ],
        placeholder: '',
        minLength: 38,
        checks: [
          {
            kind: 'includes',
            needle: ': string[] =',
            success: 'mantuviste `string[]`',
            error: 'falta `string[]` en el nuevo array.',
          },
          {
            kind: 'includes',
            needle: '[',
            success: 'incluiste corchetes',
            error: 'faltan corchetes en el valor del array.',
          },
        ],
      },
      {
        id: 'u1-l3-c5-e1',
        title: 'Ejercicio 9: stepInfo',
        instructions: [
          'Escribe `stepInfo` como `[string, number]`.',
          'Primero va el texto y despues el numero.',
        ],
        placeholder: "const stepInfo: [string, number] = ['arrays', 3];",
        minLength: 44,
        checks: [
          {
            kind: 'includes',
            needle: 'const stepinfo: [string, number] =',
            success: 'escribiste `stepInfo`',
            error: 'falta `const stepInfo: [string, number] = ...`.',
          },
        ],
      },
      {
        id: 'u1-l3-c5-e2',
        title: 'Ejercicio 10: otra tupla ordenada',
        instructions: [
          'Escribe otra tupla `[string, number]` con nombre distinto.',
          'No cambies el orden de las dos posiciones.',
        ],
        placeholder: '',
        minLength: 40,
        checks: [
          {
            kind: 'includes',
            needle: ': [string, number] =',
            success: 'mantuviste el tipo de tupla',
            error: 'falta `[string, number]` en la tupla nueva.',
          },
          {
            kind: 'includes',
            needle: ',',
            success: 'separaste las dos posiciones',
            error: 'falta la coma entre las dos posiciones.',
          },
        ],
      },
      {
        id: 'u1-l3-c6-e1',
        title: 'Ejercicio 11: firstTopic',
        instructions: [
          'Escribe `firstTopic` con parametro `topics: string[]`.',
          'Debe devolver `string`.',
        ],
        placeholder:
          "function firstTopic(topics: string[]): string {\n  return topics[0];\n}",
        minLength: 64,
        checks: [
          {
            kind: 'includes',
            needle: 'function firsttopic',
            success: 'escribiste `firstTopic`',
            error: 'falta `firstTopic`.',
          },
          {
            kind: 'includes',
            needle: 'topics: string[]',
            success: 'tipaste `topics`',
            error: 'falta `topics: string[]`.',
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
        id: 'u1-l3-c6-e2',
        title: 'Ejercicio 12: usa topics[0]',
        instructions: [
          'Escribe `firstTopic` completa.',
          'Dentro usa [[return]] y `topics[0]`.',
        ],
        placeholder: '',
        minLength: 60,
        checks: [
          {
            kind: 'includes',
            needle: 'function firsttopic',
            success: 'la funcion existe',
            error: 'falta `firstTopic`.',
          },
          {
            kind: 'includes',
            needle: 'topics[0]',
            success: 'usas `topics[0]`',
            error: 'falta `topics[0]` dentro del `return`.',
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
      {
        title: 'Tarjeta 3: resumen final por partes',
        body: [
          'Dentro del `return`, cada parte del texto sale de una variable o parametro. [[title]] aporta el nombre, [[duration]] el numero y [[tags.join]] las etiquetas.',
          'La idea final es unir piezas ya aprendidas: tipar bien, pasar datos bien y devolver un texto claro.',
        ],
        code:
          "return `${title} dura ${duration} minutos y usa ${tags.join(', ')}`;",
      },
      {
        title: 'Tarjeta 4: mismo archivo, varias piezas',
        body: [
          'En un mismo bloque puedes tener varias piezas: una constante objeto, una constante array y una funcion.',
          'No se pelean entre si. Cada una tiene su propio nombre y su propia tarea.',
        ],
        code:
          "const unitName: string = 'Unidad 1';\nconst tags: string[] = ['ts', 'basico'];",
      },
      {
        title: 'Tarjeta 5: comas entre parametros',
        body: [
          'En una firma de funcion, la coma `,` separa un parametro del siguiente. Si falta, la lectura se rompe.',
          'Cada parametro debe conservar su tipo. No basta con poner solo el nombre.',
        ],
        code:
          "function buildTitle(title: string, duration: number): string {\n  return `${title} ${duration}`;\n}",
      },
      {
        title: 'Tarjeta 6: join y texto final',
        body: [
          '[[tags.join]] toma una lista y la convierte en un solo texto. Por eso sirve bien para resúmenes.',
          'Luego ese texto ya puede viajar dentro del `return` junto con otras partes como `title` o `duration`.',
        ],
        code:
          "function showTagList(tags: string[]): string {\n  return tags.join(', ');\n}",
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
      {
        id: 'u1-l4-c3-e1',
        title: 'Ejercicio 5: return con duration',
        instructions: [
          'Escribe una funcion `showDuration` que reciba `duration: number`.',
          'Debe devolver un `string` usando [[return]].',
        ],
        placeholder:
          "function showDuration(duration: number): string {\n  return `Dura ${duration} minutos`;\n}",
        minLength: 70,
        checks: [
          {
            kind: 'includes',
            needle: 'function showduration',
            success: 'escribiste `showDuration`',
            error: 'falta `showDuration`.',
          },
          {
            kind: 'includes',
            needle: 'duration: number',
            success: 'tipaste `duration`',
            error: 'falta `duration: number`.',
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
        id: 'u1-l4-c3-e2',
        title: 'Ejercicio 6: return con tags',
        instructions: [
          'Escribe una funcion `showTags` que reciba `tags: string[]`.',
          'Dentro usa [[tags.join]] para devolver un `string`.',
        ],
        placeholder: '',
        minLength: 68,
        checks: [
          {
            kind: 'includes',
            needle: 'function showtags',
            success: 'escribiste `showTags`',
            error: 'falta `showTags`.',
          },
          {
            kind: 'includes',
            needle: 'tags: string[]',
            success: 'tipaste `tags`',
            error: 'falta `tags: string[]`.',
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
        id: 'u1-l4-c4-e1',
        title: 'Ejercicio 7: unitName',
        instructions: [
          'Escribe `unitName` con tipo `string`.',
          'Debe ser una constante simple del mismo bloque.',
        ],
        placeholder: "const unitName: string = 'Unidad 1';",
        minLength: 28,
        checks: [
          {
            kind: 'includes',
            needle: 'const unitname: string =',
            success: 'escribiste `unitName`',
            error: 'falta `const unitName: string = ...`.',
          },
        ],
      },
      {
        id: 'u1-l4-c4-e2',
        title: 'Ejercicio 8: tags del mismo bloque',
        instructions: [
          'Debajo escribe `tags` como `string[]`.',
          'Asi practicas varias piezas en un mismo archivo.',
        ],
        placeholder: '',
        minLength: 32,
        checks: [
          {
            kind: 'includes',
            needle: 'const tags: string[]',
            success: 'agregaste `tags`',
            error: 'falta `const tags: string[] = ...`.',
          },
        ],
      },
      {
        id: 'u1-l4-c5-e1',
        title: 'Ejercicio 9: buildTitle',
        instructions: [
          'Escribe `buildTitle` con `title: string` y `duration: number`.',
          'No olvides la coma entre ambos parametros.',
        ],
        placeholder:
          "function buildTitle(title: string, duration: number): string {\n  return `${title} ${duration}`;\n}",
        minLength: 74,
        checks: [
          {
            kind: 'includes',
            needle: 'function buildtitle',
            success: 'escribiste `buildTitle`',
            error: 'falta `buildTitle`.',
          },
          {
            kind: 'includes',
            needle: 'title: string',
            success: 'incluiste `title: string`',
            error: 'falta `title: string`.',
          },
          {
            kind: 'includes',
            needle: 'duration: number',
            success: 'incluiste `duration: number`',
            error: 'falta `duration: number`.',
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
        id: 'u1-l4-c5-e2',
        title: 'Ejercicio 10: buildTitle completo',
        instructions: [
          'Escribe otra vez `buildTitle` completa.',
          'Debe usar [[return]] para devolver un texto.',
        ],
        placeholder: '',
        minLength: 66,
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
        ],
      },
      {
        id: 'u1-l4-c6-e1',
        title: 'Ejercicio 11: showTagList',
        instructions: [
          'Escribe `showTagList` con parametro `tags: string[]`.',
          'Debe devolver `string`.',
        ],
        placeholder:
          "function showTagList(tags: string[]): string {\n  return tags.join(', ');\n}",
        minLength: 68,
        checks: [
          {
            kind: 'includes',
            needle: 'function showtaglist',
            success: 'escribiste `showTagList`',
            error: 'falta `showTagList`.',
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
            error: 'falta `): string`.',
          },
        ],
      },
      {
        id: 'u1-l4-c6-e2',
        title: 'Ejercicio 12: join directo',
        instructions: [
          'Escribe `showTagList` completa.',
          'Dentro usa [[return]] y [[tags.join]].',
        ],
        placeholder: '',
        minLength: 62,
        checks: [
          {
            kind: 'includes',
            needle: 'function showtaglist',
            success: 'la funcion existe',
            error: 'falta `showTagList`.',
          },
          {
            kind: 'includes',
            needle: 'tags.join',
            success: 'usas `tags.join`',
            error: 'falta `tags.join` dentro del `return`.',
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
];
