import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black flex flex-col justify-between p-6">
        <div>
          <div className="mb-8">
            <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200">
              &larr; Back to Home
            </Link>
            <h2 className="text-xl font-bold mt-2">Dashboard</h2>
          </div>

          <nav className="flex flex-col gap-2">
            <Link
              href="/dashboard"
              className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              Overview
            </Link>
            <Link
              href="/dashboard/analytics"
              className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              Analytics
            </Link>
            <Link
              href="/dashboard/settings"
              className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              Settings
            </Link>
          </nav>
        </div>

        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-4 text-xs text-zinc-400">
          Next.js App Router (src/app)
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-4xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
