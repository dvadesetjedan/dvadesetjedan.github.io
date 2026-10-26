import fs from "node:fs"
import ts from "typescript"

// Share the browser's recurrence resolution with static metadata and checks.
const source = fs.readFileSync(
  new URL("../src/data/events.ts", import.meta.url),
  "utf8",
)
const { outputText } = ts.transpileModule(source, {
  compilerOptions: {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.ESNext,
  },
})

export const eventData = await import(
  `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`
)
