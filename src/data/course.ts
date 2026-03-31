import type { UnitLesson } from './unit-types';
import { javascriptUnitFourLessons } from './javascript-unit-four';
import { javascriptUnitOneLessons } from './javascript-unit-one';
import { javascriptUnitThreeLessons } from './javascript-unit-three';
import { javascriptUnitTwoLessons } from './javascript-unit-two';
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
};

export const courses: CourseDefinition[] = [
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
