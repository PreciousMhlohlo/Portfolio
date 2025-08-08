import React from 'react';
import type { Project } from '../types';
import { GitHubIcon } from './icons/SocialIcons';
import { ExternalLinkIcon } from './icons/ActionIcons';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative flex flex-col border-2 border-dotted border-[#5A3734] bg-[#5A3734]/5 transition-all duration-300 hover:bg-[#5A3734]/10 hover:border-solid overflow-hidden">
      
      {project.imageUrl && (
         <div className="relative w-full aspect-video overflow-hidden border-b-2 border-dotted border-[#5A3734]">
            <img 
                src={project.imageUrl} 
                alt={`Preview of ${project.title}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
         </div>
      )}

      <div className="flex flex-col h-full p-6">
        <div className="flex justify-between items-start gap-4 mb-3">
          <h3 className="font-display text-xl font-bold text-[#5A3734] pr-10">{project.title}</h3>
          <div className="flex items-center space-x-3 flex-shrink-0">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#5A3734] transition-opacity hover:opacity-70"
                aria-label={project.liveDemoText || 'Live Demo'}
              >
                <ExternalLinkIcon className="h-5 w-5" />
              </a>
            )}
            {project.githubUrl && project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#5A3734] transition-opacity hover:opacity-70"
                aria-label="GitHub Repository"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-[#5A3734]/90 text-sm leading-relaxed flex-grow mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-semibold bg-[#5A3734]/20 text-[#5A3734] px-3 py-1 uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;