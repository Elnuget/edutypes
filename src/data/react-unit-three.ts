import type { UnitLesson } from './unit-types';

export const reactUnitThreeLessons: UnitLesson[] = [
  {
    id: 'react-u3-l1',
    step: '1',
    title: 'Estado con useState',
    summary: 'Aprendes a guardar un valor que React puede volver a pintar cuando cambia.',
    goal: 'Entender [[React.useState]], [[count]], [[setCount]] y [[count + 1]].',
    content: [
      {
        title: 'Tarjeta 1: useState devuelve dos piezas',
        body: [
          '[[React.useState(0)]] crea estado inicial en `0`.',
          'A la izquierda salen dos nombres: el valor actual y la funcion que lo cambia.',
        ],
        code: 'const [count, setCount] = React.useState(0);',
      },
      {
        title: 'Tarjeta 2: cambiar el valor',
        body: [
          'Si quieres subir uno, usas [[setCount(count + 1)]].',
          'Primero lees `count`. Luego sumas `1`. Al final envias el nuevo valor.',
        ],
        code: 'function handleIncrement() {\n  setCount(count + 1);\n}',
      },
      {
        title: 'Tarjeta 3: mostrar el estado',
        body: [
          'El valor se puede mostrar dentro del JSX con llaves.',
          'Por ejemplo un boton puede enseñar el numero actual con `{count}`.',
        ],
        code: 'return <button onClick={handleIncrement}>{count}</button>;',
      },
    ],
    exercises: [
      {
        id: 'react-u3-l1-c1-e1',
        title: 'Ejercicio 1: crea el estado count',
        instructions: [
          'Escribe exactamente `const [count, setCount] = React.useState(0);`.',
          'Debe usar esos dos nombres en ese orden.',
        ],
        placeholder: 'const [count, setCount] = React.useState(0);',
        minLength: 42,
        checks: [
          {
            kind: 'includes',
            needle: 'const [count,setcount] = react.usestate(0)',
            success: 'creaste el estado `count` con `setCount`',
            error: 'falta `const [count, setCount] = React.useState(0);`.',
          },
        ],
      },
      {
        id: 'react-u3-l1-c1-e2',
        title: 'Ejercicio 2: crea otro estado',
        instructions: [
          'Escribe exactamente `const [open, setOpen] = React.useState(false);`.',
          'Debe usar esos dos nombres en ese orden.',
        ],
        placeholder: '',
        minLength: 44,
        checks: [
          {
            kind: 'includes',
            needle: 'const [open,setopen] = react.usestate(false)',
            success: 'creaste el estado `open` con `setOpen`',
            error: 'falta `const [open, setOpen] = React.useState(false);`.',
          },
        ],
      },
      {
        id: 'react-u3-l1-c2-e1',
        title: 'Ejercicio 3: crea handleIncrement',
        instructions: [
          'Escribe la funcion `handleIncrement`.',
          'Dentro debe tener `setCount(count + 1);`.',
        ],
        placeholder: "function handleIncrement() {\n  setCount(count + 1);\n}",
        minLength: 50,
        checks: [
          {
            kind: 'includes',
            needle: 'function handleincrement()',
            success: 'creaste la funcion `handleIncrement`',
            error: 'falta `function handleIncrement() { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'setcount(count+1)',
            success: 'la funcion incrementa el estado',
            error: 'falta `setCount(count + 1);`.',
          },
        ],
      },
      {
        id: 'react-u3-l1-c2-e2',
        title: 'Ejercicio 4: crea handleOpen',
        instructions: [
          'Escribe la funcion `handleOpen`.',
          'Dentro debe tener `setOpen(true);`.',
        ],
        placeholder: '',
        minLength: 38,
        checks: [
          {
            kind: 'includes',
            needle: 'function handleopen()',
            success: 'creaste la funcion `handleOpen`',
            error: 'falta `function handleOpen() { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'setopen(true)',
            success: 'la funcion cambia el estado a `true`',
            error: 'falta `setOpen(true);`.',
          },
        ],
      },
      {
        id: 'react-u3-l1-c3-e1',
        title: 'Ejercicio 5: muestra count en un boton',
        instructions: [
          'Escribe exactamente `return <button onClick={handleIncrement}>{count}</button>;`.',
          'Debe mostrar `count` dentro del boton.',
        ],
        placeholder: 'return <button onClick={handleIncrement}>{count}</button>;',
        minLength: 54,
        checks: [
          {
            kind: 'includes',
            needle: 'return <button onclick={handleincrement}>{count}</button>',
            success: 'el boton muestra `count` y usa `handleIncrement`',
            error: 'falta `return <button onClick={handleIncrement}>{count}</button>;`.',
          },
        ],
      },
      {
        id: 'react-u3-l1-c3-e2',
        title: 'Ejercicio 6: muestra open en un span',
        instructions: [
          'Escribe exactamente `return <span>{open}</span>;`.',
          'El valor `open` debe ir entre llaves.',
        ],
        placeholder: '',
        minLength: 24,
        checks: [
          {
            kind: 'includes',
            needle: 'return <span>{open}</span>',
            success: 'mostraste `open` dentro del JSX',
            error: 'falta `return <span>{open}</span>;`.',
          },
        ],
      },
    ],
  },
  {
    id: 'react-u3-l2',
    step: '2',
    title: 'Listas con map y key',
    summary: 'Cierras el curso leyendo arrays y convirtiendo cada dato en una etiqueta React.',
    goal: 'Entender [[map]], [[key]], [[topic]] y [[<li>]].',
    content: [
      {
        title: 'Tarjeta 1: un array de datos',
        body: [
          'Primero guardas la lista. Cada texto queda dentro de corchetes `[ ]`.',
          'Luego React puede recorrer esa lista para pintar varias etiquetas.',
        ],
        code: "const topics = ['jsx', 'props', 'state'];",
      },
      {
        title: 'Tarjeta 2: map crea una etiqueta por elemento',
        body: [
          '[[topics.map(...)]] recorre cada entrada del array.',
          'Si usas `topic`, ese nombre representa un valor por vuelta.',
        ],
        code: 'const items = topics.map((topic) => <li key={topic}>{topic}</li>);',
      },
      {
        title: 'Tarjeta 3: envolver la lista en ul',
        body: [
          'El resultado de `map` suele ir dentro de `<ul>...</ul>`.',
          'La prop [[key]] ayuda a React a reconocer cada elemento de la lista.',
        ],
        code: 'return <ul>{topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>;',
      },
    ],
    exercises: [
      {
        id: 'react-u3-l2-c1-e1',
        title: 'Ejercicio 1: crea topics',
        instructions: [
          "Escribe exactamente `const topics = ['jsx', 'props', 'state'];`.",
          'La lista debe tener esos tres textos.',
        ],
        placeholder: "const topics = ['jsx', 'props', 'state'];",
        minLength: 38,
        checks: [
          {
            kind: 'includes',
            needle: "const topics = ['jsx','props','state']",
            success: 'creaste el array `topics`',
            error: "falta `const topics = ['jsx', 'props', 'state'];`.",
          },
        ],
      },
      {
        id: 'react-u3-l2-c1-e2',
        title: 'Ejercicio 2: crea labels',
        instructions: [
          "Escribe exactamente `const labels = ['inicio', 'lista'];`.",
          'La lista debe tener esos dos textos.',
        ],
        placeholder: '',
        minLength: 34,
        checks: [
          {
            kind: 'includes',
            needle: "const labels = ['inicio','lista']",
            success: 'creaste el array `labels`',
            error: "falta `const labels = ['inicio', 'lista'];`.",
          },
        ],
      },
      {
        id: 'react-u3-l2-c2-e1',
        title: 'Ejercicio 3: crea items con map',
        instructions: [
          'Escribe exactamente `const items = topics.map((topic) => <li key={topic}>{topic}</li>);`.',
          'Debe usar `topic` como `key` y como texto visible.',
        ],
        placeholder: 'const items = topics.map((topic) => <li key={topic}>{topic}</li>);',
        minLength: 66,
        checks: [
          {
            kind: 'includes',
            needle: 'const items = topics.map((topic) => <li key={topic}>{topic}</li>)',
            success: 'creaste `items` con `map` y `key`',
            error: 'falta `const items = topics.map((topic) => <li key={topic}>{topic}</li>);`.',
          },
        ],
      },
      {
        id: 'react-u3-l2-c2-e2',
        title: 'Ejercicio 4: crea labelsView con map',
        instructions: [
          'Escribe exactamente `const labelsView = labels.map((label) => <span key={label}>{label}</span>);`.',
          'Debe usar `label` como `key` y como texto visible.',
        ],
        placeholder: '',
        minLength: 78,
        checks: [
          {
            kind: 'includes',
            needle: 'const labelsview = labels.map((label) => <span key={label}>{label}</span>)',
            success: 'creaste `labelsView` con `map` y `key`',
            error: 'falta `const labelsView = labels.map((label) => <span key={label}>{label}</span>);`.',
          },
        ],
      },
      {
        id: 'react-u3-l2-c3-e1',
        title: 'Ejercicio 5: devuelve la lista completa',
        instructions: [
          'Escribe exactamente `return <ul>{topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>;`.',
          'Debe envolver el `map` dentro de `ul`.',
        ],
        placeholder: 'return <ul>{topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>;',
        minLength: 72,
        checks: [
          {
            kind: 'includes',
            needle: 'return <ul>{topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>',
            success: 'devolviste la lista completa dentro de `ul`',
            error: 'falta `return <ul>{topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>;`.',
          },
        ],
      },
      {
        id: 'react-u3-l2-c3-e2',
        title: 'Ejercicio 6: devuelve labelsView dentro de section',
        instructions: [
          'Escribe exactamente `return <section>{labelsView}</section>;`.',
          'Debe mostrar `labelsView` dentro de `section`.',
        ],
        placeholder: '',
        minLength: 34,
        checks: [
          {
            kind: 'includes',
            needle: 'return <section>{labelsview}</section>',
            success: 'mostraste `labelsView` dentro de `section`',
            error: 'falta `return <section>{labelsView}</section>;`.',
          },
        ],
      },
    ],
  },
];
