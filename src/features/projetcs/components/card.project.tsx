import React from "react";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

interface TechStackIcon {
  name?: string;
  icon: React.ReactNode;
}

interface CardProjectProps {
  id: string; // Tambahkan ID sebagai parameter untuk navigasi
  title: string;
  description: string;
  img: string;
  techStack: TechStackIcon[];
  portfolioUrl?: string;
  githubUrl?: string;
}

const CardProject: React.FC<CardProjectProps> = ({
  id,
  title,
  description,
  techStack,
  img,
  portfolioUrl,
  githubUrl,
}) => {
  return (
    <div className="flex h-full flex-col rounded-lg border bg-white transition-all duration-500 ease-out hover:bg-gray-100 hover:shadow-lg dark:border-gray-800 dark:bg-transparent dark:hover:bg-gray-900 md:flex-row">
      {/* Image section */}
      <div className="h-48 p-4 md:h-auto md:w-1/2 md:p-4">
        <img
          className="h-full w-full rounded-md object-cover"
          src={img}
          alt={title}
          loading="lazy"
        />
      </div>

      {/* Content section */}
      <div className="flex flex-1 flex-col p-4 md:w-1/2">
        {/* Header section */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            {title}
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>

        {/* Tech stack section */}
        <div className="mt-4">
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
        <div className="mt-auto flex items-center justify-between pt-4">
          {portfolioUrl && (
            <a
              href={portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 transition-colors hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <span className="mr-1">Site</span>
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

        {/* Button untuk Navigasi ke Halaman Detail */}
        <Link
          to={`/projects/${id}`} // Navigasi ke detail project berdasarkan id
          className="mt-4 inline-block rounded-md bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CardProject;
