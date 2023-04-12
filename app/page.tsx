import getPostMetadata from "../libs/getPostMetadata";
import PostPreview from "../components/PostPreview";
import { NextPage } from "next";

const page: NextPage = () => {
  const postMetadata = getPostMetadata();

  const postPreviews = postMetadata.map(post =>
    <PostPreview {...post} key={post.slug} />
  );

  return (
    <main className="layout">
      <div>
        <h1>Rahil Siddique</h1>
        <h2 className="text-xl font-bold text-transparent max-w-max mb-7 md:text-2xl bg-clip-text bg-gradient-to-r from-primary-500 to-ternary-500 dark:text-transparent">
          Student &amp; Frontend Developer
        </h2>
      </div>
    </main>
  );
};

export default page;
