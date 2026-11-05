'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  ExternalLink, 
  Play, 
  X, 
  Maximize2, 
  FileText, 
  Check, 
  Terminal,
  Layers,
  Code2,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/layout/Container';
import initialProjectsData from '@/data/projects.json';
import { ProjectRegistryItem } from '@/types/project';
import { SpotlightCard, EditorialGoldDivider } from '@/components/motion/MotionPrimitives';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [previewProject, setPreviewProject] = useState<ProjectRegistryItem | null>(null);

  const projects = initialProjectsData as unknown as ProjectRegistryItem[];

  const categories = useMemo(() => {
    return ['All', 'AI & ML', 'Automation & Tools', 'Web & Cloud', 'Full Stack'];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((p) => p.category?.toLowerCase() === activeCategory.toLowerCase());
  }, [projects, activeCategory]);

  // Featured projects are top 4 standout technical builds
  const flagshipSlugs = ['hand-gesture-control', 'tech2idea-chatbot', 'careerpilot', 'voice-assistant'];
  const featuredProjects = filteredProjects.filter((p) => flagshipSlugs.includes(p.slug));
  const secondaryProjects = filteredProjects.filter((p) => !flagshipSlugs.includes(p.slug));

  return (
    <main className="min-h-screen bg-[#090B10] text-[#D6D3CC] pb-28">
      {/* Editorial Page Header */}
      <PageHeader
        index="03 // Engineering Case Studies"
        title="Verified software systems, cloud tooling, and interactive prototypes."
        lead="Every project is treated as an engineering case study: containing verified source architecture, local execution commands, environment configurations, and runnable browser-accessible prototypes."
      >
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-4">
          {categories.map((cat) => {
            const count = cat === 'All' 
              ? projects.length 
              : projects.filter((p) => p.category?.toLowerCase() === cat.toLowerCase()).length;
            if (count === 0 && cat !== 'All') return null;

            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-[2px] text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#C6A15B] text-[#090B10] font-semibold border border-[#C6A15B] shadow-sm'
                    : 'bg-[#151C2B] text-[#D6D3CC] hover:text-[#C6A15B] hover:bg-[#182133] border border-[#7792B5]/20'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                  isActive ? 'bg-[#090B10]/20 text-[#090B10]' : 'bg-[#090B10] text-[#7792B5]'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </PageHeader>

      <Container>
        {/* SECTION 1: Featured Case Studies (Asymmetric editorial treatment) */}
        {featuredProjects.length > 0 && (
          <div className="mb-20 pt-12">
            <div className="flex items-center justify-between pb-3 mb-8 border-b border-[#C6A76B]/25">
              <span className="text-xs font-mono uppercase tracking-luxury text-[#C6A15B]">
                Flagship Implementations
              </span>
              <span className="text-xs font-mono text-[#72869E]">
                {featuredProjects.length} Architectural Systems
              </span>
            </div>

            <div className="space-y-8">
              {featuredProjects.map((project, idx) => {
                const detailsHref = `/projects/${project.slug}`;
                const demoHref = project.demoUrl || `/projects/${project.slug}/index.html`;
                const isVerified = project.verificationStatus === 'VERIFIED WORKING';

                return (
                  <SpotlightCard
                    key={project.id}
                    spotlightColor="rgba(198, 161, 91, 0.16)"
                    className="editorial-card p-6 sm:p-10 lg:p-12 hover:border-[#C6A15B]/50 transition-all duration-300"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      
                      {/* Left: Metadata & Narrative (7 cols) */}
                      <div className="lg:col-span-7 space-y-5">
                        <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                          <span className="text-[#C6A15B] font-semibold text-sm">
                            {(idx + 1).toString().padStart(2, '0')}
                          </span>
                          <span className="text-[#7792B5]/40">&bull;</span>
                          <span className="text-[#7792B5] uppercase">
                            {project.category}
                          </span>
                          <span className="text-[#7792B5]/40">&bull;</span>
                          <span className="text-[11px] text-[#D6D3CC] bg-[#090B10] px-2 py-0.5 rounded-[2px] border border-[#7792B5]/25 flex items-center gap-1.5">
                            <span className={`w-1.5 h-1.5 rounded-full ${isVerified ? 'bg-[#C6A15B]' : 'bg-[#7792B5]'}`} />
                            <span>{isVerified ? 'Verified Working' : 'Simulation Sandbox'}</span>
                          </span>
                          <span className="text-[#7792B5]/40">&bull;</span>
                          <span className="text-[#858A96] text-[11px]">
                            {project.executionModel}
                          </span>
                        </div>

                        <h2 className="font-serif text-2xl sm:text-4xl font-normal tracking-tight text-[#EBE8E1]">
                          <Link href={detailsHref} className="hover:text-[#C6A15B] transition-colors">
                            {project.name}
                          </Link>
                        </h2>

                        <p className="text-sm sm:text-base text-[#D6D3CC] leading-relaxed">
                          {project.shortDescription || project.fullDescription}
                        </p>

                        {/* Problem & Solution Callout */}
                        {project.problemStatement && (
                          <div className="bg-[#090B10] p-5 rounded-[2px] border-l-2 border-[#C6A15B] space-y-1.5 border border-[#7792B5]/15">
                            <div className="text-[11px] font-mono uppercase tracking-wider text-[#C6A15B] font-semibold">
                              Engineering Problem Statement
                            </div>
                            <p className="text-xs text-[#858A96] leading-relaxed">
                              {project.problemStatement}
                            </p>
                          </div>
                        )}

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.techStack.map((tech) => (
                            <span key={tech} className="tag-luxury">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right: Technical Specifications & Actions (5 cols) */}
                      <div className="lg:col-span-5 editorial-card-elevated p-6 sm:p-8 space-y-6 bg-[#182133]">
                        <div>
                          <div className="text-[11px] font-mono uppercase tracking-luxury text-[#C6A15B] mb-3">
                            Key Architectural Capabilities
                          </div>
                          <ul className="space-y-2.5 font-mono text-xs text-[#D6D3CC]">
                            {project.features.slice(0, 4).map((feature, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-[#C6A15B] shrink-0 mt-0.5">&bull;</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Actions */}
                        <div className="pt-4 border-t border-[#7792B5]/20 space-y-3">
                          <div className="grid grid-cols-2 gap-3">
                            <button
                              onClick={() => setPreviewProject(project)}
                              className="btn-luxury-gold text-xs py-2.5 px-4 justify-center cursor-pointer"
                            >
                              <Play className="w-3.5 h-3.5 fill-current text-[#090B10]" />
                              <span>Live Preview</span>
                            </button>

                            <a
                              href={demoHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-luxury-secondary text-xs py-2.5 px-4 justify-center"
                            >
                              <ExternalLink className="w-3.5 h-3.5 text-[#7792B5]" />
                              <span>Full Sandbox</span>
                            </a>
                          </div>

                          <div className="flex items-center justify-between pt-2 text-xs font-mono">
                            <Link
                              href={detailsHref}
                              className="text-[#C6A15B] hover:text-[#DEC186] inline-flex items-center gap-1.5 transition-colors"
                            >
                              <FileText className="w-3.5 h-3.5 text-[#C6A15B]" />
                              <span>Detailed Technical Spec &rarr;</span>
                            </Link>

                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#7792B5] hover:text-[#C6A15B] inline-flex items-center gap-1 transition-colors"
                              >
                                <Code2 className="w-3.5 h-3.5 text-[#C6A15B]" />
                                <span>Source</span>
                              </a>
                            )}
                          </div>
                        </div>

                      </div>

                    </div>
                  </SpotlightCard>
                );
              })}
            </div>
          </div>
        )}

        {/* Editorial Divider between Flagship & Secondary */}
        <EditorialGoldDivider className="my-16" />

        {/* SECTION 2: Secondary Projects Directory */}
        {secondaryProjects.length > 0 && (
          <div>
            <div className="flex items-center justify-between pb-3 mb-8 border-b border-[#7792B5]/15">
              <span className="text-xs font-mono uppercase tracking-luxury text-[#C6A15B]">
                Additional Systems &amp; Automation Tools
              </span>
              <span className="text-xs font-mono text-[#858A96]">
                {secondaryProjects.length} Projects
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {secondaryProjects.map((project, index) => {
                const detailsHref = `/projects/${project.slug}`;
                const demoHref = project.demoUrl || `/projects/${project.slug}/index.html`;
                const isVerified = project.verificationStatus === 'VERIFIED WORKING';

                return (
                  <SpotlightCard
                    key={project.id}
                    spotlightColor="rgba(119, 146, 181, 0.14)"
                    className="editorial-card p-6 flex flex-col justify-between hover:border-[#C6A15B]/50 transition-all duration-300"
                  >
                    <div>
                      {/* Card Header & Status */}
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#7792B5]/15 text-xs font-mono">
                        <span className="text-[#C6A15B] uppercase">
                          {(index + 5).toString().padStart(2, '0')} // {project.category}
                        </span>
                        <span className="text-[10px] text-[#EBE8E1] flex items-center gap-1">
                          <span className={`w-1.5 h-1.5 rounded-full ${isVerified ? 'bg-[#C6A76B]' : 'bg-[#72869E]'}`} />
                          <span>{isVerified ? 'Verified' : 'Simulation'}</span>
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-xl font-normal text-[#EBE8E1] mb-2.5">
                        <Link href={detailsHref} className="hover:text-[#C6A15B] transition-colors">
                          {project.name}
                        </Link>
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-[#858A96] leading-relaxed mb-4 line-clamp-3">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div>
                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#7792B5]/15 mb-4">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span key={tech} className="tag-luxury text-[10px]">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setPreviewProject(project)}
                          className="btn-luxury-primary text-xs py-2 px-3 justify-center cursor-pointer"
                        >
                          <Play className="w-3 h-3 fill-current text-[#C6A76B]" />
                          <span>Preview</span>
                        </button>

                        <a
                          href={demoHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-luxury-secondary text-xs py-2 px-3 justify-center"
                        >
                          <ExternalLink className="w-3 h-3 text-[#C6A15B]" />
                          <span>Sandbox</span>
                        </a>
                      </div>

                      <div className="mt-3 text-center">
                        <Link
                          href={detailsHref}
                          className="text-[11px] text-[#72869E] hover:text-[#EBE8E1] font-mono transition-colors inline-flex items-center gap-1"
                        >
                          <FileText className="w-3 h-3 text-[#C6A76B]" />
                          <span>Architecture &amp; Local Specs &rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>
          </div>
        )}
      </Container>

      {/* Interactive Modal Preview Sandbox */}
      {previewProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
          <div className="bg-[#151C2B] border border-[#C6A15B]/40 rounded-[2px] w-full max-w-5xl h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#7792B5]/20 bg-[#090B10] text-[#EBE8E1]">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C6A15B] animate-pulse" />
                <div>
                  <h3 className="font-serif text-base font-normal text-[#EBE8E1] tracking-tight">
                    {previewProject.name} — Interactive Sandbox
                  </h3>
                  <p className="text-[11px] font-mono text-[#858A96]">
                    Running in isolated iframe sandbox // {previewProject.executionModel}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={previewProject.demoUrl || `/projects/${previewProject.slug}/index.html`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-[#858A96] hover:text-[#C6A15B] transition-colors rounded hover:bg-[#151C2B]"
                  title="Open sandbox in dedicated new tab"
                >
                  <Maximize2 className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setPreviewProject(null)}
                  className="p-1.5 text-[#858A96] hover:text-[#C6A15B] transition-colors rounded hover:bg-[#151C2B] cursor-pointer"
                  title="Close preview"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Iframe Body */}
            <div className="flex-1 bg-black relative">
              <iframe
                src={previewProject.demoUrl || `/projects/${previewProject.slug}/index.html`}
                className="w-full h-full border-0"
                title={`${previewProject.name} Live Sandbox`}
                sandbox="allow-scripts allow-same-origin allow-forms allow-modals"
              />
            </div>

            {/* Modal Footer Bar */}
            <div className="px-6 py-3 border-t border-[#7792B5]/20 bg-[#090B10] flex items-center justify-between text-xs font-mono text-[#858A96]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
                <span>Verification: <strong className="text-[#EBE8E1]">{previewProject.verificationStatus}</strong></span>
              </span>
              <Link
                href={`/projects/${previewProject.slug}`}
                onClick={() => setPreviewProject(null)}
                className="text-[#C6A15B] hover:text-[#DEC186] inline-flex items-center gap-1 font-semibold transition-colors"
              >
                <span>Read Full Implementation Specs</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C6A15B]" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

