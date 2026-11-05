import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { 
  GraduationCap, 
  Trophy, 
  Award, 
  MapPin, 
  FileDown, 
  FileCode2, 
  Terminal, 
  Cloud, 
  Shield, 
  Check 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About & Philosophy | Nikhil Kumar — Python Developer & Cloud Architect',
  description: 'Professional background, academic credentials, engineering philosophy, and focus domains of Nikhil Kumar.',
};

const competencies = [
  {
    category: 'Core Engineering',
    items: ['Python 3.10+', 'Object-Oriented Design', 'RESTful API Architecture', 'Modular Microservices', 'Data Structures & Algorithms'],
  },
  {
    category: 'Cloud & Infrastructure',
    items: ['Amazon Web Services (EC2, S3, IAM)', 'Docker Containerization', 'Linux System Administration', 'Bash Shell Scripting', 'CI/CD Pipelines'],
  },
  {
    category: 'Intelligent Systems',
    items: ['Google Gemini API Integration', 'Prompt Architecture & Guardrails', 'MediaPipe 3D Landmark Tracking', 'OpenCV Video Streams', 'Rapid UI Prototyping (Streamlit/Gradio)'],
  },
  {
    category: 'Data & Persistence',
    items: ['PostgreSQL & MySQL', 'SQLite & SQLAlchemy ORM', 'Relational Schema Modeling', 'Data Migration Strategies', 'MongoDB Document Storage'],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#090B10] text-[#D6D3CC]">
      {/* Editorial Page Header */}
      <PageHeader
        index="01 // Professional Profile"
        title="Engineering grounded in verification, discipline, and clean architecture."
        lead="Undergraduate Computer Science engineer with real-world industrial internship training across DevOps pipelines, cloud infrastructure on AWS, and applied computer vision systems."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button
            variant="primary"
            href="/resume/Nikhil_Kumar_Resume.pdf"
            download="Nikhil_Kumar_Resume.pdf"
            icon={<FileDown className="w-3.5 h-3.5 text-[#C6A76B]" />}
          >
            Download Resume (PDF)
          </Button>
          <Button
            variant="secondary"
            href="/resume/resume.tex"
            download="Nikhil_Kumar_Resume.tex"
            icon={<FileCode2 className="w-3.5 h-3.5 text-[#C6A15B]" />}
          >
            LaTeX Source
          </Button>
        </div>
      </PageHeader>

      {/* Main Content Body */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Narrative & Philosophy (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Introduction Story */}
              <div className="editorial-card p-8 sm:p-12 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#7792B5]/20">
                  <span className="text-[11px] font-mono text-[#C6A15B] uppercase tracking-luxury">
                    Executive Summary
                  </span>
                  <span className="text-xs font-mono text-[#72869E]">
                    B.Tech CSE &bull; Amity University (2023–2027)
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-4xl text-[#EBE8E1] tracking-tight leading-snug">
                  Building software where architectural integrity and measurable performance come first.
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-[#858A96] leading-relaxed">
                  <p>
                    I am a software engineer specializing in Python backend systems, cloud automation with AWS, and intelligent vision-based interfaces. My work focuses on constructing dependable, modular services that solve genuine operational challenges.
                  </p>
                  <p>
                    Across industrial training at <strong className="text-[#EBE8E1]">LinuxWorld Informatics</strong> and developer internships at <strong className="text-[#EBE8E1]">The Skybrisk</strong>, I have deployed production Docker containers, provisioned and secured Amazon EC2 and S3 resources, and engineered conversational AI agents using the Google Gemini API.
                  </p>
                  <p>
                    I believe that great engineering is not about chasing superficial complexity or generating unverified AI code. It is about writing clean, typed, thoroughly tested systems with zero server-side credential leakage and transparent operational limits.
                  </p>
                </div>
              </div>

              {/* Engineering Tenets */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A76B]" />
                  <h3 className="font-serif text-2xl font-normal text-[#EBE8E1]">
                    Core Engineering Tenets
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="editorial-card p-6 space-y-3">
                    <div className="w-9 h-9 rounded-[2px] bg-[#EBE8E1] flex items-center justify-center text-[#C6A76B]">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <h4 className="font-serif text-lg text-[#EBE8E1]">Verifiable Code</h4>
                    <p className="text-xs text-[#858A96] leading-relaxed">
                      Every project includes runnable local execution scripts, clear dependency manifests, and reproducible environments.
                    </p>
                  </div>

                  <div className="editorial-card p-6 space-y-3">
                    <div className="w-9 h-9 rounded-[2px] bg-[#EBE8E1] flex items-center justify-center text-[#C6A76B]">
                      <Cloud className="w-4 h-4" />
                    </div>
                    <h4 className="font-serif text-lg text-[#EBE8E1]">Cloud Discipline</h4>
                    <p className="text-xs text-[#858A96] leading-relaxed">
                      Infrastructure as reproducible code: containerized with Docker, bounded by least-privilege IAM policies, and monitored on AWS.
                    </p>
                  </div>

                  <div className="editorial-card p-6 space-y-3">
                    <div className="w-9 h-9 rounded-[2px] bg-[#EBE8E1] flex items-center justify-center text-[#C6A76B]">
                      <Shield className="w-4 h-4" />
                    </div>
                    <h4 className="font-serif text-lg text-[#EBE8E1]">Security by Design</h4>
                    <p className="text-xs text-[#858A96] leading-relaxed">
                      Zero server-side API secret exposure, strict client-side sandboxing, and defense-in-depth credential protection.
                    </p>
                  </div>
                </div>
              </div>

              {/* Categorized Competencies Matrix */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A76B]" />
                  <h3 className="font-serif text-2xl font-normal text-[#EBE8E1]">
                    Domain Competencies
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {competencies.map((comp) => (
                    <div key={comp.category} className="editorial-card p-6 space-y-4">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#C6A15B] pb-2 border-b border-[#7792B5]/15">
                        {comp.category}
                      </div>
                      <ul className="space-y-2">
                        {comp.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs font-mono text-[#858A96]">
                            <Check className="w-3.5 h-3.5 text-[#C6A76B] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Sidebar Credentials (4 cols) */}
            <div className="lg:col-span-4 space-y-8 sticky top-28">
              
              {/* Academic Affiliation Card */}
              <div className="editorial-card p-8 space-y-5">
                <div className="text-[11px] font-mono uppercase tracking-luxury text-[#C6A15B]">
                  Academic Institution
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[2px] bg-[#EBE8E1] flex items-center justify-center text-[#C6A76B] shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#EBE8E1]">Amity University</h4>
                    <span className="text-xs text-[#858A96]">Jaipur Campus, Rajasthan</span>
                  </div>
                </div>
                <div className="space-y-2 text-xs font-mono text-[#858A96] pt-3 border-t border-[#7792B5]/15">
                  <div className="flex justify-between">
                    <span className="text-[#72869E]">Degree:</span>
                    <span className="text-[#EBE8E1] font-medium">B.Tech (Computer Science)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#72869E]">Tenure:</span>
                    <span className="text-[#EBE8E1]">2023 – 2027</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#72869E]">Status:</span>
                    <span className="text-[#C6A15B] font-semibold">Undergraduate Active</span>
                  </div>
                </div>
              </div>

              {/* Honors & Recognitions Card */}
              <div className="editorial-card p-8 space-y-6">
                <div className="text-[11px] font-mono uppercase tracking-luxury text-[#C6A15B]">
                  Recognitions &amp; Honors
                </div>

                {/* Hackathon */}
                <div className="pb-4 border-b border-[#7792B5]/15 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-[#C6A76B]" />
                    <span className="font-serif text-base font-bold text-[#EBE8E1]">
                      2nd Place — Innovation Hackathon
                    </span>
                  </div>
                  <p className="text-xs text-[#858A96] leading-relaxed">
                    Runner-up award with Project Nexora, recognized for architectural feasibility, backend pipeline design, and real-time execution.
                  </p>
                </div>

                {/* Sports Medal */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#C6A15B]" />
                    <span className="font-serif text-base font-bold text-[#EBE8E1]">
                      District Silver Medalist — Karate
                    </span>
                  </div>
                  <p className="text-xs text-[#858A96] leading-relaxed">
                    District-level competitive martial arts silver medal. Translating physical discipline, focus under pressure, and continuous improvement into engineering work.
                  </p>
                </div>
              </div>

              {/* Location & Status */}
              <div className="editorial-card p-6 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between py-1 border-b border-[#7792B5]/15">
                  <span className="text-[#72869E]">Primary Location</span>
                  <span className="text-[#EBE8E1] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C6A76B]" />
                    Jaipur, Rajasthan, India
                  </span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#7792B5]/15">
                  <span className="text-[#72869E]">Languages</span>
                  <span className="text-[#EBE8E1]">English, Hindi</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-[#72869E]">Work Authorization</span>
                  <span className="text-[#C6A15B] font-semibold">Open to SDE / Cloud Roles</span>
                </div>
              </div>

            </div>

          </div>
        </Container>
      </section>
    </main>
  );
}

