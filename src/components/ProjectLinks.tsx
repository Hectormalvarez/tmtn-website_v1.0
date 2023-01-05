import AddLink from "./AddLink";
import ProjectLink from "./ProjectLink";
import { ProjectInt } from "./ProjectList";

export const ProjectLinks: React.FC<{
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
