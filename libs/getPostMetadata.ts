import fs from "fs";
import { postMetadata } from "../types";
import matter from "gray-matter";

const getPostMetadata = (): postMetadata[] => {
  const folder = "components/content/posts";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter(file => file.endsWith(".md"));
  const posts = markdownPosts.map(fileName => {
    const fileContent = fs.readFileSync(
      `components/content/posts/${fileName}`,
      "utf8"
    );
    const matterResult = matter(fileContent);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", "")
    };
  });
  return posts;
};

export default getPostMetadata;
