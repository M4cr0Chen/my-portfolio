/**
 * @copyright 2024 Zhenghong Chen
 * @license Apache-2.0
 */

"use client";

import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skill from "../components/Skill";
import Experience from "../components/Experience";
import Courses from "../components/Courses";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import TerminalPrompt from "../components/TerminalPrompt";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HomeContent() {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach((element) => {
      gsap.to(element as Element, {
        scrollTrigger: {
          trigger: element as Element,
          start: "-200 bottom",
          end: "bottom 80%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  });

  return (
    <ReactLenis root>
      <TerminalPrompt />
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
        <Skill />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
}
