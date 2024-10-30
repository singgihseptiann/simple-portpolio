import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-center gap-2 bg-red-500  text-white p-2 text-lg">
        <Link to="/" className="hover:underline transition-all duration-200">
          Home
        </Link>
        <Link to="/">Home</Link>
        <Link to="/">Home</Link>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
