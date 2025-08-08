import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Header: React.FC = () => {
  const navLinks = ['About', 'Skills', 'Projects', 'Contact'];

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <header className="py-4 border-b-2 border-dotted border-[#5A3734]">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold font-display text-[#5A3734] hover:opacity-70 transition-opacity duration-300">
            {PERSONAL_INFO.name}
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const targetId = link.toLowerCase();
              return (
              <a
                key={link}
                href={`#${targetId}`}
                onClick={(e) => handleNavClick(e, targetId)}
                className="text-base font-semibold tracking-wider uppercase text-[#5A3734] hover:opacity-70 transition-opacity duration-300"
              >
                {link}
              </a>
            )})}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;