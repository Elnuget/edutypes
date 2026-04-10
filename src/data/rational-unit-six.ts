import type { UnitLesson } from './unit-types';

export const rationalUnitSixLessons: UnitLesson[] = [
  {
    id: 'nr-u6-l1',
    step: '1',
    title: 'Division, agrupacion y cierre',
    summary:
      'Cierras el curso dividiendo racionales, resolviendo problemas de reparto o razon y manejando expresiones con parentesis.',
    goal:
      'Dividir [[racionales]], resolver problemas de [[cuantas veces cabe]] y calcular expresiones con [[agrupacion]].',
    content: [
      {
        title: 'Tarjeta 1: dividir es multiplicar por el reciproco',
        body: [
          'Para dividir fracciones, multiplicas la primera por el [[reciproco]] de la segunda.',
          'Luego simplificas.',
        ],
        code: '2/3 ÷ 4/5 = 2/3 * 5/4 = 10/12 = 5/6',
      },
      {
        title: 'Tarjeta 2: en problemas la division responde cuantas veces cabe',
        body: [
          'Si tienes `20` kg y cada bolsa guarda `5/8`, la pregunta real es cuantas veces cabe `5/8` dentro de `20`.',
          'La misma idea sirve para velocidades, porciones y repartos.',
        ],
        code: '20 ÷ 5/8 = 32\n60 ÷ 3/4 = 80',
      },
      {
        title: 'Tarjeta 3: con parentesis primero resuelve lo de adentro',
        body: [
          'En expresiones agrupadas, primero cierras la suma o resta interior.',
          'Despues haces el producto o la division que queda afuera.',
        ],
        code: '5/4 ÷ (1/3 + 1/6) = 5/4 ÷ 1/2 = 5/2',
      },
    ],
    exercises: [
      {
        id: 'nr-u6-e1',
        title: 'Ejercicio 1: division corta',
        instructions: [
          'Resuelve `2/3 ÷ 4/5`.',
          'Escribe la respuesta simplificada.',
        ],
        placeholder: 'Ejemplo: 5/6',
        minLength: 3,
        checks: [],
        expectedAnswer: {
          kind: 'rational',
          numerator: 5,
          denominator: 6,
          format: 'fraction',
          simplified: true,
        },
      },
      {
        id: 'nr-u6-e2',
        title: 'Ejercicio 2: bolsas de galletas',
        instructions: [
          'Con `20` kg de galletas se llenan bolsas de `5/8` kg.',
          'Escribe solo cuantas bolsas completas se pueden llenar.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 32 },
      },
      {
        id: 'nr-u6-e3',
        title: 'Ejercicio 3: botellas de agua',
        instructions: [
          'Con `60` litros de agua quieres llenar botellas de `3/4` de litro.',
          'Escribe solo cuantas botellas se llenan.',
        ],
        placeholder: 'Ejemplo: 80',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 80 },
      },
      {
        id: 'nr-u6-e4',
        title: 'Ejercicio 4: parentesis primero',
        instructions: [
          'Resuelve `5/4 ÷ (1/3 + 1/6)`.',
          'Escribe la respuesta simplificada.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: {
          kind: 'rational',
          numerator: 5,
          denominator: 2,
          format: 'fraction',
          simplified: true,
        },
      },
      {
        id: 'nr-u6-e5',
        title: 'Ejercicio 5: velocidad por hora',
        instructions: [
          'Un automovil recorre `120` km en `2 1/2` horas.',
          'Escribe solo su velocidad por hora.',
        ],
        placeholder: 'Ejemplo: 48',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 48 },
      },
      {
        id: 'nr-u6-e6',
        title: 'Ejercicio 6: reparto final de arroz',
        instructions: [
          'Javier reparte `160` kg de arroz en porciones de `6 2/3` kg por persona.',
          'Escribe solo cuantas personas reciben arroz.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 24 },
      },
    ],
  },
];
