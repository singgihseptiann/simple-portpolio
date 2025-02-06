import { useTheme } from "../context/theme.context";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Theme() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full bg-yellow-400 p-2 text-2xl text-black shadow-[4px_4px_0px_black] transition-all duration-200 hover:scale-105 hover:bg-yellow-500 hover:shadow-[6px_6px_0px_black]"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
}
