import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-center bg-black/30 backdrop-blur-lg border-b border-white/20 z-50">
      <ul className="flex space-x-6 text-sm font-medium text-white">
        {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
          <li key={section}>
            <ScrollLink
              to={section}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-teal-300 transition-colors"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
