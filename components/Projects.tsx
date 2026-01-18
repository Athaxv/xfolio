import React, { useState, useEffect } from 'react';
import { SectionHeader } from './ui/SectionHeader';
import { Project } from '../types';
import { ArrowUpRight, Github, ExternalLink, X, Tag } from 'lucide-react';

const projects: Project[] = [
  {
    id: '1',
    title: 'Lumina UI',
    description: 'A comprehensive React component library focusing on accessibility and dark mode aesthetics. Designed to provide a seamless developer experience with fully typed components and extensive documentation.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    year: '2024',
    image: 'https://picsum.photos/600/400?random=10',
    githubLink: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    id: '2',
    title: 'Vortex Finance',
    description: 'Real-time dashboard for crypto analytics with WebGL visualizations. Features live data updates, interactive charts, and a highly optimized rendering engine for handling millions of data points.',
    tags: ['WebGL', 'Next.js', 'Supabase'],
    year: '2023',
    image: 'https://picsum.photos/600/400?random=11',
    githubLink: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    id: '3',
    title: 'Aether Lens',
    description: 'AI-powered photography assistant that suggests compositions in real-time. Uses on-device machine learning models to analyze scenes and provide instant feedback to photographers.',
    tags: ['AI', 'React Native', 'Python'],
    year: '2023',
    image: 'https://picsum.photos/600/400?random=12',
    githubLink: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    id: '4',
    title: 'Orbit',
    description: 'Collaborative whiteboard for remote teams with infinite canvas. Supports real-time collaboration, shape recognition, and export to various formats.',
    tags: ['WebSockets', 'Canvas API', 'Redis'],
    year: '2022',
    image: 'https://picsum.photos/600/400?random=13',
    githubLink: 'https://github.com',
    liveLink: 'https://example.com'
  }
];

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <SectionHeader 
        metaLeft="Portfolio V2.0" 
        metaRight="Featured / 04"
        serifText="Selected"
        sansText="Projects"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              
              <div className="absolute top-4 right-4 bg-white/50 dark:bg-black/50 backdrop-blur p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight size={18} className="text-black dark:text-white" />
              </div>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl text-black dark:text-white font-medium mb-2 group-hover:underline decoration-neutral-400 dark:decoration-neutral-700 underline-offset-4">{project.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-900 text-neutral-500 border border-neutral-200 dark:border-neutral-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-xs font-mono text-neutral-500 dark:text-neutral-600 pt-1">{project.year}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300" 
            onClick={() => setSelectedProject(null)}
          ></div>
          <div className="relative w-full max-w-2xl bg-white dark:bg-[#09090b] rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-2xl flex flex-col overflow-hidden animate-fade-in-up max-h-[90vh]">
            
            {/* Modal Header Image */}
            <div className="relative h-48 sm:h-64 w-full shrink-0">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 dark:from-[#09090b]/80 to-transparent"></div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-md transition-colors border border-white/10"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto">
              <div className="flex flex-col gap-6">
                <div>
                   <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl sm:text-3xl font-serif-italic font-bold text-black dark:text-white">
                        {selectedProject.title}
                      </h3>
                      <span className="text-sm font-mono text-neutral-500 border border-neutral-200 dark:border-neutral-800 px-2 py-1 rounded">
                        {selectedProject.year}
                      </span>
                   </div>
                   <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm sm:text-base">
                     {selectedProject.description}
                   </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map(tag => (
                    <div key={tag} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-300">
                      <Tag size={12} />
                      {tag}
                    </div>
                  ))}
                </div>

                <div className="h-px w-full bg-neutral-200 dark:bg-neutral-800 my-2"></div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a 
                    href={selectedProject.githubLink || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-black font-medium hover:opacity-90 transition-opacity"
                  >
                    <Github size={18} />
                    <span>View Source</span>
                  </a>
                  <a 
                    href={selectedProject.liveLink || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700 font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Live Preview</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};