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
    imgSrc: "/images/cpp.png",
    label: "C++",
    desc: "Programming Language",
  },
  {
    imgSrc: "/images/c.png",
    label: "C",
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
    imgSrc: "/images/java.png",
    label: "Java",
    desc: "Programming Language",
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
  {
    imgSrc: "/images/linux.png",
    label: "Linux",
    desc: "Operating System",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
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
    imgSrc: "/images/django.svg",
    label: "Django",
    desc: "Python Framework",
  },
  {
    imgSrc: "/images/docker.svg",
    label: "Docker",
    desc: "Python Framework",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/images/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
];

const Skill = () => {
  return (
    <CollapsibleSection
      sectionId="skills"
      title="Skills"
      description="Discover the powerful tools and technologies I use."
      items={skillItem}
      renderItem={(skill, index, isExpandedItem) => (
        <SkillCard
          key={index}
          imgSrc={skill.imgSrc}
          label={skill.label}
          desc={skill.desc}
          classes={isExpandedItem ? "" : "reveal-up"}
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
