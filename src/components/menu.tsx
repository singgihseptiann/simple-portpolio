import { Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="font-mono font-semibold text-gray-800 transition-all duration-200 hover:text-blue-600 hover:underline dark:text-gray-200 dark:hover:text-blue-400"
    >
      {children}
    </Link>
  );
};

export default NavLink;
