import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './BrandIcons';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-100/50 py-12 border-t border-zinc-900 dark:border-zinc-900 light:border-zinc-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Logo & Info */}
        <div className="text-center md:text-left">
          <span className="font-display font-bold text-lg text-zinc-350 dark:text-zinc-300 light:text-zinc-800">
            Rishil Shakya<span className="text-brand-blue">.</span>
          </span>
          <p className="text-xs text-zinc-500 dark:text-zinc-500 light:text-zinc-400 mt-1">
            Built with React, Vite, Tailwind CSS & Framer Motion.
          </p>
        </div>

        {/* Middle: Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-500">
          <a href="#home" className="hover:text-brand-blue transition-colors">Home</a>
          <a href="#about" className="hover:text-brand-blue transition-colors">About</a>
          <a href="#skills" className="hover:text-brand-blue transition-colors">Skills</a>
          <a href="#projects" className="hover:text-brand-blue transition-colors">Projects</a>
          <a href="#profiles" className="hover:text-brand-blue transition-colors">Profiles</a>
          <a href="#contact" className="hover:text-brand-blue transition-colors">Contact</a>
        </nav>

        {/* Right Side: Social Media Icons */}
        <div className="flex items-center gap-4">
          <a
            href={portfolioData.socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 dark:text-zinc-500 light:text-zinc-400 hover:text-zinc-200 dark:hover:text-white light:hover:text-zinc-800 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>

          <a
            href={portfolioData.socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 dark:text-zinc-500 light:text-zinc-400 hover:text-zinc-200 dark:hover:text-white light:hover:text-zinc-800 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>

          <a
            href={portfolioData.socialLinks.leetcode}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 dark:text-zinc-500 light:text-zinc-400 hover:text-zinc-200 dark:hover:text-white light:hover:text-zinc-800 transition-colors"
            aria-label="LeetCode"
          >
            <LeetCodeIcon size={18} />
          </a>

          <a
            href={`mailto:${portfolioData.personalInfo.email}`}
            className="text-zinc-500 dark:text-zinc-500 light:text-zinc-400 hover:text-zinc-200 dark:hover:text-white light:hover:text-zinc-800 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-zinc-900/60 dark:border-zinc-900/60 light:border-zinc-200 text-center">
        <p className="text-[11px] text-zinc-650 dark:text-zinc-650 light:text-zinc-450 tracking-wider">
          &copy; {new Date().getFullYear()} Rishil Shakya. All rights reserved.
        </p>
      </div>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-gradient-to-tr from-brand-blue to-brand-purple text-white shadow-lg shadow-brand-blue/20 hover:shadow-xl hover:shadow-brand-blue/30 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 group cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={18} className="transition-transform group-hover:-translate-y-0.5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
