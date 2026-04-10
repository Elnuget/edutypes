import { allCourseUnits } from '../data/course';
import type { ExerciseCheck, LessonExercise } from '../data/unit-types';

export type ExerciseValidationResult = {
  ok: boolean;
  successes: string[];
  errors: string[];
  compilerErrors: string[];
  ruleErrors: string[];
  compilerOk: boolean;
  runtimeOutput: string[];
  runtimeError: string | null;
};

type RuleValidationResult = {
  ok: boolean;
  successes: string[];
  errors: string[];
};

type TsModule = typeof import('typescript');

function sourceLooksLikeTsx(sourceText: string) {
  return /<\/?[A-Z][\w.-]*[\s/>]/.test(sourceText) || /<\/?[a-z][\w-]*[\s/>]/.test(sourceText);
}

function getExerciseFileName(sourceText: string) {
  return sourceLooksLikeTsx(sourceText) ? 'exercise.tsx' : 'exercise.ts';
}

function getScriptKind(ts: TsModule, sourceText: string) {
  return sourceLooksLikeTsx(sourceText) ? ts.ScriptKind.TSX : ts.ScriptKind.TS;
}

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

function normalizeTextAnswer(sourceText: string) {
  return sourceText
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
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

function getLevenshteinDistance(left: string, right: string) {
  const rows = left.length + 1;
  const cols = right.length + 1;
  const matrix = Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0));

  for (let row = 0; row < rows; row += 1) {
    matrix[row][0] = row;
  }

  for (let col = 0; col < cols; col += 1) {
    matrix[0][col] = col;
  }

  for (let row = 1; row < rows; row += 1) {
    for (let col = 1; col < cols; col += 1) {
      const cost = left[row - 1] === right[col - 1] ? 0 : 1;
      matrix[row][col] = Math.min(
        matrix[row - 1][col] + 1,
        matrix[row][col - 1] + 1,
        matrix[row - 1][col - 1] + cost,
      );
    }
  }

  return matrix[left.length][right.length];
}

function findPropertyLikeHint(expectedText: string, sourceText: string) {
  const propertyMatch = expectedText.match(/^([a-z_$][\w$]*)\s*:/i);

  if (!propertyMatch) {
    return null;
  }

  const expectedName = propertyMatch[1];
  const lineEntries = sourceText.split('\n');

  for (let lineIndex = 0; lineIndex < lineEntries.length; lineIndex += 1) {
    const lineText = lineEntries[lineIndex];
    const propertyEntries = lineText.matchAll(/\b([a-z_$][\w$]*)\b\s*([:=])/gi);

    for (const entry of propertyEntries) {
      const actualName = entry[1];
      const separator = entry[2];
      const startIndex = entry.index ?? 0;
      const absoluteIndex =
        sourceText
          .split('\n')
          .slice(0, lineIndex)
          .reduce((total, current) => total + current.length + 1, 0) + startIndex;

      if (actualName.toLowerCase() === expectedName.toLowerCase()) {
        if (separator === '=') {
          return formatLocatedHint(
            sourceText,
            absoluteIndex + actualName.length,
            `Despues de \`${expectedName}\` debe ir \`:\` y no \`=\`.`,
          );
        }

        return null;
      }

      if (getLevenshteinDistance(actualName.toLowerCase(), expectedName.toLowerCase()) <= 2) {
        const separatorHint =
          separator === '=' ? ' Despues de ese nombre debe ir `:` y no `=`.' : '';

        return formatLocatedHint(
          sourceText,
          absoluteIndex,
          `Escribiste \`${actualName}\`, pero debe ser \`${expectedName}\`.${separatorHint}`,
        );
      }
    }
  }

  return null;
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
    findPropertyLikeHint(expectedText, sourceText) ??
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
  for (const unit of allCourseUnits) {
    for (const lesson of unit.lessons) {
      const exercise = lesson.exercises.find((item) => item.id === exerciseId);
      if (exercise) {
        return exercise;
      }
    }
  }

  return null;
}

