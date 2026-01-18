import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { GithubActivity } from './components/GithubActivity';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white selection:bg-neutral-200 dark:selection:bg-neutral-700 dark:selection:text-white transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Modern Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-[#050505] dark:via-transparent dark:to-transparent opacity-80"></div>
      </div>

      {/* Page Guidelines (The "Notion Page" Enclosure) */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
          <div className="w-full max-w-5xl h-full border-x border-dashed border-neutral-200/60 dark:border-neutral-800/60"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main className="flex flex-col gap-12 md:gap-24">
          <Hero />
          <Experience />
          <Projects />
          <GithubActivity />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;