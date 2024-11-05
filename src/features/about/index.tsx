import About from "@/features/about/components/about";
import TechStack from "./components/tech.stack";
import DeveloperTools from "./components/developer.tools";
import EducationAndBootcamps from "./components/education.bootcamp";

export default function AboutPage() {
  return (
    <div>
      <About />
      <TechStack />
      <DeveloperTools />
      <EducationAndBootcamps />
    </div>
  );
}
