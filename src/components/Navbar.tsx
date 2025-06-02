import React, { useState, useEffect } from 'react';
import { Database, Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Features', href: '#features' },
  { label: 'Demo', href: '#demo' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="flex items-center space-x-2">
          {/* <Database 
            size={28} 
            className="text-primary-500 mr-2"
            style={{ color: '#ff5959' }}
          /> */}
            <img 
              src="/datamate_logo_solo.svg"
              alt="DataMate Logo"
              style={{ color: '#ff5959'}}
              className="w-8"
              
            />          
          
          <span className="text-xl font-bold" style={{ color: isScrolled ? '#0a0f0d' : '#fff' }}>
            DataMate
          </span>
          
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`transition-colors duration-300 font-medium ${
                activeSection === item.href.substring(1)
                  ? 'text-primary-500'
                  : isScrolled
                  ? 'text-neutral-800 hover:text-primary-500'
                  : 'text-white hover:text-primary-300'
              }`}
              style={{ 
                color: activeSection === item.href.substring(1) 
                  ? '#ff5959' 
                  : isScrolled 
                  ? '#0a0f0d' 
                  : '#fff' 
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} style={{ color: isScrolled ? '#0a0f0d' : '#fff' }} />
          ) : (
            <Menu size={24} style={{ color: isScrolled ? '#0a0f0d' : '#fff' }} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`block py-2 transition-colors duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-primary-500 font-medium'
                    : 'text-neutral-800 hover:text-primary-500'
                }`}
                style={{ color: activeSection === item.href.substring(1) ? '#ff5959' : '#0a0f0d' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;