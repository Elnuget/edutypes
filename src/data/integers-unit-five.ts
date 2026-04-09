import type { UnitLesson } from './unit-types';

export const integersUnitFiveLessons: UnitLesson[] = [
  {
    id: 'ne-u5-l1',
    step: '1',
    title: 'Division, cociente y residuo',
    summary: 'Cierras el curso con divisiones enteras, residuo y una aplicacion donde hace falta una presentacion extra.',
    goal: 'Entender [[dividendo]], [[divisor]], [[cociente]], [[residuo]] y la idea de una division exacta.',
    content: [
      {
        title: 'Tarjeta 1: que significan cociente y residuo',
        body: [
          'En una division entera, el [[cociente]] dice cuantas veces cabe un numero en otro. El [[residuo]] dice lo que sobra.',
          'Por ejemplo, en `25 ÷ 4`, el cociente es `6` y el residuo es `1`.',
        ],
        code: '25 = 4(6) + 1',
      },
      {
        title: 'Tarjeta 2: division exacta e inexacta',
        body: [
          'Si el residuo es `0`, la division es exacta. Si no, la division deja sobra.',
          'Por ejemplo, `65975 ÷ 325` da cociente `203` y residuo `0`.',
        ],
        code: '65975 = 325(203) + 0',
      },
      {
        title: 'Tarjeta 3: a veces hace falta un grupo mas',
        body: [
          'En problemas reales, un residuo puede obligarte a usar un grupo extra.',
          'Eso pasa en el ejemplo del auditorio: si sobran personas, hace falta una presentacion mas.',
        ],
        code: '613 personas ÷ 80 lugares = 7 y sobran 53\nSe necesitan 8 presentaciones',
      },
    ],
    exercises: [
      {
        id: 'ne-u5-c1-e1',
        title: 'Ejercicio 1: cociente de 25 entre 4',
        instructions: [
          'Escribe solo el [[cociente]] de `25 ÷ 4`.',
          'No escribas el residuo aqui, solo cuantas veces cabe 4 en 25.',
        ],
        placeholder: '6',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 6 },
      },
      {
        id: 'ne-u5-c1-e2',
        title: 'Ejercicio 2: residuo de 25 entre 4',
        instructions: [
          'Escribe solo el [[residuo]] de `25 ÷ 4`.',
          'Aqui debe ir solo lo que sobra.',
        ],
        placeholder: '',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 1 },
      },
      {
        id: 'ne-u5-c2-e1',
        title: 'Ejercicio 3: cociente de 47 entre 3',
        instructions: [
          'Escribe solo el [[cociente]] de `47 ÷ 3`.',
          'No escribas el residuo en este ejercicio.',
        ],
        placeholder: '15',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 15 },
      },
      {
        id: 'ne-u5-c2-e2',
        title: 'Ejercicio 4: residuo de 47 entre 3',
        instructions: [
          'Escribe solo el [[residuo]] de `47 ÷ 3`.',
          'Ese residuo debe ser menor que el divisor.',
        ],
        placeholder: '',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 2 },
      },
      {
        id: 'ne-u5-c3-e1',
        title: 'Ejercicio 5: division exacta',
        instructions: [
          'Escribe solo el [[cociente]] de `65975 ÷ 325`.',
          'En este caso la division es exacta.',
        ],
        placeholder: '203',
        minLength: 3,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 203 },
      },
      {
        id: 'ne-u5-c3-e2',
        title: 'Ejercicio 6: problema del auditorio',
        instructions: [
          'En una escuela hay 28 maestros y 585 alumnos. El auditorio tiene espacio para 80 personas.',
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
