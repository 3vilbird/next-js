export function SkeletonCard({ title = "Loading content..." }: { title?: string }) {
  return (
    <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 animate-pulse space-y-4">
      <div className="flex items-center justify-between">
        <div className="h-5 w-28 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
        <div className="h-4 w-16 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
      </div>

      <div className="space-y-2">
        <div className="h-5 w-3/4 bg-zinc-200 dark:bg-zinc-800 rounded" />
        <div className="h-3 w-full bg-zinc-100 dark:bg-zinc-800/60 rounded" />
        <div className="h-3 w-5/6 bg-zinc-100 dark:bg-zinc-800/60 rounded" />
      </div>

      <div className="p-3 rounded-lg bg-zinc-100/70 dark:bg-zinc-800/40 space-y-2">
        <div className="h-3 w-1/2 bg-zinc-200 dark:bg-zinc-800 rounded" />
        <div className="h-3 w-2/3 bg-zinc-200 dark:bg-zinc-800 rounded" />
      </div>

      <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
        Streaming Suspense Fallback ({title})
      </div>
    </div>
  );
}
