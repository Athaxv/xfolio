import React from 'react';
import { SectionHeader } from './ui/SectionHeader';
import { GitPullRequest, GitMerge, ArrowRight } from 'lucide-react';

interface FeaturedPR {
  id: string;
  title: string;
  repo: string;
  date: string;
  status: 'merged' | 'open' | 'closed';
  additions: number;
  deletions: number;
  link?: string;
}

const prs: FeaturedPR[] = [
  {
    id: '1',
    title: 'feat: Implement recursive file tree component with drag-and-drop',
    repo: 'facebook/react',
    date: 'Merged 2 days ago',
    status: 'merged',
    additions: 450,
    deletions: 23,
    link: '#'
  },
  {
    id: '2',
    title: 'fix: Hydration mismatch in dark mode provider',
    repo: 'vercel/next.js',
    date: 'Merged 5 days ago',
    status: 'merged',
    additions: 12,
    deletions: 8,
    link: '#'
  },
  {
    id: '3',
    title: 'chore: Migrate to pnpm and update lockfile',
    repo: 'tailwindlabs/tailwindcss',
    date: 'Open 1 week ago',
    status: 'open',
    additions: 1240,
    deletions: 890,
    link: '#'
  }
];

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 px-6 max-w-5xl mx-auto">
      <SectionHeader 
        metaLeft="Open Source" 
        metaRight="Contributions / 12"
        serifText="Recent"
        sansText="Pull Requests"
      />

      <div className="grid grid-cols-1 gap-6">
        {prs.map((pr) => (
          <a key={pr.id} href={pr.link} target="_blank" rel="noopener noreferrer" className="group relative border-b border-neutral-200 dark:border-neutral-800 pb-8 last:border-none block">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
               <div className="flex items-center gap-3">
                 {pr.status === 'merged' ? (
                   <div className="p-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 shrink-0">
                     <GitMerge size={16} />
                   </div>
                 ) : (
                   <div className="p-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 shrink-0">
                     <GitPullRequest size={16} />
                   </div>
                 )}
                 <h3 className="text-xl font-medium text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                   {pr.title}
                 </h3>
               </div>
               
               <div className="flex items-center gap-4 text-xs font-mono text-neutral-500 uppercase tracking-wide shrink-0 ml-10 md:ml-0">
                  <span className="bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded border border-neutral-200 dark:border-neutral-800">{pr.repo}</span>
                  <span className="hidden md:inline w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
                  <span>{pr.date}</span>
               </div>
            </div>
            
            <div className="ml-10 md:ml-0 pl-1.5 flex items-center justify-between">
                <div className="flex gap-4 text-sm font-mono opacity-60 group-hover:opacity-100 transition-opacity">
                    <span className="text-green-600 dark:text-green-400">+{pr.additions}</span>
                    <span className="text-red-500 dark:text-red-400">-{pr.deletions}</span>
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-black dark:text-white opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                   View Code <ArrowRight size={14} />
                </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};