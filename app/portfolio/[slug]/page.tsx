import fs from "fs";
import matter from "gray-matter";
import getPortfolioMetadata from "../../../libs/getPortfolioMetadata";
import Markdown from "markdown-to-jsx";
import { WrappedImage } from "../../../components/UI/images/WrappedImage";

const getPortfolioContent = (slug: string) => {
  const folder = "./components/content/portfolio";
  const file = `${folder}/${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPortfolioMetadata();
  return posts.map(post => ({
    slug: post.slug
  }));
};

const PortfolioPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPortfolioContent(slug);

  const tempDate = new Date(post.data.date);
  const date = tempDate.toLocaleDateString("hi-IN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return (
    <div className="flex flex-col gap-4 pb-4">
      <div className="flex flex-col gap-5 pb-2 border-b border-theme-600">
        <div className="text-5xl font-bold">
          {post.data.title}
        </div>
        <WrappedImage
          src={"/../public/" + post.data.imgPreview}
          alt="img"
          className="object-cover w-full rounded-md"
          parentStyle="w-full h-80 rounded-md"
          loading="lazy"
          placeholder="blur"
          blurDataURL="/blur.svg"
          fill
        />
        <div className="flex justify-between">
          <div className="text-2xl text-pink-500">tags</div>
          <div className="text-base">
            {date}
          </div>
        </div>
      </div>
      <div className="bp-4">
        <Markdown>
          {post.content}
        </Markdown>
      </div>
    </div>
  );
};

export default PortfolioPage;
