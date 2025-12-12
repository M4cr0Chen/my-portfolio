/**
 * @copyright 2024 Zhenghong Chen
 * @license Apache-2.0
 */

interface Course {
  code: string;
  name: string;
  description: string;
  category: string;
}

interface CourseCardProps {
  code: string;
  name: string;
  description: string;
  category: string;
}

const courses: Course[] = [
  {
    code: "CS 135",
    name: "Designing Functional Programs",
    description:
      "An introduction to the fundamentals of computer science through functional style of programming",
    category: "Computer Science",
  },
  {
    code: "CS 136",
    name: "Elementary Algorithm Design and Data Abstraction",
    description:
      "Introduction to the design and analysis of algorithms and the management of information",
    category: "Computer Science",
  },
  {
    code: "CS 241",
    name: "Foundations of Sequential Programs",
    description:
      "Introduction to programming language concepts, compilers, and interpreters",
    category: "Computer Science",
  },
  {
    code: "CS 246",
    name: "Object-Oriented Software Development",
    description:
      "Software development principles and practices using object-oriented programming",
    category: "Computer Science",
  },
  {
    code: "CS 251",
    name: "Computer Organization and Design",
    description:
      "Computer architecture, digital logic, assembly language, and processor design",
    category: "Computer Science",
  },
  {
    code: "STAT 230",
    name: "Probability",
    description:
      "Probability theory and applications, including random variables, distributions, and probability models",
    category: "Computer Science",
  },
];

const CourseCard = ({ code, name, description, category }: CourseCardProps) => {
  return (
    <div className="bg-zinc-800/50 p-6 rounded-2xl hover:bg-zinc-700/50 transition-colors reveal-up">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-xl font-semibold text-white">{code}</h3>
          <p className="text-sky-400 font-medium min-h-[3rem]">{name}</p>
        </div>
        <span className="text-sm text-zinc-400 bg-zinc-700/50 px-3 py-1 rounded-lg whitespace-nowrap self-start">
          {category}
        </span>
      </div>
      <p className="text-zinc-300 text-sm">{description}</p>
    </div>
  );
};

const Courses = () => {
  return (
    <section id="courses" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Courses</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          A selection of key courses during my academic journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              code={course.code}
              name={course.name}
              description={course.description}
              category={course.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
