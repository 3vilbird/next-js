import Link from "next/link";
import PrefetchController from "./_components/PrefetchController";

export default function PrefetchingLabPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
          Module 2: Route Prefetching &amp; Router Cache
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight mt-2">
          Route Prefetching Mechanics
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2 max-w-3xl leading-relaxed">
          Prefetching downloads the route payload <em>before</em> the user clicks, placing it in the browser&apos;s memory cache for instant transitions.
        </p>
      </div>

      {/* Production Notice */}
      <div className="p-4 rounded-xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50/60 dark:bg-emerald-950/30 text-xs text-zinc-700 dark:text-zinc-300 space-y-1">
        <p className="font-bold text-emerald-800 dark:text-emerald-300">
          ✅ Running in Production Mode (`next start`)
        </p>
        <p>
          Automatic viewport prefetching is active! In DevTools &rarr; <strong>Network tab</strong> (filter: <strong>Fetch/XHR</strong>), you can inspect prefetch requests as they happen.
        </p>
      </div>

      {/* SECTION 1: Above-The-Fold Comparison */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-bold">1. Above-The-Fold Links (In Viewport on Page Load)</h3>
          <p className="text-xs text-zinc-500">
            Because these cards are visible immediately on load, Next.js prefetches their unique routes right away:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Option A: prefetch={true} */}
          <div className="p-5 rounded-xl border-2 border-emerald-500 bg-emerald-50/20 dark:bg-emerald-950/20 flex flex-col justify-between space-y-4 shadow-xs">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">Option A</span>
                <span className="text-xs font-mono bg-emerald-600 text-white px-2 py-0.5 rounded font-bold">
                  prefetch=&#123;true&#125;
                </span>
              </div>
              <h4 className="font-bold text-base mt-2">Eager Full Prefetch</h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
                URL: <code className="font-mono text-emerald-600">/fast-target</code>
                <br />
                Prefetched immediately when page loads in viewport.
              </p>
            </div>
            <Link
              href="/navigation/prefetching/fast-target"
              prefetch={true}
              className="block w-full py-2.5 text-center text-xs font-bold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition shadow-sm"
            >
              Open Fast Target &rarr;
            </Link>
          </div>

          {/* Option B: prefetch={false} */}
          <div className="p-5 rounded-xl border-2 border-red-300 dark:border-red-900 bg-red-50/20 dark:bg-red-950/20 flex flex-col justify-between space-y-4 shadow-xs">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider">Option B</span>
                <span className="text-xs font-mono bg-red-600 text-white px-2 py-0.5 rounded font-bold">
                  prefetch=&#123;false&#125;
                </span>
              </div>
              <h4 className="font-bold text-base mt-2">Completely Disabled</h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
                URL: <code className="font-mono text-red-600">/dynamic-target</code>
                <br />
                Never prefetched. Request only happens when you click!
              </p>
            </div>
            <Link
              href="/navigation/prefetching/dynamic-target"
              prefetch={false}
              className="block w-full py-2.5 text-center text-xs font-bold rounded-lg bg-red-600 hover:bg-red-700 text-white transition shadow-sm"
            >
              Open Dynamic Target &rarr;
            </Link>
          </div>

          {/* Option C: Default / auto */}
          <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col justify-between space-y-4 shadow-xs">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">Option C</span>
                <span className="text-xs font-mono bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2 py-0.5 rounded">
                  default (auto)
                </span>
              </div>
              <h4 className="font-bold text-base mt-2">Smart Auto-Prefetch</h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
                URL: <code className="font-mono text-blue-600">/auto-target</code>
                <br />
                Prefetches the App Shell when visible.
              </p>
            </div>
            <Link
              href="/navigation/prefetching/auto-target"
              className="block w-full py-2.5 text-center text-xs font-bold rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 transition"
            >
              Open Auto Target &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Programmatic Prefetching API */}
      <PrefetchController />

      {/* SECTION 2: Below-the-fold Viewport Test with Real Page Distance */}
      <div className="p-6 rounded-2xl border-2 border-purple-300 dark:border-purple-800 bg-purple-50/20 dark:bg-purple-950/20 space-y-4">
        <div>
          <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-purple-600 text-white uppercase tracking-wider">
            2. Real Viewport Scroll Experiment
          </span>
          <h4 className="text-xl font-bold mt-2">Test: Does Next.js prefetch before you scroll?</h4>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
            Look at your DevTools <strong>Network tab</strong> right now. Notice that <strong>no request</strong> for <code className="font-mono font-bold text-purple-600 dark:text-purple-400">/scroll-target</code> exists yet!
            <br />
            Scroll down the main window past the spacer below. As soon as you scroll near the bottom, watch the request for <code className="font-mono font-bold text-purple-600 dark:text-purple-400">scroll-target</code> appear in the Network tab!
          </p>
        </div>

        {/* Real Vertical Page Spacer (1,000 pixels down the document) */}
        <div className="h-[900px] border-2 border-dashed border-purple-200 dark:border-purple-900 rounded-xl flex flex-col items-center justify-center p-8 text-center space-y-2">
          <span className="text-3xl animate-bounce">👇</span>
          <p className="text-sm font-semibold text-purple-700 dark:text-purple-300">
            900px Vertical Page Distance
          </p>
          <p className="text-xs text-zinc-400 max-w-md">
            Next.js observes against the <strong>main browser window</strong> with a 200px buffer margin. While you are up here, the link below is far outside the viewport, so Next.js downloads nothing.
          </p>
          <p className="text-xs text-purple-600 font-mono">
            Keep scrolling down...
          </p>
        </div>

        {/* The Hidden Link at the very bottom */}
        <div className="p-6 rounded-xl bg-purple-100 dark:bg-purple-900/60 border border-purple-300 dark:border-purple-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <h5 className="font-bold text-purple-950 dark:text-purple-100 text-base">
                🎯 Scroll Target Link Reached!
              </h5>
            </div>
            <p className="text-xs text-purple-800 dark:text-purple-300 mt-1">
              Check your DevTools Network tab now! The request for <code className="font-mono font-bold">/navigation/prefetching/scroll-target</code> just fired because this link crossed into the viewport.
            </p>
          </div>

          <Link
            href="/navigation/prefetching/scroll-target"
            prefetch={true}
            className="px-5 py-2.5 text-xs font-bold rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition shadow-md whitespace-nowrap text-center"
          >
            Visit Scroll Target &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
