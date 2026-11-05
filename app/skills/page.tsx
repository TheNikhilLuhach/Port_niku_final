'use client';

import { useState, useMemo } from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/layout/Container';
import { 
  Code2, 
  Globe, 
  Cloud, 
  Cpu, 
  Database, 
  Shield, 
  Search,
  Check
} from 'lucide-react';

interface SkillItem {
  name: string;
  role: string;
  description: string;
  libraries: string[];
}

interface SkillCategory {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  skills: SkillItem[];
}

const skillDirectory: SkillCategory[] = [
  {
    id: 'languages',
    icon: Code2,
    title: 'Programming Languages',
    subtitle: 'Primary tools for backend development, automation, and systems programming',
    skills: [
      {
        name: 'Python',
        role: 'Primary Language',
        description: 'Writing backend services, automation scripts, computer vision pipelines, and AI wrappers with type annotations and PEP 8 standards.',
        libraries: ['OpenCV', 'MediaPipe', 'SQLAlchemy', 'PyAutoGUI', 'Boto3', 'Flask'],
      },
      {
        name: 'JavaScript / TypeScript',
        role: 'Full-Stack & Web',
        description: 'Developing typed, component-driven client and server applications using modern ECMAScript features and strict type definitions.',
        libraries: ['Next.js 14', 'React 18', 'Node.js', 'Framer Motion', 'Tailwind CSS'],
      },
      {
        name: 'Java',
        role: 'Object-Oriented Programming',
        description: 'Applied in academic coursework for object-oriented design patterns, data structure implementations, and algorithmic problem-solving.',
        libraries: ['Collections Framework', 'OOP Patterns', 'JUnit'],
      },
      {
        name: 'C / C++',
        role: 'Low-Level Systems',
        description: 'Foundational coursework in pointer arithmetic, memory management, operating system abstractions, and performance-critical routines.',
        libraries: ['Standard Template Library (STL)', 'GCC Toolchain'],
      },
      {
        name: 'Bash / Shell Scripting',
        role: 'System Automation',
        description: 'Writing automated server health checks, cron triggers, deployment routines, and remote server configuration scripts.',
        libraries: ['Linux CLI', 'Systemd', 'SSH/SCP', 'AWK/Sed'],
      },
    ],
  },
  {
    id: 'web',
    icon: Globe,
    title: 'Web & Backend Engineering',
    subtitle: 'Building responsive frontends and modular microservices',
    skills: [
      {
        name: 'Next.js 14',
        role: 'Full-Stack React Framework',
        description: 'Architecting fast web apps utilizing the App Router, server-rendered components, static site generation (SSG), and edge API routes.',
        libraries: ['App Router', 'Server Components', 'API Routes'],
      },
      {
        name: 'React 18',
        role: 'UI Library',
        description: 'Building accessible, stateful, and reusable component hierarchies with controlled inputs, custom hooks, and context management.',
        libraries: ['Hooks API', 'Context API', 'Virtual DOM'],
      },
      {
        name: 'Flask & FastAPI',
        role: 'Python Web Frameworks',
        description: 'Constructing lightweight RESTful microservices, handling HTTP request lifecycles, and managing CORS and input validation.',
        libraries: ['Flask-Login', 'Flask-WTF', 'Pydantic', 'Jinja2'],
      },
      {
        name: 'Node.js',
        role: 'JavaScript Runtime',
        description: 'Running server-side build tools, package managers, and supporting serverless functions for edge deployments.',
        libraries: ['npm', 'Express basics', 'File system APIs'],
      },
      {
        name: 'Tailwind CSS',
        role: 'Utility-First Styling',
        description: 'Translating design tokens into responsive, maintainable layouts with dark-mode styling and minimal runtime CSS overhead.',
        libraries: ['PostCSS', 'Custom Design Tokens', 'Responsive Grids'],
      },
    ],
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud & DevOps Automation',
    subtitle: 'Containerization, cloud infrastructure, and server operations',
    skills: [
      {
        name: 'Amazon Web Services (AWS)',
        role: 'Cloud Provider',
        description: 'Provisioning EC2 computing instances, configuring S3 storage buckets, defining IAM least-privilege security roles, and cloud security groups.',
        libraries: ['Amazon EC2', 'Amazon S3', 'IAM', 'AWS CLI', 'Boto3'],
      },
      {
        name: 'Docker',
        role: 'Containerization',
        description: 'Authoring multi-stage Dockerfiles, building reproducible images, running local container clusters, and isolating runtime dependencies.',
        libraries: ['Docker CLI', 'Dockerfile syntax', 'Container networking'],
      },
      {
        name: 'Linux Administration',
        role: 'Operating Systems',
        description: 'Administering Debian/Ubuntu and Kali Linux systems, managing processes, configuring firewalls, inspecting system logs, and permission modeling.',
        libraries: ['Ubuntu Server', 'Kali Linux', 'systemctl', 'journalctl'],
      },
      {
        name: 'CI/CD & GitHub Actions',
        role: 'Automation Pipelines',
        description: 'Writing workflow YAML configurations for automated linting, test suites, and continuous deployment to cloud hosts.',
        libraries: ['GitHub Actions Workflows', 'Secrets Management'],
      },
    ],
  },
  {
    id: 'ai',
    icon: Cpu,
    title: 'AI & Computer Vision',
    subtitle: 'Applied vision pipelines, LLM interfaces, and interactive dashboards',
    skills: [
      {
        name: 'Google Gemini API',
        role: 'Generative AI Integration',
        description: 'Building multi-turn LLM workflows, structured project suggestion engines, and secure proxy architectures for user-provided API keys.',
        libraries: ['Gemini 2.0 Flash', 'Gemini 1.5 Pro', 'Structured JSON Output'],
      },
      {
        name: 'Prompt Engineering',
        role: 'LLM Guidance & Guardrails',
        description: 'Designing system prompts, few-shot templates, and constraint guardrails to prevent hallucinations and enforce schema consistency.',
        libraries: ['System Instructions', 'Few-Shot Templates', 'Input Validation'],
      },
      {
        name: 'MediaPipe',
        role: '3D Landmark Vision',
        description: 'Real-time hand tracking pipelines processing video streams at 30+ FPS to detect 21 3D hand coordinates for gesture classification.',
        libraries: ['MediaPipe Hands', 'Landmark Analysis', 'Coordinate Mapping'],
      },
      {
        name: 'OpenCV',
        role: 'Computer Vision',
        description: 'Webcam stream capture, frame manipulation, color space conversion, visual overlays, and debounced gesture classification timers.',
        libraries: ['cv2.VideoCapture', 'Color Thresholding', 'Frame Drawing'],
      },
      {
        name: 'Streamlit & Gradio',
        role: 'Rapid ML Dashboards',
        description: 'Building fast, interactive web applications for machine learning models, resume ATS parsers, and system management menus.',
        libraries: ['Streamlit Components', 'Gradio Blocks'],
      },
    ],
  },
  {
    id: 'databases',
    icon: Database,
    title: 'Databases & Storage',
    subtitle: 'Relational data modeling, ORM persistence, and document stores',
    skills: [
      {
        name: 'SQLite & SQLAlchemy ORM',
        role: 'Embedded Relational Database',
        description: 'Designing normalized schemas, declaring declarative Python models, executing queries, and managing schema migrations.',
        libraries: ['SQLAlchemy Models', 'Foreign Keys', 'Session Management'],
      },
      {
        name: 'MySQL',
        role: 'RDBMS',
        description: 'Structuring relational tables, writing complex SQL queries, index optimization, and data consistency enforcement.',
        libraries: ['SQL DDL/DML', 'Joins', 'Transactions'],
      },
      {
        name: 'MongoDB',
        role: 'Document Database',
        description: 'Managing unstructured and semi-structured BSON collections, document filtering, and aggregation pipelines.',
        libraries: ['Mongoose / PyMongo', 'JSON Storage'],
      },
    ],
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Security & Developer Tooling',
    subtitle: 'Code quality, API verification, and security auditing tools',
    skills: [
      {
        name: 'Git & GitHub',
        role: 'Version Control',
        description: 'Branch management, pull requests, semantic commit messages, resolving merge conflicts, and maintaining repository hygiene.',
        libraries: ['Git CLI', 'GitHub Workflows', 'SSH Keys'],
      },
      {
        name: 'Postman',
        role: 'API Testing & Verification',
        description: 'Testing REST endpoints, crafting HTTP request payloads, verifying status codes, and documenting API schemas.',
        libraries: ['Environment Variables', 'Test Scripts', 'Collections'],
      },
      {
        name: 'Kali Linux & Security Basics',
        role: 'Security Auditing',
        description: 'Familiarity with penetration testing methodology, port scanning with Nmap, and evaluating web application security boundaries.',
        libraries: ['Nmap', 'Burp Suite Basics', 'Network Diagnostics'],
      },
      {
        name: 'VS Code & System Debugging',
        role: 'Development Environment',
        description: 'Configuring Python virtual environments, breakpoint debugging, linting with flake8/ESLint, and terminal multi-tasking.',
        libraries: ['Python Debugger (pdb)', 'TypeScript Compiler', 'Virtualenv'],
      },
    ],
  },
];

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    { id: 'all', label: 'All Categories' },
    { id: 'languages', label: 'Languages' },
    { id: 'web', label: 'Web & Backend' },
    { id: 'cloud', label: 'Cloud & DevOps' },
    { id: 'ai', label: 'AI & Vision' },
    { id: 'databases', label: 'Databases' },
    { id: 'security', label: 'Security & Tools' },
  ];

  const filtered = useMemo(() => {
    return skillDirectory
      .filter((cat) => activeCategory === 'all' || cat.id === activeCategory)
      .map((cat) => {
        if (!searchQuery.trim()) return cat;
        const q = searchQuery.toLowerCase();
        const matching = cat.skills.filter(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            s.role.toLowerCase().includes(q) ||
            s.description.toLowerCase().includes(q) ||
            s.libraries.some((l) => l.toLowerCase().includes(q))
        );
        return { ...cat, skills: matching };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [activeCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-[#090B10] text-[#858A96]">
      {/* Editorial Header */}
      <PageHeader
        index="04 // Technical Competencies"
        title="Engineering Directory & Technical Capabilities"
        lead="A structured inventory of languages, frameworks, cloud infrastructure tools, and libraries utilized across real implementations. No fabricated percentages or simulated metrics."
      />

      <section className="py-12 sm:py-16">
        <Container>
          {/* Controls: Category Tabs & Search Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12 pb-6 border-b border-[#858A96]/15">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5">
              {filterTabs.map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
                      isActive
                        ? 'bg-[#EBE8E1] text-[#090B10] font-semibold'
                        : 'text-[#858A96] hover:text-[#EBE8E1] hover:bg-[#151C2B]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-3.5 h-3.5 text-[#858A96] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search skills, tools, libraries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded bg-[#151C2B] border border-[#858A96]/25 text-[#EBE8E1] text-xs font-mono placeholder-[#858A96]/50 focus:outline-none focus:border-[#EBE8E1] transition-colors"
              />
            </div>
          </div>

          {/* Directory Categories List */}
          <div className="space-y-12">
            {filtered.map((category) => (
              <div key={category.id} className="space-y-4">
                {/* Category Header */}
                <div className="flex items-start justify-between pb-3 border-b border-[#858A96]/15">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded bg-[#151C2B] border border-[#858A96]/25 flex items-center justify-center text-[#EBE8E1]">
                      <category.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-[#EBE8E1]">
                        {category.title}
                      </h2>
                      <p className="text-xs text-[#858A96]">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#858A96] hidden sm:inline-block">
                    {category.skills.length} competencies
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="editorial-card p-5 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#858A96]/10">
                          <h3 className="text-sm font-bold text-[#EBE8E1]">
                            {skill.name}
                          </h3>
                          <span className="text-[10px] font-mono text-[#858A96] uppercase bg-[#090B10] px-2 py-0.5 rounded border border-[#858A96]/15">
                            {skill.role}
                          </span>
                        </div>
                        <p className="text-xs text-[#858A96] leading-relaxed mb-4">
                          {skill.description}
                        </p>
                      </div>

                      {/* Associated libraries */}
                      <div className="pt-3 border-t border-[#858A96]/10">
                        <div className="text-[10px] font-mono uppercase text-[#858A96]/70 mb-1.5">
                          Libraries &amp; Ecosystem:
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {skill.libraries.map((lib) => (
                            <span key={lib} className="tag-luxury text-[10px]">
                              {lib}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}


