import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { GitHubIcon, LinkedInIcon } from './icons/SocialIcons';
import { EmailIcon } from './icons/ActionIcons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 text-center">
        <div className="flex flex-col items-center gap-2 mb-8">
            <span className="font-display text-base font-semibold tracking-[0.2em] uppercase text-opacity-70 text-[#5A3734]">Connect</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[#5A3734]">Get In Touch</h2>
        </div>
      <p className="mt-4 text-base text-[#5A3734]/90 max-w-2xl mx-auto">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out.
      </p>
      <a
        href={`mailto:${PERSONAL_INFO.email}`}
        className="mt-10 inline-block bg-[#5A3734] text-[#F1EFEA] font-display font-bold text-sm px-10 py-4 uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300"
      >
        Say Hello
      </a>
       <div className="mt-8">
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-flex items-center gap-3 text-[#5A3734] hover:opacity-70 transition-opacity duration-300 group"
        >
          <EmailIcon className="h-6 w-6" />
          <span className="font-display text-lg font-semibold tracking-wider group-hover:underline">
            {PERSONAL_INFO.email}
          </span>
        </a>
      </div>
       <div className="mt-12 flex justify-center space-x-8">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-[#5A3734] hover:opacity-70 transition-opacity duration-300">
            <span className="sr-only">GitHub</span>
            <GitHubIcon className="h-7 w-7" />
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#5A3734] hover:opacity-70 transition-opacity duration-300">
            <span className="sr-only">LinkedIn</span>
            <LinkedInIcon className="h-7 w-7" />
          </a>
        </div>
    </section>
  );
};

export default Contact;