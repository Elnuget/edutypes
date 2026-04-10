import type { UnitLesson } from './unit-types';

export const entrepreneurshipUnitOneLessons: UnitLesson[] = [
  {
    id: 'em-u1-l1',
    step: '1',
    title: 'Que es un buyer persona',
    summary:
      'Abres la unidad entendiendo que conocer al cliente ideal cambia la forma en que vendes, comunicas y construyes tu emprendimiento.',
    goal:
      'Comprender que el [[buyer persona]] es una representacion de tu [[cliente ideal]] basada en [[datos reales]].',
    content: [
      {
        title: 'Tarjeta 1: bienvenida a la unidad',
        body: [
          'En emprendimiento no basta con decir "quiero vender a todos". Esta unidad te ayuda a enfocar a quien quieres servir de verdad.',
          'Cuando entiendes a tu cliente ideal, tomas mejores decisiones sobre producto, mensaje y canales.',
        ],
      },
      {
        title: 'Tarjeta 2: que es un buyer persona',
        body: [
          'Un [[buyer persona]] es una representacion semi-ficticia de tu cliente ideal basada en [[datos reales]].',
          'Te ayuda a entender quien compra, que necesita, que le preocupa y como decide.',
        ],
      },
      {
        title: 'Tarjeta 3: segmento no es lo mismo que buyer persona',
        body: [
          'Un [[segmento de mercado]] es un grupo general. Un [[buyer persona]] es una persona especifica y mucho mas concreta.',
          'Por eso el buyer persona te permite mensajes personalizados, decisiones mas finas y productos mejor enfocados.',
        ],
      },
    ],
    exercises: [
      {
        id: 'em-u1-l1-e1',
        title: 'Ejercicio 1: nombre del concepto central',
        instructions: [
          'Escribe el nombre del concepto principal de esta unidad.',
          'Tu respuesta debe incluir las dos palabras clave.',
        ],
        placeholder: 'Escribe aqui el concepto...',
        minLength: 6,
        checks: [],
        responseKind: 'text',
        expectedAnswer: { kind: 'keywords', include: ['buyer', 'persona'] },
      },
      {
        id: 'em-u1-l1-e2',
        title: 'Ejercicio 2: a quien representa',
        instructions: [
          'Escribe a quien representa un buyer persona.',
          'Tu respuesta debe incluir las palabras clave del tipo de cliente.',
        ],
        placeholder: 'Escribe a quien representa...',
        minLength: 8,
        checks: [],
        responseKind: 'text',
        expectedAnswer: { kind: 'keywords', include: ['cliente', 'ideal'] },
      },
      {
        id: 'em-u1-l1-e3',
        title: 'Ejercicio 3: reconocer un segmento',
        instructions: [
          'Escribe solo `grupo general` para describir lo que es un segmento de mercado.',
          'No necesitas escribir una explicacion larga aqui.',
        ],
        placeholder: 'Escribe tu respuesta...',
        minLength: 6,
        checks: [],
        responseKind: 'text',
        expectedAnswer: { kind: 'keywords', include: ['grupo', 'general'] },
      },
      {
        id: 'em-u1-l1-e4',
        title: 'Ejercicio 4: reconocer un buyer persona',
        instructions: [
          'Escribe solo `persona especifica` para describir mejor a un buyer persona.',
          'Piensa en una persona concreta, no en una masa de clientes.',
        ],
        placeholder: 'Escribe tu respuesta...',
        minLength: 8,
        checks: [],
        responseKind: 'text',
        expectedAnswer: { kind: 'keywords', include: ['persona', 'especifica'] },
      },
      {
        id: 'em-u1-l1-e5',
        title: 'Ejercicio 5: beneficio clave',
        instructions: [
          'Escribe un beneficio del buyer persona que te ayude a enviar mensajes mas claros y personalizados.',
          'Tu respuesta debe incluir la idea principal correcta.',
        ],
        placeholder: 'Escribe el beneficio...',
        minLength: 10,
        checks: [],
        responseKind: 'text',
        expectedAnswer: { kind: 'keywords', include: ['comunicacion'] },
      },
      {
        id: 'em-u1-l1-e6',
        title: 'Ejercicio 6: por que importa usar datos reales',
        instructions: [
          'Explica en una frase corta por que un buyer persona debe construirse con datos reales.',
          'Tu respuesta debe incluir la idea de datos reales y cliente ideal.',
        ],
        placeholder: 'Escribe una frase corta con tu idea...',
        minLength: 18,
        checks: [],
        responseKind: 'text',
        expectedAnswer: {
          kind: 'keywords',
          include: ['datos reales', 'cliente ideal'],
          minWords: 6,
        },
      },
    ],
  },
  {
    id: 'em-u1-l2',
    step: '2',
    title: 'Metodos para recopilar informacion',
    summary:
      'Ahora eliges las herramientas con las que puedes conocer al cliente sin inventar respuestas.',
    goal:
      'Reconocer cuando usar [[encuestas]], [[entrevistas]], [[analisis de datos]] y [[observacion directa]].',
    content: [
      {
        title: 'Tarjeta 1: cuatro metodos base',
        body: [
          'La unidad presenta cuatro metodos principales para conocer al cliente: encuestas, entrevistas, analisis de datos y observacion directa.',
          'Cada uno sirve para una clase distinta de pregunta. Lo importante es no depender de suposiciones.',
        ],
      },
      {
        title: 'Tarjeta 2: cuando usar cada metodo',
        body: [
          'Las [[encuestas]] sirven para llegar a muchas personas con preguntas estructuradas. Las [[entrevistas]] ayudan a profundizar en emociones y motivaciones.',
          'El [[analisis de datos]] revela patrones reales y la [[observacion directa]] muestra habitos que a veces el cliente no verbaliza.',
        ],
      },
      {
        title: 'Tarjeta 3: elegir el metodo correcto',
        body: [
          'Si necesitas amplitud, encuestas. Si necesitas profundidad, entrevistas. Si ya tienes registros, analisis de datos. Si quieres ver habitos reales, observacion.',
          'Saber elegir el metodo correcto mejora mucho la calidad de tu buyer persona.',
        ],
      },
    ],
    exercises: [
      {
        id: 'em-u1-l2-e1',
        title: 'Ejercicio 1: metodo para muchas personas',
        instructions: [
          'Si quieres hacer preguntas estructuradas a muchas personas, escribe el metodo mas adecuado.',
          'Escribe solo el nombre del metodo.',
        ],
        placeholder: 'Escribe el metodo...',
        minLength: 8,
        checks: [],
        responseKind: 'text',
        expectedAnswer: { kind: 'keywords', include: ['encuestas'] },
      },
      {
        id: 'em-u1-l2-e2',
        title: 'Ejercicio 2: metodo para emociones y motivaciones',
        instructions: [
          'Si quieres descubrir que motiva y que frustra a un cliente, escribe el metodo mas adecuado.',
          'Escribe solo el nombre del metodo.',
        ],
        placeholder: 'Escribe el metodo...',
        minLength: 10,
        checks: [],
        responseKind: 'text',
        expectedAnswer: { kind: 'keywords', include: ['entrevistas'] },
      },
      {
        id: 'em-u1-l2-e3',
        title: 'Ejercicio 3: metodo para patrones reales',
        instructions: [
          'Si quieres revisar redes sociales, pagina web, CRM o ventas para encontrar patrones, escribe el metodo mas adecuado.',
          'Tu respuesta debe nombrar el metodo correcto.',
        ],
        placeholder: 'Escribe el metodo...',
        minLength: 12,
        checks: [],
        responseKind: 'text',
        expectedAnswer: { kind: 'keywords', include: ['analisis', 'datos'] },
      },
      {
        id: 'em-u1-l2-e4',
        title: 'Ejercicio 4: metodo para ver habitos',
        instructions: [
          'Si quieres mirar al cliente en accion sin intervenir, escribe el metodo mas adecuado.',
          'Tu respuesta debe nombrar el metodo correcto.',
        ],
        placeholder: 'Escribe el metodo...',
        minLength: 12,
        checks: [],
        responseKind: 'text',
        expectedAnswer: { kind: 'keywords', include: ['observacion', 'directa'] },
      },
      {
        id: 'em-u1-l2-e5',
        title: 'Ejercicio 5: combinar metodos',
        instructions: [
          'Escribe dos metodos que te ayuden a entender tanto lo que el cliente dice como lo que hace.',
          'Tu respuesta debe incluir una herramienta para profundidad y otra para observar habitos.',
        ],
        placeholder: 'Escribe dos metodos...',
        minLength: 18,
        checks: [],
        responseKind: 'text',
        expectedAnswer: {
          kind: 'keywords',
          include: ['entrevistas', 'observacion'],
          minWords: 3,
        },
      },
      {
        id: 'em-u1-l2-e6',
        title: 'Ejercicio 6: justificar una eleccion',
        instructions: [
          'Explica en una frase corta por que no conviene construir un buyer persona solo con suposiciones.',
          'Incluye la idea de informacion confiable y cliente.',
        ],
        placeholder: 'Escribe una frase corta...',
        minLength: 20,
        checks: [],
        responseKind: 'text',
        expectedAnswer: {
          kind: 'keywords',
          include: ['informacion', 'cliente'],
          minWords: 6,
        },
      },
    ],
  },
  {
    id: 'em-u1-l3',
    step: '3',
    title: 'Variables clave del buyer persona',
    summary:
      'Aqui aprendes que un cliente ideal no se entiende con una sola variable: necesitas ver datos, motivaciones y comportamiento.',
    goal:
      'Distinguir la dimension [[demografica]], [[psicografica]] y de [[comportamiento]].',
    content: [
      {
        title: 'Tarjeta 1: dimension demografica',
        body: [
          'La dimension [[demografica]] incluye datos como edad, genero, nivel educativo o ingresos.',
          'Te ayuda a ubicar a la persona en rasgos concretos y faciles de identificar.',
        ],
      },
      {
        title: 'Tarjeta 2: dimension psicografica',
        body: [
          'La dimension [[psicografica]] se enfoca en valores, estilo de vida, intereses y aspiraciones.',
          'Aqui ya no preguntas solo quien es la persona, sino como piensa y que desea.',
        ],
      },
      {
        title: 'Tarjeta 3: comportamiento',
        body: [
          'La dimension de [[comportamiento]] observa habitos de compra, nivel de fidelidad y canales preferidos.',
          'Esta parte ayuda mucho a decidir donde comunicarte y como vender.',
        ],
      },
    ],
    exercises: [
      {
        id: 'em-u1-l3-e1',
        title: 'Ejercicio 1: clasificar edad e ingresos',
        instructions: [
          'Si una ficha habla de edad, estudios e ingresos, escribe la dimension correcta.',
          'Tu respuesta debe nombrar la dimension.',
        ],
        placeholder: 'Escribe la dimension...',
        minLength: 10,
        checks: [],
        responseKind: 'text',
        expectedAnswer: { kind: 'keywords', include: ['demografica'] },
      },
      {
        id: 'em-u1-l3-e2',
        title: 'Ejercicio 2: clasificar valores y aspiraciones',
        instructions: [
          'Si una ficha habla de valores, estilo de vida y aspiraciones, escribe la dimension correcta.',
          'Tu respuesta debe nombrar la dimension.',
        ],
        placeholder: 'Escribe la dimension...',
        minLength: 10,
        checks: [],
        responseKind: 'text',
        expectedAnswer: { kind: 'keywords', include: ['psicografica'] },
      },
      {
        id: 'em-u1-l3-e3',
        title: 'Ejercicio 3: clasificar habitos y canales',
        instructions: [
          'Si una ficha habla de habitos de compra y canales preferidos, escribe la dimension correcta.',
          'Tu respuesta debe nombrar la dimension.',
        ],
        placeholder: 'Escribe la dimension...',
        minLength: 12,
        checks: [],
        responseKind: 'text',
        expectedAnswer: { kind: 'keywords', include: ['comportamiento'] },
      },
      {
        id: 'em-u1-l3-e4',
        title: 'Ejercicio 4: caso rapido',
        instructions: [
          'Si una clienta compra por Instagram cada mes y recomienda la marca, escribe la dimension que mejor describe ese dato.',
          'Escribe solo la dimension principal.',
        ],
        placeholder: 'Escribe la dimension...',
        minLength: 12,
        checks: [],
        responseKind: 'text',
        expectedAnswer: { kind: 'keywords', include: ['comportamiento'] },
      },
      {
        id: 'em-u1-l3-e5',
        title: 'Ejercicio 5: mini ficha',
        instructions: [
          'Escribe una mini ficha de cliente con tres lineas o una sola frase larga que incluya: edad, un valor personal y un habito de compra.',
          'Tu respuesta debe incluir esas tres partes minimas.',
        ],
        placeholder: 'Ejemplo: Edad..., valora..., compra...',
        minLength: 28,
        checks: [],
        responseKind: 'text',
        expectedAnswer: {
          kind: 'keywords',
          include: ['edad', 'valor', 'compra'],
          minWords: 8,
        },
      },
      {
        id: 'em-u1-l3-e6',
        title: 'Ejercicio 6: por que mezclar dimensiones',
        instructions: [
          'Explica en una frase por que no basta con conocer solo la edad de tu cliente ideal.',
          'Incluye la idea de comportamiento o motivaciones.',
        ],
        placeholder: 'Escribe tu explicacion...',
        minLength: 24,
        checks: [],
        responseKind: 'text',
        expectedAnswer: {
          kind: 'keywords',
          include: ['cliente ideal', 'comportamiento'],
          minWords: 7,
        },
      },
    ],
  },
  {
    id: 'em-u1-l4',
    step: '4',
    title: 'Construye tu buyer persona',
    summary:
      'Cierras la unidad reuniendo objetivos, datos, variables y una mini ficha propia de buyer persona.',
    goal:
      'Aplicar los pasos para [[identificar objetivos]], [[recopilar datos]], [[segmentar]], [[elaborar el perfil]] y [[validar]].',
    content: [
      {
        title: 'Tarjeta 1: pasos del proceso',
        body: [
          'El proceso base de la presentacion es: identificar objetivos del negocio, recopilar datos, segmentar la informacion, elaborar el perfil completo y validar o ajustar periodicamente.',
          'Ese orden importa, porque primero defines para que quieres el buyer persona y despues construyes el perfil.',
        ],
      },
      {
        title: 'Tarjeta 2: que debe tener el perfil',
        body: [
          'La actividad practica sugiere incluir informacion personal, objetivos, problemas, intereses, personalidad y que lo impulsa a actuar.',
          'Mientras mas clara sea la ficha, mas util sera para tomar decisiones de negocio.',
        ],
      },
      {
        title: 'Tarjeta 3: cierre de unidad',
        body: [
          'Cuando termines la unidad, tu meta no es solo repetir conceptos: debes poder escribir un buyer persona corto y coherente.',
          'Al completar todo el curso de emprendimiento podras descargar tu certificado.',
        ],
      },
    ],
    exercises: [
      {
        id: 'em-u1-l4-e1',
        title: 'Ejercicio 1: primer paso',
        instructions: [
          'Escribe el primer paso del proceso para construir un buyer persona.',
          'Tu respuesta debe incluir la idea central correcta.',
        ],
        placeholder: 'Escribe el primer paso...',
        minLength: 12,
        checks: [],
        responseKind: 'text',
        expectedAnswer: { kind: 'keywords', include: ['objetivos', 'negocio'] },
      },
      {
        id: 'em-u1-l4-e2',
        title: 'Ejercicio 2: paso despues de recopilar',
        instructions: [
          'Despues de recopilar datos, escribe el paso que sigue en el proceso.',
          'Tu respuesta debe nombrar la accion correcta.',
        ],
        placeholder: 'Escribe el paso...',
        minLength: 10,
        checks: [],
        responseKind: 'text',
        expectedAnswer: { kind: 'keywords', include: ['segmentar', 'informacion'] },
      },
      {
        id: 'em-u1-l4-e3',
        title: 'Ejercicio 3: campos minimos',
        instructions: [
          'Escribe tres campos que no deberian faltar en una ficha de buyer persona.',
          'Tu respuesta debe incluir edad, objetivos y problemas.',
        ],
        placeholder: 'Escribe tres campos...',
        minLength: 16,
        checks: [],
        responseKind: 'text',
        expectedAnswer: {
          kind: 'keywords',
          include: ['edad', 'objetivos', 'problemas'],
          minWords: 3,
        },
      },
      {
        id: 'em-u1-l4-e4',
        title: 'Ejercicio 4: mini buyer persona',
        instructions: [
          'Crea un mini buyer persona con estas etiquetas: Nombre, Edad, Objetivo, Problema y Canal preferido.',
          'No tiene que ser largo, pero si debe incluir esas cinco partes con claridad.',
        ],
        placeholder: 'Nombre: ...\nEdad: ...\nObjetivo: ...\nProblema: ...\nCanal preferido: ...',
        minLength: 40,
        checks: [],
        responseKind: 'text',
        expectedAnswer: {
          kind: 'keywords',
          include: ['nombre', 'edad', 'objetivo', 'problema', 'canal'],
          minWords: 10,
        },
      },
      {
        id: 'em-u1-l4-e5',
        title: 'Ejercicio 5: para que sirve este perfil',
        instructions: [
          'Explica en una frase corta como un buyer persona puede ayudarte a tomar mejores decisiones.',
          'Incluye la idea de estrategia o mensaje.',
        ],
        placeholder: 'Escribe tu frase...',
        minLength: 20,
        checks: [],
        responseKind: 'text',
        expectedAnswer: {
          kind: 'keywords',
          include: ['buyer persona', 'estrategia'],
          minWords: 7,
        },
      },
      {
        id: 'em-u1-l4-e6',
        title: 'Ejercicio 6: cierre final',
        instructions: [
          'Escribe una frase final que conecte cliente ideal con crecimiento de un emprendimiento.',
          'Incluye las palabras cliente ideal y emprendimiento.',
        ],
        placeholder: 'Escribe tu cierre...',
        minLength: 20,
        checks: [],
        responseKind: 'text',
        expectedAnswer: {
          kind: 'keywords',
          include: ['cliente ideal', 'emprendimiento'],
          minWords: 7,
        },
      },
    ],
  },
];
