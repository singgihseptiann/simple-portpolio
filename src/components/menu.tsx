import { Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="font-mono font-semibold transition-all duration-200 hover:underline"
    >
      {children}
    </Link>
  );
};

export default NavLink;