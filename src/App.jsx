import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectsPage from './components/ProjectsPage';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const [currentView, setCurrentView] = useState(() => {
    const hash = window.location.hash;
    return (hash === '#/projects' || hash === '#projects') ? 'projects' : 'home';
  });

  const [modalState, setModalState] = useState({
    isOpen: false,
    data: null
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Sync state with browser hash navigation (back/forward & direct links)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/projects' || hash === '#projects') {
        setCurrentView('projects');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const navigateTo = (view, sectionId = null) => {
    if (view === 'projects') {
      window.location.hash = '#/projects';
      setCurrentView('projects');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (currentView !== 'home') {
        window.location.hash = sectionId ? `#${sectionId}` : '#/home';
        setCurrentView('home');
        setTimeout(() => {
          if (sectionId) {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 100);
      } else if (sectionId) {
        window.location.hash = `#${sectionId}`;
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleOpenModal = (data) => {
    setModalState({
      isOpen: true,
      data
    });
  };

  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      data: null
    });
  };

  return (
    <div className="portfolio-app">
      {/* Ambient Grid Background */}
      <div className="bg-ambient-grid"></div>

      {/* Navigation */}
      <Navbar 
        currentTheme={theme} 
        toggleTheme={toggleTheme} 
        currentView={currentView}
        onNavigate={navigateTo}
      />

      {/* Dynamic View Rendering */}
      <main>
        {currentView === 'projects' ? (
          <ProjectsPage 
            onOpenProjectModal={(data) => handleOpenModal(data || { type: 'project' })}
            onBackToHome={() => navigateTo('home')}
          />
        ) : (
          <>
            <Hero onNavigateToProjects={() => navigateTo('projects')} />
            <About />
            <Skills />
            <Resume />
            <Contact />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Dynamic Lightbox Modal */}
      <Modal 
        isOpen={modalState.isOpen} 
        onClose={handleCloseModal} 
        modalData={modalState.data} 
      />
    </div>
  );
}
