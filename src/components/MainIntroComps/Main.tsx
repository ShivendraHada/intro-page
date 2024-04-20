import React from "react";
import Projects from "./Projects";
import About from "./About";
import Experience from "./Experience";

export default function Main() {
  return (
    <section className="border-l-[1px] border-color pl-10">
      <About />
      <Experience />
      <Projects />
    </section>
  );
}
