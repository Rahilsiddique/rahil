import Link from "next/link";
import { portfolioMetadata } from "../types/index";
import Image from "next/image";

const PortfolioPreview = (props: portfolioMetadata) => {
  return (
    <div key={props.slug}>
      <div>
        {/* <img src={`/../public/resume-builder.png`} alt="png" /> */}
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
