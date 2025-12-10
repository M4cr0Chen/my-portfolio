import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Works", href: "/works" },
  { label: "Photos", href: "/photos", active: true },
  { label: "Blog", href: "https://www.macrochen.top/", external: true },
];

export default function Photos() {
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
            Photos
          </h2>

          <section className="mb-8">
            <p className="text-[var(--muted)] mb-6">
              <span className="bullet">+</span>
              A collection of photos from my journey. Coming soon...
            </p>

            {/* Placeholder grid for photos */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-[var(--border)] flex items-center justify-center text-[var(--muted)] text-sm"
                >
                  Photo {i}
                </div>
              ))}
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
              <Link href="/works">←</Link>
              <span>拝</span>
              <Link href="/">→</Link>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
