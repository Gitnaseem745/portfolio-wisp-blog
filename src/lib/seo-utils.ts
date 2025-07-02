import { siteConfig } from "@/config/siteConfig";
import type { Metadata } from "next";

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  image?: string;
  keywords?: string[];
  canonical?: string;
  noIndex?: boolean;
  publishedAt?: string;
  modifiedAt?: string;
  type?: "website" | "article";
}

export function generateMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  keywords = [],
  canonical,
  noIndex = false,
  publishedAt,
  modifiedAt,
  type = "website",
}: GenerateMetadataProps = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const url = canonical || siteConfig.url;

  const metadata: Metadata = {
    title: pageTitle,
    description,
    keywords: [...keywords, "Naseem Ansari", "Full Stack Developer", "Portfolio"],
    authors: [{ name: "Naseem Ansari", url: siteConfig.url }],
    creator: "Naseem Ansari",
    publisher: "Naseem Ansari",
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
      locale: "en_US",
      type,
      ...(publishedAt && { publishedTime: publishedAt }),
      ...(modifiedAt && { modifiedTime: modifiedAt }),
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      creator: "@naseem",
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };

  return metadata;
}

// Utility to create structured data for articles/blog posts
export function generateArticleStructuredData({
  title,
  description,
  publishedAt,
  modifiedAt,
  image,
  authorName = siteConfig.sections.hero.name,
  url,
}: {
  title: string;
  description: string;
  publishedAt: string;
  modifiedAt?: string;
  image?: string;
  authorName?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image ? [image] : undefined,
    datePublished: publishedAt,
    dateModified: modifiedAt || publishedAt,
    author: {
      "@type": "Person",
      name: authorName,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: authorName,
      url: siteConfig.url,
    },
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

// Utility to generate breadcrumb structured data
export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
