import type { UnitLesson } from './unit-types';

export const rationalUnitThreeLessons: UnitLesson[] = [
  {
    id: 'nr-u3-l1',
    step: '1',
    title: 'Equivalentes, simplificacion y recta numerica',
    summary:
      'En esta parte comparas fracciones, las simplificas y las lees como puntos sobre la recta, no solo como simbolos.',
    goal:
      'Reconocer [[fracciones equivalentes]], simplificar con criterio y ubicar racionales en la [[recta numerica]].',
    content: [
      {
        title: 'Tarjeta 1: equivalentes significa mismo valor',
        body: [
          'Dos fracciones son [[equivalentes]] si representan la misma cantidad, aunque se vean distintas.',
          'Puedes verificarlo comparando productos cruzados.',
        ],
        code: '3/4 y 15/20 -> 3*20 = 4*15 -> 60 = 60',
      },
      {
        title: 'Tarjeta 2: simplificar no cambia el valor',
        body: [
          'Simplificar es dividir numerador y denominador entre un mismo numero.',
          'La meta es llegar a una fraccion irreducible, es decir, que ya no comparta factores.',
        ],
        code: '20/24 -> 5/6\n90/200 -> 9/20\n132/165 -> 4/5',
      },
      {
        title: 'Tarjeta 3: la recta obliga a entender cuanto vale',
        body: [
          'Para ubicar una fraccion en la recta, primero decides entre que enteros vive y luego partes la unidad.',
          'Por eso una impropia suele convertirse en mixta antes de dibujarla.',
        ],
        code: '-9/4 = -2 1/4\n25/10 = 2 1/2',
      },
    ],
    exercises: [
      {
        id: 'nr-u3-e1',
        title: 'Ejercicio 1: equivalencia',
        instructions: [
          'Escribe solo `si` o `no`: `3/4` y `15/20` son equivalentes?',
          'No escribas explicacion.',
        ],
        placeholder: 'si',
        minLength: 2,
        checks: [],
        responseKind: 'text',
        expectedAnswer: { kind: 'keywords', include: ['si'] },
      },
      {
        id: 'nr-u3-e2',
        title: 'Ejercicio 2: simplifica 20/24',
        instructions: [
          'Escribe la fraccion [[simplificada]] equivalente a `20/24`.',
          'Debe quedar irreducible.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: {
          kind: 'rational',
          numerator: 5,
          denominator: 6,
          format: 'fraction',
          simplified: true,
        },
      },
      {
        id: 'nr-u3-e3',
        title: 'Ejercicio 3: simplifica 90/200',
        instructions: [
          'Escribe la fraccion [[simplificada]] equivalente a `90/200`.',
          'Recuerda reducir todo lo que se pueda.',
        ],
        placeholder: 'Ejemplo: 9/20',
        minLength: 4,
        checks: [],
        expectedAnswer: {
          kind: 'rational',
          numerator: 9,
          denominator: 20,
          format: 'fraction',
          simplified: true,
        },
      },
      {
        id: 'nr-u3-e4',
        title: 'Ejercicio 4: simplifica 132/165',
        instructions: [
          'Escribe la fraccion [[simplificada]] equivalente a `132/165`.',
          'Hazlo hasta que no queden factores comunes.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: {
          kind: 'rational',
          numerator: 4,
          denominator: 5,
          format: 'fraction',
          simplified: true,
        },
      },
      {
        id: 'nr-u3-e5',
        title: 'Ejercicio 5: lectura en la recta',
        instructions: [
          'Convierte `-9/4` a fraccion mixta para leer mejor su posicion en la recta.',
          'Escribe el resultado en forma mixta.',
        ],
        placeholder: 'Ejemplo: -2 1/4',
        minLength: 6,
        checks: [],
        expectedAnswer: {
          kind: 'rational',
          numerator: -9,
          denominator: 4,
          format: 'mixed',
          simplified: true,
        },
      },
      {
        id: 'nr-u3-e6',
        title: 'Ejercicio 6: cierre con 25/10',
        instructions: [
          'Convierte `25/10` a una forma mixta [[simplificada]].',
          'Escribe solo la forma final.',
        ],
        placeholder: '',
        minLength: 5,
        checks: [],
        expectedAnswer: {
          kind: 'rational',
          numerator: 5,
          denominator: 2,
          format: 'mixed',
          simplified: true,
        },
      },
    ],
  },
];
