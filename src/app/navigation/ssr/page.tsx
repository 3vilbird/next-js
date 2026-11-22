import ServerCard from "./_components/ServerCard";
import InteractiveClientCounter from "./_components/InteractiveClientCounter";
import { connection } from "next/server";

export const instant = false;

export default async function SSRModulePage() {
  await connection();
  const pageRenderTimestamp = new Date().toLocaleTimeString();

  return (
    <div className="space-y-8">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
          Module 1: Server Rendering & Component Interoperability
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight mt-2">
          Server-Side Rendering (SSR) & React Server Components (RSC)
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2 max-w-3xl leading-relaxed">
          In Next.js App Router, Server Components and Client Components work together in harmony. Server Components handle heavy computation, database connections, and secure secrets. Client Components provide rich client-side interactivity where needed.
        </p>
      </div>

      {/* Side-by-Side Demo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ServerCard />
        <InteractiveClientCounter
          initialServerCount={40}
          serverGeneratedTime={pageRenderTimestamp}
        />
      </div>

      {/* Deep Dive Architecture Card */}
      <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-4">
        <h3 className="text-lg font-bold">Key Architectural Concepts to Master</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 space-y-1.5">
            <h4 className="font-bold text-sm text-blue-600 dark:text-blue-400">1. Zero Bundle Size</h4>
            <p className="text-zinc-600 dark:text-zinc-400">
              Dependencies imported only into Server Components (e.g. database drivers, markdown parsers, heavy cryptography) are never downloaded by the browser.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 space-y-1.5">
            <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400">2. Passing Props across the Boundary</h4>
            <p className="text-zinc-600 dark:text-zinc-400">
              Server Components can pass serializable props (strings, numbers, objects, arrays) directly to Client Components. Notice how the initial counter value (42) came from the server.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 space-y-1.5">
            <h4 className="font-bold text-sm text-purple-600 dark:text-purple-400">3. Composition Pattern</h4>
            <p className="text-zinc-600 dark:text-zinc-400">
              You can nest Server Components inside Client Components as <code className="font-mono bg-zinc-200 dark:bg-zinc-700 px-1 rounded">children</code> props without turning the children into Client Components!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
