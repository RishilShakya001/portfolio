import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon } from './BrandIcons';

// Map icon strings to Lucide Icon components
const IconMap = {
  Coffee: Icons.Coffee,
  Code: Icons.Code,
  Terminal: Icons.Terminal,
  Atom: Icons.Atom,
  Zap: Icons.Zap,
  Palette: Icons.Palette,
  FileCode: Icons.FileCode,
  Brush: Icons.Brush,
  Server: Icons.Server,
  Cpu: Icons.Cpu,
  Database: Icons.Database,
  Globe: Icons.Globe,
  Key: Icons.Key,
  Sparkles: Icons.Sparkles,
  BrainCircuit: Icons.Brain, // Map BrainCircuit to Brain
  Wand2: Icons.Wand2,
  GitBranch: Icons.GitBranch,
  Github: GithubIcon,
  Laptop: Icons.Laptop,
  Compass: Icons.Compass,
  Triangle: Icons.Triangle,
  Cloud: Icons.Cloud,
};

const SkillIcon = ({ name, size = 18, className = "" }) => {
  const IconComponent = IconMap[name] || Icons.Code;
  return <IconComponent size={size} className={className} />;
};

const categoryColorStyles = {
  "Programming Languages": {
    badge: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    glow: "shadow-[0_0_20px_rgba(245,158,11,0.08)] hover:border-amber-500/30",
    iconColor: "text-amber-400",
    barColor: "bg-amber-500"
  },
  "Frontend": {
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    glow: "shadow-[0_0_20px_rgba(59,130,246,0.08)] hover:border-blue-500/30",
    iconColor: "text-blue-400",
    barColor: "bg-blue-500"
  },
  "Backend": {
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    glow: "shadow-[0_0_20px_rgba(16,185,129,0.08)] hover:border-emerald-500/30",
    iconColor: "text-emerald-400",
    barColor: "bg-emerald-500"
  },
  "AI & APIs": {
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    glow: "shadow-[0_0_20px_rgba(168,85,247,0.08)] hover:border-purple-500/30",
    iconColor: "text-purple-400",
    barColor: "bg-purple-500"
  },
  "Tools": {
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    glow: "shadow-[0_0_20px_rgba(6,182,212,0.08)] hover:border-cyan-500/30",
    iconColor: "text-cyan-400",
    barColor: "bg-cyan-500"
  }
};

export default function Skills() {
  const skillsData = portfolioData.skills;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 18,
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-24 bg-dark-bg dark:bg-dark-bg light:bg-light-bg transition-colors duration-300 relative bg-dot-pattern"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto rounded-full" />
          <p className="mt-4 text-zinc-400 dark:text-zinc-400 light:text-zinc-500 max-w-xl mx-auto text-sm md:text-base">
            My technology stack, programming tools, and specialty areas.
          </p>
        </motion.div>

        {/* Skills Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((category) => {
            const styles = categoryColorStyles[category.category] || categoryColorStyles["Tools"];
            return (
              <motion.div
                key={category.category}
                variants={cardVariants}
                className={`glass-card p-7 rounded-2xl ${styles.glow}`}
              >
                {/* Category Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display font-extrabold text-base tracking-wide text-zinc-200 dark:text-zinc-200 light:text-zinc-700">
                    {category.category}
                  </h3>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${styles.badge}`}>
                    {category.items.length} Techs
                  </span>
                </div>

                {/* Skill Items List */}
                <div className="flex flex-wrap gap-2.5">
                  {category.items.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -3, scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-zinc-100 border border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200 hover:bg-zinc-900/60 dark:hover:bg-zinc-900/60 light:hover:bg-zinc-200/50 hover:border-zinc-700 dark:hover:border-zinc-700 light:hover:border-zinc-300 transition-colors shadow-sm select-none cursor-default group"
                    >
                      <SkillIcon
                        name={skill.icon}
                        className={`text-zinc-500 dark:text-zinc-500 light:text-zinc-400 group-hover:${styles.iconColor} transition-colors duration-300`}
                      />
                      <span className="text-sm font-medium text-zinc-300 dark:text-zinc-300 light:text-zinc-600 group-hover:text-zinc-100 dark:group-hover:text-zinc-100 light:group-hover:text-zinc-800 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom decorative bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-900 dark:bg-zinc-900 light:bg-zinc-200">
                  <div className={`h-full w-1/4 ${styles.barColor} rounded-tr-full opacity-60`} />
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
