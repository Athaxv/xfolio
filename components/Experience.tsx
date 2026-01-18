import React from 'react';
import { SectionHeader } from './ui/SectionHeader';
import { Experience as ExperienceType } from '../types';

const experiences: ExperienceType[] = [
  {
    id: '1',
    role: 'Frontend Developer',
    company: 'FantasticFare',
    period: 'Aug 2025 — Present',
    description: 'Spearheading the frontend architecture using React and Next.js, focusing on performance optimization and scalable component systems.',
    current: true,
  },
  {
    id: '2',
    role: 'Full Stack Engineer',
    company: 'Freelance',
    period: 'Aug 2024 — July 2025',
    description: 'Architected and shipped scalable full-stack solutions for diverse clients, managing the entire lifecycle from system design to deployment and CI/CD integration.',
    current: false,
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
      <SectionHeader 
        metaLeft="Career Path" 
        metaRight="2021 — Present"
        serifText="Experience"
        sansText="& Roles"
      />

      <div className="relative pl-4 md:pl-8 border-l border-neutral-200 dark:border-neutral-800 space-y-16">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Timeline Dot */}
            <div className={`absolute -left-[21px] md:-left-[37px] top-2 w-3 h-3 rounded-full border-2 transition-colors duration-300 ${exp.current ? 'bg-blue-500 border-blue-900 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 group-hover:border-neutral-500'}`}></div>

            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
              <div className="flex items-baseline gap-3">
                <h3 className="text-2xl font-serif-italic text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-200 transition-colors">
                  {exp.company}
                </h3>
                <span className="text-sm font-medium text-neutral-500">{exp.role}</span>
              </div>
              <span className="text-xs font-mono text-neutral-500 dark:text-neutral-600 uppercase tracking-wider mt-2 md:mt-0">
                {exp.period}
              </span>
            </div>

            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};