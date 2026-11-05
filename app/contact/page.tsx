'use client';

import { useState } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  ArrowUpRight, 
  Clock,
  ShieldCheck,
  FileDown,
  FileCode2
} from 'lucide-react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/layout/Container';

const channels = [
  {
    id: 'email',
    icon: Mail,
    label: 'Electronic Mail',
    value: 'nikuluhach.86209@gmail.com',
    href: 'mailto:nikuluhach.86209@gmail.com',
    copyable: 'nikuluhach.86209@gmail.com',
  },
  {
    id: 'phone',
    icon: Phone,
    label: 'Telephone & WhatsApp',
    value: '+91 7297072067',
    href: 'tel:+917297072067',
    copyable: '+917297072067',
  },
  {
    id: 'github',
    icon: Github,
    label: 'Version Control Profile',
    value: 'github.com/TheNikhilLuhach',
    href: 'https://github.com/TheNikhilLuhach',
  },
  {
    id: 'linkedin',
    icon: Linkedin,
    label: 'Professional Network',
    value: 'linkedin.com/in/nikhil-kumar-692116203',
    href: 'https://www.linkedin.com/in/nikhil-kumar-692116203',
  },
];

export default function ContactPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Software Engineering Role / Technical Collaboration',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ 
      name: '', 
      email: '', 
      subject: 'Software Engineering Role / Technical Collaboration', 
      message: '' 
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="min-h-screen bg-[#090B10] text-[#8B9BB4] pb-24">
      {/* Editorial Page Header */}
      <PageHeader
        index="05 / Direct Communication"
        title="Initiate dialogue, interview scheduling, or engineering proposals."
        lead="Actively evaluating software engineering, backend systems, and cloud infrastructure opportunities. Direct communication channels and response expectations are listed below."
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Communication Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="editorial-card p-6 sm:p-8 space-y-6">
              <div>
                <div className="text-xs font-mono text-[#8B9BB4] uppercase tracking-wider mb-2">
                  Verified Contact Points
                </div>
                <h2 className="text-xl font-bold text-[#E9EDF5]">
                  Direct Receptors
                </h2>
              </div>

              <div className="space-y-4">
                {channels.map((ch) => {
                  const Icon = ch.icon;
                  const isCopied = copiedId === ch.id;

                  return (
                    <div
                      key={ch.id}
                      className="p-4 rounded bg-[#161F33] border border-[#8B9BB4]/15 flex items-center justify-between group hover:border-[#8B9BB4]/40 transition-colors"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-9 h-9 rounded bg-[#1E293B] flex items-center justify-center text-[#E9EDF5] shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[11px] font-mono uppercase tracking-wider text-[#8B9BB4]">
                            {ch.label}
                          </div>
                          <a
                            href={ch.href}
                            target={ch.href.startsWith('http') ? '_blank' : undefined}
                            rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-xs sm:text-sm font-semibold text-[#E9EDF5] hover:underline truncate block"
                          >
                            {ch.value}
                          </a>
                        </div>
                      </div>

                      {ch.copyable && (
                        <button
                          onClick={() => handleCopy(ch.copyable!, ch.id)}
                          className="p-2 rounded text-[#8B9BB4] hover:text-[#E9EDF5] hover:bg-[#1E293B] transition-colors shrink-0"
                          title="Copy to clipboard"
                        >
                          {isCopied ? (
                            <Check className="w-4 h-4 text-[#E9EDF5]" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Status and Location Specs */}
              <div className="pt-4 border-t border-[#8B9BB4]/15 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between py-1 border-b border-[#8B9BB4]/10">
                  <span className="text-[#8B9BB4] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    Base Location
                  </span>
                  <span className="text-[#E9EDF5]">Jaipur, Rajasthan, India</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#8B9BB4]/10">
                  <span className="text-[#8B9BB4] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    Availability
                  </span>
                  <span className="text-[#E9EDF5]">Immediate / 2027 Grad</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-[#8B9BB4] flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Response Window
                  </span>
                  <span className="text-[#E9EDF5]">&lt; 24 Hours</span>
                </div>
              </div>
            </div>

            {/* Resume Fast Download Card */}
            <div className="editorial-card p-6 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#8B9BB4]">
                Curriculum Vitae Files
              </div>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href="/resume/Nikhil_Kumar_Resume.pdf"
                  download="Nikhil_Kumar_Resume.pdf"
                  className="btn-luxury-primary text-xs py-2 px-3 justify-center"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
                <a
                  href="/resume/resume.tex"
                  download="Nikhil_Kumar_Resume.tex"
                  className="btn-luxury-secondary text-xs py-2 px-3 justify-center"
                >
                  <FileCode2 className="w-3.5 h-3.5" />
                  <span>LaTeX Source</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Dispatch Form (7 cols) */}
          <div className="lg:col-span-7 editorial-card p-6 sm:p-8 lg:p-10">
            <div className="pb-6 mb-6 border-b border-[#8B9BB4]/15">
              <div className="text-xs font-mono text-[#8B9BB4] uppercase tracking-wider mb-2">
                Direct Dispatch Portal
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#E9EDF5]">
                Send an Inquiry or Proposal
              </h2>
              <p className="text-xs sm:text-sm text-[#8B9BB4] mt-1">
                Submissions are logged directly and dispatched to <code className="text-[#E9EDF5] bg-[#161F33] px-1.5 py-0.5 rounded">nikuluhach.86209@gmail.com</code>.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-[#161F33] border border-[#8B9BB4]/30 rounded text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#E9EDF5] text-[#111827] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h3 className="text-lg font-bold text-[#E9EDF5]">
                  Message Dispatched Successfully
                </h3>
                <p className="text-xs text-[#8B9BB4] max-w-sm mx-auto">
                  Thank you for reaching out. I will review your requirements and respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#8B9BB4]">
                      Your Name / Organization <span className="text-[#E9EDF5]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe or Acme Corp"
                      className="w-full bg-[#161F33] border border-[#8B9BB4]/20 rounded px-3.5 py-2.5 text-sm text-[#E9EDF5] placeholder-[#8B9BB4]/40 focus:outline-none focus:border-[#E9EDF5] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#8B9BB4]">
                      Return Email Address <span className="text-[#E9EDF5]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@organization.com"
                      className="w-full bg-[#161F33] border border-[#8B9BB4]/20 rounded px-3.5 py-2.5 text-sm text-[#E9EDF5] placeholder-[#8B9BB4]/40 focus:outline-none focus:border-[#E9EDF5] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8B9BB4]">
                    Nature of Inquiry
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#161F33] border border-[#8B9BB4]/20 rounded px-3.5 py-2.5 text-sm text-[#E9EDF5] focus:outline-none focus:border-[#E9EDF5] transition-colors font-mono"
                  >
                    <option value="Software Engineering Role">Software Engineering Role (Full-time / Internship)</option>
                    <option value="Cloud & Infrastructure Architecture">Cloud &amp; Infrastructure Architecture</option>
                    <option value="Open Source Collaboration">Open Source Collaboration</option>
                    <option value="General Professional Inquiry">General Professional Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8B9BB4]">
                    Message Specifications <span className="text-[#E9EDF5]">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe the opportunity, role requirements, or collaboration proposal..."
                    className="w-full bg-[#161F33] border border-[#8B9BB4]/20 rounded px-3.5 py-2.5 text-sm text-[#E9EDF5] placeholder-[#8B9BB4]/40 focus:outline-none focus:border-[#E9EDF5] transition-colors resize-none"
                  />
                </div>

                {/* Primary Action Button: Soft Ice background with Midnight Navy text */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-luxury-primary w-full py-3 text-sm justify-center font-semibold disabled:opacity-50"
                >
                  <Send className="w-4 h-4 fill-current" />
                  <span>{isSubmitting ? 'Dispatching Message...' : 'Transmit Message'}</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </Container>
    </main>
  );
}


