import { unitOneLessons, type ExerciseCheck } from '../data/unit-one';

export type ExerciseValidationResult = {
  ok: boolean;
  successes: string[];
  errors: string[];
  compilerErrors: string[];
  ruleErrors: string[];
  compilerOk: boolean;
};

type RuleValidationResult = {
  ok: boolean;
  successes: string[];
  errors: string[];
};

type TsModule = typeof import('typescript');

const EXERCISE_FILE = 'exercise.ts';

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function normalizeCheckText(sourceText: string) {
  return sourceText
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}()[\],:;=])\s*/g, '$1')
    .replace(/;}/g, '}')
    .replace(/;\)/g, ')')
    .trim();
}

function compactCodeText(sourceText: string) {
  return sourceText.toLowerCase().replace(/\s+/g, '');
}

function stripCodePunctuation(sourceText: string) {
  return sourceText.toLowerCase().replace(/[`'"\s{}()[\],:;=.+\-*/]/g, '');
}

function getLineColumnFromIndex(sourceText: string, index: number) {
  const safeIndex = Math.max(0, Math.min(index, sourceText.length));
  const before = sourceText.slice(0, safeIndex);
  const lines = before.split('\n');

  return {
    line: lines.length,
    column: lines[lines.length - 1].length + 1,
  };
}

function formatLocatedHint(sourceText: string, index: number, message: string) {
  const { line, column } = getLineColumnFromIndex(sourceText, index);
  return `Linea ${line}, columna ${column}: ${message}`;
}

function findMissingColonHint(expectedText: string, sourceText: string) {
  const expectedCompact = compactCodeText(expectedText);
  const sourceCompact = compactCodeText(sourceText);
  const matches = expectedCompact.matchAll(/([a-z_$][\w$]*|\)):(\{|\[|string|number|boolean)/g);

  for (const match of matches) {
    const left = match[1];
    const right = match[2];

    if (sourceCompact.includes(`${left}:${right}`)) {
      continue;
    }

    if (sourceCompact.includes(`${left}${right}`)) {
      const pattern = new RegExp(`${escapeRegExp(left)}\\s*${escapeRegExp(right)}`, 'i');
      const sourceMatch = pattern.exec(sourceText);
      const index = sourceMatch ? sourceMatch.index + left.length : 0;

      return left === ')'
        ? formatLocatedHint(sourceText, index, 'Te falta `:` despues de `)`.')
        : formatLocatedHint(sourceText, index, `Te falta \`:\` despues de \`${left}\`.`);
    }
  }

  return null;
}

function findMissingCommaHint(expectedText: string, sourceText: string) {
  const expectedCompact = compactCodeText(expectedText);
  const sourceCompact = compactCodeText(sourceText);
  const matches = expectedCompact.matchAll(/([a-z0-9_$\]\}]+),([a-z_$][\w$]*)/g);

  for (const match of matches) {
    const left = match[1];
    const right = match[2];

    if (sourceCompact.includes(`${left},${right}`)) {
      continue;
    }

    if (sourceCompact.includes(`${left}${right}`)) {
      const pattern = new RegExp(`${escapeRegExp(left)}\\s*${escapeRegExp(right)}`, 'i');
      const sourceMatch = pattern.exec(sourceText);
      const index = sourceMatch ? sourceMatch.index + left.length : 0;

      return formatLocatedHint(sourceText, index, `Te falta \`,\` antes de \`${right}\`.`);
    }
  }

  return null;
}

function findMissingEqualsHint(expectedText: string, sourceText: string) {
  const expectedCompact = compactCodeText(expectedText);
  const sourceCompact = compactCodeText(sourceText);
  const match = expectedCompact.match(/([a-z_$][\w$\]\}]*)=/);

  if (!match) {
    return null;
  }

  const left = match[1];
  if (!sourceCompact.includes(`${left}=`) && sourceCompact.includes(left)) {
    const pattern = new RegExp(`${escapeRegExp(left)}\\s+`, 'i');
    const sourceMatch = pattern.exec(sourceText);
    const index = sourceMatch ? sourceMatch.index + left.length : 0;

    return formatLocatedHint(
      sourceText,
      index,
      `Te falta \`=\` despues de \`${left.replace(/^[^a-z_$]*/i, '') || left}\`.`,
    );
  }

  return null;
}

