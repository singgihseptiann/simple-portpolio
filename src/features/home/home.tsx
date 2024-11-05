import Hero from "@/features/home/components/hero";
import ExperienceSection from "@/features/work";
import ProjectsPage from "@/features/projetcs";

export default function Home() {
  return (
    <div>
      <Hero
        title="Hi!, You can call me Singgih"
        jobTitle="Frontend Developer"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illum ab voluptatum architecto natus fugiat nesciunt blanditiis assumenda, corporis necessitatibus quasi esse, et accusantium vel culpa sint! Eos, natus tempore."
        socialLinks={{
          github: "https://github.com/yourusername",
          instagram: "https://instagram.com/yourusername",
          linkedin: "https://linkedin.com/in/yourusername",
        }}
      />
      <ExperienceSection />
      <ProjectsPage />
    </div>
  );
}
