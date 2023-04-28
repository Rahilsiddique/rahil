import { NextPage } from "next";
import SocialHome from "../../components/common/SocialHome";
import Pattern from "../../components/desing/Pattern";
import PageWrapper from "../(providers)/PageWrapper";

const page: NextPage = () => {
  return (
    <PageWrapper>
      <main>
        <div>
          <Pattern />
          <div className="flex flex-wrap justify-between pt-2">
            <h1>Rahil Siddique</h1>
            <SocialHome />
          </div>
          <h2 className="text-xl font-bold text-transparent max-w-max mb-7 md:text-2xl bg-clip-text bg-gradient-to-r from-primary-500 to-ternary-500 dark:text-transparent">
            Student &amp; Frontend Developer
          </h2>
        </div>
      </main>
    </PageWrapper>
  );
};

export default page;
