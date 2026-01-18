import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 max-w-5xl mx-auto">
      <div className="relative rounded-3xl bg-neutral-100 dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-800 p-8 md:p-16 overflow-hidden text-center">
        
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center">
           <div className="w-12 h-12 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center mb-6 shadow-sm">
             <Mail size={20} className="text-black dark:text-white" />
           </div>
           
           <h2 className="text-4xl md:text-5xl mb-6 text-black dark:text-white">
             <span className="font-serif-italic">Ready to start</span><br />
             <span className="font-light text-neutral-500 dark:text-neutral-400">a project together?</span>
           </h2>
           
           <p className="text-neutral-600 dark:text-neutral-400 max-w-md mx-auto mb-10 text-lg">
             I'm currently available for freelance projects and open to new opportunities.
           </p>

           <a href="mailto:hello@atharvgaur.com" className="group flex items-center gap-3 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium transition-transform hover:scale-105">
             Say Hello
             <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
           </a>
        </div>
      </div>
    </section>
  );
};