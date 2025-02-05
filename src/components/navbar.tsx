import NavLink from "./menu";
import Theme from "./theme";

export default function Navbar() {
  return (
    <nav
      className="container sticky top-10 z-50 mx-auto mt-10 max-w-6xl overflow-hidden p-2"
      aria-label="Main Navigation"
    >
      <div className="dark:bg-gray-95 overflow-hidden border-4 border-black bg-sky-100 bg-gradient-to-br from-sky-100 to-sky-100 p-4 shadow-[4px_4px_0px_black] transition-all duration-300 ease-out hover:border-yellow-400 hover:shadow-[10px_10px_0px_black]">
        {" "}
        <div className="flex items-center justify-between gap-4 rounded-lg p-2 text-lg">
          <div className="flex items-center space-x-4 md:space-x-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
          <div>
            <Theme />
          </div>
        </div>
      </div>
    </nav>
  );
}
