import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#050505] relative z-10 transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-neutral-600 dark:text-neutral-500 text-sm">
          © {new Date().getFullYear()} Tushar Negi. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm font-medium text-neutral-600 dark:text-neutral-500">
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Mail</a>
        </div>
      </div>
    </footer>
  );
};