# RM Maestro Para Replicar Cursos En Este Repositorio

## Proposito
Este documento sirve para que cualquier agente pueda crear un curso nuevo dentro de este repositorio manteniendo la misma calidad pedagogica, visual y tecnica que ya existe en EduTypes.

La idea es simple:
- se entrega este texto al agente
- se le da el tema del nuevo curso
- el agente debe producir un curso completo que se sienta hecho con el mismo sistema

Este RM no describe solo el contenido. Tambien define:
- como debe sentirse la app
- como se estructura cada unidad
- como se redactan las tarjetas
- como se diseñan los ejercicios
- como se valida el progreso
- como se corrige al estudiante
- que archivos del repo hay que tocar

## Como Debe Usarse Este RM
Si un agente recibe el encargo de crear un curso nuevo, debe tratar este documento como una especificacion obligatoria.

Debe usarlo junto con:
- el tema del curso
- el nivel del estudiante
- el resultado final esperado

Si falta algun dato, el agente debe asumir una version razonable, pero nunca romper estas reglas base.

## Identidad Del Producto
Este repositorio no construye sitios largos para leer. Construye una app de aprendizaje enfocada, corta, clara y progresiva.

Toda experiencia nueva debe sentirse asi:
- una app, no una landing enorme
- una pantalla principal a la vez
- una accion principal a la vez
- avance por pasos, no por scroll largo
- progreso persistente
- aprendizaje muy guiado
- practica obligatoria

## Principios No Negociables
- El curso debe ser mobile-first.
- El flujo principal no debe depender de scroll vertical largo.
- El contenido debe dividirse en micro-pasos.
- El estudiante debe sentir que siempre sabe que hacer despues.
- El progreso debe guardarse en `localStorage`.
- Cada leccion debe alternar explicacion corta y practica.
- El estudiante debe escribir manualmente.
- No se debe permitir pegar en el area principal de escritura si el curso sigue la misma logica de practica manual.
- El feedback debe ser muy preciso.
- Si el estudiante esta cerca, la app debe decir exactamente que corregir.
- Si un ejercicio espera una forma especifica, esa forma debe estar escrita en la instruccion.

## Experiencia De Usuario Que Se Debe Replicar

### Landing
La portada debe ser simple y corta.

Reglas:
- una tarjeta principal como foco
- texto corto
- una sola llamada principal a la accion
- resumen breve de progreso
- tarjetas de unidades compactas
- estados claros: cerrada, lista, ok o equivalente

La landing no debe convertirse en una pagina larga de marketing.

### Pantalla De Unidad
La unidad debe sentirse como una secuencia de pasos.

Reglas:
- una tarjeta principal visible
- una tira de lecciones o pasos arriba
- avance horizontal o por botones claros
- boton de salir
- boton de avanzar
- boton de volver
- boton para reiniciar progreso con confirmacion obligatoria

### Pantalla De Ejercicio
Debe parecer un lugar de accion, no solo de lectura.

Debe incluir cuando aplique:
- instrucciones cortas
- editor o area de respuesta
- numeracion de lineas
- linea y columna actual
- consola o salida visible si el ejercicio produce resultado
- mensaje de feedback inmediato

## Estilo Visual Obligatorio
- limpio
- sobrio
- funcional
- poco distractor
- pocos adornos
- mucho espacio util
- sin gradientes pesados
- sin glassmorphism
- sin sombras exageradas
- sin fondos ruidosos

La interfaz debe parecer una herramienta de estudio ligera y clara.

## Reglas De Responsive
- Diseñar primero para telefono.
- Nunca forzar varias columnas densas en movil.
- Si algo compite por espacio, apilarlo o convertirlo en flujo horizontal.
- Cuidar desbordes en textos, etiquetas, botones y tarjetas.
- Si el editor envuelve lineas en movil, la numeracion debe seguir representando lineas logicas, no lineas visuales.

## Modelo Pedagogico Que Se Debe Replicar

### Filosofia
El curso debe ser ultra guiado.

Eso significa:
- no asumir conocimiento previo que no haya sido explicado
- no usar una pieza antes de explicarla sola
- no mezclar demasiadas ideas en una sola tarjeta
- no pedir “resuelve esto” si antes no se desarmo la sintaxis

