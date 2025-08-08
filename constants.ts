import type { Project, Skill } from './types';

export const PERSONAL_INFO = {
  name: 'Nosibusiso Precious Mhlohlo',
  title: 'AI/ML Developer',
  brandingStatement: 'A passionate and driven developer specializing in AI/ML, bridging the gap between complex data and intuitive user experiences. Committed to building innovative solutions that solve real-world problems.',
  bio: "An aspiring IT professional with a strong foundation in system support, I am rapidly expanding my expertise in artificial intelligence. Following my graduation from an IT System Support program, I am gaining hands-on experience with AI-driven solutions through a competitive internship at CAPACITI. I am passionate about leveraging technology to solve real-world problems, especially for under-resourced communities, blending my technical skills with a user-focused mindset derived from my support background. My current focus is on building end-to-end AI systems, driven by a commitment to continuous learning, innovation, and making an impactful contribution to the tech industry.",
  careerObjectives: "To secure a challenging and growth-oriented position in the IT or AI technology sector where I can apply and expand my skills in system support, no-code development, and artificial intelligence. My goal is to contribute to meaningful technology projects that drive innovation, improve user experience, and create positive social impact—while continuously growing into a well-rounded, future-ready IT professional.",
  email: "mhlohlop@gmail.com",
  github: "https://github.com/PreciousMhlohlo",
  linkedin: "https://www.linkedin.com/in/nosibusiso-mhlohlo-8a73b8180/",
  resumeUrl: "/resume.html",
};

export const PROJECTS: Project[] = [
  {
    title: 'AI Stories & Content Generator',
    description: 'Role: Prompt Engineer & UI Designer. A generative AI tool that creates customized visual stories and social media content using prompt templates, with a clean and responsive UI.',
    tags: ['OpenAI API', 'React.js', 'Vercel'],
    liveDemoUrl: 'https://stories-content-generator.vercel.app/',
    githubUrl: 'https://github.com/PreciousMhlohlo',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_PeJVtqXiW0XYI4NB91Mp0YvTcwSK0OzR6A&s',
  },
  {
    title: 'AI Resume Generator',
    description: 'Role: Frontend Developer. A web-based tool to help users input their details and automatically format them into a professional, downloadable resume with an instant preview.',
    tags: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    liveDemoUrl: 'https://preciousmhlohlo.github.io/Resume-generator/',
    githubUrl: 'https://github.com/PreciousMhlohlo/Resume-generator',
    imageUrl: 'https://cdn.gotresumebuilder.com/Content/Images/homepage_intro.png',
  },
  {
    title: 'Sentiment Analysis Dashboard',
    description: 'Role: AI Integrator & Data Analyst. An interactive dashboard for real-time sentiment analysis on user input, providing sentiment scores with a clean, responsive UI.',
    tags: ['Python', 'Streamlit', 'NLP'],
    liveDemoUrl: 'https://sentiment-analysis-dashboard-system-cybercrew.streamlit.app/',
    githubUrl: 'https://github.com/PreciousMhlohlo',
    imageUrl: 'https://cdn.dribbble.com/userupload/16304011/file/original-3541ad366e7fbc61bf9359e0a5d3d686.png',
  },
  {
    title: 'UX/UI Prototype – AI Story Tool',
    description: 'Role: UX Designer. A clickable Figma prototype for an AI story generation platform, showcasing user journeys and interactive flows for early-stage user testing and design validation.',
    tags: ['Figma', 'UX Design', 'Prototyping'],
    liveDemoUrl: 'https://www.figma.com/proto/rxFGXwkOUtxBrtnKcHtkKQ/Untitled?node-id=21-4&t=AbZxlm0hnqmkey9R-1&scaling=scale-down&content-scaling=fixed&page-id=21%3A2',
    githubUrl: '#',
    liveDemoText: 'View Prototype',
    imageUrl: 'https://studio.uxpincdn.com/studio/wp-content/uploads/2022/09/Turn-Figma-Designs-into-Interactive-Prototypes.png.webp'
  },
];


export const SKILLS: Skill[] = [
    { name: 'Python', category: 'Languages' },
    { name: 'JavaScript', category: 'Languages' },
    { name: 'TypeScript', category: 'Languages' },
    { name: 'SQL', category: 'Languages' },
    { name: 'TensorFlow', category: 'Frameworks & Libraries' },
    { name: 'PyTorch', category: 'Frameworks & Libraries' },
    { name: 'Scikit-learn', category: 'Frameworks & Libraries' },
    { name: 'Pandas', category: 'Frameworks & Libraries' },
    { name: 'React', category: 'Frameworks & Libraries' },
    { name: 'Node.js', category: 'Frameworks & Libraries' },
    { name: 'Tailwind CSS', category: 'Frameworks & Libraries' },
    { name: 'Git & GitHub', category: 'Tools & Platforms' },
    { name: 'Docker', category: 'Tools & Platforms' },
    { name: 'AWS', category: 'Tools & Platforms' },
    { name: 'Jupyter Notebooks', category: 'Tools & Platforms' },
    { name: 'PostgreSQL', category: 'Databases' },
    { name: 'MongoDB', category: 'Databases' },
];