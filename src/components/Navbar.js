'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    
    // If we're not on the home page or if it's the contact section, navigate to home page with hash
    if (window.location.pathname !== '/' || sectionId === 'contact') {
      if (window.location.pathname !== '/') {
        window.location.href = `/#${sectionId}`;
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          const yOffset = -80; // Adjust for fixed header
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
      return;
    }
    
    // For other sections on the home page
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Adjust for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
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
          <ul className="hidden md:flex space-x-8">
            <li>
              <a href="/" onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  scrollToSection(e, 'home');
                }
              }} className="text-gray-300 hover:text-green-400 transition-colors">Home</a>
            </li>
            <li>
              <a href="/#services" onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  scrollToSection(e, 'services');
                }
              }} className="text-gray-300 hover:text-green-400 transition-colors">Services</a>
            </li>
            <li>
              <a href="/#about" onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  scrollToSection(e, 'about');
                }
              }} className="text-gray-300 hover:text-green-400 transition-colors">About</a>
            </li>
            <li>
              <a href="/#contact" onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  scrollToSection(e, 'contact');
                }
              }} className="text-gray-300 hover:text-green-400 transition-colors">Contact</a>
            </li>
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
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

        {/* Mobile menu */}
        <div className={`md:hidden fixed inset-0 bg-black/90 z-40 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-12">
              <Link href="/" className="text-2xl font-bold text-green-400">SafeByte</Link>
              <button onClick={toggleMenu} className="text-gray-400 hover:text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col space-y-6">
              <a
                href="/"
                onClick={(e) => {
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    scrollToSection(e, 'home');
                  }
                  setIsMenuOpen(false);
                }}
                className="text-2xl text-gray-300 hover:text-green-400 transition-colors"
              >
                Home
              </a>
              <a
                href="/#services"
                onClick={(e) => {
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    scrollToSection(e, 'services');
                  }
                  setIsMenuOpen(false);
                }}
                className="text-2xl text-gray-300 hover:text-green-400 transition-colors"
              >
                Services
              </a>
              <a
                href="/#about"
                onClick={(e) => {
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    scrollToSection(e, 'about');
                  }
                  setIsMenuOpen(false);
                }}
                className="text-2xl text-gray-300 hover:text-green-400 transition-colors"
              >
                About
              </a>
              <a
                href="/#contact"
                onClick={(e) => {
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    scrollToSection(e, 'contact');
                  }
                  setIsMenuOpen(false);
                }}
                className="text-2xl text-gray-300 hover:text-green-400 transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}