function findMissingClosingHint(expectedText: string, sourceText: string) {
  const expectedCounts = {
    '}': (expectedText.match(/\}/g) ?? []).length,
    ')': (expectedText.match(/\)/g) ?? []).length,
    ']': (expectedText.match(/\]/g) ?? []).length,
  };
  const sourceCounts = {
    '}': (sourceText.match(/\}/g) ?? []).length,
    ')': (sourceText.match(/\)/g) ?? []).length,
    ']': (sourceText.match(/\]/g) ?? []).length,
  };

  if (sourceCounts['}'] < expectedCounts['}']) {
    return formatLocatedHint(sourceText, sourceText.length, 'Te falta `}` para cerrar el bloque.');
  }

  if (sourceCounts[')'] < expectedCounts[')']) {
    return formatLocatedHint(sourceText, sourceText.length, 'Te falta `)` para cerrar.');
  }

  if (sourceCounts[']'] < expectedCounts[']']) {
    return formatLocatedHint(
      sourceText,
      sourceText.length,
      'Te falta `]` para cerrar la lista o tupla.',
    );
  }

  return null;
}

function findExtraCommaHint(expectedText: string, sourceText: string) {
  const expectedCompact = compactCodeText(expectedText);
  const sourceCompact = compactCodeText(sourceText);
  const commaBeforeClosing = /,(\s*[}\]\)])/m.exec(sourceText);

  if (!commaBeforeClosing) {
    return null;
  }

  if (
    (sourceCompact.includes(',}') && !expectedCompact.includes(',}')) ||
    (sourceCompact.includes(',]') && !expectedCompact.includes(',]')) ||
    (sourceCompact.includes(',)') && !expectedCompact.includes(',)'))
  ) {
    const closingChar = commaBeforeClosing[1].trim()[0];
    return formatLocatedHint(
      sourceText,
      commaBeforeClosing.index,
      `Te sobra \`,\` antes de \`${closingChar}\`.`,
    );
  }

  return null;
}

function findExtraSemicolonHint(expectedText: string, sourceText: string) {
  const expectedCompact = compactCodeText(expectedText);
  const sourceCompact = compactCodeText(sourceText);
  const semicolonBeforeClosing = /;(\s*[}\]\)])/m.exec(sourceText);

  if (!semicolonBeforeClosing) {
    return null;
  }

  if (
    (sourceCompact.includes(';}') && !expectedCompact.includes(';}')) ||
    (sourceCompact.includes(';)') && !expectedCompact.includes(';)')) ||
    (sourceCompact.includes(';]') && !expectedCompact.includes(';]'))
  ) {
    const closingChar = semicolonBeforeClosing[1].trim()[0];
    return formatLocatedHint(
      sourceText,
      semicolonBeforeClosing.index,
      `Te sobra \`;\` antes de \`${closingChar}\`.`,
    );
  }

  return null;
}

function findPreciseSyntaxHint(expectedText: string, sourceText: string) {
  const sourceWithoutPunctuation = stripCodePunctuation(sourceText);
  const expectedWithoutPunctuation = stripCodePunctuation(expectedText);

  if (!sourceWithoutPunctuation.includes(expectedWithoutPunctuation)) {
    return null;
  }

  return (
    findExtraCommaHint(expectedText, sourceText) ??
    findExtraSemicolonHint(expectedText, sourceText) ??
    findMissingColonHint(expectedText, sourceText) ??
    findMissingCommaHint(expectedText, sourceText) ??
    findMissingEqualsHint(expectedText, sourceText) ??
    findMissingClosingHint(expectedText, sourceText)
  );
}

function getPreviousMeaningfulCharacter(sourceText: string, index: number) {
  for (let cursor = Math.min(index - 1, sourceText.length - 1); cursor >= 0; cursor -= 1) {
    const current = sourceText[cursor];
    if (!/\s/.test(current)) {
      return { char: current, index: cursor };
    }
  }

  return null;
}

