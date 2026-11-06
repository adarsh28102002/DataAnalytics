import React from 'react';
import { allProjects } from '../data/portfolioData';

export default function Projects({ onOpenProjectModal }) {
  const handleOpenModal = (proj) => {
    if (onOpenProjectModal) {
      onOpenProjectModal({ type: 'project', project: proj });
    }
  };

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <i className="fas fa-layer-group"></i> PRODUCTION PORTFOLIO
          </span>
          <h2 className="section-title">
            Featured <span className="text-gradient">Power BI Projects</span>
          </h2>
          <p className="section-subtitle">
            Enterprise analytics dashboards, automated retention workflows, and advanced DAX measure engineering.
          </p>
        </div>

        {/* Clean Project Cards Grid - Exactly as requested */}
        <div className="projects-compact-grid">
          {allProjects.map((proj) => {
            const cardImage = proj.coverImage || (proj.pages ? proj.pages[Object.keys(proj.pages)[0]]?.image : '');
            return (
              <div 
                className="project-box-card glass-card" 
                key={proj.id}
                onClick={() => handleOpenModal(proj)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') handleOpenModal(proj);
                }}
              >
                {/* Card Media Preview Container */}
                <div className="project-box-media">
                  <img 
                    src={cardImage} 
                    alt={proj.title} 
                    className="project-box-img" 
                    loading="lazy"
                  />
                  <div className="project-box-overlay">
                    <span className="box-overlay-badge">
                      <i className="fas fa-search-plus"></i> View Full Project
                    </span>
                  </div>

                  <div className="project-box-badges">
                    <span className={`badge ${proj.id === 'customer-churn' ? 'badge-purple' : (proj.id === 'store-sale' ? 'badge-emerald' : 'badge-amber')}`}>
                      {proj.tag}
                    </span>
                    <span className="project-box-records">
                      <i className="fas fa-database"></i> {proj.records}
                    </span>
                  </div>
                </div>

                {/* Card Content Body - Image, Tech Badge, Title, Subtitle, and View Full Project button */}
                <div className="project-box-body">
                  <div className="project-box-meta">
                    <span className="project-box-tech">
                      <i className="fas fa-code-branch" style={{ color: 'var(--accent-cyan)' }}></i> {proj.badge}
                    </span>
                  </div>

                  <h3 className="project-box-title">{proj.title}</h3>
                  <p className="project-box-subtitle">{proj.subtitle}</p>

                  <div className="project-box-btn-wrap" onClick={(e) => e.stopPropagation()}>
                    <button 
                      className="btn btn-primary btn-block box-full-btn"
                      onClick={() => handleOpenModal(proj)}
                    >
                      <span>View Full Project</span>
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
