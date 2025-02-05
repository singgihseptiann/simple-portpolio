import React from "react";

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
  <div className="mt-4 border-4 border-black bg-gradient-to-br from-red-600 to-red-800 p-4 shadow-[6px_6px_0px_black]">
    {/* Nama Bootcamp dan Tanggal */}
    <div className="flex flex-col justify-between md:flex-row">
      <p
        className="text-xl font-extrabold uppercase text-yellow-400"
        style={{
          textShadow: "2px 2px 0px black, 4px 4px 0px black",
        }}
      >
        {name}
      </p>
      <p className="text-lg font-semibold text-white">{`${startDate} - ${endDate}`}</p>
    </div>

    {/* Skills Learned */}
    <div className="mt-2">
      <p
        className="text-lg font-extrabold uppercase text-yellow-400"
        style={{
          textShadow: "2px 2px 0px black, 4px 4px 0px black",
        }}
      >
        Skills Learned:
      </p>
      <ul className="mt-2 list-inside list-disc text-white">
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
      className="mt-4 inline-block rounded-md bg-black px-6 py-2 text-lg font-extrabold uppercase tracking-wider text-yellow-400 shadow-[4px_4px_0px_black] transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-[6px_6px_0px_black] active:scale-95"
      style={{
        textShadow: "2px 2px 0px black, 4px 4px 0px black",
      }}
    >
      View Certificate
    </a>
  </div>
);

export default Bootcamp;
