import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const [modalState, setModalState] = useState({
    isOpen: false,
    data: null
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
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
      <Navbar currentTheme={theme} toggleTheme={toggleTheme} />

      {/* Main Single Page Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onOpenProjectModal={(data) => handleOpenModal(data || { type: 'project' })} />
        <Resume />
        <Contact />
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
