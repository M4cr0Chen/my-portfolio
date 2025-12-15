/**
 * @copyright 2024 Zhenghong Chen
 * @license Apache-2.0
 */

import { MouseEvent } from "react";
import { ButtonPrimary } from "./Button";

interface SitemapItem {
  label: string;
  href: string;
}

interface SocialItem {
  label: string;
  href: string;
}

const sitemap: SitemapItem[] = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials: SocialItem[] = [
  {
    label: "GitHub",
    href: "https://github.com/M4cr0Chen",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zhenghong-chen-974102245/",
  },
  {
    label: "Blog",
    href: "https://www.macrochen.top/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/macro_ch4n/",
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com/@macrochen9280",
  },
];

const TERMINAL_PORTFOLIO_URL = "https://terminal.zhenghong.dev";

const Footer = () => {
  const handleScrollToAbout = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = event.target as HTMLAnchorElement;
    const targetSection = document.querySelector(target.getAttribute("href")!);

    targetSection?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg;max-w-[12ch]">
              Let&apos;s work together today!
            </h2>

            <ButtonPrimary
              href="mailto:z253chen@uwaterloo.ca"
              label="Email Me"
              icon="chevron_right"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2">Sitemap</p>

              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      onClick={handleScrollToAbout}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2">Social</p>

              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/" className="logo">
            <img src="/images/Z.svg" width={40} height={40} alt="logo" />
          </a>

          <p className="text-zinc-500 text-sm">
            &copy; 2024 <span className="text-zinc-200">Zhenghong Chen</span>
          </p>

          <a
            href={TERMINAL_PORTFOLIO_URL}
            onClick={() => localStorage.setItem("portfolio-preference", "terminal")}
            className="text-zinc-500 text-sm hover:text-sky-400 transition-colors flex items-center gap-1"
          >
            <span className="material-symbols-rounded text-base">terminal</span>
            Terminal Mode
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
