export default function TitleSection({ title }: { title: string }) {
  return (
    <h1 className="mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text font-mono text-2xl font-bold text-transparent md:text-5xl">
      {title}
    </h1>
  );
}
