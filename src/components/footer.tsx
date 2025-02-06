import NavLink from "./menu";

export default function Footer() {
  const getYear = () => new Date().getFullYear();
  const name = "Singgih Septian Nugraha";

  return (
    <footer className="relative mt-12 overflow-hidden">
      <div className="border-t-8 border-black bg-gradient-to-br from-red-600 to-red-800 py-8">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              <NavLink to="/about">About</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/">Home</NavLink>
            </nav>
            <div
              className="font-comic text-lg font-bold text-yellow-400"
              style={{ textShadow: "2px 2px 0px black" }}
            >
              © {getYear()} {name}
            </div>
          </div>
        </div>
      </div>

      {/* Comic-style decorations */}
      <div className="absolute -top-6 left-1/4 h-16 w-16 rotate-12 transform rounded-full bg-yellow-400 shadow-[4px_4px_0px_black]">
        <span className="absolute bottom-2 right-2 text-xl font-bold text-black">
          POW!
        </span>
      </div>
      <div className="absolute -top-4 right-1/4 h-12 w-12 -rotate-12 transform rounded-full bg-blue-500 shadow-[3px_3px_0px_black]">
        <span className="absolute left-1 top-3 text-sm font-bold text-white">
          ZOOM!
        </span>
      </div>
      <div className="absolute -bottom-6 left-1/3 h-20 w-20 rotate-45 transform rounded-full border-4 border-black bg-white">
        <span className="absolute left-4 top-6 text-2xl font-extrabold text-black">
          THE END
        </span>
      </div>
    </footer>
  );
}
