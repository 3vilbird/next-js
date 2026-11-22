import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1">
          Welcome to your dashboard overview.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black shadow-xs">
          <p className="text-sm font-medium text-zinc-500">Total Users</p>
          <p className="text-2xl font-bold mt-2">1,248</p>
        </div>
        <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black shadow-xs">
          <p className="text-sm font-medium text-zinc-500">Active Sessions</p>
          <p className="text-2xl font-bold mt-2">412</p>
        </div>
        <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black shadow-xs">
          <p className="text-sm font-medium text-zinc-500">Growth Rate</p>
          <p className="text-2xl font-bold mt-2 text-emerald-600 dark:text-emerald-400">+12.5%</p>
        </div>
      </div>

      <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
        <h2 className="text-lg font-semibold mb-2">Quick Navigation</h2>
        <div className="flex gap-4">
          <Link
            href="/dashboard/analytics"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            Go to Analytics &rarr;
          </Link>
          <Link
            href="/dashboard/settings"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            Go to Settings &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
