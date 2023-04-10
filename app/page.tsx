import Link from 'next/link'
import getPostMetadata from '../components/getPostMetadata'

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