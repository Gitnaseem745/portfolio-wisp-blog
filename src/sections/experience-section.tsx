"use client";

import { motion } from "framer-motion";
import { Heading, Text } from "@/components/typography";
import { siteConfig } from "@/config/siteConfig";
import { CalendarDays, MapPin, Briefcase, ChevronRight } from "lucide-react";

export function ExperienceSection() {
  const { experience } = siteConfig.sections;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section id="experience" className="px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Heading level="h2" align="center">
              {experience.title}
            </Heading>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Text size="lg" weight="medium" align="center" variant="muted">
              {experience.description}
            </Text>
          </motion.div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experience.experiences.map((exp) => (
              <motion.div
                key={exp.id}
                className="relative group"
                variants={itemVariants}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden md:block group-hover:scale-110 transition-transform duration-200" />

                {/* Experience Card */}
                <div className="md:ml-20 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/80 hover:border-border transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <Heading
                        level="h4"
                        weight="semibold"
                        className="text-foreground mb-2"
                      >
                        {exp.position}
                      </Heading>
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Briefcase className="w-4 h-4" />
                        <Text size="base" weight="medium">
                          {exp.company}
                        </Text>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <Text size="sm">{exp.location}</Text>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <CalendarDays className="w-4 h-4" />
                          <Text size="sm">
                            {exp.startDate} - {exp.endDate}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <Text
                    size="base"
                    variant="muted"
                    className="mb-6 leading-relaxed"
                  >
                    {exp.description}
                  </Text>

                  {/* Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mb-6">
                      <Text
                        size="sm"
                        weight="semibold"
                        className="text-foreground mb-3"
                      >
                        Key Achievements:
                      </Text>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <Text size="sm" variant="muted">
                              {achievement}
                            </Text>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div>
                      <Text
                        size="sm"
                        weight="semibold"
                        className="text-foreground mb-3"
                      >
                        Technologies:
                      </Text>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-muted/50 text-muted-foreground border border-border/50 hover:bg-muted/80 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
