import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black text-zinc-900 dark:text-zinc-100 p-6">
      <main className="w-full max-w-xl p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Next.js App Router Showcase</h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">
            Choose a module below to test real-world routing and rendering architectures:
          </p>
        </div>

        <div className="space-y-3">
          {/* New Navigation Architecture Lab */}
          <Link
            href="/navigation"
            className="block p-4 rounded-xl border-2 border-blue-500/40 bg-blue-50/20 dark:bg-blue-950/20 hover:border-blue-500 dark:hover:border-blue-400 transition-all"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-bold text-base text-blue-600 dark:text-blue-400">
                    🔬 Navigation & Architecture Lab
                  </h2>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-blue-600 text-white">
                    New POCs
                  </span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                  Interactive POCs for SSR & RSC, Prefetching mechanics, and Granular + Page-Level Streaming with Server and Client Components.
                </p>
              </div>
              <span className="text-blue-500">&rarr;</span>
            </div>
          </Link>

          {/* Dashboard */}
          <Link
            href="/dashboard"
            className="block p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-base">Dashboard</h2>
                <p className="text-xs text-zinc-500 mt-0.5">
                  Folder routing with nested layout & subpages (/dashboard, /analytics, /settings)
                </p>
              </div>
              <span className="text-zinc-400">&rarr;</span>
            </div>
          </Link>

          {/* Blog */}
          <Link
            href="/blog"
            className="block p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-base">Blog</h2>
                <p className="text-xs text-zinc-500 mt-0.5">
                  Dynamic routing using [slug] (/blog, /blog/[slug])
                </p>
              </div>
              <span className="text-zinc-400">&rarr;</span>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
