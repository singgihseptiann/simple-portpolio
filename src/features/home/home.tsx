import Hero from "@/features/home/components/hero";
import ExperienceSection from "@/features/work";
import ProjectsPage from "@/features/projetcs";

export default function Home() {
  return (
    <div>
      <Hero
        title="Singgih"
        jobTitle="Frontend Developer"
        subtitle="Frontend developer, lifelong learner, and an 8-5 tech worker in the office. When I'm away from the keyboard, I'm diving into anime worlds!"
        socialLinks={{
          github: "https://github.com/yourusername",
          linkedin: "https://linkedin.com/in/yourusername",
        }}
      />

      <ProjectsPage />
      <ExperienceSection />
    </div>
  );
}
