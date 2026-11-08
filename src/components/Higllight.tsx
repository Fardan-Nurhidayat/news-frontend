"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HighlightProps } from "@/types/data";

export function Highlight({ news }: HighlightProps) {
  const [imgError, setImgError] = useState(false);

  if (!news) return null;

  const authorsText = news.authors
    ?.map(author => (typeof author === "string" ? author : author.name))
    .filter(Boolean)
    .join(", ");

  const formattedDate = news.published_datetime_utc
    ? new Date(news.published_datetime_utc).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  const imageUrl = !imgError && (news.photo_url || news.thumbnail_url);

  return (
    <article className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm transition-shadow hover:shadow-md">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[340px] bg-gray-100 dark:bg-gray-900">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={news.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-gray-400 dark:text-gray-500">
              <svg
                className="w-16 h-16 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              <span className="text-xs uppercase tracking-wider font-sans">
                {news.source_name || "Berita Terkini"}
              </span>
            </div>
          )}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-sans font-semibold tracking-wide bg-red-700 text-white shadow-sm">
              Berita Utama
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-sans text-gray-500 dark:text-gray-400">
              {news.source_favicon_url ? (
                <Image
                  src={news.source_favicon_url}
                  alt=""
                  width={16}
                  height={16}
                  className="rounded-full"
                  unoptimized
                />
              ) : null}
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                {news.source_name}
              </span>
              <span>•</span>
              <time dateTime={news.published_datetime_utc}>{formattedDate}</time>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-serif leading-tight text-gray-900 dark:text-gray-50 hover:text-red-700 dark:hover:text-red-400 transition-colors">
              <a
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="focus:outline-none focus:underline"
              >
                {news.title}
              </a>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 line-clamp-4 leading-relaxed font-sans">
              {news.snippet}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
            {authorsText ? (
              <p className="text-xs font-sans text-gray-500 dark:text-gray-400 mb-3">
                Penulis: <span className="text-gray-700 dark:text-gray-300 font-medium">{authorsText}</span>
              </p>
            ) : null}

            {news.related_topics && news.related_topics.length > 0 ? (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {news.related_topics.slice(0, 3).map(topic => (
                  <span
                    key={topic.topic_id}
                    className="inline-block px-2.5 py-0.5 rounded text-xs font-sans bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                  >
                    #{topic.topic_name}
                  </span>
                ))}
              </div>
            ) : null}

            <a
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-sans font-semibold text-red-700 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 rounded"
              aria-label={`Baca selengkapnya mengenai ${news.title}`}
            >
              Baca Selengkapnya
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Highlight;
