import type { UnitLesson } from './unit-types';

export const integersUnitOneLessons: UnitLesson[] = [
  {
    id: 'ne-u1-l1',
    step: '1',
    title: 'Suma de enteros con el mismo signo',
    summary:
      'Empiezas entendiendo que los enteros sirven para describir ganancias, perdidas, subidas y bajadas, y enseguida los usas en problemas.',
    goal:
      'Entender [[+]], [[-]], suma de valores absolutos y conservar el signo cuando todos los cambios van hacia el mismo lado.',
    content: [
      {
        title: 'Tarjeta 1: enteros para contar cambios reales',
        body: [
          'Los [[enteros]] no son solo cuentas. Sirven para hablar de temperatura, pisos, deudas, alturas y puntajes. `+` indica avance o ganancia. `-` indica bajada, deuda o perdida.',
          'Cuando varios cambios tienen el mismo signo, todos empujan hacia el mismo lado. Por eso esta regla aparece muy pronto en los problemas del libro.',
        ],
        code: '+3\n-5\n+9\n-12',
      },
      {
        title: 'Tarjeta 2: mismo signo, misma direccion',
        body: [
          'Si todos los sumandos tienen el mismo signo, primero sumas las cantidades sin mirar el signo.',
          'Despues conservas ese signo. Si todo fue subida, el resultado queda positivo. Si todo fue bajada o deuda, el resultado queda negativo.',
        ],
        code: '3 + 9 = 12\n-5 - 1 - 3 = -9',
      },
      {
        title: 'Tarjeta 3: en problemas tambien se hace igual',
        body: [
          'En un problema, primero decides si todos los cambios son ganancias o si todos son perdidas. Luego sumas las cantidades.',
          'Eso te permite resolver situaciones mas grandes sin perder el sentido de la respuesta.',
        ],
        code: 'Una subida de 125 m y otra de 63 m dejan +188 m\nUna deuda de 120, otra de 80 y otra de 50 dejan -250',
      },
    ],
    exercises: [
      {
        id: 'ne-u1-c1-e1',
        title: 'Ejercicio 1: suma positiva corta',
        instructions: [
          'Escribe solo el resultado final de `3 + 9`.',
          'Aqui ambos enteros empujan hacia el lado positivo.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 12 },
      },
      {
        id: 'ne-u1-c1-e2',
        title: 'Ejercicio 2: problema de altura',
        instructions: [
          'Una exploradora sube `4` metros y luego sube `7` metros mas.',
          'Escribe solo la [[altura ganada total]] respecto del punto de inicio.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 11 },
      },
      {
        id: 'ne-u1-c2-e1',
        title: 'Ejercicio 3: suma negativa corta',
        instructions: [
          'Escribe solo el resultado final de `-5 - 1 - 3`.',
          'Todos los cambios van hacia abajo, asi que el signo final tambien debe ir hacia abajo.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -9 },
      },
      {
        id: 'ne-u1-c2-e2',
        title: 'Ejercicio 4: problema de deuda',
        instructions: [
          'Lucia ya debia `6` dolares y luego pidio `8` dolares mas prestados.',
          'Escribe solo su [[saldo final]] usando entero con signo.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -14 },
      },
      {
        id: 'ne-u1-c3-e1',
        title: 'Ejercicio 5: problema de expedicion',
        instructions: [
          'En una expedicion un grupo sube `120` m por la manana, `85` m al mediodia, `60` m en la tarde y `25` m antes de llegar al campamento.',
          'Escribe solo la [[altura total ganada]] respecto del inicio.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 290 },
      },
      {
        id: 'ne-u1-c3-e2',
        title: 'Ejercicio 6: problema final de deudas',
        instructions: [
          'Una familia tiene una deuda de `-125` dolares por luz, `-80` por agua, `-95` por internet y `-40` por transporte escolar.',
          'Escribe solo el [[saldo total]] que representan esas cuatro deudas juntas.',
        ],
        placeholder: '',
        minLength: 4,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -340 },
      },
    ],
  },
];
