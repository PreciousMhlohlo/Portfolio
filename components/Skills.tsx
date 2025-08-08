import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16">
        <div className="flex flex-col items-start gap-2 mb-10">
            <span className="font-display text-base font-semibold tracking-[0.2em] uppercase text-opacity-70 text-[#5A3734]">Toolkit</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[#5A3734]">Technical Skills</h2>
        </div>
        <div className="flex flex-wrap gap-3 justify-start">
        {SKILLS.map((skill) => (
            <span key={skill.name} className="bg-[#5A3734]/5 border border-dotted border-[#5A3734]/30 text-[#5A3734] text-sm font-semibold px-4 py-2 leading-none">
                {skill.name}
            </span>
        ))}
        </div>
    </section>
  );
};

export default Skills;