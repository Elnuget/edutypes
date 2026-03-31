import type { UnitLesson } from './unit-types';

export const javascriptUnitTwoLessons: UnitLesson[] = [
  {
    id: 'js-u2-l1',
    step: '1',
    title: 'Booleanos, comparaciones e if',
    summary: 'Aprendes a preguntar por un valor y a ejecutar un bloque solo cuando la condicion se cumple.',
    goal: 'Entender [[true]], [[false]], [[===]] y [[if]].',
    content: [
      {
        title: 'Tarjeta 1: booleanos y comparacion exacta',
        body: [
          '[[true]] y [[false]] representan si algo esta activo o no. Son valores booleanos.',
          '[[===]] compara dos piezas y pregunta si son exactamente iguales.',
        ],
        code: "const isOpen = true;\nconst hasAccess = false;",
      },
      {
        title: 'Tarjeta 2: if y bloque',
        body: [
          '[[if]] abre una decision. Dentro del `()` va la condicion que quieres revisar.',
          'Si la condicion es verdadera, se ejecuta el bloque entre llaves `{}.`',
        ],
        code: "if (isOpen === true) {\n  console.log('abierto');\n}",
      },
      {
        title: 'Tarjeta 3: comparar texto o numeros',
        body: [
          'Tambien puedes comparar texto o numeros. La forma sigue siendo la misma: valor, [[===]] y otro valor.',
          'Si quieres ver el resultado, dentro del bloque usas [[console.log(...)]] con el valor o un texto.',
        ],
        code: "const level = 3;\nif (level === 3) {\n  console.log(level);\n}",
      },
    ],
    exercises: [
      {
        id: 'js-u2-l1-c1-e1',
        title: 'Ejercicio 1: isOpen verdadero',
        instructions: [
          'Escribe `const isOpen = true;`.',
          'Debe ser una sola linea.',
        ],
        placeholder: 'const isOpen = true;',
        minLength: 20,
        checks: [
          {
            kind: 'includes',
            needle: 'const isopen = true',
            success: 'creaste `isOpen` con `true`',
            error: 'falta `const isOpen = true;`.',
          },
        ],
      },
      {
        id: 'js-u2-l1-c1-e2',
        title: 'Ejercicio 2: hasAccess falso',
        instructions: [
          'Escribe `const hasAccess = false;`.',
          'Debe ser una sola linea.',
        ],
        placeholder: '',
        minLength: 24,
        checks: [
          {
            kind: 'includes',
            needle: 'const hasaccess = false',
            success: 'creaste `hasAccess` con `false`',
            error: 'falta `const hasAccess = false;`.',
          },
        ],
      },
      {
        id: 'js-u2-l1-c2-e1',
        title: 'Ejercicio 3: if con isOpen',
        instructions: [
          "Escribe `if (isOpen === true) { console.log('abierto'); }`.",
          'Debe incluir la comparacion exacta y la salida visible.',
        ],
        placeholder: "if (isOpen === true) {\n  console.log('abierto');\n}",
        minLength: 48,
        checks: [
          {
            kind: 'includes',
            needle: 'if (isopen === true)',
            success: 'escribiste la condicion con `===`',
            error: 'falta `if (isOpen === true) { ... }`.',
          },
          {
            kind: 'oneOf',
            needles: ["console.log('abierto')", 'console.log("abierto")'],
            success: 'agregaste la salida visible',
            error: "falta `console.log('abierto')` dentro del bloque.",
          },
        ],
      },
      {
        id: 'js-u2-l1-c2-e2',
        title: 'Ejercicio 4: if con hasAccess',
        instructions: [
          "Escribe `if (hasAccess === false) { console.log('cerrado'); }`.",
          'Debe incluir la comparacion exacta y la salida visible.',
        ],
        placeholder: '',
        minLength: 56,
        checks: [
          {
            kind: 'includes',
            needle: 'if (hasaccess === false)',
            success: 'escribiste la condicion con `hasAccess`',
            error: 'falta `if (hasAccess === false) { ... }`.',
          },
          {
            kind: 'oneOf',
            needles: ["console.log('cerrado')", 'console.log("cerrado")'],
            success: 'agregaste la salida visible de cerrado',
            error: "falta `console.log('cerrado')` dentro del bloque.",
          },
        ],
      },
      {
        id: 'js-u2-l1-c3-e1',
        title: 'Ejercicio 5: compara studentName',
        instructions: [
          "Escribe `const studentName = 'Ana';` y debajo `if (studentName === 'Ana') { console.log(studentName); }`.",
          'Debes reescribir la variable y la condicion completa.',
        ],
        placeholder: "const studentName = 'Ana';\nif (studentName === 'Ana') {\n  console.log(studentName);\n}",
        minLength: 82,
        checks: [
          {
            kind: 'includes',
            needle: 'const studentname =',
            success: 'reescribiste `studentName`',
            error: "falta `const studentName = 'Ana';`.",
          },
          {
            kind: 'includes',
            needle: 'if (studentname ===',
            success: 'comparaste `studentName` con `===`',
            error: "falta `if (studentName === 'Ana') { ... }`.",
          },
          {
            kind: 'includes',
            needle: 'console.log(studentname)',
            success: 'mostraste `studentName` en consola',
            error: 'falta `console.log(studentName)` dentro del bloque.',
          },
        ],
      },
      {
        id: 'js-u2-l1-c3-e2',
        title: 'Ejercicio 6: compara level',
        instructions: [
          'Escribe `const level = 3;` y debajo `if (level === 3) { console.log(level); }`.',
          'Debes reescribir la variable y la condicion completa.',
        ],
        placeholder: '',
        minLength: 60,
        checks: [
          {
            kind: 'includes',
            needle: 'const level = 3',
            success: 'reescribiste `level`',
            error: 'falta `const level = 3;`.',
          },
          {
            kind: 'includes',
            needle: 'if (level === 3)',
            success: 'comparaste `level` con `===`',
            error: 'falta `if (level === 3) { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'console.log(level)',
            success: 'mostraste `level` en consola',
            error: 'falta `console.log(level)` dentro del bloque.',
          },
        ],
      },
    ],
  },
  {
    id: 'js-u2-l2',
    step: '2',
    title: 'for...of y recorrido de arrays',
    summary: 'Aprendes a pasar por cada elemento de una lista sin escribir el mismo bloque muchas veces.',
    goal: 'Entender [[for]], [[of]], un elemento por vuelta y [[console.log]] dentro del recorrido.',
    content: [
      {
        title: 'Tarjeta 1: la forma de for...of',
        body: [
          '[[for]] abre una repeticion. Dentro del parentesis dices que valor quieres leer en cada vuelta.',
          'La pieza `[[const topic of topics]]` significa: toma un elemento de `topics` y guardalo en `topic` en cada vuelta.',
        ],
        code: "for (const topic of topics) {\n}\n",
      },
      {
        title: 'Tarjeta 2: array fuente y variable corta',
        body: [
          'Primero debe existir el array fuente. Luego `for...of` entra a esa lista una posicion a la vez.',
          'El nombre `topic`, `lesson` o `name` es solo la variable temporal de cada vuelta.',
        ],
        code: "const lessons = ['intro', 'arrays', 'if'];\nfor (const lesson of lessons) {\n  console.log(lesson);\n}",
      },
      {
        title: 'Tarjeta 3: salida visible y conteo final',
        body: [
          'Dentro del bloque puedes usar [[console.log(...)]] para ver cada elemento.',
          'Fuera del bloque, [[lessons.length]] te deja ver cuantas entradas habia en total.',
        ],
        code: "for (const name of names) {\n  console.log(name);\n}\nconsole.log(names.length);",
      },
    ],
    exercises: [
      {
        id: 'js-u2-l2-c1-e1',
        title: 'Ejercicio 1: crea topics',
        instructions: [
          "Escribe `const topics = ['variables', 'objetos'];`.",
          'La lista debe tener esos dos textos.',
        ],
        placeholder: "const topics = ['variables', 'objetos'];",
        minLength: 38,
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
            success: 'incluiste `variables`',
            error: 'falta `variables` dentro de `topics`.',
          },
          {
            kind: 'oneOf',
            needles: ["'objetos'", '"objetos"'],
            success: 'incluiste `objetos`',
            error: 'falta `objetos` dentro de `topics`.',
          },
        ],
      },
      {
        id: 'js-u2-l2-c1-e2',
        title: 'Ejercicio 2: crea lessons',
        instructions: [
          "Escribe `const lessons = ['intro', 'arrays', 'if'];`.",
          'La lista debe tener esos tres textos.',
        ],
        placeholder: '',
        minLength: 42,
        checks: [
          {
            kind: 'includes',
            needle: 'const lessons = [',
            success: 'creaste el array `lessons`',
            error: 'falta `const lessons = [ ... ]`.',
          },
          {
            kind: 'oneOf',
            needles: ["'intro'", '"intro"'],
            success: 'incluiste `intro`',
            error: 'falta `intro` dentro de `lessons`.',
          },
          {
            kind: 'oneOf',
            needles: ["'arrays'", '"arrays"'],
            success: 'incluiste `arrays`',
            error: 'falta `arrays` dentro de `lessons`.',
          },
          {
            kind: 'oneOf',
            needles: ["'if'", '"if"'],
            success: 'incluiste `if`',
            error: 'falta `if` dentro de `lessons`.',
          },
        ],
      },
      {
        id: 'js-u2-l2-c2-e1',
        title: 'Ejercicio 3: estructura for...of',
        instructions: [
          'Si ya no esta arriba, vuelve a escribir `const topics = [...]` completo.',
          'Debajo escribe `for (const topic of topics) { }`.',
        ],
        placeholder: "for (const topic of topics) {\n}\n",
        minLength: 30,
        checks: [
          {
            kind: 'includes',
            needle: 'for (const topic of topics)',
            success: 'escribiste la estructura `for...of`',
            error: 'falta `for (const topic of topics) { }`.',
          },
        ],
      },
      {
        id: 'js-u2-l2-c2-e2',
        title: 'Ejercicio 4: muestra cada lesson',
        instructions: [
          'Si ya no esta arriba, vuelve a escribir `const lessons = [...]` completo.',
          'Debajo escribe `for (const lesson of lessons) { console.log(lesson); }`.',
        ],
        placeholder: '',
        minLength: 54,
        checks: [
          {
            kind: 'includes',
            needle: 'for (const lesson of lessons)',
            success: 'recorres `lessons` con `for...of`',
            error: 'falta `for (const lesson of lessons) { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'console.log(lesson)',
            success: 'muestras cada `lesson` en consola',
            error: 'falta `console.log(lesson)` dentro del bloque.',
          },
        ],
      },
      {
        id: 'js-u2-l2-c3-e1',
        title: 'Ejercicio 5: recorre names',
        instructions: [
          "Escribe `const names = ['Ana', 'Luis'];` y debajo `for (const name of names) { console.log(name); }`.",
          'Debes reescribir la lista y el recorrido completo.',
        ],
        placeholder: "const names = ['Ana', 'Luis'];\nfor (const name of names) {\n  console.log(name);\n}",
        minLength: 74,
        checks: [
          {
            kind: 'includes',
            needle: 'const names = [',
            success: 'creaste `names`',
            error: 'falta `const names = [ ... ]`.',
          },
          {
            kind: 'includes',
            needle: 'for (const name of names)',
            success: 'recorres `names` con `for...of`',
            error: 'falta `for (const name of names) { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'console.log(name)',
            success: 'muestras cada `name` en consola',
            error: 'falta `console.log(name)` dentro del bloque.',
          },
        ],
      },
      {
        id: 'js-u2-l2-c3-e2',
        title: 'Ejercicio 6: cuenta lessons',
        instructions: [
          'Si ya no esta escrito arriba, vuelve a escribir `const lessons = [...]` completo.',
          'Debajo usa [[console.log(lessons.length)]].',
        ],
        placeholder: '',
        minLength: 28,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(lessons.length)',
            success: 'mostraste `lessons.length` en consola',
            error: 'falta `console.log(lessons.length)`.',
          },
        ],
      },
    ],
  },
];
