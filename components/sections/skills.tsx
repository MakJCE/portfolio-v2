'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { skills } from '@/lib/mocked-data';

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

export function Skills() {
    const t = useTranslations('home');

    return (
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
    )
}