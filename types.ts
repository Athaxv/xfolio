import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
  year: string;
  githubLink?: string;
  liveLink?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyLogo?: React.ReactNode; 
  period: string;
  description: string;
  current: boolean;
}

export interface ComponentItem {
  id: string;
  name: string;
  description?: string;
  preview: React.ReactNode;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  slug: string;
}

export interface PullRequest {
  id: string;
  title: string;
  repo: string;
  status: 'merged' | 'open' | 'closed';
  date: string;
  additions: number;
  deletions: number;
  openedAt: string;
  closedAt?: string;
  filesChanged: string[];
}