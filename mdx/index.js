import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'

const contentRootDirectory = path.join(process.cwd(), 'content')
const projectsRootDirectory = path.join(process.cwd(), 'projects')

export const getPostBySlug = async slug => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(contentRootDirectory, `${realSlug}.mdx`)

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true }
  })

  return { meta: { ...frontmatter, slug: realSlug }, content }
}

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(contentRootDirectory)

  let posts = []

  for (const file of files) {
    const { meta } = await getPostBySlug(file)
    posts.push(meta)
  }

  return posts
}

export const getProjectsBySlug = async slug => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(projectsRootDirectory, `${realSlug}.mdx`)

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true }
  })

  return { meta: { ...frontmatter, slug: realSlug }, content }
}

export const getAllProjectsMeta = async () => {
  const files = fs.readdirSync(projectsRootDirectory)

  let posts = []

  for (const file of files) {
    const { meta } = await getProjectsBySlug(file)
    posts.push(meta)
  }

  return posts
}