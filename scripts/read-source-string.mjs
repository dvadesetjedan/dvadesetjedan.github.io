import ts from "typescript"

// Prettier may choose single quotes for titles containing double quotes.
// Parse either literal form without evaluating content from the source file.
export function readSourceString(objectSource, key) {
  const match = objectSource.match(
    new RegExp(`${key}:\\s*("(?:\\\\.|[^"\\\\])*"|'(?:\\\\.|[^'\\\\])*')`, "s"),
  )
  if (!match) return undefined

  const source = ts.createSourceFile(
    "value.ts",
    match[1],
    ts.ScriptTarget.Latest,
  )
  const expression = source.statements[0]?.expression
  return expression && ts.isStringLiteral(expression)
    ? expression.text
    : undefined
}
