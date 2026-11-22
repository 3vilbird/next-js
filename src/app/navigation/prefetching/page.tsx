import Link from "next/link";
import PrefetchController from "./_components/PrefetchController";

export default function PrefetchingLabPage() {
  return (
    <div className="space-y-10">
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

      {/* CRITICAL NOTE: Dev vs Prod */}
      <div className="p-5 rounded-2xl border-2 border-amber-300 dark:border-amber-800 bg-amber-50/70 dark:bg-amber-950/30 space-y-2 text-zinc-900 dark:text-zinc-100">
        <div className="flex items-center gap-2 font-bold text-amber-800 dark:text-amber-300 text-sm">
          <span>⚠️ Why you don&apos;t see automatic network calls in `npm run dev`:</span>
        </div>
        <p className="text-xs text-amber-900/90 dark:text-amber-200/90 leading-relaxed">
          <strong>Automatic viewport prefetching is intentionally disabled in Next.js development mode (`next dev`).</strong>
          <br />
          In development, routes are compiled on demand. If Next.js prefetched every link as soon as it appeared on screen, it would trigger massive compilation spikes for every route in your project.
          <br />
          In <strong>development</strong>, Next.js only prefetches on <strong>mouse hover</strong> or <strong>click</strong>.
          To see automatic viewport prefetching fire the moment a page loads without touching the mouse, you must test a production build:
        </p>
        <div className="p-2.5 rounded-lg bg-black text-emerald-400 font-mono text-xs mt-2 select-all">
          npm run build &amp;&amp; npm start
        </div>
      </div>

      {/* Direct answers to Core Questions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
          <h3 className="font-bold text-sm text-blue-600 dark:text-blue-400">
            Q1: If prefetch=&#123;true&#125;, do I see network calls without clicking?
          </h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <strong>YES (in Production).</strong> As soon as the <code className="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">&lt;Link&gt;</code> enters your browser viewport, Next.js automatically dispatches background HTTP requests to fetch the route&apos;s RSC payload and JS chunks. You do <strong>not</strong> need to click.
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
          <h3 className="font-bold text-sm text-purple-600 dark:text-purple-400">
            Q2: Is it prefetched even before reaching the viewport?
          </h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <strong>NO.</strong> Next.js attaches an <code className="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">IntersectionObserver</code> to every link. Links placed far down the page (below the fold) are <strong>never</strong> downloaded until you scroll down and bring them into view.
          </p>
        </div>
      </div>

      {/* SECTION 1: Above-The-Fold Comparison */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-bold">1. Above-The-Fold Comparison (Visible in Viewport Now)</h3>
          <p className="text-xs text-zinc-500">
            These links are currently in your viewport. Notice how each behaves differently:
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
                Next.js downloads the full route payload and dependencies <strong>immediately</strong> as soon as this card appears in the viewport.
              </p>
            </div>
            <Link
              href="/navigation/prefetching/fast-target"
              prefetch={true}
              className="block w-full py-2.5 text-center text-xs font-bold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition shadow-sm"
            >
              Test: &lt;Link prefetch=&#123;true&#125;&gt; &rarr;
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
                Will <strong>NEVER</strong> prefetch in the background, neither on viewport entry nor on hover. Network requests only occur <strong>when clicked</strong>.
              </p>
            </div>
            <Link
              href="/navigation/prefetching/dynamic-target"
              prefetch={false}
              className="block w-full py-2.5 text-center text-xs font-bold rounded-lg bg-red-600 hover:bg-red-700 text-white transition shadow-sm"
            >
              Test: &lt;Link prefetch=&#123;false&#125;&gt; &rarr;
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
                Prefetches the static parts or App Shell down to the nearest <code className="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 rounded">loading.tsx</code> boundary.
              </p>
            </div>
            <Link
              href="/navigation/prefetching/fast-target"
              className="block w-full py-2.5 text-center text-xs font-bold rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 transition"
            >
              Test: Default &lt;Link&gt; &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* SECTION 2: Below-the-fold Viewport Test */}
      <div className="p-6 rounded-2xl border border-purple-200 dark:border-purple-900/60 bg-purple-50/20 dark:bg-purple-950/20 space-y-4">
        <div className="flex items-center justify-between">
          <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-purple-600 text-white uppercase tracking-wider">
            2. Viewport Boundary Experiment
          </span>
          <span className="text-xs text-purple-700 dark:text-purple-300 font-mono">
            IntersectionObserver Verification
          </span>
        </div>

        <div>
          <h4 className="font-bold text-base">Does Next.js prefetch before reaching the viewport?</h4>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
            To prove Next.js does <strong>not</strong> prefetch links hidden far below the screen, we placed a test link behind a 600px scroll container below. Open your Network tab, scroll down into the box, and watch the prefetch request trigger <strong>only after</strong> the link enters visibility!
          </p>
        </div>

        {/* Scroll Box */}
        <div className="h-44 overflow-y-auto border border-dashed border-purple-300 dark:border-purple-800 rounded-xl p-4 bg-white dark:bg-zinc-900 space-y-4">
          <p className="text-xs text-zinc-400">
            👇 Scroll down inside this container to reveal the hidden link below...
          </p>
          <div className="h-64 flex items-center justify-center text-zinc-300 dark:text-zinc-700 text-xs font-mono">
            [ Spacer: Link is currently OUTSIDE the viewport ]
          </div>
          <div className="p-4 rounded-lg bg-purple-100 dark:bg-purple-900/50 border border-purple-300 dark:border-purple-700 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-purple-900 dark:text-purple-200">
                🎯 Hidden Target Link
              </p>
              <p className="text-[11px] text-purple-700 dark:text-purple-300">
                You just scrolled this link into the viewport! Next.js detected it via IntersectionObserver and prefetched it now.
              </p>
            </div>
            <Link
              href="/navigation/prefetching/fast-target"
              prefetch={true}
              className="px-3 py-1.5 text-xs font-bold rounded-md bg-purple-600 hover:bg-purple-700 text-white transition whitespace-nowrap"
            >
              Open Link &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* SECTION 3: Programmatic Prefetching */}
      <PrefetchController />
    </div>
  );
}
