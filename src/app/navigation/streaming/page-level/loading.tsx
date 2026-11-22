// Next.js Special File Convention: loading.tsx
// This automatically wraps the route's page.tsx in a React <Suspense> boundary.

export default function PageLevelLoading() {
  return (
    <div className="space-y-6 animate-pulse max-w-3xl mx-auto py-8">
      <div className="flex items-center justify-between">
        <div className="h-6 w-44 bg-purple-200 dark:bg-purple-950/70 rounded-full" />
        <div className="h-4 w-32 bg-zinc-200 dark:bg-zinc-800 rounded" />
      </div>

      <div className="h-9 w-2/3 bg-zinc-200 dark:bg-zinc-800 rounded-lg" />
      <div className="h-4 w-full bg-zinc-100 dark:bg-zinc-800/60 rounded" />
      <div className="h-4 w-4/5 bg-zinc-100 dark:bg-zinc-800/60 rounded" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
        <div className="h-32 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800" />
        <div className="h-32 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800" />
      </div>

      <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900 text-xs font-mono text-purple-700 dark:text-purple-300 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-ping" />
        <span>Special file convention: <strong>loading.tsx</strong> active. Server is resolving async page content...</span>
      </div>
    </div>
  );
}
