import PostPreview from "../../components/PostPreview";
import getPostMetadata from "../../libs/getPostMetadata";

const page = () => {
  const postMetadata = getPostMetadata();

  const postPreviews = postMetadata.map(post =>
    <PostPreview {...post} key={post.slug} />
  );

  return (
    <main className="flex flex-col gap-6">
      <h1>Blog</h1>
      <p className="text-base text-justify">
        All the blogs that I have written can be found here, mostly I'll try to
        put here all the cool tips and trics in frontend development and my
        learnings and experiments or rather anything whcih seems cool to me
      </p>
      <div className="flex flex-col gap-4">
        {postPreviews}
      </div>
    </main>
  );
};

export default page;
