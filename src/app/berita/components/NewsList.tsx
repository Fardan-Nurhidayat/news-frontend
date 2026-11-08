"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { NewsItem } from "@/types/data";
import NewsCard from "./NewsCard";

const CATEGORIES = [
  { id: "all", label: "Semua" },
  { id: "technology", label: "Teknologi" },
  { id: "business", label: "Bisnis" },
  { id: "science", label: "Sains" },
  { id: "health", label: "Kesehatan" },
  { id: "sports", label: "Olahraga" },
  { id: "entertainment", label: "Hiburan" },
  { id: "general", label: "Umum" },
];

async function fetchNewsArticles(topic: string, query: string): Promise<NewsItem[]> {
  const params = new URLSearchParams();
  if (topic && topic !== "all") {
    params.set("category", topic);
  }
  if (query.trim()) {
    params.set("q", query.trim());
  }

  const url = `/api/news${params.toString() ? `?${params.toString()}` : ""}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Gagal memuat berita (${res.status})`);
  }
  const data = await res.json();
  return data as NewsItem[];
}

export function NewsList() {
  const [searchInput, setSearchInput] = useState("");
  const [activeQuery, setActiveQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string>("all");

  const {
    data: articles = [],
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery<NewsItem[]>({
    queryKey: ["news", selectedTopic, activeQuery],
    queryFn: () => fetchNewsArticles(selectedTopic, activeQuery),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveQuery(searchInput.trim());
  };

  const handleReset = () => {
    setSearchInput("");
    setActiveQuery("");
    setSelectedTopic("all");
  };

  return (
    <div className="space-y-6">
      {/* Search and Category Filter Toolbar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-gray-200 dark:border-gray-700">
        <form onSubmit={handleSearchSubmit} className="relative flex-1 max-w-md">
          <input
            type="search"
            value={searchInput}
            onChange={e => {
              setSearchInput(e.target.value);
              if (e.target.value === "" && activeQuery !== "") {
                setActiveQuery("");
              }
            }}
            placeholder="Ketik topik berita lalu tekan Enter..."
            aria-label="Pencarian berita"
            className="w-full px-4 py-2 pl-10 pr-20 text-sm font-sans bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400"
          />
          <svg
            className="w-4 h-4 text-gray-400 absolute left-3.5 top-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <button
            type="submit"
            className="absolute right-1.5 top-1.5 px-2.5 py-1 text-xs font-sans font-medium bg-red-700 text-white rounded hover:bg-red-800 transition-colors cursor-pointer"
          >
            Cari
          </button>
        </form>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedTopic(cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-sans font-medium whitespace-nowrap transition-colors cursor-pointer ${
                selectedTopic === cat.id
                  ? "bg-red-700 text-white dark:bg-red-600"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs font-sans text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <span>
            {isLoading ? "Memuat artikel..." : `Ditemukan ${articles.length} artikel`}
          </span>
          {isFetching && !isLoading && (
            <span className="inline-block w-2 h-2 rounded-full bg-red-600 animate-ping" />
          )}
        </div>
        {(activeQuery || selectedTopic !== "all") && (
          <button
            onClick={handleReset}
            type="button"
            className="text-red-700 dark:text-red-400 hover:underline font-medium cursor-pointer"
          >
            Reset filter
          </button>
        )}
      </div>

      {/* Loading Skeletons */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(n => (
            <div
              key={n}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 p-4 space-y-4 animate-pulse"
            >
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-full" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
            </div>
          ))}
        </div>
      ) : isError ? (
        /* Error State */
        <div className="rounded-lg border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/40 p-8 text-center my-8">
          <h3 className="text-lg font-bold font-serif text-red-900 dark:text-red-200 mb-2">
            Gagal Memuat Berita
          </h3>
          <p className="text-sm font-sans text-red-700 dark:text-red-400 mb-4">
            {error instanceof Error ? error.message : "Terjadi kendala saat menghubungi News API."}
          </p>
          <button
            onClick={() => refetch()}
            type="button"
            className="px-4 py-2 bg-red-700 text-white rounded-md text-sm font-sans font-medium hover:bg-red-800 cursor-pointer"
          >
            Muat Ulang
          </button>
        </div>
      ) : articles.length === 0 ? (
        /* Empty State */
        <div className="text-center py-16 border border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-8">
          <svg
            className="w-12 h-12 mx-auto text-gray-400 mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
          <h3 className="text-lg font-bold font-serif text-gray-900 dark:text-gray-100 mb-1">
            Tidak Ada Berita Ditemukan
          </h3>
          <p className="text-sm font-sans text-gray-500 dark:text-gray-400 mb-4 max-w-sm mx-auto">
            Tidak ditemukan artikel yang sesuai dengan kriteria Anda. Coba kata kunci lain atau pilih kategori berbeda.
          </p>
          <button
            onClick={handleReset}
            type="button"
            className="px-4 py-2 bg-red-700 text-white rounded-md text-sm font-sans font-medium hover:bg-red-800 cursor-pointer"
          >
            Tampilkan Semua Berita
          </button>
        </div>
      ) : (
        /* News Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <NewsCard key={`${article.link}-${idx}`} news={article} priority={idx < 3} />
          ))}
        </div>
      )}
    </div>
  );
}

export default NewsList;
