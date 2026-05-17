'use client';

import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent neon-cyan">
              Pratipal
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Full Stack Developer crafting innovative digital solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="space-y-2">
              <a
                href="https://github.com/pratipal31"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 dark:hover:text-cyan-400 transition-colors duration-300 text-sm block"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/pratipal-dhaulakhandi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 dark:hover:text-cyan-400 transition-colors duration-300 text-sm block"
              >
                LinkedIn
              </a>
              <a
                href="mailto:pratipal.dhaulakhandi.31@gmail.com"
                className="text-slate-400 hover:text-blue-400 dark:hover:text-cyan-400 transition-colors duration-300 text-sm block"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400 text-center sm:text-left">
            © {currentYear} Pratipal Dhaulakhandi. All rights reserved. Made with{' '}
            <Heart size={14} className="inline text-red-500 animate-pulse" /> and passion.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Back to Top
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
