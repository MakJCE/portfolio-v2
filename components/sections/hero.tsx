'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { contact } from '@/lib/mocked-data';

export function Hero() {
  const t = useTranslations('home');

  return (
    <section
      id="about"
      className="relative min-h-screen mt-16 md:mt-8 flex items-center justify-center overflow-hidden"
    >
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
            src="/hero.jpeg"
            alt="Profile"
            width={200}
            height={200}
            className="rounded-full object-contain mx-auto border-4 border-purple-500/20 shadow-2xl dark:shadow-purple-500/30 hover:shadow-lg transition-shadow duration-300 cursor-crosshair"
          />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl md:leading-relaxed font-bold mb-6 bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
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
              'Experienced and Passionate Web Developer seeking new opportunities. With over four years’ experience in front-end development, API building, and data modeling, I am a self-motivated and enthusiastic web developer. I am eager to join a top-tier company and bring my skills to every project that comes my way.'
          })}
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Link href={contact.github} target="_blank">
            <Button
              size="lg"
              className="bg-linear-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 hover:text-white"
            >
              <Github className="mr-2 h-5 w-5" />
              <span className="e">GitHub</span>
            </Button>
          </Link>
          <Link href={contact.linkedin} target="_blank">
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500/20 hover:bg-purple-500/10 bg-transparent"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              <span className="">LinkedIn</span>
            </Button>
          </Link>
          <Link href={`mailto:${contact.email}`} target="_blank">
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500/20 hover:bg-blue-500/10 bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
