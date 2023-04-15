import Link from "next/link";
import { postMetadata } from "../types/index";

const PostPreview = (props: postMetadata) => {
  return (
    <div key={props.slug}>
      <Link href={`blog/${props.slug}`}>
        <h3 className="hover:underline hover:decoration-sky-500 decoration-dashed underline-offset-4">
          {props.title}
        </h3>
      </Link>
      <div className="flex justify-between">
        <p>
          {props.subtitle}
        </p>
        <p>
          {props.date}
        </p>
      </div>
    </div>
  );
};

export default PostPreview;
