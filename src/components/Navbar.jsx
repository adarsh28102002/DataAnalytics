import React, { useState, useEffect } from 'react';

export default function Navbar({ currentTheme, toggleTheme, currentView = 'home', onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      setIsScrolled(scrollY > 40);

      if (currentView === 'home') {
        const sectionIds = ['home', 'about', 'skills', 'resume', 'contact'];
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
      } else {
        setActiveSection('projects');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    closeMobileMenu();

    if (sectionId === 'projects') {
      if (onNavigate) {
        onNavigate('projects');
      } else {
        window.location.hash = '#/projects';
      }
      return;
    }

    if (onNavigate) {
      onNavigate('home', sectionId);
    } else {
      window.location.hash = `#${sectionId}`;
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container nav-container">
        <a 
          href="#home" 
          className="nav-brand" 
          id="brand-link" 
          onClick={(e) => handleNavClick(e, 'home')}
        >
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
              className={`nav-link ${(currentView === 'home' && activeSection === 'home') ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'home')}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={`nav-link ${(currentView === 'home' && activeSection === 'about') ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'about')}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className={`nav-link ${(currentView === 'home' && activeSection === 'skills') ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'skills')}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#/projects" 
              className={`nav-link ${currentView === 'projects' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'projects')}
              id="navProjectsLink"
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                Projects
                <span className="nav-projects-badge">2</span>
              </span>
            </a>
          </li>
          <li>
            <a 
              href="#resume" 
              className={`nav-link ${(currentView === 'home' && activeSection === 'resume') ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'resume')}
            >
              Resume
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`nav-link ${(currentView === 'home' && activeSection === 'contact') ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'contact')}
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
          <a 
            href="#contact" 
            className="btn btn-primary btn-sm" 
            id="navHireBtn" 
            onClick={(e) => handleNavClick(e, 'contact')}
          >
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
