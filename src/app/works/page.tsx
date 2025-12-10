import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Works", href: "/works", active: true },
  { label: "Photos", href: "/photos" },
  { label: "Blog", href: "https://www.macrochen.top/", external: true },
];

const projects = [
  {
    title: "High-Concurrency Cache System",
    description: "Thread-safe, sharded cache library supporting LRU/LFU/ARC eviction algorithms with 350K+ ops per run.",
    tech: ["C++", "Concurrent Programming"],
    link: "https://github.com/M4cr0Chen/CacheSystem",
  },
  {
    title: "Handwritten Digit Recognition",
    description: "TensorFlow/Keras-based digit recognition achieving 99.3% accuracy through CNN architecture optimization.",
    tech: ["Python", "TensorFlow", "OpenCV"],
    link: "https://github.com/M4cr0Chen/myDigitRecognition",
  },
  {
    title: "Auto Finder",
    description: "Fullstack web application helping users find and compare cars with React, Django, and MongoDB.",
    tech: ["React", "Django", "Docker", "Kubernetes"],
    link: "https://github.com/M4cr0Chen/xrwvm-fullstack_developer_capstone",
  },
  {
    title: "Biquadris",
    description: "Multiplayer Tetris game with enhanced gameplay features built using C++ and design patterns.",
    tech: ["C++", "OOP", "Design Patterns"],
    link: "https://github.com/M4cr0Chen/Biquadris",
  },
  {
    title: "AI Laundry Robot",
    description: "First place hackathon project - voice-controlled AI robot using PyAudio and Arduino UART communication.",
    tech: ["Python", "Arduino", "UART"],
    link: "https://github.com/M4cr0Chen/Automatic-Landry-Machine",
  },
  {
    title: "Plants vs Zombies",
    description: "Recreation of Plants vs Zombies in C with Bézier curve movement and double buffering optimization.",
    tech: ["C", "EasyX", "Game Dev"],
    link: "https://github.com/M4cr0Chen/My-Plants-VS-Zombies",
  },
  {
    title: "Counter-Strike (Ongoing)",
    description: "First-person shooter game built with Unreal Engine 5, featuring custom maps and IK retargeting.",
    tech: ["Unreal Engine 5", "Blueprint"],
    link: "#",
  },
];

export default function Works() {
  return (
    <div className="min-h-screen">
      <div className="container">
        {/* Header */}
        <header className="mb-8">
          <div className="mb-4">
            <Link href="/">
              <h1 className="text-2xl font-medium" style={{ color: "var(--accent)" }}>
                Zhenghong Chen
              </h1>
            </Link>
            <p className="text-[var(--muted)] italic text-sm">
              CS Student, University of Waterloo
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6 text-sm">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`nav-link ${item.active ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </header>

        {/* Main Content */}
        <main>
          <h2 className="text-xl mb-6" style={{ color: "var(--accent)" }}>
            Works & Projects
          </h2>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <article key={index} className="group">
                <p className="mb-1">
                  <span className="bullet">+</span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium"
                  >
                    {project.title}
                  </a>
                </p>
                <p className="pl-6 text-[var(--muted)] text-sm mb-2">
                  {project.description}
                </p>
                <div className="pl-6 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 border border-[var(--border)] text-[var(--muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <hr className="divider mt-8" />

          {/* Footer */}
          <footer className="flex items-center justify-between text-sm">
            <p className="text-[var(--muted)]">
              <span className="mr-2">✺</span>
              2025 Zhenghong Chen. All Rights Reserved.
            </p>
            <div className="footer-nav">
              <Link href="/about">←</Link>
              <span>拝</span>
              <Link href="/photos">→</Link>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
