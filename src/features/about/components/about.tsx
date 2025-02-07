import type React from "react";
import { SiReaddotcv } from "react-icons/si";
import gintoki from "@/assets/about/gintoki.png";

const About: React.FC = () => {
  return (
    <div className="relative border-4 border-black bg-gradient-to-br from-red-600 to-red-800 p-6 shadow-[6px_6px_0px_black] transition-all duration-300 ease-out hover:border-yellow-400 hover:shadow-[12px_12px_0px_black] dark:border-cyan-400 dark:from-gray-900 dark:to-black dark:shadow-[0_0_20px_rgba(6,182,212,0.5)] dark:hover:border-pink-500 dark:hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]">
      <div className="flex flex-col-reverse items-start md:flex-row md:items-center">
        <div className="flex-1 md:pr-4">
          <h2
            className="mb-4 text-2xl font-extrabold uppercase text-yellow-400 dark:text-cyan-400"
            style={{
              textShadow:
                "3px 3px 0px black, 6px 6px 0px black, 8px 8px 0px rgba(0,0,0,0.3)",
            }}
          >
            About
          </h2>
          <h1 className="text-2xl font-bold text-white dark:text-pink-500 md:text-4xl">
            Singgih Septian Nugraha
          </h1>
          <p className="mt-4 rounded-md border-2 border-black bg-white p-4 text-sm text-black shadow-[4px_4px_0px_black] dark:border-cyan-400 dark:bg-gray-800 dark:text-cyan-400 dark:shadow-[0_0_10px_rgba(6,182,212,0.5)]">
            Hallo guys! 👋🏽 I'm a frontend developer. I started learning web
            development in May 2023 while working on my final thesis for
            college. It was a challenging yet exciting journey, where I
            discovered my passion for creating interactive and user-friendly web
            applications. After that, I decided to join the frontend engineer
            bootcamp at Binar Academy. Through countless hours of coding and
            problem-solving, I have honed my skills and continue to grow in this
            dynamic field.
          </p>
          <a
            className="mt-4 inline-flex items-center rounded-md bg-black px-4 py-2 text-yellow-400 shadow-[4px_4px_0px_black] transition-all duration-200 hover:bg-yellow-400 hover:text-black hover:shadow-[6px_6px_0px_black] dark:bg-cyan-400 dark:text-black dark:shadow-[0_0_10px_rgba(6,182,212,0.5)] dark:hover:bg-pink-500 dark:hover:text-white dark:hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]"
            href="https://drive.google.com/drive/folders/1G0fH8sTx2dBFTaYXxSrEg4RHp-R30hpv?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiReaddotcv className="mr-2" />
            Resume
          </a>
        </div>
        <div className="mb-4 md:mb-0 md:w-1/3">
          <img
            src={gintoki || "/placeholder.svg"}
            alt="Descriptive Alt Text"
            className="h-auto w-full rounded-md border-4 border-black object-cover shadow-[4px_4px_0px_black] dark:border-cyan-400 dark:shadow-[0_0_10px_rgba(6,182,212,0.5)]"
          />
        </div>
      </div>

      {/* Cyberpunk burst effect */}
      <div className="absolute -right-4 -top-0 rotate-12 transform rounded-full bg-yellow-400 p-1 shadow-[3px_3px_0px_black] dark:bg-pink-500 dark:shadow-[0_0_15px_rgba(236,72,153,0.8)]">
        <span
          className="right-4 top-4 text-3xl font-bold text-black dark:text-white"
          style={{ textShadow: "2px 2px 0px yellow" }}
        >
          YOHOO!
        </span>
      </div>
    </div>
  );
};

export default About;
