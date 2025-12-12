/**
 * @copyright 2024 Zhenghong Chen
 * @license Apache-2.0
 */

import SkillCard from "./SkillCard";

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
    <section id="skills" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Skills</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
