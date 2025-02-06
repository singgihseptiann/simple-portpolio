import type React from "react";
import type { ReactNode } from "react";
import TitleSection from "@/components/title.section";

interface Experience {
  company: string;
  title: string;
  date: string;
  icon?: ReactNode;
  location?: string;
}

interface WorkExperienceProps {
  experiences: Experience[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ experiences }) => {
  return (
    <section className="relative mt-10">
      <div className="rounded-lg border-8 border-black bg-gradient-to-br from-red-600 to-red-800 p-4 shadow-[12px_12px_0px_black] sm:p-6">
        <TitleSection title="Work Experience" />
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="relative rounded-lg border-4 border-black bg-white p-4 shadow-[6px_6px_0px_black] transition-all duration-300 hover:shadow-[10px_10px_0px_black]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="mb-4 flex items-center sm:mb-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-black bg-yellow-400 p-2 shadow-[4px_4px_0px_black] sm:h-16 sm:w-16">
                    {experience.icon}
                  </div>
                  <div className="ml-4 flex-grow">
                    <h3
                      className="text-base font-extrabold text-black sm:text-lg md:text-xl"
                      style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.1)" }}
                    >
                      {experience.company}
                    </h3>
                    <p className="mt-1 text-sm font-bold text-red-600 sm:text-base">
                      {experience.title}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between sm:ml-auto sm:flex-col sm:items-end">
                  <p className="text-sm font-bold text-black sm:text-base">
                    {experience.date}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-gray-600 sm:text-sm">
                    {experience.location || "Onsite"}
                  </p>
                </div>
              </div>
              <div className="absolute -right-2 -top-2 rotate-12 transform rounded-full border-2 border-black bg-blue-500 px-2 py-1 text-xs font-bold text-white">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Comic-style decorations */}
      <div className="absolute -left-6 -top-6 flex h-16 w-16 -rotate-12 transform items-center justify-center rounded-full border-8 border-black bg-yellow-400 shadow-[6px_6px_0px_black] sm:h-24 sm:w-24">
        <span
          className="text-xl font-extrabold text-black sm:text-3xl"
          style={{ textShadow: "2px 2px 0px white" }}
        >
          WORK!
        </span>
      </div>
      <div className="absolute -bottom-4 -right-4 flex h-12 w-12 rotate-12 transform items-center justify-center rounded-full border-4 border-black bg-green-400 shadow-[4px_4px_0px_black] sm:h-16 sm:w-16">
        <span className="text-base font-extrabold text-black sm:text-xl">
          EXP
        </span>
      </div>
    </section>
  );
};

export default WorkExperience;
