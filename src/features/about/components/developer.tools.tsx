import type React from "react";
import { FaGithub } from "react-icons/fa";

interface Tool {
  name: string;
  icon: React.ReactNode;
}

const tools: Tool[] = [
  { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },

  // Add more tools as needed
];

export default function DeveloperTools() {
  return (
    <div className="relative mt-5 border-4 border-black bg-gradient-to-br from-red-600 to-red-800 p-6 shadow-[6px_6px_0px_black] transition-all duration-300 ease-out hover:border-yellow-400 hover:shadow-[12px_12px_0px_black]">
      <h2
        className="mb-4 text-2xl font-extrabold uppercase text-yellow-400"
        style={{
          textShadow:
            "3px 3px 0px black, 6px 6px 0px black, 8px 8px 0px rgba(0,0,0,0.3)",
        }}
      >
        Developer Tools
      </h2>
      <div className="flex flex-wrap justify-start gap-4">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg border-2 border-black bg-white p-3 shadow-[4px_4px_0px_black] transition-all duration-200 hover:scale-105"
          >
            <div className="mb-2 text-4xl">{tool.icon}</div>
            <p className="text-sm font-semibold text-black">{tool.name}</p>
          </div>
        ))}
      </div>

      {/* Efek burst */}
      <div className="absolute -right-4 -top-4 h-12 w-12 rotate-45 transform rounded-full bg-yellow-400 shadow-[3px_3px_0px_black]"></div>
    </div>
  );
}
