import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import resumePdf from "../assets/Resume.pdf";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex items-center gap-4 text-2xl m-8">
        {/* Add the button to download resume */}
        <a href={resumePdf} download="Ronit_Chougule_Resume.pdf" title="Download Resume" className="flex items-center">
          <IoDocumentTextOutline />
          <span className="ml-1 text-sm">Download Resume</span>
        </a>
      </div>
      <div className="flex items-center justify-end gap-4 text-2xl m-8">
        <a href="https://www.linkedin.com/in/ronit-chougule/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Ronitm10" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
