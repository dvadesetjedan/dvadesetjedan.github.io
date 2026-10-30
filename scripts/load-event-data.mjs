import fs from "node:fs"
import ts from "typescript"

// Share the browser's event and calendar helpers with static artifacts and checks.
async function loadModule(relativePath) {
  const source = fs.readFileSync(new URL(relativePath, import.meta.url), "utf8")
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.ESNext,
    },
  })

  return import(
    `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`
  )
}

export const eventData = await loadModule("../src/data/events.ts")
export const calendarData = await loadModule("../src/lib/event-calendar.ts")
