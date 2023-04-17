import Link from "next/link";
import { postMetadata } from "../types/index";
import Tag from "./UI/common/Tag";

const PostPreview = (props: postMetadata) => {
  return (
    <div key={props.slug}>
      <Link href={`blog/${props.slug}`}>
        <h3>
          <span className="hover:underline hover:decoration-sky-500 decoration-dashed underline-offset-4">
            {props.title}
          </span>
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
      <div className="flex gap-2">
        {props.tags.map(e => <Tag tagString={e} />)}
      </div>
    </div>
  );
};

export default PostPreview;
