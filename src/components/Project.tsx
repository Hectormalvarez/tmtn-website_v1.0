import React from "react";

import { ProjectInt } from "./ProjectList";
import ProjectLink from "./ProjectLink";

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

const AddLink: React.FC<{loggedIn: boolean}> = ({loggedIn}) => {
  if (!loggedIn) return <></>;
  return (
    <button className="w-32 my-auto text-black py-2 lg:hover:bg-white lg:hover:cursor-pointer ">
      <svg
        className="w-8 lg:w-16 p-1 mx-auto"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M576.477 448.471l349.649.621c35.346.041 63.967 28.728 63.926 64.074s-28.728 63.967-64.074 63.926l-349.429-.621.194 349.647c.013 35.346-28.63 64.01-63.977 64.023s-64.01-28.63-64.023-63.977l-.195-349.921-349.622-.621C63.58 575.581 34.959 546.894 35 511.548s28.728-63.967 64.074-63.926l349.402.621-.194-349.361c-.013-35.346 28.63-64.01 63.977-64.023s64.01 28.63 64.023 63.977l.194 349.635z" />
      </svg>
      Add Link
    </button>
  );
};


const ProjectLinks: React.FC<{
  project: ProjectInt;
  loggedIn: boolean;
}> = ({ project, loggedIn }: any) => {
  if (loggedIn)
    return (
      <div className="bg-gray-200 flex flex-row-reverse justify-around m-4">
        <figure className="w-32 my-auto py-2 lg:hover:bg-white lg:hover:cursor-pointer ">
          <AddLink loggedIn={loggedIn} />
        </figure>
        {project.links?.map((link: any) => {
          return <ProjectLink link={link} />;
        })}
      </div>
    );

  return (
    <div className="bg-gray-200 flex flex-row-reverse justify-around m-4">
      {project.links ? (
        project.links?.map((link: any) => {
          return <ProjectLink link={link} />;
        })
      ) : (
        <p className="p-4 lg:p-16 text-lg lg:text-2xl uppercase text-black font-bold">
          links coming soon!
        </p>
      )}
    </div>
  );
};
