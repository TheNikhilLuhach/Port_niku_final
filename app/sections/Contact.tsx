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
  FileCode2,
  MessageSquare,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FadeUp,
  MagneticButton,
  SpotlightCard,
  EditorialGoldDivider,
  luxuryEase,
} from '@/components/motion/MotionPrimitives';

const channels = [
  {
    id: 'email',
    icon: Mail,
    label: 'Primary Email',
    value: 'nikuluhach.86209@gmail.com',
    href: 'mailto:nikuluhach.86209@gmail.com',
    copyable: 'nikuluhach.86209@gmail.com',
    color: '#C6A15B',
  },
  {
    id: 'phone',
    icon: Phone,
    label: 'Telephone & WhatsApp',
    value: '+91 7297072067',
    href: 'tel:+917297072067',
    copyable: '+917297072067',
    color: '#7792B5',
  },
  {
    id: 'github',
    icon: Github,
    label: 'GitHub Profile',
    value: 'github.com/TheNikhilLuhach',
    href: 'https://github.com/TheNikhilLuhach',
    color: '#DEC186',
  },
  {
    id: 'linkedin',
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/nikhil-kumar-692116203',
    href: 'https://www.linkedin.com/in/nikhil-kumar-692116203',
    color: '#7792B5',
  },
];

