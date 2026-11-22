export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1">
          Detailed metrics and traffic analysis for your application.
        </p>
      </div>

      <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
        <h2 className="text-lg font-semibold mb-4">Traffic Performance</h2>
        <div className="h-48 flex items-center justify-center rounded-lg border border-dashed border-zinc-200 dark:border-zinc-800 text-zinc-400 text-sm">
          Analytics chart placeholder
        </div>
      </div>
    </div>
  );
}
