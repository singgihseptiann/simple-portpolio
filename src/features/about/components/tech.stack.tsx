import { FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiBootstrap,
  SiReactquery,
} from "react-icons/si";

const techStack = [
  {
    name: "React",
    icon: (
      <FaReact className="text-gray-700 transition-transform duration-300 hover:animate-bounce hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" />
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <SiJavascript className="text-gray-700 transition-transform duration-300 hover:animate-bounce hover:text-yellow-500 dark:text-gray-300 dark:hover:text-yellow-400" />
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <SiTypescript className="text-gray-700 transition-transform duration-300 hover:animate-bounce hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500" />
    ),
  },
  {
    name: "Bootstrap",
    icon: (
      <SiBootstrap className="text-gray-700 transition-transform duration-300 hover:animate-bounce hover:text-purple-400 dark:text-gray-300 dark:hover:text-purple-300" />
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <SiTailwindcss className="text-gray-700 transition-transform duration-300 hover:animate-bounce hover:text-teal-400 dark:text-gray-300 dark:hover:text-teal-300" />
    ),
  },
  {
    name: "Tanstack Query",
    icon: (
      <SiReactquery className="text-gray-700 transition-transform duration-300 hover:animate-bounce hover:text-red-500 dark:text-gray-300 dark:hover:text-red-400" />
    ),
  },
];

export default function TechStack() {
  return (
    <div className="mt-5">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
        Tech Stack
      </h2>
      <div className="mt-5 flex flex-wrap justify-start gap-6">
        {techStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-2 text-4xl">{tech.icon}</div>
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
