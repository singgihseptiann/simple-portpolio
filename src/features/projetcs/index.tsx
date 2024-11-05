import CardProject from "./components/card.project";
import TitleSection from "@/components/title.section";
import { projects } from "@/data/projects.data";

const ProjectsPage: React.FC = () => {
  return (
    <div className="mt-10">
      <TitleSection title="Projects" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 3).map((project, index) => (
          <CardProject
            key={index}
            title={project.title}
            description={project.description}
            img={project.img}
            techStack={project.techStack}
            githubUrl={project.githubUrl}
            portfolioUrl={project.portfolioUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
