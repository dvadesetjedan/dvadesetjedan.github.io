import fs from "node:fs"
import path from "node:path"

const sourcePath = "/private/tmp/dvadesetjedan-posts.json"

if (!fs.existsSync(sourcePath)) {
  throw new Error(`Missing source export: ${sourcePath}`)
}

const source = JSON.parse(fs.readFileSync(sourcePath, "utf8"))

const articles = source.map((article) => ({
  slug: article.slug,
  title: article.title,
  date: article.date,
  excerpt: article.excerpt,
  contentHtml: article.content,
  categories: article.categories ?? [],
  tags: article.tags ?? [],
  image: article.image || "",
  originalUrl: `https://dvadesetjedan.com/${article.slug}/`,
}))

const output = `export type ArticleEntry = {
  slug: string
  title: string
  date: string
  excerpt: string
  contentHtml: string
  categories: string[]
  tags: string[]
  image: string
  originalUrl: string
}

export const articles: ArticleEntry[] = ${JSON.stringify(articles, null, 2)}
`

fs.writeFileSync(
  path.join(process.cwd(), "src/data/articles.ts"),
  output,
  "utf8",
)

console.log(`wrote ${articles.length} articles`)
