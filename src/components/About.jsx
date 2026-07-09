import React from 'react';
import { motion } from 'react';
import { motion as m } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, Sparkles, Trophy, BookOpen, Brain } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { aboutMe, email } = portfolioData.personalInfo;
  const { institute, degree, major, duration, cgpa } = portfolioData.education;
  const achievements = portfolioData.achievements;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-24 bg-dark-bg dark:bg-dark-bg light:bg-light-bg transition-colors duration-300 relative bg-dot-pattern"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto rounded-full" />
          <p className="mt-4 text-zinc-400 dark:text-zinc-400 light:text-zinc-500 max-w-xl mx-auto text-sm md:text-base">
            Get to know my academic background, technical passions, and key achievements.
          </p>
        </m.div>

        {/* Main Grid */}
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          
          {/* Left Column: About Paragraphs & Quick Facts */}
          <m.div variants={itemVariants} className="lg:col-span-7 space-y-6">
            <div className="glass-card p-8 rounded-2xl glow-blue">
              <h3 className="font-display font-bold text-xl text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-6 flex items-center gap-2">
                <Sparkles size={20} className="text-brand-blue" />
                <span>My Journey</span>
              </h3>
              
              <div className="space-y-4 text-zinc-400 dark:text-zinc-400 light:text-zinc-500 leading-relaxed text-sm md:text-base">
                {aboutMe.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Quick Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-6 rounded-xl flex items-center gap-4">
                <div className="p-3 rounded-lg bg-brand-blue/10 text-brand-blue">
                  <Brain size={20} />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-700 text-sm">
                    Problem Solving
                  </h4>
                  <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-500 mt-0.5">
                    Data Structures & Algorithms
                  </p>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl flex items-center gap-4">
                <div className="p-3 rounded-lg bg-brand-purple/10 text-brand-purple">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-700 text-sm">
                    Full Stack Dev
                  </h4>
                  <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-500 mt-0.5">
                    MERN Stack & Scalable Apps
                  </p>
                </div>
              </div>
            </div>
          </m.div>

          {/* Right Column: Education & Achievements */}
          <m.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <div className="glass-card p-8 rounded-2xl glow-purple relative">
              <div className="absolute top-4 right-4 text-brand-purple/20">
                <GraduationCap size={70} strokeWidth={1} />
              </div>

              <h3 className="font-display font-bold text-xl text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-6 flex items-center gap-2">
                <GraduationCap size={20} className="text-brand-purple" />
                <span>Education</span>
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-display font-extrabold text-lg text-zinc-100 dark:text-zinc-100 light:text-zinc-800">
                    {institute}
                  </h4>
                  <p className="text-sm font-medium text-brand-purple mt-0.5">
                    {degree} in {major}
                  </p>
                </div>

                <div className="flex flex-col gap-2 pt-2 text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-zinc-500" />
                    <span>{duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-zinc-500" />
                    <span>Allahabad, India</span>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-lg bg-zinc-900/50 dark:bg-zinc-900/50 light:bg-zinc-100/80 border border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200/50 w-fit">
                  <span className="font-mono font-bold text-sm text-zinc-200 dark:text-zinc-200 light:text-zinc-700">
                    {cgpa}
                  </span>
                </div>
              </div>
            </div>

            {/* Achievements Timeline */}
            <div className="glass-card p-8 rounded-2xl glow-blue">
              <h3 className="font-display font-bold text-xl text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-6 flex items-center gap-2">
                <Trophy size={20} className="text-brand-blue" />
                <span>Key Accomplishments</span>
              </h3>

              <div className="relative border-l border-zinc-800 dark:border-zinc-800 light:border-zinc-200 ml-3 pl-6 space-y-6">
                {achievements.map((ach) => (
                  <div key={ach.id} className="relative group">
                    {/* Timeline Node */}
                    <div className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-brand-blue border border-zinc-900 dark:border-zinc-900 light:border-white shadow shadow-brand-blue group-hover:scale-125 transition-transform duration-300" />
                    
                    <h4 className="font-display font-semibold text-sm text-zinc-200 dark:text-zinc-200 light:text-zinc-800 group-hover:text-brand-blue transition-colors">
                      {ach.title}
                    </h4>
                    <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-500 mt-1 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </m.div>

        </m.div>

      </div>
    </section>
  );
}
