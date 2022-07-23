import ProjectBtn from "./ProjectBtn";

const Project = ({ name, description, imgSrc, imgAlt, repoLink, demoLink }) => {
  const detailsLink = "/projects/" + name.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className="border border-3 border-neutral-400 dark:border-black dark:bg-neutral-800 dark:shadow-inner rounded-xl px-6 py-10 sm:p-10 w-64 sm:w-72 shadow-xl">
      <div className="flex flex-col gap-4">
        <div className="h-16 flex flex-col justify-center">
          <h2 className="text-2xl text-center font-bold dark:text-white">
            {name}
          </h2>
        </div>
        <img
          className="w-36 h-36 mx-auto mb-2 drop-shadow-lg"
          src={imgSrc}
          alt={imgAlt}
        />
        <div className="flex flex-row justify-between text-sm">
          <ProjectBtn name="Overview" href={detailsLink} />
          <ProjectBtn name="Repo" href={repoLink} target="_blank" />
          <ProjectBtn name="Demo" href={demoLink} target="_blank" />
        </div>
        <p className="text-lg text-center text-neutral-500 dark:text-neutral-300 track">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Project;
