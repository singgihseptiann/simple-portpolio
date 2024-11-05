import { FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import CardProject from "./components/card.project";
import TitleSection from "@/components/title.section";

const techStack = [
  { name: "React", icon: <FaReact className="text-blue-600" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
];

export default function ProjectsPage() {
  return (
    <div className="mt-10 flex flex-col items-start">
      <TitleSection title="Projects" />
      <CardProject
        title="My Awesome Project"
        description="A brief description of my awesome project, explaining its purpose and features."
        techStack={techStack}
        githubUrl="https://github.com/andresgarrido"
        portfolioUrl="https://yourwebsite.com"
      />
    </div>
  );
}
