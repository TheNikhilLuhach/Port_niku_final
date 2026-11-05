import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Terminal, 
  Check, 
  AlertTriangle, 
  Layers, 
  Play,
  ArrowUpRight,
  ShieldCheck,
  BookOpen,
  Cpu,
  Code2
} from 'lucide-react';
import projectsData from '@/data/projects.json';
import { ProjectRegistryItem } from '@/types/project';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return (projectsData as ProjectRegistryItem[]).map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = (projectsData as ProjectRegistryItem[]).find(
    (p) => p.slug === params.slug
  );

  if (!project) {
    notFound();
  }

  const getModelLabel = (model: string) => {
    switch (model) {
      case 'browser-native': return 'Browser Native';
      case 'nextjs': return 'Next.js Integrated';
      case 'separate-backend': return 'Flask / Python Backend';
      case 'local-only': return 'Local Python / Desktop Hook';
      case 'safe-simulation': return 'Sandboxed Web Simulation';
      default: return model;
    }
  };

  const isVerified = project.verificationStatus === 'VERIFIED WORKING';

  return (
    <div className="min-h-screen bg-[#090B10] text-[#D6D3CC] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between mb-10 pb-5 border-b border-[#C6A76B]/25">
          <Link
            href="/projects"
            className="flex items-center gap-2 text-xs font-mono text-[#858A96] hover:text-[#EBE8E1] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 text-[#C6A15B] group-hover:-translate-x-0.5 transition-transform" />
            <span>&larr; Back to Case Studies Directory</span>
          </Link>
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-[2px] text-xs font-mono font-medium bg-[#151C2B] border border-[#C6A76B]/35 text-[#EBE8E1] flex items-center gap-1.5 shadow-xs">
              <span className={`w-1.5 h-1.5 rounded-full ${isVerified ? 'bg-[#C6A76B]' : 'bg-[#72869E]'}`} />
              <span>{project.verificationStatus}</span>
            </span>
            <span className="hidden sm:inline-block px-3 py-1 rounded-[2px] text-xs font-mono bg-[#151C2B] text-[#72869E] border border-[#7792B5]/30">
              {getModelLabel(project.executionModel)}
            </span>
          </div>
        </div>

        {/* Project Header — Luxury Editorial Masthead */}
        <div className="mb-12 space-y-5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A76B]" />
            <span className="text-xs font-mono uppercase tracking-luxury text-[#C6A15B]">
              {project.category} &bull; Verified: {project.verificationDate}
            </span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#EBE8E1] leading-[1.06]">
            {project.name}
          </h1>

          <p className="text-base sm:text-xl text-[#858A96] leading-relaxed max-w-3xl font-normal">
            {project.fullDescription}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-gold py-3 px-6 text-sm"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Launch Full-Screen Demo</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-secondary py-3 px-5 text-sm"
              >
                <Github className="w-4 h-4 text-[#C6A15B]" />
                <span>View GitHub Repository</span>
              </a>
            )}
          </div>
        </div>

        {/* Embedded Interactive Demo */}
        {project.demoUrl && (
          <div className="mb-14 rounded-[2px] bg-[#EBE8E1] border border-[#C6A76B]/35 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#0F1827] border-b border-[#C6A76B]/25">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C6A76B] animate-pulse" />
                <span className="text-xs font-mono text-[#DFCCA2]">
                  Interactive Demo Sandbox — {project.name}
                </span>
              </div>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#DFCCA2] hover:text-[#151C2B] flex items-center gap-1 font-mono transition-colors"
              >
                <span>Open Full Screen</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="relative w-full h-[540px] bg-black">
              <iframe
                src={project.demoUrl}
                title={`${project.name} Live Demo`}
                className="w-full h-full border-0"
                sandbox="allow-scripts allow-same-origin allow-forms allow-modals"
              />
            </div>
          </div>
        )}

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="editorial-card p-6 sm:p-8 space-y-3 border-l-2 border-l-[#72869E]">
            <div className="flex items-center gap-2 text-[#EBE8E1]">
              <AlertTriangle className="w-4 h-4 text-[#C6A15B]" />
              <h3 className="text-[11px] font-mono font-bold uppercase tracking-luxury text-[#C6A15B]">Problem Statement</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#858A96] leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          <div className="editorial-card p-6 sm:p-8 space-y-3 border-l-2 border-l-[#C6A76B]">
            <div className="flex items-center gap-2 text-[#EBE8E1]">
              <Check className="w-4 h-4 text-[#C6A76B]" />
              <h3 className="text-[11px] font-mono font-bold uppercase tracking-luxury text-[#C6A15B]">Technical Solution</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#858A96] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture & Tech Stack */}
        <div className="editorial-card p-7 sm:p-10 mb-10 space-y-6">
          <div className="flex items-center gap-2 pb-4 border-b border-[#7792B5]/20">
            <div className="w-9 h-9 rounded-[2px] bg-[#EBE8E1] flex items-center justify-center text-[#C6A76B]">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-[11px] font-mono uppercase tracking-luxury text-[#C6A15B]">Architecture Specification</h3>
              <span className="text-sm font-serif font-normal text-[#EBE8E1]">Engineering Implementation &amp; System Design</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#858A96] leading-relaxed">
            {project.architecture}
          </p>

          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#C6A15B] mb-3">
              Technologies &amp; Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="tag-luxury">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.myContribution && (
            <div className="border-t border-[#7792B5]/20 pt-5 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#C6A15B]">
                Engineering Contribution
              </span>
              <p className="text-xs sm:text-sm text-[#858A96] leading-relaxed">
                {project.myContribution}
              </p>
            </div>
          )}
        </div>

        {/* Verified Features */}
        <div className="editorial-card p-7 sm:p-10 mb-10 space-y-5">
          <div className="flex items-center gap-2 pb-4 border-b border-[#7792B5]/20">
            <div className="w-9 h-9 rounded-[2px] bg-[#EBE8E1] flex items-center justify-center text-[#C6A76B]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-[11px] font-mono uppercase tracking-luxury text-[#C6A15B]">Verified Capabilities</h3>
              <span className="text-sm font-serif font-normal text-[#EBE8E1]">Confirmed Functional Features</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs font-mono text-[#858A96] py-1.5 border-b border-[#7792B5]/10">
                <span className="text-[#C6A76B] shrink-0 mt-0.5">&bull;</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Run Locally & Setup Commands */}
        <div className="editorial-card p-7 sm:p-10 mb-10 space-y-6">
          <div className="flex items-center gap-2 pb-4 border-b border-[#7792B5]/20">
            <div className="w-9 h-9 rounded-[2px] bg-[#EBE8E1] flex items-center justify-center text-[#C6A76B]">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-[11px] font-mono uppercase tracking-luxury text-[#C6A15B]">Local Execution Guide</h3>
              <span className="text-sm font-serif font-normal text-[#EBE8E1]">Run This Project on Your Machine</span>
            </div>
          </div>

          {project.requirements && project.requirements.length > 0 && (
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#C6A15B]">Prerequisites:</span>
              <ul className="space-y-1.5">
                {project.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs font-mono text-[#858A96]">
                    <Check className="w-3.5 h-3.5 text-[#C6A76B] shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.setupInstructions && project.setupInstructions.length > 0 && (
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#C6A15B]">Setup Steps:</span>
              <ol className="space-y-1.5">
                {project.setupInstructions.map((step, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs font-mono text-[#858A96]">
                    <span className="text-[#C6A76B] font-semibold shrink-0 w-4">{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {project.runCommands && project.runCommands.length > 0 && (
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#C6A15B]">Execution Commands:</span>
              <div className="bg-[#EBE8E1] rounded-[2px] p-5 font-mono text-xs text-[#151C2B] space-y-2 border border-[#C6A76B]/25 luxury-grid-dark">
                {project.runCommands.map((cmd, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-[#C6A76B] shrink-0">$</span>
                    <span className="text-[#151C2B]/90">{cmd}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Environment Variables Table */}
          {project.environmentVariables && project.environmentVariables.length > 0 && (
            <div className="border-t border-[#7792B5]/20 pt-6 space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#C6A15B]">Environment Variables:</span>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono border border-[#7792B5]/25 rounded-[2px] overflow-hidden">
                  <thead className="bg-[#EBE8E1] text-[#DFCCA2] uppercase">
                    <tr>
                      <th className="p-3 border-b border-[#C6A76B]/20">Variable</th>
                      <th className="p-3 border-b border-[#C6A76B]/20">Description</th>
                      <th className="p-3 border-b border-[#C6A76B]/20">Required</th>
                      <th className="p-3 border-b border-[#C6A76B]/20">Sample Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#7792B5]/15 bg-[#151C2B] text-[#858A96]">
                    {project.environmentVariables.map((env, i) => (
                      <tr key={i} className="hover:bg-[#090B10] transition-colors">
                        <td className="p-3 text-[#EBE8E1] font-semibold">{env.key}</td>
                        <td className="p-3">{env.description}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded-[2px] text-[10px] ${env.required ? 'bg-[#EBE8E1] text-[#C6A76B] border border-[#C6A76B]/40' : 'bg-[#090B10] text-[#72869E] border border-[#7792B5]/30'}`}>
                            {env.required ? 'Required' : 'Optional'}
                          </span>
                        </td>
                        <td className="p-3 text-[#72869E]">{env.sampleValue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="pt-8 border-t border-[#C6A76B]/25 flex items-center justify-between">
          <Link
            href="/projects"
            className="btn-luxury-secondary py-2.5 px-5 text-sm"
          >
            <ArrowLeft className="w-4 h-4 text-[#C6A15B]" />
            <span>Back to Case Studies</span>
          </Link>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury-gold py-2.5 px-5 text-sm"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Launch Demo</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
}

