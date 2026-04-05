import type { UnitLesson } from './unit-types';

export const reactUnitTwoLessons: UnitLesson[] = [
  {
    id: 'react-u2-l1',
    step: '1',
    title: 'Props y lectura con punto',
    summary: 'Aprendes a pasar datos de un componente padre a un componente hijo usando props.',
    goal: 'Entender [[props]], [[props.title]], [[{ }]] dentro de JSX y [[<Card title="..."/>]].',
    content: [
      {
        title: 'Tarjeta 1: props es el dato que entra',
        body: [
          'El parametro `props` guarda los datos que llegan al componente.',
          'Si entra `title`, lo lees como [[props.title]].',
        ],
        code: 'function LessonCard(props) {\n  return <h2>{props.title}</h2>;\n}',
      },
      {
        title: 'Tarjeta 2: llaves dentro de JSX',
        body: [
          'Las llaves [[{ }]] abren JavaScript dentro del JSX.',
          'Por eso `{props.title}` mete el valor real en la etiqueta.',
        ],
        code: 'function LessonTag(props) {\n  return <span>{props.label}</span>;\n}',
      },
      {
        title: 'Tarjeta 3: pasar props al usar el componente',
        body: [
          'En la etiqueta del componente escribes `title="React"` o `label="Nuevo"`.',
          'Eso crea props con esos nombres para la funcion.',
        ],
        code: 'const card = <LessonCard title="React" />;\nconst badge = <LessonTag label="Nuevo" />;',
      },
    ],
    exercises: [
      {
        id: 'react-u2-l1-c1-e1',
        title: 'Ejercicio 1: componente con props.title',
        instructions: [
          'Escribe la funcion `LessonCard(props)`.',
          'Debe devolver `return <h2>{props.title}</h2>;`.',
        ],
        placeholder: "function LessonCard(props) {\n  return <h2>{props.title}</h2>;\n}",
        minLength: 56,
        checks: [
          {
            kind: 'includes',
            needle: 'function lessoncard(props)',
            success: 'creaste `LessonCard` con `props`',
            error: 'falta `function LessonCard(props) { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'return <h2>{props.title}</h2>',
            success: 'usas `props.title` dentro del JSX',
            error: 'falta `return <h2>{props.title}</h2>;`.',
          },
        ],
      },
      {
        id: 'react-u2-l1-c1-e2',
        title: 'Ejercicio 2: componente con props.label',
        instructions: [
          'Escribe la funcion `LessonTag(props)`.',
          'Debe devolver `return <span>{props.label}</span>;`.',
        ],
        placeholder: '',
        minLength: 56,
        checks: [
          {
            kind: 'includes',
            needle: 'function lessontag(props)',
            success: 'creaste `LessonTag` con `props`',
            error: 'falta `function LessonTag(props) { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'return <span>{props.label}</span>',
            success: 'usas `props.label` dentro del JSX',
            error: 'falta `return <span>{props.label}</span>;`.',
          },
        ],
      },
      {
        id: 'react-u2-l1-c2-e1',
        title: 'Ejercicio 3: usa llaves con title',
        instructions: [
          'Escribe exactamente `return <h3>{props.title}</h3>;`.',
          'La palabra `props.title` debe ir entre llaves.',
        ],
        placeholder: 'return <h3>{props.title}</h3>;',
        minLength: 28,
        checks: [
          {
            kind: 'includes',
            needle: 'return <h3>{props.title}</h3>',
            success: 'pusiste `props.title` entre llaves',
            error: 'falta `return <h3>{props.title}</h3>;`.',
          },
        ],
      },
      {
        id: 'react-u2-l1-c2-e2',
        title: 'Ejercicio 4: usa llaves con label',
        instructions: [
          'Escribe exactamente `return <small>{props.label}</small>;`.',
          'La palabra `props.label` debe ir entre llaves.',
        ],
        placeholder: '',
        minLength: 34,
        checks: [
          {
            kind: 'includes',
            needle: 'return <small>{props.label}</small>',
            success: 'pusiste `props.label` entre llaves',
            error: 'falta `return <small>{props.label}</small>;`.',
          },
        ],
      },
      {
        id: 'react-u2-l1-c3-e1',
        title: 'Ejercicio 5: pasa title',
        instructions: [
          'Escribe exactamente `const card = <LessonCard title="React" />;`.',
          'La prop debe llamarse `title`.',
        ],
        placeholder: 'const card = <LessonCard title="React" />;',
        minLength: 40,
        checks: [
          {
            kind: 'includes',
            needle: 'const card = <lessoncard title="react"/>',
            success: 'pasaste la prop `title` a `LessonCard`',
            error: 'falta `const card = <LessonCard title="React" />;`.',
          },
        ],
      },
      {
        id: 'react-u2-l1-c3-e2',
        title: 'Ejercicio 6: pasa label',
        instructions: [
          'Escribe exactamente `const badge = <LessonTag label="Nuevo" />;`.',
          'La prop debe llamarse `label`.',
        ],
        placeholder: '',
        minLength: 42,
        checks: [
          {
            kind: 'includes',
            needle: 'const badge = <lessontag label="nuevo"/>',
            success: 'pasaste la prop `label` a `LessonTag`',
            error: 'falta `const badge = <LessonTag label="Nuevo" />;`.',
          },
        ],
      },
    ],
  },
  {
    id: 'react-u2-l2',
    step: '2',
    title: 'Props con destructuring y eventos',
    summary: 'Ahora lees props desde la firma y conectas una funcion a un boton.',
    goal: 'Entender [[{ title }]], [[onClick]], [[handleOpen]] y referencia de funcion.',
    content: [
      {
        title: 'Tarjeta 1: destructuring en la firma',
        body: [
          'En vez de `props`, puedes abrir solo la propiedad que necesitas.',
          '[[function Header({ title })]] extrae `title` desde el inicio.',
        ],
        code: 'function Header({ title }) {\n  return <h1>{title}</h1>;\n}',
      },
      {
        title: 'Tarjeta 2: una funcion para el click',
        body: [
          'Primero creas la funcion, por ejemplo `handleOpen`.',
          'Luego la pasas al boton con [[onClick={handleOpen}]].',
        ],
        code: "function handleOpen() {\n  console.log('abrir');\n}\n\nconst button = <button onClick={handleOpen}>Abrir</button>;",
      },
      {
        title: 'Tarjeta 3: prop y evento juntos',
        body: [
          'Un mismo componente puede leer props y ademas usar un evento.',
          'Asi una tarjeta puede mostrar texto y reaccionar a una accion del usuario.',
        ],
        code: 'function ActionCard({ title }) {\n  return <button onClick={handleOpen}>{title}</button>;\n}',
      },
    ],
    exercises: [
      {
        id: 'react-u2-l2-c1-e1',
        title: 'Ejercicio 1: Header con destructuring',
        instructions: [
          'Escribe la funcion `Header({ title })`.',
          'Debe devolver `return <h1>{title}</h1>;`.',
        ],
        placeholder: "function Header({ title }) {\n  return <h1>{title}</h1>;\n}",
        minLength: 50,
        checks: [
          {
            kind: 'includes',
            needle: 'function header({title})',
            success: 'usaste destructuring con `title`',
            error: 'falta `function Header({ title }) { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'return <h1>{title}</h1>',
            success: 'Header muestra `title` dentro del JSX',
            error: 'falta `return <h1>{title}</h1>;`.',
          },
        ],
      },
      {
        id: 'react-u2-l2-c1-e2',
        title: 'Ejercicio 2: Badge con destructuring',
        instructions: [
          'Escribe la funcion `Badge({ label })`.',
          'Debe devolver `return <span>{label}</span>;`.',
        ],
        placeholder: '',
        minLength: 50,
        checks: [
          {
            kind: 'includes',
            needle: 'function badge({label})',
            success: 'usaste destructuring con `label`',
            error: 'falta `function Badge({ label }) { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'return <span>{label}</span>',
            success: 'Badge muestra `label` dentro del JSX',
            error: 'falta `return <span>{label}</span>;`.',
          },
        ],
      },
      {
        id: 'react-u2-l2-c2-e1',
        title: 'Ejercicio 3: crea handleOpen',
        instructions: [
          'Escribe la funcion `handleOpen`.',
          "Dentro debe tener `console.log('abrir');`.",
        ],
        placeholder: "function handleOpen() {\n  console.log('abrir');\n}",
        minLength: 42,
        checks: [
          {
            kind: 'includes',
            needle: 'function handleopen()',
            success: 'creaste la funcion `handleOpen`',
            error: 'falta `function handleOpen() { ... }`.',
          },
          {
            kind: 'oneOf',
            needles: ["console.log('abrir')", 'console.log("abrir")'],
            success: 'la funcion muestra `abrir` en consola',
            error: "falta `console.log('abrir');`.",
          },
        ],
      },
      {
        id: 'react-u2-l2-c2-e2',
        title: 'Ejercicio 4: boton con onClick',
        instructions: [
          'Escribe exactamente `const button = <button onClick={handleOpen}>Abrir</button>;`.',
          'No llames la funcion. Solo pasala como referencia.',
        ],
        placeholder: '',
        minLength: 58,
        checks: [
          {
            kind: 'includes',
            needle: 'const button = <button onclick={handleopen}>abrir</button>',
            success: 'pasaste `handleOpen` al evento `onClick`',
            error: 'falta `const button = <button onClick={handleOpen}>Abrir</button>;`.',
          },
        ],
      },
      {
        id: 'react-u2-l2-c3-e1',
        title: 'Ejercicio 5: ActionCard completa',
        instructions: [
          'Escribe la funcion `ActionCard({ title })`.',
          'Debe devolver `return <button onClick={handleOpen}>{title}</button>;`.',
        ],
        placeholder: "function ActionCard({ title }) {\n  return <button onClick={handleOpen}>{title}</button>;\n}",
        minLength: 84,
        checks: [
          {
            kind: 'includes',
            needle: 'function actioncard({title})',
            success: 'creaste `ActionCard` con destructuring',
            error: 'falta `function ActionCard({ title }) { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'return <button onclick={handleopen}>{title}</button>',
            success: 'ActionCard usa `title` y `handleOpen`',
            error: 'falta `return <button onClick={handleOpen}>{title}</button>;`.',
          },
        ],
      },
      {
        id: 'react-u2-l2-c3-e2',
        title: 'Ejercicio 6: usa Header con title',
        instructions: [
          'Escribe exactamente `const screen = <Header title="React" />;`.',
          'La prop debe llamarse `title`.',
        ],
        placeholder: '',
        minLength: 40,
        checks: [
          {
            kind: 'includes',
            needle: 'const screen = <header title="react"/>',
            success: 'usaste `Header` con la prop `title`',
            error: 'falta `const screen = <Header title="React" />;`.',
          },
        ],
      },
    ],
  },
];
