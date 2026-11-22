// Async Server Component: Simulates a very slow 3.5-second external microservice / API call
export default async function VerySlowServerCard() {
  await new Promise((resolve) => setTimeout(resolve, 3500));

  return (
    <div className="p-6 rounded-2xl border border-purple-200 dark:border-purple-900/60 bg-purple-50/30 dark:bg-purple-950/20 space-y-4 shadow-xs">
      <div className="flex items-center justify-between">
        <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-purple-600 text-white uppercase tracking-wider">
          Server Component 2
        </span>
        <span className="text-xs font-mono text-purple-700 dark:text-purple-300">
          Resolved in ~3500ms
        </span>
      </div>

      <div>
        <h4 className="text-lg font-bold">Slow Third-Party API Streamed</h4>
        <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
          This component waited 3.5s for an external AI / payment gateway API. In traditional SSR, this single component would freeze the entire page!
        </p>
      </div>

      <div className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono space-y-1">
        <div className="flex justify-between">
          <span className="text-zinc-500">API Provider:</span>
          <span className="font-semibold">Stripe / OpenAI Gateway</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-500">Simulated Latency:</span>
          <span className="font-semibold text-purple-600 dark:text-purple-400">3,500 ms</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-500">Stream Status:</span>
          <span className="font-semibold text-emerald-600">Chunk Transferred</span>
        </div>
      </div>
    </div>
  );
}
