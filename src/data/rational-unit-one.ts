import type { UnitLesson } from './unit-types';

export const rationalUnitOneLessons: UnitLesson[] = [
  {
    id: 'nr-u1-l1',
    step: '1',
    title: 'Fraccion comun y lectura del todo',
    summary:
      'Arrancas leyendo fracciones como parte de un todo, sin rodeos: quien es la parte, quien es el total y como sale la respuesta en un problema.',
    goal:
      'Entender [[numerador]], [[denominador]] y traducir situaciones de [[parte/todo]] a una fraccion simplificada.',
    content: [
      {
        title: 'Tarjeta 1: que dice cada parte de una fraccion',
        body: [
          'El [[denominador]] dice en cuantas partes iguales se divide la unidad.',
          'El [[numerador]] dice cuantas de esas partes tomas. Ejemplo: en `3/4`, la unidad se divide en `4` y se toman `3`.',
        ],
        code: '3/4 -> tomo 3 de 4 partes\n5/3 -> tomo 5 tercios',
      },
      {
        title: 'Tarjeta 2: en problemas siempre buscas parte y total',
        body: [
          'Si el problema pregunta que parte del grupo cumple algo, la fraccion sale como `parte/total`.',
          'Primero cuentas la parte correcta. Despues cuentas el total. Al final simplificas si se puede.',
        ],
        code: '4 mujeres de 7 personas -> 4/7\n5 pelotas azules de 14 -> 5/14',
      },
      {
        title: 'Tarjeta 3: piensa en todo antes de escribir',
        body: [
          'En fracciones, la [[unidad]] manda. A veces la unidad es la familia, a veces el dia, a veces una caja completa.',
          'Si entiendes que representa el todo, el problema se vuelve corto.',
        ],
        code: '6:00 p.m. -> pasaron 18 de 24 horas -> 18/24 = 3/4',
        embed: {
          title: 'Mini juego de apoyo sobre numeros racionales',
          url: 'https://es.educaplay.com/recursos-educativos/26975283-crucigrama_numeros_racionales.html',
          sourceLabel: 'Educaplay',
          height: 420,
        },
      },
    ],
    exercises: [
      {
        id: 'nr-u1-e1',
        title: 'Ejercicio 1: parte de una familia',
        instructions: [
          'En una familia hay `3` hombres y `4` mujeres.',
          'Escribe la fraccion [[simplificada]] que representan las mujeres respecto del total.',
        ],
        placeholder: 'Ejemplo: 4/7',
        minLength: 3,
        checks: [],
        expectedAnswer: {
          kind: 'rational',
          numerator: 4,
          denominator: 7,
          format: 'fraction',
          simplified: true,
        },
      },
      {
        id: 'nr-u1-e2',
        title: 'Ejercicio 2: pelotas azules',
        instructions: [
          'Una caja tiene `9` pelotas verdes y `5` azules.',
          'Escribe la fraccion [[simplificada]] que representan las azules.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: {
          kind: 'rational',
          numerator: 5,
          denominator: 14,
          format: 'fraction',
          simplified: true,
        },
      },
      {
        id: 'nr-u1-e3',
        title: 'Ejercicio 3: parte del dia',
        instructions: [
          'Cuando el reloj marca `6:00 p.m.`, han pasado `18` horas de `24`.',
          'Escribe la fraccion [[simplificada]] del dia transcurrido.',
        ],
        placeholder: 'Ejemplo: 3/4',
        minLength: 3,
        checks: [],
        expectedAnswer: {
          kind: 'rational',
          numerator: 3,
          denominator: 4,
          format: 'fraction',
          simplified: true,
        },
      },
      {
        id: 'nr-u1-e4',
        title: 'Ejercicio 4: listones rojos',
        instructions: [
          'En una caja hay `40` listones rojos y `60` amarillos.',
          'Escribe la fraccion [[simplificada]] que representan los rojos.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: {
          kind: 'rational',
          numerator: 2,
          denominator: 5,
          format: 'fraction',
          simplified: true,
        },
      },
      {
        id: 'nr-u1-e5',
        title: 'Ejercicio 5: tiempo libre',
        instructions: [
          'Un obrero trabaja `8` horas al dia.',
          'Escribe la fraccion [[simplificada]] del dia que queda para sus otras actividades.',
        ],
        placeholder: 'Ejemplo: 2/3',
        minLength: 3,
        checks: [],
        expectedAnswer: {
          kind: 'rational',
          numerator: 2,
          denominator: 3,
          format: 'fraction',
          simplified: true,
        },
      },
      {
        id: 'nr-u1-e6',
        title: 'Ejercicio 6: cierre con asistencia',
        instructions: [
          'En un taller hay `18` asistentes. De ellos, `12` entregaron su diagnostico inicial.',
          'Escribe la fraccion [[simplificada]] que representa a quienes si entregaron el diagnostico.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: {
          kind: 'rational',
          numerator: 2,
          denominator: 3,
          format: 'fraction',
          simplified: true,
        },
      },
    ],
  },
];
