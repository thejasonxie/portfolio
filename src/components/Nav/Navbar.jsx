import { FaGithub, FaLinkedin } from "react-icons/fa/index.js";
import NavLink from "./NavLink";

const Navbar = ({ children: themeBtn }) => {
  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="bg-neutral-200 h-16 dark:bg-neutral-800 border-b-2 border-neutral-300 dark:border-neutral-900">
        <div className="container h-full items-center flex justify-between">
          <section className="px-4">
            <NavLink href="/" extraClass="pt-3">
              <span className="text-lg sm:text-2xl inline-block dark:text-white">
                Jason Xie
              </span>
            </NavLink>
          </section>
          <section>
            <nav className="flex justify-between">
              <NavLink
                name="Projects"
                href="/projects"
                imgSrc="/assets/icons/projects.png"
                imgAlt="Projects icon"
              />
              <NavLink
                name="Blog"
                href="/blog"
                imgSrc="/assets/icons/projects.png"
                imgAlt="Blog icon"
              />
              <NavLink
                name="About me"
                href="/about"
                imgSrc="/assets/icons/aboutme.png"
                imgAlt="About me icon"
              />
            </nav>
          </section>
          <section className="flex gap-2 px-4">
            <nav className="hidden sm:flex gap-2 justify-between">
              <NavLink href="https://github.com/thejasonxie" target="_blank">
                <FaGithub size="24px" className="dark:text-white" />
              </NavLink>
              <NavLink
                href="https://www.linkedin.com/in/thejasonxie"
                target="_blank"
              >
                <FaLinkedin
                  color="rgb(10, 102, 194)"
                  size="24px"
                  className="dark:bg-white"
                />
              </NavLink>
            </nav>
            {themeBtn}
          </section>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