function normalizeIntegerAnswer(sourceText: string) {
  return sourceText
    .trim()
    .replace(/−/g, '-')
    .replace(/×/g, '*')
    .replace(/[xX]/g, '*')
    .replace(/÷/g, '/')
    .replace(/\s+/g, '');
}

function getGreatestCommonDivisor(left: number, right: number) {
  let a = Math.abs(left);
  let b = Math.abs(right);

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a === 0 ? 1 : a;
}

function normalizeRationalInput(sourceText: string) {
  return sourceText
    .trim()
    .replace(/−/g, '-')
    .replace(/÷/g, '/')
    .replace(/\s*\/\s*/g, '/')
    .replace(/\s+/g, ' ')
    .trim();
}

type ParsedRationalAnswer =
  | {
      ok: true;
      numerator: number;
      denominator: number;
      formatUsed: 'integer' | 'fraction' | 'mixed';
    }
  | {
      ok: false;
      error: string;
    };

function parseRationalAnswer(
  sourceText: string,
  format: 'fraction' | 'mixed' | 'any' = 'any',
): ParsedRationalAnswer {
  const normalized = normalizeRationalInput(sourceText);

  if (normalized.length === 0) {
    return {
      ok: false,
      error: 'Escribe una respuesta primero.',
    };
  }

  if (!/^-?\d+(?: \d+\/\d+|\/\d+)?$/.test(normalized)) {
    if (format === 'mixed') {
      return {
        ok: false,
        error: 'Aqui debes escribir una fraccion mixta con este formato: `2 3/5`.',
      };
    }

    if (format === 'fraction') {
      return {
        ok: false,
        error: 'Aqui debes escribir una fraccion como `7/4`.',
      };
    }

    return {
      ok: false,
      error: 'La respuesta debe verse como entero, fraccion `a/b` o fraccion mixta `2 3/5`.',
    };
  }

  const mixedMatch = normalized.match(/^(-?\d+) (\d+)\/(\d+)$/);

  if (mixedMatch) {
    if (format === 'fraction') {
      return {
        ok: false,
        error: 'Aqui debes responder con una fraccion impropia o propia, no con mixta.',
      };
    }

    const whole = Number.parseInt(mixedMatch[1], 10);
    const numeratorPart = Number.parseInt(mixedMatch[2], 10);
    const denominator = Number.parseInt(mixedMatch[3], 10);

    if (denominator === 0) {
      return {
        ok: false,
        error: 'El denominador no puede ser `0`.',
      };
    }

    if (numeratorPart >= denominator) {
      return {
        ok: false,
        error: 'En una fraccion mixta, la parte fraccionaria debe ser menor que el denominador.',
      };
    }

    const sign = whole < 0 ? -1 : 1;
    const absoluteWhole = Math.abs(whole);

    return {
      ok: true,
      numerator: sign * (absoluteWhole * denominator + numeratorPart),
      denominator,
      formatUsed: 'mixed',
    };
  }

  const fractionMatch = normalized.match(/^(-?\d+)\/(\d+)$/);

  if (fractionMatch) {
    if (format === 'mixed') {
      return {
        ok: false,
        error: 'Aqui debes responder con una fraccion mixta como `2 3/5`.',
      };
    }

    const numerator = Number.parseInt(fractionMatch[1], 10);
    const denominator = Number.parseInt(fractionMatch[2], 10);

    if (denominator === 0) {
      return {
        ok: false,
        error: 'El denominador no puede ser `0`.',
      };
    }

    return {
      ok: true,
      numerator,
      denominator,
      formatUsed: 'fraction',
    };
  }

  if (format === 'mixed') {
    return {
      ok: false,
      error: 'Aqui debes responder con una fraccion mixta como `2 3/5`.',
    };
  }

  if (format === 'fraction') {
    return {
      ok: false,
      error: 'Aqui debes responder con una fraccion como `7/4`.',
    };
  }

  return {
    ok: true,
    numerator: Number.parseInt(normalized, 10),
    denominator: 1,
    formatUsed: 'integer',
  };
}

