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
    imgSrc: '/images/cache_system.png',
    title: 'High-Concurrency Cache System',
    description: [
      'Designed and implemented a thread-safe, sharded cache library supporting cache eviction algorithms',
      'Enabled high-concurrency performance by sharding LRU/LFU and minimizing lock contention',
      'Improved cache efficiency by shielding hot keys (LRU-K) and aging out stale hot data (LFU)',
      'Built an adaptive ARC algorithm that re-balances recency vs. frequency on the fly for complex workloads',
      'Ensured thread safety with fine-grained mutex locks and atomic operations; stress-tested at 350K+ ops per run with no race conditions'
    ],
    techStack: ['C++', 'Algorithm', 'Data Structure', 'Concurrent Programming'],
    projectLink: 'https://github.com/M4cr0Chen/xrwvm-fullstack_developer_capstone'
  },
  {
    imgSrc: '/images/digit-recognition.png',
    title: 'Handwritten Digit Recognition',
    description: [
      'Trained a TensorFlow/Keras-based digit recognition system based on the MNIST dataset and improved accuracy from 40% to 99.3% and reducing loss from 39% to 2% through CNN architecture optimization',
      'Enhanced model performance through convolutional layers, batch normalization, dropout, and early stopping, effectively reduced overfitting issues, training time, and improved generalization',
      'Applied preprocessing pipeline with OpenCV including grayscale normalization, resizing, and channel handling',
      'Visualized predictions on custom images that loaded, processed, and classified external handwritten digits'
    ],
    techStack: ['C++', 'Algorithm', 'Data Structure', 'Concurrent Programming'],
    projectLink: 'https://github.com/M4cr0Chen/xrwvm-fullstack_developer_capstone'
  },
  {
    imgSrc: '/images/project-1.png',
    title: 'Auto Finder',
    description: ['A fullstack web application that helps users find and compare cars based on their preferences. Features include search filters, comparison tools, and user reviews.', 'Built reusable UI components with React, applying state management for responsive design', 'Developed a Django backend with optimized ORM queries and integrated MongoDB for flexible data storage', 'Containerized the application using Docker and orchestrated deployments with Kubernetes, lowering infrastructure costs by 30% and achieving seamless environment scaling'],
    techStack: ['Python', 'Django', 'MongoDB', 'MVC'],
    projectLink: 'https://github.com/M4cr0Chen/xrwvm-fullstack_developer_capstone'
  },
  {
    imgSrc: '/images/tetris-2.png',
    title: 'Biquadris (Multi-Player Tertris)',
    description: ['A multiplayer version of Tetris with enhanced gameplay features. Players can compete against each other with special abilities and challenges.'],
    techStack: ['C++', 'Object-Oriented Programming', 'Smart Pointers', 'STL', 'Design Patterns'],
    projectLink: 'https://github.com/M4cr0Chen/Biquadris'
  },
  {
    imgSrc: '/images/project-2.png',
    title: 'Portfolio Website',
    description: ['A personal portfolio website showcasing my projects, skills, and experience. Built with modern web technologies for optimal performance.'],
    techStack: ['React', 'JavaScript', 'Tailwind CSS'],
    projectLink: 'https://github.com/M4cr0Chen/my-portfolio'
  },
  {
    imgSrc: '/images/project-3.png',
    title: 'AI Laundry Robot',
    description: ['An automated laundry robot that uses AI to sort, wash, and fold clothes. Includes computer vision for fabric detection and stain analysis.'],
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'LEGO'],
    projectLink: 'https://github.com/M4cr0Chen/Automatic-Landry-Machine'
  },
  {
    imgSrc: '/images/project-4.png',
    title: 'Blog Website',
    description: ['A personal blog website where I share my thoughts on technology, programming, and personal experiences. Features comment system and search functionality.'],
    techStack: ['Hexo', 'JavaScript', 'CSS', 'Vercel'],
    projectLink: 'https://www.macrochen.top/'
  },
  {
    imgSrc: '/images/project-5.png',
    title: 'Plants vs Zombies',
    description: ['A recreation of the popular Plants vs Zombies game with custom features and levels. Includes various plant types and zombie challenges.'],
    techStack: ['C', 'EasyX', 'Game Development', 'Algorithms'],
    projectLink: 'https://github.com/M4cr0Chen/My-Plants-VS-Zombies'
  },
  {
    imgSrc: '/images/project-6.png',
    title: 'Kneadaschit',
    description: ['A map-based application that helps users find public restrooms nearby. Includes ratings, reviews, and accessibility information.'],
    techStack: ['JavaScript', 'Google Maps API', 'Node.js', 'MongoDB'],
    projectLink: 'https://kneadaschit.biz/'
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'Counter-Strike (Ongoing)',
    description: ['A first-person shooter game inspired by Counter-Strike, built using Unreal Engine 5. Currently in development with custom maps and game modes.'],
    techStack: ['Unreal Engine 5', 'Blueprint', 'C++', '3D Modeling'],
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
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 lg:gap-8">
          {works.map(({ imgSrc, title, description, techStack, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              description={description}
              techStack={techStack}
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