import type { UnitLesson } from './unit-types';

export const integersUnitFourLessons: UnitLesson[] = [
  {
    id: 'ne-u4-l1',
    step: '1',
    title: 'Multiplicacion de enteros',
    summary:
      'Usas la multiplicacion para leer cambios repetidos, secuencias de ganancias o perdidas y bloques con signos.',
    goal:
      'Entender [[factores]], [[producto]] y las reglas de signos cuando un mismo cambio se repite varias veces.',
    content: [
      {
        title: 'Tarjeta 1: multiplicar es repetir el mismo cambio',
        body: [
          'Multiplicar no es solo una cuenta corta. Tambien resume una misma variacion que ocurre varias veces.',
          'Eso la vuelve muy util en problemas de produccion, puntajes, descensos o ingresos periodicos.',
        ],
        code: '6*8 = 48\n(-4)*6 = -24',
      },
      {
        title: 'Tarjeta 2: regla de signos',
        body: [
          'Si los signos son iguales, el producto queda positivo. Si los signos son distintos, queda negativo.',
          'La clave no es memorizar sin pensar, sino leer si los cambios se refuerzan o se cancelan.',
        ],
        code: '(-3)*(-4)*(-6) = -72\n(-4)*(-6) = 24',
      },
      {
        title: 'Tarjeta 3: productos con agrupacion',
        body: [
          'Cuando una expresion mezcla parentesis y productos, primero simplificas los parentesis y luego aplicas la multiplicacion.',
          'Ese orden mantiene limpio el calculo y evita errores con signos.',
        ],
        code: '3(12 - 18) - 2(7 - 15) - (9 + 4)',
      },
    ],
    exercises: [
      {
        id: 'ne-u4-c1-e1',
        title: 'Ejercicio 1: producto basico',
        instructions: [
          'Escribe solo el resultado final de `6*8`.',
          'Piensalo como un mismo aumento repetido seis veces.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 48 },
      },
      {
        id: 'ne-u4-c1-e2',
        title: 'Ejercicio 2: descenso repetido',
        instructions: [
          'Un submarino desciende `4` metros por minuto durante `6` minutos.',
          'Escribe solo el [[cambio total]] de profundidad.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -24 },
      },
      {
        id: 'ne-u4-c2-e1',
        title: 'Ejercicio 3: producto con tres factores',
        instructions: [
          'Escribe solo el resultado final de `(-3)*(-4)*(-6)`.',
          'Hazlo por etapas para no perder el signo.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -72 },
      },
      {
        id: 'ne-u4-c2-e2',
        title: 'Ejercicio 4: ajuste contable invertido',
        instructions: [
          'Una plataforma detecta `4` cobros equivocados de `-6` dolares y todos se revierten.',
          'Ese cambio total se representa con `(-4)*(-6)`. Escribe solo el [[resultado final]].',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 24 },
      },
      {
        id: 'ne-u4-c3-e1',
        title: 'Ejercicio 5: puntajes repetidos',
        instructions: [
          'En un campeonato, un equipo pierde `7` puntos en cada una de `6` rondas, luego gana `5` puntos en cada una de `4` rondas y al final pierde `4` puntos en cada una de `3` rondas.',
          'Escribe solo el [[puntaje final]] usando productos para cada bloque repetido.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -34 },
      },
      {
        id: 'ne-u4-c3-e2',
        title: 'Ejercicio 6: cierre con productos y grupos',
        instructions: [
          'Una ruta de robot se resume en `3(12 - 18) - 2(7 - 15) - (9 + 4)`.',
          'Escribe solo el [[resultado final]] despues de resolver parentesis y productos en el orden correcto.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -15 },
      },
    ],
  },
];
