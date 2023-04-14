import { NextPage } from "next";
import SocialHome from "../components/UI/common/SocialHome";
import Pattern from "../components/UI/desing/Pattern";

const page: NextPage = () => {
  return (
    <main>
      <div>
        <Pattern />
        <h1>Rahil Siddique</h1>
        <div className="flex flex-wrap justify-between">
          <h2 className="text-xl font-bold text-transparent max-w-max mb-7 md:text-2xl bg-clip-text bg-gradient-to-r from-primary-500 to-ternary-500 dark:text-transparent">
            Student &amp; Frontend Developer
          </h2>
          <SocialHome />
        </div>
      </div>
    </main>
  );
};

export default page;
