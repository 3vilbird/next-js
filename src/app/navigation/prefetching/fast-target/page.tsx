import Link from "next/link";

export default function FastTargetPage() {
  return (
    <div className="p-8 rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-zinc-900 space-y-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between">
        <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-emerald-600 text-white uppercase tracking-wider">
          Prefetch Destination
        </span>
        <span className="text-xs text-zinc-500 font-mono">Rendered Instantaneously</span>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">⚡ Instant Navigation Target</h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
          If you navigated here after the link was prefetched, the RSC payload was pulled directly from your browser&apos;s in-memory Router Cache. Notice how there was no white screen, no browser reload, and the layout stayed perfectly intact!
        </p>
      </div>

      <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-xs font-mono space-y-1 text-zinc-600 dark:text-zinc-300">
        <p>Route: /navigation/prefetching/fast-target</p>
        <p>Rendering Type: Static / Instant Prefetched Shell</p>
      </div>

      <div>
        <Link
          href="/navigation/prefetching"
          className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
        >
          &larr; Back to Prefetching Lab
        </Link>
      </div>
    </div>
  );
}
