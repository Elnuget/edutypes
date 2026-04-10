import { entrepreneurshipUnitOneLessons } from './entrepreneurship-unit-one';
import type { UnitLesson } from './unit-types';
import { javascriptUnitFourLessons } from './javascript-unit-four';
import { javascriptUnitOneLessons } from './javascript-unit-one';
import { javascriptUnitThreeLessons } from './javascript-unit-three';
import { javascriptUnitTwoLessons } from './javascript-unit-two';
import { integersUnitFiveLessons } from './integers-unit-five';
import { integersUnitFourLessons } from './integers-unit-four';
import { integersUnitOneLessons } from './integers-unit-one';
import { integersUnitThreeLessons } from './integers-unit-three';
import { integersUnitTwoLessons } from './integers-unit-two';
import { numberTheoryUnitFiveLessons } from './number-theory-unit-five';
import { numberTheoryUnitFourLessons } from './number-theory-unit-four';
import { numberTheoryUnitOneLessons } from './number-theory-unit-one';
import { numberTheoryUnitThreeLessons } from './number-theory-unit-three';
import { numberTheoryUnitTwoLessons } from './number-theory-unit-two';
import { nodeUnitOneLessons } from './node-unit-one';
import { nodeUnitThreeLessons } from './node-unit-three';
import { nodeUnitTwoLessons } from './node-unit-two';
import { rationalUnitFiveLessons } from './rational-unit-five';
import { rationalUnitFourLessons } from './rational-unit-four';
import { rationalUnitOneLessons } from './rational-unit-one';
import { rationalUnitSixLessons } from './rational-unit-six';
import { rationalUnitThreeLessons } from './rational-unit-three';
import { rationalUnitTwoLessons } from './rational-unit-two';
import { reactUnitOneLessons } from './react-unit-one';
import { reactUnitThreeLessons } from './react-unit-three';
import { reactUnitTwoLessons } from './react-unit-two';
import { unitOneLessons } from './unit-one';
import { unitThreeLessons } from './unit-three';
import { unitTwoLessons } from './unit-two';

export type CourseUnitDefinition = {
  id: string;
  slug: string;
  number: string;
  label: string;
  title: string;
  focus: string;
  outcome: string;
  contents: string[];
  lessons: UnitLesson[];
  storageKey: string;
};

export type CourseDefinition = {
  id: string;
  title: string;
  eyebrow: string;
  heroTitle: string;
  description: string;
  courseSummary: string;
  tags: string[];
  validationLabel: string;
  units: CourseUnitDefinition[];
  certificate?: {
    institutionName: string;
    issuerName: string;
    issuerRole: string;
    logoSrc?: string;
    storageKey: string;
  };
};

const udlaLogoSrc = new URL('../assets/udla-logo-red.png', import.meta.url).href;

