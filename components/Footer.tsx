import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t-2 border-dotted border-[#5A3734]">
      <div className="container mx-auto max-w-5xl py-8 px-4 sm:px-6 lg:px-8 text-center text-xs text-[#5A3734]/70 uppercase tracking-widest">
        <p>&copy; {currentYear} {PERSONAL_INFO.name}. All Rights Reserved.</p>
        
      </div>
    </footer>
  );
};

export default Footer;