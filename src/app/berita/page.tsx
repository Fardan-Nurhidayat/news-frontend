import { Highlight } from "@/components/Higllight";
import { NewsList } from "./components/NewsList";
import newsData from "@/data/example.json";
import { NewsItem } from "@/types/data";

export const metadata = {
  title: "Berita Terkini - Berita Nasional & Internasional",
  description:
    "Liputan terpercaya, independen, dan mendalam seputar teknologi, bisnis, dan dinamika global.",
};

export default function NewsPage() {
  const highlightNews = newsData[0] as unknown as NewsItem;

  return (
    <main className="max-w-7xl mx-auto py-6 sm:py-8 space-y-10">
      {/* Editorial Header */}
      <header className="border-b-2 border-gray-900 dark:border-gray-100 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-sans font-semibold tracking-widest text-red-700 dark:text-red-400 uppercase">
              Edisi Harian
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-gray-900 dark:text-gray-100">
              Warta Berita
            </h1>
          </div>
          <div className="text-xs font-sans text-gray-500 dark:text-gray-400">
            {new Date().toLocaleDateString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>
      </header>

      {/* Featured Highlight Article */}
      <section aria-labelledby="featured-news-title">
        <h2 id="featured-news-title" className="sr-only">
          Berita Utama
        </h2>
        <Highlight news={highlightNews} />
      </section>

      {/* News Stream & Search */}
      <section aria-labelledby="latest-news-title" className="pt-4">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2.5 h-2.5 bg-red-700 rounded-full" aria-hidden="true" />
          <h2
            id="latest-news-title"
            className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-100 tracking-tight"
          >
            Liputan & Berita Terkini
          </h2>
        </div>
        <NewsList />
      </section>
    </main>
  );
}
