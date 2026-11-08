import React from "react";

export type Author = string | { name: string };

export type RelatedTopic = {
  topic_id: string;
  topic_name: string;
};

export type NewsItem = {
  title: string;
  link: string;
  snippet: string;
  photo_url?: string;
  thumbnail_url?: string;
  published_datetime_utc: string;
  authors: Author[];
  source_url: string;
  source_name: string;
  source_logo_url?: string;
  source_favicon_url?: string;
  source_publication_id?: string;
  related_topics?: RelatedTopic[];
};

export type NewsCardProps = {
  news: NewsItem;
  priority?: boolean;
};

export type HighlightProps = {
  news: NewsItem;
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
};