function explainCompilerDiagnostic(
  ts: TsModule,
  diagnostic: import('typescript').Diagnostic,
  sourceText: string,
) {
  const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, ' ');

  if (!diagnostic.file || diagnostic.start === undefined) {
    return message;
  }

  const previousChar = getPreviousMeaningfulCharacter(sourceText, diagnostic.start);

  if (message === 'Expression expected.' && previousChar?.char === ',') {
    return formatLocatedHint(
      sourceText,
      previousChar.index,
      'Te sobra `,` al final de la expresion anterior.',
    );
  }

  if (message === "',' expected.") {
    return formatLocatedHint(sourceText, diagnostic.start, 'Te falta `,` en esta posicion.');
  }

  if (message === "':' expected.") {
    return formatLocatedHint(sourceText, diagnostic.start, 'Te falta `:` en esta posicion.');
  }

  if (message === "';' expected.") {
    return formatLocatedHint(sourceText, diagnostic.start, 'Te falta `;` en esta posicion.');
  }

  if (message === "'}' expected.") {
    return formatLocatedHint(sourceText, diagnostic.start, 'Te falta `}` para cerrar el bloque.');
  }

  if (message === "')' expected.") {
    return formatLocatedHint(sourceText, diagnostic.start, 'Te falta `)` para cerrar.');
  }

  return null;
}

function findExerciseDefinition(exerciseId: string) {
  for (const lesson of unitOneLessons) {
    const exercise = lesson.exercises.find((item) => item.id === exerciseId);
    if (exercise) {
      return exercise;
    }
  }

  return null;
}

function runCheck(check: ExerciseCheck, sourceText: string) {
  const normalizedSource = normalizeCheckText(sourceText);

  if (check.kind === 'includes') {
    const normalizedNeedle = normalizeCheckText(check.needle);

    if (normalizedSource.includes(normalizedNeedle)) {
      return { ok: true, message: check.success };
    }

    const preciseSyntaxHint = findPreciseSyntaxHint(check.needle, sourceText);

    if (preciseSyntaxHint) {
      return {
        ok: false,
        message: `${check.error} ${preciseSyntaxHint}`,
      };
    }

    return { ok: false, message: check.error };
  }

  const normalizedNeedles = check.needles.map((needle) => normalizeCheckText(needle));

  if (normalizedNeedles.some((needle) => normalizedSource.includes(needle))) {
    return { ok: true, message: check.success };
  }

  const preciseSyntaxHint = check.needles
    .map((needle) => findPreciseSyntaxHint(needle, sourceText))
    .find((hint) => hint !== null);

  if (preciseSyntaxHint) {
    return {
      ok: false,
      message: `${check.error} ${preciseSyntaxHint}`,
    };
  }

  return { ok: false, message: check.error };
}

function validateWithLessonChecks(exerciseId: string, sourceText: string): RuleValidationResult {
  const exercise = findExerciseDefinition(exerciseId);

  if (!exercise) {
    return {
      ok: true,
      successes: [],
      errors: [],
    };
  }

  const successes: string[] = [];
  const errors: string[] = [];
  const normalizedSource = normalizeCheckText(sourceText);

  if (normalizedSource.length < exercise.minLength / 2) {
    errors.push('El ejercicio esta demasiado corto para cumplir la consigna.');
  }

  for (const check of exercise.checks) {
    const result = runCheck(check, sourceText);

    if (result.ok) {
      successes.push(result.message);
    } else {
      errors.push(result.message);
    }
  }

  return {
    ok: errors.length === 0,
    successes,
    errors,
  };
}

function formatDiagnostic(ts: TsModule, diagnostic: import('typescript').Diagnostic) {
  const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, ' ');

  if (!diagnostic.file || diagnostic.start === undefined) {
    return message;
  }

  const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(
    diagnostic.start,
  );

  return `Linea ${line + 1}, columna ${character + 1}: ${message}`;
}

function getCompilerErrors(ts: TsModule, sourceText: string) {
  const sourceFile = ts.createSourceFile(
    EXERCISE_FILE,
    sourceText,
    ts.ScriptTarget.ES2022,
    true,
    ts.ScriptKind.TS,
  );

  const transpileResult = ts.transpileModule(sourceText, {
    fileName: EXERCISE_FILE,
    reportDiagnostics: true,
    compilerOptions: {
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.ESNext,
      strict: true,
    },
  });

  const diagnostics = [
    ...(transpileResult.diagnostics ?? []),
  ];

  return {
    sourceFile,
    errors: diagnostics
      .filter((diagnostic) => diagnostic.category === ts.DiagnosticCategory.Error)
      .map((diagnostic) =>
        explainCompilerDiagnostic(ts, diagnostic, sourceText) ?? formatDiagnostic(ts, diagnostic),
      ),
  };
}

