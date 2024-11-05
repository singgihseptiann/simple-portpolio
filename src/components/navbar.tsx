import NavLink from "./menu";
import Theme from "./theme";

export default function Navbar() {
  return (
    <nav
      className="container sticky top-0 z-50 mx-auto max-w-6xl bg-white p-2 dark:bg-gray-950"
      aria-label="Main Navigation"
    >
      <div className="flex items-center justify-between gap-2 rounded-lg p-2 text-lg">
        <div className="flex items-center space-x-3 md:space-x-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
        <div>
          <Theme />
        </div>
      </div>
    </nav>
  );
}
