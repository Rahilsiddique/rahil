import PortfolioPreview from "../../components/PortfolioPreview";
import getPortfolioMetadata from "../../libs/getPortfolioMetadata";

const page = () => {
  const postMetadata = getPortfolioMetadata();

  const portfolioPreview = postMetadata.map(post =>
    <PortfolioPreview {...post} key={post.slug} />
  );

  return (
    <div>
      <div>
        <h1>portfolio</h1>
      </div>
      {portfolioPreview}
    </div>
  );
};

export default page;
