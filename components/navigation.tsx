'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  isScrolled: boolean;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ isScrolled, activeSection, setActiveSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setIsOpen(false);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections, setActiveSection]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-black/95 backdrop-blur-sm border-b border-white/10 shadow-sm glow-cyan' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity neon-cyan"
            >
              PD
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={cn(
                  'text-sm font-medium transition-all duration-300 relative group',
                  activeSection === section.id ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
                )}
              >
                {section.label}
                <span
                  className={cn(
                    'absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300',
                    activeSection === section.id ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors text-cyan-400">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-blur-in">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={cn(
                  'block w-full text-left px-4 py-2 rounded-lg transition-all duration-300',
                  activeSection === section.id
                    ? 'bg-cyan-500 text-black font-bold glow-cyan'
                    : 'text-gray-300 hover:bg-white/10'
                )}
              >
                {section.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
