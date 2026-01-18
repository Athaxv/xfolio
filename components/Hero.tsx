import React from 'react';
import { BadgeCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 max-w-5xl mx-auto">
      {/* Abstract Background Decoration */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-neutral-200/50 dark:bg-neutral-800/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      {/* Banner & Profile */}
      <div className="relative mb-12 animate-fade-in-up">
        <div className="h-48 md:h-64 w-full rounded-2xl overflow-hidden relative">
          <img 
            src="https://picsum.photos/1200/400?grayscale" 
            alt="Banner" 
            className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#050505] via-transparent to-transparent"></div>
        </div>
        
        <div className="absolute -bottom-12 left-8 md:left-12">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full p-1 bg-white dark:bg-[#050505]">
            <img 
              src="https://picsum.photos/200/200?random=1" 
              alt="Profile" 
              className="w-full h-full rounded-full object-cover border-2 border-neutral-200 dark:border-neutral-800"
            />
            <div className="absolute bottom-1 right-1 bg-white dark:bg-[#050505] rounded-full p-[2px]">
               <BadgeCheck size={22} className="text-white fill-blue-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Intro Text */}
      <div className="mt-16 md:ml-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <div className="flex items-center gap-2 mb-2">
          <h1 className="text-3xl font-serif-italic font-semibold text-black dark:text-white">Tushar Negi</h1>
          <BadgeCheck size={20} className="text-white fill-blue-500" />
          <span className="text-neutral-500 text-sm ml-2">•</span>
          <span className="text-neutral-500 dark:text-neutral-400 text-sm border-b border-neutral-300 dark:border-neutral-800 pb-0.5">I am from India</span>
        </div>

        <div className="max-w-2xl mt-8">
          <h2 className="text-4xl md:text-5xl leading-tight mb-6">
            <span className="font-serif-italic block text-black dark:text-white">Building Polished</span>
            <span className="font-light text-neutral-500 dark:text-neutral-400">Digital Experiences.</span>
          </h2>
          
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg max-w-xl">
            Currently a Frontend Developer at <strong className="text-black dark:text-white font-medium">FantasticFare</strong>. 
            Previously, I freelanced for various national and international clients. I build polished interfaces and seamless user experiences, 
            guided by the philosophy that the best animations feel so natural they go entirely unnoticed.
          </p>
        </div>
      </div>
    </section>
  );
};