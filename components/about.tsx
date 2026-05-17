'use client';

import { GraduationCap } from 'lucide-react';

interface AboutProps {
  setActiveSection: (section: string) => void;
}

export default function About({ setActiveSection }: AboutProps) {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl -z-10" />

        <div className="space-y-16">
          {/* Section Title */}
          <div className="space-y-4 animate-blur-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">About Me</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500" />
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center animate-blur-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I&apos;m a passionate full-stack developer with a strong foundation in computer engineering and IT. Currently pursuing my <span className="font-semibold text-cyan-400 neon-cyan">BE in Computer Engineering</span> at Fr Conceicao Rodrigues College of Engineering.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With hands-on experience in building scalable web applications, data analytics pipelines, and innovative solutions, I&apos;m committed to leveraging technology to solve real-world problems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My expertise spans across modern tech stacks including React, Next.js, Python, Docker, and cloud technologies, combined with a keen interest in data analytics and business intelligence.
              </p>
            </div>

            {/* Education Cards */}
            <div className="space-y-4">
              {/* Current Degree */}
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-6 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 glow-cyan hover:-translate-y-1 animate-bounce-in">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/0 to-purple-500/0 group-hover:from-cyan-600/5 group-hover:to-purple-500/5 transition-all duration-300" />
                <div className="relative space-y-2">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-cyan-400">BE – Computer Engineering</h3>
                      <p className="text-sm text-gray-400">Fr Conceicao Rodrigues College of Engineering</p>
                    </div>
                    <GraduationCap size={24} className="text-cyan-400 flex-shrink-0" />
                  </div>
                  <div className="space-y-1 pt-2 border-t border-cyan-500/30">
                    <p className="text-sm text-gray-400">Aug 2023 – Present</p>
                    <p className="text-sm font-semibold text-white">CGPA: 8.03</p>
                  </div>
                </div>
              </div>

              {/* Diploma */}
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500/10 to-yellow-500/10 p-6 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 glow-purple hover:-translate-y-1 animate-bounce-in" style={{ animationDelay: '0.1s' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-yellow-500/0 group-hover:from-purple-600/5 group-hover:to-yellow-500/5 transition-all duration-300" />
                <div className="relative space-y-2">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-purple-400">Diploma in Information Technology</h3>
                      <p className="text-sm text-gray-400">Shri Bahghubhai Mafatlal Polytechnic</p>
                    </div>
                    <GraduationCap size={24} className="text-purple-400 flex-shrink-0" />
                  </div>
                  <div className="space-y-1 pt-2 border-t border-purple-500/30">
                    <p className="text-sm text-gray-400">Jan 2021 – Jun 2023</p>
                    <p className="text-sm font-semibold text-white">Aggregate: 89.3%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
