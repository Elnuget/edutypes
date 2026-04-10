import type { UnitLesson } from './unit-types';

export const numberTheoryUnitOneLessons: UnitLesson[] = [
  {
    id: 'tn-u1-l1',
    step: '1',
    title: 'Divisibilidad y criterios base',
    summary:
      'Empiezas definiendo cuando un numero divide exactamente a otro y usas criterios para decidir rapido sin hacer toda la division.',
    goal:
      'Entender [[divisibilidad]], [[residuo]], [[multiplo]] y aplicar criterios utiles para 3, 4, 5 y 6.',
    content: [
      {
        title: 'Tarjeta 1: divisible significa residuo cero',
        body: [
          'Un numero [[a]] es divisible entre [[b]] cuando al hacer la division el [[residuo]] es `0`.',
          'Eso no es un detalle tecnico. Es la idea base para saber si una reparticion es exacta o si sobrara algo.',
        ],
        code: '48 = 16(3) + 0\n385 = 12(32) + 1',
      },
      {
        title: 'Tarjeta 2: multiples y numeros compuestos',
        body: [
          'Un [[multiplo]] contiene a otro numero una cantidad exacta de veces. Por eso `240` es multiplo de `12`.',
          'Un [[numero compuesto]] tiene divisores aparte de `1` y de si mismo. Esa idea sera clave cuando entres a numeros primos.',
        ],
        code: 'Multiplo de 12: 12, 24, 36, 48, 60...\nCompuesto: 12 tiene divisores 1, 2, 3, 4, 6 y 12',
      },
      {
        title: 'Tarjeta 3: los criterios ahorran tiempo',
        body: [
          'Los criterios te dejan decidir rapido si una division sera exacta.',
          'En bachillerato conviene dominar al menos [[3]], [[4]], [[5]] y [[6]].',
        ],
        code: '486 es divisible entre 3 porque 4 + 8 + 6 = 18\n628 es divisible entre 4 porque 28 es multiplo de 4\n340 es divisible entre 5 porque termina en 0\n216 es divisible entre 6 porque es divisible entre 2 y 3',
        embed: {
          title: 'Mini juego de divisibilidad y primos',
          url: 'https://es.educaplay.com/recursos-educativos/25174961-divisibilidad_y_numeros_primos.html',
          sourceLabel: 'Educaplay',
          height: 420,
        },
      },
    ],
    exercises: [
      {
        id: 'tn-u1-e1',
        title: 'Ejercicio 1: idea central de divisibilidad',
        instructions: [
          'Escribe la expresion corta que debe aparecer para que una division sea exacta.',
          'Tu respuesta debe incluir las palabras [[residuo]] y `0`.',
        ],
        placeholder: 'Escribe la idea clave...',
        minLength: 8,
        checks: [],
        responseKind: 'text',
        expectedAnswer: { kind: 'keywords', include: ['residuo', '0'] },
      },
      {
        id: 'tn-u1-e2',
        title: 'Ejercicio 2: veces exactas',
        instructions: [
          'Si `1512` es divisible entre `42`, escribe solo cuantas veces contiene a `42`.',
          'No escribas el residuo porque aqui es una division exacta.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 36 },
      },
      {
        id: 'tn-u1-e3',
        title: 'Ejercicio 3: criterio de divisibilidad entre 3',
        instructions: [
          'En la lista `105`, `243`, `73`, `2457`, `3589`, escribe solo cuantos numeros son divisibles entre `3`.',
          'Puedes decidirlo sumando digitos en cada caso.',
        ],
        placeholder: '',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 3 },
      },
      {
        id: 'tn-u1-e4',
        title: 'Ejercicio 4: criterio de divisibilidad entre 4',
        instructions: [
          'En la lista `800`, `112`, `324`, `1426`, `13564`, escribe solo cuantos numeros son divisibles entre `4`.',
          'Recuerda mirar solo los dos ultimos digitos cuando aplique.',
        ],
        placeholder: '',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 4 },
      },
      {
        id: 'tn-u1-e5',
        title: 'Ejercicio 5: empaques exactos',
        instructions: [
          'Una papeleria tiene `375` archivadores y quiere empacarlos en cajas de `15` sin que sobre ninguno.',
          'Escribe solo el numero de [[cajas]] completas que puede formar.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 25 },
      },
      {
        id: 'tn-u1-e6',
        title: 'Ejercicio 6: pedidos que cierran exacto',
        instructions: [
          'Una imprenta revisa que pedidos puede cerrar en lotes de `6` sin sobrantes. Los pedidos tienen `216`, `314`, `768` y `1470` piezas.',
          'Escribe solo cuantos pedidos cumplen esa condicion.',
        ],
        placeholder: '',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 3 },
      },
    ],
  },
];
