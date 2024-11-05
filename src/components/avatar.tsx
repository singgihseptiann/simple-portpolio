export default function Avatar() {
  return (
    <div>
      <img
        className="h-10 w-10 rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700" // Background change for dark mode
        src="https://i.pravatar.cc/300"
        alt="avatar"
      />
    </div>
  );
}
