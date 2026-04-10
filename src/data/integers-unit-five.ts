import type { UnitLesson } from './unit-types';

export const integersUnitFiveLessons: UnitLesson[] = [
  {
    id: 'ne-u5-l1',
    step: '1',
    title: 'Division, cociente y residuo',
    summary:
      'Cierras el curso repartiendo cantidades enteras, leyendo residuo y tomando decisiones cuando una sobra cambia el resultado del problema.',
    goal:
      'Entender [[dividendo]], [[divisor]], [[cociente]], [[residuo]] y decidir cuando hace falta una unidad extra.',
    content: [
      {
        title: 'Tarjeta 1: cociente y residuo',
        body: [
          'En una division entera, el [[cociente]] dice cuantas veces cabe el divisor dentro del dividendo.',
          'El [[residuo]] es lo que sobra despues de formar todos los grupos completos posibles.',
        ],
        code: '25 = 4(6) + 1',
      },
      {
        title: 'Tarjeta 2: exacta o inexacta',
        body: [
          'Si el residuo es `0`, la division es exacta. Si sobra algo, es inexacta.',
          'En contextos de colegio grande esto importa porque una sobra puede obligar a pedir un bus extra, una caja extra o una nueva ronda.',
        ],
        code: '65975 = 325(203) + 0\n47 = 3(15) + 2',
      },
      {
        title: 'Tarjeta 3: interpretar la sobra',
        body: [
          'No basta con calcular. Despues debes leer si la sobra se puede ignorar o si cambia la decision final.',
          'Cuando trabajas con personas, asientos o entregas, casi siempre la sobra importa.',
        ],
        code: '530 personas / 45 asientos = 11 y sobran 35\nSe necesitan 12 buses',
      },
    ],
    exercises: [
      {
        id: 'ne-u5-c1-e1',
        title: 'Ejercicio 1: cociente de 25 entre 4',
        instructions: [
          'Escribe solo el [[cociente]] de `25/4`.',
          'No escribas el residuo en este ejercicio.',
        ],
        placeholder: '',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 6 },
      },
      {
        id: 'ne-u5-c1-e2',
        title: 'Ejercicio 2: residuo en cajas pequenas',
        instructions: [
          'Una tienda guarda `25` piezas en cajas de `4`.',
          'Escribe solo cuantas [[piezas sobran]] despues de llenar todas las cajas completas.',
        ],
        placeholder: '',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 1 },
      },
      {
        id: 'ne-u5-c2-e1',
        title: 'Ejercicio 3: empaques exactos',
        instructions: [
          'Una imprenta reparte `65975` hojas en paquetes de `325` hojas.',
          'Escribe solo cuantos [[paquetes completos]] se forman.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 203 },
      },
      {
        id: 'ne-u5-c2-e2',
        title: 'Ejercicio 4: sobres completos',
        instructions: [
          'Hay `47` documentos para guardar en sobres de `3` documentos cada uno.',
          'Escribe solo cuantos [[sobres completos]] se pueden llenar.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 15 },
      },
      {
        id: 'ne-u5-c3-e1',
        title: 'Ejercicio 5: residuo en inventario',
        instructions: [
          'Un deposito guarda `754` lapices en cajas de `28` lapices cada una.',
          'Escribe solo cuantos [[lapices sobran]] despues de llenar todas las cajas completas.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 26 },
      },
      {
        id: 'ne-u5-c3-e2',
        title: 'Ejercicio 6: cierre con transporte',
        instructions: [
          'Para una salida academica van `468` estudiantes, `37` docentes y `25` representantes. Cada bus tiene `45` asientos.',
          'Escribe solo el numero de [[buses]] necesarios para que todos puedan viajar.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 12 },
      },
    ],
  },
];
