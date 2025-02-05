import { FaReact } from "react-icons/fa";
import {
  SiOpenai,
  SiReactquery,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { DiBootstrap, DiCodeigniter } from "react-icons/di";
import { BiLogoJavascript } from "react-icons/bi";
type ProjectData = {
  [key: string]: {
    title: string;
    img: string;
    shortExplanation: string;
    techStack: Array<{
      name: string;
      icon: JSX.Element;
    }>;
    goals: string[];
    githubUrl: string;
    liveUrl: string;
  };
};
export const projectData: ProjectData = {
  "seek-your-job": {
    title: "Seek Your Job",
    img: "https://via.placeholder.com/1200x600", // Ganti dengan img proyek yang sesuai
    shortExplanation:
      "Job website with integrated OpenAI for matching resumes with job vacancies. This website is a final assignment from my Fullstack MERN Bootcamp (DevScale), developed by my team.",
    techStack: [
      { name: "React", icon: <FaReact className="h-5 w-5 text-blue-500" /> },
      {
        name: "TypeScript",
        icon: <SiTypescript className="h-5 w-5 text-blue-500" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="h-5 w-5 text-cyan-500" />,
      },
      {
        name: "Tanstack Query",
        icon: <SiReactquery className="h-5 w-5 text-purple-500" />,
      },
      {
        name: "Shadcn UI",
        icon: <SiShadcnui className="h-5 w-5 text-gray-500" />,
      },
      {
        name: "OpenAI",
        icon: <SiOpenai className="h-5 w-5 text-yellow-500" />,
      },
    ],
    goals: [
      "Build a scalable and maintainable web application using React.",
      "Integrate OpenAI for resume-job matching functionality.",
      "Implement user authentication and authorization with Redux for state management.",
      "Optimize performance for a seamless user experience, applying best practices in JavaScript.",
    ],
    githubUrl:
      "https://github.com/singgihseptiann/final-assignment-devscale-mern/tree/main",
    liveUrl: "https://seekyourjob.my.id/",
  },
  "binar-car-rental": {
    title: "Binar Car Rental",
    img: "https://via.placeholder.com/1200x600", // Ganti dengan img proyek yang sesuai
    shortExplanation:
      "Binar Car Rental is a project I developed during my Frontend Engineer bootcamp at Binar Academy. This project showcases key features and functionalities essential for a car rental service, including a user-friendly interface and streamlined rental processes.",
    techStack: [
      { name: "React", icon: <FaReact className="h-5 w-5 text-blue-500" /> },
      {
        name: "JavaScript",
        icon: <BiLogoJavascript className="h-5 w-5 text-yellow-500" />,
      },
      {
        name: "Bootstrap",
        icon: <DiBootstrap className="h-5 w-5 text-purple-500" />,
      },
      {
        name: "Redux",
        icon: <SiRedux className="h-5 w-5 text-purple-500" />,
      },
    ],
    goals: [
      "Implement a seamless car rental experience using React.",
      "Develop an intuitive and responsive user interface with Bootstrap for mobile-first design.",
      "Apply JavaScript best practices for creating a smooth and efficient application.",
      "Use Redux to manage state across the application and ensure a consistent user experience.",
    ],
    githubUrl:
      "https://github.com/singgihseptiann/kelompok1-platinum-customer-page",
    liveUrl: "https://kelompok1-platinum-customer-page.vercel.app/login",
  },
  ssayomart: {
    title: "Ssayomart",
    img: "https://via.placeholder.com/1200x600", // Ganti dengan img proyek yang sesuai
    shortExplanation:
      "Ssayomart is an e-commerce project, which was my first professional project as a Frontend Developer. I worked on an existing project, focusing on improving its responsiveness, particularly ensuring a seamless mobile experience for users.",
    techStack: [
      {
        name: "Bootstrap",
        icon: <DiBootstrap className="h-5 w-5 text-purple-500" />,
      },
      {
        name: "CodeIgniter",
        icon: <DiCodeigniter className="h-5 w-5 text-red-500" />,
      },
      {
        name: "JavaScript",
        icon: <BiLogoJavascript className="h-5 w-5 text-yellow-500" />,
      },
    ],
    goals: [
      "Enhance mobile responsiveness using React and Bootstrap.",
      "Improve performance and scalability with JavaScript best practices.",
      "Implement secure user authentication and authorization using React and state management tools like Redux.",
    ],
    githubUrl: "https://github.com/singgihseptiann/ssayomart",
    liveUrl: "https://apps.ssayomart.com/",
  },
};
