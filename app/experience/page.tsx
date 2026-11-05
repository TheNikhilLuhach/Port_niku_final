import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/layout/Container';
import { Building2, Calendar, MapPin, Check, Briefcase } from 'lucide-react';
import experienceData from '@/data/experience.json';

export const metadata: Metadata = {
  title: 'Experience | Nikhil Kumar — Career Record & Industrial Internships',
  description: 'Verified professional experience and industrial internships across DevOps, Python development, AWS cloud infrastructure, and Generative AI.',
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#090B10] text-[#858A96]">
      {/* Editorial Page Header */}
      <PageHeader
        index="05 // Career Record"
        title="Industrial Internships &amp; Professional Engagements"
        lead="Verified roles across DevOps automation, containerized infrastructure, backend API engineering, and Generative AI application development."
      />

      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            
            {/* Timeline wrapper */}
            <div className="relative">
              {/* Vertical architectural divider line */}
              <div className="absolute left-4 sm:left-6 top-4 bottom-4 w-[1px] bg-[#8B9BB4]/20" />

              <div className="space-y-12">
                {experienceData.map((item, index) => (
                  <div key={item.id} className="relative pl-10 sm:pl-16">
                    {/* Node marker */}
                    <div className="absolute left-4 sm:left-6 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-[#090B10] border-2 border-[#C6A76B]" />

                    {/* Experience Card */}
                    <div className="editorial-card p-7 sm:p-8">
                      {/* Top Bar */}
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 mb-4 border-b border-[#7792B5]/20">
                        <div>
                          <div className="text-[10px] font-mono uppercase tracking-wider text-[#858A96] mb-1">
                            Record 0{index + 1} // Industrial Engagement
                          </div>
                          <h2 className="text-xl sm:text-2xl font-bold text-[#EBE8E1]">
                            {item.role}
                          </h2>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs font-mono text-[#858A96] bg-[#090B10] px-3 py-1.5 rounded border border-[#7792B5]/25 w-fit">
                          <Calendar className="w-3.5 h-3.5 text-[#EBE8E1]" />
                          <span>{item.duration}</span>
                        </div>
                      </div>

                      {/* Organization & Location Meta */}
                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#858A96] mb-5">
                        <div className="flex items-center gap-1.5 text-[#EBE8E1]">
                          <Building2 className="w-3.5 h-3.5" />
                          <span className="font-semibold">{item.company}</span>
                        </div>
                        <span className="text-[#858A96]/30">•</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#858A96]/70" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* Detailed Responsibilities & Contributions */}
                      <div className="space-y-3 text-xs sm:text-sm text-[#858A96] leading-relaxed mb-6">
                        <p>{item.description}</p>
                      </div>

                      {/* Technologies Applied */}
                      <div className="pt-4 border-t border-[#7792B5]/20">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-[#858A96]/70 mb-2">
                          Technologies &amp; Architectural Focus:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {item.skills.map((skill) => (
                            <span key={skill} className="tag-luxury">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </section>
    </main>
  );
}


