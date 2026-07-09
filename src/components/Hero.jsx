import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './BrandIcons';

export default function Hero() {
  const { name, title, roles, intro, resumeUrl, email } = portfolioData.personalInfo;
  const { github, linkedin, leetcode } = portfolioData.socialLinks;

  // Typewriter effect states
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const fullText = roles[currentRoleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause at the end of word
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-dark-bg dark:bg-dark-bg light:bg-light-bg transition-colors duration-300 bg-dot-pattern"
    >
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-brand-blue/10 dark:bg-brand-blue/10 light:bg-blue-200/20 blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-brand-purple/10 dark:bg-brand-purple/10 light:bg-purple-200/20 blur-3xl -z-10 animate-pulse-slow" />

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Info Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white/80 w-fit mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-ping" />
            <span className="font-display font-medium text-xs text-zinc-300 dark:text-zinc-300 light:text-zinc-600">
              Open for Internships 2026/2027
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl leading-tight mb-4 tracking-tight">
            <span className="block text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
              Hi, I'm
            </span>
            <span className="block text-gradient">
              {name}
            </span>
          </h1>

          {/* Subtitle / College */}
          <h2 className="font-display font-semibold text-lg md:text-xl text-zinc-300 dark:text-zinc-300 light:text-zinc-600 mb-4">
            {title}
          </h2>

          {/* Typewriter text */}
          <div className="h-10 md:h-12 mb-6 flex items-center">
            <span className="font-mono text-lg md:text-2xl font-bold bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100 px-4 py-1.5 rounded-lg border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 text-brand-purple">
              {currentText}
              <span className="text-brand-blue animate-pulse font-light">|</span>
            </span>
          </div>

          {/* Short Bio */}
          <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-500 text-base md:text-lg max-w-xl leading-relaxed mb-8">
            {intro}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple hover:from-blue-600 hover:to-purple-600 text-white font-medium text-sm transition-all duration-300 shadow-md shadow-brand-blue/20 hover:shadow-lg hover:shadow-brand-blue/30 transform hover:-translate-y-0.5 group"
            >
              <span>View Projects</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-900/30 dark:bg-zinc-900/30 light:bg-white hover:bg-zinc-800/40 dark:hover:bg-zinc-800/40 light:hover:bg-zinc-50 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 font-medium text-sm transition-all duration-300 shadow-sm transform hover:-translate-y-0.5"
            >
              <span>Download Resume</span>
              <Download size={16} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3.5 rounded-xl border border-zinc-800/60 dark:border-zinc-800/60 light:border-zinc-200 bg-transparent hover:bg-zinc-900/10 dark:hover:bg-zinc-900/20 light:hover:bg-zinc-100/50 text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-brand-blue dark:hover:text-white light:hover:text-zinc-800 font-medium text-sm transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-widest font-display font-semibold text-zinc-500 dark:text-zinc-500 light:text-zinc-400">
              Connect
            </span>
            <div className="w-12 h-px bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-200" />
            
            <div className="flex items-center gap-2">
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-zinc-800/60 dark:border-zinc-800/60 light:border-zinc-200 bg-zinc-900/30 dark:bg-zinc-900/30 light:bg-white text-zinc-400 dark:text-zinc-400 light:text-zinc-500 hover:text-white dark:hover:text-white light:hover:text-zinc-800 hover:bg-zinc-800/50 dark:hover:bg-zinc-800/50 light:hover:bg-zinc-100 hover:border-zinc-700 dark:hover:border-zinc-700 light:hover:border-zinc-300 transition-all shadow-sm"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-zinc-800/60 dark:border-zinc-800/60 light:border-zinc-200 bg-zinc-900/30 dark:bg-zinc-900/30 light:bg-white text-zinc-400 dark:text-zinc-400 light:text-zinc-500 hover:text-white dark:hover:text-white light:hover:text-zinc-800 hover:bg-zinc-800/50 dark:hover:bg-zinc-800/50 light:hover:bg-zinc-100 hover:border-zinc-700 dark:hover:border-zinc-700 light:hover:border-zinc-300 transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href={leetcode}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-zinc-800/60 dark:border-zinc-800/60 light:border-zinc-200 bg-zinc-900/30 dark:bg-zinc-900/30 light:bg-white text-zinc-400 dark:text-zinc-400 light:text-zinc-500 hover:text-white dark:hover:text-white light:hover:text-zinc-800 hover:bg-zinc-800/50 dark:hover:bg-zinc-800/50 light:hover:bg-zinc-100 hover:border-zinc-700 dark:hover:border-zinc-700 light:hover:border-zinc-300 transition-all shadow-sm"
                aria-label="LeetCode"
              >
                <LeetCodeIcon size={18} />
              </a>

              <a
                href={`mailto:${email}`}
                className="p-2.5 rounded-xl border border-zinc-800/60 dark:border-zinc-800/60 light:border-zinc-200 bg-zinc-900/30 dark:bg-zinc-900/30 light:bg-white text-zinc-400 dark:text-zinc-400 light:text-zinc-500 hover:text-white dark:hover:text-white light:hover:text-zinc-800 hover:bg-zinc-800/50 dark:hover:bg-zinc-800/50 light:hover:bg-zinc-100 hover:border-zinc-700 dark:hover:border-zinc-700 light:hover:border-zinc-300 transition-all shadow-sm"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Laptop Illustration Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="lg:col-span-5 flex items-center justify-center relative"
        >
          {/* Glowing back orbs */}
          <div className="absolute inset-0 w-80 h-80 rounded-full bg-brand-purple/20 dark:bg-brand-purple/20 light:bg-purple-300/10 blur-3xl mix-blend-screen -z-10 animate-pulse-slow m-auto" />
          
          <div className="relative p-4 md:p-8 rounded-3xl bg-zinc-900/10 dark:bg-zinc-900/10 light:bg-zinc-100/10 border border-zinc-800/20 dark:border-zinc-800/30 light:border-zinc-200/50 backdrop-blur-sm max-w-md md:max-w-full shadow-2xl animate-float">
            {/* Ambient shadow/glow border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-brand-blue/10 to-brand-purple/10 opacity-30 -z-10" />
            
            {/* The Image Asset */}
            <img
              src="/src/assets/hero_laptop.png"
              alt="Futuristic Floating Laptop Mockup"
              className="w-full h-auto rounded-2xl shadow-xl shadow-black/40 border border-zinc-800/40 relative z-10 hover:scale-[1.02] transition-transform duration-500"
            />

            {/* Glowing Ring Border effect */}
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-brand-blue via-transparent to-brand-purple opacity-20 blur-sm pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
