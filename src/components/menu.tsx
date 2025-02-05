import { Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="font-mono font-extrabold text-yellow-400 transition-all duration-300 hover:scale-110 hover:text-red-600 hover:shadow-[2px_2px_0px_black] dark:text-yellow-300 dark:hover:text-red-500"
      style={{
        textShadow: "2px 2px 0px black, 4px 4px 0px black",
      }}
    >
      {children}
    </Link>
  );
};

export default NavLink;
