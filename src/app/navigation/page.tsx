import Link from "next/link";

export default function NavigationOverviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight">Navigation &amp; Rendering Lab</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-base max-w-3xl">
          This laboratory contains interactive Proof-of-Concepts (POCs) demonstrating the 3 core pillars of Next.js App Router performance. Each module explores practical patterns, technical trade-offs, and under-the-hood mechanics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Module 1 */}
        <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col justify-between shadow-xs">
          <div className="space-y-3">
            <span className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">
              Module 1
            </span>
            <h3 className="text-xl font-bold">Server Rendering &amp; RSC</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Experience the dual-execution model: async Server Components executing strictly on the backend (zero bundle size) passing server-fetched props to interactive Client Components.
            </p>
          </div>
          <Link
            href="/navigation/ssr"
            className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            Explore SSR &amp; RSC POC &rarr;
          </Link>
        </div>

        {/* Module 2 */}
        <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col justify-between shadow-xs">
          <div className="space-y-3">
            <span className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
              Module 2
            </span>
            <h3 className="text-xl font-bold">Prefetching Lab</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Test viewport prefetching, eager prefetching (<code>prefetch=&#123;true&#125;</code>), disabled prefetching (<code>prefetch=&#123;false&#125;</code>), and programmatic router prefetch with network monitoring instructions.
            </p>
          </div>
          <Link
            href="/navigation/prefetching"
            className="mt-6 inline-flex items-center text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            Explore Prefetching POC &rarr;
          </Link>
        </div>

        {/* Module 3 */}
        <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col justify-between shadow-xs">
          <div className="space-y-3">
            <span className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300">
              Module 3
            </span>
            <h3 className="text-xl font-bold">Streaming Lab</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Observe HTTP chunked streaming in action. Test granular component-level streaming with independent &lt;Suspense&gt; boundaries as well as page-level streaming via <code>loading.tsx</code>.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-1.5">
            <Link
              href="/navigation/streaming"
              className="text-sm font-semibold text-purple-600 dark:text-purple-400 hover:underline"
            >
              Component-Level Streaming &rarr;
            </Link>
            <Link
              href="/navigation/streaming/page-level"
              className="text-sm font-semibold text-purple-600 dark:text-purple-400 hover:underline"
            >
              Page-Level (<code>loading.tsx</code>) &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
