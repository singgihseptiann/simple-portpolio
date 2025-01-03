import { FaGithub } from "react-icons/fa";

const tools = [
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-800 dark:text-gray-300" />,
  },
  // Add more tools here if needed
];

export default function DeveloperTools() {
  return (
    <div className="mt-5">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
        Developer Tools
      </h2>
      <div className="mt-5 flex flex-wrap justify-start gap-6">
        {tools.map((tool, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-2 text-4xl">{tool.icon}</div>
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
              {tool.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
