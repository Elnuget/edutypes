import type { UnitLesson } from './unit-types';

export const numberTheoryUnitThreeLessons: UnitLesson[] = [
  {
    id: 'tn-u3-l1',
    step: '1',
    title: 'Maximo comun divisor',
    summary:
      'Aqui aprendes a encontrar el mayor divisor comun de varios numeros y a reconocer cuando dos numeros son primos relativos.',
    goal:
      'Calcular el [[MCD]] mediante factores primos y usarlo en repartos exactos o cortes maximos.',
    content: [
      {
        title: 'Tarjeta 1: que mide el MCD',
        body: [
          'El [[maximo comun divisor]] de varios numeros es el divisor comun mas grande que tienen.',
          'En problemas, suele decirte cual es el mayor tamano posible de una parte igual o cuantas veces puedes repartir algo sin sobrantes.',
        ],
        code: 'Divisores comunes de 18 y 24: 1, 2, 3, 6\nMCD(18,24) = 6',
      },
      {
        title: 'Tarjeta 2: como se calcula por factores primos',
        body: [
          'El libro descompone los numeros simultaneamente y multiplica solo los factores primos que aparecen en comun.',
          'Si ya no queda ningun primo comun, te detienes. Eso evita ensayo y error con listas largas de divisores.',
        ],
        code: 'MCD(48,36,60) = 2*2*3 = 12\nMCD(72,180) = 2*2*3*3 = 36',
      },
      {
        title: 'Tarjeta 3: cuando el MCD vale 1',
        body: [
          'Si dos numeros solo comparten al `1` como divisor comun, se llaman [[primos relativos]].',
          'Eso significa que su MCD es `1`.',
        ],
        code: 'MCD(11,23) = 1',
      },
    ],
    exercises: [
      {
        id: 'tn-u3-e1',
        title: 'Ejercicio 1: mcd directo',
        instructions: [
          'Escribe solo el valor de `MCD(18,24)`.',
          'No escribas el procedimiento, solo el resultado final.',
        ],
        placeholder: '',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 6 },
      },
      {
        id: 'tn-u3-e2',
        title: 'Ejercicio 2: mcd de tres numeros',
        instructions: [
          'Escribe solo el valor de `MCD(48,36,60)`.',
          'Piensa solo en los factores comunes.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 12 },
      },
      {
        id: 'tn-u3-e3',
        title: 'Ejercicio 3: mcd de 72 y 180',
        instructions: [
          'Escribe solo el valor de `MCD(72,180)`.',
          'Este caso ya requiere factorizar con cuidado.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 36 },
      },
      {
        id: 'tn-u3-e4',
        title: 'Ejercicio 4: primos relativos',
        instructions: [
          'Escribe solo el valor de `MCD(11,23)`.',
          'Si dos numeros son primos relativos, aqui debe aparecer ese resultado.',
        ],
        placeholder: '',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 1 },
      },
      {
        id: 'tn-u3-e5',
        title: 'Ejercicio 5: donacion a instituciones',
        instructions: [
          'Tres escuelas reunen `120000`, `280000` y `360000` pesos para repartir la misma cantidad maxima a varias instituciones.',
          'Escribe solo la [[cantidad]] que debe recibir cada institucion.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 40000 },
      },
      {
        id: 'tn-u3-e6',
        title: 'Ejercicio 6: corte del restaurante',
        instructions: [
          'En un restaurante hay tres rollos de billetes con `1350`, `1700` y `3550` pesos. Todos los billetes son de la misma denominacion.',
          'Escribe solo la [[denominacion]] de cada billete.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 50 },
      },
    ],
  },
];