function findVariableDeclaration(
  ts: TsModule,
  sourceFile: import('typescript').SourceFile,
  name: string,
) {
  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) {
      continue;
    }

    for (const declaration of statement.declarationList.declarations) {
      if (ts.isIdentifier(declaration.name) && declaration.name.text === name) {
        return declaration;
      }
    }
  }

  return null;
}

function getDeclarationKeyword(ts: TsModule, declaration: import('typescript').VariableDeclaration) {
  const flags = declaration.parent.flags;

  if ((flags & ts.NodeFlags.Const) !== 0) {
    return 'const';
  }

  if ((flags & ts.NodeFlags.Let) !== 0) {
    return 'let';
  }

  return 'var';
}

function isKeywordType(
  ts: TsModule,
  typeNode: import('typescript').TypeNode | undefined,
  expected: 'string' | 'number' | 'boolean',
) {
  if (!typeNode) {
    return false;
  }

  if (expected === 'string') {
    return typeNode.kind === ts.SyntaxKind.StringKeyword;
  }

  if (expected === 'number') {
    return typeNode.kind === ts.SyntaxKind.NumberKeyword;
  }

  return typeNode.kind === ts.SyntaxKind.BooleanKeyword;
}

function getFunctionDeclaration(
  ts: TsModule,
  sourceFile: import('typescript').SourceFile,
  name: string,
) {
  for (const statement of sourceFile.statements) {
    if (ts.isFunctionDeclaration(statement) && statement.name?.text === name) {
      return statement;
    }
  }

  return null;
}

function hasReturnStatement(ts: TsModule, node: import('typescript').FunctionDeclaration) {
  let found = false;

  const visit = (child: import('typescript').Node) => {
    if (ts.isReturnStatement(child)) {
      found = true;
      return;
    }

    ts.forEachChild(child, visit);
  };

  if (node.body) {
    ts.forEachChild(node.body, visit);
  }

  return found;
}

function hasPropertyAccessText(
  ts: TsModule,
  node: import('typescript').Node,
  expectedText: string,
  sourceFile: import('typescript').SourceFile,
) {
  let found = false;

  const visit = (child: import('typescript').Node) => {
    if (child.getText(sourceFile) === expectedText) {
      found = true;
      return;
    }

    ts.forEachChild(child, visit);
  };

  visit(node);

  return found;
}

function validateTypedVariables(
  ts: TsModule,
  sourceFile: import('typescript').SourceFile,
): RuleValidationResult {
  const successes: string[] = [];
  const errors: string[] = [];

  const moduleName = findVariableDeclaration(ts, sourceFile, 'moduleName');
  if (!moduleName) {
    errors.push('No encontre la variable `moduleName`.');
  } else {
    if (getDeclarationKeyword(ts, moduleName) !== 'const') {
      errors.push('`moduleName` debe declararse con `const`.');
    } else if (!isKeywordType(ts, moduleName.type, 'string')) {
      errors.push('`moduleName` debe tener tipo `string`.');
    } else if (!moduleName.initializer || !ts.isStringLiteral(moduleName.initializer)) {
      errors.push('`moduleName` debe guardar un texto.');
    } else {
      successes.push('`moduleName` esta bien declarada como constante string.');
    }
  }

  const totalExercises = findVariableDeclaration(ts, sourceFile, 'totalExercises');
  if (!totalExercises) {
    errors.push('No encontre la variable `totalExercises`.');
  } else {
    if (getDeclarationKeyword(ts, totalExercises) !== 'let') {
      errors.push('`totalExercises` debe declararse con `let`.');
    } else if (!isKeywordType(ts, totalExercises.type, 'number')) {
      errors.push('`totalExercises` debe tener tipo `number`.');
    } else if (
      !totalExercises.initializer ||
      !ts.isNumericLiteral(totalExercises.initializer)
    ) {
      errors.push('`totalExercises` debe guardar un numero.');
    } else {
      successes.push('`totalExercises` esta bien declarada como variable numerica.');
    }
  }

  const hasCertificate = findVariableDeclaration(ts, sourceFile, 'hasCertificate');
  if (!hasCertificate) {
    errors.push('No encontre la variable `hasCertificate`.');
  } else {
    const keyword = getDeclarationKeyword(ts, hasCertificate);
    if (keyword !== 'let' && keyword !== 'const') {
      errors.push('`hasCertificate` debe declararse con `let` o `const`.');
    } else if (!isKeywordType(ts, hasCertificate.type, 'boolean')) {
      errors.push('`hasCertificate` debe tener tipo `boolean`.');
    } else if (
      !hasCertificate.initializer ||
      (hasCertificate.initializer.kind !== ts.SyntaxKind.TrueKeyword &&
        hasCertificate.initializer.kind !== ts.SyntaxKind.FalseKeyword)
    ) {
      errors.push('`hasCertificate` debe guardar `true` o `false`.');
    } else {
      successes.push('`hasCertificate` esta bien declarada como booleano.');
    }
  }

  return { ok: errors.length === 0, successes, errors };
}

