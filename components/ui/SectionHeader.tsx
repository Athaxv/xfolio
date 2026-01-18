import React from 'react';

interface SectionHeaderProps {
  serifText: string;
  sansText: string;
  metaLeft?: string;
  metaRight?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  serifText, 
  sansText, 
  metaLeft, 
  metaRight,
  className = "" 
}) => {
  return (
    <div className={`mb-16 ${className}`}>
      <div className="flex justify-between items-end text-xs font-medium tracking-widest text-neutral-500 uppercase mb-2">
        <span>{metaLeft}</span>
        <span>{metaRight}</span>
      </div>
      <h2 className="text-4xl md:text-5xl text-black dark:text-white leading-tight">
        <span className="font-serif-italic font-normal mr-3">{serifText}</span>
        <span className="font-light text-neutral-500 dark:text-neutral-300">{sansText}</span>
      </h2>
      <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-neutral-200 dark:from-neutral-800 to-transparent"></div>
    </div>
  );
};