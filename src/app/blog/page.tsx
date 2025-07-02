import { BlogPostsPreview } from "@/components/blog-preview";
import { BlogPostsPagination } from "@/components/blog-pagination";
import { wisp } from "@/lib/wisp";
import { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";

interface SearchParams {
  page?: string;
}

interface BlogPageProps {
  searchParams: Promise<SearchParams>;
}

export const metadata: Metadata = {
  title: "Blog - Latest AI Tools, Prompting & Image Generation Tutorials",
  description:
    "Discover comprehensive guides, tutorials, and insights on AI tools, prompt engineering, and AI image generation. Stay updated with the latest trends in artificial intelligence and digital innovation.",
  keywords: [
    "AI tools",
    "prompt engineering",
    "AI image generation",
    "artificial intelligence",
    "machine learning",
    "digital innovation",
    "technology tutorials",
    "AI guides",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "Blog - Latest AI Tools, Prompting & Image Generation Tutorials | " +
      siteConfig.name,
    description:
      "Discover comprehensive guides, tutorials, and insights on AI tools, prompt engineering, and AI image generation. Stay updated with the latest trends in artificial intelligence.",
    url: siteConfig.url + "/blog",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: siteConfig.url + "/images/blog-og.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name + " Blog - AI Tools and Tutorials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Blog - Latest AI Tools, Prompting & Image Generation Tutorials | " +
      siteConfig.name,
    description:
      "Discover comprehensive guides, tutorials, and insights on AI tools, prompt engineering, and AI image generation.",
    creator: "@" + siteConfig.name.toLowerCase().replace(/\s+/g, ""),
    images: [siteConfig.url + "/images/blog-og.jpg"],
  },
  alternates: {
    canonical: siteConfig.url + "/blog",
    types: {
      "application/rss+xml": [
        {
          url: siteConfig.url + "/rss",
          title: siteConfig.name + " RSS Feed",
        },
      ],
    },
  },
  category: "technology",
};

const BlogPage = async ({ searchParams }: BlogPageProps) => {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const limit = 12; // 12 posts per page as requested

  // Fetch posts
  const { posts, pagination } = await wisp.getPosts({
    limit,
    page,
  });

  return (
    <div className="container mx-auto px-5 py-16">
      {/* Minimal Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Blog
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Thoughts, tutorials, and insights
        </p>
      </div>

      {/* Blog Posts */}
      {posts.length > 0 ? (
        <>
          <BlogPostsPreview posts={posts} className="max-w-4xl mx-auto" />

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="flex justify-center mt-16">
              <BlogPostsPagination
                pagination={pagination}
                basePath="/blog?page="
              />
            </div>
          )}
        </>
      ) : (
        /* Empty State */
        <div className="text-center py-16">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
            No posts found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Check back soon for new content!
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
