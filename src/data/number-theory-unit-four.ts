import type { UnitLesson } from './unit-types';

export const numberTheoryUnitFourLessons: UnitLesson[] = [
  {
    id: 'tn-u4-l1',
    step: '1',
    title: 'Minimo comun multiplo',
    summary:
      'Ahora buscas el menor multiplo que varios numeros comparten y lo conectas con problemas de coincidencia, ciclos y repeticiones.',
    goal:
      'Calcular el [[mcm]] y reconocer cuando un problema pide el primer momento o la menor cantidad que hace coincidir varios patrones.',
    content: [
      {
        title: 'Tarjeta 1: que mide el mcm',
        body: [
          'El [[minimo comun multiplo]] es el menor numero que aparece como multiplo comun de varios numeros.',
          'En problemas suele representar la primera coincidencia o la menor cantidad que satisface varias condiciones a la vez.',
        ],
        code: 'mcm(4,6) = 12',
      },
      {
        title: 'Tarjeta 2: como se calcula',
        body: [
          'El libro descompone los numeros en factores primos hasta que todos llegan a `1`.',
          'Aqui se multiplican todos los primos necesarios para cubrir cada numero, no solo los comunes.',
        ],
        code: 'mcm(28,42) = 2*2*3*7 = 84\nmcm(25,30,150) = 150',
      },
      {
        title: 'Tarjeta 3: saber elegir entre MCD y mcm',
        body: [
          'Si buscas la parte [[mas grande]] que se repite exacto, suele aparecer el MCD.',
          'Si buscas la primera [[coincidencia]] o la menor cantidad comun, suele aparecer el mcm.',
        ],
        code: 'Coincidencia de ciclos -> mcm\nCorte o reparto maximo -> MCD',
      },
    ],
    exercises: [
      {
        id: 'tn-u4-e1',
        title: 'Ejercicio 1: mcm basico',
        instructions: [
          'Escribe solo el valor de `mcm(4,6)`.',
          'Aqui basta con encontrar el menor multiplo comun.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 12 },
      },
      {
        id: 'tn-u4-e2',
        title: 'Ejercicio 2: mcm de 28 y 42',
        instructions: [
          'Escribe solo el valor de `mcm(28,42)`.',
          'No escribas el procedimiento, solo el resultado.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 84 },
      },
      {
        id: 'tn-u4-e3',
        title: 'Ejercicio 3: mcm de tres numeros',
        instructions: [
          'Escribe solo el valor de `mcm(25,30,150)`.',
          'Este caso muestra cuando uno de los numeros ya contiene a los otros factores.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 150 },
      },
      {
        id: 'tn-u4-e4',
        title: 'Ejercicio 4: mcm de 36, 48 y 60',
        instructions: [
          'Escribe solo el valor de `mcm(36,48,60)`.',
          'Este ejercicio ya exige ordenar bien los factores primos.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 720 },
      },
      {
        id: 'tn-u4-e5',
        title: 'Ejercicio 5: coincidencia de viajes',
        instructions: [
          'Una persona viaja a la Ciudad de Mexico cada `12` dias, otra cada `20` y otra cada `6`. Hoy coincidieron las tres.',
          'Escribe solo despues de cuantos [[dias]] volveran a coincidir.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 60 },
      },
      {
        id: 'tn-u4-e6',
        title: 'Ejercicio 6: anuncio luminoso',
        instructions: [
          'En un anuncio luminoso los focos rojos encienden cada `10` segundos, los amarillos cada `6` y los verdes cada `15`. Todos arrancan juntos.',
          'Escribe solo despues de cuantos [[segundos]] volveran a encender al mismo tiempo.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 30 },
      },
    ],
  },
];
