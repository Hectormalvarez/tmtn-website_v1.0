import React, { FC } from "react";

import { ProjectInt } from "./ProjectCatalog";

interface ProjectPropsInt {
  project: ProjectInt;
}

const Project: FC<ProjectPropsInt> = ({ project }) => {
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
      <div className="h-16 bg-gray-200 flex justify-around align-middle md:h-20 md:my-auto md:mx-4">
        <img
          src="github.svg"
          alt="github svg icon"
          className="py-2 px-6 lg:hover:bg-white lg:hover:cursor-pointer"
        />
        <img
          src="figma.svg"
          alt="figma svg icon"
          className="py-2 px-6 lg:hover:bg-white lg:hover:cursor-pointer"
        />
        <img
          src="website.svg"
          alt="website svg icon"
          className="py-2 px-6 lg:hover:bg-white lg:hover:cursor-pointer"
        />
      </div>{" "}
    </article>
  );
};

export default Project;
