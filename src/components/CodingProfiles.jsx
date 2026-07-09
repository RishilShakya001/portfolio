import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Activity, Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, GfgIcon, CodeforcesIcon } from './BrandIcons';

const IconMap = {
  Code2: LeetCodeIcon,
  Codeforces: CodeforcesIcon,
  Github: GithubIcon,
  BookOpen: GfgIcon,
  Linkedin: LinkedinIcon,
};

export default function CodingProfiles() {
  const profiles = portfolioData.codingProfiles;

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
        type: 'spring',
        stiffness: 100,
        damping: 18,
      },
    },
  };

  return (
    <section
      id="profiles"
      className="py-24 bg-dark-bg dark:bg-dark-bg light:bg-light-bg transition-colors duration-300 relative bg-dot-pattern"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-4">
            Coding <span className="text-gradient">Profiles</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto rounded-full" />
          <p className="mt-4 text-zinc-400 dark:text-zinc-400 light:text-zinc-500 max-w-xl mx-auto text-sm md:text-base">
            Track my algorithmic problem solving, active development contributions, and professional network.
          </p>
        </motion.div>

        {/* Profiles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {profiles.map((profile) => {
            const IconComponent = IconMap[profile.icon] || Github;
            return (
              <motion.div
                key={profile.name}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="glass-card p-6 rounded-2xl flex flex-col h-full group"
              >
                {/* Platform Logo & Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${profile.color} text-white shadow-md`}>
                    <IconComponent size={24} />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-zinc-150 text-zinc-400 dark:text-zinc-400 light:text-zinc-500 border border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200">
                    Active
                  </span>
                </div>

                {/* Profile Name */}
                <h3 className="font-display font-extrabold text-lg text-zinc-100 dark:text-zinc-100 light:text-zinc-800 mb-2">
                  {profile.name}
                </h3>

                {/* Statistics Box */}
                <div className="flex items-center gap-2 mb-6 p-3 rounded-xl bg-zinc-950/30 dark:bg-zinc-950/30 light:bg-zinc-100 border border-zinc-800/40 dark:border-zinc-800/40 light:border-zinc-200/50">
                  <Activity size={14} className="text-brand-blue" />
                  <span className="font-mono text-xs text-zinc-300 dark:text-zinc-300 light:text-zinc-600 leading-tight">
                    {profile.stats}
                  </span>
                </div>

                {/* Visit Profile Action Button */}
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-900/30 dark:bg-zinc-900/30 light:bg-white hover:bg-zinc-800/40 dark:hover:bg-zinc-800/40 light:hover:bg-zinc-50 text-zinc-300 dark:text-zinc-300 light:text-zinc-650 hover:text-white dark:hover:text-white light:hover:text-zinc-900 font-medium text-xs transition-colors shadow-sm"
                >
                  <span>Visit Profile</span>
                  <ExternalLink size={12} className="opacity-60" />
                </a>

                {/* Custom top linear colored bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${profile.color}`} />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
