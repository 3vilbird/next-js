import Link from "next/link";

interface PostContent {
  title: string;
  date: string;
  readTime: string;
  content: string;
}

const SAMPLE_POSTS: Record<string, PostContent> = {
  "nextjs-crash-course": {
    title: "Next.js Crash Course",
    date: "Nov 20, 2026",
    readTime: "4 min read",
    content:
      "Next.js App Router introduces a modern paradigm for building full-stack web applications with React Server Components, nested layouts, and streaming SSR.",
  },
  "mastering-tailwind-v4": {
    title: "Mastering Tailwind CSS v4",
    date: "Nov 18, 2026",
    readTime: "3 min read",
    content:
      "Tailwind v4 re-imagines configuration using modern CSS syntax (@theme inline) and builds instantly with native Turbopack support.",
  },
  "understanding-app-router": {
    title: "Understanding Dynamic Routes with [slug]",
    date: "Nov 15, 2026",
    readTime: "5 min read",
    content:
      "A dynamic segment folder like [slug] allows a single page component to serve multiple URLs by capturing path values and providing them via the params promise.",
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = SAMPLE_POSTS[slug];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 p-8 sm:p-16">
      <article className="max-w-2xl mx-auto space-y-6">
        <div>
          <Link
            href="/blog"
            className="text-sm text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
          >
            &larr; Back to Blog list
          </Link>
        </div>

        <header className="space-y-2 border-b border-zinc-200 dark:border-zinc-800 pb-6">
          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <span>{post?.date ?? "Just now"}</span>
            <span>&bull;</span>
            <span>{post?.readTime ?? "2 min read"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {post?.title ?? slug.replace(/-/g, " ")}
          </h1>

          <div className="inline-flex items-center gap-2 text-xs font-mono bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2.5 py-1 rounded-md">
            <span>Dynamic param slug:</span>
            <span className="font-bold text-blue-600 dark:text-blue-400">{slug}</span>
          </div>
        </header>

        <div className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-base">
          <p>
            {post?.content ??
              `This is dynamically generated content for the slug "${slug}". In a production application, you would query your database or headless CMS using this slug.`}
          </p>
        </div>

        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex justify-between">
          <Link
            href="/blog"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            &larr; View all articles
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
          >
            Go to Dashboard &rarr;
          </Link>
        </div>
      </article>
    </div>
  );
}
