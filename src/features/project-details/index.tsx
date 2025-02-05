import { useParams } from "react-router-dom";

import ProjectDetail from "./components/project.details";
import { projectData } from "@/data/detail.projects.data";

// Data untuk project-detail sesuai dengan data yang ada di CardProjects
const ProjectsDetailsPage = () => {
  const { projectId } = useParams<{ projectId: string }>();

  // Data detail proyek yang sesuai dengan ID

  // Ambil data proyek berdasarkan ID
  const project = projectId ? projectData[projectId] : undefined;

  if (!project) {
    return <div>Project not found!</div>; // Menangani jika projectId tidak valid
  }

  // Render ProjectDetail dengan data yang sesuai
  return <ProjectDetail {...project} />;
};

export default ProjectsDetailsPage;
