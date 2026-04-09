import type { UnitLesson } from './unit-types';

export const integersUnitThreeLessons: UnitLesson[] = [
  {
    id: 'ne-u3-l1',
    step: '1',
    title: 'Suma y resta con signos de agrupacion',
    summary: 'Aprendes a quitar parentesis, corchetes o llaves sin perder el signo correcto.',
    goal: 'Entender que un [[+]] delante conserva el signo interior y un [[-]] delante lo cambia.',
    content: [
      {
        title: 'Tarjeta 1: si adelante hay +, el signo se queda',
        body: [
          'En `(-8) + (-3)`, los signos de agrupacion estan precedidos por positivo. Por eso el signo interior se conserva.',
          'Eso deja `-8 -3`, y el resultado final es `-11`.',
        ],
        code: '(-8) + (-3) = -8 - 3 = -11',
      },
      {
        title: 'Tarjeta 2: si adelante hay -, el signo cambia',
        body: [
          'En `-(14) - (-10)`, el signo negativo de afuera cambia el signo del numero interior.',
          'Por eso `-(14)` queda `-14` y `-(-10)` queda `+10`.',
        ],
        code: '-(14) - (-10) = -14 + 10 = -4',
      },
      {
        title: 'Tarjeta 3: primero simplifica, luego calcula',
        body: [
          'Cuando hay varios parentesis, primero simplificas cada grupo y luego haces la cuenta completa.',
          'El libro insiste en eso porque evita cambiar signos por accidente.',
        ],
        code: '(6 - 8) + (5 - 2) = -2 + 3 = 1',
      },
    ],
    exercises: [
      {
        id: 'ne-u3-c1-e1',
        title: 'Ejercicio 1: parentesis con signos negativos',
        instructions: [
          'Escribe solo el resultado final de `(-8) + (-3)`.',
          'El signo de dentro se conserva porque delante hay positivo.',
        ],
        placeholder: '-11',
        minLength: 3,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -11 },
      },
      {
        id: 'ne-u3-c1-e2',
        title: 'Ejercicio 2: positivo y negativo agrupados',
        instructions: [
          'Escribe solo el resultado final de `(+6) + (-8)`.',
          'No olvides comparar el valor absoluto final.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -2 },
      },
      {
        id: 'ne-u3-c2-e1',
        title: 'Ejercicio 3: signo exterior negativo',
        instructions: [
          'Escribe solo el resultado final de `-(14) - (-10)`.',
          'El signo negativo de afuera cambia el signo del numero que encierra.',
        ],
        placeholder: '-4',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -4 },
      },
      {
        id: 'ne-u3-c2-e2',
        title: 'Ejercicio 4: tres grupos en una cuenta',
        instructions: [
          'Escribe solo el resultado final de `(-6) + (-3) - (-11)`.',
          'Primero simplifica los parentesis y luego haz la operacion.',
        ],
        placeholder: '',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 2 },
      },
      {
        id: 'ne-u3-c3-e1',
        title: 'Ejercicio 5: dos parentesis simples',
        instructions: [
          'Escribe solo el resultado final de `(6 - 8) + (5 - 2)`.',
          'Resuelve cada parentesis y luego suma sus resultados.',
        ],
        placeholder: '1',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 1 },
      },
      {
        id: 'ne-u3-c3-e2',
        title: 'Ejercicio 6: agrupacion mas larga',
        instructions: [
          'Escribe solo el resultado final de `(8 - 3) - (-4 + 6) + (2 - 7 - 3) + 5`.',
          'Ve por partes: simplifica, ordena y luego compara.',
        ],
        placeholder: '',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 0 },
      },
    ],
  },
];
