import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="bg-neutral-200 h-16">
      <div className="container h-full items-center flex justify-between">
        <div className="pl-4">
          <a className="p-2 rounded-xl sm:hover:bg-stone-300 pt-3" href="">
            <span className="text-lg sm:text-2xl inline-block">Jason Xie</span>
          </a>
        </div>
        <div>
          <nav className="flex justify-between gap-2">
            <a className="nav-link" href="">
              <img
                className="w-6 h-6 sm:inline-block mx-auto"
                src="/assets/projects.png"
                alt="Projects Icon"
              />
              <span className="inline-block mx-2 text-xs sm:text-base">
                Projects
              </span>
            </a>
            <a className="nav-link" href="">
              <img
                className="w-6 h-6 sm:inline-block mx-auto"
                src="/assets/aboutme.png"
                alt=""
              />
              <span className="inline-block mx-2 text-xs sm:text-base">
                About me
              </span>
            </a>
          </nav>
        </div>
        <div className="flex gap-2 px-4">
          <nav className="hidden sm:flex gap-2 justify-between">
            <a
              className="nav-link"
              href="https://github.com/thejasonxie"
              target="_blank"
            >
              <FaGithub size="1.5rem" />
            </a>
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/thejasonxie"
              target="_blank"
            >
              <FaLinkedin color="rgb(10, 102, 194)" size="1.5rem" />
            </a>
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
