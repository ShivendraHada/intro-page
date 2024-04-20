import React from "react";
import Projects from "./Projects";
import About from "./About";
import Experience from "./Experience";

export default function Main() {
  return (
    <section className="md:border-l-[1px] md:border-color md:pl-10 md:mt-0 mt-6">
      <div className="md:block hidden">
        <About />
      </div>
      <Experience />
      <Projects />
    </section>
  );
}
