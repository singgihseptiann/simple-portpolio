import React from "react";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

interface TechStackIcon {
  name: string;
  icon: React.ReactNode; // Icon can be any React component or JSX
}

interface CardProjectProps {
  title: string;
  description: string;
  techStack: TechStackIcon[];
  portfolioUrl?: string;
  githubUrl?: string;
}

const CardProject: React.FC<CardProjectProps> = ({
  title,
  description,
  techStack,
  portfolioUrl,
  githubUrl,
}) => {
  return (
    <div className="max-w-sm rounded border border-zinc-100 bg-white transition-shadow duration-300 ease-in-out hover:shadow-lg dark:border-gray-800 dark:bg-zinc-900">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          {title}
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      <div className="flex items-center justify-between p-4">
        <div className="flex space-x-2">
          {techStack.map((tech, index) => (
            <span key={index} className="flex items-center">
              {tech.icon}
              <span className="ml-1 text-gray-600 dark:text-gray-400">
                {tech.name}
              </span>
            </span>
          ))}
        </div>
      </div>
      {(portfolioUrl || githubUrl) && (
        <div className="flex justify-between p-4">
          {portfolioUrl && (
            <a
              href={portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:underline dark:text-blue-400"
            >
              <p className="mr-1">Portfolio</p>
              <GoArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-800 hover:underline dark:text-gray-300"
            >
              <FaGithub className="h-4 w-4" />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default CardProject;
