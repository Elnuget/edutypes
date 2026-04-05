import type { UnitLesson } from './unit-types';

export const reactUnitOneLessons: UnitLesson[] = [
  {
    id: 'react-u1-l1',
    step: '1',
    title: 'JSX y tu primer componente',
    summary: 'Empiezas con etiquetas, retorno visual y una funcion que devuelve una pantalla corta.',
    goal: 'Entender [[JSX]], [[< >]], [[</ >]], [[function]] y [[return]].',
    content: [
      {
        title: 'Tarjeta 1: JSX como estructura visual',
        body: [
          '[[JSX]] parece HTML, pero vive dentro de JavaScript. `<h1>` abre la etiqueta y `</h1>` la cierra.',
          'Lo que va en medio es el texto que React mostrara en pantalla.',
        ],
        code: '<h1>Hola React</h1>',
      },
      {
        title: 'Tarjeta 2: un componente es una funcion',
        body: [
          'Una funcion componente devuelve JSX. [[function]] crea la pieza y [[return]] entrega lo que React debe pintar.',
          'Si la funcion se llama `Welcome`, luego puedes usarla como una etiqueta propia.',
        ],
        code: "function Welcome() {\n  return <h1>Hola React</h1>;\n}",
      },
      {
        title: 'Tarjeta 3: usar el componente como etiqueta',
        body: [
          'Cuando escribes [[<Welcome />]], React crea una instancia de ese componente.',
          'La barra antes de `>` cierra una etiqueta corta que no lleva contenido interno.',
        ],
        code: 'const screen = <Welcome />;',
      },
    ],
    exercises: [
      {
        id: 'react-u1-l1-c1-e1',
        title: 'Ejercicio 1: escribe un titulo JSX',
        instructions: [
          'Escribe exactamente [[<h1>Hola React</h1>]].',
          'Debe ser una sola etiqueta completa con apertura y cierre.',
        ],
        placeholder: '<h1>Hola React</h1>',
        minLength: 20,
        checks: [
          {
            kind: 'includes',
            needle: '<h1>hola react</h1>',
            success: 'escribiste el titulo JSX completo',
            error: 'falta `<h1>Hola React</h1>`.',
          },
        ],
      },
      {
        id: 'react-u1-l1-c1-e2',
        title: 'Ejercicio 2: escribe un boton JSX',
        instructions: [
          'Escribe exactamente [[<button>Abrir</button>]].',
          'Debe tener apertura, texto y cierre.',
        ],
        placeholder: '',
        minLength: 22,
        checks: [
          {
            kind: 'includes',
            needle: '<button>abrir</button>',
            success: 'escribiste el boton JSX completo',
            error: 'falta `<button>Abrir</button>`.',
          },
        ],
      },
      {
        id: 'react-u1-l1-c2-e1',
        title: 'Ejercicio 3: crea Welcome',
        instructions: [
          'Escribe la funcion `Welcome`.',
          'Dentro debe devolver `return <h1>Hola React</h1>;`.',
        ],
        placeholder: "function Welcome() {\n  return <h1>Hola React</h1>;\n}",
        minLength: 48,
        checks: [
          {
            kind: 'includes',
            needle: 'function welcome()',
            success: 'creaste la funcion `Welcome`',
            error: 'falta `function Welcome() { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'return <h1>hola react</h1>',
            success: 'el componente devuelve el titulo JSX',
            error: 'falta `return <h1>Hola React</h1>;`.',
          },
        ],
      },
      {
        id: 'react-u1-l1-c2-e2',
        title: 'Ejercicio 4: crea LessonTitle',
        instructions: [
          'Escribe la funcion `LessonTitle`.',
          'Dentro debe devolver `return <h2>Modulo 1</h2>;`.',
        ],
        placeholder: '',
        minLength: 48,
        checks: [
          {
            kind: 'includes',
            needle: 'function lessontitle()',
            success: 'creaste la funcion `LessonTitle`',
            error: 'falta `function LessonTitle() { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'return <h2>modulo 1</h2>',
            success: 'el componente devuelve el subtitulo correcto',
            error: 'falta `return <h2>Modulo 1</h2>;`.',
          },
        ],
      },
      {
        id: 'react-u1-l1-c3-e1',
        title: 'Ejercicio 5: usa Welcome',
        instructions: [
          'Escribe exactamente `const screen = <Welcome />;`.',
          'Usa el nombre `screen` para guardar ese elemento.',
        ],
        placeholder: 'const screen = <Welcome />;',
        minLength: 24,
        checks: [
          {
            kind: 'includes',
            needle: 'const screen = <welcome/>',
            success: 'guardaste `<Welcome />` en `screen`',
            error: 'falta `const screen = <Welcome />;`.',
          },
        ],
      },
      {
        id: 'react-u1-l1-c3-e2',
        title: 'Ejercicio 6: usa LessonTitle',
        instructions: [
          'Escribe exactamente `const card = <LessonTitle />;`.',
          'Usa el nombre `card` para guardar ese elemento.',
        ],
        placeholder: '',
        minLength: 28,
        checks: [
          {
            kind: 'includes',
            needle: 'const card = <lessontitle/>',
            success: 'guardaste `<LessonTitle />` en `card`',
            error: 'falta `const card = <LessonTitle />;`.',
          },
        ],
      },
    ],
  },
  {
    id: 'react-u1-l2',
    step: '2',
    title: 'Fragmentos y composicion corta',
    summary: 'Aprendes a devolver varias etiquetas juntas y a meter un componente dentro de otro.',
    goal: 'Entender [[<>...</>]], [[<main>]], [[<Welcome />]] y composicion simple.',
    content: [
      {
        title: 'Tarjeta 1: dos etiquetas necesitan un contenedor',
        body: [
          'Un componente no puede devolver dos etiquetas hermanas sueltas. Necesitas un contenedor.',
          'El fragmento [[<>...</>]] agrupa sin agregar una etiqueta visible extra.',
        ],
        code: 'function Page() {\n  return (\n    <>\n      <h1>Inicio</h1>\n      <p>Bloque corto</p>\n    </>\n  );\n}',
      },
      {
        title: 'Tarjeta 2: componer es meter piezas juntas',
        body: [
          'Puedes usar un componente dentro de otro. Asi una pantalla grande sale de piezas pequenas.',
          'En React una etiqueta con mayuscula como [[<Welcome />]] apunta a un componente tuyo.',
        ],
        code: 'function App() {\n  return <main><Welcome /></main>;\n}',
      },
      {
        title: 'Tarjeta 3: el orden del JSX importa',
        body: [
          'Lo que pongas arriba sale arriba. Lo que pongas abajo sale abajo.',
          'Por eso un `<h1>` puede ir antes de un `<p>` dentro del mismo bloque.',
        ],
        code: 'const layout = <main><h1>Inicio</h1><p>Bloque corto</p></main>;',
      },
    ],
    exercises: [
      {
        id: 'react-u1-l2-c1-e1',
        title: 'Ejercicio 1: agrupa dos etiquetas',
        instructions: [
          'Escribe un fragmento con `<>` y `</>`.',
          'Dentro debe ir `<h1>Inicio</h1>` y debajo `<p>Bloque corto</p>`.',
        ],
        placeholder: "<>\n  <h1>Inicio</h1>\n  <p>Bloque corto</p>\n</>",
        minLength: 44,
        checks: [
          {
            kind: 'includes',
            needle: '<><h1>inicio</h1><p>bloque corto</p></>',
            success: 'agrupaste las dos etiquetas en un fragmento',
            error: 'falta el fragmento `<> ... </>` con el `h1` y el `p`.',
          },
        ],
      },
      {
        id: 'react-u1-l2-c1-e2',
        title: 'Ejercicio 2: crea otro fragmento',
        instructions: [
          'Escribe un fragmento con `<h2>React</h2>` y debajo `<small>Lista</small>`.',
          'Debe abrir con `<>` y cerrar con `</>`.',
        ],
        placeholder: '',
        minLength: 36,
        checks: [
          {
            kind: 'includes',
            needle: '<><h2>react</h2><small>lista</small></>',
            success: 'escribiste el segundo fragmento completo',
            error: 'falta el fragmento con `<h2>React</h2>` y `<small>Lista</small>`.',
          },
        ],
      },
      {
        id: 'react-u1-l2-c2-e1',
        title: 'Ejercicio 3: crea App con Welcome',
        instructions: [
          'Escribe la funcion `App`.',
          'Debe devolver `return <main><Welcome /></main>;`.',
        ],
        placeholder: "function App() {\n  return <main><Welcome /></main>;\n}",
        minLength: 44,
        checks: [
          {
            kind: 'includes',
            needle: 'function app()',
            success: 'creaste la funcion `App`',
            error: 'falta `function App() { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'return <main><welcome/></main>',
            success: 'App compone `Welcome` dentro de `main`',
            error: 'falta `return <main><Welcome /></main>;`.',
          },
        ],
      },
      {
        id: 'react-u1-l2-c2-e2',
        title: 'Ejercicio 4: crea Screen con LessonTitle',
        instructions: [
          'Escribe la funcion `Screen`.',
          'Debe devolver `return <section><LessonTitle /></section>;`.',
        ],
        placeholder: '',
        minLength: 50,
        checks: [
          {
            kind: 'includes',
            needle: 'function screen()',
            success: 'creaste la funcion `Screen`',
            error: 'falta `function Screen() { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'return <section><lessontitle/></section>',
            success: 'Screen compone `LessonTitle` dentro de `section`',
            error: 'falta `return <section><LessonTitle /></section>;`.',
          },
        ],
      },
      {
        id: 'react-u1-l2-c3-e1',
        title: 'Ejercicio 5: crea layout',
        instructions: [
          'Escribe exactamente `const layout = <main><h1>Inicio</h1><p>Bloque corto</p></main>;`.',
          'No dejes las etiquetas separadas fuera de `main`.',
        ],
        placeholder: 'const layout = <main><h1>Inicio</h1><p>Bloque corto</p></main>;',
        minLength: 58,
        checks: [
          {
            kind: 'includes',
            needle: 'const layout = <main><h1>inicio</h1><p>bloque corto</p></main>',
            success: 'guardaste el layout completo',
            error: 'falta `const layout = <main><h1>Inicio</h1><p>Bloque corto</p></main>;`.',
          },
        ],
      },
      {
        id: 'react-u1-l2-c3-e2',
        title: 'Ejercicio 6: crea panel',
        instructions: [
          'Escribe exactamente `const panel = <section><h2>React</h2><small>Lista</small></section>;`.',
          'Debe quedar todo dentro de `section`.',
        ],
        placeholder: '',
        minLength: 62,
        checks: [
          {
            kind: 'includes',
            needle: 'const panel = <section><h2>react</h2><small>lista</small></section>',
            success: 'guardaste el panel completo',
            error: 'falta `const panel = <section><h2>React</h2><small>Lista</small></section>;`.',
          },
        ],
      },
    ],
  },
];
