import React from "react";
import { useLocation } from "react-router-dom";
import CardProject from "./components/card.project";
import TitleSection from "@/components/title.section";
import { projects } from "@/data/projects.data";

const ProjectsPage: React.FC = () => {
  const location = useLocation();

  // Check if the current route is "/projects"
  const isProjectsRoute = location.pathname === "/projects";

  return (
    <div className="mt-10">
      <TitleSection title="Projects" />
      {isProjectsRoute && (
        <p className="mb-5 mt-6 rotate-2 bg-yellow-400 px-2 font-mono text-xl text-black shadow-[3px_3px_0px_black] dark:text-zinc-300 xl:mb-7">
          <span className="text-base font-bold text-black">
            {" "}
            Showcase of my works on web development.
          </span>
        </p>
      )}
      <div className="md:10 grid grid-cols-1 gap-8">
        {(isProjectsRoute ? projects : projects.slice(0, 3)).map(
          (project, index) => (
            <CardProject
              key={index}
              id={project.id}
              title={project.title}
              description={project.description}
              img={project.img}
              techStack={project.techStack}
              githubUrl={project.githubUrl}
              portfolioUrl={project.portfolioUrl}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
