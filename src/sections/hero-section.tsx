import { Button } from "@/components/button";
import { Heading, Text } from "@/components/typography";
import { Dribbble, Instagram, Linkedin, Twitch } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

const iconMap = {
  Dribbble,
  Instagram,
  Linkedin,
  Twitch,
};

export function HeroSection() {
  const { hero } = siteConfig.sections;

  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center px-4"
    >
      <div className="text-center flex justify-center items-center flex-col gap-y-8 max-w-2xl mx-auto">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          width={hero.image.width}
          height={hero.image.height}
          className="h-[60px] w-[120px] object-cover rounded-full shadow-md"
        />
        <div className="space-y-4 mt-6">
          <Heading level="h2" align="center">
            {hero.name}
          </Heading>
          <Text size="xl" weight="medium" align="center" variant="muted">
            {hero.title}
          </Text>
        </div>

        <div>
          <Text size="lg" align="center" weight="medium" variant="muted">
            {hero.description}
          </Text>
        </div>

        <div className="flex justify-center items-center gap-x-8 mt-6">
          {hero.socialLinks.map((social, index) => {
            const IconComponent = iconMap[social.icon as keyof typeof iconMap];
            return (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <IconComponent className="h-6 w-6 text-primary group-hover:text-blue-600 transition-colors duration-200" />
              </Link>
            );
          })}
        </div>

        <div className="mt-4">
          <Link href={hero.cta.href}>
            <Button variant="default">{hero.cta.text}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
