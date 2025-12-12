/**
 * @copyright 2024 Zhenghong Chen
 * @license Apache-2.0
 */

interface ProjectCardProps {
  imgSrc: string;
  title: string;
  description?: string[];
  techStack?: string[];
  projectLink?: string;
  classes?: string;
}

const ProjectCard = ({
  imgSrc,
  title,
  description,
  techStack,
  projectLink,
  classes,
}: ProjectCardProps) => {
  return (
    <div
      className={
        "relative p-6 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors flex flex-col md:flex-row h-auto min-h-full " +
        classes
      }
    >
      <figure className="img-box aspect-square w-full max-h-96 md:max-w-md rounded-lg mb-6 md:mb-0 md:mr-4 shrink-0">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="img-cover"
        />
      </figure>

      <div className="flex flex-col flex-grow min-w-0 pb-16">
        <h3 className="text-2xl mb-4">{title}</h3>

        {techStack && (
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {techStack.map((tech, key) => (
              <span
                key={key}
                className="h-8 text-sm text-sky-300 bg-sky-400/20 grid items-center px-3 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {description && (
          <div className="text-[#eaeaea] text-lg mb-4">
            <ul className="list-disc pl-5 space-y-1">
              {description.map((point, key) => (
                <li key={key} className="break-words">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="absolute bottom-6 right-6">
          <button
            onClick={() => window.open(projectLink, "_blank")}
            className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0"
            aria-label={`View ${title} project`}
          >
            <span className="material-symbols-rounded" aria-hidden="true">
              arrow_outward
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