function validateTypedFunction(
  ts: TsModule,
  sourceFile: import('typescript').SourceFile,
): RuleValidationResult {
  const successes: string[] = [];
  const errors: string[] = [];
  const fn = getFunctionDeclaration(ts, sourceFile, 'greetStudent');

  if (!fn) {
    errors.push('No encontre la funcion `greetStudent`.');
    return { ok: false, successes, errors };
  }

  successes.push('La funcion `greetStudent` existe.');

  const nameParam = fn.parameters.find((parameter) => parameter.name.getText(sourceFile) === 'name');
  if (!nameParam || !isKeywordType(ts, nameParam.type, 'string')) {
    errors.push('La funcion debe recibir `name: string`.');
  } else {
    successes.push('El parametro `name` esta tipado como string.');
  }

  const levelParam = fn.parameters.find(
    (parameter) => parameter.name.getText(sourceFile) === 'level',
  );
  if (!levelParam || !isKeywordType(ts, levelParam.type, 'number')) {
    errors.push('La funcion debe recibir `level: number`.');
  } else {
    successes.push('El parametro `level` esta tipado como number.');
  }

  if (!isKeywordType(ts, fn.type, 'string')) {
    errors.push('La funcion debe declarar retorno `string`.');
  } else {
    successes.push('El retorno esta declarado como string.');
  }

  if (!hasReturnStatement(ts, fn)) {
    errors.push('La funcion necesita un `return`.');
  } else {
    successes.push('La funcion contiene un `return`.');
  }

  return { ok: errors.length === 0, successes, errors };
}

function validateStudentObject(
  ts: TsModule,
  sourceFile: import('typescript').SourceFile,
): RuleValidationResult {
  const successes: string[] = [];
  const errors: string[] = [];
  const declaration = findVariableDeclaration(ts, sourceFile, 'student');

  if (!declaration) {
    errors.push('No encontre la constante `student`.');
    return { ok: false, successes, errors };
  }

  if (getDeclarationKeyword(ts, declaration) !== 'const') {
    errors.push('`student` debe declararse con `const`.');
  } else {
    successes.push('`student` esta declarada como constante.');
  }

  if (!declaration.type || !ts.isTypeLiteralNode(declaration.type)) {
    errors.push('`student` debe tener un tipo de objeto en la declaracion.');
  } else {
    const memberNames = declaration.type.members.map((member) => member.name?.getText(sourceFile));
    for (const expected of ['name', 'completed', 'premium']) {
      if (!memberNames.includes(expected)) {
        errors.push(`Falta la propiedad \`${expected}\` en el tipo de \`student\`.`);
      }
    }
    if (errors.length === 0) {
      successes.push('El tipo de `student` incluye las propiedades necesarias.');
    }
  }

  if (!declaration.initializer || !ts.isObjectLiteralExpression(declaration.initializer)) {
    errors.push('`student` debe inicializarse con un objeto real.');
  } else {
    const propertyNames = declaration.initializer.properties
      .filter((property): property is import('typescript').PropertyAssignment =>
        ts.isPropertyAssignment(property),
      )
      .map((property) => property.name.getText(sourceFile));

    for (const expected of ['name', 'completed', 'premium']) {
      if (!propertyNames.includes(expected)) {
        errors.push(`Falta la propiedad \`${expected}\` dentro del objeto \`student\`.`);
      }
    }

    if (errors.length === 0) {
      successes.push('El objeto `student` tiene las propiedades esperadas.');
    }
  }

  return { ok: errors.length === 0, successes, errors };
}

