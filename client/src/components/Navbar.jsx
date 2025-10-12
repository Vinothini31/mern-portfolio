import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false); // For mobile toggle

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">V M</div>

      {/* Hamburger Icon */}
      <div 
        className={`hamburger ${isOpen ? "open" : ""}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <div className={`nav-right ${isOpen ? "show" : ""}`}>
        <a href="#home" onClick={() => setIsOpen(false)} className={activeSection === 'home' ? 'active' : ''}>Home</a>
        <a href="#about" onClick={() => setIsOpen(false)} className={activeSection === 'about' ? 'active' : ''}>About</a>  
        <a href="#skills" onClick={() => setIsOpen(false)} className={activeSection === 'skills' ? 'active' : ''}>Skills</a> 
        <a href="#projects" onClick={() => setIsOpen(false)} className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
        <a href="#experience" onClick={() => setIsOpen(false)} className={activeSection === 'experience' ? 'active' : ''}>Experience</a>  
        <a href="#education" onClick={() => setIsOpen(false)} className={activeSection === 'education' ? 'active' : ''}>Education</a>
        <a href="#contact" onClick={() => setIsOpen(false)} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
