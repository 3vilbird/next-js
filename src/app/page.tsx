import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black text-zinc-900 dark:text-zinc-100 p-6">
      <main className="w-full max-w-xl p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-6">
        <div>
          <h1 className="text-3xl font-extrabold">Next.js App Router Demo</h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">
            Explore the newly created route structures below:
          </p>
        </div>

        <div className="space-y-3">
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