export const courses: CourseDefinition[] = [
  {
    id: 'emprendimiento',
    title: 'Emprendimiento',
    eyebrow: 'Curso de emprendimiento',
    heroTitle: 'Conoce a tu cliente ideal antes de venderle a todo el mundo.',
    description:
      'Unidad guiada para entender buyer persona, recopilar informacion, clasificar variables y construir un perfil util para tu estrategia.',
    courseSummary:
      'Curso de emprendimiento con una unidad corta sobre buyer persona, respuesta escrita guiada y certificado final.',
    tags: ['Buyer persona', 'Respuesta escrita', 'Certificado final'],
    validationLabel: 'Revision de respuesta',
    certificate: {
      institutionName: 'Universidad de Las Americas (UDLA)',
      issuerName: 'Paola Guevara',
      issuerRole: 'Ing.',
      logoSrc: udlaLogoSrc,
      storageKey: 'edutypes.emprendimiento.certificate-name',
    },
    units: [
      {
        id: 'entrepreneurship-unit-01',
        slug: 'unidad-1',
        number: '01',
        label: 'Unidad 1',
        title: 'Conociendo a tu cliente ideal',
        focus: 'Entender buyer persona y convertirlo en una herramienta real para tu emprendimiento.',
        outcome:
          'Podras definir un buyer persona, reunir informacion util y construir una mini ficha coherente de cliente ideal.',
        contents: [
          'Introduccion al buyer persona',
          'Metodos para recopilar informacion',
          'Variables clave del cliente ideal',
          'Construccion paso a paso del perfil',
        ],
        lessons: entrepreneurshipUnitOneLessons,
        storageKey: 'edutypes.entrepreneurship.unit-01.progress',
      },
    ],
  },
  {
    id: 'teoria-numeros',
    title: 'Teoria de Numeros',
    eyebrow: 'Curso de matematica',
    heroTitle: 'Aprende divisibilidad, primos, MCD y mcm con problemas de colegio.',
    description:
      'Curso basado en el bloque de Teoria de numeros de `matesimp2.pdf` entre las paginas 58 y 68, con avance lento al inicio y aplicaciones mas exigentes al final.',
    courseSummary:
      'Curso de teoria de numeros para estudiantes de colegio, centrado en divisibilidad, factorizacion, maximo comun divisor, minimo comun multiplo y problemas aplicados.',
    tags: ['Divisibilidad', 'Problemas aplicados', 'Basado en el libro'],
    validationLabel: 'Revision matematica',
    units: [
      {
        id: 'number-theory-unit-01',
        slug: 'unidad-1',
        number: '01',
        label: 'Unidad 1',
        title: 'Divisibilidad y criterios',
        focus: 'Decidir rapido cuando una division es exacta y cuando conviene usar criterios.',
        outcome:
          'Podras reconocer divisibilidad, multiplos y criterios basicos sin hacer toda la division.',
        contents: [
          'Residuo y division exacta',
          'Multiplos y numeros compuestos',
          'Criterios para 3, 4, 5 y 6',
          'Aplicaciones cortas de empaque',
        ],
        lessons: numberTheoryUnitOneLessons,
        storageKey: 'edutypes.number-theory.unit-01.progress',
      },
      {
        id: 'number-theory-unit-02',
        slug: 'unidad-2',
        number: '02',
        label: 'Unidad 2',
        title: 'Primos y factorizacion',
        focus: 'Desarmar numeros en sus bloques primos y leer su estructura interna.',
        outcome:
          'Podras distinguir numeros primos de compuestos y escribir factorizaciones primas ordenadas.',
        contents: [
          'Primos y compuestos',
          'Criba de Eratostenes',
          'Descomposicion en factores primos',
          'Factorizaciones cada vez mas largas',
        ],
        lessons: numberTheoryUnitTwoLessons,
        storageKey: 'edutypes.number-theory.unit-02.progress',
      },
      {
        id: 'number-theory-unit-03',
        slug: 'unidad-3',
        number: '03',
        label: 'Unidad 3',
        title: 'Maximo comun divisor',
        focus: 'Encontrar la medida comun mas grande en repartos y agrupaciones.',
        outcome:
          'Podras calcular el MCD y usarlo para repartir, agrupar o cortar con el mayor tamano posible.',
        contents: [
          'Que mide el MCD',
          'MCD por factores primos',
          'Primos relativos',
          'Aplicaciones de reparto exacto',
        ],
        lessons: numberTheoryUnitThreeLessons,
        storageKey: 'edutypes.number-theory.unit-03.progress',
      },
      {
        id: 'number-theory-unit-04',
        slug: 'unidad-4',
        number: '04',
        label: 'Unidad 4',
        title: 'Minimo comun multiplo',
        focus: 'Encontrar la primera coincidencia entre ciclos y repeticiones.',
        outcome:
          'Podras calcular el mcm y usarlo en problemas de coincidencia, horarios y patrones repetidos.',
        contents: [
          'Que mide el mcm',
          'mcm por factores primos',
          'Diferencia entre MCD y mcm',
          'Coincidencias y ciclos',
        ],
        lessons: numberTheoryUnitFourLessons,
        storageKey: 'edutypes.number-theory.unit-04.progress',
      },
      {
        id: 'number-theory-unit-05',
        slug: 'unidad-5',
        number: '05',
        label: 'Unidad 5',
        title: 'Aplicaciones integradas',
        focus: 'Elegir entre MCD y mcm en problemas reales de corte, tiempo y capacidad.',
        outcome:
          'Podras interpretar un problema, decidir el metodo correcto y leer el resultado en su contexto.',
        contents: [
          'Cuando usar MCD',
          'Cuando usar mcm',
          'Interpretacion del resultado',
          'Cierre con problemas del libro',
        ],
        lessons: numberTheoryUnitFiveLessons,
        storageKey: 'edutypes.number-theory.unit-05.progress',
      },
    ],
  },
  {
    id: 'numeros-racionales',
    title: 'Numeros Racionales',
    eyebrow: 'Curso de matematica',
    heroTitle: 'Entiende fracciones, opera con sentido y cierra con problemas de colegio mas serios.',
    description:
      'Curso basado en el bloque de Numeros Racionales de `matesimp2.pdf` entre las paginas 70 y 90, con tarjetas cortas, ejemplos visibles y problemas cada vez mas exigentes.',
    courseSummary:
      'Curso de racionales para bachillerato con lectura de fracciones, conversiones, equivalencia, operaciones y aplicaciones guiadas.',
    tags: ['Fracciones', 'Problemas aplicados', 'Basado en el libro'],
    validationLabel: 'Revision matematica',
    units: [
      {
        id: 'rational-unit-01',
        slug: 'unidad-1',
        number: '01',
        label: 'Unidad 1',
        title: 'Fraccion comun y lectura del todo',
        focus: 'Traducir parte y total a una fraccion correcta desde el inicio.',
        outcome:
          'Podras identificar numerador, denominador y escribir fracciones simplificadas en problemas de parte/todo.',
        contents: [
          'Numerador y denominador',
          'Parte y total',
          'Unidad del problema',
          'Fracciones simplificadas',
        ],
        lessons: rationalUnitOneLessons,
        storageKey: 'edutypes.rational.unit-01.progress',
      },
      {
        id: 'rational-unit-02',
        slug: 'unidad-2',
        number: '02',
        label: 'Unidad 2',
        title: 'Propias, impropias y conversiones',
        focus: 'Reconocer la forma de una fraccion y pasar de una representacion a otra.',
        outcome:
          'Podras clasificar fracciones y convertir entre impropias y mixtas sin perder el valor.',
        contents: [
          'Propia, impropia y mixta',
          'Impropia a mixta',
          'Mixta a impropia',
          'Lectura estructurada',
        ],
        lessons: rationalUnitTwoLessons,
        storageKey: 'edutypes.rational.unit-02.progress',
      },
      {
        id: 'rational-unit-03',
        slug: 'unidad-3',
        number: '03',
        label: 'Unidad 3',
        title: 'Equivalentes, simplificacion y recta',
        focus: 'Comparar valores, reducir fracciones y leer racionales sobre la recta numerica.',
        outcome:
          'Podras decidir equivalencia, simplificar por factores comunes y convertir impropias para ubicarlas mejor.',
        contents: [
          'Fracciones equivalentes',
          'Simplificacion',
          'Irreducible',
          'Recta numerica',
        ],
        lessons: rationalUnitThreeLessons,
        storageKey: 'edutypes.rational.unit-03.progress',
      },
      {
        id: 'rational-unit-04',
        slug: 'unidad-4',
        number: '04',
        label: 'Unidad 4',
        title: 'Suma y resta de racionales',
        focus: 'Resolver operaciones y problemas con mismo o distinto denominador.',
        outcome:
          'Podras usar denominador comun y leer lo que sobra o falta en contextos reales.',
        contents: [
          'Igual denominador',
          'mcm de denominadores',
          'Mixtas y fracciones',
          'Problemas de varias etapas',
        ],
        lessons: rationalUnitFourLessons,
        storageKey: 'edutypes.rational.unit-04.progress',
      },
      {
        id: 'rational-unit-05',
        slug: 'unidad-5',
        number: '05',
        label: 'Unidad 5',
        title: 'Multiplicacion y aplicaciones',
        focus: 'Aplicar fracciones sobre cantidades reales y no solo sobre simbolos.',
        outcome:
          'Podras multiplicar racionales y calcular porciones de litros, dinero, personas o distancias.',
        contents: [
          'Producto de fracciones',
          'Simplificar a tiempo',
          'Fraccion de una cantidad',
          'Problemas aplicados',
        ],
        lessons: rationalUnitFiveLessons,
        storageKey: 'edutypes.rational.unit-05.progress',
      },
      {
        id: 'rational-unit-06',
        slug: 'unidad-6',
        number: '06',
        label: 'Unidad 6',
        title: 'Division, agrupacion y cierre',
        focus: 'Cerrar el curso con division, parentesis y problemas de razon o reparto.',
        outcome:
          'Podras dividir racionales, interpretar cuantas veces cabe una cantidad y resolver expresiones agrupadas.',
        contents: [
          'Reciproco',
          'Cuantas veces cabe',
          'Parentesis y orden',
          'Cierre con problemas del libro',
        ],
        lessons: rationalUnitSixLessons,
        storageKey: 'edutypes.rational.unit-06.progress',
      },
    ],
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    eyebrow: 'Curso guiado',
    heroTitle: 'Aprende TypeScript con pasos pequenos y mucha practica.',
    description:
      'Empieza desde las piezas base del lenguaje y avanza por tipos, objetos y arquitectura sin salir del flujo corto de EduTypes.',
    courseSummary: 'Curso de TypeScript con avance por unidades cortas, ejercicios validados y progreso guardado.',
    tags: ['Sin pegar codigo', 'Validacion precisa', 'Progreso guardado'],
    validationLabel: 'Compilacion TypeScript',
    units: [
      {
        id: 'typescript-unit-01',
        slug: 'unidad-1',
        number: '01',
        label: 'Unidad 1',
        title: 'Fundamentos del lenguaje',
        focus: 'La base mental correcta para empezar sin vacios.',
        outcome: 'Comprenderas que es TypeScript, como se escribe y como validar tus primeras piezas.',
        contents: [
          'Tipos primitivos, anotaciones y variables',
          'Funciones, parametros y retornos',
          'Objetos, arrays y tuplas',
          'Salida visible en consola',
        ],
        lessons: unitOneLessons,
        storageKey: 'edutypes.typescript.unit-01.progress',
      },
      {
        id: 'typescript-unit-02',
        slug: 'unidad-2',
        number: '02',
        label: 'Unidad 2',
        title: 'Modelado de tipos',
        focus: 'Aprender a describir datos reales con precision.',
        outcome: 'Sabras crear contratos reutilizables para datos y funciones.',
        contents: [
          'Type aliases e interfaces',
          'Union types y literal types',
          'Narrowing y type guards',
          'Modelado guiado con feedback preciso',
        ],
        lessons: unitTwoLessons,
        storageKey: 'edutypes.typescript.unit-02.progress',
      },
      {
        id: 'typescript-unit-03',
        slug: 'unidad-3',
        number: '03',
        label: 'Unidad 3',
        title: 'Objetos, clases y arquitectura',
        focus: 'TypeScript aplicado a codigo escalable.',
        outcome: 'Podras organizar modulos, clases y piezas reutilizables con seguridad de tipos.',
        contents: [
          'Clases y modificadores de acceso',
          'Herencia y composicion',
          'Getters, setters y metodos estaticos',
          'Modulos e imports',
        ],
        lessons: unitThreeLessons,
        storageKey: 'edutypes.typescript.unit-03.progress',
      },
    ],
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    eyebrow: 'Curso nuevo',
    heroTitle: 'Aprende JavaScript escribiendo, probando y viendo resultado rapido.',
    description:
      'Curso base para arrancar con variables, funciones, objetos, condiciones y repeticiones usando pasos muy cortos y salida visible.',
    courseSummary: 'Curso de JavaScript para principiantes con bloques cortos, consola visible y progreso secuencial.',
    tags: ['Mobile first', 'Tarjetas cortas', 'Consola visible'],
    validationLabel: 'Sintaxis de JavaScript',
    units: [
      {
        id: 'javascript-unit-01',
        slug: 'unidad-1',
        number: '01',
        label: 'Unidad 1',
        title: 'Variables, funciones y datos base',
        focus: 'Aprender la forma minima de escribir codigo que ya hace algo visible.',
        outcome: 'Podras crear datos, funciones simples y leer objetos y arrays sin perderte en la sintaxis.',
        contents: [
          'const, let y =',
          'function, parametros y return',
          'Objetos, arrays y propiedades',
          'console.log para ver salida',
        ],
        lessons: javascriptUnitOneLessons,
        storageKey: 'edutypes.javascript.unit-01.progress',
      },
      {
        id: 'javascript-unit-02',
        slug: 'unidad-2',
        number: '02',
        label: 'Unidad 2',
        title: 'Decisiones y repeticiones',
        focus: 'Dar control al flujo para decidir y repetir sin codigo largo.',
        outcome: 'Sabras comparar valores, usar if y recorrer listas con for...of mostrando resultados en consola.',
        contents: [
          'Booleanos y comparaciones',
          'if con bloques cortos',
          'for...of para recorrer arrays',
          'Conteo y salida visible',
        ],
        lessons: javascriptUnitTwoLessons,
        storageKey: 'edutypes.javascript.unit-02.progress',
      },
      {
        id: 'javascript-unit-03',
        slug: 'unidad-3',
        number: '03',
        label: 'Unidad 3',
        title: 'Lectura de datos y arrays utiles',
        focus: 'Leer propiedades, cambiar listas y producir texto visible con funciones pequenas.',
        outcome: 'Podras leer objetos dentro de funciones, usar push y unir arrays con join.',
        contents: [
          'Funciones que leen objetos',
          'Propiedades con punto dentro de funciones',
          'push para agregar elementos',
          'join para crear un texto final',
        ],
        lessons: javascriptUnitThreeLessons,
        storageKey: 'edutypes.javascript.unit-03.progress',
      },
      {
        id: 'javascript-unit-04',
        slug: 'unidad-4',
        number: '04',
        label: 'Unidad 4',
        title: 'Decisiones en funciones y cierre',
        focus: 'Cerrar el curso base usando decisiones, conteo y un mini flujo completo.',
        outcome: 'Sabras devolver mensajes segun una condicion y cerrar un recorrido con conteo visible.',
        contents: [
          'if dentro de funciones',
          'Dos returns para dos caminos',
          'Contador con total = total + 1',
          'Mini cierre con countLessons',
        ],
        lessons: javascriptUnitFourLessons,
        storageKey: 'edutypes.javascript.unit-04.progress',
      },
    ],
  },
  {
    id: 'react',
    title: 'React',
    eyebrow: 'Curso nuevo',
    heroTitle: 'Aprende React creando componentes pequenos, claros y reutilizables.',
    description:
      'Curso guiado para empezar con JSX, componentes, props, eventos, estado y listas sin salir del flujo corto de EduTypes.',
    courseSummary: 'Curso de React con modulos cortos, ejercicios secuenciales y progreso guardado por unidad.',
    tags: ['JSX paso a paso', 'Estado guiado', 'Progreso guardado'],
    validationLabel: 'Sintaxis de React',
    units: [
      {
        id: 'react-unit-01',
        slug: 'unidad-1',
        number: '01',
        label: 'Unidad 1',
        title: 'JSX y composicion base',
        focus: 'Aprender la forma minima de una pantalla React sin ruido.',
        outcome: 'Podras escribir JSX, crear componentes y componer piezas pequenas.',
        contents: [
          'Etiquetas JSX y cierre correcto',
          'function como componente',
          'Fragmentos y contenedores',
          'Composicion de pantalla corta',
        ],
        lessons: reactUnitOneLessons,
        storageKey: 'edutypes.react.unit-01.progress',
      },
      {
        id: 'react-unit-02',
        slug: 'unidad-2',
        number: '02',
        label: 'Unidad 2',
        title: 'Props y eventos',
        focus: 'Mover datos y acciones entre componentes con la sintaxis correcta.',
        outcome: 'Sabras pasar props, leerlas con claridad y conectar eventos simples.',
        contents: [
          'props y lectura con punto',
          'Llaves dentro de JSX',
          'Destructuring de props',
          'onClick con referencia de funcion',
        ],
        lessons: reactUnitTwoLessons,
        storageKey: 'edutypes.react.unit-02.progress',
      },
      {
        id: 'react-unit-03',
        slug: 'unidad-3',
        number: '03',
        label: 'Unidad 3',
        title: 'Estado y listas',
        focus: 'Hacer interfaces que cambian y repiten datos con una base segura.',
        outcome: 'Podras usar useState, actualizar valores y renderizar listas con key.',
        contents: [
          'React.useState paso a paso',
          'Funciones que actualizan estado',
          'map para listas',
          'key y estructuras repetidas',
        ],
        lessons: reactUnitThreeLessons,
        storageKey: 'edutypes.react.unit-03.progress',
      },
    ],
  },
  {
    id: 'nodejs',
    title: 'Node.js',
    eyebrow: 'Curso nuevo',
    heroTitle: 'Aprende Node.js creando scripts, modulos y un servidor pequeno.',
    description:
      'Curso base para entrar a Node.js con require, process, fs, module.exports y HTTP usando pasos cortos y mucha repeticion.',
    courseSummary: 'Curso de Node.js con modulos cortos, validacion de sintaxis y progreso secuencial.',
    tags: ['Scripts cortos', 'Modulos Node', 'Servidor basico'],
    validationLabel: 'Sintaxis de Node.js',
    units: [
      {
        id: 'nodejs-unit-01',
        slug: 'unidad-1',
        number: '01',
        label: 'Unidad 1',
        title: 'Scripts y entrada del proceso',
        focus: 'Entender como arranca un script Node y de donde salen sus datos.',
        outcome: 'Podras usar require, path y process.argv para scripts simples.',
        contents: [
          'require para cargar modulos',
          'path.join para rutas cortas',
          'process.argv para argumentos',
          'Consola visible',
        ],
        lessons: nodeUnitOneLessons,
        storageKey: 'edutypes.nodejs.unit-01.progress',
      },
      {
        id: 'nodejs-unit-02',
        slug: 'unidad-2',
        number: '02',
        label: 'Unidad 2',
        title: 'Modulos y archivos',
        focus: 'Compartir funciones y leer datos locales con forma clara.',
        outcome: 'Sabras exportar funciones, leer archivos y convertir JSON a objetos.',
        contents: [
          'module.exports',
          'Funciones reutilizables',
          'fs.readFileSync',
          'JSON.parse y propiedades',
        ],
        lessons: nodeUnitTwoLessons,
        storageKey: 'edutypes.nodejs.unit-02.progress',
      },
      {
        id: 'nodejs-unit-03',
        slug: 'unidad-3',
        number: '03',
        label: 'Unidad 3',
        title: 'Servidor HTTP y rutas',
        focus: 'Cerrar el curso levantando un servidor y respondiendo segun la ruta.',
        outcome: 'Podras crear un servidor basico y manejar rutas con request.url.',
        contents: [
          'http.createServer',
          'response.end',
          'listen y puertos',
          'if con request.url',
        ],
        lessons: nodeUnitThreeLessons,
        storageKey: 'edutypes.nodejs.unit-03.progress',
      },
    ],
  },
  {
    id: 'numeros-enteros',
    title: 'Numeros Enteros',
    eyebrow: 'Curso de matematica',
    heroTitle: 'Aprende enteros con pasos claros, ritmo gradual y problemas mas cercanos a bachillerato.',
    description:
      'Curso basado en el bloque de Numeros Enteros del libro `matesimp2.pdf`, reescrito para estudiantes de colegio con contextos de balance, trayectorias, produccion y reparto.',
    courseSummary:
      'Curso de enteros para bachillerato con avance guiado, problemas mas maduros y ejercicios de respuesta entera.',
    tags: ['Bachillerato', 'Resultados enteros', 'Basado en el libro'],
    validationLabel: 'Revision matematica',
    units: [
      {
        id: 'integers-unit-01',
        slug: 'unidad-1',
        number: '01',
        label: 'Unidad 1',
        title: 'Suma de enteros',
        focus: 'Entender positivos, negativos y suma con el mismo signo.',
        outcome: 'Podras sumar enteros con el mismo signo y mantener el signo correcto en el resultado.',
        contents: [
          'Positivos y negativos',
          'Suma con el mismo signo',
          'Valores absolutos',
          'Cuentas grandes con la misma regla',
        ],
        lessons: integersUnitOneLessons,
        storageKey: 'edutypes.integers.unit-01.progress',
      },
      {
        id: 'integers-unit-02',
        slug: 'unidad-2',
        number: '02',
        label: 'Unidad 2',
        title: 'Resta y mezcla de signos',
        focus: 'Comparar cantidades y decidir el signo final sin perderte.',
        outcome: 'Podras restar enteros y resolver mezclas cortas de positivos y negativos.',
        contents: [
          'Resta basica',
          'Valor absoluto',
          'Reunion de signos iguales',
          'Cierre de cuentas mixtas',
        ],
        lessons: integersUnitTwoLessons,
        storageKey: 'edutypes.integers.unit-02.progress',
      },
      {
        id: 'integers-unit-03',
        slug: 'unidad-3',
        number: '03',
        label: 'Unidad 3',
        title: 'Signos de agrupacion',
        focus: 'Quitar parentesis, corchetes y llaves sin cambiar mal los signos.',
        outcome: 'Podras simplificar signos de agrupacion y resolver operaciones enteras paso a paso.',
        contents: [
          'Parentesis con signo positivo',
          'Parentesis con signo negativo',
          'Simplificar antes de operar',
          'Cuentas agrupadas mas largas',
        ],
        lessons: integersUnitThreeLessons,
        storageKey: 'edutypes.integers.unit-03.progress',
      },
      {
        id: 'integers-unit-04',
        slug: 'unidad-4',
        number: '04',
        label: 'Unidad 4',
        title: 'Multiplicacion de enteros',
        focus: 'Pasar de suma repetida a reglas de signos y multiplicacion con agrupacion.',
        outcome: 'Podras multiplicar enteros y aplicar correctamente las leyes de los signos.',
        contents: [
          'Producto como suma repetida',
          'Factores y producto',
          'Leyes de signos',
          'Multiplicacion con agrupacion',
        ],
        lessons: integersUnitFourLessons,
        storageKey: 'edutypes.integers.unit-04.progress',
      },
      {
        id: 'integers-unit-05',
        slug: 'unidad-5',
        number: '05',
        label: 'Unidad 5',
        title: 'Division y cierre',
        focus: 'Entender cociente, residuo y usar la division en un problema real.',
        outcome: 'Podras distinguir cociente y residuo y decidir cuando hace falta un grupo mas.',
        contents: [
          'Dividendo y divisor',
          'Cociente y residuo',
          'Division exacta',
          'Aplicacion con presentaciones',
        ],
        lessons: integersUnitFiveLessons,
        storageKey: 'edutypes.integers.unit-05.progress',
      },
    ],
  },
];

export const allCourseUnits = courses.flatMap((course) => course.units);

export function getCourseDefinition(courseId: string) {
  return courses.find((course) => course.id === courseId) ?? null;
}

export function getCourseUnit(courseId: string, unitSlug: string) {
  const course = getCourseDefinition(courseId);

  if (!course) {
    return null;
  }

  return course.units.find((unit) => unit.slug === unitSlug) ?? null;
}
