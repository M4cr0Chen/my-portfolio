import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about", active: true },
  { label: "Works", href: "/works" },
  { label: "Photos", href: "/photos" },
  { label: "Blog", href: "https://www.macrochen.top/", external: true },
];

export default function About() {
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
            About Me
          </h2>

          <section className="mb-8 space-y-4">
            <p>
              <span className="bullet">+</span>
              Hi! I&apos;m Zhenghong Chen, a second-year Computer Science student at the{" "}
              <a href="https://uwaterloo.ca/" target="_blank" rel="noopener noreferrer">
                University of Waterloo
              </a>
              .
            </p>

            <p>
              <span className="bullet">+</span>
              I&apos;m passionate about distributed systems, compilers, machine learning,
              web development, game development, and so much more.
            </p>

            <p>
              <span className="bullet">+</span>
              I have experience in Web Development and Quality Assurance, with a strong
              foundation in C++, Python, JavaScript/TypeScript, and various modern frameworks.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg mb-4 section-title">
              <span className="bullet">+</span>
              Skills & Technologies:
            </h3>
            <div className="pl-6 space-y-2">
              <p>
                <span className="text-[var(--muted)]">Languages:</span> C++, C, Python, JavaScript, TypeScript, Java
              </p>
              <p>
                <span className="text-[var(--muted)]">Frameworks:</span> React, Next.js, Django, Node.js, Express
              </p>
              <p>
                <span className="text-[var(--muted)]">Tools:</span> Docker, Kubernetes, MongoDB, TensorFlow, Git
              </p>
              <p>
                <span className="text-[var(--muted)]">Other:</span> OpenCV, Unreal Engine, GSAP
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-lg mb-4 section-title">
              <span className="bullet">+</span>
              Education:
            </h3>
            <div className="pl-6">
              <p className="font-medium">University of Waterloo</p>
              <p className="text-[var(--muted)] text-sm">
                Bachelor of Computer Science • 2023 - Present
              </p>
            </div>
          </section>

          <hr className="divider" />

          {/* Footer */}
          <footer className="flex items-center justify-between text-sm">
            <p className="text-[var(--muted)]">
              <span className="mr-2">✺</span>
              2025 Zhenghong Chen. All Rights Reserved.
            </p>
            <div className="footer-nav">
              <Link href="/">←</Link>
              <span>拝</span>
              <Link href="/works">→</Link>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
