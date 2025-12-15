/**
 * @copyright 2024 Zhenghong Chen
 * @license Apache-2.0
 */

interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  techStack?: string[];
  description?: string[];
}

const ExperienceCard = ({
  title,
  company,
  date,
  techStack,
  description,
}: ExperienceCardProps) => {
  return (
    <div className="bg-zinc-800/50 p-6 rounded-2xl mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-sky-400 font-medium">{company}</p>
        </div>
        <p className="text-zinc-200 text-sm mt-1 md:mt-0">{date}</p>
      </div>

      {techStack && (
        <div className="mb-4">
          <div className="flex flex-wrap items-center gap-2">
            {techStack.map((tech, key) => (
              <span
                key={key}
                className="h-8 text-sm text-sky-300 bg-sky-400/20 grid items-center px-3 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {description && (
        <div className="text-[#eaeaea] text-base">
          <ul className="list-disc pl-5 space-y-1">
            {description.map((point, key) => (
              <li key={key} className="break-words">
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
