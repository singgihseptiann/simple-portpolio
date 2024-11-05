import { FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { DiBootstrap } from "react-icons/di";
import { BiLogoJavascript } from "react-icons/bi";
import { ReactNode } from "react";

// Define the type for the tech stack icon
interface TechStackIcon {
  name?: string; // Optional tech name
  icon: ReactNode; // Icon can be any React component or JSX
}

// Define the type for the project
interface Project {
  title: string;
  description: string;
  img: string;
  techStack: TechStackIcon[];
  portfolioUrl?: string;
  githubUrl?: string;
}

// Define tech stack for each project
const techStack1: TechStackIcon[] = [
  { name: "React", icon: <FaReact className="text-blue-600" /> },
  {
    name: "JavaScript",
    icon: <BiLogoJavascript className="text-yellow-600" />,
  },
  { name: "Bootstrap", icon: <DiBootstrap className="text-purple-500" /> },
];

const techStack2: TechStackIcon[] = [
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
];

// Array of projects
export const projects: Project[] = [
  {
    title: "My Awesome Project",
    description:
      "A brief description of my awesome project, explaining its purpose and features.",
    img: "https://via.placeholder.com/300x200",
    techStack: techStack1,
    portfolioUrl: "https://kelompok1-platinum-customer-page.vercel.app/login",
    githubUrl:
      "https://github.com/singgihseptiann/kelompok1-platinum-customer-page",
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
    title: "Yet Another Project",
    description: "Details about yet another project with a different approach.",
    img: "https://via.placeholder.com/300x200",
    techStack: techStack2,
    portfolioUrl: "https://yetanotherwebsite.com",
    githubUrl: "https://github.com/yetanotherrepo",
  },
  {
    title: "Yet Another Project",
    description: "Details about yet another project with a different approach.",
    img: "https://via.placeholder.com/300x200",
    techStack: techStack2,
    portfolioUrl: "https://yetanotherwebsite.com",
    githubUrl: "https://github.com/yetanotherrepo",
  },

  // Add more projects as needed
];
