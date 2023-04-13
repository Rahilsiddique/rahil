import PostPreview from "../../components/PostPreview";
import getPostMetadata from "../../libs/getPostMetadata";

const page = () => {
  const postMetadata = getPostMetadata();

  const postPreviews = postMetadata.map(post =>
    <PostPreview {...post} key={post.slug} />
  );

  return (
    <main>
      <h4>My blogs</h4>
      <div>
        {postPreviews}
      </div>
    </main>
  );
};

export default page;
