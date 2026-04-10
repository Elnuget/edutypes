import type { UnitLesson } from './unit-types';

export const rationalUnitFiveLessons: UnitLesson[] = [
  {
    id: 'nr-u5-l1',
    step: '1',
    title: 'Multiplicacion de racionales y aplicaciones',
    summary:
      'Ahora multiplicas racionales y pasas a problemas donde una fraccion actua sobre una cantidad real.',
    goal:
      'Multiplicar [[fracciones]], simplificar a tiempo y resolver problemas de [[fraccion de una cantidad]].',
    content: [
      {
        title: 'Tarjeta 1: producto de fracciones',
        body: [
          'Multiplicas numerador por numerador y denominador por denominador.',
          'Si puedes simplificar antes o despues, hazlo para evitar cuentas grandes.',
        ],
        code: '2/5 * 10/8 = 20/40 = 1/2',
      },
      {
        title: 'Tarjeta 2: una fraccion de una cantidad',
        body: [
          'Cuando un problema pide `3/4` de `3000`, multiplicas la cantidad total por la fraccion.',
          'Esta idea aparece mucho en litros, dinero, alumnos y distancias.',
        ],
        code: '3/4 de 3000 = 2250\n2/3 de 6300 = 4200',
      },
      {
        title: 'Tarjeta 3: si el problema tiene varias capas, respeta el orden',
        body: [
          'En aplicaciones mas fuertes, una fraccion actua sobre otra fraccion de una cantidad.',
          'No corras: reduce etapa por etapa.',
        ],
        code: '2/3 de 3/4 de 1/2 de 240 = 60',
      },
    ],
    exercises: [
      {
        id: 'nr-u5-e1',
        title: 'Ejercicio 1: producto corto',
        instructions: [
          'Resuelve `2/5 * 10/8`.',
          'Escribe la respuesta simplificada.',
        ],
        placeholder: 'Ejemplo: 1/2',
        minLength: 3,
        checks: [],
        expectedAnswer: {
          kind: 'rational',
          numerator: 1,
          denominator: 2,
          format: 'fraction',
          simplified: true,
        },
      },
      {
        id: 'nr-u5-e2',
        title: 'Ejercicio 2: producto de mixtas',
        instructions: [
          'Resuelve `3 2/5 * 4 1/6`.',
          'Escribe la respuesta en forma de fraccion simplificada.',
        ],
        placeholder: '',
        minLength: 4,
        checks: [],
        expectedAnswer: {
          kind: 'rational',
          numerator: 85,
          denominator: 6,
          format: 'fraction',
          simplified: true,
        },
      },
      {
        id: 'nr-u5-e3',
        title: 'Ejercicio 3: capas de fracciones',
        instructions: [
          'Calcula los `2/3` de los `3/4` de la mitad de `240`.',
          'Escribe solo el numero final.',
        ],
        placeholder: 'Ejemplo: 60',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 60 },
      },
      {
        id: 'nr-u5-e4',
        title: 'Ejercicio 4: litros en una alberca',
        instructions: [
          'Una alberca tiene capacidad para `3000` litros y esta a `3/4` de su capacidad.',
          'Escribe solo cuantos litros tiene.',
        ],
        placeholder: '',
        minLength: 4,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 2250 },
      },
      {
        id: 'nr-u5-e5',
        title: 'Ejercicio 5: asistentes visitantes',
        instructions: [
          'En un estadio `2/3` de `6300` asistentes apoyan al equipo local.',
          'Escribe solo cuantos apoyan al visitante.',
        ],
        placeholder: 'Ejemplo: 2100',
        minLength: 4,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 2100 },
      },
      {
        id: 'nr-u5-e6',
        title: 'Ejercicio 6: costo de 3 3/4 kg',
        instructions: [
          'El kilogramo de azucar cuesta `8` dolares.',
          'Escribe solo el costo de `3 3/4` kg.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 30 },
      },
    ],
  },
];
