import PortfolioPreview from "../../../components/preview/PortfolioPreview";
import UnderLine from "../../../components/common/UnderLine";
import getPortfolioMetadata from "../../../libs/getPortfolioMetadata";
import PageWrapper from "../../(providers)/PageWrapper";

const page = () => {
  const postMetadata = getPortfolioMetadata();
  console.log(postMetadata);

  const portfolioPreview = postMetadata.map(post =>
    <PortfolioPreview {...post} key={post.slug} />
  );

  return (
    <PageWrapper>
      <div>
        <div>
          <h1>portfolio</h1>
        </div>
        <UnderLine />
        <div className="grid gap-5 md:grid-cols-2">
          {portfolioPreview}
        </div>
      </div>
    </PageWrapper>
  );
};

export default page;
