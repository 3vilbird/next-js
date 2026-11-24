import Link from "next/link";

export default function ScrollTargetPage() {
  return (
    <div className="p-8 rounded-2xl border border-purple-200 dark:border-purple-800 bg-white dark:bg-zinc-900 space-y-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between">
        <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-purple-600 text-white uppercase tracking-wider">
          Viewport Scroll Target
        </span>
        <span className="text-xs text-zinc-500 font-mono">Prefetched on Real Scroll</span>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">🎯 Scroll-Triggered Destination</h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
          You reached this page from the link placed 1,200px down the page. Next.js detected it entering the browser viewport as you scrolled down, and prefetched this route in the background before you clicked!
        </p>
      </div>

      <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-xs font-mono space-y-1 text-purple-800 dark:text-purple-300">
        <p>Route: /navigation/prefetching/scroll-target</p>
        <p>Trigger Mechanism: Window Viewport Scroll (IntersectionObserver)</p>
      </div>

      <div>
        <Link
          href="/navigation/prefetching"
          className="text-sm font-semibold text-purple-600 dark:text-purple-400 hover:underline"
        >
          &larr; Back to Prefetching Lab
        </Link>
      </div>
    </div>
  );
}
