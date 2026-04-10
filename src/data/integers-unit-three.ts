import type { UnitLesson } from './unit-types';

export const integersUnitThreeLessons: UnitLesson[] = [
  {
    id: 'ne-u3-l1',
    step: '1',
    title: 'Suma y resta con signos de agrupacion',
    summary:
      'Aprendes a limpiar parentesis y a leer bloques de operaciones como si fueran tramos de un mismo proceso.',
    goal:
      'Entender que un [[+]] delante conserva el signo interior y un [[-]] delante lo cambia antes de calcular.',
    content: [
      {
        title: 'Tarjeta 1: un + delante conserva',
        body: [
          'Si delante del parentesis hay [[+]], el signo de adentro se mantiene.',
          'Ese detalle evita errores cuando una expresion larga se divide en bloques.',
        ],
        code: '(-18) + (-7) = -25',
      },
      {
        title: 'Tarjeta 2: un - delante invierte',
        body: [
          'Si delante aparece [[-]], cada signo interior cambia. El bloque se reescribe antes de continuar.',
          'Este es uno de los puntos donde mas fallos aparecen cuando el calculo se hace muy rapido.',
        ],
        code: '-(24) - (-16) = -24 + 16 = -8',
      },
      {
        title: 'Tarjeta 3: simplifica antes de cerrar',
        body: [
          'En problemas por etapas conviene simplificar cada bloque y luego unir resultados parciales.',
          'Asi puedes seguir una ruta, un balance o una serie de ajustes sin perder de vista el sentido del signo.',
        ],
        code: '(12 - 20) - (-15 + 3) + (7 - 9)',
      },
    ],
    exercises: [
      {
        id: 'ne-u3-c1-e1',
        title: 'Ejercicio 1: bloque con signo conservado',
        instructions: [
          'Escribe solo el resultado final de `(-18) + (-7)`.',
          'Delante del segundo parentesis hay positivo, asi que el signo interior se conserva.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -25 },
      },
      {
        id: 'ne-u3-c1-e2',
        title: 'Ejercicio 2: ajuste de temperatura',
        instructions: [
          'Una estacion meteorologica registra el cambio `(+9) + (-14)` respecto del inicio.',
          'Escribe solo la [[variacion final]].',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -5 },
      },
      {
        id: 'ne-u3-c2-e1',
        title: 'Ejercicio 3: signo exterior negativo',
        instructions: [
          'Escribe solo el resultado final de `-(24) - (-16)`.',
          'Recuerda cambiar el signo del numero que esta dentro del segundo parentesis.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -8 },
      },
      {
        id: 'ne-u3-c2-e2',
        title: 'Ejercicio 4: balance corregido',
        instructions: [
          'En una auditoria aparece la expresion `(-18) + (-7) - (-30)`.',
          'Escribe solo el [[saldo final]] despues del ajuste.',
        ],
        placeholder: '',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 5 },
      },
      {
        id: 'ne-u3-c3-e1',
        title: 'Ejercicio 5: ruta con bloques',
        instructions: [
          'Un robot industrial sigue la ruta `(12 - 20) - (-15 + 3) + (7 - 9)`.',
          'Escribe solo el [[cambio total]] despues de simplificar cada bloque con cuidado.',
        ],
        placeholder: '',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 2 },
      },
      {
        id: 'ne-u3-c3-e2',
        title: 'Ejercicio 6: cierre por etapas',
        instructions: [
          'En una mision un dron realiza esta ruta total: `(18 - 24) - (-9 + 5) + (7 - 13 + 8) - (6 - 10)`.',
          'Escribe solo el [[cambio final]] despues de simplificar los grupos y cuidar cada signo exterior.',
        ],
        placeholder: '',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 4 },
      },
    ],
  },
];
