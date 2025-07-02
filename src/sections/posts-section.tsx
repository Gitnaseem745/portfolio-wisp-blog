import { Button } from "@/components/button";
import { Heading } from "@/components/typography";
import { PostCard } from "@/components/post-card";
import { wisp } from "@/lib/wisp";
import Link from "next/link";

export async function PostSection() {
  const result = await wisp.getPosts({ limit: 4 });
  const posts = result.posts;

  return (
    <section className="px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Heading level="h2" align="center">
            Latest Posts
          </Heading>
          <p className="text-muted-foreground text-lg font-medium">
            Thoughts, ideas, and insights from my journey
          </p>
          <Link href="/blog" className="pt-4">
            <Button variant="outline">View All Posts</Button>
          </Link>
        </div>
        <div className="flex flex-col gap-8 md:gap-12">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              slug={post.slug}
              description={post.description || ""}
              imageUrl={
                post.image ||
                "https://images.unsplash.com/photo-1687603917313-ccae1a289a9d"
              }
              imageAlt={post.title}
              author={post.author?.name || "Author"}
              date={new Date(post.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
