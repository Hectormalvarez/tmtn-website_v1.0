import React from "react";
import Project from "./Project";

export interface ProjectInt {
    name: string
    description: string
    techstack: string
    links?: {
        name: string
        url: string
    }[]
}


const projects: ProjectInt[] = [
  {
    name: "taylormadetech.net",
    description: "company website",
    techstack: "javascript (react), hosted on AWS with Amplify",
  },
  {
    name: "secrets.taylormadetech.net",
    description: "secret sharing website",
    techstack: "javascript (react), hosted on AWS with Amplify",
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
  },
  {
    name: "myRides",
    description: "an app to book your favorite Uber or Lyft driver",
    techstack: "javascript (react) front end, python (django) backend",
    links: [
      {
        name: "github",
        url: "github.com",
      },
      {
        name: "figma",
        url: "figma.com",
      },
      {
        name: "website",
        url: "website.com",
      },
    ],
  },
];

const ProjectCatalog = () => {
  return (
    <section>
      <h2 className="mx-4 text-2xl font-mplus font-bold">Project Catalog</h2>
      {projects.map((project) => {
        return <Project project={project} />;
      })}
    </section>
  );
};

export default ProjectCatalog;
