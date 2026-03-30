import fs from 'fs'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export type Post = {
  slug: string
  titulo: string
  excerpt: string
  tag: string
  empresas: string[]
  tempoLeitura: number
  destaque: boolean
  dataPublicacao: string
}

export type PostWithContent = Post & { content: string }

function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)/)
  if (!match) return { data: {}, content: raw }

  const frontmatter = match[1]
  const content = match[2]
  const data: Record<string, unknown> = {}

  for (const line of frontmatter.split('\n')) {
    const colonIdx = line.indexOf(':')
    if (colonIdx === -1) continue
    const key = line.slice(0, colonIdx).trim()
    const rawVal = line.slice(colonIdx + 1).trim()
    if (!key) continue

    if (rawVal.startsWith('[')) {
      try {
        data[key] = JSON.parse(rawVal)
      } catch {
        data[key] = []
      }
    } else if (rawVal === 'true') {
      data[key] = true
    } else if (rawVal === 'false') {
      data[key] = false
    } else if (rawVal !== '' && !isNaN(Number(rawVal))) {
      data[key] = Number(rawVal)
    } else {
      data[key] = rawVal.replace(/^["']|["']$/g, '')
    }
  }

  return { data, content }
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

export function extractTOC(content: string): Array<{ id: string; text: string }> {
  return content
    .split('\n')
    .filter((line) => line.startsWith('## '))
    .map((line) => {
      const text = line.replace(/^## /, '').trim()
      return { text, id: slugify(text) }
    })
}

function readPost(slug: string): PostWithContent {
  const filePath = path.join(postsDirectory, `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = parseFrontmatter(raw)

  return {
    slug,
    titulo: String(data.titulo ?? ''),
    excerpt: String(data.excerpt ?? ''),
    tag: String(data.tag ?? ''),
    empresas: Array.isArray(data.empresas) ? (data.empresas as string[]) : [],
    tempoLeitura: Number(data.tempoLeitura ?? 5),
    destaque: Boolean(data.destaque),
    dataPublicacao: String(data.dataPublicacao ?? ''),
    content,
  }
}

export function getAllPosts(): Post[] {
  const slugs = fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace('.mdx', ''))

  return slugs
    .map((slug) => {
      const p = readPost(slug)
      return {
        slug: p.slug,
        titulo: p.titulo,
        excerpt: p.excerpt,
        tag: p.tag,
        empresas: p.empresas,
        tempoLeitura: p.tempoLeitura,
        destaque: p.destaque,
        dataPublicacao: p.dataPublicacao,
      } satisfies Post
    })
    .sort(
      (a, b) =>
        new Date(b.dataPublicacao).getTime() - new Date(a.dataPublicacao).getTime()
    )
}

export function getPostBySlug(slug: string): PostWithContent {
  return readPost(slug)
}

export function getPostsByEmpresa(empresaSlug: string): Post[] {
  return getAllPosts().filter((p) => p.empresas.includes(empresaSlug))
}

export function getPostDestaque(): Post {
  const posts = getAllPosts()
  return posts.find((p) => p.destaque) ?? posts[0]
}

export function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number)
  const date = new Date(year, month - 1, day)
  return date.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
