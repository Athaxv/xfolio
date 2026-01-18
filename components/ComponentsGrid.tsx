import React from 'react';
import { SectionHeader } from './ui/SectionHeader';
import { Mic, Globe, X, Folder, FileCode, Layout } from 'lucide-react';

export const ComponentsGrid: React.FC = () => {
  return (
    <section id="components" className="py-20 px-6 max-w-5xl mx-auto">
       <SectionHeader 
        metaLeft="Archive V1.0" 
        metaRight="Total / 06"
        serifText="Components"
        sansText="I have cooked"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: Ask AI */}
        <div className="h-64 rounded-2xl bg-[#0f0f0f] border border-neutral-800 flex items-center justify-center relative overflow-hidden group hover:border-neutral-700 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm font-medium shadow-[0_0_20px_rgba(255,255,255,0.3)] transform group-hover:scale-105 transition-transform">
                <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
                Ask AI
            </button>
        </div>

        {/* Card 2: Dynamic Island */}
        <div className="h-64 rounded-2xl bg-[#0f0f0f] border border-neutral-800 flex items-center justify-center relative overflow-hidden group hover:border-neutral-700 transition-colors">
            <div className="relative w-48 bg-black rounded-[24px] border border-neutral-800 shadow-2xl p-2 flex items-center justify-between group-hover:w-64 transition-all duration-500 ease-spring">
                <div className="flex items-center gap-3 pl-1">
                    <img src="https://picsum.photos/32/32" alt="avatar" className="w-8 h-8 rounded-full" />
                    <div className="flex flex-col">
                        <span className="text-[10px] text-neutral-400 leading-none">Calling...</span>
                        <span className="text-xs text-white font-medium">Tushar</span>
                    </div>
                </div>
                <div className="flex gap-2 pr-1">
                     <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                        <X size={14} />
                     </div>
                     <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                        <Mic size={14} />
                     </div>
                </div>
            </div>
             <div className="absolute top-4 right-4 text-neutral-700">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </div>
        </div>

        {/* Card 3: File Tree */}
        <div className="col-span-1 md:col-span-2 h-72 rounded-2xl bg-[#0f0f0f] border border-neutral-800 p-8 flex flex-col md:flex-row items-center justify-center gap-12 group hover:border-neutral-700 transition-colors">
             <div className="w-64 h-48 border border-neutral-800 rounded-lg bg-black/50 p-4 font-mono text-sm text-neutral-400 shadow-xl">
                <div className="flex items-center gap-2 mb-2 text-white">
                    <Folder size={14} fill="currentColor" className="text-blue-500/50" />
                    <span>project</span>
                </div>
                <div className="pl-4 border-l border-neutral-800 ml-1.5 space-y-2">
                    <div className="flex items-center gap-2">
                        <Folder size={14} className="text-neutral-600" />
                        <span>src</span>
                    </div>
                     <div className="pl-4 border-l border-neutral-800 ml-1.5 space-y-2">
                         <div className="flex items-center gap-2">
                             <Folder size={14} className="text-neutral-600" />
                             <span>app</span>
                         </div>
                         <div className="pl-4 border-l border-neutral-800 ml-1.5 space-y-2">
                            <div className="flex items-center gap-2 text-blue-300">
                                <FileCode size={14} />
                                <span>page.tsx</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FileCode size={14} />
                                <span>layout.tsx</span>
                            </div>
                         </div>
                     </div>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};