import { Github, InstagramIcon, Linkedin } from "lucide-react";
import React from "react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  jobTitle?: string;
  socialLinks?: {
    github?: string;
    instagram?: string;
    linkedin?: string;
  };
}

const SocialIcon: React.FC<{ href: string; Icon: React.ElementType }> = ({
  href,
  Icon,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-10 w-10 items-center justify-center text-gray-500 transition-colors duration-200 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
  >
    <Icon />
  </a>
);

const Hero: React.FC<HeroProps> = ({
  title = "Frontend Developer",
  jobTitle = "Software Engineer",
  subtitle = "I'm a Frontend Developer",
  socialLinks = {
    github: "https://github.com/andresgarrido",
    instagram: "https://instagram.com/yourprofile",
    linkedin: "https://linkedin.com/in/yourprofile",
  },
}) => {
  return (
    <div className="flex flex-col justify-start space-y-4">
      <h1 className="font-mono text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
        {title}
      </h1>
      <p className="dark:text-zinc-390 mt-6 text-base text-zinc-600">
        {jobTitle}
      </p>
      <p className="dark:text-zinc-390 mt-6 font-mono text-base text-zinc-600">
        {subtitle}
      </p>
      <div className="mt-6 flex">
        {socialLinks.instagram && (
          <SocialIcon href={socialLinks.instagram} Icon={InstagramIcon} />
        )}
        {socialLinks.github && (
          <SocialIcon href={socialLinks.github} Icon={Github} />
        )}
        {socialLinks.linkedin && (
          <SocialIcon href={socialLinks.linkedin} Icon={Linkedin} />
        )}
      </div>
    </div>
  );
};

export default Hero;
