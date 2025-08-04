'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import LanguageSelector from './lang-selector';

export function Header() {
  const t = useTranslations('home.header');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  if (!mounted) return null;

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/40 backdrop-blur-md border-b border-border/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            {t('title')}
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Button variant="ghost" onClick={() => scrollToSection('about')}>
              {t('navigation.about')}
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('projects')}>
              {t('navigation.projects')}
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('experience')}
            >
              {t('navigation.experience')}
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('education')}
            >
              {t('navigation.education')}
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('skills')}>
              {t('navigation.skills')}
            </Button>
          </nav>

          <div className="flex items-center space-x-2">
            {/* Language Selector */}
            <LanguageSelector />

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'dark' ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </motion.div>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          className={`md:hidden mt-4 ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
        >
            <div className="flex flex-col space-y-2 pb-4">
            {[
              { id: 'about', label: t('navigation.about') },
              { id: 'projects', label: t('navigation.projects') },
              { id: 'experience', label: t('navigation.experience') },
              { id: 'education', label: t('navigation.education') },
              { id: 'skills', label: t('navigation.skills') },
            ].map(({ id, label }) => (
              <Button key={id} variant="ghost" onClick={() => scrollToSection(id)}>
              {label}
              </Button>
            ))}
            </div>
        </motion.nav>
      </div>
    </motion.header>
  );
}
