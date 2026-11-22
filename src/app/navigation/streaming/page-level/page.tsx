import Link from "next/link";

// Async Server Component simulating a slow page-level fetch (2.2s)
export default async function PageLevelStreamingPage() {
  await new Promise((resolve) => setTimeout(resolve, 2200));

  return (
    <div className="max-w-3xl mx-auto space-y-6 py-6">
      <div className="flex items-center justify-between">
        <span className="px-3 py-1 text-xs font-bold rounded-full bg-purple-600 text-white uppercase tracking-wider">
          Page-Level Streaming Resolved
        </span>
        <span className="text-xs font-mono text-zinc-500">
          Render time: ~2200ms
        </span>
      </div>

      <div>
        <h2 className="text-3xl font-extrabold tracking-tight">
          Page-Level Streaming via <code className="font-mono text-purple-600 dark:text-purple-400">loading.tsx</code>
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2 leading-relaxed">
          When you opened or navigated to this page, Next.js immediately rendered the skeleton from <code className="font-mono bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-xs">src/app/navigation/streaming/page-level/loading.tsx</code>.
          Once this async page function finished its 2.2s data fetch, React automatically swapped in the real content!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <h4 className="text-sm font-semibold text-zinc-500">File Hierarchy</h4>
          <div className="mt-2 text-xs font-mono space-y-1 text-zinc-700 dark:text-zinc-300">
            <p>1. app/navigation/layout.tsx (persists)</p>
            <p>2. loading.tsx (shown instantly)</p>
            <p>3. page.tsx (swapped in when ready)</p>
          </div>
        </div>

        <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <h4 className="text-sm font-semibold text-zinc-500">HTTP Response</h4>
          <div className="mt-2 text-xs font-mono space-y-1 text-zinc-700 dark:text-zinc-300">
            <p>Status: 200 OK</p>
            <p>Transfer: Chunked (Streaming)</p>
            <p>Payload: Server Rendered</p>
          </div>
        </div>
      </div>

      <div className="pt-4 flex gap-4">
        <Link
          href="/navigation/streaming"
          className="text-sm font-semibold text-purple-600 dark:text-purple-400 hover:underline"
        >
          &larr; Back to Component-Level Streaming
        </Link>
        <Link
          href="/navigation"
          className="text-sm font-semibold text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          Overview &rarr;
        </Link>
      </div>
    </div>
  );
}
