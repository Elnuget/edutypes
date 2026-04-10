import type { UnitLesson } from './unit-types';

export const integersUnitOneLessons: UnitLesson[] = [
  {
    id: 'ne-u1-l1',
    step: '1',
    title: 'Suma de enteros con el mismo signo',
    summary:
      'Empiezas usando enteros para leer saldos, variaciones y cambios acumulados, con contextos mas cercanos a bachillerato.',
    goal:
      'Entender [[+]], [[-]], suma de valores absolutos y conservar el signo cuando todos los cambios van en la misma direccion.',
    content: [
      {
        title: 'Tarjeta 1: enteros para leer cambios reales',
        body: [
          'Los [[enteros]] sirven para expresar saldos, temperaturas, alturas, inventarios y variaciones. `+` indica aumento o ganancia. `-` indica perdida, deuda o descenso.',
          'Aunque la regla parece basica, en problemas mas serios te permite leer procesos acumulados sin perder el sentido del signo.',
        ],
        code: '+18\n-42\n+125\n-310',
      },
      {
        title: 'Tarjeta 2: mismo signo, misma direccion',
        body: [
          'Si todos los sumandos tienen el mismo signo, primero sumas sus cantidades sin pensar aun en el signo.',
          'Despues conservas ese signo. Si todo fue ganancia, el resultado queda positivo. Si todo fue perdida, el resultado queda negativo.',
        ],
        code: '14 + 9 + 5 = 28\n-12 - 7 - 4 = -23',
      },
      {
        title: 'Tarjeta 3: en contextos reales la regla no cambia',
        body: [
          'Primero decides si todos los cambios van hacia arriba o hacia abajo.',
          'Despues sumas magnitudes. La historia cambia, la regla no.',
        ],
        code: 'Saldo: +125 + 63 + 40 = +228\nPerdidas: -180 - 95 - 60 = -335',
        embed: {
          title: 'Mini juego para reforzar numeros enteros',
          url: 'https://es.educaplay.com/recursos-educativos/6320545-los_numeros_enteros.html',
          sourceLabel: 'Educaplay',
          height: 420,
        },
      },
    ],
    exercises: [
      {
        id: 'ne-u1-c1-e1',
        title: 'Ejercicio 1: suma positiva corta',
        instructions: [
          'Escribe solo el resultado final de `14 + 9 + 5`.',
          'Todos los terminos empujan al lado positivo.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 28 },
      },
      {
        id: 'ne-u1-c1-e2',
        title: 'Ejercicio 2: saldo de caja',
        instructions: [
          'Una caja registra ingresos de `12`, `18` y `7` dolares en una hora.',
          'Escribe solo el [[saldo acumulado]] de ese tramo.',
        ],
        placeholder: '',
        minLength: 2,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 37 },
      },
      {
        id: 'ne-u1-c2-e1',
        title: 'Ejercicio 3: suma negativa corta',
        instructions: [
          'Escribe solo el resultado final de `-12 - 7 - 4`.',
          'Todos los cambios van hacia abajo, asi que el signo final debe mantenerse.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -23 },
      },
      {
        id: 'ne-u1-c2-e2',
        title: 'Ejercicio 4: egresos acumulados',
        instructions: [
          'Un proyecto registra egresos de `-45`, `-30` y `-25` dolares.',
          'Escribe solo el [[saldo total]] de esos egresos.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -100 },
      },
      {
        id: 'ne-u1-c3-e1',
        title: 'Ejercicio 5: ascenso de expedicion',
        instructions: [
          'En una expedicion un grupo asciende `180` m, luego `95` m y despues `60` m.',
          'Escribe solo la [[altura total ganada]] respecto del inicio.',
        ],
        placeholder: '',
        minLength: 3,
        checks: [],
        expectedAnswer: { kind: 'integer', value: 335 },
      },
      {
        id: 'ne-u1-c3-e2',
        title: 'Ejercicio 6: cierre con perdidas contables',
        instructions: [
          'Una microempresa cierra la semana con perdidas de `-125`, `-80`, `-95` y `-40` dolares.',
          'Escribe solo el [[resultado total]] de esas perdidas acumuladas.',
        ],
        placeholder: '',
        minLength: 4,
        checks: [],
        expectedAnswer: { kind: 'integer', value: -340 },
      },
    ],
  },
];
