import type React from "react";
import { FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiBootstrap,
} from "react-icons/si";

interface TechStackIcon {
  name: string;
  icon: React.ReactNode;
}

const techStack: TechStackIcon[] = [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
];

export default function TechStack() {
  return (
    <div className="relative mt-5 border-4 border-black bg-gradient-to-br from-red-600 to-red-800 p-6 shadow-[6px_6px_0px_black] transition-all duration-300 ease-out hover:border-yellow-400 hover:shadow-[12px_12px_0px_black]">
      <h2
        className="mb-4 text-2xl font-extrabold uppercase text-yellow-400"
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
            className="flex flex-col items-center rounded-lg border-2 border-black bg-white p-3 shadow-[4px_4px_0px_black] transition-all duration-200 hover:scale-105"
          >
            <div className="mb-2 text-4xl">{tech.icon}</div>
            <p className="text-sm font-semibold text-black">{tech.name}</p>
          </div>
        ))}
      </div>

      {/* Efek burst */}
      <div className="absolute -right-4 -top-4 h-12 w-12 rotate-45 transform rounded-full bg-yellow-400 shadow-[3px_3px_0px_black]"></div>
    </div>
  );
}
