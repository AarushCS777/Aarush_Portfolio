export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
  tags: string[];
  iconType: 'analytics' | 'security' | 'fullstack';
}

export interface EducationItem {
  id: string;
  period: string;
  level: string;
  title: string;
  institution: string;
  score?: string;
  statusBadge?: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface StatItem {
  number: string;
  label: string;
}
