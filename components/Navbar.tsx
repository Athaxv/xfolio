import React, { useState, useEffect } from 'react';
import { Github, Instagram, Linkedin, Twitter, Sun, Moon, Search, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Theme Toggle
  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  // Handle Scroll to resize navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Keyboard Shortcuts for Search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <div className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isScrolled ? 'top-6' : 'top-0'}`}>
        <nav 
          className={`
            transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] backdrop-blur-xl flex items-center justify-between
            ${isScrolled 
              ? 'w-[90%] max-w-4xl py-3 px-6 rounded-full bg-white/80 dark:bg-[#111]/80 border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg shadow-black/5' 
              : 'w-full max-w-5xl py-6 px-6 bg-transparent border-b border-transparent'
            }
          `}
        >
            <div className="flex items-center gap-2">
              <a href="#" className={`font-serif-italic font-bold tracking-tight text-black dark:text-white transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl'}`}>TN</a>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                <a href="#blog" className="hover:text-black dark:hover:text-white transition-colors">Blog</a>
                <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</a>
                <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Connect</a>
              </div>

              <div className="h-4 w-[1px] bg-neutral-200 dark:bg-neutral-800"></div>

              <div className="flex items-center gap-4 text-neutral-500 dark:text-neutral-400">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors"><Instagram size={18} /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors"><Twitter size={18} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors"><Linkedin size={18} /></a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors"><Github size={18} /></a>
              </div>
              
              <div className="flex items-center gap-3">
                  <button onClick={toggleTheme} className="text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                    {isDark ? <Sun size={18} /> : <Moon size={18} />}
                  </button>

                  <button 
                    onClick={() => setIsSearchOpen(true)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 text-xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors group ${isScrolled ? 'hidden lg:flex' : 'flex'}`}
                  >
                    <Search size={14} className="group-hover:text-black dark:group-hover:text-white" />
                    <div className="flex items-center gap-1 ml-1">
                      <span className="bg-white dark:bg-neutral-800 px-1 rounded text-[10px] border border-neutral-200 dark:border-neutral-700">Ctrl</span>
                      <span className="bg-white dark:bg-neutral-800 px-1 rounded text-[10px] border border-neutral-200 dark:border-neutral-700">K</span>
                    </div>
                  </button>
              </div>
            </div>

             {/* Mobile Controls */}
             <div className="md:hidden flex items-center gap-4">
                 <button onClick={toggleTheme} className="text-neutral-500 dark:text-neutral-400">
                    {isDark ? <Sun size={18} /> : <Moon size={18} />}
                  </button>
                 <button onClick={() => setIsSearchOpen(true)} className="text-neutral-500 dark:text-neutral-400">
                    <Search size={18} />
                 </button>
             </div>
        </nav>
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center pt-24 px-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsSearchOpen(false)}></div>
          <div className="relative w-full max-w-lg bg-white dark:bg-[#0a0a0a] rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden animate-fade-in-up">
            <div className="flex items-center border-b border-neutral-200 dark:border-neutral-800 px-4 py-3">
              <Search size={18} className="text-neutral-400 mr-3" />
              <input 
                type="text" 
                placeholder="Search projects, blogs, or commands..." 
                className="flex-1 bg-transparent outline-none text-black dark:text-white placeholder-neutral-500 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button onClick={() => setIsSearchOpen(false)} className="text-neutral-400 hover:text-black dark:hover:text-white">
                <X size={18} />
              </button>
            </div>
            <div className="p-2">
              <div className="text-xs font-medium text-neutral-500 px-2 py-2">Suggested</div>
              <a href="#projects" onClick={() => setIsSearchOpen(false)} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-600 dark:text-neutral-300 transition-colors cursor-pointer">
                <div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-500"><Search size={14} /></div>
                <div className="flex flex-col">
                   <span className="text-sm font-medium text-black dark:text-white">View Projects</span>
                   <span className="text-xs text-neutral-500">Jump to portfolio section</span>
                </div>
              </a>
              <a href="#blog" onClick={() => setIsSearchOpen(false)} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-600 dark:text-neutral-300 transition-colors cursor-pointer">
                 <div className="w-8 h-8 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-500"><Search size={14} /></div>
                 <div className="flex flex-col">
                   <span className="text-sm font-medium text-black dark:text-white">Read Blog</span>
                   <span className="text-xs text-neutral-500">Latest thoughts and tutorials</span>
                </div>
              </a>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-900/50 px-4 py-2 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center text-[10px] text-neutral-500">
               <span>Search powered by Local Index</span>
               <div className="flex gap-2">
                 <span>Navigate <span className="text-black dark:text-white">↓↑</span></span>
                 <span>Select <span className="text-black dark:text-white">↵</span></span>
               </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};