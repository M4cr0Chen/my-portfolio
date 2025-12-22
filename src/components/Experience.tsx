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
    title: "Open Source Developer/Reviewer",
    company: "Shipd (by Datacurve YC W24)",
    date: "Dec. 2025 – Current",
    techStack: ["TypeScript", "Python", "LLM Training", "OSS"],
    description: [
      "Safeguarded the AI training pipeline against data contamination by auditing peer code submissions to ensure high-quality data ingestion",
      "Engineered Ground Truth datasets by reproducing bugs in high-traffic OSS repositories, authoring distinguishing test suites to capture edge cases, and implementing production-grade patches",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Geotab",
    date: "Sep. 2025 - Dec. 2025",
    techStack: ["C#", "TypeScript", "React", ".NET", "Jest", "xUnit"],
    description: [
      "Built an automated end-to-end testing framework for regulatory compliance certifications, which reduced test execution time by 98% (from 2 weeks to 4 hours)",
      "Designed a declarative, data-driven testing pattern using xUnit Theory that decreased redundant code by 75%",
      "Optimized Redux integration by refactoring blind event listeners to granular data store observers and enforcing cache immutability via cloning, cutting redundant re-renders and unintentional side effects by 40%",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Octopodi Technologies",
    date: "Jan 2025 - May 2025",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Next.js", "AGILE"],
    description: [
      "Built the UI for the product from scratch using TypeScript and React, delivering a reusable component library",
      "Practiced Test-Driven Development and reduced review time and post-release bug count by 50% and 40%",
      "Developed and automated 200+ unit tests using Jest and achieved over 90% code coverage in all components",
    ],
  },
  {
    title: "Software QA Intern",
    company: "Shanghai Renhe Network Technology Co.,Ltd",
    date: "May 2024 - May 2024",
    techStack: ["Unity", "Excel", "Word"],
    description: [
      "Executed 500+ test cases to identify critical issues, contributing to a 10% reduction in post-release bugs",
      "Analyzed test results, delivering actionable insights that informed product improvements, contributing to a 30% decrease in bug resolution time, eliminating 15 hours of work",
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
