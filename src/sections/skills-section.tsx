import { Heading, Text } from "@/components/typography";
import { Slider } from "@/components/slider";
import { siteConfig } from "@/config/siteConfig";

export function SkillsSection() {
  const { skills } = siteConfig.sections;

  return (
    <section id="skills" className="px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Heading level="h2" align="center">
            {skills.title}
          </Heading>
          <Text size="lg" weight="medium" align="center" variant="muted">
            {skills.description}
          </Text>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skills.categories.map((category, index) => (
            <div key={index} className="space-y-6">
              <div className="text-center">
                <Text
                  size="lg"
                  weight="semibold"
                  align="center"
                  className="text-foreground"
                >
                  {category.name}
                </Text>
              </div>
              <div className="overflow-hidden">
                <Slider
                  width={category.sliderConfig.width}
                  duration={category.sliderConfig.duration}
                  toRight={category.sliderConfig.toRight}
                  pauseOnHover={category.sliderConfig.pauseOnHover}
                >
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center h-12 bg-muted/50 rounded-lg border border-border/50 hover:bg-muted/80 transition-colors duration-200"
                      style={{ width: "160px", marginRight: "20px" }}
                    >
                      <Text
                        size="sm"
                        weight="medium"
                        className="text-foreground whitespace-nowrap"
                      >
                        {skill}
                      </Text>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