### Orden Piramidal
Cada unidad debe crecer en forma ascendente.

Orden correcto:
1. presentar una pieza aislada
2. explicar que significa cada simbolo
3. mostrar una forma minima
4. pedir un ejercicio minimo
5. combinar con la siguiente pieza
6. repetir
7. terminar en un uso real

Nunca hacer esto:
- usar una estructura compleja antes de explicar sus partes
- pedir una firma completa antes de explicar `:`, `=`, `{}`, `[]`, `()`, `,`, `;`, `.` o la pieza equivalente del tema

### Ritmo Base De Leccion
La secuencia por defecto debe ser:

`tarjeta -> ejercicio -> ejercicio -> tarjeta -> ejercicio -> ejercicio`

Reglas:
- cada tarjeta enseña muy poco
- el segundo ejercicio despues de cada tarjeta no lleva placeholder
- si un concepto sigue dificil, se agrega otra tarjeta y dos ejercicios mas
- en unidades fundacionales se puede duplicar o triplicar la cantidad de microtarjetas

### Cantidad De Practica
La cantidad de ejercicios debe ser alta.

La logica correcta no es reducir practica. La logica correcta es:
- mantener muchos ejercicios
- hacer las instrucciones mas claras
- hacer la correccion mucho mas precisa

## Reglas De Redaccion Del Contenido
- usar lenguaje muy simple
- frases cortas
- una idea por frase
- evitar parrafos largos
- evitar tecnicismos innecesarios
- explicar cada simbolo cuando aparece por primera vez
- decir literalmente para que sirve cada parte de la linea

### Ejemplo De Nivel De Detalle Esperado
No basta con decir:
- “esto es un objeto”

Debe decirse algo como:
- `const` crea la variable
- `profile` es el nombre
- `:` abre el tipo que debe respetar
- `{}` agrupa propiedades
- `name: string` dice que `name` debe ser texto
- `=` separa la definicion del valor real

### Resaltado Visual Del Texto
Lo importante debe ir resaltado en naranja, negrita y subrayado usando el patron que ya entiende la UI:

`[[palabra importante]]`

Ese formato debe reservarse para:
- palabras clave
- simbolos importantes
- errores frecuentes
- nombres de piezas centrales

El texto en tarjetas debe ser corto incluso cuando el concepto sea complejo. Si hace falta mas detalle, se divide en otra tarjeta.

## Reglas De Construccion De Ejercicios

### El Ejercicio Debe Ser Resoluble
El estudiante debe tener todo lo necesario para resolver rapido si lee la tarjeta anterior.

Eso obliga a:
- pedir una sola accion clara
- evitar ambiguedad
- mostrar la forma esperada si es una estructura nueva
- no esconder dependencias

### Parametros Fantasma
Nunca decir solo:
- “usa un parametro de tipo objeto”

Debe decirse la forma exacta, por ejemplo:
- `badge: { label: string; unlocked: boolean }`

Si el estudiante declara una variable arriba pero no tipa el parametro de una funcion, el feedback debe aclarar:
- declarar un valor arriba no tipa automaticamente el parametro

### Retornos Fantasma
Nunca decir solo:
- “debe devolver el resultado”

Si se espera una forma concreta, se debe decir:
- `return badge.unlocked;`
- `return student.name;`
- `return topics.length;`

### Salidas Fantasma
Si el ejercicio espera una salida visible en consola, la instruccion debe decir:
- que debe mostrarse
- si hay que escribir `console.log(...)`
- si tambien hay que reescribir la variable, funcion o clase antes del `console.log(...)`

Nunca asumir que el estudiante sabe que tambien debe reconstruir el contexto previo.

### Dependencias Fantasma
No diseñar ejercicios donde la solucion dependa de una pieza no visible sin aclararlo.

Si un ejercicio necesita una declaracion previa, la instruccion debe elegir una de estas dos rutas:
- pedir reescribir esa pieza explicitamente
- o no depender de ella

## Reglas De Validacion Y Correccion

### Validacion Real
Si el curso es de programacion, preferir validacion real con compilador, parser o evaluador autentico.

