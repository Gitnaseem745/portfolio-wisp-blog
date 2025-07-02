"use client";

import { siteConfig } from "@/config/siteConfig";
import Script from "next/script";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Structured data for the homepage/person
export function PersonStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.sections.hero.name,
    jobTitle: siteConfig.sections.hero.title,
    description: siteConfig.sections.hero.description,
    url: siteConfig.url,
    image: siteConfig.sections.hero.image.src,
    sameAs: siteConfig.sections.hero.socialLinks.map((link) => link.href),
    knowsAbout: [
      "Web Development",
      "Full Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "UI/UX Design",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
  };

  return <JsonLd data={structuredData} />;
}

// Structured data for website
export function WebsiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    author: {
      "@type": "Person",
      name: siteConfig.sections.hero.name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return <JsonLd data={structuredData} />;
}