function evaluateIntegerAnswer(sourceText: string) {
  const normalized = normalizeIntegerAnswer(sourceText);

  if (normalized.length === 0) {
    return {
      ok: false as const,
      error: 'Escribe una respuesta primero.',
    };
  }

  if (!/^[\d+\-*/()]+$/.test(normalized)) {
    return {
      ok: false as const,
      error: 'Aqui solo deben ir numeros enteros y signos de operacion como `+`, `-`, `*`, `/` o parentesis.',
    };
  }

  try {
    const value = new Function(`return (${normalized});`)();

    if (typeof value !== 'number' || !Number.isFinite(value)) {
      return {
        ok: false as const,
        error: 'No pude obtener un numero con esa respuesta.',
      };
    }

    if (!Number.isInteger(value)) {
      return {
        ok: false as const,
        error: 'La respuesta debe terminar en un numero entero, sin decimales.',
      };
    }

    return {
      ok: true as const,
      value,
    };
  } catch {
    const opened = (normalized.match(/\(/g) ?? []).length;
    const closed = (normalized.match(/\)/g) ?? []).length;

    if (opened !== closed) {
      return {
        ok: false as const,
        error: 'Revisa los parentesis. Falta abrir o cerrar uno.',
      };
    }

    return {
      ok: false as const,
      error: 'La cuenta no se puede leer. Revisa signos como `+`, `-`, `*` o `/`.',
    };
  }
}

function countWords(sourceText: string) {
  const normalized = normalizeTextAnswer(sourceText);

  if (normalized.length === 0) {
    return 0;
  }

  return normalized.split(' ').filter(Boolean).length;
}

