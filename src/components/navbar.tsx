import Avatar from "./avatar";
import NavLink from "./menu";
import Theme from "./theme";

export default function Navbar() {
  return (
    <nav
      className="container mx-auto max-w-4xl p-2"
      aria-label="Main Navigation"
    >
      <div className="flex items-center justify-between gap-2 rounded-lg p-2 text-lg">
        <div>
          <Avatar />
        </div>
        <div className="flex items-center space-x-5 rounded-full border border-gray-300 bg-slate-100/95 p-2 pl-5 pr-5 text-gray-600 dark:border-gray-600 dark:bg-slate-800 dark:text-gray-300">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
        <div>
          <Theme />
        </div>
      </div>
    </nav>
  );
}
