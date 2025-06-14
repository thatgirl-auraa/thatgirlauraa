import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'src/content')

export type MDXFrontmatter = {
  title: string
  date: string
  description: string
  tags?: string[]
  products?: Array<{
    name: string
    description: string
    price: string
    link: string
    image: string
  }>
}

export async function getMDXContent(
  type: 'journal' | 'picks',
  slug?: string
): Promise<{
  frontmatter: MDXFrontmatter
  content: string
  slug: string
}[]> {
  const directory = path.join(contentDirectory, type)
  const files = fs.readdirSync(directory)

  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(directory, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)
      const slug = file.replace(/\.mdx$/, '')

      return {
        frontmatter: data as MDXFrontmatter,
        content,
        slug,
      }
    })
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())

  if (slug) {
    return posts.filter((post) => post.slug === slug)
  }

  return posts
}

export async function getJournalPosts() {
  return getMDXContent('journal')
}

export async function getPicksCollections() {
  return getMDXContent('picks')
}

export async function getJournalPost(slug: string) {
  const posts = await getMDXContent('journal', slug)
  return posts[0]
}

export async function getPicksCollection(slug: string) {
  const collections = await getMDXContent('picks', slug)
  return collections[0]
} 