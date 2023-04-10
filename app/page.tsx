import getPostMetadata from '../components/getPostMetadata'
import PostPreview from '../components/PostPreview'

const page = () => {
  const postMetadata = getPostMetadata()
  const postPreviews = postMetadata.map(post => (
    <PostPreview {...post} key={post.slug}/>
  ))
  return (
    <div>{postPreviews}</div>
  )
}

export default page