export default function Contact() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Software Engineering Role',
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
    setFormData({ name: '', email: '', subject: 'Software Engineering Role', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="contact-atmosphere relative py-28 overflow-hidden"
    >
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-16 right-[5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(119,146,181,0.06) 0%, transparent 70%)', filter: 'blur(50px)' }}
        animate={{ scale: [1, 1.18, 1], x: [0, -20, 0], opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-16 left-[5%] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(140,63,77,0.07) 0%, transparent 70%)', filter: 'blur(40px)' }}
        animate={{ scale: [1, 1.2, 1], y: [0, -25, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Floating section number */}
      <div
        className="absolute top-12 right-6 font-['Cormorant_Garamond'] text-[160px] font-bold leading-none select-none pointer-events-none hidden lg:block"
        style={{ color: 'rgba(198,161,91,0.04)', letterSpacing: '-0.04em' }}
      >
        07
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <FadeUp>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-px h-8 bg-[#C6A15B]" />
              <span className="font-mono text-xs text-[#858A96] uppercase tracking-[0.25em]">Get In Touch</span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2
              className="font-['Cormorant_Garamond'] text-5xl lg:text-6xl font-light leading-none mb-4"
              style={{ color: '#D6D3CC' }}
            >
              Let&apos;s Build{' '}
              <span style={{ color: '#C6A15B', fontStyle: 'italic' }}>Together</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.18}>
            <p className="text-[#858A96] font-light max-w-xl">
              Open for software engineering opportunities, backend development roles, cloud projects, and collaborative technical initiatives.
            </p>
          </FadeUp>
        </div>

        <EditorialGoldDivider delay={0.15} className="mb-14" />

        {/* Big editorial email hero */}
        <FadeUp delay={0.1} className="mb-12">
          <div
            className="relative p-8 sm:p-10 rounded-2xl overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #151C2B 0%, #0E1420 100%)',
              border: '1px solid rgba(198,161,91,0.25)',
              boxShadow: '0 16px 48px rgba(9,11,16,0.7)',
            }}
          >
            {/* Corner glow */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-bl-full pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(198,161,91,0.08), transparent 70%)' }} />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#858A96] mb-2">Direct Inquiries</div>
                <a
                  href="mailto:nikuluhach.86209@gmail.com"
                  className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl lg:text-4xl font-light text-[#D6D3CC] hover:text-[#C6A15B] transition-colors block mb-2"
                >
                  nikuluhach.86209@gmail.com
                </a>
                <p className="text-[#858A96] text-xs font-light">
                  Click to open your email client or copy below.
                </p>
              </div>

              <div className="flex-shrink-0">
                <MagneticButton>
                  <a
                    href="mailto:nikuluhach.86209@gmail.com"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-black transition-all"
                    style={{ background: 'linear-gradient(135deg, #C6A15B, #DEC186)' }}
                  >
                    <Mail size={14} />
                    Send Email
                  </a>
                </MagneticButton>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">

          {/* Left: Channels + Resume */}
          <div className="lg:col-span-5 space-y-5">
            {/* Contact channels */}
            <FadeUp delay={0.1}>
              <div
                className="rounded-xl p-6 space-y-4"
                style={{
                  background: 'linear-gradient(135deg, #151C2B 0%, #0E1420 100%)',
                  border: '1px solid rgba(198,161,91,0.15)',
                }}
              >
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C6A15B] mb-1">Contact Channels</div>
                  <h3 className="font-['Cormorant_Garamond'] text-xl font-light text-[#D6D3CC]">Direct Points</h3>
                </div>

                <div className="space-y-2">
                  {channels.map((ch) => {
                    const Icon = ch.icon;
                    const isCopied = copiedId === ch.id;

                    return (
                      <motion.div
                        key={ch.id}
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-3 p-3 rounded-lg group"
                        style={{ background: 'rgba(9,11,16,0.5)', border: '1px solid rgba(198,161,91,0.08)' }}
                      >
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: `${ch.color}15`, border: `1px solid ${ch.color}30` }}
                        >
                          <Icon size={14} style={{ color: ch.color }} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="font-mono text-[9px] uppercase tracking-widest text-[#858A96] mb-0.5">{ch.label}</div>
                          <a
                            href={ch.href}
                            target={ch.href.startsWith('http') ? '_blank' : undefined}
                            rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-xs text-[#D6D3CC] hover:text-[#C6A15B] truncate block transition-colors font-light"
                          >
                            {ch.value}
                          </a>
                        </div>

                        {ch.copyable && (
                          <button
                            onClick={() => handleCopy(ch.copyable!, ch.id)}
                            className="w-7 h-7 flex items-center justify-center rounded-md text-[#858A96] hover:text-[#C6A15B] border border-[rgba(198,161,91,0.1)] hover:border-[rgba(198,161,91,0.35)] transition-all flex-shrink-0"
                          >
                            {isCopied ? <Check size={11} className="text-[#C6A15B]" /> : <Copy size={11} />}
                          </button>
                        )}

                        {!ch.copyable && (
                          <a
                            href={ch.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-7 h-7 flex items-center justify-center rounded-md text-[#858A96] hover:text-[#7792B5] border border-transparent hover:border-[rgba(119,146,181,0.3)] transition-all flex-shrink-0"
                          >
                            <ArrowUpRight size={11} />
                          </a>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Status details */}
                <div
                  className="pt-3 mt-1 border-t space-y-2"
                  style={{ borderColor: 'rgba(198,161,91,0.1)' }}
                >
                  {[
                    { icon: MapPin, label: 'Base Location', value: 'Jaipur, Rajasthan, India', color: '#C6A15B' },
                    { icon: Clock, label: 'Availability', value: 'Full-Time / Immediate', color: '#7792B5' },
                    { icon: ShieldCheck, label: 'Response Window', value: '< 24 Hours', color: '#C6A15B' },
                  ].map(({ icon: Icon, label, value, color }) => (
                    <div key={label} className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 text-[#858A96] font-light">
                        <Icon size={11} style={{ color }} />
                        {label}
                      </span>
                      <span className="text-[#D6D3CC] font-light font-mono text-[11px]">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Resume downloads */}
            <FadeUp delay={0.15}>
              <div
                className="rounded-xl p-5"
                style={{
                  background: 'rgba(21,28,43,0.6)',
                  border: '1px solid rgba(140,63,77,0.2)',
                }}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#858A96] mb-3">Curriculum Vitae</div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="/resume/Nikhil_Kumar_Resume.pdf"
                    download="Nikhil_Kumar_Resume.pdf"
                    className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-medium text-black transition-all hover:scale-105"
                    style={{ background: 'linear-gradient(135deg, #C6A15B, #DEC186)' }}
                  >
                    <FileDown size={12} /> Download PDF
                  </a>
                  <a
                    href="/resume/resume.tex"
                    download="Nikhil_Kumar_Resume.tex"
                    className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-medium text-[#C6A15B] border border-[rgba(198,161,91,0.3)] hover:border-[rgba(198,161,91,0.6)] transition-all font-mono"
                  >
                    <FileCode2 size={12} /> LaTeX Source
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right: Message form */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.12}>
              <div
                className="rounded-2xl p-6 sm:p-8"
                style={{
                  background: 'linear-gradient(135deg, #151C2B 0%, #0E1420 100%)',
                  border: '1px solid rgba(119,146,181,0.2)',
                  boxShadow: '0 12px 40px rgba(9,11,16,0.6)',
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <MessageSquare size={12} className="text-[#C6A15B]" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C6A15B]">Message Portal</span>
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-2xl font-light text-[#D6D3CC] mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-[#858A96] text-xs font-light mb-6">
                  Delivered directly to{' '}
                  <code className="text-[#C6A15B] font-mono text-[11px] px-1.5 py-0.5 rounded" style={{ background: 'rgba(9,11,16,0.7)', border: '1px solid rgba(198,161,91,0.2)' }}>
                    nikuluhach.86209@gmail.com
                  </code>
                </p>

                <div className="w-full h-px mb-6" style={{ background: 'linear-gradient(90deg, rgba(119,146,181,0.3), transparent)' }} />

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-12 text-center space-y-4"
                    >
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mx-auto"
                        style={{ background: 'rgba(198,161,91,0.15)', border: '1px solid rgba(198,161,91,0.4)' }}
                      >
                        <Check size={20} className="text-[#C6A15B]" strokeWidth={2.5} />
                      </div>
                      <h4 className="font-['Cormorant_Garamond'] text-2xl font-light text-[#D6D3CC]">Message Sent</h4>
                      <p className="text-[#858A96] text-sm font-light max-w-xs mx-auto">
                        Thank you for reaching out. I will respond within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      {/* Input styles shared */}
                      <style>{`
                        .contact-input {
                          width: 100%;
                          background: rgba(9,11,16,0.7);
                          border: 1px solid rgba(119,146,181,0.2);
                          border-radius: 10px;
                          padding: 10px 14px;
                          font-size: 13px;
                          color: #D6D3CC;
                          outline: none;
                          transition: border-color 0.25s;
                          font-family: 'Manrope', sans-serif;
                        }
                        .contact-input::placeholder { color: #858A96; }
                        .contact-input:focus { border-color: rgba(198,161,91,0.5); }
                      `}</style>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className="block font-mono text-[10px] uppercase tracking-widest text-[#D6D3CC]">
                            Your Name <span className="text-[#C6A15B]">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Jane Doe"
                            className="contact-input"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="block font-mono text-[10px] uppercase tracking-widest text-[#D6D3CC]">
                            Your Email <span className="text-[#C6A15B]">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="jane@organization.com"
                            className="contact-input"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block font-mono text-[10px] uppercase tracking-widest text-[#D6D3CC]">
                          Subject
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="contact-input"
                          style={{ cursor: 'pointer' }}
                        >
                          <option value="Software Engineering Role">Software Engineering Role (Full-Time / Graduate)</option>
                          <option value="Backend & Cloud Architecture">Backend & Cloud Infrastructure</option>
                          <option value="Project Collaboration">Open Source / Project Collaboration</option>
                          <option value="General Professional Discussion">General Professional Discussion</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block font-mono text-[10px] uppercase tracking-widest text-[#D6D3CC]">
                          Your Message <span className="text-[#C6A15B]">*</span>
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell me about the role, project, or technical opportunity..."
                          className="contact-input resize-none"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-medium text-black disabled:opacity-60 transition-all"
                        style={{ background: 'linear-gradient(135deg, #C6A15B, #DEC186)' }}
                      >
                        <Send size={14} />
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
