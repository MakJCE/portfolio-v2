'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { education } from '@/lib/mocked-data';
import Link from 'next/link';

export function Education() {
  const t = useTranslations('home');

  return (
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
                  {edu.certificateUrl && (
                    <Link
                      href={edu.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center text-blue-500 hover:underline cursor-pointer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t('education.viewCertificate', {
                        defaultValue: 'View Certificate'
                      })}
                    </Link>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
