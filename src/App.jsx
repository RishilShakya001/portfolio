import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-zinc-300 antialiased selection:bg-brand-blue/30 selection:text-white overflow-x-hidden relative">
      
      {/* Main Background Layers */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100 pointer-events-none -z-20" />
      
      <Navbar />
      
      <main className="relative">
        {/* Hero Section */}
        <Hero />
        
        {/* Main Sections wrapped in a centered max-width container */}
        <div className="max-w-7xl mx-auto space-y-4">
          <About />
          <Skills />
          <Projects />
          <CodingProfiles />
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
