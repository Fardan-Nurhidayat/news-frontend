export type NewsCardProps = {
  title: string;
  link: string;
  snippet: string;
  photo_url: string;
  thumbnail_url: string;
  published_datetime_utc: string;
  authors: authors[];
  source_url: string;
  source_name: string;
  source_logo_url: string;
  source_favicon_url: string;
  source_publication_id: string;
  related_topics: related_topics[];
};

type authors = {
  name: string;
};

type related_topics = {
  topic_id: string;
  topic_name: string;
};

export type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};
