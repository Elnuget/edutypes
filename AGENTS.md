# EduTypes Project Instructions

## Product and UX direction
- EduTypes must feel like a focused learning app, not a long scrolling website.
- Prefer one primary card or step on screen at a time.
- The user should usually advance horizontally or by explicit next/previous actions, not by reading long vertical pages.
- Progress must persist in `localStorage` whenever the flow depends on lesson or step progression.

## Visual style
- Keep the interface minimal, calm, and functional.
- Avoid decorative effects, heavy gradients, glassmorphism, oversized shadows, and noisy backgrounds.
- Use short text blocks inside cards instead of long paragraphs.
- Reduce cognitive load: one main action, one main card, one clear next step.
- Mobile-first is mandatory; desktop can expand spacing, but should preserve the same simple interaction model.

## Layout rules
- On landing pages, default to a single main card with short copy and one main CTA.
- In lesson pages, prefer step cards or slide-like screens with compact content.
- Avoid requiring vertical scrolling for the core path whenever possible.
- If multiple pieces of information are needed, split them into separate cards/steps/tabs instead of stacking long text.

## Responsive rules
- Design for phone screens first.
- Never force dense multi-column layouts on small screens.
- Watch for text overflow in stat cards, pills, labels, and buttons.
- If content competes for space on mobile, stack it or turn it into horizontal step navigation.

## Course interaction rules
- Lessons should be practical and code-first.
- The student must type code manually; do not enable paste for lesson writing areas unless the user explicitly changes that requirement.
- Every lesson should keep content brief, actionable, and easy to consume in short sessions.
- New EduTypes lessons should default to an alternating `tarjeta -> ejercicio -> tarjeta -> ejercicio` flow instead of stacking many explanation cards first.
- Explanations must use very simple language and explicitly say what each symbol does when introducing new syntax.
- Each lesson card should stay short and visually light.
- Important words inside lesson cards should be highlighted in orange, bold, and underlined.
- Default exercise rhythm for EduTypes lessons: `tarjeta -> ejercicio -> ejercicio -> tarjeta -> ejercicio -> ejercicio`.
- The second exercise after each card should not use a placeholder.
- If a syntax topic still feels underexplained, prefer adding another short card plus two more exercises instead of making a single card dense.
- In foundational units, it is acceptable to double or triple the number of micro-cards if that is what it takes to explain each symbol and step clearly.
- Exercise feedback should be highly specific. When the student is close, say the exact fix, for example `te sobra ; antes de }` or `te falta : despues de student`.
- Avoid generic syntax feedback when a more precise correction can be inferred from the student's code.
- Foundational units must follow a strict ascending or pyramid order: first isolate one symbol or piece, then combine it with the next one.
- Do not make the student use a syntax piece in an exercise before that piece has already been explained alone in a short card.
- When a new TypeScript feature appears in a later unit, prefer this ladder: define the syntax, explain the key symbols, use it in a real declaration, then show a visible console result.
- Code writing areas should show line numbers and the current line/column when feasible, especially in learning units.
- Error feedback should mention the most precise location available, ideally line and column plus the exact symbol or structure to correct.
- When the student is close because of a typo in an identifier or because they used `=` instead of `:`, the feedback should say that exact mistake instead of a generic "falta ...".
