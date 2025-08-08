import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { GitHubIcon, LinkedInIcon } from './icons/SocialIcons';
import { DownloadIcon } from './icons/ActionIcons';

const Hero: React.FC = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch(PERSONAL_INFO.resumeUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'Precious-Mhlohlo-Resume.html';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading the resume:', error);
      window.open(PERSONAL_INFO.resumeUrl, '_blank');
    }
  };

  return (
    <section id="hero" className="py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="text-center md:text-left">
            <span className="text-lg font-semibold tracking-widest uppercase">{PERSONAL_INFO.name}</span>
            <h1 className="mt-2 text-5xl md:text-7xl font-bold font-display tracking-tight text-[#5A3734]">
              {PERSONAL_INFO.title}
            </h1>
            <p className="mt-6 max-w-xl mx-auto md:mx-0 text-base leading-relaxed text-[#5A3734]/90">
              {PERSONAL_INFO.brandingStatement}
            </p>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start items-center gap-4">
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 bg-[#5A3734] text-[#F1EFEA] font-display font-bold text-sm px-6 py-3 uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300"
              >
                <DownloadIcon className="h-5 w-5" />
                <span>Download CV</span>
              </button>
               <div className="flex items-center gap-4">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-[#5A3734] hover:opacity-70 transition-opacity duration-300">
                    <span className="sr-only">GitHub</span>
                    <GitHubIcon className="h-7 w-7" />
                </a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#5A3734] hover:opacity-70 transition-opacity duration-300">
                    <span className="sr-only">LinkedIn</span>
                    <LinkedInIcon className="h-7 w-7" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
             <div className="relative p-2 border-2 border-dotted border-[#5A3734]">
                <div
                    role="img"
                    aria-label="Profile portrait of Precious Mhlohlo"
                    className="profile-picture relative w-60 h-60 md:w-80 md:h-80"
                ></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;