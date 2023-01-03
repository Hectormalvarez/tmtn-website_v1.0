import React from "react";

import { ProjectInt } from "./ProjectList";
import ProjectLink from "./ProjectLink";

interface ProjectProps {
  project: ProjectInt;
  children?: React.ReactNode;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
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
      {project.links ? (
        <div className="bg-gray-200 flex flex-row-reverse justify-around m-4">
          {project.links?.map((link) => {
            return <ProjectLink link={link} />;
          })}
        </div>
      ) : (
        <p className="p-4 lg:p-16 text-lg lg:text-xl uppercase">
          links coming soon!
        </p>
      )}
    </article>
  );
};

export default Project;
