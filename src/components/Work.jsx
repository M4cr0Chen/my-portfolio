/**
 * @copyright 2024 Zhenghong Chen 
 * @license Apache-2.0
*/

/**
 * Components
 */
import ProjectCard from './ProjectCard';

const works = [
  {
    imgSrc: '/images/project-1.png',
    title: 'Auto Finder',
    tags: ['Django', 'MVC', 'MongoDB'],
    projectLink: 'https://github.com/M4cr0Chen/xrwvm-fullstack_developer_capstone'
  },
  {
    imgSrc: '/images/tetris-2.png',
    title: 'Biquadris (Multi-Player Tertris)',
    tags: ['C++', 'OOP', 'Design Patterns'],
    projectLink: 'https://github.com/M4cr0Chen/Biquadris'
  },
  {
    imgSrc: '/images/project-2.png',
    title: 'Portfolio Website',
    tags: ['React', 'Tailwind CSS'],
    projectLink: 'https://github.com/M4cr0Chen/my-portfolio'
  },
  {
    imgSrc: '/images/project-3.png',
    title: 'AI Laundry Robot',
    tags: ['Python', 'AI', 'Embedded System'],
    projectLink: 'https://github.com/M4cr0Chen/Automatic-Landry-Machine'
  },
  {
    imgSrc: '/images/project-4.png',
    title: 'Blog Website',
    tags: ['Hexo', 'Butterfly', 'Git', 'Vercel'],
    projectLink: 'https://www.macrochen.top/'
  },
  {
    imgSrc: '/images/project-5.png',
    title: 'Plants vs Zombies',
    tags: ['Game Development', 'C', 'EasyX'],
    projectLink: 'https://github.com/M4cr0Chen/My-Plants-VS-Zombies'
  },
  {
    imgSrc: '/images/project-6.png',
    title: 'Kneadaschit',
    tags: ['Toilet Map', 'API', 'Development'],
    projectLink: 'https://kneadaschit.biz/'
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'Counter-Strike (Ongoing)',
    tags: ['UE5', 'Blueprint', 'Development'],
    projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
  },
];


const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work