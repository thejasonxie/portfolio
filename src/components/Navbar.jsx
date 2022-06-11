import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";
import NavButton from "./NavButton";

const Navbar = () => {
  return (
    <div className="bg-neutral-200 h-16">
      <div className="container h-full items-center flex justify-between">
        <div className="pl-4">
          <NavButton href="/" extraClass="pt-3">
            <span className="text-lg sm:text-2xl inline-block">Jason Xie</span>
          </NavButton>
        </div>
        <div>
          <nav className="flex justify-between gap-2">
            <NavButton
              name="Projects"
              imgSrc="/assets/projects.png"
              imgAlt="Projects icon"
            />
            <NavButton
              name="About me"
              imgSrc="/assets/aboutme.png"
              imgAlt="About me icon"
            />
          </nav>
        </div>
        <div className="flex gap-2 px-4">
          <nav className="hidden sm:flex gap-2 justify-between">
            <NavButton href="https://github.com/thejasonxie" target="_blank">
              <FaGithub size="1.5rem" />
            </NavButton>
            <NavButton
              href="https://www.linkedin.com/in/thejasonxie"
              target="_blank"
            >
              <FaLinkedin color="rgb(10, 102, 194)" size="1.5rem" />
            </NavButton>
          </nav>
          <button className="nav-link">
            <FiMoon size="1.5rem" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
