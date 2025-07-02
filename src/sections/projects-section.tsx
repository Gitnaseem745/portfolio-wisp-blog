"use client";

import { motion } from "framer-motion";
import { Heading, Text } from "@/components/typography";
import { siteConfig } from "@/config/siteConfig";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";
import Image from "next/image";

export function ProjectsSection() {
  const { projects } = siteConfig.sections;

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
    <section id="projects" className="px-4 py-12">
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
              {projects.title}
            </Heading>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Text size="lg" weight="medium" align="center" variant="muted">
              {projects.description}
            </Text>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {projects.projects.map((project) => (
            <motion.div
              key={project.id}
              className="group h-full"
              variants={itemVariants}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {/* Project Card */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:bg-card/80 hover:border-border transition-all duration-300 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={project.image.width}
                    height={project.image.height}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-4 flex-1 flex flex-col">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div className="flex-1">
                      <Heading
                        level="h5"
                        weight="semibold"
                        className="text-foreground mb-2"
                      >
                        {project.title}
                      </Heading>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <Tag className="w-3.5 h-3.5" />
                          <Text size="sm">{project.category}</Text>
                        </div>
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <Calendar className="w-3.5 h-3.5" />
                          <Text size="sm">{project.year}</Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <Text
                    size="sm"
                    variant="muted"
                    className="mb-4 leading-relaxed flex-1"
                  >
                    {project.description}
                  </Text>

                  {/* Technologies */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="mb-4">
                      <Text
                        size="xs"
                        weight="semibold"
                        className="text-foreground mb-2"
                      >
                        Technologies:
                      </Text>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-muted/50 text-muted-foreground border border-border/50 hover:bg-muted/80 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 text-sm font-medium"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted/50 text-muted-foreground border border-border/50 rounded-lg hover:bg-muted/80 hover:text-foreground transition-colors duration-200 text-sm font-medium"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
