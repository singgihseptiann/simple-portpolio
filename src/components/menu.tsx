import { Link } from "react-router-dom";
import type React from "react"; // Added import for React

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="font-mono font-extrabold text-yellow-400 transition-all duration-300 hover:scale-110 hover:text-red-600 hover:shadow-[2px_2px_0px_black] dark:text-cyan-400 dark:hover:text-pink-500 dark:hover:shadow-[0_0_10px_rgba(236,72,153,0.5)]"
      style={{
        textShadow: "2px 2px 0px black, 4px 4px 0px black",
      }}
    >
      {children}
    </Link>
  );
};

export default NavLink;
