import NavLink from "./menu";
import Theme from "./theme";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 mx-auto overflow-hidden"
      aria-label="Main Navigation"
    >
      <div className="relative border-8 border-black bg-gradient-to-br from-red-600 to-red-800 p-4 shadow-[12px_12px_0px_black] transition-all duration-300 hover:shadow-[20px_20px_0px_black] dark:border-cyan-400 dark:from-gray-900 dark:to-black dark:shadow-[0_0_20px_rgba(6,182,212,0.5)] dark:hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]">
        <div className="flex items-center justify-between gap-4 p-2 text-lg">
          <div className="flex flex-wrap items-center gap-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
          <div className="ml-auto">
            <Theme />
          </div>
        </div>

        {/* Comic-style decorations */}
        <div className="absolute -left-3 -top-6 h-12 w-12 rotate-12 transform rounded-full bg-yellow-400 p-2 shadow-[4px_4px_0px_black] dark:bg-pink-500 dark:shadow-[0_0_15px_rgba(236,72,153,0.8)]">
          <span className="absolute bottom-1 right-1 text-sm font-bold text-black dark:text-white">
            NAV!
          </span>
        </div>
        <div className="absolute -bottom-5 -right-3 h-10 w-10 -rotate-12 transform rounded-full bg-blue-500 shadow-[3px_3px_0px_black] dark:bg-cyan-400 dark:shadow-[0_0_15px_rgba(6,182,212,0.8)]">
          <span className="absolute left-1 top-2 text-xs font-bold text-white dark:text-black">
            MENU
          </span>
        </div>
      </div>
    </nav>
  );
}
