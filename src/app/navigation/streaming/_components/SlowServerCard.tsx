// Async Server Component: Simulates a slow 2-second database query
export default async function SlowServerCard() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="p-6 rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/30 dark:bg-blue-950/20 space-y-4 shadow-xs">
      <div className="flex items-center justify-between">
        <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-blue-600 text-white uppercase tracking-wider">
          Server Component 1
        </span>
        <span className="text-xs font-mono text-blue-700 dark:text-blue-300">
          Resolved in ~2000ms
        </span>
      </div>

      <div>
        <h4 className="text-lg font-bold">PostgreSQL Query Streamed</h4>
        <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
          This component performed an async 2.0s database query. The rest of the page loaded immediately while this chunk was being streamed.
        </p>
      </div>

      <div className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono space-y-1">
        <div className="flex justify-between">
          <span className="text-zinc-500">Query Status:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">200 OK (Streamed)</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-500">Total Rows Retrieved:</span>
          <span className="font-semibold">14,290 records</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-500">Stream Status:</span>
          <span className="font-semibold text-emerald-600">Chunk Transferred</span>
        </div>
      </div>
    </div>
  );
}
