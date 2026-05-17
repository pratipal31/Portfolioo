'use client';

import { Trophy, Star, Award } from 'lucide-react';

interface AchievementsProps {
  setActiveSection: (section: string) => void;
}

export default function Achievements({ setActiveSection }: AchievementsProps) {
  const achievements = [
    {
      icon: Star,
      title: 'Finalist at Nomura Kakushin 9.0',
      description: 'Recognized as a finalist at one of the most prestigious hackathons, showcasing innovation and problem-solving skills.',
      year: '2025',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Trophy,
      title: 'Sportsman of the Year',
      description: 'Awarded for outstanding performance and significant contribution to sports at college, demonstrating excellence beyond academics.',
      year: '2026',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Award,title: 'Hackathon Winner – Brained Company',
  description: 'Won the Brained Company Hackathon for developing an innovative MERN Stack website, showcasing strong full-stack development, problem-solving, and teamwork skills.',
      year: '2026',
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Background Decoration */}
        <div className="absolute top-40 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl -z-10" />

        <div className="space-y-16">
          {/* Section Title */}
          <div className="space-y-4 animate-blur-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">Achievements & Awards</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-cyan-400" />
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-3 gap-6 animate-blur-in" style={{ animationDelay: '0.2s' }}>
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/2 p-6 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl animate-bounce-in glow-gold hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100 + 300}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`} />

                  <div className="relative space-y-4">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${achievement.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={24} />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-2 group-hover:text-cyan-400 transition-all duration-300">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed">{achievement.description}</p>
                    </div>

                    {/* Year */}
                    <div className="pt-2 border-t border-white/10">
                      <p className="text-xs sm:text-sm font-semibold text-yellow-400">{achievement.year}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
