'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu after clicking a link
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm py-2 shadow-lg' : 'bg-black/80 py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="#" 
            onClick={(e) => scrollToSection(e, 'home')}
            className="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors"
          >
            SafeByte
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'services', 'about', 'book-call', 'testimonials'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => scrollToSection(e, item)}
                className="text-green-300 hover:text-green-400 transition-colors font-medium capitalize"
              >
                {item.replace('-', ' ')}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="bg-green-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-green-400 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-green-400 hover:text-green-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {['home', 'services', 'about', 'book-call', 'testimonials'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => scrollToSection(e, item)}
                  className="block text-green-300 hover:text-green-400 transition-colors py-2 px-4 rounded-md hover:bg-gray-800"
                >
                  {item.replace('-', ' ').charAt(0).toUpperCase() + item.replace('-', ' ').slice(1)}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="block bg-green-500 text-black text-center py-2 px-4 rounded-md font-semibold hover:bg-green-400 transition-colors mt-2"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
