import type { UnitLesson } from './unit-types';

export const integersUnitTwoLessons: UnitLesson[] = [
  {
    id: 'ne-u2-l1',
    step: '1',
    title: 'Resta y mezcla de signos',
    summary: 'Ahora comparas cantidades y decides que signo debe quedar cuando los signos ya no van todos iguales.',
    goal: 'Entender [[resta]], comparar valores absolutos y agrupar positivos y negativos para cerrar una operacion.',
    content: [
      {
        title: 'Tarjeta 1: la resta compara dos cantidades',
        body: [
          'En una resta, importa quien tiene mayor tamaño. Si `9 - 7`, gana el `9` y queda `2` positivo.',
          'Si `3 - 4`, gana el `4`. Como el mayor valor absoluto esta del lado negativo, el resultado queda `-1`.',
        ],
        code: '9 - 7 = 2\n3 - 4 = -1',
      },
      {
        title: 'Tarjeta 2: varios terminos con signos distintos',
        body: [
          'Cuando aparecen varios enteros, puedes juntar los negativos por un lado y los positivos por otro.',
          'Despues comparas ambos resultados. El signo final lo decide el grupo con mayor valor absoluto.',
        ],
        code: '-6 - 3 - 2 + 8 + 1 = -11 + 9 = -2',
      },
      {
        title: 'Tarjeta 3: lo mismo con cuentas mas largas',
        body: [
          'En `-8 + 12 -3 + 9 -1 -15 + 7`, conviene reagrupar. Esa estrategia del libro ahorra errores.',
          'No es magia: es orden. Primero reunes, luego sumas, luego comparas.',
        ],
        code: '-8 - 3 - 1 - 15 + 12 + 9 + 7 = -27 + 28 = 1',
      },
    ],
    exercises: [
      {
        id: 'ne-u2-c1-e1',
        title: 'Ejercicio 1: resta sencilla',
        instructions: [
          'Escribe solo el resultado final de `9 - 7`.',
          'Aqui gana el numero positivo mayor.',
        ],
        placeholder: '2',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 2 },
      },
      {
        id: 'ne-u2-c1-e2',
        title: 'Ejercicio 2: resta con resultado negativo',
        instructions: [
          'Escribe solo el resultado final de `3 - 4`.',
          'Fijate bien en el signo final.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -1 },
      },
      {
        id: 'ne-u2-c2-e1',
        title: 'Ejercicio 3: resta de varios digitos',
        instructions: [
          'Escribe solo el resultado final de `289 - 47`.',
          'La respuesta final debe ser un entero positivo.',
        ],
        placeholder: '242',
        minLength: 3,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 242 },
      },
      {
        id: 'ne-u2-c2-e2',
        title: 'Ejercicio 4: mezcla corta de signos',
        instructions: [
          'Escribe solo el resultado final de `-425 + 379`.',
          'Compara que grupo tiene mayor valor absoluto.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -46 },
      },
      {
        id: 'ne-u2-c3-e1',
        title: 'Ejercicio 5: reune negativos y positivos',
        instructions: [
          'Escribe solo el resultado final de `-6 - 3 - 2 + 8 + 1`.',
          'Si te ayuda, primero junta negativos y positivos por separado.',
        ],
        placeholder: '-2',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -2 },
      },
      {
        id: 'ne-u2-c3-e2',
        title: 'Ejercicio 6: mezcla mas larga',
        instructions: [
          'Escribe solo el resultado final de `-8 + 12 - 3 + 9 - 1 - 15 + 7`.',
          'Este ejercicio sale mejor si ordenas primero los terminos del mismo signo.',
        ],
        placeholder: '',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 1 },
      },
    ],
  },
];
