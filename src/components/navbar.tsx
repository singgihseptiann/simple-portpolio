import NavLink from "./menu";

export default function Navbar() {
  return (
    <nav
      className="container mx-auto max-w-4xl p-2"
      aria-label="Main Navigation"
    >
      <div className="flex items-center justify-between gap-2 rounded-lg p-2 text-lg">
        <div>
          <span
            className="h-2 w-1 rounded-full bg-black p-1"
            aria-hidden="true"
          ></span>
        </div>
        <div className="flex items-center space-x-5 rounded-full border bg-slate-100/95 p-2 pl-5 pr-5 text-gray-600">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
        <div>
          <button aria-label="Toggle dark mode">dark mode</button>
        </div>
      </div>
    </nav>
  );
}
