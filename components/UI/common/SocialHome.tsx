import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";
const SocialHome = () => {
  return (
    <div className="flex gap-5 py-2">
      <a href="https://github.com/Rahilsiddique">
        <FiGithub size={30} className="cursor-pointer" />
      </a>
      <a href="https://linkedin.com/in/rahilsiddique/">
        <FiLinkedin size={30} className="cursor-pointer" />
      </a>
      <a href="https://twitter.com/Rahil1900">
        <FiTwitter size={30} className="cursor-pointer" />
      </a>
      <a href="mailto: siddiquerahil19@gmail.com">
        <MdOutlineAlternateEmail size={30} className="cursor-pointer" />
      </a>
    </div>
  );
};

export default SocialHome;
