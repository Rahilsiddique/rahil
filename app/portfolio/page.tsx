import PortfolioPreview from "../../components/PortfolioPreview";
import UnderLine from "../../components/UI/common/UnderLine";
import getPortfolioMetadata from "../../libs/getPortfolioMetadata";

const page = () => {
  const postMetadata = getPortfolioMetadata();
  console.log(postMetadata);

  const portfolioPreview = postMetadata.map(post =>
    <PortfolioPreview {...post} key={post.slug} />
  );

  return (
    <div>
      <div>
        <h1>portfolio</h1>
      </div>
      <UnderLine />
      <div className="grid gap-5 md:grid-cols-2">
        {portfolioPreview}
      </div>
    </div>
  );
};

export default page;
