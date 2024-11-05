import TitleSection from "@/components/title.section";
import React, { ReactNode } from "react";

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
    <section className="mt-10">
      <TitleSection title="Work Experience" />
      <div className="">
        {experiences.map((experience, index) => (
          <div key={index} className="mb-4 flex items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 p-2 dark:border-zinc-700">
              {experience.icon}
            </div>
            <div className="ml-4 flex-grow">
              <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 md:text-lg">
                {experience.company}
              </h3>
              <p className="mt-1 font-mono text-sm text-zinc-600 dark:text-zinc-400">
                {experience.title}
              </p>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {experience.date}
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {experience.location || "Onsite"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
