export type SkillCategory = 'all' | 'programming' | 'data-ai' | 'database' | 'tools';

export interface SkillItem {
  name: string;
  badge?: string;
  badgeType?: 'primary' | 'secondary' | 'neutral';
  sublabel?: string;
  icon?: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  details?: {
    overview: string;
    highlights: string[];
    techStack: string[];
  };
}

export interface EducationItem {
  level: string;
  title: string;
  institution: string;
  period: string;
  status?: string;
  isCurrent?: boolean;
  coursework?: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  organization: string;
  tag: string;
  description: string;
  detailedScope: string;
  verificationCode: string;
  icon: string;
}

export interface AchievementItem {
  tag: string;
  title: string;
  description: string;
  icon: string;
}

export interface BeyondCodeItem {
  title: string;
  tag: string;
  description: string;
  icon: string;
}
