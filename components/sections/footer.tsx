'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contact } from '@/lib/mocked-data';
import Link from 'next/link';

export function Footer() {
  const t = useTranslations('home');

  return (
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
            <Link href={`mailto:${contact.email}`}>
              <Button variant="outline" size="lg">
                <Mail className="mr-2 h-5 w-5" />
                {contact.email}
              </Button>
            </Link>
          </div>
          <div className="flex justify-center gap-6">
            <Link href={contact.github}>
              <Button variant="ghost" size="sm">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href={contact.linkedin}>
              <Button variant="ghost" size="sm">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              © 2025 Jhonny Camacho Encinas. Built with Next.js and Tailwind
              CSS.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
