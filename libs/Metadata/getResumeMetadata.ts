import fs from "fs";

const getResumeMetadata = () => {
  const ye = fs.readFileSync("content/resume.json", "utf8");
  console.log(ye);

  return fs.readFileSync("content/resume.json", "utf8");
};

export default getResumeMetadata;
