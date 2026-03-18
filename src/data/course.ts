export type Unit = {
  id: string;
  number: string;
  title: string;
  focus: string;
  outcome: string;
  contents: string[];
};

export const units: Unit[] = [
  {
    id: 'unit-01',
    number: '01',
    title: 'Fundamentos del lenguaje',
    focus: 'La base mental correcta para empezar sin vacios.',
    outcome: 'Comprenderas que es TypeScript, como se ejecuta y por que mejora JavaScript.',
    contents: [
      'Que es TypeScript y como se integra con JavaScript',
      'Configuracion inicial, compilacion y tsconfig',
      'Tipos primitivos, inferencia y anotaciones',
      'Funciones, objetos, arrays y tuplas',
    ],
  },
  {
    id: 'unit-02',
    number: '02',
    title: 'Modelado de tipos',
    focus: 'Aprender a describir datos reales con precision.',
    outcome: 'Sabras crear contratos claros y reutilizables para datos y funciones.',
    contents: [
      'Type aliases e interfaces',
      'Union types, literal types e intersection types',
      'Enums y alternativas modernas',
      'Narrowing, type guards y discriminated unions',
    ],
  },
  {
    id: 'unit-03',
    number: '03',
    title: 'Objetos, clases y arquitectura',
    focus: 'TypeScript aplicado a codigo escalable.',
    outcome: 'Podras estructurar modulos y clases sin perder seguridad de tipos.',
    contents: [
      'Clases, modificadores de acceso y readonly',
      'Herencia, composicion e implementacion de interfaces',
      'Getters, setters y metodos estaticos',
      'Modulos, imports, exports y organizacion del proyecto',
    ],
  },
  {
    id: 'unit-04',
    number: '04',
    title: 'Tipado avanzado',
    focus: 'La parte que separa usar TypeScript de dominarlo.',
    outcome: 'Entenderas como construir tipos complejos que escalan con tu aplicacion.',
    contents: [
      'Generics y restricciones',
      'Utility types: Partial, Pick, Omit, Record y mas',
      'Mapped types y conditional types',
      'Infer, keyof, typeof e indexed access types',
    ],
  },
  {
    id: 'unit-05',
    number: '05',
    title: 'Asincronia y APIs',
    focus: 'Tipar flujo real de datos en aplicaciones modernas.',
    outcome: 'Sabras consumir APIs, manejar errores y tipar promesas correctamente.',
    contents: [
      'Promises, async/await y tipado de respuestas',
      'Fetch y contratos de datos remotos',
      'Manejo de errores con unknown',
      'Validacion de datos y estrategias para runtime safety',
    ],
  },
  {
    id: 'unit-06',
    number: '06',
    title: 'TypeScript con React',
    focus: 'Llevar el tipado a interfaces modernas.',
    outcome: 'Podras crear componentes robustos, props seguras y hooks bien tipados.',
    contents: [
      'Props, children y componentes reutilizables',
      'Eventos, formularios y estados en React + TypeScript',
      'Tipado de hooks personalizados',
      'Patrones para context, reducers y componentes genericos',
    ],
  },
  {
    id: 'unit-07',
    number: '07',
    title: 'Tooling profesional',
    focus: 'Trabajar como en un entorno real de desarrollo.',
    outcome: 'Tendras una base solida para mantener calidad, orden y confianza al escalar.',
    contents: [
      'ESLint, Prettier y buenas practicas',
      'Path aliases y configuracion avanzada',
      'Testing con tipos seguros',
      'Build, bundle y despliegue',
    ],
  },
  {
    id: 'unit-08',
    number: '08',
    title: 'Proyecto final experto',
    focus: 'Cerrar el curso demostrando dominio real.',
    outcome: 'Construiras una aplicacion completa donde TypeScript sea parte del diseno, no un agregado.',
    contents: [
      'Arquitectura del proyecto final',
      'Tipado de dominio y flujos completos',
      'Refactorizacion guiada y deteccion de errores',
      'Checklist final de competencias de TypeScript',
    ],
  },
];

export const highlights = [
  'Ruta guiada desde cero hasta nivel profesional',
  'Unidades ordenadas para aprender sin huecos conceptuales',
  'Ejemplos reales orientados a proyectos',
  'Cierre con proyecto final para validar dominio completo',
];
