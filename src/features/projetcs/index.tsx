import { FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import CardProject from "./components/card.project";
import TitleSection from "@/components/title.section";
import { DiBootstrap } from "react-icons/di";
import { BiLogoJavascript } from "react-icons/bi";

// Define tech stack for each project
const techStack1 = [
  { name: "React", icon: <FaReact className="text-blue-600" /> },
  {
    name: "JavaScript",
    icon: <BiLogoJavascript className="text-yellow-600" />,
  },
  { name: "Bootstrap", icon: <DiBootstrap className="text-purple-500" /> },
];

const techStack2 = [
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
];

// Array of projects
const projects = [
  {
    title: "My Awesome Project",
    description:
      "A brief description of my awesome project, explaining its purpose and features.",
    img: "https://via.placeholder.com/300x200",
    techStack: techStack1,
    portfolioUrl: "https://yourwebsite.com",
    githubUrl: "https://github.com/andresgarrido",
  },
  {
    title: "Another Amazing Project",
    description:
      "Details about another amazing project with different tech stacks.",
    img: "https://via.placeholder.com/300x200",
    techStack: techStack2,
    portfolioUrl: "https://anotherwebsite.com",
    githubUrl: "https://github.com/anotherrepo",
  },
  {
    title: "Another Amazing Project",
    description:
      "Details about another amazing project with different tech stacks.",
    img: "https://via.placeholder.com/300x200",
    techStack: techStack2,
    portfolioUrl: "https://anotherwebsite.com",
    githubUrl: "https://github.com/anotherrepo",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mt-10">
      <TitleSection title="Projects" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {projects.map((project, index) => (
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
}
