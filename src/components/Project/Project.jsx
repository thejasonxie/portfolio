import ProjectBtn from "./ProjectBtn";

const Project = ({ name, description, imgSrc, imgAlt, repoLink, demoLink }) => {
  const detailsLink = "/projects/" + name.toLowerCase();

  return (
    <div className="border border-3 border-neutral-400 dark:border-black dark:bg-neutral-800 dark:shadow-inner rounded-xl p-10 w-72 shadow-xl">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl text-center font-bold dark:text-white">
          {name}
        </h2>
        <img
          className="w-36 h-36 mx-auto drop-shadow-xl"
          src={imgSrc}
          alt={imgAlt}
        />
        <div className="flex flex-row justify-between">
          <ProjectBtn name="Details" href={detailsLink} />
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
