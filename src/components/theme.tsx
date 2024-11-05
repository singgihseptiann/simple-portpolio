import { Sun, Moon, SunMoon } from "lucide-react";
import { useTheme } from "../context/theme.context";

export default function Theme() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full border p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {isDark ? <Sun className="text-yellow-400" /> : <SunMoon />}
    </button>
  );
}
