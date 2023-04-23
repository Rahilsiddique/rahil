import Title from "./Title";
import data from "../../../content/resume.json";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import { NextPage } from "next";

const page: NextPage = () => {
  return (
    <div className="pt-5 pb-10 dark:bg-theme-900">
      <Title titleInfo={data.title} />
      <Education eduInfo={data.education} />
      <Experience expInfo={data.experience} />
      <Projects projectInfo={data.projects} />
      <Skills skills={data.skills} />
    </div>
  );
};

export default page;
