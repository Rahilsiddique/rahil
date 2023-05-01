import fs from "fs";
import matter from "gray-matter";
import getPortfolioMetadata from "../../../../libs/getPortfolioMetadata";
import Markdown from "markdown-to-jsx";
import { WrappedImage } from "../../../../components/images/WrappedImage";
import { BsGithub } from "react-icons/bs";
import { BiGlobe } from "react-icons/bi";
import Tag from "../../../../components/common/Tag";

const getPortfolioContent = (slug: string) => {
  const folder = "content/portfolio";
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
  const date = tempDate.toLocaleDateString("en-IN", {
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
        <div className="flex gap-4">
          <div className="flex items-center justify-center gap-2 text-xl font-light cursor-pointer">
            <a href={post.data.githubLink} target="_blank">
              github
            </a>
            <BsGithub />{" "}
          </div>
          <div className="flex items-center justify-center gap-2 text-xl font-light cursor-pointer">
            <a href={post.data.lineLink} target="_blank">
              github
            </a>{" "}
            <BiGlobe />{" "}
          </div>
        </div>
        <WrappedImage
          src={"/" + post.data.imgPreview}
          alt="img"
          className="object-cover w-full rounded-md"
          parentStyle="w-full h-80 rounded-md"
          loading="lazy"
          placeholder="blur"
          blurDataURL="/blur.svg"
          fill
        />
        <div className="flex justify-between">
          <div className="flex gap-3 text-base">
            {post.data.techStack.map((tech: any) => <Tag tagString={tech} />)}
          </div>
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
