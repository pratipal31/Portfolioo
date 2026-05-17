'use client';

import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';



export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus('success');
      setFormState({ name: '', email: '', message: '' });

      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pratipal.dhaulakhandi.31@gmail.com',
      href: 'mailto:pratipal.dhaulakhandi.31@gmail.com',
      color: 'from-red-600 to-pink-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'pratipal-dhaulakhandi',
      href: 'https://linkedin.com/in/pratipal-dhaulakhandi',
      color: 'from-blue-700 to-blue-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'pratipal31',
      href: 'https://github.com/pratipal31',
      color: 'from-slate-700 to-slate-500',
    },
  ];

  const buttonContent = {
    idle: 'Send Message',
    sending: (
      <span className="flex items-center justify-center gap-2">
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
        </svg>
        Sending…
      </span>
    ),
    success: '✓ Message Sent!',
    error: '✗ Failed — Try Again',
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Background Decoration */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl -z-10" />

        <div className="space-y-16">
          {/* Section Title */}
          <div className="space-y-4 animate-blur-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Get in Touch
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500" />
          </div>

          <div
            className="grid lg:grid-cols-2 gap-12 animate-blur-in"
            style={{ animationDelay: '0.2s' }}
          >
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-cyan-400">
                  Let&apos;s Connect
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I&apos;m always open to new opportunities, collaborations, and
                  interesting conversations. Whether you have a project in mind
                  or just want to say hello, feel free to reach out!
                </p>
              </div>

              {/* Contact Links */}
              <div className="space-y-4">
                {contactLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg animate-bounce-in glow-cyan hover:-translate-y-1"
                      style={{ animationDelay: `${index * 75 + 300}ms` }}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${link.color} text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent size={20} />
                        </div>
                        <div className="flex-grow min-w-0">
                          <p className="text-sm font-semibold text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
                            {link.label}
                          </p>
                          <p className="text-base font-medium text-white break-all group-hover:text-yellow-400 transition-all duration-300">
                            {link.value}
                          </p>
                        </div>
                        <ExternalLink
                          size={16}
                          className="text-gray-400 group-hover:text-cyan-400 flex-shrink-0 mt-1 transition-colors duration-300"
                        />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="animate-slide-in-right"
              style={{ animationDelay: '0.2s' }}
            >
              {/*
                EmailJS reads input field values via the `name` attribute.
                These must match the variable names in your EmailJS template:
                  {{from_name}}, {{from_email}}, {{message}}
              */}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                {/* Name — maps to {{from_name}} in EmailJS template */}
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                  />
                </div>

                {/* Email — maps to {{from_email}} in EmailJS template */}
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                  />
                </div>

                {/* Message — maps to {{message}} in EmailJS template */}
                <div className="relative group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  className={`w-full px-6 py-3 font-semibold rounded-lg transition-all duration-300 transform active:scale-95
                    ${status === 'error'
                      ? 'bg-gradient-to-r from-red-600 to-rose-500 hover:shadow-red-500/30'
                      : 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-cyan-500/30'
                    }
                    text-white hover:shadow-lg hover:scale-105 disabled:opacity-75 disabled:cursor-not-allowed disabled:scale-100`}
                >
                  {buttonContent[status]}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}