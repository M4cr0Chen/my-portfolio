/**
 * @copyright 2024 Zhenghong Chen
 * @license Apache-2.0
 */

import ExperienceCard from "./ExperienceCard";

interface ExperienceData {
  title: string;
  company: string;
  date: string;
  techStack: string[];
  description: string[];
}

const experienceData: ExperienceData[] = [
  {
    title: "Fronted Software Developer Co-op",
    company: "Octopodi Technologies",
    date: "Jan 2025 - May 2025",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Next.js", "AGILE"],
    description: [
      "Designed and built the UI for a cross-platform desktop application from scratch using TypeScript, delivering a highly scalable and maintainable component library with reusable React components",
      "Practiced Test-Driven Development and reduced review time and post-release bug count by 50% and 40%",
      "Developed and automated 200+ unit tests using Jest and userEvent that maintained over 90% code coverage",
      "Assisted in conducting a seamless framework migration from Next.js to Vue.js by decoupling components",
      "Deployed and iterated rapidly using CI/CD pipelines in a Unix/Linux development environment under WSL2",
      "Designed a sample code suite to validate core backend functionalities, streamlining backend team workflows and help identify bugs early",
    ],
  },
  {
    title: "Software QA",
    company: "Shanghai Renhe Network Technology Co.,Ltd",
    date: "May 2024 - May 2024",
    techStack: ["Unity", "Excel", "Word"],
    description: [
      "Manually ran 500+ test cases to identify critical issues, contributing to a 10% reduction in post-release bugs",
      "Analyzed test results, delivering actionable insights that informed product improvements, contributing to a 30% decrease in bug resolution time, eliminating 15 hours of work",
      "Streamlined test documentation and boosted team productivity, enabling a smoother development process",
      "Gained deep insights into bug detection and prevention and helped me write more testable, reliable code",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">Experience</h2>

        <div className="mt-8">
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={index}
              title={experience.title}
              company={experience.company}
              date={experience.date}
              techStack={experience.techStack}
              description={experience.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
