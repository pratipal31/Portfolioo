'use client';

import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import dynamic from 'next/dynamic';

const Robot3D = dynamic(() => import('./robot-3d').then(mod => ({ default: mod.Robot3D })), {
  ssr: false,
});

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse animation-delay-400" />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-8">
          {/* Main Heading with Robot */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Section */}
            <div className="animate-blur-in space-y-4 text-center lg:text-left">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-pretty mb-4">
                <span className="block text-white animate-slide-in-left">Pratipal</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-yellow-400 animate-slide-in-right" style={{ animation: 'slide-in-right 0.6s ease-out 0.2s both' }}>
                  Dhaulakhandi
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-400 font-light">Full Stack Developer & Technology Enthusiast</p>
            </div>

            {/* Robot 3D Section */}
            <div className="relative h-96 w-full animate-float">
              <Robot3D width="100%" height="100%" />
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed animate-blur-in text-center" style={{ animationDelay: '0.3s' }}>
            I craft innovative digital solutions using modern technologies. Currently interning at <span className="font-semibold text-cyan-400 neon-cyan">Essar UK Services</span>, building vessel management systems and data pipelines.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://github.com/pratipal31"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-110 glow-cyan hover:-translate-y-1 animate-bounce-in"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/pratipal-dhaulakhandi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-110 glow-purple hover:-translate-y-1 animate-bounce-in"
              style={{ animationDelay: '0.1s' }}
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="mailto:pratipal.dhaulakhandi.31@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 rounded-lg font-bold transition-all duration-300 transform hover:scale-110 glow-gold hover:-translate-y-1 animate-bounce-in"
              style={{ animationDelay: '0.2s' }}
            >
              <Mail size={20} />
              Email
            </a>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <button
              onClick={() => scrollToSection('about')}
              className="inline-flex flex-col items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 group"
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <ArrowDown size={20} className="group-hover:translate-y-1 group-hover:text-cyan-400 transition-all duration-300 animate-float" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
