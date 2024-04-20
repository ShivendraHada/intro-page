import React from "react";
import projects from "../../public/data/projects";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div>
      <h2 className="text-3xl mb-8 font-bold text-center">Projects</h2>
      {projects.map((project) => (
        <ProjectItem key={project.name} project={project} />
      ))}
      <div className="my-5 p-2">
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-[2px] my-8 bg-purple-200 border-0 rounded-full dark:bg-purple-700" />
          <span className="absolute px-3 font-medium text-purple-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-purple-900">
            More! Coming Soon...
          </span>
        </div>
      </div>
    </div>
  );
}

export default Projects;