Orden de preferencia:
1. compilador o parser real
2. analisis estructural real
3. reglas complementarias propias

No confiar solo en buscar texto si el tema permite validacion mas realista.

### La Correccion Debe Separar Tres Capas
Siempre que sea posible, distinguir:
- compilacion o validez base
- objetivo pedagogico del ejercicio
- salida visible o resultado observable

Ejemplo correcto de feedback:
- `Compilacion: correcta.`
- `Objetivo del ejercicio: te falta tipar el parametro badge.`
- `Salida visible: aun no aparece nada en la consola.`

### Precision Del Error
Evitar mensajes genericos cuando se puede inferir algo mejor.

Buenos mensajes:
- `te falta : despues de student`
- `te sobra ; antes de }`
- `escribiste unloked, pero debe ser unlocked`
- `despues de unlocked debe ir : y no =`
- `Linea 3, columna 12: te falta , antes de level`

Malos mensajes:
- `falta tipo`
- `revisa sintaxis`
- `hay un error`

### Ubicacion Del Error
El feedback ideal debe incluir:
- linea
- columna
- simbolo o estructura

Si no se puede tener todo, al menos debe decir la pieza exacta a corregir.

### Mensajes De Exito
Cuando el estudiante lo hace bien, el mensaje debe ser gratificante.

Debe:
- felicitar
- confirmar que el ejercicio esta correcto
- decir si compilo
- decir si cumplio el objetivo
- mencionar si ya hubo salida visible

No debe ser solo un `ok`.

## Interaccion Con El Area De Escritura
- bloquear pegado
- bloquear arrastre si aplica
- permitir solo escritura manual
- mostrar lineas
- mostrar linea y columna actual
- mantener buena experiencia en movil
- si hay wrap visual en movil, los numeros deben seguir representando lineas logicas

## Uso De Consola O Salida Visible
Cuando el curso sea practico y la herramienta lo permita, mostrar resultado visible hace la experiencia mas entretenida y concreta.

Reglas:
- usar consola para ver efectos del codigo
- explicar cuando conviene usar `console.log(...)`
- no exigir salida visible sin decirlo
- si se espera salida visible, indicar exactamente que deberia aparecer

## Arquitectura De Contenido Dentro Del Repo

### Tipos Base
La estructura actual vive en [src/data/unit-types.ts](/C:/Users/cangu/Documents/edutypes/src/data/unit-types.ts).

El agente debe respetar estos tipos:
- `LessonContentBlock`
- `LessonExercise`
- `UnitLesson`

### Catalogo General De Unidades
El resumen de unidades para la portada vive en [src/data/course.ts](/C:/Users/cangu/Documents/edutypes/src/data/course.ts).

Si se agrega un nuevo curso o se amplian unidades, hay que actualizar ese archivo para:
- titulo
- foco
- resultado
- lista breve de contenidos

### Archivos De Lecciones
Cada unidad vive en un archivo de `src/data`, por ejemplo:
- [src/data/unit-one.ts](/C:/Users/cangu/Documents/edutypes/src/data/unit-one.ts)
- [src/data/unit-two.ts](/C:/Users/cangu/Documents/edutypes/src/data/unit-two.ts)
- [src/data/unit-three.ts](/C:/Users/cangu/Documents/edutypes/src/data/unit-three.ts)

Cada unidad exporta un arreglo de `UnitLesson[]`.

### Navegacion Y Persistencia
La app principal vive en [src/App.tsx](/C:/Users/cangu/Documents/edutypes/src/App.tsx).

Si se agrega una unidad nueva, normalmente hay que:
- importar el nuevo archivo de lecciones
- agregar su ruta por hash
- agregar su storage key
- crear su estado de progreso
- guardar su progreso con `saveUnitProgress`
- calcular su desbloqueo
- renderizar la vista de unidad

### Landing
La portada vive en `src/components/HomePage.tsx`.

Si una nueva unidad debe aparecer desde la home, hay que:
- agregar la tarjeta
- mostrar su estado
- enlazarla

### Pantalla De Unidad
La experiencia de unidad vive hoy en `src/components/UnitOnePage.tsx`.

Ese componente ya concentra:
- flujo por etapas
- editor
- consola
- feedback
- avance entre pasos
- confirmacion de reinicio

