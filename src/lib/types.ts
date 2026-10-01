export type ProjectCategory = "cloud-devops" | "ai-on-aws" | "data" | "fullstack";

export type SkillTag = "aws" | "terraform" | "containers" | "security" | "data" | "ml-ai";

export interface ProjectLink {
  code?: string;
  article?: string;
  demo?: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  categories: ProjectCategory[];
  featured: boolean;
  stack: string[];
  problem: string;
  myRole: string;
  keyDecisions: string[];
  outcome: string;
  links: ProjectLink;
  hasDiagram: boolean;
}

export interface ExperienceBullet {
  text: string;
  skills: SkillTag[];
}

export interface ExperienceEntry {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: ExperienceBullet[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: number;
  featured?: boolean;
}

export interface EducationEntry {
  institution: string;
  qualification: string;
  period: string;
  result?: string;
}

export interface Article {
  title: string;
  url: string;
  date: string;
  description?: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  type: "email" | "phone" | "whatsapp" | "linkedin" | "github" | "medium" | "calendar" | "resume" | "devto" | "x" | "instagram";
  copyable?: boolean;
  download?: boolean;
}
