export interface Personal {
  name: string;
  title: string;
  subtitle : string;
  bio: string[];
  github: string;
  linkedin: string;
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
  achievements: string[];
}

export interface Language {
  name: string;
  level: number;
  badge: string;
}

export interface Framework {
  name: string;
  category: string;
  color: string;
}

export interface Tool {
  name: string;
  icon: string;
}

export interface Interest {
  icon: string;
  label: string;
  value: string;
}

export interface Skill {
  icon: string;
  label: string;
  color: string;
  level: string;
}

export interface Exploring {
  name: string;
  color: string;
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  current: boolean;
  responsibilities: string[];
  skills: string[];
  logo: string;
}

export interface Project {
  title: string;
  description: string;
  period: string;
  technologies: string[];
  features: string[];
  gradient: string;
  icon: string;
}

export interface Certification {
  title: string;
  provider: string;
  date: string;
  description: string;
  skills: string[];
  link: string;
  gradient: string;
  icon: string;
}

export interface Stats {
  experience: string;
  projects: string;
  certifications: string;
  commitment: string;
}

export interface PortfolioData {
  personal: Personal;
  education: Education[];
  languages: Language[];
  frameworks: Framework[];
  tools: Tool[];
  interests: Interest[];
  skills: Skill[];
  exploring: Exploring[];
  experiences: Experience[];
  projects: Project[];
  certifications: Certification[];
  stats: Stats;
}