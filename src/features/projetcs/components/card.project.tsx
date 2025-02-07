import type React from "react";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

interface TechStackIcon {
  name?: string;
  icon: React.ReactNode;
}

interface CardProjectProps {
  id: string;
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
    <div className="relative flex h-full flex-col overflow-hidden rounded-lg border-8 border-black bg-gradient-to-br from-red-600 to-red-800 p-4 shadow-[12px_12px_0px_black] transition-all duration-300 ease-out hover:shadow-[20px_20px_0px_black] dark:border-cyan-400 dark:from-gray-900 dark:to-black dark:shadow-[0_0_20px_rgba(6,182,212,0.5)] dark:hover:border-pink-500 dark:hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] md:flex-row">
      {/* Image section */}
      <div className="relative h-48 md:h-auto md:w-1/2 md:p-4">
        <img
          className="h-full w-full rounded-md border-4 border-black object-cover shadow-[8px_8px_0px_rgba(0,0,0,0.7)] dark:border-cyan-400 dark:shadow-[0_0_10px_rgba(6,182,212,0.5)]"
          src={img || "/placeholder.svg"}
          alt={title}
          loading="lazy"
        />
        <div className="absolute -left-2 -top-2 rotate-12 transform bg-yellow-400 p-2 text-xl font-bold text-black shadow-[4px_4px_0px_black] dark:bg-pink-500 dark:text-white dark:shadow-[0_0_10px_rgba(236,72,153,0.8)]">
          NEW!
        </div>
      </div>

      {/* Content section */}
      <div className="flex flex-1 flex-col p-4 md:w-1/2">
        {/* Header section */}
        <div className="flex flex-col">
          <h2
            className="text-3xl font-extrabold uppercase text-yellow-400 dark:text-cyan-400"
            style={{
              textShadow:
                "3px 3px 0px black, 6px 6px 0px black, 8px 8px 0px rgba(0,0,0,0.3)",
            }}
          >
            {title}
          </h2>
          <p className="mt-2 rounded-md border-4 border-black bg-white p-3 text-sm font-bold text-black shadow-[6px_6px_0px_rgba(0,0,0,0.7)] dark:border-cyan-400 dark:bg-gray-800 dark:text-cyan-200 dark:shadow-[0_0_10px_rgba(6,182,212,0.5)]">
            {description}
          </p>
        </div>

        {/* Tech stack section */}
        <div className="mt-4">
          <div className="flex flex-wrap items-center gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="flex items-center rounded-full border-2 border-black bg-yellow-400 px-3 py-1 text-sm font-bold text-black shadow-[4px_4px_0px_rgba(0,0,0,0.7)] dark:border-cyan-400 dark:bg-gray-800 dark:text-cyan-400 dark:shadow-[0_0_10px_rgba(6,182,212,0.5)]"
              >
                {tech.icon}
                {tech.name && <span className="ml-1">{tech.name}</span>}
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
              className="flex items-center rounded-md bg-yellow-400 px-4 py-2 font-bold text-black shadow-[4px_4px_0px_black] transition-all duration-200 hover:bg-yellow-500 dark:bg-cyan-400 dark:text-gray-900 dark:shadow-[0_0_10px_rgba(6,182,212,0.5)] dark:hover:bg-pink-500 dark:hover:text-white dark:hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]"
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
              className="flex items-center rounded-md bg-black px-4 py-2 font-bold text-yellow-400 shadow-[4px_4px_0px_black] transition-all duration-200 hover:bg-gray-800 dark:bg-gray-800 dark:text-cyan-400 dark:shadow-[0_0_10px_rgba(6,182,212,0.5)] dark:hover:bg-pink-500 dark:hover:text-white dark:hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]"
            >
              <FaGithub className="mr-2 h-4 w-4" />
              <span>GitHub</span>
            </a>
          )}
        </div>

        {/* Button untuk Navigasi ke Halaman Detail */}
        <Link
          to={`/projects/${id}`}
          className="mt-4 inline-block rounded-md bg-white px-6 py-3 text-xl font-extrabold uppercase tracking-wider text-black shadow-[6px_6px_0px_black] transition-all duration-200 ease-in-out hover:scale-105 hover:bg-yellow-500 hover:shadow-[8px_8px_0px_black] active:scale-95 dark:bg-cyan-400 dark:text-gray-900 dark:shadow-[0_0_10px_rgba(6,182,212,0.5)] dark:hover:bg-pink-500 dark:hover:text-white dark:hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]"
          style={{
            textShadow: "2px 2px 0px rgba(0,0,0,0.3)",
          }}
        >
          View Details
        </Link>
      </div>

      {/* Comic-style decorations */}
      <div className="absolute -right-8 -top-8 h-24 w-24 rotate-12 transform rounded-full bg-yellow-400 shadow-[4px_4px_0px_black] dark:bg-pink-500 dark:shadow-[0_0_15px_rgba(236,72,153,0.8)]">
        <span className="absolute bottom-4 left-4 text-2xl font-bold text-black dark:text-white">
          POW!
        </span>
      </div>
      <div className="absolute -bottom-4 -left-4 h-16 w-16 -rotate-12 transform rounded-full bg-black shadow-[4px_4px_0px_black] dark:bg-cyan-400 dark:shadow-[0_0_15px_rgba(6,182,212,0.8)]">
        <span className="absolute right-2 top-2 text-xl font-bold text-yellow-400 dark:text-gray-900">
          ZOOM!
        </span>
      </div>
    </div>
  );
};

export default CardProject;
