import Link from "next/link"
import { postMetadata } from "../types/index"

const PostPreview = (props: postMetadata) => {
  return (
    <div key={props.slug}>
      <Link href={`posts/${props.slug}`}>
      <h2 className="underline decoration-sky-500 decoration-dashed underline-offset-4">{props.title}</h2>
      </Link>
      <p>{props.subtitle}</p>
      <p>{props.date}</p>
    </div>
  )
}

export default PostPreview