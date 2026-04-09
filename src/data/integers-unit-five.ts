import type { UnitLesson } from './unit-types';

export const integersUnitFiveLessons: UnitLesson[] = [
  {
    id: 'ne-u5-l1',
    step: '1',
    title: 'Division, cociente y residuo',
    summary:
      'Cierras el curso repartiendo enteros en grupos, detectando residuo y resolviendo problemas donde una sobra cambia la decision final.',
    goal:
      'Entender [[dividendo]], [[divisor]], [[cociente]], [[residuo]] y decidir cuando hace falta un grupo extra en un problema.',
    content: [
      {
        title: 'Tarjeta 1: el cociente dice cuantos grupos completos caben',
        body: [
          'En una division entera, el [[cociente]] indica cuantas veces cabe el divisor dentro del dividendo.',
          'El [[residuo]] es la parte que sobra despues de formar todos los grupos completos posibles.',
        ],
        code: '25 = 4(6) + 1',
      },
      {
        title: 'Tarjeta 2: exacta o inexacta',
        body: [
          'Si el residuo es `0`, la division es exacta. Si sobra algo, la division es inexacta.',
          'En los problemas eso importa mucho, porque a veces esa sobra cambia la respuesta final.',
        ],
        code: '65975 = 325(203) + 0\n47 = 3(15) + 2',
      },
      {
        title: 'Tarjeta 3: una sobra puede obligarte a usar un grupo mas',
        body: [
          'Cuando repartes personas, objetos o lugares, una sobra no se puede ignorar. Si quedan personas afuera, hace falta otra ronda.',
          'Por eso en problemas reales no basta con escribir el cociente: hay que interpretar el residuo.',
        ],
        code: '613 personas / 80 lugares = 7 y sobran 53\nSe necesitan 8 presentaciones',
      },
    ],
    exercises: [
      {
        id: 'ne-u5-c1-e1',
        title: 'Ejercicio 1: cociente de 25 entre 4',
        instructions: [
          'Escribe solo el [[cociente]] de `25 / 4`.',
          'No escribas el residuo en este ejercicio.',
        ],
        placeholder: '',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 6 },
      },
      {
        id: 'ne-u5-c1-e2',
        title: 'Ejercicio 2: problema de bolsas',
        instructions: [
          'Tienes `25` canicas y las guardas en bolsas de `4` canicas.',
          'Escribe solo cuantas [[canicas sobran]] despues de llenar todas las bolsas completas.',
        ],
        placeholder: '',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 1 },
      },
      {
        id: 'ne-u5-c2-e1',
        title: 'Ejercicio 3: problema de paquetes exactos',
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
        title: 'Ejercicio 4: problema de sobres',
        instructions: [
          'Hay `47` cromos para guardar en sobres de `3` cromos cada uno.',
          'Escribe solo cuantos [[sobres completos]] se pueden llenar.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 15 },
      },
      {
        id: 'ne-u5-c3-e1',
        title: 'Ejercicio 5: residuo en sobres',
        instructions: [
          'Con esos mismos `47` cromos en sobres de `3`, escribe solo cuantos [[cromos sobran]].',
          'Recuerda que el residuo siempre debe ser menor que el divisor.',
        ],
        placeholder: '',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 2 },
      },
      {
        id: 'ne-u5-c3-e2',
        title: 'Ejercicio 6: problema del auditorio',
        instructions: [
          'En una escuela hay `28` maestros y `585` alumnos. El auditorio tiene espacio para `80` personas en cada presentacion.',
          'Escribe solo el numero de [[presentaciones]] necesarias para que todos entren.',
        ],
        placeholder: '',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 8 },
      },
    ],
  },
];