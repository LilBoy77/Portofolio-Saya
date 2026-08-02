export interface Identity {
  name: string;
  shortName: string;
  role: string;
  location: string;
  availability: string;
  email: string;
  intro: string;
  bio: string[];
  resumeUrl: string;
}

export interface Socials {
  github: string;
  linkedin: string;
  instagram: string;
}

export interface HeroData {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  splineSceneUrl: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  impact: string;
  role: string;
  stack: string[];
  image: string;
  accent: string;
  liveUrl: string;
  sourceUrl: string;
  featured: boolean;
  problem?: string;
  solution?: string;
  process?: string[];
  gallery?: string[];
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
}

export interface ValueProp {
  number: string;
  title: string;
  description: string;
}

export interface PortfolioData {
  identity: Identity;
  socials: Socials;
  hero: HeroData;
  experiences: Experience[];
  projects: Project[];
  capabilities: SkillCategory[];
  values: ValueProp[];
  skills: string[];
}
