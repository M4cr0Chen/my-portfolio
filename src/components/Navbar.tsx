/**
 * @copyright 2024 Zhenghong Chen
 * @license Apache-2.0
 */

import { useRef, useEffect, RefObject, MouseEvent } from "react";

interface NavbarProps {
  navOpen: boolean;
}

interface NavItem {
  label: string;
  link: string;
  className: string;
  ref?: RefObject<HTMLAnchorElement | null>;
}

const Navbar = ({ navOpen }: NavbarProps) => {
  const lastActiveLink = useRef<HTMLAnchorElement | null>(null);
  const activeBox = useRef<HTMLDivElement | null>(null);

  // Check if an element is visible (not hidden by CSS like md:hidden)
  const isElementVisible = (element: HTMLElement | null): boolean => {
    if (!element) return false;
    const style = window.getComputedStyle(element);
    return style.display !== "none" && style.visibility !== "hidden";
  };

  // Update activeBox position only if target is visible
  const updateActiveBoxPosition = (link: HTMLAnchorElement | null) => {
    if (!activeBox.current || !link || !isElementVisible(link)) return;

    activeBox.current.style.top = link.offsetTop + "px";
    activeBox.current.style.left = link.offsetLeft + "px";
    activeBox.current.style.width = link.offsetWidth + "px";
    activeBox.current.style.height = link.offsetHeight + "px";
  };

  const initActiveBox = () => {
    if (activeBox.current && lastActiveLink.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height =
        lastActiveLink.current.offsetHeight + "px";
    }
  };

  useEffect(initActiveBox, []);

  useEffect(() => {
    window.addEventListener("resize", initActiveBox);
    return () => window.removeEventListener("resize", initActiveBox);
  }, []);

  const activeCurrentLink = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = event.target as HTMLAnchorElement;
    const targetSection = document.querySelector(target.getAttribute("href")!);

    targetSection?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    lastActiveLink.current?.classList.remove("active");
    target.classList.add("active");
    lastActiveLink.current = target;
  };

  const navItems: NavItem[] = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Courses",
      link: "#courses",
      className: "nav-link",
    },
    {
      label: "Skills",
      link: "#skills",
      className: "nav-link",
    },
    {
      label: "Experience",
      link: "#experience",
      className: "nav-link",
    },
    {
      label: "Projects",
      link: "#projects",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.querySelector(item.link));

      const scrollPosition = window.scrollY + 100;
      const pageBottom = window.innerHeight + window.scrollY;
      const footer = document.querySelector("footer");

      if (
        footer &&
        pageBottom >= document.documentElement.scrollHeight - 53
      ) {
        // Try Contact first (visible on mobile), fallback to Projects (visible on desktop)
        const contactLink = document.querySelector(
          'a[href="#contact"]'
        ) as HTMLAnchorElement;
        const projectsLink = document.querySelector(
          'a[href="#projects"]'
        ) as HTMLAnchorElement;

        // Use Contact if visible (mobile), otherwise Projects (desktop)
        const targetLink = isElementVisible(contactLink) ? contactLink : projectsLink;

        if (targetLink && isElementVisible(targetLink)) {
          lastActiveLink.current?.classList.remove("active");
          targetLink.classList.add("active");
          lastActiveLink.current = targetLink;
          updateActiveBoxPosition(targetLink);
        }
        return;
      }

      sections.forEach((section, index) => {
        if (!section) return;

        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          const newActiveLink = document.querySelector(
            `a[href="${navItems[index].link}"]`
          ) as HTMLAnchorElement;

          // Only update if the link is visible (handles md:hidden case)
          if (newActiveLink && isElementVisible(newActiveLink)) {
            lastActiveLink.current?.classList.remove("active");
            newActiveLink.classList.add("active");
            lastActiveLink.current = newActiveLink;
            updateActiveBoxPosition(newActiveLink);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          key={key}
          ref={ref as RefObject<HTMLAnchorElement>}
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

export default Navbar;
