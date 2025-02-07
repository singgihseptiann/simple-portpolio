import type React from "react";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

interface TechStackIcon {
  name: string;
  icon: React.ReactNode;
}

interface ProjectDetailProps {
  title: string;
  img: string;
  shortExplanation: string;
  techStack: TechStackIcon[];
  goals: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  title,
  img,
  shortExplanation,
  techStack,
  goals,
  githubUrl,
  liveUrl,
}) => {
  return (
    <div className="font-comic relative bg-yellow-100 p-6 dark:bg-gray-900">
      {/* Comic-style border */}
      <div className="absolute inset-0 border-8 border-black dark:border-cyan-400"></div>

      {/* Header Image */}
      <div className="relative mb-8">
        <img
          src={img || "/placeholder.svg"}
          alt={title}
          className="h-64 w-full border-4 border-black object-cover shadow-[8px_8px_0_rgba(0,0,0,0.7)] dark:border-cyan-400 dark:shadow-[0_0_20px_rgba(6,182,212,0.5)] md:h-96"
          loading="lazy"
        />
        <div className="absolute left-4 top-4 -rotate-6 transform bg-yellow-400 p-2 shadow-[4px_4px_0_rgba(0,0,0,0.7)] dark:bg-pink-500 dark:shadow-[0_0_15px_rgba(236,72,153,0.8)]">
          <h1 className="relative text-3xl font-bold text-black dark:text-white">
            <span
              className="absolute inset-0 bg-clip-text text-black text-transparent opacity-30 blur-sm drop-shadow-md dark:text-black"
              aria-hidden="true"
            >
              {title}
            </span>
            {title}
          </h1>
        </div>
      </div>

      {/* Links */}
      <div className="mb-8 flex justify-center gap-4">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border-2 border-black bg-red-600 px-4 py-2 text-white shadow-[4px_4px_0_black] transition-transform hover:scale-105 dark:border-cyan-400 dark:bg-cyan-600 dark:shadow-[0_0_10px_rgba(6,182,212,0.5)] dark:hover:bg-pink-500 dark:hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]"
          >
            <span className="font-bold">Live Site</span>
            <GoArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border-2 border-black bg-blue-600 px-4 py-2 text-white shadow-[4px_4px_0_black] transition-transform hover:scale-105 dark:border-cyan-400 dark:bg-gray-800 dark:shadow-[0_0_10px_rgba(6,182,212,0.5)] dark:hover:bg-pink-500 dark:hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]"
          >
            <FaGithub className="mr-2 h-4 w-4" />
            <span className="font-bold">GitHub</span>
          </a>
        )}
      </div>

      {/* Short Explanation Section */}
      <section className="mb-8 border-2 border-black bg-white p-4 shadow-[8px_8px_0_rgba(0,0,0,0.7)] dark:border-cyan-400 dark:bg-gray-800 dark:shadow-[0_0_20px_rgba(6,182,212,0.5)]">
        <h2
          className="mb-4 text-2xl font-bold text-red-600 dark:text-cyan-400"
          style={{ textShadow: "1px 1px 0 black" }}
        >
          Short Explanation
        </h2>
        <p className="text-black dark:text-cyan-200">{shortExplanation}</p>
      </section>

      {/* Tech Stack Used Section */}
      <section className="mb-8">
        <h2
          className="mb-4 text-2xl font-bold text-blue-600 dark:text-pink-500"
          style={{ textShadow: "1px 1px 0 black" }}
        >
          Tech Stack Used
        </h2>
        <div className="flex flex-wrap gap-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex rotate-2 transform items-center border-2 border-black bg-white px-3 py-1 shadow-[4px_4px_0_rgba(0,0,0,0.7)] dark:border-cyan-400 dark:bg-gray-800 dark:shadow-[0_0_10px_rgba(6,182,212,0.5)]"
            >
              {tech.icon}
              <span className="ml-2 font-bold text-black dark:text-cyan-400">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Goals Section */}
      <section className="border-2 border-black bg-white p-4 shadow-[8px_8px_0_rgba(0,0,0,0.7)] dark:border-cyan-400 dark:bg-gray-800 dark:shadow-[0_0_20px_rgba(6,182,212,0.5)]">
        <h2
          className="mb-4 text-2xl font-bold text-green-600 dark:text-pink-500"
          style={{ textShadow: "1px 1px 0 black" }}
        >
          Goals
        </h2>
        <ul className="list-none pl-0 text-black dark:text-cyan-200">
          {goals.map((goal, index) => (
            <li key={index} className="mb-2 flex items-start">
              <span className="mr-2 text-2xl" role="img" aria-label="goal">
                🎯
              </span>
              {goal}
            </li>
          ))}
        </ul>
      </section>

      {/* Comic-style decorations */}
      <div className="absolute right-2 top-2 flex h-16 w-16 rotate-12 transform items-center justify-center rounded-full border-4 border-black bg-yellow-400 shadow-[4px_4px_0_rgba(0,0,0,0.7)] dark:border-cyan-400 dark:bg-pink-500 dark:shadow-[0_0_15px_rgba(236,72,153,0.8)]">
        <span className="text-2xl font-bold text-black dark:text-white">
          POW!
        </span>
      </div>
      <div className="absolute bottom-2 left-2 flex h-20 w-20 -rotate-12 transform items-center justify-center rounded-full border-4 border-black bg-red-500 shadow-[4px_4px_0_rgba(0,0,0,0.7)] dark:border-cyan-400 dark:bg-cyan-600 dark:shadow-[0_0_15px_rgba(6,182,212,0.8)]">
        <span
          className="text-2xl font-bold text-white"
          style={{ textShadow: "2px 2px 0 black" }}
        >
          BOOM!
        </span>
      </div>
    </div>
  );
};

export default ProjectDetail;
