import Link from "next/link";

export default function AutoTargetPage() {
  return (
    <div className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between">
        <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-zinc-600 text-white uppercase tracking-wider">
          Auto Prefetch Target
        </span>
        <span className="text-xs text-zinc-500 font-mono">Default &lt;Link&gt;</span>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Default Viewport Target</h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
          This page was prefetched using the default <code>&lt;Link href=&quot;...&quot;&gt;</code> setting.
        </p>
      </div>

      <div>
        <Link
          href="/navigation/prefetching"
          className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
        >
          &larr; Back to Prefetching Lab
        </Link>
      </div>
    </div>
  );
}
