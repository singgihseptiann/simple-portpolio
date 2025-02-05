import type React from "react";
import { SiReaddotcv } from "react-icons/si";
import gintoki from "@/assets/about/gintoki.png";

const About: React.FC = () => {
  return (
    <div className="relative border-4 border-black bg-gradient-to-br from-red-600 to-red-800 p-6 shadow-[6px_6px_0px_black] transition-all duration-300 ease-out hover:border-yellow-400 hover:shadow-[12px_12px_0px_black]">
      <div className="flex flex-col-reverse items-start md:flex-row md:items-center">
        <div className="flex-1 md:pr-4">
          <h2
            className="mb-4 text-2xl font-extrabold uppercase text-yellow-400"
            style={{
              textShadow:
                "3px 3px 0px black, 6px 6px 0px black, 8px 8px 0px rgba(0,0,0,0.3)",
            }}
          >
            About
          </h2>
          <h1 className="text-2xl font-bold text-white md:text-4xl">
            Singgih Septian Nugraha
          </h1>
          <p className="mt-4 rounded-md border-2 border-black bg-white p-4 text-sm text-black shadow-[4px_4px_0px_black]">
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
            className="mt-4 inline-flex items-center rounded-md bg-black px-4 py-2 text-yellow-400 shadow-[4px_4px_0px_black] transition-all duration-200 hover:bg-yellow-400 hover:text-black hover:shadow-[6px_6px_0px_black]"
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
            className="h-auto w-full rounded-md border-4 border-black object-cover shadow-[4px_4px_0px_black]"
          />
        </div>
      </div>

      {/* Efek burst */}
      <div className="absolute -right-4 -top-4 h-12 w-12 rotate-45 transform rounded-full bg-yellow-400 shadow-[3px_3px_0px_black]"></div>
    </div>
  );
};

export default About;
