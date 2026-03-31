import type { UnitLesson } from './unit-types';

export const javascriptUnitOneLessons: UnitLesson[] = [
  {
    id: 'js-u1-l1',
    step: '1',
    title: 'Const, let y function',
    summary: 'Aprendes la forma base de una linea, una funcion corta y una salida visible.',
    goal: 'Entender [[const]], [[let]], [[=]], [[function]], [[return]] y [[console.log]].',
    content: [
      {
        title: 'Tarjeta 1: const, let y =',
        body: [
          '[[const]] crea un dato que no vas a cambiar. [[let]] crea un dato que si puede cambiar.',
          'Despues escribes el nombre. Luego pones [[=]] y al final el valor real.',
        ],
        code: "const lessonName = 'Inicio';\nlet currentStep = 1;",
      },
      {
        title: 'Tarjeta 2: function, parametro y return',
        body: [
          '[[function]] crea una accion con nombre. `(` abre la entrada y `)` la cierra.',
          'Dentro del bloque, [[return]] devuelve el resultado. Si devuelves `student`, sale el mismo valor que entro.',
        ],
        code: "function greet(student) {\n  return student;\n}",
      },
      {
        title: 'Tarjeta 3: ver el resultado en consola',
        body: [
          'Primero guardas el resultado de una llamada. Despues usas [[console.log(...)]] para verlo abajo.',
          'Asi el codigo no queda solo escrito. Tambien deja una salida visible.',
        ],
        code: "const message = greet('Ana');\nconsole.log(message);",
      },
    ],
    exercises: [
      {
        id: 'js-u1-l1-c1-e1',
        title: 'Ejercicio 1: crea lessonName',
        instructions: [
          'Escribe una sola linea con [[const]].',
          'El nombre debe ser `lessonName` y el valor debe ser un texto corto.',
        ],
        placeholder: "const lessonName = 'Inicio';",
        minLength: 25,
        checks: [
          {
            kind: 'includes',
            needle: 'const lessonname =',
            success: 'usaste `const` con `lessonName`',
            error: 'falta `const lessonName = ...`.',
          },
        ],
      },
      {
        id: 'js-u1-l1-c1-e2',
        title: 'Ejercicio 2: crea currentStep',
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
            success: 'usaste `let` con `currentStep`',
            error: 'falta `let currentStep = ...`.',
          },
        ],
      },
      {
        id: 'js-u1-l1-c2-e1',
        title: 'Ejercicio 3: funcion greet',
        instructions: [
          'Escribe la funcion `greet` con un parametro `student`.',
          'Dentro debe tener `return student;`.',
        ],
        placeholder: "function greet(student) {\n  return student;\n}",
        minLength: 42,
        checks: [
          {
            kind: 'includes',
            needle: 'function greet(student)',
            success: 'la funcion `greet` existe',
            error: 'falta `function greet(student) { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'return student',
            success: 'la funcion devuelve `student`',
            error: 'falta `return student;`.',
          },
        ],
      },
      {
        id: 'js-u1-l1-c2-e2',
        title: 'Ejercicio 4: funcion openLesson',
        instructions: [
          'Escribe la funcion `openLesson` con un parametro `topic`.',
          'Dentro debe tener `return topic;`.',
        ],
        placeholder: '',
        minLength: 44,
        checks: [
          {
            kind: 'includes',
            needle: 'function openlesson(topic)',
            success: 'la funcion `openLesson` existe',
            error: 'falta `function openLesson(topic) { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'return topic',
            success: 'la funcion devuelve `topic`',
            error: 'falta `return topic;`.',
          },
        ],
      },
      {
        id: 'js-u1-l1-c3-e1',
        title: 'Ejercicio 5: guarda el resultado',
        instructions: [
          "Escribe `const message = greet('Ana');`.",
          'Usa exactamente el nombre `message` para guardar el resultado.',
        ],
        placeholder: "const message = greet('Ana');",
        minLength: 28,
        checks: [
          {
            kind: 'oneOf',
            needles: ['const message = greet(\'ana\')', 'const message = greet("ana")'],
            success: 'guardaste el resultado en `message`',
            error: "falta `const message = greet('Ana');`.",
          },
        ],
      },
      {
        id: 'js-u1-l1-c3-e2',
        title: 'Ejercicio 6: muestra message',
        instructions: [
          "Si ya no esta arriba, vuelve a escribir `const message = greet('Ana');`.",
          'Debajo usa [[console.log(message)]].',
        ],
        placeholder: '',
        minLength: 20,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(message)',
            success: 'mostraste `message` en consola',
            error: 'falta `console.log(message)`.',
          },
        ],
      },
    ],
  },
  {
    id: 'js-u1-l2',
    step: '2',
    title: 'Objetos, arrays y lectura con punto',
    summary: 'Aprendes a guardar varias piezas dentro de un objeto y varias entradas dentro de un array.',
    goal: 'Entender [[{}]], `[ ]`, [[name:]], [[.length]] y [[student.name]].',
    content: [
      {
        title: 'Tarjeta 1: objeto con llaves',
        body: [
          'Las llaves [[{}]] agrupan propiedades. Cada propiedad tiene nombre, `:` y valor.',
          'La coma `,` separa una propiedad de la siguiente dentro del objeto.',
        ],
        code: "const student = {\n  name: 'Ana',\n  completed: 3,\n};",
      },
      {
        title: 'Tarjeta 2: array con corchetes',
        body: [
          'Los corchetes `[ ]` guardan una lista. Cada elemento va separado por coma.',
          '[[topics.length]] dice cuantas posiciones tiene la lista.',
        ],
        code: "const topics = ['variables', 'funciones', 'objetos'];\nconsole.log(topics.length);",
      },
      {
        title: 'Tarjeta 3: leer una propiedad con punto',
        body: [
          'El punto `.` entra a una propiedad concreta. [[student.name]] lee solo el nombre.',
          'Luego puedes pasar ese valor a [[console.log(...)]] para verlo en la consola.',
        ],
        code: "console.log(student.name);\nconsole.log(topics.length);",
      },
    ],
    exercises: [
      {
        id: 'js-u1-l2-c1-e1',
        title: 'Ejercicio 1: crea student',
        instructions: [
          "Escribe `const student = { name: 'Ana', completed: 3 };`.",
          'Debe incluir las dos propiedades dentro del objeto.',
        ],
        placeholder: "const student = {\n  name: 'Ana',\n  completed: 3,\n};",
        minLength: 52,
        checks: [
          {
            kind: 'includes',
            needle: 'const student = {',
            success: 'creaste el objeto `student`',
            error: 'falta `const student = { ... }`.',
          },
          {
            kind: 'oneOf',
            needles: ["name:'ana'", 'name:"ana"'],
            success: 'incluiste `name` dentro del objeto',
            error: "falta `name: 'Ana'` dentro de `student`.",
          },
          {
            kind: 'includes',
            needle: 'completed:3',
            success: 'incluiste `completed: 3`',
            error: 'falta `completed: 3` dentro de `student`.',
          },
        ],
      },
      {
        id: 'js-u1-l2-c1-e2',
        title: 'Ejercicio 2: crea lesson',
        instructions: [
          "Escribe `const lesson = { title: 'Intro', duration: 15 };`.",
          'Debe incluir `title` y `duration` dentro del objeto.',
        ],
        placeholder: '',
        minLength: 50,
        checks: [
          {
            kind: 'includes',
            needle: 'const lesson = {',
            success: 'creaste el objeto `lesson`',
            error: 'falta `const lesson = { ... }`.',
          },
          {
            kind: 'oneOf',
            needles: ["title:'intro'", 'title:"intro"'],
            success: 'incluiste `title` dentro de `lesson`',
            error: "falta `title: 'Intro'` dentro de `lesson`.",
          },
          {
            kind: 'includes',
            needle: 'duration:15',
            success: 'incluiste `duration: 15`',
            error: 'falta `duration: 15` dentro de `lesson`.',
          },
        ],
      },
      {
        id: 'js-u1-l2-c2-e1',
        title: 'Ejercicio 3: crea topics',
        instructions: [
          "Escribe `const topics = ['variables', 'funciones', 'objetos'];`.",
          'La lista debe tener esos tres textos.',
        ],
        placeholder: "const topics = ['variables', 'funciones', 'objetos'];",
        minLength: 54,
        checks: [
          {
            kind: 'includes',
            needle: 'const topics = [',
            success: 'creaste el array `topics`',
            error: 'falta `const topics = [ ... ]`.',
          },
          {
            kind: 'oneOf',
            needles: ["'variables'", '"variables"'],
            success: 'incluiste `variables` en el array',
            error: 'falta `variables` dentro de `topics`.',
          },
          {
            kind: 'oneOf',
            needles: ["'funciones'", '"funciones"'],
            success: 'incluiste `funciones` en el array',
            error: 'falta `funciones` dentro de `topics`.',
          },
          {
            kind: 'oneOf',
            needles: ["'objetos'", '"objetos"'],
            success: 'incluiste `objetos` en el array',
            error: 'falta `objetos` dentro de `topics`.',
          },
        ],
      },
      {
        id: 'js-u1-l2-c2-e2',
        title: 'Ejercicio 4: cuenta topics',
        instructions: [
          'Si ya no esta escrito arriba, vuelve a escribir `const topics = [...]` completo.',
          'Debajo usa [[console.log(topics.length)]].',
        ],
        placeholder: '',
        minLength: 26,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(topics.length)',
            success: 'mostraste `topics.length` en consola',
            error: 'falta `console.log(topics.length)`.',
          },
        ],
      },
      {
        id: 'js-u1-l2-c3-e1',
        title: 'Ejercicio 5: lee student.name',
        instructions: [
          'Si ya no esta escrito arriba, vuelve a escribir `student` completo.',
          'Debajo usa [[console.log(student.name)]].',
        ],
        placeholder: 'console.log(student.name);',
        minLength: 24,
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
        id: 'js-u1-l2-c3-e2',
        title: 'Ejercicio 6: lee lesson.title',
        instructions: [
          'Si ya no esta escrito arriba, vuelve a escribir `lesson` completo.',
          'Debajo usa [[console.log(lesson.title)]].',
        ],
        placeholder: '',
        minLength: 24,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(lesson.title)',
            success: 'mostraste `lesson.title` en consola',
            error: 'falta `console.log(lesson.title)`.',
          },
        ],
      },
    ],
  },
];
