import React, { useState } from "react";
import { AddProjectButton } from "./AddProjectButton";
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

