import type { UnitLesson } from './unit-types';

export const integersUnitFourLessons: UnitLesson[] = [
  {
    id: 'ne-u4-l1',
    step: '1',
    title: 'Multiplicacion de enteros',
    summary:
      'Ves la multiplicacion como cambio repetido y la aplicas en problemas donde una misma ganancia o perdida ocurre varias veces.',
    goal:
      'Entender [[factores]], [[producto]] y las reglas de signos cuando un mismo cambio positivo o negativo se repite.',
    content: [
      {
        title: 'Tarjeta 1: multiplicar es repetir un mismo cambio',
        body: [
          'Multiplicar significa repetir una misma cantidad varias veces. `3 x 4` puede leerse como tres grupos de `4`.',
          'En problemas, eso aparece cuando una misma ganancia o una misma bajada se repite varias veces.',
        ],
        code: '3 x 4 = 12',
      },
      {
        title: 'Tarjeta 2: los signos siguen una regla fija',
        body: [
          'Si los signos son iguales, el producto queda positivo. Si son distintos, el producto queda negativo.',
          'Esa regla te permite resolver cambios repetidos hacia arriba o hacia abajo sin volver a sumar todo a mano.',
        ],
        code: '(-3)(-4)(-6) = -72\n(-4)(-6) = 24',
      },
      {
        title: 'Tarjeta 3: a veces una expresion mezcla productos y sumas',
        body: [
          'Cuando un problema combina varias acciones, puedes resolver primero los productos y despues juntar los resultados.',
          'Eso mantiene el orden y evita errores con los signos.',
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
          'Piensalo como un mismo cambio positivo repetido tres veces.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 12 },
      },
      {
        id: 'ne-u4-c1-e2',
        title: 'Ejercicio 2: problema de estantes',
        instructions: [
          'Una biblioteca arma `6` estantes con `8` libros en cada uno.',
          'Escribe solo el [[total de libros]].',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 48 },
      },
      {
        id: 'ne-u4-c2-e1',
        title: 'Ejercicio 3: problema de submarino',
        instructions: [
          'Un submarino baja `4` metros por minuto durante `6` minutos.',
          'Escribe solo el [[cambio total]] de profundidad.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -24 },
      },
      {
        id: 'ne-u4-c2-e2',
        title: 'Ejercicio 4: producto con tres factores',
        instructions: [
          'Escribe solo el resultado final de `(-3)(-4)(-6)`.',
          'Hazlo por pasos si te ayuda y cuida el signo en cada producto parcial.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -72 },
      },
      {
        id: 'ne-u4-c3-e1',
        title: 'Ejercicio 5: problema de puntajes repetidos',
        instructions: [
          'En un juego, un equipo pierde `7` puntos en cada una de `6` rondas, luego gana `5` puntos en cada una de `4` rondas, y al final pierde `4` puntos en cada una de `3` rondas.',
          'Escribe solo el [[puntaje final]] usando enteros y productos para cada bloque repetido.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -34 },
      },
      {
        id: 'ne-u4-c3-e2',
        title: 'Ejercicio 6: problema final con productos y grupos',
        instructions: [
          'Una ruta de robot se resume en `3(12 - 18) - 2(7 - 15) - (9 + 4)`.',
          'Escribe solo el [[resultado final]] despues de resolver primero los parentesis y luego los productos.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -15 },
      },
    ],
  },
];
