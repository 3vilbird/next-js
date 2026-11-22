"use client";

import { useState } from "react";

// Client Component ('use client') rendered inside a Suspense boundary
export default function StreamedClientCard() {
  const [likes, setLikes] = useState(128);
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className="p-6 rounded-2xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/30 dark:bg-emerald-950/20 space-y-4 shadow-xs">
      <div className="flex items-center justify-between">
        <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-emerald-600 text-white uppercase tracking-wider">
          Client Component (&apos;use client&apos;)
        </span>
        <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
          Hydrated &amp; Interactive
        </span>
      </div>

      <div>
        <h4 className="text-lg font-bold">Interactive Client Streamed Island</h4>
        <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
          Client Components can also be wrapped in &lt;Suspense&gt;! Next.js streams their initial HTML chunk and then hydrates their interactive handlers without blocking the rest of the application.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs text-zinc-500">Live Client State</p>
          <p className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400">
            {likes} Likes
          </p>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setLikes((prev) => prev + 1)}
            className="px-3 py-1.5 text-xs font-bold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition"
          >
            👍 Like
          </button>
          <button
            type="button"
            onClick={() => setBookmarked((prev) => !prev)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition ${
              bookmarked
                ? "bg-amber-100 border-amber-400 text-amber-800 dark:bg-amber-950 dark:border-amber-700 dark:text-amber-300"
                : "bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300"
            }`}
          >
            {bookmarked ? "★ Saved" : "☆ Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
