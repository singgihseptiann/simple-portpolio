import { FaReact } from "react-icons/fa";
import { DiBootstrap, DiCodeigniter } from "react-icons/di";
import { BiLogoJavascript } from "react-icons/bi";
import { ReactNode } from "react";
import Bcr from "@/assets/projects/coverrr.png";
import Ssayomart from "@/assets/projects/Ssayomart.png";
import SeekYourJob from "@/assets/projects/seekyourjob.png";
import {
  SiOpenai,
  SiReactquery,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

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
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
];

const techStack2: TechStackIcon[] = [
  { name: "Bootstrap", icon: <DiBootstrap className="text-purple-500" /> },
  { name: "CodeIgniter", icon: <DiCodeigniter className="text-red-500" /> },
  {
    name: "JavaScript",
    icon: <BiLogoJavascript className="text-yellow-600" />,
  },
];

const techStack3: TechStackIcon[] = [
  { name: "React", icon: <FaReact className="text-blue-600" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },

  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-500" /> },

  {
    name: "Tanstack Query",
    icon: <SiReactquery className="text-red-600" />,
  },
  {
    name: "Shadcn UI",
    icon: <SiShadcnui className="text-gray-500" />,
  },
  {
    name: "OpenAI",
    icon: <SiOpenai className="text-gray-500" />,
  },
];

// Array of projects
export const projects: Project[] = [
  {
    title: "Seek Your Job",
    description:
      "Job website with integrated OpenAI for matching resumes with job vacancies. This website is a final assignment from my Fullstack MERN Bootcamp (DevScale), developed by my team.",
    img: SeekYourJob,
    techStack: techStack3,
    portfolioUrl: "https://seekyourjob.my.id/",
    githubUrl: "https://github.com/anotherrepo",
  },
  {
    title: "Binar Car Rental",
    description:
      "A brief description of my awesome project, explaining its purpose and features.",
    img: Bcr,
    techStack: techStack1,
    portfolioUrl: "https://kelompok1-platinum-customer-page.vercel.app/login",
    githubUrl:
      "https://github.com/singgihseptiann/kelompok1-platinum-customer-page",
  },

  {
    title: "Ssayomart",
    description: "Details about yet another project with a different approach.",
    img: Ssayomart,
    techStack: techStack2,
    portfolioUrl: "https://apps.ssayomart.com/",
    githubUrl: "https://github.com/yetanotherrepo",
  },
  {
    title: "Yet Another Project",
    description: "Details about yet another project with a different approach.",
    img: "https://via.placeholder.com/300x200",
    techStack: techStack2,
    portfolioUrl: "https://apps.ssayomart.com/",
    githubUrl: "https://github.com/yetanotherrepo",
  },

  // Add more projects as needed
];
