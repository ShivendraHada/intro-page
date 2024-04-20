import Link from "next/link";
import React, { memo } from "react";

const ProjectItem = memo(({ project }: { project: ProjectProps }) => {
  return (
    <div className="my-2 p-2">
      {project.link ? (
        <Link href={project.link} target="_blank">
          <h4 className="text-lg my-2 font-semibold primary-text-color">
            #{" "}
            <span className="hover:underline hover:underline-offset-4 hover:decoration-1">
              {project.name}
            </span>
          </h4>
        </Link>
      ) : (
        <h4 className="text-lg my-2 font-semibold primary-text-color">
          # <span>{project.name}</span>
        </h4>
      )}
      <p className="text-sm my-1 md:ml-5 text-justify">{project.description}</p>
      <h5 className="text-sm my-2 md:ml-5">
        <span className="font-semibold">Tech Stack:</span> {project.techStack}
      </h5>
    </div>
  );
});

ProjectItem.displayName = "Project";

export default ProjectItem;
