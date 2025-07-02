import { Heading, Text } from "@/components/typography";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  author: string;
  date: string;
}

export function PostCard({
  title,
  slug,
  description,
  imageUrl,
  imageAlt,
  author,
  date,
}: PostCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex max-sm:flex-col gap-6 items-center hover:cursor-pointer"
    >
      <div className="flex-shrink-0 w-full md:w-48 h-auto rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={200}
          height={200}
          className="w-full h-auto rounded-lg object-cover overflow-hidden"
        />
      </div>
      <div className="flex flex-col self-start space-y-2">
        <Heading
          level="h4"
          weight="medium"
          color="primary"
          className="line-clamp-1 group-hover:text-blue-600 transition-colors duration-200"
        >
          {title}
        </Heading>
        <Text variant="muted" className="line-clamp-3">
          {description}
        </Text>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">By {author}</span>
          <span className="text-sm text-muted-foreground">•</span>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
      </div>
    </Link>
  );
}
