import { FaGithub, FaLinkedin } from "react-icons/fa/index.js";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <footer className=" py-16 bg-neutral-200 dark:bg-neutral-800 border-t-2 border-neutral-300 dark:border-neutral-900">
      <div className="container flex flex-col gap-5">
        <section className="text-center">
          <div className="inline-block">
            <span className="text-neutral-600 dark:text-neutral-500">
              Made by Jason Xie
            </span>
            <div className="flex gap-4 mt-2">
              <a
                href="https://github.com/thejasonxie"
                target="_blank"
                className="flex gap-2"
              >
                <FaGithub size="32px" className="dark:text-white" />
                <span className="dark:text-neutral-300 leading-8">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/thejasonxie"
                target="_blank"
                className="flex gap-2"
              >
                <FaLinkedin
                  size="32px"
                  color="rgb(10, 102, 194)"
                  className="dark:bg-white"
                />
                <span className="dark:text-neutral-300 leading-8">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>
        </section>
        <section className="text-center">
          <div className="inline-block">
            <span className="text-neutral-600 dark:text-neutral-500">
              Made with:
            </span>
            <div className="flex flex-row gap-4 sm:gap-4 mt-2">
              <FooterLink
                name="Astro"
                href="https://astro.build/"
                imgSrc="/assets/icons/astro.svg"
                imgAlt="Astro logo"
                className="basis-1/2"
              />
              <FooterLink
                name="Reactjs"
                href="https://reactjs.org/"
                imgSrc="/assets/icons/reactjs.svg"
                imgAlt="Reactjs logo"
                className="basis-1/2"
              />
              <FooterLink
                name="TailwindCSS"
                href="https://tailwindcss.com/"
                imgSrc="/assets/icons/tailwindcss.svg"
                imgAlt="TailwindCSS logo"
                className="basis-1/2"
              />
              <FooterLink
                name="Netlify"
                href="https://www.netlify.com/"
                imgSrc="/assets/icons/netlify.svg"
                imgAlt="Netlify logo"
                className="basis-1/2"
              />
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
