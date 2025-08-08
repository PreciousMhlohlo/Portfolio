import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16">
        <div className="flex flex-col items-start gap-2 mb-10">
            <span className="font-display text-base font-semibold tracking-[0.2em] uppercase text-opacity-70 text-[#5A3734]">Portfolio</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[#5A3734]">Featured Work</h2>
        </div>
      <p className="mt-4 text-base text-[#5A3734]/90 max-w-3xl">
        Here are some of the projects I've worked on, showcasing my skills in AI, development, and user-centric design.
      </p>
      <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;