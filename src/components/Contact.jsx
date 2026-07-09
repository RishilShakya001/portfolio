import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, AlertCircle, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './BrandIcons';

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | 'demo'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSending(true);
    setStatus(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if configuration is missing, use simulation if so
    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS credentials are missing. Running in simulation mode.");
      setTimeout(() => {
        setIsSending(false);
        setStatus('demo');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1200);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setIsSending(false);
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setIsSending(false);
          setStatus('error');
        }
      );
  };

  return (
    <section
      id="contact"
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
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto rounded-full" />
          <p className="mt-4 text-zinc-400 dark:text-zinc-400 light:text-zinc-500 max-w-xl mx-auto text-sm md:text-base">
            Have a question, feedback, or internship opportunity? Drop a message!
          </p>
        </motion.div>

        {/* Contact Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl glow-blue">
              <h3 className="font-display font-bold text-xl text-zinc-100 dark:text-zinc-100 light:text-zinc-800 mb-4">
                Let's Collaborate
              </h3>
              <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-500 text-sm md:text-base leading-relaxed mb-8">
                I am actively seeking software engineering and full-stack development internship opportunities for 2026/2027. I am eager to contribute, learn, and build impactful products alongside experienced engineering teams.
              </p>

              {/* Direct Info */}
              <div className="space-y-4">
                <a
                  href={`mailto:${portfolioData.personalInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-zinc-950/30 dark:bg-zinc-950/30 light:bg-zinc-100 border border-zinc-900 dark:border-zinc-900 light:border-zinc-200 hover:border-brand-blue/40 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-brand-blue/10 text-brand-blue group-hover:scale-105 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 dark:text-zinc-500 light:text-zinc-400 font-semibold">
                      Email Address
                    </span>
                    <span className="text-sm font-medium text-zinc-300 dark:text-zinc-300 light:text-zinc-700 group-hover:text-brand-blue transition-colors">
                      {portfolioData.personalInfo.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-950/30 dark:bg-zinc-950/30 light:bg-zinc-100 border border-zinc-900 dark:border-zinc-900 light:border-zinc-200">
                  <div className="p-3 rounded-lg bg-brand-purple/10 text-brand-purple">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-500 dark:text-zinc-500 light:text-zinc-400 font-semibold">
                      Location
                    </span>
                    <span className="text-sm font-medium text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
                      MNNIT Campus, Allahabad, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8">
                <span className="text-xs uppercase tracking-widest font-display font-semibold text-zinc-500 dark:text-zinc-500 light:text-zinc-400">
                  Social Links
                </span>
                <div className="flex gap-3 mt-4">
                  <a
                    href={portfolioData.socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl border border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200 bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-white text-zinc-400 dark:text-zinc-400 light:text-zinc-500 hover:text-white dark:hover:text-white light:hover:text-zinc-850 hover:bg-zinc-900/60 dark:hover:bg-zinc-900/60 light:hover:bg-zinc-100 hover:border-zinc-700 dark:hover:border-zinc-700 light:hover:border-zinc-300 transition-colors shadow-sm"
                    aria-label="GitHub"
                  >
                    <GithubIcon size={18} />
                  </a>

                  <a
                    href={portfolioData.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl border border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200 bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-white text-zinc-400 dark:text-zinc-400 light:text-zinc-500 hover:text-white dark:hover:text-white light:hover:text-zinc-850 hover:bg-zinc-900/60 dark:hover:bg-zinc-900/60 light:hover:bg-zinc-100 hover:border-zinc-700 dark:hover:border-zinc-700 light:hover:border-zinc-300 transition-colors shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon size={18} />
                  </a>

                  <a
                    href={portfolioData.socialLinks.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl border border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200 bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-white text-zinc-400 dark:text-zinc-400 light:text-zinc-500 hover:text-white dark:hover:text-white light:hover:text-zinc-850 hover:bg-zinc-900/60 dark:hover:bg-zinc-900/60 light:hover:bg-zinc-100 hover:border-zinc-700 dark:hover:border-zinc-700 light:hover:border-zinc-300 transition-colors shadow-sm"
                    aria-label="LeetCode"
                  >
                    <LeetCodeIcon size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 rounded-2xl glow-purple relative">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-zinc-500 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-zinc-50 border transition-colors outline-none text-zinc-100 dark:text-zinc-100 light:text-zinc-950 focus:border-brand-purple ${
                      errors.name
                        ? 'border-red-500/50 focus:border-red-500'
                        : 'border-zinc-800 dark:border-zinc-800 light:border-zinc-200'
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <span className="block text-xs text-red-500 mt-1 font-medium">{errors.name}</span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-zinc-500 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-zinc-50 border transition-colors outline-none text-zinc-100 dark:text-zinc-100 light:text-zinc-950 focus:border-brand-purple ${
                      errors.email
                        ? 'border-red-500/50 focus:border-red-500'
                        : 'border-zinc-800 dark:border-zinc-800 light:border-zinc-200'
                    }`}
                    placeholder="name@example.com"
                  />
                  {errors.email && (
                    <span className="block text-xs text-red-500 mt-1 font-medium">{errors.email}</span>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-zinc-500 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-zinc-50 border transition-colors outline-none text-zinc-100 dark:text-zinc-100 light:text-zinc-950 focus:border-brand-purple ${
                      errors.subject
                        ? 'border-red-500/50 focus:border-red-500'
                        : 'border-zinc-800 dark:border-zinc-800 light:border-zinc-200'
                    }`}
                    placeholder="How can I help you?"
                  />
                  {errors.subject && (
                    <span className="block text-xs text-red-500 mt-1 font-medium">{errors.subject}</span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-zinc-500 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-zinc-50 border transition-colors outline-none text-zinc-100 dark:text-zinc-100 light:text-zinc-950 focus:border-brand-purple resize-none ${
                      errors.message
                        ? 'border-red-500/50 focus:border-red-500'
                        : 'border-zinc-800 dark:border-zinc-800 light:border-zinc-200'
                    }`}
                    placeholder="Write your message here..."
                  />
                  {errors.message && (
                    <span className="block text-xs text-red-500 mt-1 font-medium">{errors.message}</span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple hover:from-blue-600 hover:to-purple-600 text-white font-semibold text-sm transition-all duration-300 shadow-md shadow-brand-blue/20 hover:shadow-lg hover:shadow-brand-blue/30 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 transform cursor-pointer"
                >
                  {isSending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>

              {/* Status Notifications */}
              {status && (
                <div className="mt-5">
                  {status === 'success' && (
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
                      <CheckCircle2 size={18} className="flex-shrink-0" />
                      <span>Thank you! Your message has been sent successfully.</span>
                    </div>
                  )}
                  {status === 'demo' && (
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm">
                      <CheckCircle2 size={18} className="flex-shrink-0" />
                      <span>[Demo Mode] Form submitted successfully! Hook up EmailJS API keys in production.</span>
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                      <AlertCircle size={18} className="flex-shrink-0" />
                      <span>Oops! Something went wrong. Please try sending again or contact via direct email.</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
