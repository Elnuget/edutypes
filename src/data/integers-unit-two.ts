import type { UnitLesson } from './unit-types';

export const integersUnitTwoLessons: UnitLesson[] = [
  {
    id: 'ne-u2-l1',
    step: '1',
    title: 'Resta y mezcla de signos',
    summary:
      'Ahora comparas cantidades que van en direcciones distintas y resuelves problemas donde unas acciones suman y otras restan.',
    goal:
      'Entender [[resta]], comparar valores absolutos y reagrupar positivos y negativos para decidir el signo final.',
    content: [
      {
        title: 'Tarjeta 1: cuando los signos se enfrentan',
        body: [
          'Si los signos son distintos, ya no basta con sumar. Primero comparas quien tiene mayor tamano.',
          'El [[valor absoluto]] mayor decide el signo final, y la diferencia entre ambos decide la cantidad que queda.',
        ],
        code: '9 - 7 = 2\n3 - 4 = -1',
      },
      {
        title: 'Tarjeta 2: varios cambios se pueden reagrupar',
        body: [
          'En cuentas largas o en problemas con varias acciones, puedes juntar por un lado los positivos y por otro los negativos.',
          'Despues comparas ambos grupos. Esa estrategia del libro ayuda mucho cuando el problema tiene muchas etapas.',
        ],
        code: '-6 - 3 - 2 + 8 + 1 = -11 + 9 = -2',
      },
      {
        title: 'Tarjeta 3: piensa primero la historia del problema',
        body: [
          'Antes de operar, conviene decidir que representa cada signo: subir, bajar, ganar, perder, avanzar o retroceder.',
          'Si el significado esta claro, la cuenta deja de ser una lista de signos y se vuelve una historia ordenada.',
        ],
        code: 'Baja 8, sube 12, baja 3, sube 9, baja 1, baja 15, sube 7\nResultado final: 1',
      },
    ],
    exercises: [
      {
        id: 'ne-u2-c1-e1',
        title: 'Ejercicio 1: resta sencilla',
        instructions: [
          'Escribe solo el resultado final de `9 - 7`.',
          'El entero con mayor valor absoluto esta del lado positivo.',
        ],
        placeholder: '',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 2 },
      },
      {
        id: 'ne-u2-c1-e2',
        title: 'Ejercicio 2: problema de temperatura',
        instructions: [
          'La temperatura estaba en `3` grados y baja `4` grados.',
          'Escribe solo la [[temperatura final]].',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -1 },
      },
      {
        id: 'ne-u2-c2-e1',
        title: 'Ejercicio 3: problema de ascensor',
        instructions: [
          'Un ascensor esta en el piso `-4` y luego sube `9` pisos.',
          'Escribe solo el [[piso final]].',
        ],
        placeholder: '',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 5 },
      },
      {
        id: 'ne-u2-c2-e2',
        title: 'Ejercicio 4: mezcla corta de signos',
        instructions: [
          'Escribe solo el resultado final de `-425 + 379`.',
          'Compara que grupo tiene mayor valor absoluto antes de decidir el signo.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -46 },
      },
      {
        id: 'ne-u2-c3-e1',
        title: 'Ejercicio 5: problema de torneo',
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
        title: 'Ejercicio 6: problema final de alpinista',
        instructions: [
          'Un alpinista baja `120` m, sube `95` m, baja `38` m, sube `74` m, baja `66` m y sube `21` m.',
          'Escribe solo el [[cambio final]] de altura respecto del punto donde empezo.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -34 },
      },
    ],
  },
];
