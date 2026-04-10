import type { UnitLesson } from './unit-types';

export const numberTheoryUnitTwoLessons: UnitLesson[] = [
  {
    id: 'tn-u2-l1',
    step: '1',
    title: 'Numeros primos y factorizacion',
    summary:
      'Ahora distingues numeros primos de compuestos y aprendes a desarmar un numero como producto de factores primos.',
    goal:
      'Reconocer [[numero primo]], usar una criba simple y escribir una [[factorizacion prima]] en orden.',
    content: [
      {
        title: 'Tarjeta 1: primo contra compuesto',
        body: [
          'Un [[numero primo]] solo tiene dos divisores positivos: `1` y el mismo numero.',
          'Un [[compuesto]] tiene mas divisores. Esta diferencia parece simple, pero organiza toda la teoria de numeros.',
        ],
        code: 'Primos: 2, 3, 5, 7, 11...\nCompuestos: 4, 6, 8, 9, 10...',
      },
      {
        title: 'Tarjeta 2: la criba de Eratostenes',
        body: [
          'La [[criba de Eratostenes]] marca los numeros primos y tacha los que no lo son.',
          'La idea es ir tomando el primer numero no tachado y eliminar sus multiplos. Eso deja visible la estructura de los primos.',
        ],
        code: 'Entre 1 y 20 los primos son: 2, 3, 5, 7, 11, 13, 17, 19',
      },
      {
        title: 'Tarjeta 3: descomponer en factores primos',
        body: [
          'Factorizar es escribir un numero como producto de [[factores primos]].',
          'El libro lo hace dividiendo siempre por el menor primo posible hasta llegar a `1`.',
        ],
        code: '105 = 3*5*7\n294 = 2*3*7*7',
      },
    ],
    exercises: [
      {
        id: 'tn-u2-e1',
        title: 'Ejercicio 1: clasificar un numero',
        instructions: [
          'Escribe solo la palabra que clasifica correctamente al numero `13`.',
          'Tu respuesta debe ser una sola palabra.',
        ],
        placeholder: 'Escribe la palabra...',
        minLength: 5,
        checks: [],
        responseKind: 'text',
        expectedAnswer: { kind: 'keywords', include: ['primo'] },
      },
      {
        id: 'tn-u2-e2',
        title: 'Ejercicio 2: cuantos primos aparecen',
        instructions: [
          'Entre `1` y `20`, escribe solo cuantos numeros primos hay.',
          'No incluyas al `1` porque no es primo.',
        ],
        placeholder: '',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 8 },
      },
      {
        id: 'tn-u2-e3',
        title: 'Ejercicio 3: factorizacion de 105',
        instructions: [
          'Escribe la factorizacion prima de `105` usando `*` y en orden ascendente.',
          'Escribe exactamente el producto final, no una explicacion.',
        ],
        placeholder: 'Ejemplo de formato: 2*3*5',
        minLength: 5,
        checks: [
          {
            kind: 'includes',
            needle: '3*5*7',
            success: 'La factorizacion de 105 es correcta.',
            error: 'Debes escribir la factorizacion prima exacta de 105 en orden ascendente usando `*`.',
          },
        ],
        responseKind: 'text',
      },
      {
        id: 'tn-u2-e4',
        title: 'Ejercicio 4: factorizacion de 294',
        instructions: [
          'Escribe la factorizacion prima de `294` usando `*` y en orden ascendente.',
          'Recuerda repetir un factor cuando aparece varias veces.',
        ],
        placeholder: 'Ejemplo de formato: 2*2*3*5',
        minLength: 7,
        checks: [
          {
            kind: 'includes',
            needle: '2*3*7*7',
            success: 'La factorizacion de 294 es correcta.',
            error: 'Debes escribir la factorizacion prima exacta de 294 con todos sus factores.',
          },
        ],
        responseKind: 'text',
      },
      {
        id: 'tn-u2-e5',
        title: 'Ejercicio 5: factorizacion de 840',
        instructions: [
          'Escribe la factorizacion prima de `840` usando `*` y en orden ascendente.',
          'No omitas los factores repetidos.',
        ],
        placeholder: 'Ejemplo de formato: 2*2*3*5',
        minLength: 9,
        checks: [
          {
            kind: 'includes',
            needle: '2*2*2*3*5*7',
            success: 'La factorizacion de 840 es correcta.',
            error: 'La descomposicion de 840 aun no esta completa o no esta en el formato pedido.',
          },
        ],
        responseKind: 'text',
      },
      {
        id: 'tn-u2-e6',
        title: 'Ejercicio 6: factorizacion final de 2376',
        instructions: [
          'Escribe la factorizacion prima de `2376` usando `*` y en orden ascendente.',
          'Este cierre ya exige varios pasos, asi que conviene dividir por el menor primo posible cada vez.',
        ],
        placeholder: 'Ejemplo de formato: 2*2*3*5',
        minLength: 13,
        checks: [
          {
            kind: 'includes',
            needle: '2*2*2*3*3*3*11',
            success: 'La factorizacion final es correcta.',
            error: 'La factorizacion de 2376 aun no coincide con el producto primo correcto.',
          },
        ],
        responseKind: 'text',
      },
    ],
  },
];
