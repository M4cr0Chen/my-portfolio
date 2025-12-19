/**
 * @copyright 2024 Zhenghong Chen
 * @license Apache-2.0
 */

"use client";

import { ReactLenis } from "lenis/react";

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

export default function HomeContent() {
  return (
    <ReactLenis root>
      <TerminalPrompt />
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Courses />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
}
