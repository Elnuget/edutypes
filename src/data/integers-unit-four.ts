import type { UnitLesson } from './unit-types';

export const integersUnitFourLessons: UnitLesson[] = [
  {
    id: 'ne-u4-l1',
    step: '1',
    title: 'Multiplicacion de enteros',
    summary: 'Ahora ves la multiplicacion como suma repetida y luego aplicas las leyes de los signos.',
    goal: 'Entender [[factores]], [[producto]], y las reglas de signos [[+ por +]], [[- por -]], [[+ por -]] y [[- por +]].',
    content: [
      {
        title: 'Tarjeta 1: multiplicar es repetir',
        body: [
          'El libro dice que multiplicar es sumar una misma cantidad varias veces. `3 x 4` puede verse como `4 + 4 + 4`.',
          'Eso ayuda a entender por que el resultado se llama [[producto]].',
        ],
        code: '3 x 4 = 12',
      },
      {
        title: 'Tarjeta 2: leyes de signos',
        body: [
          'Si los signos son iguales, el producto queda positivo. Si son diferentes, el producto queda negativo.',
          'En simbolos: `(+)(+) = +`, `(-)(-) = +`, `(+)(-) = -`, `(-)(+) = -`.',
        ],
        code: '(-3)(-4)(-6) = -72\n(3)(-5)(-2)(4) = 120',
      },
      {
        title: 'Tarjeta 3: agrupacion y multiplicacion',
        body: [
          'Tambien puedes multiplicar antes de quitar parentesis. Luego agrupas los signos iguales y restas.',
          'Ese paso aparece en el libro con expresiones como `3(4 - 2) - 5(1 - 4) - (8 + 9)`.',
        ],
        code: '3(4 - 2) - 5(1 - 4) - (8 + 9) = 4',
      },
    ],
    exercises: [
      {
        id: 'ne-u4-c1-e1',
        title: 'Ejercicio 1: producto basico',
        instructions: [
          'Escribe solo el resultado final de `3 x 4`.',
          'Puedes escribir `*` si prefieres en vez de `x` al pensar la cuenta.',
        ],
        placeholder: '12',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 12 },
      },
      {
        id: 'ne-u4-c1-e2',
        title: 'Ejercicio 2: producto de varios digitos',
        instructions: [
          'Escribe solo el resultado final de `358 x 6`.',
          'La respuesta final debe ser un entero positivo.',
        ],
        placeholder: '',
        minLength: 4,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 2148 },
      },
      {
        id: 'ne-u4-c2-e1',
        title: 'Ejercicio 3: producto largo',
        instructions: [
          'Escribe solo el resultado final de `2624 x 45`.',
          'No hace falta escribir el procedimiento, solo el entero final.',
        ],
        placeholder: '118080',
        minLength: 6,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 118080 },
      },
      {
        id: 'ne-u4-c2-e2',
        title: 'Ejercicio 4: signos iguales y luego distinto',
        instructions: [
          'Escribe solo el resultado final de `(-3)(-4)(-6)`.',
          'Hazlo por pasos si te ayuda: primero dos factores y luego el tercero.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -72 },
      },
      {
        id: 'ne-u4-c3-e1',
        title: 'Ejercicio 5: cuatro factores',
        instructions: [
          'Escribe solo el resultado final de `(3)(-5)(-2)(4)`.',
          'Fijate bien cuantas veces cambia el signo.',
        ],
        placeholder: '120',
        minLength: 3,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 120 },
      },
      {
        id: 'ne-u4-c3-e2',
        title: 'Ejercicio 6: multiplicacion con agrupacion',
        instructions: [
          'Escribe solo el resultado final de `3(4 - 2) - 5(1 - 4) - (8 + 9)`.',
          'Primero quita parentesis con orden, luego junta positivos y negativos.',
        ],
        placeholder: '',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 4 },
      },
    ],
  },
];
