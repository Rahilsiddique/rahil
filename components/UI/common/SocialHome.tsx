import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";
const SocialHome = () => {
  return (
    <div className="flex gap-5 py-2">
      <FiGithub size={20} className="cursor-pointer" />
      <FiTwitter size={20} className="cursor-pointer" />
      <FiLinkedin size={20} className="cursor-pointer" />
      <MdOutlineAlternateEmail size={20} className="cursor-pointer" />
    </div>
  );
};

export default SocialHome;
