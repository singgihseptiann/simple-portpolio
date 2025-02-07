import type React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import ContactButton from "@/components/contact.button";

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
    className="flex items-center justify-center gap-2 text-yellow-400 transition-all duration-300 hover:scale-110 hover:text-yellow-300 dark:text-cyan-400 dark:hover:text-pink-500"
  >
    <Icon className="text-5xl" />
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
    <div className="relative overflow-hidden rounded-lg border-8 border-black bg-gradient-to-br from-red-600 to-red-800 p-8 shadow-[12px_12px_0px_black] transition-all duration-500 hover:shadow-[20px_20px_0px_black] dark:border-cyan-400 dark:from-gray-900 dark:to-black dark:shadow-[0_0_20px_rgba(6,182,212,0.5)] dark:hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] md:p-12">
      <div className="relative z-10">
        <h1
          className="font-comic text-4xl font-extrabold uppercase tracking-wide text-yellow-400 dark:text-cyan-400 md:text-6xl"
          style={{
            textShadow: "4px 4px 0px black, 8px 8px 0px rgba(0,0,0,0.3)",
          }}
        >
          Hi! You can call me
          <span className="ml-2 block bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent mix-blend-exclusion drop-shadow-md dark:from-cyan-300 dark:to-pink-500">
            {title}
          </span>
        </h1>
        <p
          className="mt-4 text-2xl font-bold text-white dark:text-pink-500"
          style={{ textShadow: "2px 2px 0px black" }}
        >
          {jobTitle}
        </p>
        <p
          className="font-comic mt-2 text-xl text-white dark:text-cyan-200"
          style={{ textShadow: "2px 2px 0px black" }}
        >
          {subtitle}
        </p>

        {/* Contact Button */}
        <div className="mt-6">
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
      </div>

      {/* Comic-style decorations */}
      <div className="absolute -right-16 -top-16 h-48 w-48 rotate-12 transform rounded-full bg-yellow-400 shadow-[8px_8px_0px_black] dark:bg-pink-500 dark:shadow-[0_0_15px_rgba(236,72,153,0.8)]">
        <span className="absolute bottom-8 left-8 text-4xl font-bold text-black dark:text-white">
          POW!
        </span>
      </div>
      <div className="absolute -bottom-8 -left-8 h-32 w-32 -rotate-12 transform rounded-full bg-black shadow-[6px_6px_0px_black] dark:bg-cyan-600 dark:shadow-[0_0_15px_rgba(6,182,212,0.8)]">
        <span
          className="absolute right-4 top-4 text-3xl font-bold text-black dark:text-white"
          style={{ textShadow: "2px 2px 0px white" }}
        >
          ZOOM!
        </span>
      </div>
      <div className="absolute bottom-4 right-4 h-24 w-24 rotate-45 transform rounded-full bg-green-400 shadow-[4px_4px_0px_black] dark:bg-pink-600 dark:shadow-[0_0_15px_rgba(236,72,153,0.8)]">
        <span className="absolute left-2 top-6 text-2xl font-bold text-black dark:text-white">
          BAM!
        </span>
      </div>
    </div>
  );
};

export default Hero;
