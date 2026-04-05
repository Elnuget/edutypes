import type { UnitLesson } from './unit-types';

export const nodeUnitTwoLessons: UnitLesson[] = [
  {
    id: 'node-u2-l1',
    step: '1',
    title: 'module.exports y funciones reutilizables',
    summary: 'Aprendes a preparar una funcion para que otro archivo la pueda usar.',
    goal: 'Entender [[module.exports]], [[function]], [[return]] y reutilizacion.',
    content: [
      {
        title: 'Tarjeta 1: crear una funcion util',
        body: [
          'Primero escribes la funcion que quieres compartir.',
          'Por ejemplo una funcion puede recibir `title` y devolver un texto final.',
        ],
        code: "function formatLesson(title) {\n  return 'Leccion: ' + title;\n}",
      },
      {
        title: 'Tarjeta 2: exportar con module.exports',
        body: [
          '[[module.exports]] dice que pieza sale del archivo.',
          'Si igualas `module.exports = formatLesson`, exportas esa funcion.',
        ],
        code: 'module.exports = formatLesson;',
      },
      {
        title: 'Tarjeta 3: otro ejemplo pequeno',
        body: [
          'No estas limitado a un solo nombre. Puedes exportar otra funcion distinta en otro archivo.',
          'La idea base es igual: crear, devolver y exportar.',
        ],
        code: "function buildPath(name) {\n  return 'api/' + name;\n}\n\nmodule.exports = buildPath;",
      },
    ],
    exercises: [
      {
        id: 'node-u2-l1-c1-e1',
        title: 'Ejercicio 1: crea formatLesson',
        instructions: [
          'Escribe la funcion `formatLesson(title)`.',
          "Dentro debe tener `return 'Leccion: ' + title;`.",
        ],
        placeholder: "function formatLesson(title) {\n  return 'Leccion: ' + title;\n}",
        minLength: 60,
        checks: [
          {
            kind: 'includes',
            needle: 'function formatlesson(title)',
            success: 'creaste la funcion `formatLesson`',
            error: 'falta `function formatLesson(title) { ... }`.',
          },
          {
            kind: 'oneOf',
            needles: ["return 'leccion: '+title", 'return "leccion: "+title'],
            success: 'la funcion devuelve el texto esperado',
            error: "falta `return 'Leccion: ' + title;`.",
          },
        ],
      },
      {
        id: 'node-u2-l1-c1-e2',
        title: 'Ejercicio 2: crea buildPath',
        instructions: [
          'Escribe la funcion `buildPath(name)`.',
          "Dentro debe tener `return 'api/' + name;`.",
        ],
        placeholder: '',
        minLength: 48,
        checks: [
          {
            kind: 'includes',
            needle: 'function buildpath(name)',
            success: 'creaste la funcion `buildPath`',
            error: 'falta `function buildPath(name) { ... }`.',
          },
          {
            kind: 'oneOf',
            needles: ["return 'api/'+name", 'return "api/"+name'],
            success: 'la funcion devuelve la ruta esperada',
            error: "falta `return 'api/' + name;`.",
          },
        ],
      },
      {
        id: 'node-u2-l1-c2-e1',
        title: 'Ejercicio 3: exporta formatLesson',
        instructions: [
          'Escribe exactamente `module.exports = formatLesson;`.',
          'Debe exportar esa funcion con ese nombre.',
        ],
        placeholder: 'module.exports = formatLesson;',
        minLength: 28,
        checks: [
          {
            kind: 'includes',
            needle: 'module.exports = formatlesson',
            success: 'exportaste `formatLesson`',
            error: 'falta `module.exports = formatLesson;`.',
          },
        ],
      },
      {
        id: 'node-u2-l1-c2-e2',
        title: 'Ejercicio 4: exporta buildPath',
        instructions: [
          'Escribe exactamente `module.exports = buildPath;`.',
          'Debe exportar esa funcion con ese nombre.',
        ],
        placeholder: '',
        minLength: 24,
        checks: [
          {
            kind: 'includes',
            needle: 'module.exports = buildpath',
            success: 'exportaste `buildPath`',
            error: 'falta `module.exports = buildPath;`.',
          },
        ],
      },
      {
        id: 'node-u2-l1-c3-e1',
        title: 'Ejercicio 5: funcion y export juntos',
        instructions: [
          "Escribe `function formatLesson(title) { return 'Leccion: ' + title; }`.",
          'Debajo agrega `module.exports = formatLesson;`.',
        ],
        placeholder: "function formatLesson(title) {\n  return 'Leccion: ' + title;\n}\n\nmodule.exports = formatLesson;",
        minLength: 86,
        checks: [
          {
            kind: 'includes',
            needle: 'function formatlesson(title)',
            success: 'incluiste la funcion `formatLesson`',
            error: 'falta `function formatLesson(title) { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'module.exports = formatlesson',
            success: 'incluiste la exportacion correcta',
            error: 'falta `module.exports = formatLesson;`.',
          },
        ],
      },
      {
        id: 'node-u2-l1-c3-e2',
        title: 'Ejercicio 6: funcion y export para buildPath',
        instructions: [
          "Escribe `function buildPath(name) { return 'api/' + name; }`.",
          'Debajo agrega `module.exports = buildPath;`.',
        ],
        placeholder: '',
        minLength: 72,
        checks: [
          {
            kind: 'includes',
            needle: 'function buildpath(name)',
            success: 'incluiste la funcion `buildPath`',
            error: 'falta `function buildPath(name) { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'module.exports = buildpath',
            success: 'incluiste la exportacion correcta',
            error: 'falta `module.exports = buildPath;`.',
          },
        ],
      },
    ],
  },
  {
    id: 'node-u2-l2',
    step: '2',
    title: 'fs y JSON.parse',
    summary: 'Aprendes a leer un archivo de texto y convertir un JSON en un objeto usable.',
    goal: 'Entender [[fs.readFileSync]], [[JSON.parse]], [[const]] y lectura de propiedades.',
    content: [
      {
        title: 'Tarjeta 1: leer un archivo',
        body: [
          'Con `fs.readFileSync` sacas el contenido del archivo como texto.',
          "El segundo valor `'utf8'` dice que quieres leer texto normal.",
        ],
        code: "const fs = require('fs');\nconst raw = fs.readFileSync('course.json', 'utf8');",
      },
      {
        title: 'Tarjeta 2: pasar de texto a objeto',
        body: [
          '[[JSON.parse(raw)]] convierte el texto JSON en un objeto real.',
          'Despues ya puedes entrar a propiedades con punto.',
        ],
        code: 'const lesson = JSON.parse(raw);',
      },
      {
        title: 'Tarjeta 3: ver una propiedad',
        body: [
          'Si el objeto tiene `title`, la lees con `lesson.title`.',
          'Luego puedes mostrarla con consola.',
        ],
        code: 'console.log(lesson.title);',
      },
    ],
    exercises: [
      {
        id: 'node-u2-l2-c1-e1',
        title: 'Ejercicio 1: carga fs',
        instructions: [
          "Escribe exactamente `const fs = require('fs');`.",
          'Debe usar `require` y el nombre `fs`.',
        ],
        placeholder: "const fs = require('fs');",
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
        id: 'node-u2-l2-c1-e2',
        title: 'Ejercicio 2: lee course.json',
        instructions: [
          "Escribe exactamente `const raw = fs.readFileSync('course.json', 'utf8');`.",
          'Debe usar `fs.readFileSync` con ese archivo.',
        ],
        placeholder: '',
        minLength: 52,
        checks: [
          {
            kind: 'includes',
            needle: "const raw = fs.readfilesync('course.json','utf8')",
            success: 'leiste `course.json` con `fs.readFileSync`',
            error: "falta `const raw = fs.readFileSync('course.json', 'utf8');`.",
          },
        ],
      },
      {
        id: 'node-u2-l2-c2-e1',
        title: 'Ejercicio 3: parsea raw',
        instructions: [
          'Escribe exactamente `const lesson = JSON.parse(raw);`.',
          'Debe usar el nombre `lesson`.',
        ],
        placeholder: 'const lesson = JSON.parse(raw);',
        minLength: 28,
        checks: [
          {
            kind: 'includes',
            needle: 'const lesson = json.parse(raw)',
            success: 'convertiste `raw` a objeto con `JSON.parse`',
            error: 'falta `const lesson = JSON.parse(raw);`.',
          },
        ],
      },
      {
        id: 'node-u2-l2-c2-e2',
        title: 'Ejercicio 4: parsea text',
        instructions: [
          'Escribe exactamente `const config = JSON.parse(text);`.',
          'Debe usar el nombre `config`.',
        ],
        placeholder: '',
        minLength: 28,
        checks: [
          {
            kind: 'includes',
            needle: 'const config = json.parse(text)',
            success: 'convertiste `text` a objeto con `JSON.parse`',
            error: 'falta `const config = JSON.parse(text);`.',
          },
        ],
      },
      {
        id: 'node-u2-l2-c3-e1',
        title: 'Ejercicio 5: muestra lesson.title',
        instructions: [
          'Escribe exactamente `console.log(lesson.title);`.',
          'Debe leer la propiedad `title` del objeto `lesson`.',
        ],
        placeholder: 'console.log(lesson.title);',
        minLength: 24,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(lesson.title)',
            success: 'mostraste `lesson.title` en consola',
            error: 'falta `console.log(lesson.title);`.',
          },
        ],
      },
      {
        id: 'node-u2-l2-c3-e2',
        title: 'Ejercicio 6: muestra config.status',
        instructions: [
          'Escribe exactamente `console.log(config.status);`.',
          'Debe leer la propiedad `status` del objeto `config`.',
        ],
        placeholder: '',
        minLength: 26,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(config.status)',
            success: 'mostraste `config.status` en consola',
            error: 'falta `console.log(config.status);`.',
          },
        ],
      },
    ],
  },
];
