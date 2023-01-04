import React, { useState } from "react";
import Project from "./Project";

export interface ProjectInt {
  name: string;
  description: string;
  techstack: string;
  links?: {
    name: string;
    url: string;
  }[] | undefined;
}

const projects: ProjectInt[] = [
  {
    name: "taylormadetech.net",
    description: "company website",
    techstack: "javascript (react), hosted on AWS with Amplify",
    links: [
      {
        name: "github",
        url: "https://github.com",
      },
      {
        name: "website",
        url: "https://www.taylormadetech.net",
      },
    ],
  },
  {
    name: "secrets.taylormadetech.net",
    description: "secret sharing website",
    techstack: "javascript (react), hosted on AWS with Amplify",
    links: [
      {
        name: "github",
        url: "https://github.com",
      },
      {
        name: "figma",
        url: "figma.com",
      },
      {
        name: "website",
        url: "https://secrets.taylormadetech.net",
      },
    ],
  },
  {
    name: "mgdrywall-usa.com",
    description: "MG Drywall U.S.A company website",
    techstack: "javascript (next.js), hosted on AWS with Amplify",
  },
  {
    name: "discord-bot",
    description: "discord bot project",
    techstack: "node.js",
    links: [
      {
        name: "github",
        url: "https://github.com",
      },
    ],
  },
  {
    name: "myRides",
    description: "an app to book your favorite Uber or Lyft driver",
    techstack: "javascript (react) front end, python (django) backend",
    links: [
      {
        name: "github",
        url: "https://github.com",
      },
    ],
  },
];

const ProjectCatalog = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <section>
      <div className="text-2xl font-mplus font-bold flex justify-between mx-4">
        <h2 className="p-2">Project Catalog</h2>
        <AddProjectButton loggedIn={loggedIn} />
      </div>
      {projects.map((project) => {
        return <Project project={project} loggedIn={loggedIn} />;
      })}
    </section>
  );
};

export default ProjectCatalog;

const AddProjectButton = ({ loggedIn }: any) => {
  if (!loggedIn) return <></>;
  return (
    <button className="flex border-2 p-2 border-gray-900 hover:bg-gray-900 hover:text-white hover:fill-white">
      <svg
        className="w-8 p-1"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M576.477 448.471l349.649.621c35.346.041 63.967 28.728 63.926 64.074s-28.728 63.967-64.074 63.926l-349.429-.621.194 349.647c.013 35.346-28.63 64.01-63.977 64.023s-64.01-28.63-64.023-63.977l-.195-349.921-349.622-.621C63.58 575.581 34.959 546.894 35 511.548s28.728-63.967 64.074-63.926l349.402.621-.194-349.361c-.013-35.346 28.63-64.01 63.977-64.023s64.01 28.63 64.023 63.977l.194 349.635z" />
      </svg>
      Add Project
    </button>
  );
};
