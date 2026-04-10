import type { UnitLesson } from './unit-types';

export const integersUnitTwoLessons: UnitLesson[] = [
  {
    id: 'ne-u2-l1',
    step: '1',
    title: 'Resta y mezcla de signos',
    summary:
      'Ahora comparas cambios opuestos y decides el signo final en balances, trayectorias y variaciones mas realistas.',
    goal:
      'Entender [[resta]], comparar valores absolutos y reagrupar positivos y negativos para decidir el signo final.',
    content: [
      {
        title: 'Tarjeta 1: cuando los signos compiten',
        body: [
          'Si los signos son distintos, ya no basta con sumar. Primero comparas que lado tiene mayor magnitud.',
          'El [[valor absoluto]] mayor decide el signo final, y la diferencia decide cuanto queda realmente.',
        ],
        code: '15 - 9 = 6\n8 - 13 = -5',
      },
      {
        title: 'Tarjeta 2: reagrupar ayuda mucho',
        body: [
          'En cuentas largas conviene reunir positivos por un lado y negativos por otro antes de comparar.',
          'Esa tecnica del libro reduce errores y te deja ver con claridad que tendencia domina.',
        ],
        code: '-18 - 7 + 25 - 14 + 9 - 5 = -44 + 34 = -10',
      },
      {
        title: 'Tarjeta 3: leer primero la historia',
        body: [
          'En problemas de colegio grande importa interpretar bien el contexto: saldo, altura, puntaje o desplazamiento.',
          'Si decides bien que significa cada signo, la cuenta deja de ser una lista y pasa a ser una lectura del proceso.',
        ],
        code: 'Baja 120, sube 95, baja 38, sube 74, baja 66, sube 21',
      },
    ],
    exercises: [
      {
        id: 'ne-u2-c1-e1',
        title: 'Ejercicio 1: resta sencilla',
        instructions: [
          'Escribe solo el resultado final de `15 - 9`.',
          'El valor absoluto mayor esta del lado positivo.',
        ],
        placeholder: '',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 6 },
      },
      {
        id: 'ne-u2-c1-e2',
        title: 'Ejercicio 2: temperatura con descenso',
        instructions: [
          'La temperatura esta en `8` grados y desciende `13` grados.',
          'Escribe solo la [[temperatura final]].',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -5 },
      },
      {
        id: 'ne-u2-c2-e1',
        title: 'Ejercicio 3: balance de inventario',
        instructions: [
          'Un almacen arranca en `-25` unidades y luego recibe `40` unidades.',
          'Escribe solo el [[saldo final]] de inventario.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 15 },
      },
      {
        id: 'ne-u2-c2-e2',
        title: 'Ejercicio 4: mezcla corta de signos',
        instructions: [
          'Escribe solo el resultado final de `-425 + 379`.',
          'Compara ambos lados antes de decidir el signo.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -46 },
      },
      {
        id: 'ne-u2-c3-e1',
        title: 'Ejercicio 5: torneo con variaciones',
        instructions: [
          'En un torneo, un equipo pierde `18` puntos, gana `25`, pierde `14`, pierde `7`, gana `9` y pierde `5`.',
          'Escribe solo el [[puntaje final]] empezando desde `0`.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -10 },
      },
      {
        id: 'ne-u2-c3-e2',
        title: 'Ejercicio 6: cierre de variacion de altura',
        instructions: [
          'Un alpinista desciende `120` m, asciende `95` m, desciende `38` m, asciende `74` m, desciende `66` m y asciende `21` m.',
          'Escribe solo el [[cambio final]] de altura respecto del punto inicial.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -34 },
      },
    ],
  },
];
