import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Profiles', href: '#profiles' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) =>
        document.getElementById(item.href.substring(1))
      );

      const scrollPosition = window.scrollY + 100;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navItems[i].href.substring(1));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3 shadow-lg'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-tr from-brand-blue to-brand-purple text-white shadow-md shadow-brand-blue/20 transition-transform duration-300 group-hover:scale-110">
              <Terminal size={18} />
            </div>
            <span className="font-display font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-400 dark:from-zinc-100 dark:to-zinc-400 light:from-zinc-900 light:to-zinc-600 transition-colors">
              Rishil Shakya
            </span>
          </a>

          {/* Desktop Navigation & Actions wrapper */}
          <div className="flex items-center gap-6">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const target = item.href.substring(1);
                const isActive = activeSection === target;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-2 rounded-full font-medium text-sm transition-colors ${
                      isActive
                        ? 'text-brand-blue dark:text-zinc-100'
                        : 'text-zinc-400 hover:text-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-100 light:text-zinc-600 light:hover:text-zinc-900'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBackground"
                        className="absolute inset-0 rounded-full bg-zinc-800/40 dark:bg-zinc-800/40 light:bg-zinc-200/50 border border-zinc-700/20 dark:border-zinc-700/20 light:border-zinc-300/30 -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.name}
                  </a>
                );
              })}
            </nav>
  
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full border border-zinc-800/60 dark:border-zinc-800/60 light:border-zinc-200 bg-zinc-900/30 dark:bg-zinc-900/30 light:bg-zinc-100 hover:bg-zinc-800/50 dark:hover:bg-zinc-800/50 light:hover:bg-zinc-200/80 text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-zinc-100 dark:hover:text-zinc-100 light:hover:text-zinc-900 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-30 p-6 md:hidden glass-nav border-b border-zinc-800 shadow-2xl"
          >
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => {
                const target = item.href.substring(1);
                const isActive = activeSection === target;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl font-medium text-base transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 text-brand-blue border border-brand-blue/20'
                        : 'text-zinc-400 hover:text-zinc-200 dark:text-zinc-400 light:text-zinc-600 dark:hover:text-zinc-100 light:hover:text-zinc-900 hover:bg-zinc-900/20 dark:hover:bg-zinc-900/20 light:hover:bg-zinc-200/30'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    )}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