function validatePrintStudent(
  ts: TsModule,
  sourceFile: import('typescript').SourceFile,
): RuleValidationResult {
  const successes: string[] = [];
  const errors: string[] = [];
  const fn = getFunctionDeclaration(ts, sourceFile, 'printStudent');

  if (!fn) {
    errors.push('No encontre la funcion `printStudent`.');
    return { ok: false, successes, errors };
  }

  successes.push('La funcion `printStudent` existe.');

  const param = fn.parameters.find((parameter) => parameter.name.getText(sourceFile) === 'student');
  if (!param || !param.type || !ts.isTypeLiteralNode(param.type)) {
    errors.push('La funcion debe recibir un parametro `student` tipado como objeto.');
  } else {
    const memberNames = param.type.members.map((member) => member.name?.getText(sourceFile));
    if (!memberNames.includes('name') || !memberNames.includes('completed')) {
      errors.push('El parametro `student` debe incluir `name` y `completed`.');
    } else {
      successes.push('El parametro `student` esta tipado correctamente.');
    }
  }

  if (!isKeywordType(ts, fn.type, 'string')) {
    errors.push('La funcion debe devolver `string`.');
  } else {
    successes.push('La funcion declara retorno string.');
  }

  if (!hasPropertyAccessText(ts, fn, 'student.name', sourceFile)) {
    errors.push('Falta usar `student.name` dentro de la funcion.');
  } else {
    successes.push('La funcion usa `student.name`.');
  }

  if (!hasPropertyAccessText(ts, fn, 'student.completed', sourceFile)) {
    errors.push('Falta usar `student.completed` dentro de la funcion.');
  } else {
    successes.push('La funcion usa `student.completed`.');
  }

  return { ok: errors.length === 0, successes, errors };
}

function validateTopicsArray(
  ts: TsModule,
  sourceFile: import('typescript').SourceFile,
): RuleValidationResult {
  const successes: string[] = [];
  const errors: string[] = [];
  const topics = findVariableDeclaration(ts, sourceFile, 'topics');

  if (!topics) {
    errors.push('No encontre la constante `topics`.');
  } else {
    if (!topics.type || topics.type.getText(sourceFile) !== 'string[]') {
      errors.push('`topics` debe tener tipo `string[]`.');
    } else if (
      !topics.initializer ||
      !ts.isArrayLiteralExpression(topics.initializer) ||
      topics.initializer.elements.length < 3
    ) {
      errors.push('`topics` debe ser un array con al menos tres elementos.');
    } else {
      successes.push('`topics` esta bien declarado como array de strings.');
    }
  }

  const fn = getFunctionDeclaration(ts, sourceFile, 'countTopics');
  if (!fn) {
    errors.push('No encontre la funcion `countTopics`.');
  } else {
    const param = fn.parameters.find((parameter) => parameter.name.getText(sourceFile) === 'topics');
    if (!param || param.type?.getText(sourceFile) !== 'string[]') {
      errors.push('`countTopics` debe recibir `topics: string[]`.');
    } else {
      successes.push('`countTopics` recibe `topics: string[]`.');
    }

    if (!isKeywordType(ts, fn.type, 'number')) {
      errors.push('`countTopics` debe devolver `number`.');
    } else {
      successes.push('`countTopics` declara retorno number.');
    }

    if (!hasPropertyAccessText(ts, fn, 'topics.length', sourceFile)) {
      errors.push('La funcion debe usar `topics.length` para contar.');
    } else {
      successes.push('La funcion usa `topics.length`.');
    }
  }

  return { ok: errors.length === 0, successes, errors };
}

function validateLessonTuple(
  ts: TsModule,
  sourceFile: import('typescript').SourceFile,
): RuleValidationResult {
  const successes: string[] = [];
  const errors: string[] = [];
  const declaration = findVariableDeclaration(ts, sourceFile, 'lessonPair');

  if (!declaration) {
    errors.push('No encontre la constante `lessonPair`.');
    return { ok: false, successes, errors };
  }

  if (!declaration.type || declaration.type.getText(sourceFile) !== '[string, number]') {
    errors.push('`lessonPair` debe tener tipo `[string, number]`.');
  } else if (
    !declaration.initializer ||
    !ts.isArrayLiteralExpression(declaration.initializer) ||
    declaration.initializer.elements.length !== 2
  ) {
    errors.push('`lessonPair` debe inicializarse con exactamente dos valores.');
  } else {
    const [first, second] = declaration.initializer.elements;
    if (!ts.isStringLiteral(first)) {
      errors.push('El primer valor de `lessonPair` debe ser un texto.');
    }
    if (!ts.isNumericLiteral(second)) {
      errors.push('El segundo valor de `lessonPair` debe ser un numero.');
    }
    if (errors.length === 0) {
      successes.push('La tupla `lessonPair` respeta el orden [string, number].');
    }
  }

  return { ok: errors.length === 0, successes, errors };
}

