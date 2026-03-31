import type { UnitLesson } from './unit-types';

export const javascriptUnitFourLessons: UnitLesson[] = [
  {
    id: 'js-u4-l1',
    step: '1',
    title: 'Funciones con if y dos caminos',
    summary: 'Aprendes a decidir dentro de una funcion y a devolver un texto distinto segun el valor que entra.',
    goal: 'Entender [[if]], comparacion exacta, un [[return]] dentro del bloque y otro fuera del bloque.',
    content: [
      {
        title: 'Tarjeta 1: if dentro de la funcion',
        body: [
          'Una funcion puede decidir antes de devolver. Primero entra un valor como `isOpen`.',
          'Luego [[if]] revisa la condicion dentro del bloque de la funcion.',
        ],
        code: "function getAccessMessage(isOpen) {\n  if (isOpen === true) {\n    return 'abierto';\n  }\n\n  return 'cerrado';\n}",
      },
      {
        title: 'Tarjeta 2: primer return y segundo return',
        body: [
          'Si la condicion se cumple, el primer [[return]] corta la funcion y entrega ese resultado.',
          'Si no se cumple, la funcion sigue y llega al segundo [[return]]. Asi tienes dos caminos claros.',
        ],
        code: "function getLevelLabel(level) {\n  if (level === 1) {\n    return 'base';\n  }\n\n  return 'avance';\n}",
      },
      {
        title: 'Tarjeta 3: ver el resultado final',
        body: [
          'Despues llamas la funcion con un valor real. Luego usas [[console.log(...)]] para ver el texto que devolvio.',
          'El valor visible cambia segun la condicion que se haya cumplido.',
        ],
        code: "console.log(getAccessMessage(true));\nconsole.log(getLevelLabel(1));",
      },
    ],
    exercises: [
      {
        id: 'js-u4-l1-c1-e1',
        title: 'Ejercicio 1: getAccessMessage',
        instructions: [
          "Escribe `function getAccessMessage(isOpen) { if (isOpen === true) { return 'abierto'; } return 'cerrado'; }`.",
          'Debe recibir `isOpen` y devolver esos dos textos en los dos caminos.',
        ],
        placeholder: "function getAccessMessage(isOpen) {\n  if (isOpen === true) {\n    return 'abierto';\n  }\n\n  return 'cerrado';\n}",
        minLength: 110,
        checks: [
          {
            kind: 'includes',
            needle: 'function getaccessmessage(isopen)',
            success: 'la funcion `getAccessMessage` existe',
            error: 'falta `function getAccessMessage(isOpen) { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'if (isopen === true)',
            success: 'la funcion compara `isOpen === true`',
            error: 'falta `if (isOpen === true) { ... }`.',
          },
          {
            kind: 'oneOf',
            needles: ["return 'abierto'", 'return "abierto"'],
            success: 'incluiste el camino de `abierto`',
            error: "falta `return 'abierto';` dentro del `if`.",
          },
          {
            kind: 'oneOf',
            needles: ["return 'cerrado'", 'return "cerrado"'],
            success: 'incluiste el camino de `cerrado`',
            error: "falta `return 'cerrado';` fuera del `if`.",
          },
        ],
      },
      {
        id: 'js-u4-l1-c1-e2',
        title: 'Ejercicio 2: getLevelLabel',
        instructions: [
          "Escribe `function getLevelLabel(level) { if (level === 1) { return 'base'; } return 'avance'; }`.",
          'Debe recibir `level` y devolver esos dos textos en los dos caminos.',
        ],
        placeholder: '',
        minLength: 100,
        checks: [
          {
            kind: 'includes',
            needle: 'function getlevellabel(level)',
            success: 'la funcion `getLevelLabel` existe',
            error: 'falta `function getLevelLabel(level) { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'if (level === 1)',
            success: 'la funcion compara `level === 1`',
            error: 'falta `if (level === 1) { ... }`.',
          },
          {
            kind: 'oneOf',
            needles: ["return 'base'", 'return "base"'],
            success: 'incluiste el camino de `base`',
            error: "falta `return 'base';` dentro del `if`.",
          },
          {
            kind: 'oneOf',
            needles: ["return 'avance'", 'return "avance"'],
            success: 'incluiste el camino de `avance`',
            error: "falta `return 'avance';` fuera del `if`.",
          },
        ],
      },
      {
        id: 'js-u4-l1-c2-e1',
        title: 'Ejercicio 3: muestra abierto',
        instructions: [
          'Si ya no esta arriba, vuelve a escribir `getAccessMessage` completo.',
          'Debajo usa `console.log(getAccessMessage(true));`.',
        ],
        placeholder: 'console.log(getAccessMessage(true));',
        minLength: 34,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(getaccessmessage(true))',
            success: 'mostraste el resultado de `getAccessMessage(true)`',
            error: 'falta `console.log(getAccessMessage(true))`.',
          },
        ],
      },
      {
        id: 'js-u4-l1-c2-e2',
        title: 'Ejercicio 4: muestra avance',
        instructions: [
          'Si ya no esta arriba, vuelve a escribir `getLevelLabel` completo.',
          'Debajo usa `console.log(getLevelLabel(2));`.',
        ],
        placeholder: '',
        minLength: 32,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(getlevellabel(2))',
            success: 'mostraste el resultado de `getLevelLabel(2)`',
            error: 'falta `console.log(getLevelLabel(2))`.',
          },
        ],
      },
      {
        id: 'js-u4-l1-c3-e1',
        title: 'Ejercicio 5: guarda message',
        instructions: [
          'Si ya no esta arriba, vuelve a escribir `getAccessMessage` completo.',
          'Debajo escribe `const message = getAccessMessage(false);`.',
        ],
        placeholder: 'const message = getAccessMessage(false);',
        minLength: 40,
        checks: [
          {
            kind: 'includes',
            needle: 'const message = getaccessmessage(false)',
            success: 'guardaste el resultado en `message`',
            error: 'falta `const message = getAccessMessage(false);`.',
          },
        ],
      },
      {
        id: 'js-u4-l1-c3-e2',
        title: 'Ejercicio 6: muestra message',
        instructions: [
          'Si ya no esta arriba, vuelve a escribir `const message = getAccessMessage(false);`.',
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
    id: 'js-u4-l2',
    step: '2',
    title: 'Contar y cerrar un mini flujo',
    summary: 'Aprendes a contar elementos de una lista y a cerrar una secuencia completa con una funcion simple.',
    goal: 'Entender [[let total = 0]], [[total = total + 1]], recorrido y una llamada final visible.',
    content: [
      {
        title: 'Tarjeta 1: contador base',
        body: [
          'Antes del recorrido puedes crear un contador. [[let total = 0]] empieza el conteo en cero.',
          'Ese valor si puede cambiar, por eso aqui usamos [[let]].',
        ],
        code: 'let total = 0;',
      },
      {
        title: 'Tarjeta 2: sumar uno en cada vuelta',
        body: [
          'Dentro del recorrido puedes actualizar el contador. [[total = total + 1]] suma una vuelta mas.',
          'La parte de la derecha lee el valor actual y le agrega uno.',
        ],
        code: "for (const lesson of lessons) {\n  total = total + 1;\n}",
      },
      {
        title: 'Tarjeta 3: cerrar con length',
        body: [
          'Tambien puedes contar con [[items.length]] dentro de una funcion corta.',
          'Luego llamas esa funcion y muestras el resultado en consola para cerrar el flujo.',
        ],
        code: "function countLessons(items) {\n  return items.length;\n}\n\nconsole.log(countLessons(lessons));",
      },
    ],
    exercises: [
      {
        id: 'js-u4-l2-c1-e1',
        title: 'Ejercicio 1: crea lessons',
        instructions: [
          "Escribe `const lessons = ['intro', 'arrays', 'if'];`.",
          'La lista debe tener esos tres textos.',
        ],
        placeholder: "const lessons = ['intro', 'arrays', 'if'];",
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
        id: 'js-u4-l2-c1-e2',
        title: 'Ejercicio 2: crea total',
        instructions: [
          'Escribe una sola linea con `let total = 0;`.',
          'Debe empezar exactamente en cero.',
        ],
        placeholder: '',
        minLength: 14,
        checks: [
          {
            kind: 'includes',
            needle: 'let total = 0',
            success: 'creaste el contador `total`',
            error: 'falta `let total = 0;`.',
          },
        ],
      },
      {
        id: 'js-u4-l2-c2-e1',
        title: 'Ejercicio 3: suma en cada vuelta',
        instructions: [
          'Si ya no esta arriba, vuelve a escribir `lessons` y `let total = 0;`.',
          'Debajo escribe `for (const lesson of lessons) { total = total + 1; }`.',
        ],
        placeholder: "for (const lesson of lessons) {\n  total = total + 1;\n}",
        minLength: 58,
        checks: [
          {
            kind: 'includes',
            needle: 'for (const lesson of lessons)',
            success: 'recorres `lessons` con `for...of`',
            error: 'falta `for (const lesson of lessons) { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'total = total + 1',
            success: 'sumas uno en cada vuelta',
            error: 'falta `total = total + 1;` dentro del bloque.',
          },
        ],
      },
      {
        id: 'js-u4-l2-c2-e2',
        title: 'Ejercicio 4: muestra total',
        instructions: [
          'Si ya no esta arriba, vuelve a escribir `let total = 0;` y el recorrido completo.',
          'Debajo usa [[console.log(total)]].',
        ],
        placeholder: '',
        minLength: 18,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(total)',
            success: 'mostraste `total` en consola',
            error: 'falta `console.log(total)`.',
          },
        ],
      },
      {
        id: 'js-u4-l2-c3-e1',
        title: 'Ejercicio 5: countLessons',
        instructions: [
          'Escribe `function countLessons(items) { return items.length; }`.',
          'Debe devolver exactamente `items.length`.',
        ],
        placeholder: "function countLessons(items) {\n  return items.length;\n}",
        minLength: 56,
        checks: [
          {
            kind: 'includes',
            needle: 'function countlessons(items)',
            success: 'la funcion `countLessons` existe',
            error: 'falta `function countLessons(items) { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'return items.length',
            success: 'la funcion devuelve `items.length`',
            error: 'falta `return items.length;`.',
          },
        ],
      },
      {
        id: 'js-u4-l2-c3-e2',
        title: 'Ejercicio 6: cierre final',
        instructions: [
          'Si ya no esta arriba, vuelve a escribir `const lessons = [...]` y `countLessons` completos.',
          'Debajo usa `console.log(countLessons(lessons));`. Esta es la salida final esperada.',
        ],
        placeholder: '',
        minLength: 34,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(countlessons(lessons))',
            success: 'mostraste el conteo final en consola',
            error: 'falta `console.log(countLessons(lessons))`.',
          },
        ],
      },
    ],
  },
];
