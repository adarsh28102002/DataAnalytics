import React, { useState, useEffect } from 'react';

export default function Navbar({ currentTheme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      setIsScrolled(scrollY > 40);

      const sectionIds = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 140;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container nav-container">
        <a href="#home" className="nav-brand" id="brand-link" onClick={closeMobileMenu}>
          <div className="brand-badge">AS</div>
          <div className="brand-name">
            <span className="brand-title">Adarsh Singh</span>
            <span className="brand-sub">Data Analyst & MIS</span>
          </div>
        </a>

        <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`} id="navMenu">
          <li>
            <a 
              href="#home" 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Project
            </a>
          </li>
          <li>
            <a 
              href="#resume" 
              className={`nav-link ${activeSection === 'resume' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Resume
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <button 
            className="theme-toggle-btn" 
            id="themeToggle" 
            title="Toggle Theme" 
            aria-label="Toggle Dark/Light Mode"
            onClick={toggleTheme}
          >
            <i className={currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun'}></i>
          </button>
          <a href="#contact" className="btn btn-primary btn-sm" id="navHireBtn" onClick={closeMobileMenu}>
            <span>Get in Touch</span>
            <i className="fas fa-arrow-right"></i>
          </a>
          <button 
            className="mobile-toggle" 
            id="mobileToggle" 
            aria-label="Open Navigation Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
