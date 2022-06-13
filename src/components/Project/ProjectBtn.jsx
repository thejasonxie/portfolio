const ProjectBtn = ({ name, href, target }) => {
  return (
    <a
      className="group border border-1 border-neutral-400 dark:border-neutral-700 hover:border-black dark:hover:border-neutral-400 rounded-md py-1 px-2 hover:shadow-xl"
      href={href}
      target={target}
    >
      <span className="font-bold text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white">
        {name}
      </span>
    </a>
  );
};

export default ProjectBtn;
