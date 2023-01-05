import React from "react";

interface ProjectLinkProps {
  link: {
    name: string;
    url: string;
  };
}

const ProjectLink: React.FC<ProjectLinkProps> = ({ link }) => {
  return (
    <figure className="w-32 my-auto py-2 lg:hover:bg-white lg:hover:cursor-pointer ">
      <a href={`${link.url}`} target="_blank" rel="noreferrer">
        <img
          src={`${link.name}.svg`}
          alt={`${link.name} svg icon`}
          className="w-8 lg:w-16 mx-auto"
        />
        <figcaption className="capitalize text-center text-gray-800 font-bold">
          {link.name}
        </figcaption>
      </a>
    </figure>
  );
};

export default ProjectLink;
