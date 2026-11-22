import Link from "next/link";
import PrefetchController from "./_components/PrefetchController";

export default function PrefetchingLabPage() {
  return (
    <div className="space-y-8">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
          Module 2: Route Prefetching &amp; Router Cache
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight mt-2">
          Route Prefetching Mechanics
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2 max-w-3xl leading-relaxed">
          Next.js prefetches routes before a user navigates. Inspect your browser DevTools (Network tab &rarr; Filter: <code className="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 rounded">Fetch/XHR</code>) to observe RSC payload requests initiating automatically as links enter the viewport.
        </p>
      </div>

      {/* Interactive Link Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Link 1: Default / Auto */}
        <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col justify-between space-y-4 shadow-xs">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-zinc-500 uppercase">Case 1</span>
              <span className="text-xs font-mono bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded text-zinc-600 dark:text-zinc-300">
                Default (Auto)
              </span>
            </div>
            <h4 className="font-bold text-base mt-2">Viewport Prefetch</h4>
            <p className="text-xs text-zinc-500 mt-1">
              Prefetches static route segments or layout shells as soon as this link enters your browser viewport.
            </p>
          </div>
          <Link
            href="/navigation/prefetching/fast-target"
            className="block w-full py-2 text-center text-xs font-semibold rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 transition"
          >
            &lt;Link href=&quot;...&quot;&gt; Fast Target &rarr;
          </Link>
        </div>

        {/* Link 2: Explicit prefetch={true} */}
        <div className="p-5 rounded-xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/20 dark:bg-emerald-950/10 flex flex-col justify-between space-y-4 shadow-xs">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-600 uppercase">Case 2</span>
              <span className="text-xs font-mono bg-emerald-100 dark:bg-emerald-900/60 px-2 py-0.5 rounded text-emerald-700 dark:text-emerald-300">
                prefetch=&#123;true&#125;
              </span>
            </div>
            <h4 className="font-bold text-base mt-2">Eager Full Prefetch</h4>
            <p className="text-xs text-zinc-500 mt-1">
              Forces Next.js to prefetch all data for the route, even dynamic parameters when applicable.
            </p>
          </div>
          <Link
            href="/navigation/prefetching/fast-target"
            prefetch={true}
            className="block w-full py-2 text-center text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition"
          >
            &lt;Link prefetch=&#123;true&#125;&gt; &rarr;
          </Link>
        </div>

        {/* Link 3: Explicit prefetch={false} */}
        <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col justify-between space-y-4 shadow-xs">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-600 uppercase">Case 3</span>
              <span className="text-xs font-mono bg-amber-100 dark:bg-amber-950 px-2 py-0.5 rounded text-amber-700 dark:text-amber-300">
                prefetch=&#123;false&#125;
              </span>
            </div>
            <h4 className="font-bold text-base mt-2">Disabled Prefetch</h4>
            <p className="text-xs text-zinc-500 mt-1">
              Disables automatic background fetching. The route payload is requested only when the user hovers or clicks.
            </p>
          </div>
          <Link
            href="/navigation/prefetching/dynamic-target"
            prefetch={false}
            className="block w-full py-2 text-center text-xs font-semibold rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 transition"
          >
            &lt;Link prefetch=&#123;false&#125;&gt; &rarr;
          </Link>
        </div>
      </div>

      {/* Programmatic Prefetching Interactive Component */}
      <PrefetchController />

      {/* How to inspect guide */}
      <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3">
        <h3 className="text-base font-bold">🔍 How to Verify Prefetching in DevTools</h3>
        <ol className="list-decimal list-inside text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 leading-relaxed">
          <li>Press <kbd className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-mono">F12</kbd> to open Developer Tools and go to the <strong>Network</strong> tab.</li>
          <li>Select the <strong>Fetch/XHR</strong> filter.</li>
          <li>Scroll this page up and down: in a production build (<code className="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 rounded">npm run build &amp;&amp; npm start</code>), you will see background requests with the <code className="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 rounded">RSC: 1</code> header downloading the route payload ahead of time.</li>
          <li>Click any prefetched link: notice how the page displays immediately without waiting for a server roundtrip!</li>
        </ol>
      </div>
    </div>
  );
}
