import PostPreview from "../../components/UI/preview/PostPreview";
import UnderLine from "../../components/UI/common/UnderLine";
import getPostMetadata from "../../libs/getPostMetadata";

const page = () => {
  const postMetadata = getPostMetadata();

  const postPreviews = postMetadata.map(post =>
    <PostPreview {...post} key={post.slug} />
  );

  return (
    <main className="flex flex-col gap-4">
      <h1>Blog</h1>
      <p className="text-base text-justify">
        All the blogs that I have written can be found here, mostly I'll try to
        put here all the cool tips and trics in frontend development and my
        learnings and experiments or rather anything whcih seems cool to me
      </p>
      <UnderLine />
      <div className="flex flex-col gap-4">
        {postPreviews}
      </div>
    </main>
  );
};

export default page;
