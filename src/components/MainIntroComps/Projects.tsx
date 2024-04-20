import React from "react";
import projects from "../../../public/data/projects";
import ProjectItem from "./ProjectDetail";

function Projects() {
  return (
    <section className="section-style">
      <h2 className="main-heading">Projects</h2>
      <hr className="hr-style" />
      {projects.map((project) => (
        <ProjectItem key={project.name} project={project} />
      ))}
    </section>
  );
}

export default Projects;
