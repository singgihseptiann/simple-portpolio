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
      learnedSkills: ["React", "JavaScript", "Bootstrap", "Redux", "Github"],
      certificateLink:
        "https://drive.google.com/drive/folders/190OchgJiKdHdq-3hjEM5u-SgXvEvgy8u?usp=sharing",
    },
    {
      name: "Fullstack MERN Bootcamp (Devscale.id) ",
      startDate: "July 2024",
      endDate: "October 2024",
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
        "https://drive.google.com/drive/folders/1aBfmXrGo6LbBQnhwjXgH9zoRzOGs5V1Y?usp=sharing",
    },
  ];

  return (
    <section>
      <Education formalEducation={formalEducation} bootcamps={bootcamps} />
    </section>
  );
};

export default EducationAndBootcamps;
