import { Suspense } from "react";
import Link from "next/link";
import { SkeletonCard } from "./_components/SkeletonCards";
import SlowServerCard from "./_components/SlowServerCard";
import VerySlowServerCard from "./_components/VerySlowServerCard";
import StreamedClientCard from "./_components/StreamedClientCard";

export default function ComponentStreamingPage() {
  return (
    <div className="space-y-8">
      {/* Fast Shell Header - Renders immediately at 0ms */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
          Module 3A: Granular Component-Level Streaming
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight">
          Granular Component Streaming with React &lt;Suspense&gt;
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-3xl leading-relaxed">
          The container shell you are reading rendered <strong>instantly at 0ms</strong>. Below are 3 independent components: two async <strong>Server Components</strong> simulating slow backend operations (2.0s &amp; 3.5s) and one interactive <strong>Client Component</strong>, streaming over HTTP Chunked Transfer Encoding as they finish.
        </p>
      </div>

      {/* Instant Shell Status Bar */}
      <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-between text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Static Shell: <strong>Delivered immediately (0ms wait)</strong></span>
        </div>
        <Link
          href="/navigation/streaming/page-level"
          className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
        >
          Want to see page-level streaming with loading.tsx? Click here &rarr;
        </Link>
      </div>

      {/* 3 Independent Streaming Boundaries */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Boundary 1: Slow Server Component (~2s) */}
        <Suspense fallback={<SkeletonCard title="Async Server Component 1 (~2s)" />}>
          <SlowServerCard />
        </Suspense>

        {/* Boundary 2: Very Slow Server Component (~3.5s) */}
        <Suspense fallback={<SkeletonCard title="Async Server Component 2 (~3.5s)" />}>
          <VerySlowServerCard />
        </Suspense>

        {/* Boundary 3: Streamed Client Component */}
        <Suspense fallback={<SkeletonCard title="Interactive Client Island" />}>
          <StreamedClientCard />
        </Suspense>
      </div>

      {/* Architectural Insights */}
      <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3">
        <h3 className="text-base font-bold">💡 Why Component-Level Streaming is Superior</h3>
        <ul className="list-disc list-inside text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 leading-relaxed">
          <li><strong>No Waterfalls:</strong> Server Component 1 and Server Component 2 fetch in parallel on the server. Slower components never block faster ones.</li>
          <li><strong>Immediate Interactivity:</strong> The user can read the shell, click navigation links, and interact with already-streamed components without waiting for the slow API to finish.</li>
          <li><strong>Selective Hydration:</strong> React prioritizes hydrating components that the user clicks on first, rather than waiting for the entire page&apos;s JavaScript.</li>
        </ul>
      </div>
    </div>
  );
}
