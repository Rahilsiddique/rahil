import fs from "fs";
import matter from "gray-matter";

const getIntroMetadata = (): any => {
  const file = fs.readFileSync("content/intro.md", "utf-8");
  const matterResult = matter(file);
  console.log(file, matterResult);

  return {
    name: matterResult.data.name,
    title: matterResult.data.title,
    slug: file
  };
};

export default getIntroMetadata;
