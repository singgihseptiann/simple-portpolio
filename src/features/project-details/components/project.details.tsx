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
    <div className="font-comic relative bg-yellow-100 p-6">
      {/* Comic-style border */}
      <div className="absolute inset-0 border-8 border-black"></div>

      {/* Header Image */}
      <div className="relative mb-8">
        <img
          src={img || "/placeholder.svg"}
          alt={title}
          className="h-64 w-full border-4 border-black object-cover shadow-[8px_8px_0_rgba(0,0,0,0.7)] md:h-96"
          loading="lazy"
        />
        <div className="absolute left-4 top-4 -rotate-6 transform bg-yellow-400 p-2 shadow-[4px_4px_0_rgba(0,0,0,0.7)]">
          <h1
            className="text-3xl font-bold text-black"
            style={{ textShadow: "2px 2px 0 white" }}
          >
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
            className="flex items-center border-2 border-black bg-red-600 px-4 py-2 text-white shadow-[4px_4px_0_black] transition-transform hover:scale-105"
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
            className="flex items-center border-2 border-black bg-blue-600 px-4 py-2 text-white shadow-[4px_4px_0_black] transition-transform hover:scale-105"
          >
            <FaGithub className="mr-2 h-4 w-4" />
            <span className="font-bold">GitHub</span>
          </a>
        )}
      </div>

      {/* Short Explanation Section */}
      <section className="mb-8 border-2 border-black bg-white p-4 shadow-[8px_8px_0_rgba(0,0,0,0.7)]">
        <h2
          className="mb-4 text-2xl font-bold text-red-600"
          style={{ textShadow: "1px 1px 0 black" }}
        >
          Short Explanation
        </h2>
        <p className="text-black">{shortExplanation}</p>
      </section>

      {/* Tech Stack Used Section */}
      <section className="mb-8">
        <h2
          className="mb-4 text-2xl font-bold text-blue-600"
          style={{ textShadow: "1px 1px 0 black" }}
        >
          Tech Stack Used
        </h2>
        <div className="flex flex-wrap gap-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex rotate-2 transform items-center border-2 border-black bg-white px-3 py-1 shadow-[4px_4px_0_rgba(0,0,0,0.7)]"
            >
              {tech.icon}
              <span className="ml-2 font-bold text-black">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Goals Section */}
      <section className="border-2 border-black bg-white p-4 shadow-[8px_8px_0_rgba(0,0,0,0.7)]">
        <h2
          className="mb-4 text-2xl font-bold text-green-600"
          style={{ textShadow: "1px 1px 0 black" }}
        >
          Goals
        </h2>
        <ul className="list-none pl-0 text-black">
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
      <div className="absolute right-2 top-2 flex h-16 w-16 rotate-12 transform items-center justify-center rounded-full border-4 border-black bg-yellow-400 shadow-[4px_4px_0_rgba(0,0,0,0.7)]">
        <span className="text-2xl font-bold text-black">POW!</span>
      </div>
      <div className="absolute bottom-2 left-2 flex h-20 w-20 -rotate-12 transform items-center justify-center rounded-full border-4 border-black bg-red-500 shadow-[4px_4px_0_rgba(0,0,0,0.7)]">
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
