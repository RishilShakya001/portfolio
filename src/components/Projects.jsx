import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Check, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon } from './BrandIcons';

// Reusable 3D Tilt Card Component
function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse coords relative to card center
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Convert to rotation angles (max 6 degrees tilt)
    const rX = -(mouseY / (height / 2)) * 6;
    const rY = (mouseX / (width / 2)) * 6;
    
    setRotate({ x: rX, y: rY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 18,
        delay: index * 0.15 
      } 
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={cardVariants}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transformStyle: 'preserve-3d',
      }}
      className="glass-card rounded-2xl flex flex-col h-full hover:border-zinc-600/50 hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-200 ease-out overflow-hidden relative group"
    >
      {/* Decorative Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/5 to-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Project Image Container */}
      <div className="relative aspect-video overflow-hidden border-b border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200/60">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 dark:opacity-80 light:opacity-20" />
        
        {/* Project Tag */}
        <span className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-white/80 border border-zinc-800 dark:border-zinc-800 light:border-zinc-200/50 text-brand-blue">
          Project 0{index + 1}
        </span>
      </div>

      {/* Project Body */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="font-display font-extrabold text-2xl text-zinc-100 dark:text-zinc-100 light:text-zinc-900 group-hover:text-gradient transition-colors mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-500 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100 border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:border-zinc-700 dark:hover:border-zinc-700 light:hover:border-zinc-300 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-200/65 mb-6" />

        {/* Features Bullet List */}
        <div className="space-y-2 mb-8 flex-grow">
          <h4 className="text-xs uppercase font-display font-bold tracking-widest text-zinc-500 dark:text-zinc-500 light:text-zinc-400 mb-3 flex items-center gap-1.5">
            <Sparkles size={12} className="text-brand-purple" />
            <span>Key Features</span>
          </h4>
          <ul className="grid grid-cols-1 gap-2 text-zinc-400 dark:text-zinc-400 light:text-zinc-500 text-xs md:text-sm">
            {project.features.map((feat) => (
              <li key={feat} className="flex items-start gap-2.5">
                <span className="p-0.5 rounded-full bg-brand-blue/10 dark:bg-brand-blue/10 light:bg-blue-100 text-brand-blue mt-0.5 flex-shrink-0">
                  <Check size={10} strokeWidth={3} />
                </span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons / Actions */}
        <div className="grid grid-cols-2 gap-3 mt-auto">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-250 bg-zinc-900/30 dark:bg-zinc-900/30 light:bg-white hover:bg-zinc-800/40 dark:hover:bg-zinc-800/40 light:hover:bg-zinc-100 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-zinc-900 font-medium text-xs transition-colors shadow-sm"
          >
            <GithubIcon size={14} />
            <span>GitHub</span>
          </a>

          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 dark:from-brand-blue/10 dark:to-brand-purple/10 light:from-brand-blue/5 light:to-brand-purple/5 border border-brand-blue/20 dark:border-brand-blue/20 light:border-brand-blue/10 hover:border-brand-blue/50 dark:hover:border-brand-blue/50 light:hover:border-brand-blue/30 text-brand-blue hover:text-white dark:hover:text-white light:hover:text-brand-blue font-medium text-xs transition-colors shadow-sm group/btn"
          >
            <span>Live Demo</span>
            <ExternalLink size={14} className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const projectsData = portfolioData.projects;

  return (
    <section
      id="projects"
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
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto rounded-full" />
          <p className="mt-4 text-zinc-400 dark:text-zinc-400 light:text-zinc-500 max-w-xl mx-auto text-sm md:text-base">
            Premium full-stack software engineer applications developed using the MERN stack.
          </p>
        </motion.div>

        {/* Responsive Grid - Exactly 3 Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
