import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16">
        <div className="flex flex-col items-start gap-2 mb-10">
            <span className="font-display text-base font-semibold tracking-[0.2em] uppercase text-opacity-70 text-[#5A3734]">About Me</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[#5A3734]">Who I Am</h2>
        </div>
        <div className="text-base text-[#5A3734]/90 leading-relaxed space-y-6 max-w-3xl">
            <p>{PERSONAL_INFO.bio}</p>
        </div>
        <div className="mt-12">
            <h3 className="font-display text-2xl font-bold text-[#5A3734] mb-3">Career Objectives</h3>
            <p className="text-base text-[#5A3734]/90 leading-relaxed max-w-3xl">{PERSONAL_INFO.careerObjectives}</p>
        </div>
    </section>
  );
};

export default About;