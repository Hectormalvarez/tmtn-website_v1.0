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
      className="p-2 bg-gray-800 m-4 text-gray-100 md:flex md:align-middle md:justify-center"
    >
      <div className="p-4 flex-grow">
        <h3 className="text-xl md:text-3xl">{project.name}</h3>
        <p className="text-sm md:text-lg">{project.description}</p>
        <p className="pb-2 text-xs text-white">
          tech stack: {project.techstack}
        </p>
      </div>
      <div className="bg-gray-200 flex flex-row-reverse justify-around align-middle md:h-20 md:my-auto md:mx-4">
        {project.links?.map((link) => {
            return <ProjectLink link={link} />
        })}
      </div>
    </article>
  );
};

export default Project;
