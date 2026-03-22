import type { UnitLesson } from './unit-types';

export const unitThreeLessons: UnitLesson[] = [
  {
    id: 'u3-l1',
    step: '1',
    title: 'Class y new',
    summary: 'Empiezas viendo que es una clase y como crear una instancia real.',
    goal: 'Entender [[class]], propiedades, [[new]] e instancia.',
    content: [
      {
        title: 'Tarjeta 1: la palabra class',
        body: [
          '[[class]] crea un molde. Ese molde describe como sera un objeto futuro.',
          'Despues de [[class]] va el nombre. Las llaves `{}` guardan lo que vive dentro de la clase.',
        ],
        code:
          "class StudentCard {\n}",
      },
      {
        title: 'Tarjeta 2: propiedades dentro de la clase',
        body: [
          "Dentro de una clase puedes escribir propiedades. En `name: string = 'Ana';`, [[name]] es la propiedad, `:` une con el tipo y `=` pone un valor inicial.",
          'Esas propiedades pertenecen a cada instancia que nazca de la clase.',
        ],
        code:
          "class StudentCard {\n  name: string = 'Ana';\n  level: number = 1;\n}",
      },
      {
        title: 'Tarjeta 3: crear una instancia con new',
        body: [
          '[[new]] crea un objeto real a partir de la clase. A la derecha escribes el nombre de la clase seguido de `()`.',
          'La variable de la izquierda guarda la instancia creada.',
        ],
        code:
          "class StudentCard {\n  name: string = 'Ana';\n  level: number = 1;\n}\n\nconst studentCard = new StudentCard();",
      },
      {
        title: 'Tarjeta 4: ver la instancia en consola',
        body: [
          'Despues puedes mostrar una propiedad con [[console.log]].',
          'Asi ves el valor real de la instancia y no solo el molde de la clase.',
        ],
        code:
          "class StudentCard {\n  name: string = 'Ana';\n  level: number = 1;\n}\n\nconst studentCard = new StudentCard();\nconsole.log(studentCard.name);\nconsole.log(studentCard.level);",
      },
    ],
    exercises: [
      {
        id: 'u3-l1-c1-e1',
        title: 'Ejercicio 1: clase vacia',
        instructions: [
          'Escribe `class StudentCard {}`.',
          'Aqui solo practicas la forma minima de una clase.',
        ],
        placeholder: "class StudentCard {\n}",
        minLength: 20,
        checks: [
          {
            kind: 'includes',
            needle: 'class studentcard',
            success: 'creaste la clase `StudentCard`',
            error: 'falta `class StudentCard {}`.',
          },
        ],
      },
      {
        id: 'u3-l1-c1-e2',
        title: 'Ejercicio 2: otra clase vacia',
        instructions: [
          'Escribe `class LessonCard {}`.',
          'La idea es repetir la misma forma con otro nombre.',
        ],
        placeholder: '',
        minLength: 18,
        checks: [
          {
            kind: 'includes',
            needle: 'class lessoncard',
            success: 'creaste la clase `LessonCard`',
            error: 'falta `class LessonCard {}`.',
          },
        ],
      },
      {
        id: 'u3-l1-c2-e1',
        title: 'Ejercicio 3: propiedades iniciales',
        instructions: [
          'Escribe `StudentCard` con `name: string = \'Ana\';` y `level: number = 1;`.',
          'Aqui practicas propiedades con tipo y valor inicial.',
        ],
        placeholder:
          "class StudentCard {\n  name: string = 'Ana';\n  level: number = 1;\n}",
        minLength: 58,
        checks: [
          {
            kind: 'includes',
            needle: 'name: string =',
            success: 'agregaste `name` con tipo y valor',
            error: 'falta `name: string = ...`.',
          },
          {
            kind: 'includes',
            needle: 'level: number =',
            success: 'agregaste `level` con tipo y valor',
            error: 'falta `level: number = ...`.',
          },
        ],
      },
      {
        id: 'u3-l1-c2-e2',
        title: 'Ejercicio 4: otra clase con propiedades',
        instructions: [
          'Escribe `LessonCard` con `title: string = \'TS\';` y `duration: number = 10;`.',
          'Repite la misma idea con otras propiedades.',
        ],
        placeholder: '',
        minLength: 58,
        checks: [
          {
            kind: 'includes',
            needle: 'title: string =',
            success: 'agregaste `title` con tipo y valor',
            error: 'falta `title: string = ...`.',
          },
          {
            kind: 'includes',
            needle: 'duration: number =',
            success: 'agregaste `duration` con tipo y valor',
            error: 'falta `duration: number = ...`.',
          },
        ],
      },
      {
        id: 'u3-l1-c3-e1',
        title: 'Ejercicio 5: instancia con new',
        instructions: [
          'Escribe `const studentCard = new StudentCard();`.',
          'Aqui solo practicas la creacion de la instancia.',
        ],
        placeholder:
          "class StudentCard {\n  name: string = 'Ana';\n  level: number = 1;\n}\n\nconst studentCard = new StudentCard();",
        minLength: 72,
        checks: [
          {
            kind: 'includes',
            needle: 'const studentcard = new studentcard()',
            success: 'creaste la instancia con `new`',
            error: 'falta `const studentCard = new StudentCard();`.',
          },
        ],
      },
      {
        id: 'u3-l1-c3-e2',
        title: 'Ejercicio 6: otra instancia',
        instructions: [
          'Escribe `const lessonCard = new LessonCard();`.',
          'Repite el mismo patron con otra clase.',
        ],
        placeholder: '',
        minLength: 38,
        checks: [
          {
            kind: 'includes',
            needle: 'const lessoncard = new lessoncard()',
            success: 'creaste `lessonCard` con `new`',
            error: 'falta `const lessonCard = new LessonCard();`.',
          },
        ],
      },
      {
        id: 'u3-l1-c4-e1',
        title: 'Ejercicio 7: consola con name',
        instructions: [
          'Escribe `studentCard` completo y luego usa `console.log(studentCard.name);`.',
          'La consola debe mostrar una propiedad de la instancia.',
        ],
        placeholder:
          "class StudentCard {\n  name: string = 'Ana';\n  level: number = 1;\n}\n\nconst studentCard = new StudentCard();\nconsole.log(studentCard.name);",
        minLength: 104,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(studentcard.name)',
            success: 'mostraste `studentCard.name` en consola',
            error: 'falta `console.log(studentCard.name);`.',
          },
        ],
      },
      {
        id: 'u3-l1-c4-e2',
        title: 'Ejercicio 8: consola con level',
        instructions: [
          'Escribe `studentCard` completo y luego usa `console.log(studentCard.level);`.',
          'La consola debe mostrar el nivel real.',
        ],
        placeholder: '',
        minLength: 104,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(studentcard.level)',
            success: 'mostraste `studentCard.level` en consola',
            error: 'falta `console.log(studentCard.level);`.',
          },
        ],
      },
    ],
  },
  {
    id: 'u3-l2',
    step: '2',
    title: 'Constructor y this',
    summary: 'Ahora la clase recibe datos al nacer en vez de usar siempre valores fijos.',
    goal: 'Entender [[constructor]], parametros y [[this]].',
    content: [
      {
        title: 'Tarjeta 1: constructor',
        body: [
          '[[constructor]] corre cuando usas [[new]]. Sirve para recibir datos en el momento de crear la instancia.',
          'Sus parametros van dentro de `()` igual que en una funcion.',
        ],
        code:
          "class StudentCard {\n  name: string;\n  level: number;\n\n  constructor(name: string, level: number) {\n  }\n}",
      },
      {
        title: 'Tarjeta 2: this apunta a la instancia',
        body: [
          '[[this]] significa "esta instancia". Con `this.name = name;` copias el parametro dentro de la propiedad.',
          'A la izquierda esta la propiedad del objeto. A la derecha esta el dato que entro al constructor.',
        ],
        code:
          "class StudentCard {\n  name: string;\n  level: number;\n\n  constructor(name: string, level: number) {\n    this.name = name;\n    this.level = level;\n  }\n}",
      },
      {
        title: 'Tarjeta 3: new con argumentos',
        body: [
          'Si el constructor pide datos, [[new]] debe recibir esos argumentos dentro de `()`.',
          'El orden importa: primero `name`, luego `level`, porque asi fue definida la clase.',
        ],
        code:
          "const studentCard = new StudentCard('Ana', 2);",
      },
      {
        title: 'Tarjeta 4: ver datos del constructor',
        body: [
          'Despues puedes mostrar en consola las propiedades llenadas por el constructor.',
          'Asi ves que los datos realmente viajaron desde `new` hacia la instancia.',
        ],
        code:
          "class StudentCard {\n  name: string;\n  level: number;\n\n  constructor(name: string, level: number) {\n    this.name = name;\n    this.level = level;\n  }\n}\n\nconst studentCard = new StudentCard('Ana', 2);\nconsole.log(studentCard.name);\nconsole.log(studentCard.level);",
      },
    ],
    exercises: [
      {
        id: 'u3-l2-c1-e1',
        title: 'Ejercicio 1: constructor vacio por dentro',
        instructions: [
          'Escribe `StudentCard` con propiedades `name` y `level`.',
          'Agrega `constructor(name: string, level: number) {}`.',
        ],
        placeholder:
          "class StudentCard {\n  name: string;\n  level: number;\n\n  constructor(name: string, level: number) {\n  }\n}",
        minLength: 90,
        checks: [
          {
            kind: 'includes',
            needle: 'constructor(name: string, level: number)',
            success: 'escribiste el constructor con sus parametros',
            error: 'falta `constructor(name: string, level: number)`.',
          },
        ],
      },
      {
        id: 'u3-l2-c1-e2',
        title: 'Ejercicio 2: otro constructor',
        instructions: [
          'Escribe `LessonCard` con `title: string`, `duration: number` y su constructor.',
          'Mantiene la misma idea con otros nombres.',
        ],
        placeholder: '',
        minLength: 92,
        checks: [
          {
            kind: 'includes',
            needle: 'constructor(title: string, duration: number)',
            success: 'escribiste el constructor de `LessonCard`',
            error: 'falta `constructor(title: string, duration: number)`.',
          },
        ],
      },
      {
        id: 'u3-l2-c2-e1',
        title: 'Ejercicio 3: asigna con this',
        instructions: [
          'Completa `StudentCard` con `this.name = name;` y `this.level = level;`.',
          'Aqui practicas como el constructor llena la instancia.',
        ],
        placeholder:
          "class StudentCard {\n  name: string;\n  level: number;\n\n  constructor(name: string, level: number) {\n    this.name = name;\n    this.level = level;\n  }\n}",
        minLength: 126,
        checks: [
          {
            kind: 'includes',
            needle: 'this.name = name',
            success: 'asignaste `name` con `this`',
            error: 'falta `this.name = name;`.',
          },
          {
            kind: 'includes',
            needle: 'this.level = level',
            success: 'asignaste `level` con `this`',
            error: 'falta `this.level = level;`.',
          },
        ],
      },
      {
        id: 'u3-l2-c2-e2',
        title: 'Ejercicio 4: asigna title y duration',
        instructions: [
          'Completa `LessonCard` con `this.title = title;` y `this.duration = duration;`.',
          'Repite el mismo patron con otra clase.',
        ],
        placeholder: '',
        minLength: 128,
        checks: [
          {
            kind: 'includes',
            needle: 'this.title = title',
            success: 'asignaste `title` con `this`',
            error: 'falta `this.title = title;`.',
          },
          {
            kind: 'includes',
            needle: 'this.duration = duration',
            success: 'asignaste `duration` con `this`',
            error: 'falta `this.duration = duration;`.',
          },
        ],
      },
      {
        id: 'u3-l2-c3-e1',
        title: 'Ejercicio 5: instancia con argumentos',
        instructions: [
          'Escribe `const studentCard = new StudentCard(\'Ana\', 2);`.',
          'La instancia debe pasar los dos datos al constructor.',
        ],
        placeholder:
          "class StudentCard {\n  name: string;\n  level: number;\n\n  constructor(name: string, level: number) {\n    this.name = name;\n    this.level = level;\n  }\n}\n\nconst studentCard = new StudentCard('Ana', 2);",
        minLength: 158,
        checks: [
          {
            kind: 'includes',
            needle: 'const studentcard = new studentcard(',
            success: 'creaste la instancia con argumentos',
            error: 'falta `const studentCard = new StudentCard(...)`.',
          },
        ],
      },
      {
        id: 'u3-l2-c3-e2',
        title: 'Ejercicio 6: otra instancia con argumentos',
        instructions: [
          'Escribe `const lessonCard = new LessonCard(\'TS\', 20);`.',
          'Repite el mismo patron con otra clase.',
        ],
        placeholder: '',
        minLength: 44,
        checks: [
          {
            kind: 'includes',
            needle: 'const lessoncard = new lessoncard(',
            success: 'creaste `lessonCard` con argumentos',
            error: 'falta `const lessonCard = new LessonCard(...)`.',
          },
        ],
      },
      {
        id: 'u3-l2-c4-e1',
        title: 'Ejercicio 7: consola con constructor',
        instructions: [
          'Escribe `studentCard` completo y luego usa `console.log(studentCard.name);`.',
          'La consola debe mostrar el valor que entro por el constructor.',
        ],
        placeholder:
          "class StudentCard {\n  name: string;\n  level: number;\n\n  constructor(name: string, level: number) {\n    this.name = name;\n    this.level = level;\n  }\n}\n\nconst studentCard = new StudentCard('Ana', 2);\nconsole.log(studentCard.name);",
        minLength: 188,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(studentcard.name)',
            success: 'mostraste `studentCard.name`',
            error: 'falta `console.log(studentCard.name);`.',
          },
        ],
      },
      {
        id: 'u3-l2-c4-e2',
        title: 'Ejercicio 8: consola con level',
        instructions: [
          'Escribe `studentCard` completo y luego usa `console.log(studentCard.level);`.',
          'La consola debe mostrar el nivel que entro por el constructor.',
        ],
        placeholder: '',
        minLength: 188,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(studentcard.level)',
            success: 'mostraste `studentCard.level`',
            error: 'falta `console.log(studentCard.level);`.',
          },
        ],
      },
    ],
  },
  {
    id: 'u3-l3',
    step: '3',
    title: 'Metodos y return',
    summary: 'Ahora la clase no solo guarda datos: tambien puede ejecutar acciones.',
    goal: 'Entender metodos, [[return]] y [[this]] dentro de una clase.',
    content: [
      {
        title: 'Tarjeta 1: metodo sin function',
        body: [
          'Dentro de una clase, un metodo no usa la palabra [[function]]. Escribes el nombre, luego `()` y luego `{}`.',
          'Ese bloque vive dentro de la clase y puede usar las propiedades de la instancia.',
        ],
        code:
          "class StudentCard {\n  name: string;\n\n  constructor(name: string) {\n    this.name = name;\n  }\n\n  showName() {\n  }\n}",
      },
      {
        title: 'Tarjeta 2: return dentro del metodo',
        body: [
          'Un metodo tambien puede devolver un valor. Con [[return]] entregas el resultado final.',
          'Si el metodo usa `this.name`, significa que esta leyendo la propiedad de esa instancia.',
        ],
        code:
          "class StudentCard {\n  name: string;\n\n  constructor(name: string) {\n    this.name = name;\n  }\n\n  getName(): string {\n    return this.name;\n  }\n}",
      },
      {
        title: 'Tarjeta 3: metodo con mas de una propiedad',
        body: [
          'El metodo puede unir varias propiedades del mismo objeto. Asi la clase produce un resumen o mensaje propio.',
          '[[this]] te deja entrar a cada propiedad de esa instancia sin repetir el nombre de la variable externa.',
        ],
        code:
          "class StudentCard {\n  name: string;\n  level: number;\n\n  constructor(name: string, level: number) {\n    this.name = name;\n    this.level = level;\n  }\n\n  getSummary(): string {\n    return `${this.name} nivel ${this.level}`;\n  }\n}",
      },
      {
        title: 'Tarjeta 4: llamar el metodo y ver salida',
        body: [
          'Despues llamas el metodo con el punto y `()`. Por ejemplo `studentCard.getSummary()`.',
          'Ese resultado ya puede viajar a [[console.log]] para verlo en pantalla.',
        ],
        code:
          "const studentCard = new StudentCard('Ana', 2);\nconsole.log(studentCard.getSummary());",
      },
    ],
    exercises: [
      {
        id: 'u3-l3-c1-e1',
        title: 'Ejercicio 1: metodo vacio',
        instructions: [
          'Escribe `showName() {}` dentro de `StudentCard`.',
          'Aqui solo practicas la forma minima de un metodo.',
        ],
        placeholder:
          "class StudentCard {\n  name: string;\n\n  constructor(name: string) {\n    this.name = name;\n  }\n\n  showName() {\n  }\n}",
        minLength: 96,
        checks: [
          {
            kind: 'includes',
            needle: 'showname()',
            success: 'agregaste el metodo `showName`',
            error: 'falta `showName() {}` dentro de la clase.',
          },
        ],
      },
      {
        id: 'u3-l3-c1-e2',
        title: 'Ejercicio 2: otro metodo vacio',
        instructions: [
          'Escribe `showLevel() {}` dentro de una clase con `level`.',
          'La idea es repetir la misma estructura de metodo.',
        ],
        placeholder: '',
        minLength: 88,
        checks: [
          {
            kind: 'includes',
            needle: 'showlevel()',
            success: 'agregaste el metodo `showLevel`',
            error: 'falta `showLevel() {}` dentro de la clase.',
          },
        ],
      },
      {
        id: 'u3-l3-c2-e1',
        title: 'Ejercicio 3: getName con return',
        instructions: [
          'Escribe `getName(): string { return this.name; }`.',
          'Aqui practicas retorno y lectura con `this`.',
        ],
        placeholder:
          "class StudentCard {\n  name: string;\n\n  constructor(name: string) {\n    this.name = name;\n  }\n\n  getName(): string {\n    return this.name;\n  }\n}",
        minLength: 126,
        checks: [
          {
            kind: 'includes',
            needle: 'getname(): string',
            success: 'marcaste que `getName` devuelve `string`',
            error: 'falta `getName(): string`.',
          },
          {
            kind: 'includes',
            needle: 'return this.name',
            success: 'usas `return this.name`',
            error: 'falta `return this.name;`.',
          },
        ],
      },
      {
        id: 'u3-l3-c2-e2',
        title: 'Ejercicio 4: getLevel con return',
        instructions: [
          'Escribe `getLevel(): number { return this.level; }`.',
          'Repite la misma idea con un numero.',
        ],
        placeholder: '',
        minLength: 124,
        checks: [
          {
            kind: 'includes',
            needle: 'getlevel(): number',
            success: 'marcaste que `getLevel` devuelve `number`',
            error: 'falta `getLevel(): number`.',
          },
          {
            kind: 'includes',
            needle: 'return this.level',
            success: 'usas `return this.level`',
            error: 'falta `return this.level;`.',
          },
        ],
      },
      {
        id: 'u3-l3-c3-e1',
        title: 'Ejercicio 5: getSummary',
        instructions: [
          'Escribe `getSummary(): string` dentro de `StudentCard`.',
          'Debe devolver un texto usando `this.name` y `this.level`.',
        ],
        placeholder:
          "class StudentCard {\n  name: string;\n  level: number;\n\n  constructor(name: string, level: number) {\n    this.name = name;\n    this.level = level;\n  }\n\n  getSummary(): string {\n    return `${this.name} nivel ${this.level}`;\n  }\n}",
        minLength: 210,
        checks: [
          {
            kind: 'includes',
            needle: 'getsummary(): string',
            success: 'escribiste `getSummary`',
            error: 'falta `getSummary(): string`.',
          },
          {
            kind: 'includes',
            needle: 'this.name',
            success: 'usas `this.name`',
            error: 'falta `this.name` en el resumen.',
          },
          {
            kind: 'includes',
            needle: 'this.level',
            success: 'usas `this.level`',
            error: 'falta `this.level` en el resumen.',
          },
        ],
      },
      {
        id: 'u3-l3-c3-e2',
        title: 'Ejercicio 6: otro resumen',
        instructions: [
          'Escribe `LessonCard` con un metodo `getSummary(): string`.',
          'Debe devolver un texto usando `this.title` y `this.duration`.',
        ],
        placeholder: '',
        minLength: 204,
        checks: [
          {
            kind: 'includes',
            needle: 'getsummary(): string',
            success: 'agregaste un metodo de resumen',
            error: 'falta `getSummary(): string`.',
          },
          {
            kind: 'includes',
            needle: 'this.title',
            success: 'usas `this.title`',
            error: 'falta `this.title` en el resumen.',
          },
          {
            kind: 'includes',
            needle: 'this.duration',
            success: 'usas `this.duration`',
            error: 'falta `this.duration` en el resumen.',
          },
        ],
      },
      {
        id: 'u3-l3-c4-e1',
        title: 'Ejercicio 7: consola con metodo',
        instructions: [
          'Escribe `studentCard` completo y luego usa `console.log(studentCard.getSummary());`.',
          'La consola debe mostrar el texto devuelto por el metodo.',
        ],
        placeholder:
          "class StudentCard {\n  name: string;\n  level: number;\n\n  constructor(name: string, level: number) {\n    this.name = name;\n    this.level = level;\n  }\n\n  getSummary(): string {\n    return `${this.name} nivel ${this.level}`;\n  }\n}\n\nconst studentCard = new StudentCard('Ana', 2);\nconsole.log(studentCard.getSummary());",
        minLength: 284,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(studentcard.getsummary())',
            success: 'mostraste el resultado del metodo',
            error: 'falta `console.log(studentCard.getSummary());`.',
          },
        ],
      },
      {
        id: 'u3-l3-c4-e2',
        title: 'Ejercicio 8: guarda y muestra',
        instructions: [
          'Guarda `studentCard.getSummary()` en `summary` y luego usa `console.log(summary);`.',
          'Asi practicas llamada de metodo y salida separada.',
        ],
        placeholder: '',
        minLength: 58,
        checks: [
          {
            kind: 'includes',
            needle: 'const summary = studentcard.getsummary()',
            success: 'guardaste el resultado del metodo',
            error: 'falta `const summary = studentCard.getSummary();`.',
          },
          {
            kind: 'includes',
            needle: 'console.log(summary)',
            success: 'mostraste `summary` en consola',
            error: 'falta `console.log(summary);`.',
          },
        ],
      },
    ],
  },
  {
    id: 'u3-l4',
    step: '4',
    title: 'Readonly, private y getter',
    summary: 'Ahora controlas que partes se leen, cuales no cambian y cuales no salen afuera.',
    goal: 'Entender [[readonly]], [[private]] y [[get]].',
    content: [
      {
        title: 'Tarjeta 1: readonly',
        body: [
          '[[readonly]] marca una propiedad que solo quieres fijar una vez. Sirve para datos que no deberian cambiar despues.',
          'La propiedad sigue siendo publica para lectura, pero ya no deberia reasignarse libremente.',
        ],
        code:
          "class StudentProfile {\n  readonly id: number;\n\n  constructor(id: number) {\n    this.id = id;\n  }\n}",
      },
      {
        title: 'Tarjeta 2: private',
        body: [
          '[[private]] oculta una propiedad dentro de la clase. Desde afuera ya no deberias leerla directamente.',
          'Eso ayuda a guardar datos internos que solo la clase debe manejar.',
        ],
        code:
          "class StudentProfile {\n  readonly id: number;\n  private secretNote: string;\n\n  constructor(id: number, secretNote: string) {\n    this.id = id;\n    this.secretNote = secretNote;\n  }\n}",
      },
      {
        title: 'Tarjeta 3: getter',
        body: [
          'Un [[getter]] se escribe con la palabra [[get]] y parece propiedad al leerlo desde afuera.',
          'Sirve para exponer un valor calculado sin abrir directamente todos los datos internos.',
        ],
        code:
          "class StudentProfile {\n  readonly id: number;\n  private secretNote: string;\n\n  constructor(id: number, secretNote: string) {\n    this.id = id;\n    this.secretNote = secretNote;\n  }\n\n  get safeNote(): string {\n    return this.secretNote;\n  }\n}",
      },
      {
        title: 'Tarjeta 4: leer el getter en consola',
        body: [
          'Al getter lo lees como si fuera una propiedad normal: `profile.safeNote`.',
          'Despues puedes mostrarlo con [[console.log]] sin tocar directamente la propiedad privada.',
        ],
        code:
          "const profile = new StudentProfile(1, 'avance estable');\nconsole.log(profile.id);\nconsole.log(profile.safeNote);",
      },
    ],
    exercises: [
      {
        id: 'u3-l4-c1-e1',
        title: 'Ejercicio 1: readonly id',
        instructions: [
          'Escribe `StudentProfile` con `readonly id: number;` y su constructor.',
          'Debes asignar `this.id = id;` dentro del constructor.',
        ],
        placeholder:
          "class StudentProfile {\n  readonly id: number;\n\n  constructor(id: number) {\n    this.id = id;\n  }\n}",
        minLength: 90,
        checks: [
          {
            kind: 'includes',
            needle: 'readonly id: number',
            success: 'marcaste `id` como `readonly`',
            error: 'falta `readonly id: number;`.',
          },
          {
            kind: 'includes',
            needle: 'this.id = id',
            success: 'asignaste `id` dentro del constructor',
            error: 'falta `this.id = id;`.',
          },
        ],
      },
      {
        id: 'u3-l4-c1-e2',
        title: 'Ejercicio 2: otro readonly',
        instructions: [
          'Escribe `LessonProfile` con `readonly lessonId: number;`.',
          'El constructor debe recibir `lessonId` y asignarlo.',
        ],
        placeholder: '',
        minLength: 94,
        checks: [
          {
            kind: 'includes',
            needle: 'readonly lessonid: number',
            success: 'marcaste `lessonId` como `readonly`',
            error: 'falta `readonly lessonId: number;`.',
          },
        ],
      },
      {
        id: 'u3-l4-c2-e1',
        title: 'Ejercicio 3: propiedad private',
        instructions: [
          'Agrega `private secretNote: string;` a `StudentProfile`.',
          'El constructor tambien debe hacer `this.secretNote = secretNote;`.',
        ],
        placeholder:
          "class StudentProfile {\n  readonly id: number;\n  private secretNote: string;\n\n  constructor(id: number, secretNote: string) {\n    this.id = id;\n    this.secretNote = secretNote;\n  }\n}",
        minLength: 156,
        checks: [
          {
            kind: 'includes',
            needle: 'private secretnote: string',
            success: 'marcaste `secretNote` como `private`',
            error: 'falta `private secretNote: string;`.',
          },
          {
            kind: 'includes',
            needle: 'this.secretnote = secretnote',
            success: 'asignaste `secretNote` dentro del constructor',
            error: 'falta `this.secretNote = secretNote;`.',
          },
        ],
      },
      {
        id: 'u3-l4-c2-e2',
        title: 'Ejercicio 4: otro private',
        instructions: [
          'Escribe una clase con `private internalCode: string;`.',
          'El constructor debe recibir `internalCode` y asignarlo.',
        ],
        placeholder: '',
        minLength: 120,
        checks: [
          {
            kind: 'includes',
            needle: 'private internalcode: string',
            success: 'marcaste `internalCode` como `private`',
            error: 'falta `private internalCode: string;`.',
          },
        ],
      },
      {
        id: 'u3-l4-c3-e1',
        title: 'Ejercicio 5: getter safeNote',
        instructions: [
          'Escribe `get safeNote(): string { return this.secretNote; }`.',
          'Aqui practicas como exponer una propiedad calculada o protegida.',
        ],
        placeholder:
          "class StudentProfile {\n  readonly id: number;\n  private secretNote: string;\n\n  constructor(id: number, secretNote: string) {\n    this.id = id;\n    this.secretNote = secretNote;\n  }\n\n  get safeNote(): string {\n    return this.secretNote;\n  }\n}",
        minLength: 232,
        checks: [
          {
            kind: 'includes',
            needle: 'get safenote(): string',
            success: 'escribiste el getter `safeNote`',
            error: 'falta `get safeNote(): string`.',
          },
          {
            kind: 'includes',
            needle: 'return this.secretnote',
            success: 'el getter devuelve `this.secretNote`',
            error: 'falta `return this.secretNote;` en el getter.',
          },
        ],
      },
      {
        id: 'u3-l4-c3-e2',
        title: 'Ejercicio 6: otro getter',
        instructions: [
          'Escribe `get label(): string { return this.internalCode; }` en otra clase.',
          'Repite la misma estructura con otro nombre.',
        ],
        placeholder: '',
        minLength: 118,
        checks: [
          {
            kind: 'includes',
            needle: 'get label(): string',
            success: 'escribiste el getter `label`',
            error: 'falta `get label(): string`.',
          },
        ],
      },
      {
        id: 'u3-l4-c4-e1',
        title: 'Ejercicio 7: consola con getter',
        instructions: [
          'Escribe `profile` completo y luego usa `console.log(profile.safeNote);`.',
          'La consola debe mostrar el valor del getter.',
        ],
        placeholder:
          "class StudentProfile {\n  readonly id: number;\n  private secretNote: string;\n\n  constructor(id: number, secretNote: string) {\n    this.id = id;\n    this.secretNote = secretNote;\n  }\n\n  get safeNote(): string {\n    return this.secretNote;\n  }\n}\n\nconst profile = new StudentProfile(1, 'avance estable');\nconsole.log(profile.safeNote);",
        minLength: 300,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(profile.safenote)',
            success: 'mostraste el getter en consola',
            error: 'falta `console.log(profile.safeNote);`.',
          },
        ],
      },
      {
        id: 'u3-l4-c4-e2',
        title: 'Ejercicio 8: consola con readonly',
        instructions: [
          'Escribe `profile` completo y luego usa `console.log(profile.id);`.',
          'La consola debe mostrar la propiedad readonly.',
        ],
        placeholder: '',
        minLength: 260,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(profile.id)',
            success: 'mostraste `profile.id` en consola',
            error: 'falta `console.log(profile.id);`.',
          },
        ],
      },
    ],
  },
  {
    id: 'u3-l5',
    step: '5',
    title: 'Interface e implements',
    summary: 'Ahora una clase promete cumplir un contrato escrito afuera.',
    goal: 'Entender [[interface]], [[implements]] y una clase que cumple esa forma.',
    content: [
      {
        title: 'Tarjeta 1: interface como contrato',
        body: [
          'Una [[interface]] describe que propiedades o metodos deben existir.',
          'La clase todavia no aparece aqui. Primero defines el contrato afuera.',
        ],
        code:
          "interface ReportCard {\n  title: string;\n  print(): string;\n}",
      },
      {
        title: 'Tarjeta 2: implements',
        body: [
          '[[implements]] conecta la clase con la interface. Significa: esta clase promete cumplir ese contrato.',
          'Si la interface pide `title` y `print()`, la clase debe escribir ambas cosas.',
        ],
        code:
          "interface ReportCard {\n  title: string;\n  print(): string;\n}\n\nclass LessonReport implements ReportCard {\n  title: string;\n\n  constructor(title: string) {\n    this.title = title;\n  }\n\n  print(): string {\n    return this.title;\n  }\n}",
      },
      {
        title: 'Tarjeta 3: el metodo pedido por la interface',
        body: [
          'La interface no guarda logica real. Solo exige forma. La clase es quien escribe el codigo del metodo.',
          'Por eso [[print(): string]] aparece en ambos lados: como contrato y como implementacion real.',
        ],
        code:
          "print(): string {\n  return this.title;\n}",
      },
      {
        title: 'Tarjeta 4: instancia y consola',
        body: [
          'Despues creas la clase con [[new]] y llamas el metodo real.',
          'El resultado puede mostrarse con [[console.log]] como en las unidades anteriores.',
        ],
        code:
          "const report = new LessonReport('Unidad 3');\nconsole.log(report.print());",
      },
    ],
    exercises: [
      {
        id: 'u3-l5-c1-e1',
        title: 'Ejercicio 1: interface minima',
        instructions: [
          'Escribe `interface ReportCard` con `title: string;` y `print(): string;`.',
          'Aqui solo practicas el contrato.',
        ],
        placeholder:
          "interface ReportCard {\n  title: string;\n  print(): string;\n}",
        minLength: 54,
        checks: [
          {
            kind: 'includes',
            needle: 'interface reportcard',
            success: 'creaste la interface `ReportCard`',
            error: 'falta `interface ReportCard { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'print(): string',
            success: 'agregaste el metodo `print()` al contrato',
            error: 'falta `print(): string;` en la interface.',
          },
        ],
      },
      {
        id: 'u3-l5-c1-e2',
        title: 'Ejercicio 2: otra interface',
        instructions: [
          'Escribe `interface BadgeCard` con `label: string;` y `show(): string;`.',
          'Repite la misma idea con otro contrato.',
        ],
        placeholder: '',
        minLength: 52,
        checks: [
          {
            kind: 'includes',
            needle: 'interface badgecard',
            success: 'creaste la interface `BadgeCard`',
            error: 'falta `interface BadgeCard { ... }`.',
          },
          {
            kind: 'includes',
            needle: 'show(): string',
            success: 'agregaste el metodo `show()`',
            error: 'falta `show(): string;` en la interface.',
          },
        ],
      },
      {
        id: 'u3-l5-c2-e1',
        title: 'Ejercicio 3: clase con implements',
        instructions: [
          'Escribe `class LessonReport implements ReportCard`.',
          'La clase debe tener la propiedad `title`.',
        ],
        placeholder:
          "interface ReportCard {\n  title: string;\n  print(): string;\n}\n\nclass LessonReport implements ReportCard {\n  title: string;\n\n  constructor(title: string) {\n    this.title = title;\n  }\n\n  print(): string {\n    return this.title;\n  }\n}",
        minLength: 182,
        checks: [
          {
            kind: 'includes',
            needle: 'class lessonreport implements reportcard',
            success: 'conectaste la clase con la interface',
            error: 'falta `class LessonReport implements ReportCard`.',
          },
          {
            kind: 'includes',
            needle: 'title: string',
            success: 'agregaste la propiedad `title`',
            error: 'falta `title: string;` en la clase.',
          },
        ],
      },
      {
        id: 'u3-l5-c2-e2',
        title: 'Ejercicio 4: otra clase con implements',
        instructions: [
          'Escribe `class BadgeView implements BadgeCard`.',
          'La clase debe tener `label: string`.',
        ],
        placeholder: '',
        minLength: 124,
        checks: [
          {
            kind: 'includes',
            needle: 'class badgeview implements badgecard',
            success: 'conectaste `BadgeView` con `BadgeCard`',
            error: 'falta `class BadgeView implements BadgeCard`.',
          },
          {
            kind: 'includes',
            needle: 'label: string',
            success: 'agregaste `label: string`',
            error: 'falta `label: string;` en la clase.',
          },
        ],
      },
      {
        id: 'u3-l5-c3-e1',
        title: 'Ejercicio 5: metodo print real',
        instructions: [
          'Completa `LessonReport` con `print(): string { return this.title; }`.',
          'La clase debe cumplir el metodo pedido por la interface.',
        ],
        placeholder:
          "interface ReportCard {\n  title: string;\n  print(): string;\n}\n\nclass LessonReport implements ReportCard {\n  title: string;\n\n  constructor(title: string) {\n    this.title = title;\n  }\n\n  print(): string {\n    return this.title;\n  }\n}",
        minLength: 228,
        checks: [
          {
            kind: 'includes',
            needle: 'print(): string',
            success: 'escribiste `print(): string` en la clase',
            error: 'falta `print(): string` en la clase.',
          },
          {
            kind: 'includes',
            needle: 'return this.title',
            success: 'el metodo devuelve `this.title`',
            error: 'falta `return this.title;`.',
          },
        ],
      },
      {
        id: 'u3-l5-c3-e2',
        title: 'Ejercicio 6: metodo show real',
        instructions: [
          'Completa `BadgeView` con `show(): string { return this.label; }`.',
          'Repite el mismo patron con otra interface.',
        ],
        placeholder: '',
        minLength: 176,
        checks: [
          {
            kind: 'includes',
            needle: 'show(): string',
            success: 'escribiste `show(): string`',
            error: 'falta `show(): string` en la clase.',
          },
          {
            kind: 'includes',
            needle: 'return this.label',
            success: 'el metodo devuelve `this.label`',
            error: 'falta `return this.label;`.',
          },
        ],
      },
      {
        id: 'u3-l5-c4-e1',
        title: 'Ejercicio 7: consola con print',
        instructions: [
          'Escribe `report` completo y luego usa `console.log(report.print());`.',
          'La consola debe mostrar el texto del metodo.',
        ],
        placeholder:
          "interface ReportCard {\n  title: string;\n  print(): string;\n}\n\nclass LessonReport implements ReportCard {\n  title: string;\n\n  constructor(title: string) {\n    this.title = title;\n  }\n\n  print(): string {\n    return this.title;\n  }\n}\n\nconst report = new LessonReport('Unidad 3');\nconsole.log(report.print());",
        minLength: 294,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(report.print())',
            success: 'mostraste `report.print()` en consola',
            error: 'falta `console.log(report.print());`.',
          },
        ],
      },
      {
        id: 'u3-l5-c4-e2',
        title: 'Ejercicio 8: guarda y muestra print',
        instructions: [
          'Guarda `report.print()` en `result` y luego usa `console.log(result);`.',
          'Asi separas llamada del metodo y salida final.',
        ],
        placeholder: '',
        minLength: 52,
        checks: [
          {
            kind: 'includes',
            needle: 'const result = report.print()',
            success: 'guardaste el resultado de `print()`',
            error: 'falta `const result = report.print();`.',
          },
          {
            kind: 'includes',
            needle: 'console.log(result)',
            success: 'mostraste `result` en consola',
            error: 'falta `console.log(result);`.',
          },
        ],
      },
    ],
  },
  {
    id: 'u3-l6',
    step: '6',
    title: 'Extends, super y static',
    summary: 'Cierras la unidad creando una clase hija y una parte estatica compartida.',
    goal: 'Entender [[extends]], [[super]] y [[static]].',
    content: [
      {
        title: 'Tarjeta 1: extends',
        body: [
          '[[extends]] hace que una clase hija herede de una clase base.',
          'La clase hija recibe propiedades y metodos de la base antes de agregar los suyos.',
        ],
        code:
          "class BaseLesson {\n  title: string;\n\n  constructor(title: string) {\n    this.title = title;\n  }\n}\n\nclass VideoLesson extends BaseLesson {\n}",
      },
      {
        title: 'Tarjeta 2: super',
        body: [
          '[[super]] llama al constructor de la clase base. Debe ir antes de usar `this` en la clase hija.',
          'Asi la parte heredada se construye correctamente antes de agregar lo nuevo.',
        ],
        code:
          "class BaseLesson {\n  title: string;\n\n  constructor(title: string) {\n    this.title = title;\n  }\n}\n\nclass VideoLesson extends BaseLesson {\n  duration: number;\n\n  constructor(title: string, duration: number) {\n    super(title);\n    this.duration = duration;\n  }\n}",
      },
      {
        title: 'Tarjeta 3: static',
        body: [
          '[[static]] crea algo que pertenece a la clase misma y no a cada instancia.',
          'Lo lees con el nombre de la clase, por ejemplo [[VideoLesson.totalCreated]].',
        ],
        code:
          "class VideoLesson extends BaseLesson {\n  static totalCreated: number = 0;\n  duration: number;\n\n  constructor(title: string, duration: number) {\n    super(title);\n    this.duration = duration;\n    VideoLesson.totalCreated += 1;\n  }\n\n  getSummary(): string {\n    return `${this.title} dura ${this.duration}`;\n  }\n}",
      },
      {
        title: 'Tarjeta 4: instancia y datos estaticos en consola',
        body: [
          'Ahora puedes mostrar dos cosas distintas: un dato de la instancia y un dato estatico de la clase.',
          'Eso te ayuda a separar claramente lo que pertenece al objeto y lo que pertenece al molde compartido.',
        ],
        code:
          "const videoLesson = new VideoLesson('Clases', 15);\nconsole.log(videoLesson.getSummary());\nconsole.log(VideoLesson.totalCreated);",
      },
    ],
    exercises: [
      {
        id: 'u3-l6-c1-e1',
        title: 'Ejercicio 1: clase hija con extends',
        instructions: [
          'Escribe `class VideoLesson extends BaseLesson {}`.',
          'Aqui solo practicas la relacion entre clase base y clase hija.',
        ],
        placeholder:
          "class BaseLesson {\n  title: string;\n\n  constructor(title: string) {\n    this.title = title;\n  }\n}\n\nclass VideoLesson extends BaseLesson {\n}",
        minLength: 118,
        checks: [
          {
            kind: 'includes',
            needle: 'class videolesson extends baselesson',
            success: 'conectaste la clase hija con la base',
            error: 'falta `class VideoLesson extends BaseLesson`.',
          },
        ],
      },
      {
        id: 'u3-l6-c1-e2',
        title: 'Ejercicio 2: otra hija simple',
        instructions: [
          'Escribe `class QuizLesson extends BaseLesson {}`.',
          'Repite la misma idea con otra clase hija.',
        ],
        placeholder: '',
        minLength: 36,
        checks: [
          {
            kind: 'includes',
            needle: 'class quizlesson extends baselesson',
            success: 'creaste `QuizLesson` como clase hija',
            error: 'falta `class QuizLesson extends BaseLesson`.',
          },
        ],
      },
      {
        id: 'u3-l6-c2-e1',
        title: 'Ejercicio 3: constructor con super',
        instructions: [
          'Completa `VideoLesson` con `duration: number`, constructor y `super(title);`.',
          'La clase hija debe recibir `title` y `duration`.',
        ],
        placeholder:
          "class BaseLesson {\n  title: string;\n\n  constructor(title: string) {\n    this.title = title;\n  }\n}\n\nclass VideoLesson extends BaseLesson {\n  duration: number;\n\n  constructor(title: string, duration: number) {\n    super(title);\n    this.duration = duration;\n  }\n}",
        minLength: 246,
        checks: [
          {
            kind: 'includes',
            needle: 'constructor(title: string, duration: number)',
            success: 'escribiste el constructor de la clase hija',
            error: 'falta `constructor(title: string, duration: number)`.',
          },
          {
            kind: 'includes',
            needle: 'super(title)',
            success: 'llamaste al constructor base con `super`',
            error: 'falta `super(title);`.',
          },
          {
            kind: 'includes',
            needle: 'this.duration = duration',
            success: 'guardaste `duration` en la clase hija',
            error: 'falta `this.duration = duration;`.',
          },
        ],
      },
      {
        id: 'u3-l6-c2-e2',
        title: 'Ejercicio 4: otra hija con super',
        instructions: [
          'Escribe `QuizLesson` con `questionCount: number` y `super(title);`.',
          'La hija debe tener su propio constructor.',
        ],
        placeholder: '',
        minLength: 226,
        checks: [
          {
            kind: 'includes',
            needle: 'super(title)',
            success: 'usaste `super(title)` en la clase hija',
            error: 'falta `super(title);`.',
          },
          {
            kind: 'includes',
            needle: 'this.questioncount = questioncount',
            success: 'guardaste `questionCount`',
            error: 'falta `this.questionCount = questionCount;`.',
          },
        ],
      },
      {
        id: 'u3-l6-c3-e1',
        title: 'Ejercicio 5: static totalCreated',
        instructions: [
          'Agrega `static totalCreated: number = 0;` a `VideoLesson`.',
          'Dentro del constructor suma `VideoLesson.totalCreated += 1;`.',
        ],
        placeholder:
          "class BaseLesson {\n  title: string;\n\n  constructor(title: string) {\n    this.title = title;\n  }\n}\n\nclass VideoLesson extends BaseLesson {\n  static totalCreated: number = 0;\n  duration: number;\n\n  constructor(title: string, duration: number) {\n    super(title);\n    this.duration = duration;\n    VideoLesson.totalCreated += 1;\n  }\n\n  getSummary(): string {\n    return `${this.title} dura ${this.duration}`;\n  }\n}",
        minLength: 392,
        checks: [
          {
            kind: 'includes',
            needle: 'static totalcreated: number = 0',
            success: 'agregaste la propiedad estatica',
            error: 'falta `static totalCreated: number = 0;`.',
          },
          {
            kind: 'includes',
            needle: 'videolesson.totalcreated += 1',
            success: 'sumaste el contador estatico',
            error: 'falta `VideoLesson.totalCreated += 1;`.',
          },
        ],
      },
      {
        id: 'u3-l6-c3-e2',
        title: 'Ejercicio 6: metodo resumen en la hija',
        instructions: [
          'Agrega `getSummary(): string` a `VideoLesson`.',
          'Debe devolver un texto usando `this.title` y `this.duration`.',
        ],
        placeholder: '',
        minLength: 142,
        checks: [
          {
            kind: 'includes',
            needle: 'getsummary(): string',
            success: 'escribiste `getSummary()`',
            error: 'falta `getSummary(): string`.',
          },
          {
            kind: 'includes',
            needle: 'this.title',
            success: 'usas `this.title`',
            error: 'falta `this.title` en el resumen.',
          },
          {
            kind: 'includes',
            needle: 'this.duration',
            success: 'usas `this.duration`',
            error: 'falta `this.duration` en el resumen.',
          },
        ],
      },
      {
        id: 'u3-l6-c4-e1',
        title: 'Ejercicio 7: consola con instancia hija',
        instructions: [
          'Escribe `videoLesson` completo y luego usa `console.log(videoLesson.getSummary());`.',
          'La consola debe mostrar el resumen de la clase hija.',
        ],
        placeholder:
          "class BaseLesson {\n  title: string;\n\n  constructor(title: string) {\n    this.title = title;\n  }\n}\n\nclass VideoLesson extends BaseLesson {\n  static totalCreated: number = 0;\n  duration: number;\n\n  constructor(title: string, duration: number) {\n    super(title);\n    this.duration = duration;\n    VideoLesson.totalCreated += 1;\n  }\n\n  getSummary(): string {\n    return `${this.title} dura ${this.duration}`;\n  }\n}\n\nconst videoLesson = new VideoLesson('Clases', 15);\nconsole.log(videoLesson.getSummary());",
        minLength: 468,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(videolesson.getsummary())',
            success: 'mostraste el resumen de la hija',
            error: 'falta `console.log(videoLesson.getSummary());`.',
          },
        ],
      },
      {
        id: 'u3-l6-c4-e2',
        title: 'Ejercicio 8: consola con static',
        instructions: [
          'Si ya no esta escrita arriba, vuelve a escribir `VideoLesson` completa.',
          'Debajo usa `console.log(VideoLesson.totalCreated);`. La consola debe mostrar el dato estatico de la clase.',
        ],
        placeholder: '',
        minLength: 26,
        checks: [
          {
            kind: 'includes',
            needle: 'console.log(videolesson.totalcreated)',
            success: 'mostraste el valor estatico',
            error: 'falta `console.log(VideoLesson.totalCreated);`.',
          },
        ],
      },
    ],
  },
];
