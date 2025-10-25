import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

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

      <div className="nav-right">
        <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>  
        <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a> 
        <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
        <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a>  
        <a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
