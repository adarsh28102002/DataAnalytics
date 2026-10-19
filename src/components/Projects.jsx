import React, { useState } from 'react';
import { allProjects } from '../data/portfolioData';

export default function Projects({ onOpenProjectModal, onNavigateToProjects }) {
  const [activeProjectId, setActiveProjectId] = useState('store-sale');
  const [activePageKey, setActivePageKey] = useState('overview');
  const [imgOpacity, setImgOpacity] = useState(1);

  const activeProject = allProjects.find((p) => p.id === activeProjectId) || allProjects[0];
  const pageKeys = Object.keys(activeProject.pages);
  const activePage = activeProject.pages[activePageKey] || activeProject.pages[pageKeys[0]];

  const handleProjectSwitch = (projId) => {
    if (projId === activeProjectId) return;
    setImgOpacity(0.3);
    const targetProject = allProjects.find((p) => p.id === projId) || allProjects[0];
    const firstKey = Object.keys(targetProject.pages)[0];
    setTimeout(() => {
      setActiveProjectId(projId);
      setActivePageKey(firstKey);
      setImgOpacity(1);
    }, 150);
  };

  const handlePageSwitch = (key) => {
    if (key === activePageKey) return;
    setImgOpacity(0.3);
    setTimeout(() => {
      setActivePageKey(key);
      setImgOpacity(1);
    }, 150);
  };

  const handleOpenCurrentModal = () => {
    if (onOpenProjectModal) {
      onOpenProjectModal({ type: 'project', project: activeProject });
    }
  };

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        {/* Dedicated Page Promotion Banner */}
        <div className="projects-gallery-cta-banner">
          <div className="cta-banner-content">
            <span className="badge badge-cyan">
              <i className="fas fa-th-large"></i> DEDICATED GALLERY AVAILABLE
            </span>
            <h4>Looking for all projects in a full grid view?</h4>
            <p>Explore both enterprise Power BI projects in an isolated single-page grid gallery with live DAX and architecture.</p>
          </div>
          <button 
            className="btn btn-primary btn-sm cta-banner-btn"
            onClick={onNavigateToProjects}
            id="homeOpenProjectsPageBtn"
          >
            <span>Open Projects Gallery (Grid View)</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        {/* Project Switcher Navigation */}
        <div className="project-collection-nav">
          <div className="project-collection-header">
            <span className="section-tag">
              <i className="fas fa-layer-group"></i> Business Intelligence Portfolio
            </span>
            <h2 className="section-title">Production Power BI Projects</h2>
            <p className="section-subtitle">
              Explore enterprise-grade Power BI solutions architected with Power Query ETL, DAX time-intelligence, Star Schema modeling, and dynamic executive storytelling.
            </p>
          </div>

          {/* Interactive Project Switcher Cards */}
          <div className="project-selector-grid">
            {allProjects.map((proj) => {
              const isSelected = proj.id === activeProjectId;
              return (
                <div
                  key={proj.id}
                  className={`project-selector-card ${isSelected ? 'active' : ''}`}
                  onClick={() => handleProjectSwitch(proj.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') handleProjectSwitch(proj.id);
                  }}
                >
                  <div className="project-card-top">
                    <span className={`badge ${proj.id === 'store-sale' ? 'badge-emerald' : 'badge-amber'}`}>
                      {proj.id === 'store-sale' ? 'NEW PROJECT' : 'FLAGSHIP'}
                    </span>
                    <span className="project-card-records">
                      <i className="fas fa-database"></i> {proj.records}
                    </span>
                  </div>

                  <h3 className="project-card-title">{proj.title}</h3>
                  <p className="project-card-desc">{proj.subtitle}</p>

                  <div className="project-card-bottom">
                    <span className="project-card-tech">{proj.badge}</span>
                    <span className="project-card-status">
                      {isSelected ? (
                        <span className="active-indicator">
                          <i className="fas fa-eye"></i> Viewing Now
                        </span>
                      ) : (
                        <span className="switch-hint">
                          Click to View <i className="fas fa-arrow-right"></i>
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Project Main Showcase Header */}
        <div className="project-detail-header">
          <div className="project-detail-meta">
            <span className="badge badge-cyan">
              <i className="fab fa-github"></i> {activeProject.tag}
            </span>
            <span className="badge badge-purple">{activeProject.badge}</span>
          </div>
          <h3 className="project-detail-title">{activeProject.title}</h3>
          <p className="project-detail-desc">{activeProject.summary}</p>
          <div className="project-header-actions">
            <a
              href={activeProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <i className="fab fa-github"></i> View GitHub Repository
            </a>
            <button className="btn btn-secondary btn-sm" onClick={handleOpenCurrentModal}>
              <i className="fas fa-calculator"></i> View All DAX Formulas & Architecture
            </button>
          </div>
        </div>

        {/* Page Switcher Ribbon for Active Project */}
        <div className="page-switcher-wrapper">
          <div className="page-switcher-bar">
            {pageKeys.map((key) => {
              const p = activeProject.pages[key];
              return (
                <button
                  key={key}
                  className={`page-tab-btn ${activePageKey === key ? 'active' : ''}`}
                  onClick={() => handlePageSwitch(key)}
                >
                  <i className={p.tabIcon}></i> {p.tabName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Showcase Featured Window Frame Card */}
        <div className="glass-card showcase-featured-card">
          <div className="featured-grid">
            {/* Left Side: Power BI Window Frame */}
            <div className="showcase-window-column">
              <div className="dashboard-window-frame" onClick={handleOpenCurrentModal}>
                <div className="window-topbar">
                  <div className="window-dots">
                    <span className="red"></span>
                    <span className="yellow"></span>
                    <span className="green"></span>
                  </div>
                  <div className="window-title">
                    <i className="fas fa-chart-pie" style={{ color: 'var(--accent-amber)' }}></i>
                    <span>{activeProject.pbixName}</span>
                  </div>
                  <div className="window-badges">
                    <span className="window-badge-item">{activeProject.records}</span>
                    <span className="window-badge-item">Power BI Desktop</span>
                  </div>
                </div>

                <div className="window-viewport showcase-media" onClick={handleOpenCurrentModal}>
                  <img
                    id="showcaseMainImg"
                    src={activePage.image}
                    alt={activePage.title}
                    style={{ transition: 'opacity 0.25s ease', opacity: imgOpacity }}
                  />
                  <div className="showcase-zoom-hint">
                    <i className="fas fa-search-plus"></i> Click to Inspect Full Architecture & DAX
                  </div>
                </div>
              </div>

              {/* Quick Thumbnails Switcher */}
              <div className="gallery-thumbs-row">
                {pageKeys.map((key) => {
                  const p = activeProject.pages[key];
                  return (
                    <div
                      key={key}
                      className={`gallery-thumb-item ${activePageKey === key ? 'active' : ''}`}
                      onClick={() => handlePageSwitch(key)}
                      title={p.title}
                    >
                      <img src={p.image} alt={p.title} />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Side: Dynamic Details */}
            <div className="featured-content">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span className="badge badge-amber">
                  <i className="fas fa-chart-pie"></i> Power BI Desktop
                </span>
                <span className="badge badge-cyan">{activeProject.badge.split('•')[1]?.trim() || 'DAX Intelligence'}</span>
              </div>

              <h3 className="featured-title" id="showcasePageTitle">
                {activePage.title}
              </h3>
              <div className="featured-subtitle">{activePage.subtitle}</div>

              <p className="featured-desc">{activePage.desc}</p>

              <div className="featured-kpi-grid">
                {activePage.kpis.map((kpi, kIdx) => (
                  <div className="mini-kpi-card" key={kIdx}>
                    <div className="mini-kpi-val">{kpi.val}</div>
                    <div className="mini-kpi-lbl">{kpi.lbl}</div>
                  </div>
                ))}
              </div>

              <div className="featured-tags">
                {activePage.features.map((feat, fIdx) => (
                  <span className="skill-pill" key={fIdx}>
                    {feat}
                  </span>
                ))}
              </div>

              <div className="featured-actions-row">
                <button className="btn btn-primary btn-sm" onClick={handleOpenCurrentModal}>
                  <i className="fas fa-calculator"></i> View All DAX Formulas & Model
                </button>
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <i className="fab fa-github"></i> Open GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Pipeline & Project Highlights Card */}
        <div className="glass-card project-deepdive-card">
          <div className="project-deepdive-grid">
            <div className="deepdive-col">
              <h4
                style={{
                  fontSize: '1.15rem',
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <i className="fas fa-sitemap" style={{ color: 'var(--accent-cyan)' }}></i>
                <span>End-to-End Analytics Workflow</span>
              </h4>
              <p
                style={{
                  fontSize: '0.92rem',
                  color: 'var(--text-muted)',
                  lineHeight: '1.6',
                  marginBottom: '16px'
                }}
              >
                Engineered following industry business intelligence and data engineering practices:
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {activeProject.deepdive.workflow.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-muted)',
                      paddingLeft: '20px',
                      position: 'relative'
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        color: 'var(--accent-cyan)',
                        fontWeight: 'bold'
                      }}
                    >
                      {item.num}
                    </span>
                    <strong>{item.title}:</strong> {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="deepdive-col">
              <h4
                style={{
                  fontSize: '1.15rem',
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <i className="fas fa-sliders-h" style={{ color: 'var(--accent-emerald)' }}></i>
                <span>Interactive Capabilities Built</span>
              </h4>
              <p
                style={{
                  fontSize: '0.92rem',
                  color: 'var(--text-muted)',
                  lineHeight: '1.6',
                  marginBottom: '16px'
                }}
              >
                Designed for operational decision-making with high-impact interactivity:
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {activeProject.deepdive.highlights.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-muted)',
                      paddingLeft: '20px',
                      position: 'relative'
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        color: 'var(--accent-emerald)'
                      }}
                    >
                      {item.icon}
                    </span>
                    <strong>{item.title}:</strong> {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Home Bottom CTA to Dedicated Projects Page */}
        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <button 
            className="btn btn-primary"
            style={{ padding: '14px 28px', fontSize: '0.98rem' }}
            onClick={onNavigateToProjects}
            id="viewAllProjectsGridBtn"
          >
            <i className="fas fa-th-large"></i>
            <span>Explore All 4 Projects in Full Grid View</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
