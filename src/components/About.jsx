/**
 * @copyright 2024 Zhenghong Chen 
 * @license Apache-2.0
*/

const aboutItems = [
    {
      label: 'Project done',
      number: 10
    },
    {
      label: 'Years of experience',
      number: 1
    }
  ];


const About = () => {
  return (
    <section
        id="about"
        className="section"
    >
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    Welcome! I&apos;m Zhenghong Chen, a second year CS student at the University of Waterloo. I&apos;m passionate about full-stack development, game development, AR/VR, AI/ML, Algorithms, and so much more. I have experience in Full Stack Web Development and Quality Assurance Engineering.
                </p>

                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({label, number}, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                </div>

                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))
                    }

                    <img
                    src="/images/Z.svg" 
                    alt="Logo" 
                    width={30}
                    height={30}
                    className="ml-auto md:w-[40px] md:h-[40px]"
                    />
                </div>
            </div>

        </div>
    </section>
  )
}

export default About