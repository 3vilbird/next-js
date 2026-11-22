"use client";

// This is a Client Component.
// The 'use client' directive creates a boundary where React hydrates interactivity in the browser.

import { useState, useEffect, useSyncExternalStore } from "react";

interface InteractiveClientCounterProps {
  initialServerCount?: number;
  serverGeneratedTime?: string;
}

const emptySubscribe = () => () => {};

export default function InteractiveClientCounter({
  initialServerCount = 10,
  serverGeneratedTime = "N/A",
}: InteractiveClientCounterProps) {
  const [count, setCount] = useState(initialServerCount);
  const [browserTime, setBrowserTime] = useState<string>("Initializing...");

  // Detect hydration without causing cascading setState renders in effect
  const isHydrated = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setBrowserTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 rounded-2xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/20 space-y-4">
      <div className="flex items-center justify-between">
        <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-emerald-600 text-white tracking-wide uppercase">
          Client Component (&apos;use client&apos;)
        </span>
        <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-300">
          <span
            className={`w-2 h-2 rounded-full ${
              isHydrated ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
            }`}
          />
          {isHydrated ? "Hydrated & Interactive" : "Prerendered (SSR)"}
        </span>
      </div>

      <div>
        <h4 className="text-lg font-bold">Interactive Client Island</h4>
        <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
          This component pre-renders on the server for initial HTML, then hydrates in the browser so users can click, update state, and use browser APIs.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Counter State:</span>
          <span className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">
            {count}
          </span>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setCount((prev) => prev - 1)}
            className="flex-1 py-1.5 text-sm font-semibold rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition"
          >
            - Decrement
          </button>
          <button
            type="button"
            onClick={() => setCount((prev) => prev + 1)}
            className="flex-1 py-1.5 text-sm font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition"
          >
            + Increment
          </button>
        </div>

        <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 text-xs font-mono text-zinc-500 space-y-1">
          <p>Initial server count prop: {initialServerCount}</p>
          <p>Server generation prop: {serverGeneratedTime}</p>
          <p className="text-emerald-600 dark:text-emerald-400 font-semibold">
            Live browser clock: {browserTime}
          </p>
        </div>
      </div>
    </div>
  );
}