function validateExpectedAnswer(
  exercise: LessonExercise,
  sourceText: string,
): RuleValidationResult | null {
  if (!exercise.expectedAnswer) {
    return null;
  }

  if (exercise.expectedAnswer.kind === 'integer') {
    const parsed = evaluateIntegerAnswer(sourceText);

    if (!parsed.ok) {
      return {
        ok: false,
        successes: [],
        errors: [parsed.error],
      };
    }

    const expected = exercise.expectedAnswer.value;

    if (parsed.value === expected) {
      return {
        ok: true,
        successes: ['El resultado entero es correcto.'],
        errors: [],
      };
    }

    if (expected !== 0 && parsed.value === -expected) {
      return {
        ok: false,
        successes: [],
        errors: [
          `Vas bien con el valor absoluto, pero el signo esta al reves. El resultado correcto es ${expected}.`,
        ],
      };
    }

    if (Math.abs(parsed.value - expected) <= 2) {
      return {
        ok: false,
        successes: [],
        errors: [
          `Te acercaste, pero ${parsed.value} no es el resultado final. Revisa una suma o resta corta y vuelve a intentar.`,
        ],
      };
    }

    return {
      ok: false,
      successes: [],
      errors: [`Ese resultado no coincide. El resultado correcto no es ${parsed.value}.`],
    };
  }

  if (exercise.expectedAnswer.kind === 'rational') {
    const parsed = parseRationalAnswer(
      sourceText,
      exercise.expectedAnswer.format ?? 'any',
    );

    if (!parsed.ok) {
      return {
        ok: false,
        successes: [],
        errors: [parsed.error],
      };
    }

    const expectedNumerator = exercise.expectedAnswer.numerator;
    const expectedDenominator = exercise.expectedAnswer.denominator;
    const sameValue =
      parsed.numerator * expectedDenominator === expectedNumerator * parsed.denominator;

    if (!sameValue) {
      if (parsed.numerator * expectedDenominator === -expectedNumerator * parsed.denominator) {
        return {
          ok: false,
          successes: [],
          errors: ['Vas bien con la magnitud, pero el signo esta al reves.'],
        };
      }

      return {
        ok: false,
        successes: [],
        errors: ['La fraccion no representa el valor correcto. Revisa numerador y denominador.'],
      };
    }

    if (exercise.expectedAnswer.simplified) {
      const gcd = getGreatestCommonDivisor(parsed.numerator, parsed.denominator);

      if (gcd > 1) {
        return {
          ok: false,
          successes: [],
          errors: ['La respuesta es equivalente, pero todavia no esta simplificada.'],
        };
      }
    }

    if (
      exercise.expectedAnswer.format === 'fraction' &&
      parsed.formatUsed !== 'fraction' &&
      !(parsed.formatUsed === 'integer' && expectedDenominator === 1)
    ) {
      return {
        ok: false,
        successes: [],
        errors: ['El valor es correcto, pero aqui debes escribirlo en forma de fraccion.'],
      };
    }

    if (exercise.expectedAnswer.format === 'mixed' && parsed.formatUsed !== 'mixed') {
      return {
        ok: false,
        successes: [],
        errors: ['El valor es correcto, pero aqui debes escribirlo en forma mixta.'],
      };
    }

    return {
      ok: true,
      successes: ['La respuesta racional es correcta.'],
      errors: [],
    };
  }

  const normalizedAnswer = normalizeTextAnswer(sourceText);
  const missingKeywords = exercise.expectedAnswer.include.filter(
    (keyword) => !normalizedAnswer.includes(normalizeTextAnswer(keyword)),
  );

  if (
    exercise.expectedAnswer.minWords &&
    countWords(sourceText) < exercise.expectedAnswer.minWords
  ) {
    return {
      ok: false,
      successes: [],
      errors: [
        `Tu respuesta aun esta muy corta. Necesitas al menos ${exercise.expectedAnswer.minWords} palabras claras.`,
      ],
    };
  }

  if (missingKeywords.length > 0) {
    return {
      ok: false,
      successes: [],
      errors: [
        `Todavia faltan ideas clave en tu respuesta. Asegurate de incluir: ${missingKeywords.join(', ')}.`,
      ],
    };
  }

  return {
    ok: true,
    successes: ['La respuesta incluye las ideas clave esperadas.'],
    errors: [],
  };
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
  const normalizedSource =
    exercise.responseKind === 'text'
      ? normalizeTextAnswer(sourceText)
      : normalizeCheckText(sourceText);

  const expectedAnswerResult = validateExpectedAnswer(exercise, sourceText);

  if (expectedAnswerResult) {
    return expectedAnswerResult;
  }

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

function formatRuntimeValue(value: unknown) {
  if (typeof value === 'string') {
    return value;
  }

  if (
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    value === null ||
    value === undefined
  ) {
    return String(value);
  }

  try {
    return JSON.stringify(value);
  } catch {
    return '[valor no serializable]';
  }
}

function executeExerciseCode(ts: TsModule, sourceText: string) {
  const runtimeOutput: string[] = [];
  const exerciseFile = getExerciseFileName(sourceText);

  const transpiled = ts.transpileModule(sourceText, {
    fileName: exerciseFile,
    compilerOptions: {
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.None,
      strict: true,
      jsx: ts.JsxEmit.React,
      jsxFactory: 'React.createElement',
      jsxFragmentFactory: 'React.Fragment',
    },
  });

  const fakeConsole = {
    log: (...args: unknown[]) => {
      runtimeOutput.push(args.map((arg) => formatRuntimeValue(arg)).join(' '));
    },
  };
  const fakeReact = {
    createElement: (
      type: unknown,
      props: Record<string, unknown> | null,
      ...children: unknown[]
    ) => ({
      type,
      props: props ?? {},
      children,
    }),
    Fragment: Symbol('Fragment'),
    useState: <T,>(initialValue: T) => [initialValue, (_nextValue: T) => undefined] as const,
    useEffect: () => undefined,
  };
  const fakeRequire = (moduleName: string) => {
    if (moduleName === 'path' || moduleName === 'node:path') {
      return {
        join: (...parts: string[]) => parts.join('/'),
        basename: (value: string) => value.split(/[\\/]/).pop() ?? value,
      };
    }

    if (moduleName === 'fs' || moduleName === 'node:fs') {
      return {
        readFileSync: (filePath: string) =>
          filePath.includes('json')
            ? '{"title":"Node","status":"ok"}'
            : 'contenido de ejemplo',
        writeFileSync: () => undefined,
      };
    }

    if (moduleName === 'http' || moduleName === 'node:http') {
      return {
        createServer: (
          _handler: (request: { url: string }, response: { end: (value: string) => void }) => void,
        ) => ({
          listen: (_port: number, callback?: () => void) => {
            callback?.();
          },
          close: () => undefined,
        }),
      };
    }

    return {};
  };
  const fakeProcess = {
    argv: ['node', exerciseFile, 'react', 'node'],
    env: {},
    cwd: () => '/workspace',
    exit: () => undefined,
  };
  const fakeModule = { exports: {} as Record<string, unknown> };

  try {
    const runner = new Function(
      'console',
      'React',
      'require',
      'module',
      'exports',
      'process',
      transpiled.outputText,
    );
    runner(fakeConsole, fakeReact, fakeRequire, fakeModule, fakeModule.exports, fakeProcess);

    return {
      output: runtimeOutput,
      error: null,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Error desconocido de ejecucion.';
    return {
      output: runtimeOutput,
      error: `Ejecucion: ${message}`,
    };
  }
}

function getCompilerErrors(ts: TsModule, sourceText: string) {
  const exerciseFile = getExerciseFileName(sourceText);
  const sourceFile = ts.createSourceFile(
    exerciseFile,
    sourceText,
    ts.ScriptTarget.ES2022,
    true,
    getScriptKind(ts, sourceText),
  );

  const transpileResult = ts.transpileModule(sourceText, {
    fileName: exerciseFile,
    reportDiagnostics: true,
    compilerOptions: {
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.ESNext,
      strict: true,
      jsx: ts.JsxEmit.React,
      jsxFactory: 'React.createElement',
      jsxFragmentFactory: 'React.Fragment',
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
  const sourceText = sourceFile.getFullText();

  if (!fn) {
    errors.push('No encontre la funcion `printStudent`.');
    return { ok: false, successes, errors };
  }

  successes.push('La funcion `printStudent` existe.');

  const param = fn.parameters.find((parameter) => parameter.name.getText(sourceFile) === 'student');
  if (!param) {
    errors.push('La funcion debe recibir un parametro `student`.');
  } else if (!param.type) {
    errors.push(
      formatLocatedHint(
        sourceText,
        param.name.getEnd(),
        'Despues de `student` te falta `: { name: string; completed: number }`.',
      ),
    );
  } else if (!ts.isTypeLiteralNode(param.type)) {
    errors.push('El parametro `student` debe tiparse como objeto.');
  } else {
    const memberNames = param.type.members.map((member) => member.name?.getText(sourceFile));
    if (!memberNames.includes('name')) {
      errors.push('Dentro del tipo de `student` falta la propiedad `name`.');
    }

    if (!memberNames.includes('completed')) {
      errors.push('Dentro del tipo de `student` falta la propiedad `completed`.');
    }

    if (memberNames.includes('name') && memberNames.includes('completed')) {
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

function validateReadBadgeExercise(
  ts: TsModule,
  sourceFile: import('typescript').SourceFile,
): RuleValidationResult {
  const successes: string[] = [];
  const errors: string[] = [];
  const fn = getFunctionDeclaration(ts, sourceFile, 'readBadge');
  const sourceText = sourceFile.getFullText();

  if (!fn) {
    errors.push('No encontre la funcion `readBadge`.');
    return { ok: false, successes, errors };
  }

  successes.push('La funcion `readBadge` existe.');

  const param = fn.parameters.find((parameter) => parameter.name.getText(sourceFile) === 'badge');
  if (!param) {
    errors.push('La funcion debe recibir un parametro `badge`.');
  } else if (!param.type) {
    errors.push(
      formatLocatedHint(
        sourceText,
        param.name.getEnd(),
        'Despues de `badge` te falta `: { label: string; unlocked: boolean }`.',
      ),
    );
  } else if (!ts.isTypeLiteralNode(param.type)) {
    errors.push('El parametro `badge` debe tiparse como objeto.');
  } else {
    const memberNames = param.type.members.map((member) => member.name?.getText(sourceFile));

    if (!memberNames.includes('label')) {
      errors.push('Dentro del tipo de `badge` falta la propiedad `label`.');
    }

    if (!memberNames.includes('unlocked')) {
      errors.push('Dentro del tipo de `badge` falta la propiedad `unlocked`.');
    }

    if (memberNames.includes('label') && memberNames.includes('unlocked')) {
      successes.push('El parametro `badge` tiene el tipo de objeto correcto.');
    }
  }

  if (!isKeywordType(ts, fn.type, 'boolean')) {
    errors.push('`readBadge` debe devolver `boolean`.');
  } else {
    successes.push('La funcion declara retorno `boolean`.');
  }

  if (!hasPropertyAccessText(ts, fn, 'badge.unlocked', sourceFile)) {
    errors.push('Dentro de `readBadge` falta usar `badge.unlocked`.');
  } else {
    successes.push('La funcion usa `badge.unlocked`.');
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
  'u1-l2-c6-e2': validateReadBadgeExercise,
  'topics-array': validateTopicsArray,
  'lesson-tuple': validateLessonTuple,
  'lesson-model': validateLessonModel,
  'lesson-summary': validateSummarizeLesson,
};

export async function validateExerciseWithCompiler(
  exerciseId: string,
  sourceText: string,
): Promise<ExerciseValidationResult> {
  const exercise = findExerciseDefinition(exerciseId);

  if (exercise?.responseKind === 'text') {
    const lessonCheckResult = validateWithLessonChecks(exerciseId, sourceText);
    return {
      ok: lessonCheckResult.errors.length === 0,
      successes: lessonCheckResult.successes,
      errors: lessonCheckResult.errors,
      compilerErrors: [],
      ruleErrors: lessonCheckResult.errors,
      compilerOk: true,
      runtimeOutput: [],
      runtimeError: null,
    };
  }

  const ts = await import('typescript');
  const { sourceFile, errors: compilerErrors } = getCompilerErrors(ts, sourceText);
  const runtimeResult =
    compilerErrors.length === 0
      ? executeExerciseCode(ts, sourceText)
      : { output: [], error: null as string | null };

  const validator = validators[exerciseId];

  if (!validator) {
    const lessonCheckResult = validateWithLessonChecks(exerciseId, sourceText);
    const errors = [
      ...compilerErrors,
      ...(runtimeResult.error ? [runtimeResult.error] : []),
      ...lessonCheckResult.errors,
    ];

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
      runtimeOutput: runtimeResult.output,
      runtimeError: runtimeResult.error,
    };
  }

  const result = validator(ts, sourceFile);
  const errors = [
    ...compilerErrors,
    ...(runtimeResult.error ? [runtimeResult.error] : []),
    ...result.errors,
  ];

  return {
    ok: errors.length === 0,
    successes: result.successes,
    errors,
    compilerErrors,
    ruleErrors: result.errors,
    compilerOk: compilerErrors.length === 0,
    runtimeOutput: runtimeResult.output,
    runtimeError: runtimeResult.error,
  };
}
