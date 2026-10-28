'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  ExternalLink, 
  Github, 
  Layers, 
  Loader2,
  Folder,
  Play,
  X,
  FileText,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import initialProjectsData from '@/data/projects.json';
import { Project } from '@/app/services/api';

const techColors: Record<string, string> = {
  Python: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/30',
  JavaScript: 'bg-yellow-400/15 text-yellow-200 border-yellow-400/30',
  TypeScript: 'bg-blue-400/15 text-blue-200 border-blue-400/30',
  React: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
  'Next.js': 'bg-gray-400/15 text-gray-200 border-gray-500/30',
  Node: 'bg-green-500/15 text-green-300 border-green-500/30',
  Flask: 'bg-gray-300/15 text-gray-200 border-gray-400/30',
  Docker: 'bg-blue-600/15 text-blue-300 border-blue-600/30',
  AWS: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
  'AWS EC2': 'bg-orange-500/15 text-orange-300 border-orange-500/30',
  'Google Gemini API': 'bg-pink-500/15 text-pink-300 border-pink-500/30',
  MediaPipe: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
  OpenCV: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
  SQLAlchemy: 'bg-red-500/15 text-red-300 border-red-500/30',
  WebRTC: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
};

function getTechColor(tech: string): string {
  return techColors[tech] || 'bg-accent-cyan/15 text-accent-cyan border-accent-cyan/30';
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [showPreview, setShowPreview] = useState(false);

  const getStatusBadge = (status?: string) => {
    switch (status) {
      case 'VERIFIED WORKING':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'SIMULATION ONLY':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'REQUIRES EXTERNAL CONFIGURATION':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      default:
        return 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/30';
    }
  };

  const detailsHref = project.slug ? `/projects/${project.slug}` : project.detailsUrl || '#';
  const demoHref = project.demoUrl || project.liveLink || detailsHref;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group relative glass rounded-2xl overflow-hidden hover:border-accent-cyan/40 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 via-accent-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Preview Modal */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-30 flex flex-col bg-dark-900/98 backdrop-blur-md rounded-2xl"
          >
            <div className="flex items-center justify-between p-3.5 border-b border-dark-600">
              <span className="text-xs font-semibold text-accent-cyan">Preview: {project.name}</span>
              <button
                onClick={() => setShowPreview(false)}
                className="p-1 rounded-lg hover:bg-dark-700 text-gray-400 hover:text-white transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 min-h-0 p-3">
              <iframe
                src={demoHref}
                title={`${project.name} preview`}
                className="w-full h-full min-h-[280px] rounded-xl border border-dark-600 bg-dark-900"
                sandbox="allow-scripts allow-same-origin allow-forms allow-modals"
              />
              <div className="mt-2.5 flex items-center justify-between gap-2">
                <Link
                  href={detailsHref}
                  className="text-xs text-gray-300 hover:text-white underline"
                >
                  View Full Project Details & Docs
                </Link>
                <a
                  href={demoHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-accent-cyan text-dark-900 text-xs font-bold hover:opacity-90 inline-flex items-center gap-1"
                >
                  Open In New Tab <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="p-6 flex-1 flex flex-col">
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-mono text-accent-purple uppercase tracking-wider font-semibold">
            {project.category || 'Software Project'}
          </span>
          {project.verificationStatus && (
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-medium border ${getStatusBadge(project.verificationStatus)}`}>
              {project.verificationStatus}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
          <Link href={detailsHref} className="hover:underline">
            {project.name}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-xs sm:text-sm mb-4 line-clamp-3 leading-relaxed flex-1">
          {project.shortDescription || project.description}
        </p>

        {/* Features Preview */}
        {project.features && (
          <div className="mb-4">
            <ul className="space-y-1">
              {project.features.slice(0, 3).map((feature: string, idx: number) => (
                <li key={idx} className="flex items-start gap-1.5 text-gray-400 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 flex-shrink-0" />
                  <span className="line-clamp-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {(project.techStack || project.tech || []).slice(0, 4).map((tech) => (
            <span
              key={tech}
              className={`px-2 py-0.5 rounded-full text-[11px] font-medium border ${getTechColor(tech)}`}
            >
              {tech}
            </span>
          ))}
          {(project.techStack || project.tech || []).length > 4 && (
            <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-dark-700 text-gray-400">
              +{(project.techStack || project.tech || []).length - 4}
            </span>
          )}
        </div>

        {/* Actions Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-dark-600/60 mt-auto">
          {demoHref && (
            <>
              <button
                onClick={() => setShowPreview(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-700/80 hover:bg-dark-600 text-accent-cyan text-xs font-medium border border-dark-500 transition-colors"
              >
                <Play className="w-3 h-3" />
                Preview
              </button>
              <a
                href={demoHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-purple text-white text-xs font-semibold hover:shadow-md transition-all"
              >
                <ExternalLink className="w-3 h-3" />
                Live Demo
              </a>
            </>
          )}

          <Link
            href={detailsHref}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg glass text-gray-300 hover:text-white text-xs font-medium transition-colors ml-auto"
          >
            <FileText className="w-3 h-3" />
            Details & Docs
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [projects, setProjects] = useState<Project[]>(initialProjectsData as unknown as Project[]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('API fetch error');
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProjects(data);
        }
      })
      .catch(() => {
        // Fallback already populated
      });
  }, []);

  const categories = ['All', 'AI & ML', 'Web & Cloud', 'Automation & Tools', 'Full Stack'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full grid-overlay opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full glass text-accent-cyan text-sm font-medium mb-4"
            >
              <Folder className="w-4 h-4 inline mr-2" />
              Verified Portfolio Projects
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight"
            >
              Engineered <span className="bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">Applications</span>
            </motion.h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              Every project includes source code, interactive web demos, verified feature breakdowns, and runnable local setups.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-accent-cyan to-accent-purple text-white shadow-md'
                    : 'glass text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
