export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1">
          Configure dashboard preferences and application options.
        </p>
      </div>

      <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Dashboard Title</label>
          <input
            type="text"
            defaultValue="My Basic Dashboard"
            className="w-full max-w-md px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-zinc-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Notification Email</label>
          <input
            type="email"
            defaultValue="admin@example.com"
            className="w-full max-w-md px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-zinc-500"
          />
        </div>
      </div>
    </div>
  );
}
