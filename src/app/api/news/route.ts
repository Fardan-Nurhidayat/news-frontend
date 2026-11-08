import { NextRequest, NextResponse } from "next/server";
import fallbackNews from "@/data/example.json";
import { NewsItem } from "@/types/data";

interface NewsApiArticle {
  source: { id: string | null; name: string };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

interface NewsApiResponse {
  status: string;
  totalResults?: number;
  articles?: NewsApiArticle[];
  message?: string;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.trim();
  const category = searchParams.get("category")?.trim();
  const page = searchParams.get("page") || "1";

  const apiKey = process.env.NEWSAPI_KEY;

  if (!apiKey) {
    // If no API key configured, use fallback example dataset
    const filtered = filterFallback(q, category);
    return NextResponse.json(filtered);
  }

  try {
    let endpoint = "";
    if (q) {
      // Use /everything endpoint when searching for keywords
      endpoint = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
        q
      )}&sortBy=publishedAt&pageSize=24&page=${page}&apiKey=${apiKey}`;
    } else if (category && category !== "all") {
      // Use /top-headlines when browsing a specific category
      endpoint = `https://newsapi.org/v2/top-headlines?country=us&category=${encodeURIComponent(
        category
      )}&pageSize=24&page=${page}&apiKey=${apiKey}`;
    } else {
      // Default top headlines
      endpoint = `https://newsapi.org/v2/top-headlines?country=us&pageSize=24&page=${page}&apiKey=${apiKey}`;
    }

    const res = await fetch(endpoint, {
      headers: {
        "User-Agent": "NewsFrontend/1.0",
      },
      next: { revalidate: 300 }, // Next.js 16 cache revalidation 5 mins
    });

    if (!res.ok) {
      console.warn(`NewsAPI responded with status ${res.status}, falling back to local dataset`);
      const fallback = filterFallback(q, category);
      return NextResponse.json(fallback);
    }

    const data: NewsApiResponse = await res.json();

    if (data.status !== "ok" || !data.articles || data.articles.length === 0) {
      const fallback = filterFallback(q, category);
      return NextResponse.json(fallback);
    }

    // Filter out [Removed] articles and normalize to NewsItem
    const normalized: NewsItem[] = data.articles
      .filter(a => a.title && a.title !== "[Removed]" && a.url)
      .map(a => {
        let hostname = "";
        try {
          hostname = new URL(a.url).hostname;
        } catch {
          hostname = "";
        }

        const faviconUrl = hostname
          ? `https://www.google.com/s2/favicons?domain=${hostname}&sz=32`
          : "";

        return {
          title: a.title,
          link: a.url,
          snippet: a.description || (a.content ? a.content.slice(0, 160) : ""),
          photo_url: a.urlToImage || undefined,
          thumbnail_url: a.urlToImage || undefined,
          published_datetime_utc: a.publishedAt,
          authors: a.author ? [a.author] : [],
          source_url: a.url,
          source_name: a.source?.name || hostname || "Warta Berita",
          source_logo_url: undefined,
          source_favicon_url: faviconUrl || undefined,
          source_publication_id: a.source?.id || undefined,
          related_topics: category && category !== "all"
            ? [{ topic_id: category, topic_name: category.charAt(0).toUpperCase() + category.slice(1) }]
            : undefined,
        };
      });

    return NextResponse.json(normalized, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error("Error fetching NewsAPI:", error);
    const fallback = filterFallback(q, category);
    return NextResponse.json(fallback);
  }
}

function filterFallback(q?: string, category?: string): NewsItem[] {
  let list = fallbackNews as unknown as NewsItem[];

  if (category && category !== "all") {
    list = list.filter(item =>
      item.related_topics?.some(t =>
        t.topic_name.toLowerCase().includes(category.toLowerCase())
      )
    );
  }

  if (q) {
    const query = q.toLowerCase();
    list = list.filter(
      item =>
        item.title.toLowerCase().includes(query) ||
        item.snippet.toLowerCase().includes(query) ||
        item.source_name.toLowerCase().includes(query)
    );
  }

  return list;
}
