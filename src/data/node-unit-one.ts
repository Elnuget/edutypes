import type { UnitLesson } from './unit-types';

export const nodeUnitOneLessons: UnitLesson[] = [
  {
    id: 'node-u1-l1',
    step: '1',
    title: 'require, path y consola',
    summary: 'Empiezas con la forma base de cargar una herramienta de Node y usarla en una linea visible.',
    goal: 'Entender [[require]], [[const]], [[path.join]] y [[console.log]].',
    content: [
      {
        title: 'Tarjeta 1: require trae un modulo',
        body: [
          "En Node.js [[require('path')]] carga el modulo `path`.",
          'Luego lo guardas con `const` para poder usar sus funciones.',
        ],
        code: "const path = require('path');",
      },
      {
        title: 'Tarjeta 2: join une partes de una ruta',
        body: [
          "[[path.join('courses', 'node')]] junta trozos de ruta en un solo texto.",
          'El punto `.` entra a la funcion `join` que vive dentro del modulo `path`.',
        ],
        code: "const fullPath = path.join('courses', 'node');",
      },
      {
        title: 'Tarjeta 3: consola para ver el resultado',
        body: [
          'Con [[console.log(fullPath)]] ves la ruta abajo en la salida.',
          'Asi confirmas que la linea no solo compilo: tambien produjo algo visible.',
        ],
        code: 'console.log(fullPath);',
      },
    ],
    exercises: [
      {
        id: 'node-u1-l1-c1-e1',
        title: 'Ejercicio 1: carga path',
        instructions: [
          "Escribe exactamente `const path = require('path');`.",
          'Debe usar `require` y el nombre `path`.',
        ],
        placeholder: "const path = require('path');",
        minLength: 28,
        checks: [
          {
            kind: 'oneOf',
            needles: ["const path = require('path')", 'const path = require("path")'],
            success: 'cargaste el modulo `path`',
            error: "falta `const path = require('path');`.",
          },
        ],
      },
      {
        id: 'node-u1-l1-c1-e2',
        title: 'Ejercicio 2: carga fs',
        instructions: [
          "Escribe exactamente `const fs = require('fs');`.",
          'Debe usar `require` y el nombre `fs`.',
        ],
        placeholder: '',
        minLength: 24,
        checks: [
          {
            kind: 'oneOf',
            needles: ["const fs = require('fs')", 'const fs = require("fs")'],
            success: 'cargaste el modulo `fs`',
            error: "falta `const fs = require('fs');`.",
          },
        ],
      },
      {
        id: 'node-u1-l1-c2-e1',
        title: 'Ejercicio 3: crea fullPath',
        instructions: [
          "Escribe exactamente `const fullPath = path.join('courses', 'node');`.",
          'Debe usar `path.join` con esos dos textos.',
        ],
        placeholder: "const fullPath = path.join('courses', 'node');",
        minLength: 42,
        checks: [
          {
            kind: 'includes',
            needle: "const fullpath = path.join('courses','node')",
            success: 'creaste `fullPath` con `path.join`',
            error: "falta `const fullPath = path.join('courses', 'node');`.",
          },
        ],
      },
      {
        id: 'node-u1-l1-c2-e2',
        title: 'Ejercicio 4: crea configPath',
        instructions: [
          "Escribe exactamente `const configPath = path.join('config', 'app.json');`.",
          'Debe usar `path.join` con esos dos textos.',
        ],
        placeholder: '',
        minLength: 46,
        checks: [
          {
            kind: 'includes',
            needle: "const configpath = path.join('config','app.json')",
            success: 'creaste `configPath` con `path.join`',
            error: "falta `const configPath = path.join('config', 'app.json');`.",
          },
        ],
      },
      {
        id: 'node-u1-l1-c3-e1',
        title: 'Ejercicio 5: muestra fullPath',
        instructions: [
          'Si ya no esta escrito arriba, vuelve a escribir `const fullPath = path.join(...)` completo.',
          'Debajo usa `console.log(fullPath);`.',
        ],
        placeholder: 'console.log(fullPath);',
        minLength: 20,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(fullpath)',
            success: 'mostraste `fullPath` en consola',
            error: 'falta `console.log(fullPath);`.',
          },
        ],
      },
      {
        id: 'node-u1-l1-c3-e2',
        title: 'Ejercicio 6: muestra configPath',
        instructions: [
          'Si ya no esta escrito arriba, vuelve a escribir `const configPath = path.join(...)` completo.',
          'Debajo usa `console.log(configPath);`.',
        ],
        placeholder: '',
        minLength: 22,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(configpath)',
            success: 'mostraste `configPath` en consola',
            error: 'falta `console.log(configPath);`.',
          },
        ],
      },
    ],
  },
  {
    id: 'node-u1-l2',
    step: '2',
    title: 'process.argv y datos de entrada',
    summary: 'Aprendes a leer argumentos simples del proceso para usar datos que llegan desde la terminal.',
    goal: 'Entender [[process.argv]], `[ ]`, indices y [[console.log]].',
    content: [
      {
        title: 'Tarjeta 1: argv es un array',
        body: [
          '[[process.argv]] guarda los textos que entran al ejecutar el script.',
          'Como es un array, lees cada posicion con corchetes `[ ]`.',
        ],
        code: 'const topic = process.argv[2];',
      },
      {
        title: 'Tarjeta 2: otra posicion, otro dato',
        body: [
          'Si quieres otro dato, cambias el indice. `3` apunta a la siguiente posicion.',
          'Eso sirve para leer varios argumentos en orden.',
        ],
        code: 'const level = process.argv[3];',
      },
      {
        title: 'Tarjeta 3: mostrar lo que entro',
        body: [
          'Despues puedes sacar el valor con consola para revisar que si llego.',
          'Un `console.log(topic)` deja la lectura bien visible.',
        ],
        code: 'console.log(topic);\nconsole.log(level);',
      },
    ],
    exercises: [
      {
        id: 'node-u1-l2-c1-e1',
        title: 'Ejercicio 1: lee topic',
        instructions: [
          'Escribe exactamente `const topic = process.argv[2];`.',
          'Debe usar el indice `2`.',
        ],
        placeholder: 'const topic = process.argv[2];',
        minLength: 28,
        checks: [
          {
            kind: 'includes',
            needle: 'const topic = process.argv[2]',
            success: 'leiste `topic` desde `process.argv[2]`',
            error: 'falta `const topic = process.argv[2];`.',
          },
        ],
      },
      {
        id: 'node-u1-l2-c1-e2',
        title: 'Ejercicio 2: lee level',
        instructions: [
          'Escribe exactamente `const level = process.argv[3];`.',
          'Debe usar el indice `3`.',
        ],
        placeholder: '',
        minLength: 28,
        checks: [
          {
            kind: 'includes',
            needle: 'const level = process.argv[3]',
            success: 'leiste `level` desde `process.argv[3]`',
            error: 'falta `const level = process.argv[3];`.',
          },
        ],
      },
      {
        id: 'node-u1-l2-c2-e1',
        title: 'Ejercicio 3: lee mode',
        instructions: [
          'Escribe exactamente `const mode = process.argv[4];`.',
          'Debe usar el indice `4`.',
        ],
        placeholder: 'const mode = process.argv[4];',
        minLength: 26,
        checks: [
          {
            kind: 'includes',
            needle: 'const mode = process.argv[4]',
            success: 'leiste `mode` desde `process.argv[4]`',
            error: 'falta `const mode = process.argv[4];`.',
          },
        ],
      },
      {
        id: 'node-u1-l2-c2-e2',
        title: 'Ejercicio 4: lee command',
        instructions: [
          'Escribe exactamente `const command = process.argv[2];`.',
          'Debe usar el indice `2`.',
        ],
        placeholder: '',
        minLength: 30,
        checks: [
          {
            kind: 'includes',
            needle: 'const command = process.argv[2]',
            success: 'leiste `command` desde `process.argv[2]`',
            error: 'falta `const command = process.argv[2];`.',
          },
        ],
      },
      {
        id: 'node-u1-l2-c3-e1',
        title: 'Ejercicio 5: muestra topic',
        instructions: [
          'Escribe exactamente `console.log(topic);`.',
          'Debe mostrar el valor de `topic`.',
        ],
        placeholder: 'console.log(topic);',
        minLength: 18,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(topic)',
            success: 'mostraste `topic` en consola',
            error: 'falta `console.log(topic);`.',
          },
        ],
      },
      {
        id: 'node-u1-l2-c3-e2',
        title: 'Ejercicio 6: muestra level',
        instructions: [
          'Escribe exactamente `console.log(level);`.',
          'Debe mostrar el valor de `level`.',
        ],
        placeholder: '',
        minLength: 18,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(level)',
            success: 'mostraste `level` en consola',
            error: 'falta `console.log(level);`.',
          },
        ],
      },
    ],
  },
];
