import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Terminal, 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  Cpu, 
  ShieldAlert, 
  BookOpen, 
  Play,
  KeyRound
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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'VERIFIED WORKING':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'SIMULATION ONLY':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'REQUIRES EXTERNAL CONFIGURATION':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      default:
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
    }
  };

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

  return (
    <div className="min-h-screen bg-dark-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Navigation bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-dark-700">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent-cyan transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Projects
          </Link>
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadge(project.verificationStatus)}`}>
              {project.verificationStatus}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-dark-800 text-gray-300 border border-dark-600">
              {getModelLabel(project.executionModel)}
            </span>
          </div>
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="text-xs uppercase font-mono tracking-wider text-accent-cyan mb-2">
            {project.category} • Verified: {project.verificationDate}
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-white">
            {project.name}
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            {project.fullDescription}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-purple text-white text-sm font-semibold hover:shadow-lg hover:shadow-accent-cyan/20 transition-all"
              >
                <Play className="w-4 h-4" />
                Launch Full-Screen Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-800 hover:bg-dark-700 border border-dark-600 text-sm font-medium text-gray-200 transition-colors"
              >
                <Github className="w-4 h-4" />
                View GitHub Source
              </a>
            )}
          </div>
        </div>

        {/* Embedded Interactive Demo (if web demo exists) */}
        {project.demoUrl && (
          <div className="mb-12 bg-dark-800 rounded-2xl border border-dark-700 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-6 py-3 bg-dark-850 border-b border-dark-700">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs font-mono text-gray-400">
                  Interactive Demo Preview — {project.name}
                </span>
              </div>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-accent-cyan hover:underline flex items-center gap-1"
              >
                Open In New Tab <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="relative w-full h-[620px] bg-dark-900">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-dark-800/80 border border-dark-700 rounded-2xl p-6">
            <div className="flex items-center gap-2 text-rose-400 font-semibold mb-3">
              <AlertTriangle className="w-5 h-5" />
              <h3>Problem Statement</h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          <div className="bg-dark-800/80 border border-dark-700 rounded-2xl p-6">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-3">
              <CheckCircle2 className="w-5 h-5" />
              <h3>Technical Solution</h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture & Tech Stack */}
        <div className="bg-dark-800/80 border border-dark-700 rounded-2xl p-6 mb-12">
          <div className="flex items-center gap-2 text-accent-cyan font-semibold mb-3">
            <Layers className="w-5 h-5" />
            <h3>Architecture & Engineering Implementation</h3>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed mb-6">
            {project.architecture}
          </p>

          <h4 className="text-xs uppercase font-mono tracking-wider text-gray-400 mb-3">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-dark-700 text-gray-200 border border-dark-600"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.myContribution && (
            <div className="border-t border-dark-700 pt-4">
              <span className="text-xs font-semibold text-accent-purple block mb-1">
                Author & Engineering Contribution:
              </span>
              <p className="text-xs text-gray-400">
                {project.myContribution}
              </p>
            </div>
          )}
        </div>

        {/* Verified Features */}
        <div className="bg-dark-800/80 border border-dark-700 rounded-2xl p-6 mb-12">
          <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-accent-cyan" />
            Verified Features & Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Run Locally & Setup Commands */}
        <div className="bg-dark-800/80 border border-dark-700 rounded-2xl p-6 mb-12">
          <div className="flex items-center gap-2 text-accent-purple font-semibold mb-4">
            <Terminal className="w-5 h-5" />
            <h3>Run Locally Instructions</h3>
          </div>

          {project.requirements && project.requirements.length > 0 && (
            <div className="mb-4">
              <span className="text-xs font-semibold text-gray-400 block mb-1">Prerequisites:</span>
              <ul className="list-disc list-inside text-xs text-gray-300 space-y-1">
                {project.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>
          )}

          {project.setupInstructions && project.setupInstructions.length > 0 && (
            <div className="mb-4">
              <span className="text-xs font-semibold text-gray-400 block mb-1">Setup Steps:</span>
              <ol className="list-decimal list-inside text-xs text-gray-300 space-y-1">
                {project.setupInstructions.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          )}

          {project.runCommands && project.runCommands.length > 0 && (
            <div className="mb-4">
              <span className="text-xs font-semibold text-gray-400 block mb-1">Execution Commands:</span>
              <div className="bg-dark-900 rounded-xl p-4 font-mono text-xs text-accent-cyan space-y-2 border border-dark-700">
                {project.runCommands.map((cmd, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-gray-500">$</span>
                    <span>{cmd}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Environment Variables Table */}
          {project.environmentVariables && project.environmentVariables.length > 0 && (
            <div className="mt-6 border-t border-dark-700 pt-4">
              <span className="text-xs font-semibold text-gray-400 block mb-2">Environment Variables:</span>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-dark-700">
                  <thead className="bg-dark-900 text-gray-400 uppercase font-mono">
                    <tr>
                      <th className="p-2 border-b border-dark-700">Variable</th>
                      <th className="p-2 border-b border-dark-700">Description</th>
                      <th className="p-2 border-b border-dark-700">Required</th>
                      <th className="p-2 border-b border-dark-700">Sample Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-dark-700 text-gray-300">
                    {project.environmentVariables.map((env, i) => (
                      <tr key={i}>
                        <td className="p-2 font-mono text-accent-cyan">{env.key}</td>
                        <td className="p-2">{env.description}</td>
                        <td className="p-2">{env.required ? 'Yes' : 'Optional'}</td>
                        <td className="p-2 font-mono text-gray-400">{env.sampleValue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Limitations & Security */}
        <div className="bg-dark-800/80 border border-dark-700 rounded-2xl p-6 mb-12">
          <div className="flex items-center gap-2 text-amber-400 font-semibold mb-3">
            <ShieldAlert className="w-5 h-5" />
            <h3>Security Architecture & Known Limitations</h3>
          </div>
          <ul className="list-disc list-inside text-xs text-gray-300 space-y-2 leading-relaxed">
            {project.limitations.map((lim, i) => (
              <li key={i}>{lim}</li>
            ))}
            <li>Developer API keys are never stored in source code or sent to client bundles.</li>
            <li>Visitor API keys remain strictly in browser session memory and are never persisted to databases or server logs.</li>
          </ul>
        </div>

        {/* Footer Back Link */}
        <div className="text-center pt-8 border-t border-dark-800">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-dark-800 hover:bg-dark-700 border border-dark-600 text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
