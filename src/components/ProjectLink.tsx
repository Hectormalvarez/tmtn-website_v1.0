import React from "react";

const ProjectLink = ({name}: any) => {
  return (
    <img
      src={`${name}.svg`}
      alt={`${name} svg icon`}
      className="py-2 px-6 lg:hover:bg-white lg:hover:cursor-pointer"
    />
  );
};

export default ProjectLink;
