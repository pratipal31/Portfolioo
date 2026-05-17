'use client';

import { useEffect, useState } from 'react';
import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import About from '@/components/about';
import Experience from '@/components/experience';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Achievements from '@/components/achievements';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="overflow-x-hidden bg-background">
      <Navigation isScrolled={isScrolled} activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <About setActiveSection={setActiveSection} />
      <Experience setActiveSection={setActiveSection} />
      <Projects setActiveSection={setActiveSection} />
      <Skills setActiveSection={setActiveSection} />
      <Achievements setActiveSection={setActiveSection} />
      <Contact />
      <Footer />
    </main>
  );
}
