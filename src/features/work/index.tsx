import { BriefcaseBusiness } from "lucide-react";
import WorkExperience from "./components/works.experience";

const ExperienceSection = () => {
  const workExperiences = [
    {
      company: "Aneka Dasuib Jaya",
      title: "Frontend Developer",
      date: "2023 - Present",
      icon: (
        <BriefcaseBusiness className="h-6 w-6 text-gray-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div>
      <WorkExperience experiences={workExperiences} />
    </div>
  );
};

export default ExperienceSection;
