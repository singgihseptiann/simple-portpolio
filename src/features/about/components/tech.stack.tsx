import type React from "react";
import { FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiBootstrap,
  SiReactquery,
} from "react-icons/si";

interface TechStackIcon {
  name: string;
  icon: React.ReactNode;
}

const techStack: TechStackIcon[] = [
  {
    name: "React",
    icon: <FaReact className="text-blue-500 dark:text-cyan-400" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-500 dark:text-yellow-300" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600 dark:text-blue-400" />,
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap className="text-purple-400 dark:text-purple-300" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400 dark:text-teal-300" />,
  },
  {
    name: "TanStack Query",
    icon: <SiReactquery className="text-red-500 dark:text-red-400" />,
  },
];

export default function TechStack() {
  return (
    <div className="relative mt-5 border-4 border-black bg-gradient-to-br from-red-600 to-red-800 p-6 shadow-[6px_6px_0px_black] transition-all duration-300 ease-out hover:border-yellow-400 hover:shadow-[12px_12px_0px_black] dark:border-cyan-400 dark:from-gray-900 dark:to-black dark:shadow-[0_0_20px_rgba(6,182,212,0.5)] dark:hover:border-pink-500 dark:hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]">
      <h2
        className="mb-4 text-2xl font-extrabold uppercase text-yellow-400 dark:text-cyan-400"
        style={{
          textShadow:
            "3px 3px 0px black, 6px 6px 0px black, 8px 8px 0px rgba(0,0,0,0.3)",
        }}
      >
        Tech Stack
      </h2>
      <div className="flex flex-wrap justify-start gap-4">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg border-2 border-black bg-white p-3 shadow-[4px_4px_0px_black] transition-all duration-200 hover:scale-105 dark:border-cyan-400 dark:bg-gray-800 dark:shadow-[0_0_10px_rgba(6,182,212,0.5)] dark:hover:border-pink-500 dark:hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]"
          >
            <div className="mb-2 text-4xl">{tech.icon}</div>
            <p className="text-sm font-semibold text-black dark:text-cyan-400">
              {tech.name}
            </p>
          </div>
        ))}
      </div>

      {/* Cyberpunk burst effect */}
      <div className="absolute -right-4 -top-4 h-12 w-12 rotate-45 transform rounded-full bg-yellow-400 shadow-[3px_3px_0px_black] dark:bg-pink-500 dark:shadow-[0_0_15px_rgba(236,72,153,0.8)]"></div>
    </div>
  );
}
