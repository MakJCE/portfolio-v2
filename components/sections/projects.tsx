'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/lib/mocked-data';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function Projects() {
  const t = useTranslations('home');

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-linear-to-b from-purple-500/10 dark:from-purple-500/30 via-transparent to-blue-500/10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('projects.title', { defaultValue: 'Featured Projects' })}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('projects.subtitle', {
              defaultValue:
                'A collection of projects that showcase my skills and passion for development'
            })}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-xs hover:border-purple-500/20 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* live url link */}
                    <Link
                      href={project.liveUrl ?? '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={!project.liveUrl ? 'cursor-not-allowed' : ''}
                      aria-disabled={!project.liveUrl}
                    >
                      <Button
                        size="sm"
                        variant="secondary"
                        className="h-8 w-8 p-0 disabled:cursor-not-allowed"
                        disabled={!project.liveUrl}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </Link>
                    {/* github link */}
                    <Link
                      href={project.githubUrl ?? '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={!project.githubUrl ? 'cursor-not-allowed' : ''}
                      aria-disabled={!project.githubUrl}
                    >
                      <Button
                        size="sm"
                        variant="secondary"
                        className="h-8 w-8 p-0 disabled:cursor-not-allowed"
                        disabled={!project.githubUrl}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
