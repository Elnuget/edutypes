import type { UnitLesson } from './unit-types';

export const integersUnitOneLessons: UnitLesson[] = [
  {
    id: 'ne-u1-l1',
    step: '1',
    title: 'Suma de enteros con el mismo signo',
    summary: 'Empiezas con sumas de enteros cuando todos los números van hacia el mismo lado.',
    goal: 'Entender [[+]], [[-]], suma de valores absolutos y conservar el signo cuando todos los sumandos tienen el mismo signo.',
    content: [
      {
        title: 'Tarjeta 1: enteros positivos y negativos',
        body: [
          'Los [[enteros]] pueden ser positivos o negativos. `+` indica avance o ganancia. `-` indica deuda, bajada o falta.',
          'En el libro se usa esta idea para hablar de deudas y temperaturas. No es un tema pequeno: es una forma nueva de medir cambios.',
        ],
        code: '3\n-5\n9\n-12',
      },
      {
        title: 'Tarjeta 2: suma con el mismo signo',
        body: [
          'Si todos los sumandos tienen el mismo signo, primero sumas sus cantidades.',
          'Luego conservas ese mismo signo. Por eso `3 + 9` termina en `12` y `-5 -1 -3` termina en `-9`.',
        ],
        code: '3 + 9 = 12\n-5 - 1 - 3 = -9',
      },
      {
        title: 'Tarjeta 3: tambien funciona con numeros grandes',
        body: [
          'La regla no cambia cuando aparecen varios digitos. Sumas las cantidades y el signo final sigue igual.',
          'En vertical o en horizontal, la idea es la misma: [[mismo signo]], mismo signo en el resultado.',
        ],
        code: '325 + 63 = 388\n-1533 - 2980 - 537 = -5050',
      },
    ],
    exercises: [
      {
        id: 'ne-u1-c1-e1',
        title: 'Ejercicio 1: suma positiva corta',
        instructions: [
          'Escribe solo el resultado final de `3 + 9`.',
          'Si quieres, tambien puedes escribir una cuenta corta equivalente, pero debe terminar en el mismo entero.',
        ],
        placeholder: '12',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 12 },
      },
      {
        id: 'ne-u1-c1-e2',
        title: 'Ejercicio 2: otra suma positiva',
        instructions: [
          'Escribe solo el resultado final de `7 + 5`.',
          'Aqui todos los sumandos tienen signo positivo.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 12 },
      },
      {
        id: 'ne-u1-c2-e1',
        title: 'Ejercicio 3: suma negativa corta',
        instructions: [
          'Escribe solo el resultado final de `-5 - 1 - 3`.',
          'Recuerda: mismo signo negativo, mismo signo en el resultado.',
        ],
        placeholder: '-9',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -9 },
      },
      {
        id: 'ne-u1-c2-e2',
        title: 'Ejercicio 4: otra suma negativa',
        instructions: [
          'Escribe solo el resultado final de `-4 - 6`.',
          'No cambies el signo final.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -10 },
      },
      {
        id: 'ne-u1-c3-e1',
        title: 'Ejercicio 5: suma de varios digitos',
        instructions: [
          'Escribe solo el resultado final de `325 + 63`.',
          'El signo final debe seguir siendo positivo.',
        ],
        placeholder: '388',
        minLength: 3,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 388 },
      },
      {
        id: 'ne-u1-c3-e2',
        title: 'Ejercicio 6: suma negativa grande',
        instructions: [
          'Escribe solo el resultado final de `-1533 - 2980 - 537`.',
          'Todos los números tienen signo negativo, asi que el resultado tambien debe ser negativo.',
        ],
        placeholder: '',
        minLength: 4,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -5050 },
      },
    ],
  },
];
