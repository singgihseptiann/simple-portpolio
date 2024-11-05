// src/pages/About.tsx
import Education from "@/components/education";
import React from "react";

const EducationAndBootcamps: React.FC = () => {
  const formalEducation = {
    university: "University of Technology Yogyakarta",
    gpa: 3.8,
    program: "Bachelor's Degree in Information Systems",
    startDateCollege: "September 2018",
    endDateCollege: "July 2022",
  };

  const bootcamps = [
    {
      name: "Full-Stack Developer Bootcamp",
      startDate: "January 2023",
      endDate: "June 2023",
      learnedSkills: ["React", "JavaScript", "Node.js", "Express", "MongoDB"],
      certificateLink:
        "https://drive.google.com/file/d/your-certificate-link-1/view",
    },
    {
      name: "Advanced Frontend Bootcamp",
      startDate: "July 2023",
      endDate: "December 2023",
      learnedSkills: ["TypeScript", "Redux", "Tailwind CSS", "Testing"],
      certificateLink:
        "https://drive.google.com/file/d/your-certificate-link-2/view",
    },
  ];

  return (
    <section>
      <Education formalEducation={formalEducation} bootcamps={bootcamps} />
    </section>
  );
};

export default EducationAndBootcamps;
