import Link from "next/link";
import React, { memo } from "react";

const ProjectItem = memo(({ project }: { project: ProjectProps }) => {
    return (
        <div className="my-10 p-2">
            {project.link ? (
                <Link href={project.link} target="_blank">
                    <h4 className="text-xl my-2 font-semibold text-purple-900">
                        #{" "}
                        <span className="hover:underline hover:underline-offset-4 hover:decoration-1">
                            {project.name}
                        </span>
                    </h4>
                </Link>
            ) : (
                <h4 className="text-xl my-2 font-semibold text-purple-900">
                    #{" "}
                    <span>
                        {project.name}
                    </span>
                </h4>
            )}
            <p className="text-md my-1 md:ml-5 text-justify">{project.description}</p>
            <h5 className="text-md my-2 ml-5">
                <span className="font-semibold">Tech Stack:</span> {project.techStack}
            </h5>
        </div>
    );
});

export default ProjectItem