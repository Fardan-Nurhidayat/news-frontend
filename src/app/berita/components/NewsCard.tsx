"use client";

import React, { useState } from "react";
import Image from "next/image";
import { NewsCardProps } from "@/types/data";

export function NewsCard({ news, priority = false }: NewsCardProps) {
  const [imgError, setImgError] = useState(false);

  if (!news) return null;

  const authorsText = news.authors
    ?.map(author => (typeof author === "string" ? author : author.name))
    .filter(Boolean)
    .join(", ");

  const formattedDate = news.published_datetime_utc
    ? new Date(news.published_datetime_utc).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "";

  const imageUrl = !imgError && (news.thumbnail_url || news.photo_url);

  return (
    <article className="group flex flex-col h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600">
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={news.title}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-gray-400 dark:text-gray-500">
            <svg
              className="w-10 h-10 mb-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
              />
            </svg>
            <span className="text-xs font-sans uppercase tracking-wider">
              {news.source_name || "Berita"}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-2 mb-2 text-xs font-sans text-gray-500 dark:text-gray-400">
          {news.source_favicon_url ? (
            <Image
              src={news.source_favicon_url}
              alt=""
              width={14}
              height={14}
              className="rounded-full"
              unoptimized
            />
          ) : null}
          <span className="font-semibold text-gray-700 dark:text-gray-300">
            {news.source_name}
          </span>
          {formattedDate ? (
            <>
              <span>•</span>
              <time dateTime={news.published_datetime_utc}>{formattedDate}</time>
            </>
          ) : null}
        </div>

        <h3 className="text-lg font-bold font-serif leading-snug text-gray-900 dark:text-gray-100 group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors">
          <a
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none focus:underline"
          >
            {news.title}
          </a>
        </h3>

        <p className="mt-2 text-sm font-sans text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed flex-1">
          {news.snippet}
        </p>

        <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700 flex flex-col gap-2">
          {authorsText ? (
            <span className="text-xs font-sans text-gray-500 dark:text-gray-400 truncate">
              Oleh: {authorsText}
            </span>
          ) : null}

          <div className="flex items-center justify-between">
            {news.related_topics && news.related_topics.length > 0 ? (
              <span className="inline-block text-xs font-sans px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 max-w-[180px] truncate">
                #{news.related_topics[0].topic_name}
              </span>
            ) : <span />}

            <a
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-sans font-semibold text-red-700 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 focus:outline-none focus:underline"
              aria-label={`Baca artikel: ${news.title}`}
            >
              Baca
              <svg
                className="w-3.5 h-3.5 ml-0.5"
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

export default NewsCard;
