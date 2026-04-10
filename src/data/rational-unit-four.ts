import type { UnitLesson } from './unit-types';

export const rationalUnitFourLessons: UnitLesson[] = [
  {
    id: 'nr-u4-l1',
    step: '1',
    title: 'Suma y resta de racionales',
    summary:
      'Aqui ya operas fracciones con el mismo y con distinto denominador, pero lo importante es que luego leas el resultado en el contexto del problema.',
    goal:
      'Sumar y restar [[racionales]] con igual o distinto denominador y cerrar problemas de varias etapas.',
    content: [
      {
        title: 'Tarjeta 1: si el denominador ya es igual, no inventes mas',
        body: [
          'Cuando el denominador es el mismo, solo sumas o restas numeradores.',
          'Al final simplificas si aparece una fraccion reducible o un entero.',
        ],
        code: '1/3 + 5/3 = 6/3 = 2\n7/9 - 5/9 = 2/9',
      },
      {
        title: 'Tarjeta 2: si es distinto, primero busca un comun denominador',
        body: [
          'Con denominadores distintos, primero hallas el [[mcm]]. Luego conviertes cada fraccion a una equivalente.',
          'Recien ahi sumas o restas.',
        ],
        code: '1/2 - 1/5 = 5/10 - 2/10 = 3/10',
      },
      {
        title: 'Tarjeta 3: en problemas el entero suele ser la unidad completa',
        body: [
          'En muchos problemas sumas pesos o tiempos. En otros restas porciones a la unidad para saber cuanto falta o cuanto sobra.',
          'Ese ultimo paso de interpretacion es parte de la respuesta.',
        ],
        code: '1/2 + 3/4 + 1 = 9/4 = 2 1/4\n1 - (1/3 + 1/4) = 5/12',
      },
    ],
    exercises: [
      {
        id: 'nr-u4-e1',
        title: 'Ejercicio 1: suma con mismo denominador',
        instructions: [
          'Resuelve `1/3 + 5/3`.',
          'Puedes escribir el resultado como entero si se simplifica por completo.',
        ],
        placeholder: 'Ejemplo: 2',
        minLength: 1,
        checks: [],
        expectedAnswer: {
          kind: 'rational',
          numerator: 2,
          denominator: 1,
          format: 'any',
          simplified: true,
        },
      },
      {
        id: 'nr-u4-e2',
        title: 'Ejercicio 2: resta con mismo denominador',
        instructions: [
          'Resuelve `7/9 - 5/9`.',
          'Escribe solo la respuesta final simplificada.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: {
          kind: 'rational',
          numerator: 2,
          denominator: 9,
          format: 'fraction',
          simplified: true,
        },
      },
      {
        id: 'nr-u4-e3',
        title: 'Ejercicio 3: distinto denominador',
        instructions: [
          'Resuelve `1/2 - 1/5`.',
          'Primero iguala denominadores y luego simplifica.',
        ],
        placeholder: 'Ejemplo: 3/10',
        minLength: 4,
        checks: [],
        expectedAnswer: {
          kind: 'rational',
          numerator: 3,
          denominator: 10,
          format: 'fraction',
          simplified: true,
        },
      },
      {
        id: 'nr-u4-e4',
        title: 'Ejercicio 4: mezcla de mixta y fracciones',
        instructions: [
          'Resuelve `3 1/6 - 1 1/2 + 2/3`.',
          'Escribe la respuesta final en forma mixta simplificada.',
        ],
        placeholder: '',
        minLength: 5,
        checks: [],
        expectedAnswer: {
          kind: 'rational',
          numerator: 7,
          denominator: 3,
          format: 'mixed',
          simplified: true,
        },
      },
      {
        id: 'nr-u4-e5',
        title: 'Ejercicio 5: peso de una bolsa',
        instructions: [
          'Una bolsa lleva `1/2` kg de azucar, `3/4` kg de harina y `1` kg de huevo.',
          'Escribe el peso total en forma mixta simplificada.',
        ],
        placeholder: 'Ejemplo: 2 1/4',
        minLength: 5,
        checks: [],
        expectedAnswer: {
          kind: 'rational',
          numerator: 9,
          denominator: 4,
          format: 'mixed',
          simplified: true,
        },
      },
      {
        id: 'nr-u4-e6',
        title: 'Ejercicio 6: que parte le queda',
        instructions: [
          'Miguel perdio `1/3` de su dinero y presto `1/4` del total.',
          'Escribe la fraccion simplificada que le queda.',
        ],
        placeholder: '',
        minLength: 4,
        checks: [],
        expectedAnswer: {
          kind: 'rational',
          numerator: 5,
          denominator: 12,
          format: 'fraction',
          simplified: true,
        },
      },
    ],
  },
];
