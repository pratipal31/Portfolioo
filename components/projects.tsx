'use client';

import { Github } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface ProjectsProps {
  setActiveSection: (section: string) => void;
}

export default function Projects({ setActiveSection }: ProjectsProps) {
  const projects = [
    {
      id: 1,
      title: 'Safe Tour',
      description:
        'A React Native app that enhances personal safety through geofencing and real-time SOS alerts via Twilio. Seamless management of users, locations, and alerts for safer travel experiences.',
      technologies: [
        'React Native',
        'Expo',
        'Flask',
        'Supabase',
        'Twilio',
        'Geofencing',
      ],
      color: 'from-purple-600 to-pink-500',
      highlights: [
        'Real-time SOS alerts',
        'Geofencing technology',
        'User & location management',
      ],
      github: 'https://github.com/pratipal31/SafeTour-App',
      image: '/logo.png',
    },
    {
      id: 2,
      title: 'ShopEase',
      description:
        'An e-commerce analytics platform that tracks user behavior including clicks, scroll depth, time on page, and navigation patterns. Delivers actionable insights to optimize user experience and boost conversion rates.',
      technologies: [
        'React JS',
        'Node JS',
        'MongoDB',
        'Express JS',
      ],
      color: 'from-emerald-600 to-teal-500',
      highlights: [
        'User behavior tracking',
        'Conversion optimization',
        'Real-time analytics',
      ],
      github: 'https://github.com/pratipal31/ShopEase',
      image: '/shopease.jpg',
    },
    {
      id: 3,
      title: 'EduPortal',
      description:
        'A comprehensive education management portal for students and teachers featuring secure login, online quizzes, marks assessment, leaderboards, performance tracking, and real-time quiz analytics. Integrated with the Groq API to generate intelligent quiz questions, provide instant answers, and deliver detailed AI-powered explanations for every response.',
      technologies: [
        'Next JS',
        'RAG',
        'Supabase',
        'Groq API',
      ],
      color: 'from-violet-600 to-indigo-500',
      highlights: [
        'AI-generated quizzes & explanations',
        'Student leaderboard & performance tracking',
        'Teacher assessment & quiz management',
      ],
      github: 'https://github.com/pratipal31/EduPortal',
      image: '/eduportal.png',
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Background Decoration */}
        <div className="absolute top-40 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

        <div className="space-y-16">
          {/* Section Title */}
          <div className="space-y-4 animate-blur-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Projects
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-yellow-400" />
          </div>

          {/* Projects Flex Layout */}
          <div className="flex flex-wrap justify-center gap-8 animate-blur-in">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    color: string;
    highlights: string[];
    github: string;
    image: string;
  };
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative animate-bounce-in w-full sm:w-[47%] lg:w-[31%]"
      style={{ animationDelay: `${index * 100 + 200}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl h-full flex flex-col glow-cyan hover:-translate-y-1">

        {/* Image Section — slides down on hover */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            height: hovered ? '180px' : '0px',
            transition: 'height 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {/* Gradient overlay on image */}
          <div className={`absolute inset-0 bg-gradient-to-b ${project.color} opacity-40 z-10`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 47vw, 31vw"
          />
        </div>

        {/* Card Content */}
        <div className="p-8 flex flex-col flex-grow">
          {/* Animated Background */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}
          />

          {/* Header */}
          <div className="space-y-3 mb-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400 group-hover:text-yellow-400 transition-all duration-300">
              {project.title}
            </h3>
            <p className="text-base text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-2 mb-6 flex-grow">
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
              Key Features
            </p>
            <ul className="space-y-2">
              {project.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="text-sm text-gray-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="space-y-3 mb-6 pt-4 border-t border-white/10">
            <p className="text-xs font-semibold text-purple-400 uppercase tracking-widest">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="inline-block px-3 py-1 text-xs font-medium rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 transition-all duration-300 group-hover:bg-cyan-500/30 group-hover:border-cyan-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-white/10">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-purple-400/50 text-purple-400 hover:bg-purple-500/10 font-bold text-sm transition-all duration-300 hover:shadow-lg hover:border-purple-400 glow-purple"
            >
              <Github size={16} />
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}