import type { UnitLesson } from './unit-types';

export const javascriptUnitThreeLessons: UnitLesson[] = [
  {
    id: 'js-u3-l1',
    step: '1',
    title: 'Funciones que leen objetos',
    summary: 'Aprendes a pasar un objeto a una funcion y a devolver solo la propiedad que necesitas.',
    goal: 'Entender parametros con objetos, [[student.name]], [[badge.unlocked]] y [[return]].',
    content: [
      {
        title: 'Tarjeta 1: objeto que entra a una funcion',
        body: [
          'Una funcion tambien puede recibir un objeto completo. Ese objeto entra por el parametro.',
          'Si el parametro se llama [[student]], dentro puedes leer [[student.name]] o cualquier otra propiedad visible.',
        ],
        code: "const student = {\n  name: 'Ana',\n  completed: 4,\n};",
      },
      {
        title: 'Tarjeta 2: leer una propiedad y devolverla',
        body: [
          'El punto `.` entra a una propiedad concreta. [[student.name]] lee solo el nombre.',
          'Si quieres sacar ese valor de la funcion, dentro usas [[return student.name;]].',
        ],
        code: "function readStudent(student) {\n  return student.name;\n}",
      },
      {
        title: 'Tarjeta 3: guardar el resultado y verlo',
        body: [
          'Primero llamas la funcion. Despues guardas el resultado en una variable corta.',
          'Luego usas [[console.log(...)]] para ver ese valor en la consola.',
        ],
        code: "const name = readStudent(student);\nconsole.log(name);",
      },
    ],
    exercises: [
      {
        id: 'js-u3-l1-c1-e1',
        title: 'Ejercicio 1: crea student',
        instructions: [
          "Escribe `const student = { name: 'Ana', completed: 4 };`.",
          'Debe incluir las dos propiedades dentro del objeto.',
        ],
        placeholder: "const student = {\n  name: 'Ana',\n  completed: 4,\n};",
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
            success: 'incluiste `name`',
            error: "falta `name: 'Ana'` dentro de `student`.",
          },
          {
            kind: 'includes',
            needle: 'completed:4',
            success: 'incluiste `completed: 4`',
            error: 'falta `completed: 4` dentro de `student`.',
          },
        ],
      },
      {
        id: 'js-u3-l1-c1-e2',
        title: 'Ejercicio 2: crea badge',
        instructions: [
          "Escribe `const badge = { label: 'Inicio', unlocked: true };`.",
          'Debe incluir `label` y `unlocked` dentro del objeto.',
        ],
        placeholder: '',
        minLength: 56,
        checks: [
          {
            kind: 'includes',
            needle: 'const badge = {',
            success: 'creaste el objeto `badge`',
            error: 'falta `const badge = { ... }`.',
          },
          {
            kind: 'oneOf',
            needles: ["label:'inicio'", 'label:"inicio"'],
            success: 'incluiste `label`',
            error: "falta `label: 'Inicio'` dentro de `badge`.",
          },
          {
            kind: 'includes',
            needle: 'unlocked:true',
            success: 'incluiste `unlocked: true`',
            error: 'falta `unlocked: true` dentro de `badge`.',
          },
        ],
      },
      {
        id: 'js-u3-l1-c2-e1',
        title: 'Ejercicio 3: readStudent',
        instructions: [
          'Escribe `function readStudent(student) { return student.name; }`.',
          'Debe recibir `student` y devolver exactamente `student.name`.',
        ],
        placeholder: "function readStudent(student) {\n  return student.name;\n}",
        minLength: 58,
        checks: [
          {
            kind: 'includes',
            needle: 'function readstudent(student)',
            success: 'la funcion `readStudent` existe',
            error: 'falta `function readStudent(student) { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'return student.name',
            success: 'la funcion devuelve `student.name`',
            error: 'falta `return student.name;`.',
          },
        ],
      },
      {
        id: 'js-u3-l1-c2-e2',
        title: 'Ejercicio 4: readBadge',
        instructions: [
          'Escribe `function readBadge(badge) { return badge.unlocked; }`.',
          'Debe recibir `badge` y devolver exactamente `badge.unlocked`.',
        ],
        placeholder: '',
        minLength: 58,
        checks: [
          {
            kind: 'includes',
            needle: 'function readbadge(badge)',
            success: 'la funcion `readBadge` existe',
            error: 'falta `function readBadge(badge) { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'return badge.unlocked',
            success: 'la funcion devuelve `badge.unlocked`',
            error: 'falta `return badge.unlocked;`.',
          },
        ],
      },
      {
        id: 'js-u3-l1-c3-e1',
        title: 'Ejercicio 5: guarda name',
        instructions: [
          'Si ya no esta arriba, vuelve a escribir `student` y `readStudent` completos.',
          'Debajo escribe `const name = readStudent(student);`.',
        ],
        placeholder: "const name = readStudent(student);",
        minLength: 34,
        checks: [
          {
            kind: 'includes',
            needle: 'const name = readstudent(student)',
            success: 'guardaste el resultado en `name`',
            error: 'falta `const name = readStudent(student);`.',
          },
        ],
      },
      {
        id: 'js-u3-l1-c3-e2',
        title: 'Ejercicio 6: muestra unlocked',
        instructions: [
          'Si ya no esta arriba, vuelve a escribir `badge` y `readBadge` completos.',
          'Debajo usa `console.log(readBadge(badge));`. Esta es la salida visible esperada.',
        ],
        placeholder: '',
        minLength: 30,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(readbadge(badge))',
            success: 'mostraste `readBadge(badge)` en consola',
            error: 'falta `console.log(readBadge(badge))`.',
          },
        ],
      },
    ],
  },
  {
    id: 'js-u3-l2',
    step: '2',
    title: 'Arrays que cambian y texto final',
    summary: 'Aprendes a agregar un elemento a un array y a convertir la lista en un texto visible.',
    goal: 'Entender [[push]], [[join]], [[tags.length]] y resultados visibles en consola.',
    content: [
      {
        title: 'Tarjeta 1: agregar con push',
        body: [
          "[[push]] agrega un elemento al final del array. Se usa asi: `tags.push('dom')`.",
          'Primero debe existir el array. Despues llamas el metodo con el punto `.`.',
        ],
        code: "const tags = ['js', 'web'];\ntags.push('dom');",
      },
      {
        title: 'Tarjeta 2: unir con join',
        body: [
          "[[join(', ')]] une los elementos con un separador. El resultado final es un texto.",
          "Si quieres devolver ese texto desde una funcion, usas [[return tags.join(', ');]].",
        ],
        code: "function formatTags(tags) {\n  return tags.join(', ');\n}",
      },
      {
        title: 'Tarjeta 3: largo y resumen visible',
        body: [
          '[[tags.length]] dice cuantos elementos tiene el array despues del cambio.',
          'Tambien puedes mostrar el resumen final con [[console.log(...)]] para ver el texto unido.',
        ],
        code: "console.log(tags.length);\nconsole.log(formatTags(tags));",
      },
    ],
    exercises: [
      {
        id: 'js-u3-l2-c1-e1',
        title: 'Ejercicio 1: crea tags',
        instructions: [
          "Escribe `const tags = ['js', 'web'];`.",
          'La lista debe tener esos dos textos.',
        ],
        placeholder: "const tags = ['js', 'web'];",
        minLength: 28,
        checks: [
          {
            kind: 'includes',
            needle: 'const tags = [',
            success: 'creaste el array `tags`',
            error: 'falta `const tags = [ ... ]`.',
          },
          {
            kind: 'oneOf',
            needles: ["'js'", '"js"'],
            success: 'incluiste `js`',
            error: 'falta `js` dentro de `tags`.',
          },
          {
            kind: 'oneOf',
            needles: ["'web'", '"web"'],
            success: 'incluiste `web`',
            error: 'falta `web` dentro de `tags`.',
          },
        ],
      },
      {
        id: 'js-u3-l2-c1-e2',
        title: 'Ejercicio 2: agrega dom',
        instructions: [
          "Si ya no esta arriba, vuelve a escribir `const tags = ['js', 'web'];`.",
          "Debajo escribe `tags.push('dom');`.",
        ],
        placeholder: '',
        minLength: 18,
        checks: [
          {
            kind: 'oneOf',
            needles: ["tags.push('dom')", 'tags.push("dom")'],
            success: 'agregaste `dom` con `push`',
            error: "falta `tags.push('dom');`.",
          },
        ],
      },
      {
        id: 'js-u3-l2-c2-e1',
        title: 'Ejercicio 3: formatTags',
        instructions: [
          "Escribe `function formatTags(tags) { return tags.join(', '); }`.",
          "Debe devolver exactamente `tags.join(', ')`.",
        ],
        placeholder: "function formatTags(tags) {\n  return tags.join(', ');\n}",
        minLength: 58,
        checks: [
          {
            kind: 'includes',
            needle: 'function formattags(tags)',
            success: 'la funcion `formatTags` existe',
            error: 'falta `function formatTags(tags) { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'return tags.join(',
            success: 'la funcion usa `tags.join(...)`',
            error: "falta `return tags.join(', ');`.",
          },
        ],
      },
      {
        id: 'js-u3-l2-c2-e2',
        title: 'Ejercicio 4: muestra largo',
        instructions: [
          'Si ya no esta arriba, vuelve a escribir `tags` completo.',
          'Debajo usa [[console.log(tags.length)]].',
        ],
        placeholder: '',
        minLength: 24,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(tags.length)',
            success: 'mostraste `tags.length` en consola',
            error: 'falta `console.log(tags.length)`.',
          },
        ],
      },
      {
        id: 'js-u3-l2-c3-e1',
        title: 'Ejercicio 5: guarda summary',
        instructions: [
          'Si ya no esta arriba, vuelve a escribir `formatTags` completo.',
          'Debajo escribe `const summary = formatTags(tags);`.',
        ],
        placeholder: 'const summary = formatTags(tags);',
        minLength: 32,
        checks: [
          {
            kind: 'includes',
            needle: 'const summary = formattags(tags)',
            success: 'guardaste el resumen en `summary`',
            error: 'falta `const summary = formatTags(tags);`.',
          },
        ],
      },
      {
        id: 'js-u3-l2-c3-e2',
        title: 'Ejercicio 6: muestra summary',
        instructions: [
          'Si ya no esta arriba, vuelve a escribir `const summary = formatTags(tags);`.',
          'Debajo usa [[console.log(summary)]].',
        ],
        placeholder: '',
        minLength: 20,
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
