import Link from "next/link"
import { postMetadata } from "./postMetadata"

const PostPreview = (props: postMetadata) => {
  return (
    <div key={props.slug}>
      <Link href={`posts/${props.slug}`}>
      <h2>{props.title}</h2>
      </Link>
      <p>{props.subtitle}</p>
      <p>{props.date}</p>
    </div>
  )
}

export default PostPreview