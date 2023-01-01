import React from "react";


interface ProjectLinkProps {
  link: {
    name: string;
    url: string;
  };
}

const ProjectLink: React.FC<ProjectLinkProps> = ({ link }) => {
  return (
    <a href={`${link.url}`} target="_blank" rel="noreferrer">
      <img
        src={`${link.name}.svg`}
        alt={`${link.name} svg icon`}
        className="py-2 px-6 h-auto w-28 lg:hover:bg-white lg:hover:cursor-pointer"
      />
    </a>
  );
};

export default ProjectLink;
