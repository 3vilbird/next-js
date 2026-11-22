// This is a React Server Component (RSC)
// Notice there is NO 'use client' directive. It executes strictly on the server.

interface DatabaseRecord {
  id: string;
  source: string;
  simulatedQueryMs: number;
  serverNodeVersion: string;
}

async function simulateDatabaseQuery(): Promise<DatabaseRecord> {
  // Simulate network/database query latency
  await new Promise((resolve) => setTimeout(resolve, 9000));

  return {
    id: "rec_98234a71",
    source: "PostgreSQL Database (Direct Connection via Node.js)",
    simulatedQueryMs: 80,
    serverNodeVersion: process.version,
  };
}

export default async function ServerCard() {
  const dbData = await simulateDatabaseQuery();

  return (
    <div className="p-6 rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/40 dark:bg-blue-950/20 space-y-4">
      <div className="flex items-center justify-between">
        <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-blue-600 text-white tracking-wide uppercase">
          Server Component (RSC)
        </span>
        <span className="text-xs font-mono text-zinc-500">
          Executes on Node.js Server Only
        </span>
      </div>

      <div>
        <h4 className="text-lg font-bold">Secure Server Execution</h4>
        <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
          This component directly queried a simulated database and accessed server-side APIs. None of its internal fetch logic or dependencies are added to the client JavaScript bundle.
        </p>
      </div>

      <div className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono space-y-1.5">
        <div className="flex justify-between">
          <span className="text-zinc-400">Record ID:</span>
          <span className="font-semibold">{dbData.id}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-400">Data Source:</span>
          <span className="font-semibold text-right">{dbData.source}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-400">Simulated Latency:</span>
          <span className="font-semibold">{dbData.simulatedQueryMs} ms</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-400">Server Node Version:</span>
          <span className="font-semibold">{dbData.serverNodeVersion}</span>
        </div>
      </div>
    </div>
  );
}
