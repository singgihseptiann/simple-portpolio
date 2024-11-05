export default function TitleSection({ title }: { title: string }) {
  return (
    <h1 className="mb-4 font-mono text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
      {title}
    </h1>
  );
}
