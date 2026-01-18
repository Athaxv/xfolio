import React, { useMemo } from 'react';
import { ArrowUpRight, GitCommit } from 'lucide-react';

// Helpers to generate random contribution data
const generateContributions = (rows: number, cols: number) => {
  const data = [];
  for (let i = 0; i < rows * cols; i++) {
    const rand = Math.random();
    let level = 0;
    if (rand > 0.9) level = 4;
    else if (rand > 0.8) level = 3;
    else if (rand > 0.6) level = 2;
    else if (rand > 0.4) level = 1;
    data.push(level);
  }
  return data;
};

const getLevelClass = (level: number) => {
  switch(level) {
    case 1: return 'bg-emerald-900/40 border-emerald-900/50 dark:bg-emerald-900/40 dark:border-emerald-900/50 bg-emerald-100 border-emerald-200';
    case 2: return 'bg-emerald-800/60 border-emerald-800/70 dark:bg-emerald-800/60 dark:border-emerald-800/70 bg-emerald-300 border-emerald-400';
    case 3: return 'bg-emerald-600 border-emerald-500 dark:bg-emerald-600 dark:border-emerald-500 bg-emerald-500 border-emerald-600';
    case 4: return 'bg-emerald-400 border-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.4)] dark:bg-emerald-400 dark:border-emerald-300 dark:shadow-[0_0_8px_rgba(52,211,153,0.4)] bg-emerald-600 border-emerald-700';
    default: return 'bg-neutral-900/50 border-transparent dark:bg-neutral-900/50 dark:border-transparent bg-neutral-100 border-neutral-200';
  }
};

export const GithubActivity: React.FC = () => {
  // Increased columns to 52 for a full year view
  const contributions = useMemo(() => generateContributions(7, 52), []);
  const months = ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];

  return (
    <section id="activity" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-end mb-16">
          <div className="flex flex-col">
              <span className="text-[10px] tracking-[0.2em] text-neutral-500 uppercase mb-2">Open Source</span>
              <h2 className="text-4xl md:text-5xl text-black dark:text-white leading-tight">
                <span className="font-serif-italic mr-3">GitHub</span>
                <span className="font-light text-neutral-500 dark:text-neutral-300">Activity</span>
                <span className="block text-lg font-mono text-neutral-500 mt-2 font-normal">@atharvgaur</span>
              </h2>
          </div>
          <a href="https://github.com" target="_blank" className="hidden md:flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
            View Profile <ArrowUpRight size={14} />
          </a>
      </div>

      <div className="w-full">
        {/* Heatmap Column */}
        <div className="w-full overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
             <GitCommit size={20} className="text-neutral-400" />
             <h3 className="text-lg font-medium text-black dark:text-white">Contribution Graph</h3>
          </div>
          
          {/* Months Label */}
          <div className="flex justify-between text-xs text-neutral-500 mb-4 px-1 max-w-[95%]">
              {months.map(m => <span key={m}>{m}</span>)}
          </div>

          {/* Grid */}
          <div className="flex gap-[3px] md:gap-[4px] flex-nowrap overflow-x-auto pb-4 mask-fade-right scrollbar-hide">
              {Array.from({ length: 52 }).map((_, colIndex) => (
                  <div key={colIndex} className="flex flex-col gap-[3px] md:gap-[4px]">
                      {Array.from({ length: 7 }).map((_, rowIndex) => {
                          const index = colIndex * 7 + rowIndex;
                          const level = contributions[index] || 0;
                          return (
                              <div 
                                  key={rowIndex} 
                                  title={`${level > 0 ? level * 3 : 'No'} contributions`}
                                  className={`w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-[2px] md:rounded-[3px] border ${getLevelClass(level)} transition-all duration-300 hover:scale-125 hover:z-10`}
                              ></div>
                          );
                      })}
                  </div>
              ))}
          </div>
          
          {/* Footer info */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mt-6 pt-6 border-t border-neutral-100 dark:border-neutral-900 gap-4">
              <span className="text-neutral-600 dark:text-neutral-300 font-medium">
                  <span className="text-black dark:text-white font-bold">842</span> contributions in the last year
              </span>
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <span>Less</span>
                  <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-[2px] bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"></div>
                      <div className="w-3 h-3 rounded-[2px] bg-emerald-100 dark:bg-emerald-900/40"></div>
                      <div className="w-3 h-3 rounded-[2px] bg-emerald-300 dark:bg-emerald-600"></div>
                      <div className="w-3 h-3 rounded-[2px] bg-emerald-500 dark:bg-emerald-400"></div>
                  </div>
                  <span>More</span>
              </div>
          </div>
        </div>
      </div>

      {/* Stack Section */}
      <div className="mt-24">
         <div className="flex flex-col mb-12">
            <span className="text-[10px] tracking-[0.2em] text-neutral-500 uppercase mb-2">Tools & Arms</span>
            <h2 className="text-4xl text-black dark:text-white">
                <span className="font-serif-italic mr-3">Stack</span>
                <span className="font-light text-neutral-500 dark:text-neutral-300">I use</span>
            </h2>
         </div>
         
         <div className="flex flex-wrap gap-3">
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Figma', 'Framer Motion', 'Git', 'Vercel'].map((tech) => (
                <div key={tech} className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors cursor-default">
                    {tech}
                </div>
            ))}
         </div>
      </div>
    </section>
  );
};