import type { UnitLesson } from './unit-types';

export const integersUnitThreeLessons: UnitLesson[] = [
  {
    id: 'ne-u3-l1',
    step: '1',
    title: 'Suma y resta con signos de agrupacion',
    summary:
      'Aprendes a leer parentesis, corchetes o llaves sin perder el sentido del signo, y lo aplicas en problemas con varias etapas.',
    goal:
      'Entender que un [[+]] delante conserva el signo interior y un [[-]] delante lo cambia antes de calcular.',
    content: [
      {
        title: 'Tarjeta 1: un + delante deja el signo igual',
        body: [
          'Si un parentesis esta precedido por [[+]], el signo de adentro se conserva. Eso te deja una cuenta mas simple para seguir.',
          'Este paso es importante porque muchos problemas largos se escriben primero con grupos.',
        ],
        code: '(-8) + (-3) = -8 - 3 = -11',
      },
      {
        title: 'Tarjeta 2: un - delante cambia el signo interior',
        body: [
          'Si delante hay [[-]], cada signo que esta adentro cambia. Un positivo pasa a negativo y un negativo pasa a positivo.',
          'No es una decoracion: ese cambio decide todo el resultado final.',
        ],
        code: '-(14) - (-10) = -14 + 10 = -4',
      },
      {
        title: 'Tarjeta 3: primero simplifica, luego cuenta la historia',
        body: [
          'En problemas con varias etapas, cada parentesis puede representar un bloque de acciones. Primero simplificas cada bloque.',
          'Despues unes los resultados parciales y decides el entero final.',
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
          'Como delante del segundo parentesis hay positivo, el signo interior no cambia.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -11 },
      },
      {
        id: 'ne-u3-c1-e2',
        title: 'Ejercicio 2: problema de temperatura en dos tramos',
        instructions: [
          'Durante una noche la temperatura cambia `(+6) + (-8)` respecto del inicio.',
          'Escribe solo la [[temperatura final]] si se empieza en `0`.',
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
          'Recuerda que el signo negativo de afuera cambia el signo del numero que encierra.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -4 },
      },
      {
        id: 'ne-u3-c2-e2',
        title: 'Ejercicio 4: problema de puntaje corregido',
        instructions: [
          'En una ronda un equipo tiene los cambios `(-6) + (-3) - (-11)`.',
          'Eso significa dos perdidas y luego la devolucion de `11` puntos. Escribe solo el [[puntaje final]].',
        ],
        placeholder: '',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 2 },
      },
      {
        id: 'ne-u3-c3-e1',
        title: 'Ejercicio 5: problema de ruta con bloques',
        instructions: [
          'Un robot hace esta ruta por bloques: `(12 - 20) - (-15 + 3) + (7 - 9)`.',
          'Escribe solo el [[cambio total]] despues de simplificar cada bloque con cuidado.',
        ],
        placeholder: '',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 2 },
      },
      {
        id: 'ne-u3-c3-e2',
        title: 'Ejercicio 6: problema final por etapas',
        instructions: [
          'En una mision un dron realiza esta ruta total: `(18 - 24) - (-9 + 5) + (7 - 13 + 8) - (6 - 10)`.',
          'Escribe solo el [[cambio final]] de altura despues de simplificar todos los grupos y cambiar bien los signos exteriores.',
        ],
        placeholder: '',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 4 },
      },
    ],
  },
];
