export interface Education {
  school: string;
  degree: string;
  duration: string;
  grade: string;
}

export interface Project {
  title: string;
  description: string;
  highlights: string[];
  link?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Certification {
  name: string;
  date: string;
}

export interface Achievement {
  title: string;
  date: string;
  description: string;
}

export interface ResumeData {
  name: string;
  tagline: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github?: string;
    discord?: string;
  };
  summary: string;
  professionalQualification: {
    institution: string;
    course: string;
    duration: string;
    location: string;
  };
  education: Education[];
  skills: SkillCategory[];
  projects: Project[];
  certifications: Certification[];
  achievements: Achievement[];
  languages: { name: string; level: string }[];
  interests: { category: string; items: string[] }[];
}
