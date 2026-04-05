import type { UnitLesson } from './unit-types';

export const nodeUnitThreeLessons: UnitLesson[] = [
  {
    id: 'node-u3-l1',
    step: '1',
    title: 'Servidor HTTP basico',
    summary: 'Aprendes la forma minima de crear un servidor y cerrar una respuesta corta.',
    goal: "Entender [[require('http')]], [[http.createServer]], [[request]], [[response]] y [[response.end]].",
    content: [
      {
        title: 'Tarjeta 1: cargar http',
        body: [
          'En Node.js `http` trae las herramientas para levantar un servidor simple.',
          "Primero lo cargas con [[require('http')]].",
        ],
        code: "const http = require('http');",
      },
      {
        title: 'Tarjeta 2: createServer recibe una funcion',
        body: [
          '[[http.createServer(...)]] crea el servidor.',
          'Dentro pones una funcion con `request` y `response` para manejar cada visita.',
        ],
        code: "const server = http.createServer((request, response) => {\n  response.end('Hola Node');\n});",
      },
      {
        title: 'Tarjeta 3: listen abre el puerto',
        body: [
          '[[server.listen(3000)]] abre el puerto `3000`.',
          'Asi el servidor queda listo para escuchar conexiones.',
        ],
        code: 'server.listen(3000);',
      },
    ],
    exercises: [
      {
        id: 'node-u3-l1-c1-e1',
        title: 'Ejercicio 1: carga http',
        instructions: [
          "Escribe exactamente `const http = require('http');`.",
          'Debe usar `require` y el nombre `http`.',
        ],
        placeholder: "const http = require('http');",
        minLength: 28,
        checks: [
          {
            kind: 'oneOf',
            needles: ["const http = require('http')", 'const http = require("http")'],
            success: 'cargaste el modulo `http`',
            error: "falta `const http = require('http');`.",
          },
        ],
      },
      {
        id: 'node-u3-l1-c1-e2',
        title: 'Ejercicio 2: crea server vacio',
        instructions: [
          'Escribe exactamente `const server = http.createServer(() => {});`.',
          'Debe usar `http.createServer`.',
        ],
        placeholder: '',
        minLength: 38,
        checks: [
          {
            kind: 'includes',
            needle: 'const server = http.createserver(() => {})',
            success: 'creaste un servidor base',
            error: 'falta `const server = http.createServer(() => {});`.',
          },
        ],
      },
      {
        id: 'node-u3-l1-c2-e1',
        title: 'Ejercicio 3: responde Hola Node',
        instructions: [
          "Escribe exactamente `const server = http.createServer((request, response) => { response.end('Hola Node'); });`.",
          'Debe cerrar la respuesta con ese texto.',
        ],
        placeholder: "const server = http.createServer((request, response) => {\n  response.end('Hola Node');\n});",
        minLength: 90,
        checks: [
          {
            kind: 'includes',
            needle: 'const server = http.createserver((request,response) => {response.end(\'hola node\')})',
            success: 'creaste el servidor con respuesta `Hola Node`',
            error: "falta `const server = http.createServer((request, response) => { response.end('Hola Node'); });`.",
          },
        ],
      },
      {
        id: 'node-u3-l1-c2-e2',
        title: 'Ejercicio 4: responde ok',
        instructions: [
          "Escribe exactamente `const api = http.createServer((request, response) => { response.end('ok'); });`.",
          'Debe cerrar la respuesta con `ok`.',
        ],
        placeholder: '',
        minLength: 80,
        checks: [
          {
            kind: 'includes',
            needle: 'const api = http.createserver((request,response) => {response.end(\'ok\')})',
            success: 'creaste `api` con respuesta `ok`',
            error: "falta `const api = http.createServer((request, response) => { response.end('ok'); });`.",
          },
        ],
      },
      {
        id: 'node-u3-l1-c3-e1',
        title: 'Ejercicio 5: escucha en 3000',
        instructions: [
          'Escribe exactamente `server.listen(3000);`.',
          'Debe usar el puerto `3000`.',
        ],
        placeholder: 'server.listen(3000);',
        minLength: 18,
        checks: [
          {
            kind: 'includes',
            needle: 'server.listen(3000)',
            success: 'el servidor escucha en `3000`',
            error: 'falta `server.listen(3000);`.',
          },
        ],
      },
      {
        id: 'node-u3-l1-c3-e2',
        title: 'Ejercicio 6: escucha en 4000',
        instructions: [
          'Escribe exactamente `api.listen(4000);`.',
          'Debe usar el puerto `4000`.',
        ],
        placeholder: '',
        minLength: 16,
        checks: [
          {
            kind: 'includes',
            needle: 'api.listen(4000)',
            success: 'la API escucha en `4000`',
            error: 'falta `api.listen(4000);`.',
          },
        ],
      },
    ],
  },
  {
    id: 'node-u3-l2',
    step: '2',
    title: 'Rutas con request.url',
    summary: 'Cierras el curso con una decision simple para devolver una respuesta distinta segun la ruta.',
    goal: 'Entender [[request.url]], [[if]], [[===]], [[return]] y varias respuestas.',
    content: [
      {
        title: 'Tarjeta 1: leer la ruta',
        body: [
          'En cada visita, [[request.url]] trae la ruta pedida.',
          'Por ejemplo puede valer `/health` o `/`.',
        ],
        code: 'if (request.url === \'/health\') {\n  response.end(\'ok\');\n}',
      },
      {
        title: 'Tarjeta 2: cortar con return',
        body: [
          'Despues de responder una ruta concreta, [[return]] corta esa rama.',
          'Asi evitas seguir ejecutando el resto del bloque.',
        ],
        code: "if (request.url === '/health') {\n  response.end('ok');\n  return;\n}",
      },
      {
        title: 'Tarjeta 3: ruta por defecto',
        body: [
          'Si no entra a la ruta especial, puedes devolver otro texto al final.',
          'Esa ultima linea funciona como respuesta por defecto.',
        ],
        code: "response.end('home');",
      },
    ],
    exercises: [
      {
        id: 'node-u3-l2-c1-e1',
        title: 'Ejercicio 1: compara request.url',
        instructions: [
          "Escribe exactamente `if (request.url === '/health') { response.end('ok'); }`.",
          'Debe comparar con `/health`.',
        ],
        placeholder: "if (request.url === '/health') {\n  response.end('ok');\n}",
        minLength: 54,
        checks: [
          {
            kind: 'includes',
            needle: 'if (request.url === \'/health\') {response.end(\'ok\')}',
            success: 'comparaste `request.url` con `/health`',
            error: "falta `if (request.url === '/health') { response.end('ok'); }`.",
          },
        ],
      },
      {
        id: 'node-u3-l2-c1-e2',
        title: 'Ejercicio 2: compara la raiz',
        instructions: [
          "Escribe exactamente `if (request.url === '/') { response.end('home'); }`.",
          'Debe comparar con `/`.',
        ],
        placeholder: '',
        minLength: 48,
        checks: [
          {
            kind: 'includes',
            needle: 'if (request.url === \'/\') {response.end(\'home\')}',
            success: 'comparaste `request.url` con `/`',
            error: "falta `if (request.url === '/') { response.end('home'); }`.",
          },
        ],
      },
      {
        id: 'node-u3-l2-c2-e1',
        title: 'Ejercicio 3: agrega return',
        instructions: [
          "Escribe exactamente `if (request.url === '/health') { response.end('ok'); return; }`.",
          'Debe cerrar con `return;` despues de responder.',
        ],
        placeholder: "if (request.url === '/health') {\n  response.end('ok');\n  return;\n}",
        minLength: 64,
        checks: [
          {
            kind: 'includes',
            needle: 'if (request.url === \'/health\') {response.end(\'ok\');return}',
            success: 'agregaste `return` a la ruta `/health`',
            error: "falta `if (request.url === '/health') { response.end('ok'); return; }`.",
          },
        ],
      },
      {
        id: 'node-u3-l2-c2-e2',
        title: 'Ejercicio 4: agrega return a /api',
        instructions: [
          "Escribe exactamente `if (request.url === '/api') { response.end('api'); return; }`.",
          'Debe cerrar con `return;` despues de responder.',
        ],
        placeholder: '',
        minLength: 58,
        checks: [
          {
            kind: 'includes',
            needle: 'if (request.url === \'/api\') {response.end(\'api\');return}',
            success: 'agregaste `return` a la ruta `/api`',
            error: "falta `if (request.url === '/api') { response.end('api'); return; }`.",
          },
        ],
      },
      {
        id: 'node-u3-l2-c3-e1',
        title: 'Ejercicio 5: respuesta por defecto',
        instructions: [
          "Escribe exactamente `response.end('home');`.",
          'Debe quedar como respuesta por defecto.',
        ],
        placeholder: "response.end('home');",
        minLength: 18,
        checks: [
          {
            kind: 'oneOf',
            needles: ["response.end('home')", 'response.end("home")'],
            success: 'escribiste la respuesta por defecto `home`',
            error: "falta `response.end('home');`.",
          },
        ],
      },
      {
        id: 'node-u3-l2-c3-e2',
        title: 'Ejercicio 6: respuesta por defecto api',
        instructions: [
          "Escribe exactamente `response.end('api home');`.",
          'Debe quedar como respuesta por defecto.',
        ],
        placeholder: '',
        minLength: 22,
        checks: [
          {
            kind: 'oneOf',
            needles: ["response.end('api home')", 'response.end("api home")'],
            success: 'escribiste la respuesta por defecto `api home`',
            error: "falta `response.end('api home');`.",
          },
        ],
      },
    ],
  },
];
