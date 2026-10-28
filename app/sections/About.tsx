'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Cloud, Terminal, Award, GraduationCap, FileDown, Trophy } from 'lucide-react';

const highlights = [
  {
    icon: Terminal,
    title: 'Python & AI Engineering',
    description: 'Developing full-stack Python solutions, Generative AI applications with Google Gemini API, and computer vision gesture control pipelines using MediaPipe.',
  },
  {
    icon: Cloud,
    title: 'AWS Cloud & DevOps',
    description: 'Hands-on provisioning of Amazon EC2, S3 storage, IAM security roles, Docker containerization, CI/CD pipelines, and Linux server management.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity Fundamentals',
    description: 'Familiarity with ethical hacking methodologies, penetration testing concepts, vulnerability assessment, and security auditing using Kali Linux and Burp Suite.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full grid-overlay opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full glass text-accent-cyan text-sm font-medium mb-4"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight"
            >
              Software Engineer & <span className="bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">Cloud Builder</span>
            </motion.h2>
          </div>

          {/* Key Facts Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="glass rounded-2xl p-6 text-center">
              <GraduationCap className="w-8 h-8 text-accent-cyan mx-auto mb-3" />
              <div className="text-xl font-bold text-white mb-1">Amity University</div>
              <div className="text-sm text-gray-400">B.Tech in Computer Science (2023–2027)</div>
            </div>

            <div className="glass rounded-2xl p-6 text-center">
              <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-xl font-bold text-white mb-1">Hackathon 2nd Place</div>
              <div className="text-sm text-gray-400">College-level award with Nexora project</div>
            </div>

            <div className="glass rounded-2xl p-6 text-center">
              <Award className="w-8 h-8 text-accent-purple mx-auto mb-3" />
              <div className="text-xl font-bold text-white mb-1">Silver Medalist</div>
              <div className="text-sm text-gray-400">District-level Silver Medal in Karate</div>
            </div>
          </motion.div>

          {/* Introduction Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="glass rounded-3xl p-8 sm:p-12 mb-12"
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I am a <strong className="text-white">Computer Science & Engineering student</strong> at Amity University Rajasthan (2023–2027) focused on building dependable Python services, modern web applications, and automated cloud workflows. Through industrial internships at <strong className="text-accent-cyan">LinuxWorld Informatics</strong> and <strong className="text-accent-cyan">The Skybrisk</strong>, I have gained hands-on experience deploying containerized services with Docker, configuring AWS EC2 and S3 resources, and integrating Generative AI models.
            </p>
            <p className="text-base text-gray-400 leading-relaxed mb-6">
              My software engineering philosophy centers around documentation integrity, measurable performance, secure credential handling, and delivering verified production features rather than superficial simulations.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-dark-600">
              <a
                href="/resume/Nikhil_Kumar_Resume.pdf"
                download="Nikhil_Kumar_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-purple text-white text-sm font-semibold hover:shadow-lg hover:shadow-accent-cyan/20 transition-all"
              >
                <FileDown className="w-4 h-4" />
                Download Resume (PDF)
              </a>
              <a
                href="/resume/Nikhil_Kumar_Resume.tex"
                download="Nikhil_Kumar_Resume.tex"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-700 hover:bg-dark-600 border border-dark-500 text-gray-300 hover:text-white text-sm font-medium transition-colors"
              >
                Download LaTeX (.tex) Source
              </a>
            </div>
          </motion.div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 hover:border-accent-cyan/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
