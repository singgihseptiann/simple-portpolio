export default function TitleSection({ title }: { title: string }) {
  return (
    <h1
      className="mb-2 text-2xl font-extrabold uppercase text-yellow-400 dark:text-cyan-400 md:text-5xl"
      style={{
        textShadow:
          "3px 3px 0px black, 6px 6px 0px black, 8px 8px 0px rgba(0,0,0,0.3)",
      }}
    >
      {title}
    </h1>
  );
}
