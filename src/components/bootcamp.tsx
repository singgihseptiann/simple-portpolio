// src/components/Bootcamp.tsx
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
  <div className="mt-4 rounded p-4 shadow-sm">
    <div className="flex flex-col justify-between md:flex-row">
      {" "}
      <p className="text-lg font-semibold text-gray-600 dark:text-gray-200">
        {name}
      </p>
      <p className="text-gray-600 dark:text-gray-300">{`${startDate} - ${endDate}`}</p>
    </div>

    <div className="mt-2">
      <p className="font-medium text-gray-600 dark:text-gray-400">
        Skills Learned:
      </p>
      <ul className="list-inside list-disc text-gray-500">
        {learnedSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
    <a
      href={certificateLink}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 block text-blue-500 hover:underline"
    >
      View Certificate
    </a>
  </div>
);

export default Bootcamp;