function validateLessonModel(
  ts: TsModule,
  sourceFile: import('typescript').SourceFile,
): RuleValidationResult {
  const successes: string[] = [];
  const errors: string[] = [];
  const lesson = findVariableDeclaration(ts, sourceFile, 'lesson');
  const tags = findVariableDeclaration(ts, sourceFile, 'tags');

  if (!lesson) {
    errors.push('No encontre la constante `lesson`.');
  } else if (
    !lesson.type ||
    lesson.type.getText(sourceFile) !==
      '{ title: string; duration: number; published: boolean }'
  ) {
    errors.push('`lesson` debe tiparse con `title`, `duration` y `published`.');
  } else {
    successes.push('`lesson` tiene el tipo de objeto correcto.');
  }

  if (!tags) {
    errors.push('No encontre la constante `tags`.');
  } else if (tags.type?.getText(sourceFile) !== 'string[]') {
    errors.push('`tags` debe tener tipo `string[]`.');
  } else {
    successes.push('`tags` esta declarado como array de strings.');
  }

  return { ok: errors.length === 0, successes, errors };
}

function validateSummarizeLesson(
  ts: TsModule,
  sourceFile: import('typescript').SourceFile,
): RuleValidationResult {
  const successes: string[] = [];
  const errors: string[] = [];
  const fn = getFunctionDeclaration(ts, sourceFile, 'summarizeLesson');

  if (!fn) {
    errors.push('No encontre la funcion `summarizeLesson`.');
    return { ok: false, successes, errors };
  }

  const expectedParams = [
    ['title', 'string'],
    ['duration', 'number'],
    ['tags', 'string[]'],
  ] as const;

  for (const [name, expectedType] of expectedParams) {
    const parameter = fn.parameters.find((item) => item.name.getText(sourceFile) === name);
    if (!parameter || parameter.type?.getText(sourceFile) !== expectedType) {
      errors.push(`Falta el parametro \`${name}: ${expectedType}\`.`);
    } else {
      successes.push(`El parametro \`${name}\` esta bien tipado.`);
    }
  }

  if (!isKeywordType(ts, fn.type, 'string')) {
    errors.push('`summarizeLesson` debe devolver `string`.');
  } else {
    successes.push('La funcion declara retorno string.');
  }

  if (!hasPropertyAccessText(ts, fn, 'tags.join', sourceFile)) {
    errors.push('La funcion debe usar `tags.join(...)` dentro del resumen.');
  } else {
    successes.push('La funcion usa `tags.join(...)`.');
  }

  return { ok: errors.length === 0, successes, errors };
}

const validators: Record<
  string,
  (ts: TsModule, sourceFile: import('typescript').SourceFile) => RuleValidationResult
> = {
  'typed-variables': validateTypedVariables,
  'typed-function': validateTypedFunction,
  'student-object': validateStudentObject,
  'student-summary': validatePrintStudent,
  'topics-array': validateTopicsArray,
  'lesson-tuple': validateLessonTuple,
  'lesson-model': validateLessonModel,
  'lesson-summary': validateSummarizeLesson,
};

export async function validateExerciseWithCompiler(
  exerciseId: string,
  sourceText: string,
): Promise<ExerciseValidationResult> {
  const ts = await import('typescript');
  const { sourceFile, errors: compilerErrors } = getCompilerErrors(ts, sourceText);

  const validator = validators[exerciseId];

  if (!validator) {
    const lessonCheckResult = validateWithLessonChecks(exerciseId, sourceText);
    const errors = [...compilerErrors, ...lessonCheckResult.errors];

    return {
      ok: errors.length === 0,
      successes:
        lessonCheckResult.successes.length > 0
          ? lessonCheckResult.successes
          : compilerErrors.length === 0
            ? ['El compilador no detecto errores.']
            : [],
      errors,
      compilerErrors,
      ruleErrors: lessonCheckResult.errors,
      compilerOk: compilerErrors.length === 0,
    };
  }

  const result = validator(ts, sourceFile);
  const errors = [...compilerErrors, ...result.errors];

  return {
    ok: errors.length === 0,
    successes: result.successes,
    errors,
    compilerErrors,
    ruleErrors: result.errors,
    compilerOk: compilerErrors.length === 0,
  };
}