El agente debe reutilizar esta base siempre que el nuevo curso siga la misma experiencia.

### Validacion
La validacion vive en `src/lib/exercise-validator.ts`.

Si se agregan ejercicios nuevos que necesiten correccion precisa, el agente debe:
- localizar cada ejercicio por id
- agregar reglas especificas
- cubrir errores comunes
- cubrir typos frecuentes
- cubrir signos equivocados
- cubrir faltas de contexto

### Progreso
La persistencia vive en `src/lib/unit-progress.ts`.

El progreso debe seguir siendo:
- secuencial
- resistente a cambios manuales en `localStorage`
- bloqueado por leccion hasta cumplir la anterior

## Estructura Recomendada Para Un Curso Nuevo

### Escala Del Curso
Si es un curso completo dentro de este producto, se recomienda:
- 1 landing general
- varias unidades
- cada unidad con 4 a 8 lecciones
- cada leccion con varias microtarjetas
- cada microtarjeta con 2 ejercicios

### Escala De Una Unidad
Una unidad base debe:
- ir de lo simple a lo combinado
- tener objetivos muy concretos
- repetir bastante
- cerrar con integracion real

### Escala De Una Leccion
Una leccion debe incluir:
- `step`
- `title`
- `summary`
- `goal`
- `content`
- `exercises`

Las tarjetas del `content` deben ser cortas.

Los ejercicios deben:
- tener `id` unico
- titulo claro
- instrucciones cortas
- `placeholder` solo donde aporte
- `minLength` razonable
- checks base coherentes con la meta

## Plantilla Mental Para Diseñar Cada Bloque
Antes de escribir una leccion, el agente debe responder:
- que pieza minima aprende aqui
- que simbolos componen esa pieza
- cual es el error mas probable
- que ejercicio minimo prueba esa pieza
- como se combina con la siguiente pieza
- que salida visible podria reforzar el aprendizaje

Si no puede responder esas preguntas, la leccion aun esta demasiado grande.

## Checklist Obligatorio Para Crear Un Nuevo Curso
- definir el tema general del curso
- definir para quien es
- definir el resultado final esperado
- dividir en unidades ascendentes
- dividir cada unidad en lecciones muy pequeñas
- asegurar que cada simbolo o parte nueva se explique antes de usarla
- escribir tarjetas cortas
- resaltar lo importante con `[[...]]`
- crear muchos ejercicios pequeños
- evitar parametros fantasma
- evitar retornos fantasma
- evitar salidas fantasma
- evitar dependencias fantasma
- agregar feedback de error muy preciso
- agregar mensajes de exito gratificantes
- mantener persistencia con `localStorage`
- verificar vista movil
- verificar que no haya overflow
- verificar que no haya scroll vertical innecesario
- compilar y probar

## Prompt Base Para Darle A Otro Agente
Este bloque se puede copiar y completar:

```text
Quiero que crees un nuevo curso dentro de este repositorio.

Tema del curso: [AQUI EL TEMA]
Nivel del estudiante: [AQUI EL NIVEL]
Resultado final esperado: [AQUI EL RESULTADO]

Debes seguir obligatoriamente el archivo COURSE_RM.md de este repo.

Requisitos no negociables:
- mantener la experiencia tipo app, no pagina larga
- mobile-first
- progreso persistente en localStorage
- flujo por tarjetas y ejercicios cortos
- explicacion ultra simple y ascendente
- explicar cada simbolo antes de usarlo
- muchos ejercicios pequenos
- feedback de error muy preciso
- mensajes de exito gratificantes
- sin pegar en las areas principales de escritura
- si hay salida visible, decir exactamente que debe verse

Implementa el curso completo respetando la arquitectura existente del proyecto.
```

## Criterio Final De Calidad
Un curso nuevo solo esta bien hecho si cumple estas cuatro cosas al mismo tiempo:
- se siente igual de claro y funcional que EduTypes
- enseña por escalones pequenos y seguros
- corrige con precision suficiente para que el estudiante se autocorrija rapido
- se integra tecnicamente al repo sin romper el flujo existente

Si falta una de esas cuatro, el curso aun no esta listo.
