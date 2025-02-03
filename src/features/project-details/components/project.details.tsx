import React from "react";
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
    <div>
      {/* Header Image */}
      <div className="mb-8">
        <img
          src={img}
          alt={title}
          className="h-64 w-full rounded-lg object-cover shadow-lg md:h-96"
          loading="lazy"
        />
      </div>

      {/* Title and Links */}
      <div className="mb-8 flex flex-col items-start justify-between md:flex-row md:items-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          {title}
        </h1>
        <div className="mt-4 flex gap-4 md:mt-0">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
            >
              <span>Live Site</span>
              <GoArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded bg-gray-800 px-4 py-2 text-white transition-colors hover:bg-gray-900"
            >
              <FaGithub className="mr-2 h-4 w-4" />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>

      {/* Short Explanation Section */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Short Explanation
        </h2>
        <p className="text-gray-600 dark:text-gray-400">{shortExplanation}</p>
      </section>

      {/* Tech Stack Used Section */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Tech Stack Used
        </h2>
        <div className="flex flex-wrap gap-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center rounded-full bg-gray-100 px-4 py-2 dark:bg-gray-800"
            >
              {tech.icon}
              <span className="ml-2 text-gray-700 dark:text-gray-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Goals Section */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Goals
        </h2>
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
          {goals.map((goal, index) => (
            <li key={index} className="mb-2">
              {goal}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProjectDetail;
