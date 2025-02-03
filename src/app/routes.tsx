import Layout from "@/components/layout";
import AboutPage from "@/features/about";
import Home from "@/features/home/home";
import ProjectsDetailsPage from "@/features/project-details";
import ProjectsPage from "@/features/projetcs";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route
              path="/projects/:projectId"
              element={<ProjectsDetailsPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
