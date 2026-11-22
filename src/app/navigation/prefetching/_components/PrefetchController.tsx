"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PrefetchController() {
  const router = useRouter();
  const [status, setStatus] = useState<string>("Idle (Hover or click below to trigger programmatic prefetch)");
  const [prefetched, setPrefetched] = useState(false);

  const handleManualPrefetch = () => {
    setStatus("Calling router.prefetch('/navigation/prefetching/fast-target')...");
    router.prefetch("/navigation/prefetching/fast-target");
    setPrefetched(true);
    setStatus("Route prefetched into browser cache! Clicking the button below will now navigate with 0ms network latency.");
  };

  return (
    <div className="p-6 rounded-2xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/30 dark:bg-emerald-950/20 space-y-4">
      <div className="flex items-center justify-between">
        <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-emerald-600 text-white uppercase tracking-wider">
          Programmatic Prefetching API
        </span>
        <span className="text-xs font-mono text-zinc-500">router.prefetch()</span>
      </div>

      <div>
        <h4 className="font-bold text-base">Imperative Warm-up with useRouter()</h4>
        <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
          In addition to declarative <code>&lt;Link&gt;</code> prefetching, you can prefetch routes programmatically before a user even moves their cursor over a link (e.g. on mouse hover over a dropdown, or based on predictive analytics).
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleManualPrefetch}
          className="px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition"
        >
          🚀 1. Trigger router.prefetch()
        </button>

        <button
          type="button"
          onClick={() => router.push("/navigation/prefetching/fast-target")}
          className={`px-4 py-2 text-xs font-semibold rounded-lg border transition ${
            prefetched
              ? "bg-white dark:bg-zinc-900 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold"
              : "bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400"
          }`}
        >
          2. Navigate to Fast Target &rarr;
        </button>
      </div>

      <div className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-300">
        Status: <span className="font-medium text-emerald-600 dark:text-emerald-400">{status}</span>
      </div>
    </div>
  );
}
