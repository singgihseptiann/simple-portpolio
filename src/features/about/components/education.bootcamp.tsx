// src/pages/About.tsx
import Education from "@/components/education";
import React from "react";

const EducationAndBootcamps: React.FC = () => {
  const formalEducation = {
    university: "University of Technology Yogyakarta",
    gpa: 3.08,
    program: "Bachelor's Degree in Information Systems",
    startDateCollege: "September 2018",
    endDateCollege: "Agustus 2023",
  };

  const bootcamps = [
    {
      name: "Frontend Engineer (Binar Academy)",
      startDate: "July 2023",
      endDate: "November 2023",
      learnedSkills: ["React", "JavaScript", "Bootstrap", "Redux"],
      certificateLink:
        "https://drive.google.com/drive/folders/1THa3uvSDhH6k5kbtizaIvQcyxivIBMP9?hl=id&q=sharedwith:public%20parent:1THa3uvSDhH6k5kbtizaIvQcyxivIBMP9",
    },
    {
      name: "Fullstack MERN Bootcamp (Devscale.id) ",
      startDate: "July 2023",
      endDate: "December 2023",
      learnedSkills: [
        "TypeScript",
        "React",
        "Tanstack Query",
        "Tailwind CSS",
        "MongoDB",
        "Express",
        "Docker",
      ],
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
