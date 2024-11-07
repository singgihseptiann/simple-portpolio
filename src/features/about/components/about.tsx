import TitleSection from "@/components/title.section";
import gintoki from "@/assets/about/gintoki.png";
import { SiReaddotcv } from "react-icons/si";

const About: React.FC = () => {
  return (
    <div className="flex flex-col-reverse items-start md:flex-row md:items-center">
      <div className="flex-1 md:pr-4">
        <TitleSection title="About" />
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
          Singgih Septian Nugraha
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Hallo guys! 👋🏽 I'm a frontend developer. I started learning web
          development in May 2023 while working on my final thesis for college.
          It was a challenging yet exciting journey, where I discovered my
          passion for creating interactive and user-friendly web applications.
          After that, I decided to join the frontend engineer bootcamp at Binar
          Academy. Through countless hours of coding and problem-solving, I have
          honed my skills and continue to grow in this dynamic field.
        </p>
        <a
          className="mt-2 inline-flex text-gray-600 underline hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          href="https://drive.google.com/drive/folders/1G0fH8sTx2dBFTaYXxSrEg4RHp-R30hpv?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-2">
            <SiReaddotcv />
            Resume
          </div>
        </a>
      </div>
      <img
        src={gintoki}
        alt="Descriptive Alt Text"
        className="mb-4 h-auto w-full md:mb-0 md:w-1/3"
      />
    </div>
  );
};

export default About;
