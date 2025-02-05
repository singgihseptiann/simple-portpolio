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
    className="flex items-center justify-center gap-2 text-yellow-400 transition-all duration-300 hover:scale-110 hover:text-yellow-300"
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
    <div className="relative overflow-hidden rounded-lg border-8 border-black bg-gradient-to-br from-red-600 to-red-800 p-8 shadow-[12px_12px_0px_black] transition-all duration-500 hover:shadow-[20px_20px_0px_black] md:p-12">
      <div className="relative z-10">
        <h1
          className="font-comic text-4xl font-extrabold uppercase tracking-wide text-yellow-400 md:text-6xl"
          style={{
            textShadow: "4px 4px 0px black, 8px 8px 0px rgba(0,0,0,0.3)",
          }}
        >
          Hi! You can call me
          <span className="ml-2 block bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-md">
            {title}
          </span>
        </h1>
        <p
          className="mt-4 text-2xl font-bold text-white"
          style={{ textShadow: "2px 2px 0px black" }}
        >
          {jobTitle}
        </p>
        <p
          className="font-comic mt-2 text-xl text-white"
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
      <div className="absolute -right-16 -top-16 h-48 w-48 rotate-12 transform rounded-full bg-yellow-400 shadow-[8px_8px_0px_black]">
        <span className="absolute bottom-8 left-8 text-4xl font-bold text-black">
          POW!
        </span>
      </div>
      <div className="absolute -bottom-8 -left-8 h-32 w-32 -rotate-12 transform rounded-full bg-black shadow-[6px_6px_0px_black]">
        <span
          className="absolute right-4 top-4 text-3xl font-bold text-black"
          style={{ textShadow: "2px 2px 0px white" }}
        >
          ZOOM!
        </span>
      </div>
      <div className="absolute bottom-4 right-4 h-24 w-24 rotate-45 transform rounded-full bg-green-400 shadow-[4px_4px_0px_black]">
        <span className="absolute left-2 top-6 text-2xl font-bold text-black">
          BAM!
        </span>
      </div>
    </div>
  );
};

export default Hero;
