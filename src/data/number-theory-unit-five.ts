import type { UnitLesson } from './unit-types';

export const numberTheoryUnitFiveLessons: UnitLesson[] = [
  {
    id: 'tn-u5-l1',
    step: '1',
    title: 'Aplicaciones integradas de teoria de numeros',
    summary:
      'Cierras el curso eligiendo entre MCD y mcm en problemas mas abiertos, como cortes, coincidencias, ciclos y llenado exacto.',
    goal:
      'Distinguir si un problema pide [[MCD]] o [[mcm]] y resolverlo con interpretacion correcta del resultado.',
    content: [
      {
        title: 'Tarjeta 1: senales de un problema de MCD',
        body: [
          'Si el problema pide la parte [[mas grande posible]] que sea igual para todos, casi siempre estas ante un MCD.',
          'Eso pasa en cortes, empaques o repartos exactos con el mayor tamano comun.',
        ],
        code: 'Cortar, repartir, agrupar al maximo -> MCD',
      },
      {
        title: 'Tarjeta 2: senales de un problema de mcm',
        body: [
          'Si el problema pide la primera [[coincidencia]] entre ciclos o la menor cantidad comun, casi siempre estas ante un mcm.',
          'Eso aparece en vueltas, horarios, encendidos y llenados exactos.',
        ],
        code: 'Coincidir, repetir, volver a encontrarse -> mcm',
      },
      {
        title: 'Tarjeta 3: interpreta el resultado final',
        body: [
          'En teoria de numeros no basta con calcular. Despues debes traducir el numero al lenguaje del problema.',
          'Un `20` puede ser centimetros, minutos, bolsas, segundos o litros. Esa interpretacion es parte de la respuesta.',
        ],
        code: '300 cm y 80 cm -> MCD = 20\nRespuesta: cada lado del cuadro mide 20 cm',
      },
    ],
    exercises: [
      {
        id: 'tn-u5-e1',
        title: 'Ejercicio 1: bolsas de carne',
        instructions: [
          'En una caja hay `12` kg de carne de res, `18` kg de cerdo y `24` kg de pollo. Todo se quiere guardar en bolsas iguales y con la mayor cantidad posible.',
          'Escribe solo cuantos [[kilogramos]] debe pesar cada bolsa.',
        ],
        placeholder: '',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 6 },
      },
      {
        id: 'tn-u5-e2',
        title: 'Ejercicio 2: plancha de madera',
        instructions: [
          'Un ebanista quiere cortar una plancha de `300` cm de largo y `80` cm de ancho en cuadros lo mas grandes posible.',
          'Escribe solo la [[longitud del lado]] de cada cuadro.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 20 },
      },
      {
        id: 'tn-u5-e3',
        title: 'Ejercicio 3: ciclistas en pista',
        instructions: [
          'Un ciclista da una vuelta a la pista en `6` minutos y otro en `4`. Salen juntos.',
          'Escribe solo despues de cuantos [[minutos]] volveran a encontrarse en el punto de salida.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 12 },
      },
      {
        id: 'tn-u5-e4',
        title: 'Ejercicio 4: pozo y llaves',
        instructions: [
          'Una llave vierte `4` litros por minuto, otra `3` y una tercera `8`. Quieres que el pozo tenga la menor cantidad de litros posible para llenarse en un numero exacto de minutos con cualquiera de las tres.',
          'Escribe solo esa [[cantidad minima de litros]].',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 24 },
      },
      {
        id: 'tn-u5-e5',
        title: 'Ejercicio 5: rollos de tela',
        instructions: [
          'Tres rollos de tela de `30`, `48` y `72` metros se quieren cortar en pedazos iguales y de mayor longitud posible.',
          'Escribe solo el [[largo]] de cada pedazo.',
        ],
        placeholder: '',
        minLength: 1,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 6 },
      },
      {
        id: 'tn-u5-e6',
        title: 'Ejercicio 6: cierre final integrado',
        instructions: [
          'En una fabrica hay tres alarmas de mantenimiento que se activan cada `18`, `24` y `30` horas. Si hoy sonaron juntas, escribe solo despues de cuantas [[horas]] volveran a coincidir.',
          'Este cierre exige que decidas primero si el problema pide MCD o mcm y luego interpretes bien el resultado.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 360 },
      },
    ],
  },
];
