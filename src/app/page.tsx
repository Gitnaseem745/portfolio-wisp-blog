import ContactSection from "@/sections/contact-section";
import { ExperienceSection } from "@/sections/experience-section";
import { HeroSection } from "@/sections/hero-section";
import { PostSection } from "@/sections/posts-section";
import { ProjectsSection } from "@/sections/projects-section";
import { SkillsSection } from "@/sections/skills-section";
import {
  PersonStructuredData,
  WebsiteStructuredData,
} from "@/components/structured-data";

export default function Home() {
  return (
    <>
      <PersonStructuredData />
      <WebsiteStructuredData />
      <div className="relative min-h-screen space-y-24 max-sm:space-y-12 pb-10 ">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <PostSection />
        <ContactSection />
      </div>
    </>
  );
}
