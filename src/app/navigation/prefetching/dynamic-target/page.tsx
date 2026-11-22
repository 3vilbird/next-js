import Link from "next/link";

export default async function DynamicTargetPage() {
  const serverTimestamp = new Date().toISOString();

  return (
    <div className="p-8 rounded-2xl border border-amber-200 dark:border-amber-800 bg-white dark:bg-zinc-900 space-y-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between">
        <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-amber-600 text-white uppercase tracking-wider">
          Dynamic Target
        </span>
        <span className="text-xs text-zinc-500 font-mono">Non-prefetched Link Target</span>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Dynamic Evaluation Target</h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
          This route was linked using <code className="font-mono bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-xs">prefetch=&#123;false&#125;</code>.
          The browser waited until you actually clicked before initiating the request to the server.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-xs font-mono space-y-1 text-zinc-600 dark:text-zinc-300">
        <p>Route: /navigation/prefetching/dynamic-target</p>
        <p>Fresh Server Timestamp: {serverTimestamp}</p>
      </div>

      <div>
        <Link
          href="/navigation/prefetching"
          className="text-sm font-semibold text-amber-600 dark:text-amber-400 hover:underline"
        >
          &larr; Back to Prefetching Lab
        </Link>
      </div>
    </div>
  );
}
