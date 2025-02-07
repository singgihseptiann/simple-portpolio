import type React from "react";

interface BootcampProps {
  name: string;
  startDate: string;
  endDate: string;
  learnedSkills: string[];
  certificateLink: string;
}

const Bootcamp: React.FC<BootcampProps> = ({
  name,
  startDate,
  endDate,
  learnedSkills,
  certificateLink,
}) => (
  <div className="mt-4 border-4 border-black bg-gradient-to-br from-red-600 to-red-800 p-4 shadow-[6px_6px_0px_black] transition-all duration-300 ease-out hover:border-yellow-400 hover:shadow-[12px_12px_0px_black] dark:border-cyan-400 dark:from-gray-900 dark:to-black dark:shadow-[0_0_20px_rgba(6,182,212,0.5)] dark:hover:border-pink-500 dark:hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]">
    {/* Nama Bootcamp dan Tanggal */}
    <div className="flex flex-col justify-between md:flex-row">
      <p
        className="text-xl font-extrabold uppercase text-yellow-400 dark:text-cyan-400"
        style={{
          textShadow: "2px 2px 0px black, 4px 4px 0px black",
        }}
      >
        {name}
      </p>
      <p className="text-lg font-semibold text-white dark:text-pink-500">{`${startDate} - ${endDate}`}</p>
    </div>

    {/* Skills Learned */}
    <div className="mt-2">
      <p
        className="text-lg font-extrabold uppercase text-yellow-400 dark:text-cyan-400"
        style={{
          textShadow: "2px 2px 0px black, 4px 4px 0px black",
        }}
      >
        Skills Learned:
      </p>
      <ul className="mt-2 list-inside list-disc text-white dark:text-cyan-200">
        {learnedSkills.map((skill, index) => (
          <li key={index} className="text-lg">
            {skill}
          </li>
        ))}
      </ul>
    </div>

    {/* Certificate Link */}
    <a
      href={certificateLink}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-block rounded-md bg-black px-6 py-2 text-lg font-extrabold uppercase tracking-wider text-yellow-400 shadow-[4px_4px_0px_black] transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-[6px_6px_0px_black] active:scale-95 dark:bg-cyan-400 dark:text-black dark:shadow-[0_0_10px_rgba(6,182,212,0.5)] dark:hover:bg-pink-500 dark:hover:text-white dark:hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]"
      style={{
        textShadow: "2px 2px 0px black, 4px 4px 0px black",
      }}
    >
      View Certificate
    </a>
  </div>
);

export default Bootcamp;
