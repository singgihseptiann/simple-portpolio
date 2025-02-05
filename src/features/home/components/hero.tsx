import ContactButton from "@/components/contact.button";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

interface HeroProps {
  title?: string;
  subtitle?: string;
  jobTitle?: string;
  socialLinks?: {
    github?: string;
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
    className="flex items-center justify-center gap-2 text-gray-800 transition-all duration-300 hover:scale-105 hover:text-gray-900 dark:text-yellow-400 dark:hover:text-yellow-300"
  >
    <Icon className="ml-2 text-4xl" />
  </a>
);

const Hero: React.FC<HeroProps> = ({
  title = "Frontend Developer",
  jobTitle = "Software Engineer",
  subtitle = "I'm a Frontend Developer",
  socialLinks = {
    github: "https://github.com/andresgarrido",
    linkedin: "https://linkedin.com/in/yourprofile",
  },
}) => {
  return (
    <div className="relative flex flex-col space-y-6 border-4 border-black bg-gradient-to-br from-red-600 to-red-800 p-6 shadow-[6px_6px_0px_black] transition-all duration-500 hover:border-yellow-400 hover:shadow-[12px_12px_0px_black] dark:border-yellow-400 dark:bg-gray-900 dark:hover:border-white dark:hover:shadow-[12px_12px_0px_white] md:p-10">
      <h1
        className="font-mono text-3xl font-extrabold uppercase tracking-wide text-yellow-400 md:text-5xl"
        style={{
          textShadow:
            "3px 3px 0px black, 6px 6px 0px black, 8px 8px 0px rgba(0,0,0,0.3)",
        }}
      >
        Hi! You can call me
        <span className="ml-2 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-md">
          {title}
        </span>
      </h1>
      <p className="text-lg font-semibold text-white dark:text-gray-300">
        {jobTitle}
      </p>
      <p className="font-mono text-xl text-white dark:text-gray-400">
        {subtitle}
      </p>

      {/* Contact Button */}
      <div className="mt-4">
        <ContactButton
          mailTo="mailto:septiansinggih93@gmail.com"
          name="septiansinggih93@gmail.com"
        />
      </div>

      {/* Social Links */}
      <div className="mt-6 flex space-x-6">
        {socialLinks.github && (
          <SocialIcon href={socialLinks.github} Icon={FaSquareGithub} />
        )}
        {socialLinks.linkedin && (
          <SocialIcon href={socialLinks.linkedin} Icon={FaLinkedin} />
        )}
      </div>

      {/* Efek burst */}
      <div className="absolute -right-4 -top-4 h-12 w-12 rotate-45 transform rounded-full bg-yellow-400 shadow-[3px_3px_0px_black] dark:bg-white dark:shadow-[3px_3px_0px_white]"></div>
    </div>
  );
};

export default Hero;
