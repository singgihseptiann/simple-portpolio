import React from "react";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

interface TechStackIcon {
  name?: string;
  icon: React.ReactNode;
}

interface CardProjectProps {
  title: string;
  description: string;
  img: string;
  techStack: TechStackIcon[];
  portfolioUrl?: string;
  githubUrl?: string;
}

const CardProject: React.FC<CardProjectProps> = ({
  title,
  description,
  techStack,
  img,
  portfolioUrl,
  githubUrl,
}) => {
  return (
    <div className="flex h-full flex-col rounded border border-zinc-100 bg-white transition-shadow duration-300 ease-in-out hover:shadow-lg dark:border-gray-800 dark:bg-zinc-900">
      {/* Header section with fixed height */}
      <div className="flex h-32 flex-col p-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          {title}
        </h2>
        <p className="mt-2 line-clamp-3 flex-grow text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>

      {/* Image section with fixed height */}
      <div className="h-48 p-4">
        <img
          className="h-full w-full rounded-md object-cover"
          src={img}
          alt={title}
          loading="lazy"
        />
      </div>

      {/* Tech stack section */}
      <div className="mt-auto p-4">
        <div className="flex flex-wrap items-center gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="flex items-center rounded-full py-1 text-sm"
            >
              {tech.icon}
              {tech.name && (
                <span className="ml-1 text-gray-600 dark:text-gray-400">
                  {tech.name}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Links section */}
      {(portfolioUrl || githubUrl) && (
        <div className="flex items-center justify-between p-4">
          {portfolioUrl && (
            <a
              href={portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 transition-colors hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <span className="mr-1">Portfolio</span>
              <GoArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-800 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-200"
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
