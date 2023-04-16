import PortfolioPreview from "../../components/PortfolioPreview";
import getPortfolioMetadata from "../../libs/getPortfolioMetadata";

const page = () => {
  const postMetadata = getPortfolioMetadata();
  console.log(postMetadata);

  const portfolioPreview = postMetadata.map(post =>
    <PortfolioPreview
      previewImg={"sorting-visualizer.png"}
      {...post}
      key={post.slug}
    />
  );

  return (
    <div>
      <div>
        <h1>portfolio</h1>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {portfolioPreview}
      </div>
    </div>
  );
};

export default page;
