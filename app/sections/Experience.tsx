'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import initialExperience from '@/data/experience.json';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  skills: string[];
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [experiences, setExperiences] = useState<ExperienceItem[]>(initialExperience as ExperienceItem[]);

  useEffect(() => {
    fetch('/api/experience')
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('API fetch failed');
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setExperiences(data);
        }
      })
      .catch(() => {
        // Fallback already set from initialExperience
      });
  }, []);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full grid-overlay opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full glass text-accent-cyan text-sm font-medium mb-4"
            >
              <Briefcase className="w-4 h-4 inline mr-2" />
              Verified Experience
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight"
            >
              Work & <span className="bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">Internships</span>
            </motion.h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-purple to-transparent" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                  className="relative pl-12 sm:pl-20"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-2.5 sm:left-6.5 top-1.5 w-4 h-4 rounded-full bg-accent-cyan ring-4 ring-dark-900 ring-opacity-80 -translate-x-1/2 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  {/* Card */}
                  <div className="glass rounded-2xl p-6 sm:p-8 hover:border-accent-cyan/30 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-accent-cyan transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-accent-cyan font-mono bg-accent-cyan/10 px-3 py-1 rounded-full w-fit">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.duration}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-accent-purple" />
                        <span className="text-gray-300 font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-dark-600/60">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-dark-700/80 text-gray-300 border border-dark-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
