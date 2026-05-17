'use client';

import { Briefcase, Calendar, ArrowRight } from 'lucide-react';

interface ExperienceProps {
  setActiveSection: (section: string) => void;
}

export default function Experience({ setActiveSection }: ExperienceProps) {
  const experiences = [
    {
      id: 1,
      title: 'IT Intern',
      company: 'Essar UK Services',
      period: 'Jan 2026 – Present',
      achievements: [
        'Developed a Vessel Demurrage Management application with end-to-end workflows including plan creation, stop management, and claim generation',
        'Built a BOL Movement Automation system using Next.js and Python for SQL data processing and PDF bill generation',
        'Created a Docker-based data pipeline (MySQL → Elasticsearch → Kibana) for real-time analytics dashboards',
      ],
      technologies: ['Next.js', 'Python', 'Docker', 'MySQL', 'Elasticsearch', 'Kibana', 'SharePoint'],
      color: 'from-blue-600 to-cyan-500',
    },
    {
      id: 2,
      title: 'Web Developer',
      company: 'Hungry Brain',
      period: 'Jul 2022 – Sep 2022',
      achievements: [
        'Developed and customized websites using Shopify and WordPress',
        'Optimized websites with SEO-focused content to improve rankings and visibility',
        'Designed and deployed conversion-driven landing pages and managed web hosting',
        'Configured and updated secure payment gateway options for seamless checkout',
      ],
      technologies: ['Shopify', 'WordPress', 'SEO', 'HTML', 'CSS', 'Payment Gateways'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Background Decoration */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl -z-10" />

        <div className="space-y-16">
          {/* Section Title */}
          <div className="space-y-4 animate-blur-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">Experience</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500" />
          </div>

          {/* Timeline */}
          <div className="space-y-8 animate-blur-in" style={{ animationDelay: '0.2s' }}>
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="group relative animate-bounce-in"
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                {/* Vertical Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 sm:left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-transparent hidden sm:block" />
                )}

                <div className="flex gap-4 sm:gap-6">
                  {/* Timeline Dot */}
                  <div className="flex flex-col items-center gap-4 flex-shrink-0">
                    <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br ${exp.color} ring-4 ring-black shadow-lg transition-transform duration-300 group-hover:scale-110 relative z-10`} />
                  </div>

                  {/* Content */}
                  <div className="flex-grow pb-8">
                    <div className="group/card relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/2 p-6 sm:p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl glow-cyan hover:-translate-y-1">
                      {/* Gradient Background on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover/card:opacity-5 transition-opacity duration-300 -z-10`} />

                      {/* Header */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 group-hover/card:text-yellow-400 transition-all duration-300">
                              {exp.title}
                            </h3>
                            <p className="text-base text-purple-400 font-semibold">{exp.company}</p>
                          </div>
                          <Briefcase size={24} className={`text-transparent bg-gradient-to-br ${exp.color} bg-clip-text flex-shrink-0`} />
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Calendar size={16} />
                          {exp.period}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3 mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex gap-3">
                            <ArrowRight size={16} className="text-cyan-400 flex-shrink-0 mt-1" />
                            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{achievement}</p>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="inline-block px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 transition-all duration-300 group-hover/card:bg-cyan-500/30 group-hover/card:border-cyan-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
