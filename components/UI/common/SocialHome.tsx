import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const SocialHome = () => {
  return (
    <div className="flex gap-5 py-2">
      <a href="https://github.com/Rahilsiddique">
        <FaTwitterSquare size={30} className="cursor-pointer" />
      </a>
      <a href="https://linkedin.com/in/rahilsiddique/">
        <FaLinkedin size={30} className="cursor-pointer" />
      </a>
      <a href="https://twitter.com/Rahil1900">
        <FaGithubSquare size={30} className="cursor-pointer" />
      </a>
      {/* <a href="mailto: siddiquerahil19@gmail.com">
        <SiGmail size={30} className="cursor-pointer" />
      </a> */}
    </div>
  );
};

export default SocialHome;
