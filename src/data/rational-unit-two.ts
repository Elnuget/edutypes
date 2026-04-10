import type { UnitLesson } from './unit-types';

export const rationalUnitTwoLessons: UnitLesson[] = [
  {
    id: 'nr-u2-l1',
    step: '1',
    title: 'Propias, impropias y conversiones',
    summary:
      'Ahora clasificas fracciones y cambias de impropia a mixta, o de mixta a impropia, sin perder el valor que representan.',
    goal:
      'Distinguir [[propia]], [[impropia]] y [[mixta]], y convertir entre estas formas con orden.',
    content: [
      {
        title: 'Tarjeta 1: tres formas que debes reconocer rapido',
        body: [
          'Una fraccion [[propia]] tiene numerador menor que denominador, asi que vale menos que `1`.',
          'Una [[impropia]] tiene numerador mayor o igual que denominador. Una [[mixta]] combina entero y fraccion.',
        ],
        code: '7/8 -> propia\n16/9 -> impropia\n2 3/5 -> mixta',
      },
      {
        title: 'Tarjeta 2: de impropia a mixta',
        body: [
          'Divide numerador entre denominador. El cociente da la parte entera y el residuo pasa al numerador.',
          'El denominador se conserva.',
        ],
        code: '43/6 -> 7 1/6\n45/16 -> 2 13/16',
      },
      {
        title: 'Tarjeta 3: de mixta a impropia',
        body: [
          'Multiplica la parte entera por el denominador y suma el numerador.',
          'Ese resultado queda arriba y el denominador queda igual.',
        ],
        code: '2 3/5 -> 13/5\n12 3/5 -> 63/5',
      },
    ],
    exercises: [
      {
        id: 'nr-u2-e1',
        title: 'Ejercicio 1: clasifica 7/8',
        instructions: [
          'Escribe solo la palabra que clasifica a `7/8`.',
          'Debe ser una sola palabra.',
        ],
        placeholder: 'Ejemplo: propia',
        minLength: 5,
        checks: [],
        responseKind: 'text',
        expectedAnswer: { kind: 'keywords', include: ['propia'] },
      },
      {
        id: 'nr-u2-e2',
        title: 'Ejercicio 2: clasifica 16/9',
        instructions: [
          'Escribe solo la palabra que clasifica a `16/9`.',
          'Debe ser una sola palabra.',
        ],
        placeholder: '',
        minLength: 8,
        checks: [],
        responseKind: 'text',
        expectedAnswer: { kind: 'keywords', include: ['impropia'] },
      },
      {
        id: 'nr-u2-e3',
        title: 'Ejercicio 3: pasa a mixta',
        instructions: [
          'Convierte `43/6` a fraccion mixta.',
          'Escribe el resultado con este formato: `7 1/6`.',
        ],
        placeholder: 'Ejemplo: 7 1/6',
        minLength: 5,
        checks: [],
        expectedAnswer: {
          kind: 'rational',
          numerator: 43,
          denominator: 6,
          format: 'mixed',
          simplified: true,
        },
      },
      {
        id: 'nr-u2-e4',
        title: 'Ejercicio 4: otra mixta',
        instructions: [
          'Convierte `45/16` a fraccion mixta.',
          'Escribe el resultado con el mismo formato de entero mas fraccion.',
        ],
        placeholder: '',
        minLength: 6,
        checks: [],
        expectedAnswer: {
          kind: 'rational',
          numerator: 45,
          denominator: 16,
          format: 'mixed',
          simplified: true,
        },
      },
      {
        id: 'nr-u2-e5',
        title: 'Ejercicio 5: vuelve a impropia',
        instructions: [
          'Convierte `2 3/5` a fraccion impropia.',
          'Escribe la respuesta en forma de fraccion.',
        ],
        placeholder: 'Ejemplo: 13/5',
        minLength: 4,
        checks: [],
        expectedAnswer: {
          kind: 'rational',
          numerator: 13,
          denominator: 5,
          format: 'fraction',
          simplified: true,
        },
      },
      {
        id: 'nr-u2-e6',
        title: 'Ejercicio 6: cierre con numero grande',
        instructions: [
          'Convierte `12 3/5` a fraccion impropia.',
          'Escribe solo la fraccion final.',
        ],
        placeholder: '',
        minLength: 4,
        checks: [],
        expectedAnswer: {
          kind: 'rational',
          numerator: 63,
          denominator: 5,
          format: 'fraction',
          simplified: true,
        },
      },
    ],
  },
];
