/**
 * @copyright 2024 Zhenghong Chen
 * @license Apache-2.0
 */

import SkillCard from "./SkillCard";
import CollapsibleSection from "./CollapsibleSection";

interface SkillItem {
  imgSrc: string;
  label: string;
  desc: string;
}

const skillItem: SkillItem[] = [
  {
    imgSrc: "/images/python.svg",
    label: "Python",
    desc: "Programming Language",
  },
  {
    imgSrc: "/images/typescript.png",
    label: "TypeScript",
    desc: "Programming Language",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Programming Language",
  },
  {
    imgSrc: "/images/cSharp.png",
    label: "C#",
    desc: "Programming Language",
  },
  {
    imgSrc: "/images/cpp.png",
    label: "C++",
    desc: "Programming Language",
  },
  {
    imgSrc: "/images/java.png",
    label: "Java",
    desc: "Programming Language",
  },
  {
    imgSrc: "/images/Git.png",
    label: "Git",
    desc: "Version Control",
  },
  {
    imgSrc: "/images/linux.png",
    label: "Linux",
    desc: "Operating System",
  },
  {
    imgSrc: "/images/FastAPI.png",
    label: "FastAPI",
    desc: "Python Framework",
  },
  {
    imgSrc: "/images/django.svg",
    label: "Django",
    desc: "Python Framework",
  },
  {
    imgSrc: "/images/Nextjs.png",
    label: "Next.js",
    desc: "Framework",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: "/images/Jest.svg",
    label: "Jest",
    desc: "Testing Framework",
  },
  {
    imgSrc: "/images/AWS.png",
    label: "AWS",
    desc: "Cloud Services",
  },
  {
    imgSrc: "/images/Google Cloud.svg",
    label: "Google Cloud",
    desc: "Cloud Services",
  },
  {
    imgSrc: "/images/docker.svg",
    label: "Docker",
    desc: "Containerization",
  },
  {
    imgSrc: "/images/PostgresSQL.png",
    label: "PostgreSQL",
    desc: "Database",
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/images/langGraph.png",
    label: "langGraph",
    desc: "AI/ML",
  },
  {
    imgSrc: "/images/PyTorch.png",
    label: "PyTorch",
    desc: "AI/ML",
  },
  {
    imgSrc: "/images/tensorflow.svg",
    label: "TensorFlow",
    desc: "AI/ML",
  },
  {
    imgSrc: "/images/opencv.png",
    label: "OpenCV",
    desc: "AI/ML",
  },
];

const Skill = () => {
  return (
    <CollapsibleSection
      sectionId="skills"
      title="Skills"
      description="Discover the powerful tools and technologies I use."
      items={skillItem}
      renderItem={(skill, index) => (
        <SkillCard
          key={index}
          imgSrc={skill.imgSrc}
          label={skill.label}
          desc={skill.desc}
        />
      )}
      gridClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
      itemName="skills"
      previewCount={2}
      enableOnDesktop={false}
      enableOnMobile={true}
    />
  );
};

export default Skill;
