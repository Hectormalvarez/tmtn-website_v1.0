import React from "react";

import { ProjectInt } from "./ProjectList";
import { ProjectLinks } from "./ProjectLinks";

interface ProjectProps {
  project: ProjectInt;
  loggedIn: boolean;
  children?: React.ReactNode;
}

const Project: React.FC<ProjectProps> = ({ project, loggedIn }) => {
  return (
    <article
      key={project.name}
      className="p-2 bg-gray-800 m-4 text-gray-100 flex flex-col lg:flex-row lg:align-middle lg:justify-center lg:h-48"
    >
      <div className="p-4 lg:flex-grow flex flex-col">
        <h3 className="text-xl lg:text-3xl">{project.name}</h3>
        <p className="text-sm lg:text-lg flex-grow">{project.description}</p>
        <p className="pb-2 text-xs text-white">
          tech stack: {project.techstack}
        </p>
      </div>
      <ProjectLinks project={project} loggedIn={loggedIn} />
    </article>
  );
};

export default Project;
