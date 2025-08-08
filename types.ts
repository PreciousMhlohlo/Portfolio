
export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveDemoUrl: string;
  githubUrl: string;
  liveDemoText?: string;
  imageUrl?: string;
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Frameworks & Libraries' | 'Tools & Platforms' | 'Databases';
}