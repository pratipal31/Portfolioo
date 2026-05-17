'use client';

import { Code2, Database, BarChart3, Zap } from 'lucide-react';

interface SkillsProps {
  setActiveSection: (section: string) => void;
}

export default function Skills({ setActiveSection }: SkillsProps) {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming',
      skills: ['Java', 'Python', 'JavaScript', 'TypeScript'],
      color: 'from-blue-600 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    },
    {
      icon: Code2,
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'],
      color: 'from-purple-600 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase'],
      color: 'from-emerald-600 to-teal-500',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      skills: ['Power BI', 'Elasticsearch', 'Kibana', 'Data Visualization'],
      color: 'from-orange-600 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-950/30',
    },
    {
      icon: Zap,
      title: 'DevOps & Tools',
      skills: ['Docker', 'Git', 'GitHub', 'Postman'],
      color: 'from-indigo-600 to-blue-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-950/30',
    },
    {
      icon: Code2,
      title: 'Platforms',
      skills: ['WordPress', 'Shopify', 'SharePoint'],
      color: 'from-cyan-600 to-blue-500',
      bgColor: 'bg-cyan-50 dark:bg-cyan-950/30',
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Background Decoration */}
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -z-10" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

        <div className="space-y-16">
          {/* Section Title */}
          <div className="space-y-4 animate-blur-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">Skills</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-blur-in" style={{ animationDelay: '0.2s' }}>
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/2 p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl animate-bounce-in glow-cyan hover:-translate-y-1"
                  style={{
                    animationDelay: `${index * 75 + 300}ms`,
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`} />

                  <div className="relative space-y-4">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                        <IconComponent size={24} />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-cyan-400 group-hover:text-yellow-400 transition-all duration-300">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills List */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="inline-block px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 transition-all duration-300 group-hover:bg-cyan-500/30 group-hover:border-cyan-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Certification */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/30 animate-blur-in glow-cyan" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 text-white">
                  <Code2 size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Python Certification</h3>
                <p className="text-gray-300">
                  Completed comprehensive Python training covering functions, loops, conditionals, file handling, and modern programming practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
