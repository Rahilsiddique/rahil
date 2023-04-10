import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import { postMetadata } from '../components/postMetadata'

const getPostMetadata = (): postMetadata[] => {
  const folder = 'posts/'
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter(file => file.endsWith('.md'))
  const posts = markdownPosts.map(fileName => {
    const fileContent = fs.readFileSync(`posts/${fileName}`,'utf8')
    const matterResult = matter(fileContent)
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace('.md','')
    }
  })
  return posts
}

const page = () => {
  const postMetadata = getPostMetadata()
  const postPreviews = postMetadata.map(post => (
    <div>
      <Link href={`posts/${post.slug}`}>
      <h2>{post.title}</h2>
      </Link>
      <p>{post.subtitle}</p>
      <p>{post.date}</p>
    </div>
  ))
  return (
    <div>{postPreviews}</div>
  )
}

export default page