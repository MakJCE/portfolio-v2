'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Calendar,
  MapPin
} from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects, skills, education, experiences, contact } from '@/lib/mocked-data';

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

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-background via-background to-background/80" />
        <div className="absolute inset-0 bg-linear-to-t from-purple-500/10 dark:from-purple-500/30 via-transparent to-blue-500/10" />

        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Profile"
              width={200}
              height={200}
              className="rounded-full mx-auto border-4 border-purple-500/20 shadow-2xl dark:shadow-purple-500/30 hover:shadow-lg transition-shadow duration-300"
            />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl leading-relaxed font-bold mb-6 bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {t('hero.name', { defaultValue: 'Jhonny Camacho Encinas' })}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed italic"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {t('hero.title', {
              defaultValue: 'Full Stack Developer & UI/UX Enthusiast'
            })}
          </motion.p>

          <motion.p
            className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {t('hero.description', {
              defaultValue:
                'Passionate about creating beautiful, functional web experiences that make a difference. I love turning complex problems into simple, elegant solutions.'
            })}
          </motion.p>

          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-linear-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 hover:text-white"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500/20 hover:bg-purple-500/10 bg-transparent"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500/20 hover:bg-blue-500/10 bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-linear-to-b from-purple-500/10 dark:from-purple-500/30 via-transparent to-blue-500/10">
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
                      <Button
                        size="sm"
                        variant="secondary"
                        className="h-8 w-8 p-0"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="h-8 w-8 p-0"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
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

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('experience.title', { defaultValue: 'Work Experience' })}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('experience.subtitle', {
                defaultValue: 'My professional journey and key achievements'
              })}
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-purple-500 to-blue-500" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-20 pb-12 last:pb-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="absolute left-6 w-5 h-5 bg-linear-to-r from-purple-500 to-blue-500 rounded-full border-4 border-background" />
                <Card className="border-border/50 bg-card/50 backdrop-blur-xs">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-4 w-4" />
                        {exp.period}
                      </div>
                    </div>
                    <div className="flex items-center text-purple-400 mb-2">
                      <span className="font-medium">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <MapPin className="mr-1 h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('education.title', { defaultValue: 'Education' })}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('education.subtitle', {
                defaultValue:
                  'My academic background and continuous learning journey'
              })}
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 to-purple-500" />

            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="relative pl-20 pb-12 last:pb-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="absolute left-6 w-5 h-5 bg-linear-to-r from-blue-500 to-purple-500 rounded-full border-4 border-background" />
                <Card className="border-border/50 bg-card/50 backdrop-blur-xs">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-4 w-4" />
                        {edu.period}
                      </div>
                    </div>
                    <div className="flex items-center text-blue-400 mb-2">
                      <span className="font-medium">{edu.institution}</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <MapPin className="mr-1 h-4 w-4" />
                        {edu.location}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('skills.title', { defaultValue: 'Skills & Technologies' })}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('skills.subtitle', {
                defaultValue:
                  'Technologies I work with and my proficiency levels'
              })}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div key={index} className="space-y-2" variants={fadeInUp}>
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-linear-to-r from-purple-500 to-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1,
                      duration: 1,
                      ease: 'easeOut'
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              {t('footer.title', { defaultValue: "Let's work together" })}
            </h3>
            <p className="text-muted-foreground mb-8">
              {t('footer.subtitle', {
                defaultValue:
                  'Feel free to reach out for collaborations or just a friendly hello!'
              })}
            </p>
            <div className="flex justify-center gap-4 mb-8">
              <Button variant="outline" size="lg">
                <Mail className="mr-2 h-5 w-5" />
                {contact.email}
              </Button>
            </div>
            <div className="flex justify-center gap-6">
              <Button variant="ghost" size="sm">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                © 2024 Jhonny Camacho Encinas. Built with Next.js and Tailwind
                CSS.
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
