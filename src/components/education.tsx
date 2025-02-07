import type React from "react";
import Bootcamp from "./bootcamp";

interface EducationProps {
  formalEducation: {
    university: string;
    gpa: number;
    program: string;
    startDateCollege: string;
    endDateCollege: string;
  };
  bootcamps: {
    name: string;
    startDate: string;
    endDate: string;
    learnedSkills: string[];
    certificateLink: string;
  }[];
}

const Education: React.FC<EducationProps> = ({
  formalEducation,
  bootcamps,
}) => {
  return (
    <section className="mt-8">
      {/* Judul Section */}
      <h2
        className="text-2xl font-extrabold uppercase text-yellow-400 dark:text-cyan-400"
        style={{
          textShadow: "3px 3px 0px black, 6px 6px 0px black",
        }}
      >
        Education
      </h2>

      {/* Formal Education */}
      <div className="mt-4 border-4 border-black bg-gradient-to-br from-red-600 to-red-800 p-4 shadow-[6px_6px_0px_black] transition-all duration-300 ease-out hover:border-yellow-400 hover:shadow-[12px_12px_0px_black] dark:border-cyan-400 dark:from-gray-900 dark:to-black dark:shadow-[0_0_20px_rgba(6,182,212,0.5)] dark:hover:border-pink-500 dark:hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]">
        <div className="flex flex-col justify-between gap-2 md:flex-row">
          <h3
            className="text-xl font-extrabold uppercase text-yellow-400 dark:text-cyan-400"
            style={{
              textShadow: "2px 2px 0px black, 4px 4px 0px black",
            }}
          >
            {formalEducation.university}
          </h3>
          <p className="text-lg font-semibold text-white dark:text-pink-500">
            {`${formalEducation.startDateCollege} - ${formalEducation.endDateCollege}`}
          </p>
        </div>
        <p className="mt-2 text-lg font-medium text-white dark:text-cyan-200">
          Program: {formalEducation.program}
        </p>
        <p className="text-lg font-medium text-white dark:text-cyan-200">
          GPA: {formalEducation.gpa}
        </p>
      </div>

      {/* Bootcamps */}
      <div className="mt-6">
        <h2
          className="text-2xl font-extrabold uppercase text-yellow-400 dark:text-cyan-400"
          style={{
            textShadow: "3px 3px 0px black, 6px 6px 0px black",
          }}
        >
          Bootcamps
        </h2>
        {bootcamps.map((bootcamp, index) => (
          <Bootcamp key={index} {...bootcamp} />
        ))}
      </div>
    </section>
  );
};

export default Education;
