import Link from "next/link";
import { portfolioMetadata } from "../../../types/index";
import { WrappedImage } from "../images/WrappedImage";

const PortfolioPreview = (props: portfolioMetadata) => {
  return (
    <div key={props.slug}>
      <div className="w-full my-4">
        <WrappedImage
          src={"/../public/" + props.previewImg}
          alt="img"
          className="object-cover w-full rounded-md"
          parentStyle="w-full h-44 rounded-md"
          loading="lazy"
          placeholder="blur"
          blurDataURL="/blur.svg"
          fill
        />
      </div>
      <Link href={`portfolio/${props.slug}`}>
        <h3 className="hover:underline hover:decoration-ternary-500 decoration-dashed underline-offset-4">
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

export default PortfolioPreview;
