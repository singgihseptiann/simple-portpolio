export default function TitleSection({ title }: { title: string }) {
  return (
    <h1 className="mb-4 bg-gradient-to-r from-yellow-400 to-red-600 bg-clip-text font-mono text-2xl font-extrabold uppercase text-transparent drop-shadow-[3px_3px_0px_black] md:text-5xl">
      {title}
    </h1>
  );
}
