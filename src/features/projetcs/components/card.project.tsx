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
    <div className="relative flex h-full flex-col border-4 border-black bg-gradient-to-br from-red-600 to-red-800 p-4 shadow-[6px_6px_0px_black] transition-all duration-300 ease-out hover:border-yellow-400 hover:shadow-[12px_12px_0px_black] md:flex-row">
      {/* Image section */}
      <div className="h-48 p-4 md:h-auto md:w-1/2 md:p-4">
        <img
          className="h-full w-full rounded-md border-4 border-black object-cover"
          src={img}
          alt={title}
          loading="lazy"
        />
      </div>

      {/* Content section */}
      <div className="flex flex-1 flex-col p-4 md:w-1/2">
        {/* Header section */}
        <div className="flex flex-col">
          <h2
            className="text-2xl font-extrabold uppercase text-yellow-400"
            style={{
              textShadow:
                "3px 3px 0px black, 6px 6px 0px black, 8px 8px 0px rgba(0,0,0,0.3)",
            }}
          >
            {title}
          </h2>
          <p className="mt-2 rounded-md border-2 border-black bg-white p-2 text-sm text-black">
            {description}
          </p>
        </div>

        {/* Tech stack section */}
        <div className="mt-4">
          <div className="flex flex-wrap items-center gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="flex items-center rounded-full bg-black px-2 py-1 text-sm text-yellow-400"
                style={{ textShadow: "2px 2px 0px black" }}
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
              className="flex items-center text-yellow-400 transition-all duration-200 hover:text-white"
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
              className="flex items-center text-yellow-400 transition-all duration-200 hover:text-white"
            >
              <FaGithub className="h-4 w-4" />
            </a>
          )}
        </div>

        {/* Button untuk Navigasi ke Halaman Detail */}
        <Link
          to={`/projects/${id}`}
          className="mt-4 inline-block rounded-md bg-black px-6 py-2 text-xl font-extrabold uppercase tracking-wider text-yellow-400 shadow-[4px_4px_0px_black] transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-[6px_6px_0px_black] active:scale-95"
          style={{
            textShadow: "2px 2px 0px black, 4px 4px 0px black",
          }}
        >
          View Details
        </Link>
      </div>

      {/* Efek burst */}
      <div className="absolute -right-4 -top-4 h-12 w-12 rotate-45 transform rounded-full bg-yellow-400 shadow-[3px_3px_0px_black]"></div>
    </div>
  );
};

export default CardProject;
