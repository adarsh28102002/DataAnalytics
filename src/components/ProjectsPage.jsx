import React, { useState } from 'react';
import { allProjects } from '../data/portfolioData';

export default function ProjectsPage({ onOpenProjectModal, onBackToHome }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeProjectId, setActiveProjectId] = useState('store-sale');
  const [activePageKey, setActivePageKey] = useState('overview');
  const [imgOpacity, setImgOpacity] = useState(1);

  const filteredProjects = allProjects.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'powerbi') return p.category === 'powerbi';
    return true;
  });

  const activeProject = allProjects.find((p) => p.id === activeProjectId) || allProjects[0];
  const pageKeys = activeProject.pages ? Object.keys(activeProject.pages) : [];
  const activePage = (activeProject.pages && activePageKey && activeProject.pages[activePageKey])
    ? activeProject.pages[activePageKey]
    : (activeProject.pages && pageKeys.length > 0 ? activeProject.pages[pageKeys[0]] : null);

  const handleProjectSelect = (proj) => {
    setActiveProjectId(proj.id);
    const targetKeys = proj.pages ? Object.keys(proj.pages) : [];
    if (targetKeys.length > 0) {
      setActivePageKey(targetKeys[0]);
    }
  };

  const handleCardClick = (proj) => {
    handleProjectSelect(proj);
    if (onOpenProjectModal) {
      onOpenProjectModal({ type: 'project', project: proj });
    }
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
    <div className="projects-page-container">
      {/* Page Navigation Header */}
      <div className="container projects-page-topbar">
        <button 
          className="btn btn-outline btn-sm back-to-home-btn" 
          onClick={onBackToHome}
          id="backToHomeBtn"
        >
          <i className="fas fa-arrow-left"></i>
          <span>Back to Home / Portfolio</span>
        </button>
      </div>

      {/* Main Page Header */}
      <section className="projects-page-hero">
        <div className="container">
          <div className="projects-page-intro">
            <span className="section-tag">
              <i className="fas fa-layer-group"></i> PRODUCTION PORTFOLIO & CASE STUDIES
            </span>
            <h1 className="projects-page-title">
              All Projects & <span className="text-gradient">Business Intelligence Solutions</span>
            </h1>
            <p className="projects-page-desc">
              Explore enterprise-grade Power BI dashboards, advanced DAX time-intelligence models, Star Schema dimensional designs, and automated MIS reporting workflows. 
              Click on any project card below to inspect the <strong>complete architecture, all dashboard pages, KPIs, and live DAX formulas</strong>.
            </p>

            {/* Category Filter Pills */}
            <div className="projects-filter-bar">
              <button 
                className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                <i className="fas fa-th-large"></i> All Projects ({allProjects.length})
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'powerbi' ? 'active' : ''}`}
                onClick={() => setActiveFilter('powerbi')}
              >
                <i className="fas fa-chart-pie"></i> Power BI Dashboards ({allProjects.length})
              </button>
            </div>
          </div>

          {/* ALL PROJECTS GRID ("sare project grid me like ek box me") */}
          <div className="projects-master-grid" id="projectsGrid">
            {filteredProjects.map((proj) => {
              const isSelected = proj.id === activeProjectId;
              const cardImage = proj.coverImage || (proj.pages && Object.values(proj.pages)[0]?.image) || 'assets/images/store_sale_overview.png';

              return (
                <div 
                  key={proj.id} 
                  className={`project-box-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleCardClick(proj)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') handleCardClick(proj);
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
                        <i className="fas fa-search-plus"></i> Click to View Full Project Details
                      </span>
                    </div>

                    <div className="project-box-badges">
                      <span className={`badge ${proj.id === 'store-sale' ? 'badge-emerald' : (proj.id === 'food-delivery' ? 'badge-amber' : 'badge-purple')}`}>
                        {proj.tag}
                      </span>
                      <span className="project-box-records">
                        <i className="fas fa-database"></i> {proj.records}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="project-box-body">
                    <div className="project-box-meta">
                      <span className="project-box-tech">
                        <i className="fas fa-code-branch" style={{ color: 'var(--accent-cyan)' }}></i> {proj.badge}
                      </span>
                    </div>

                    <h2 className="project-box-title">{proj.title}</h2>
                    <p className="project-box-subtitle">{proj.subtitle}</p>
                    <p className="project-box-summary">{proj.summary.slice(0, 155)}...</p>

                    {/* Key KPI Chips */}
                    {proj.kpis && proj.kpis.length > 0 && (
                      <div className="project-box-kpis">
                        {proj.kpis.slice(0, 4).map((k, kIdx) => (
                          <div className="box-kpi-chip" key={kIdx}>
                            <span className="box-kpi-val">{k.val}</span>
                            <span className="box-kpi-lbl">{k.lbl}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Footer Actions */}
                  <div className="project-box-footer">
                    <div className="box-action-hint">
                      <span className="action-hint-pulse"></span>
                      <span>Click box to open full project</span>
                    </div>

                    <div className="box-action-btns" onClick={(e) => e.stopPropagation()}>
                      {proj.githubUrl && (
                        <a 
                          href={proj.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn btn-outline btn-xs"
                          title="Open GitHub Repository"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                      )}
                      <button 
                        className="btn btn-primary btn-sm box-full-btn"
                        onClick={() => handleCardClick(proj)}
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

          {/* IN-DEPTH SELECTED PROJECT STUDIO INSPECTOR */}
          <div className="projects-studio-section" id="projectStudio">
            <div className="studio-section-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <span className="section-tag" style={{ margin: 0 }}>
                  <i className="fas fa-tv"></i> Interactive Studio Inspector
                </span>
                <span className="badge badge-cyan">{activeProject.title}</span>
              </div>
              <button 
                className="btn btn-secondary btn-sm" 
                onClick={handleOpenCurrentModal}
              >
                <i className="fas fa-expand"></i> Open Full Screen Lightbox Modal
              </button>
            </div>

            {/* Active Project Details Banner */}
            <div className="project-detail-header" style={{ marginTop: '20px' }}>
              <div className="project-detail-meta">
                <span className="badge badge-cyan">
                  <i className="fab fa-github"></i> {activeProject.tag}
                </span>
                <span className="badge badge-purple">{activeProject.badge}</span>
                <span className="badge badge-amber">{activeProject.records}</span>
              </div>
              <h2 className="project-detail-title">{activeProject.title}</h2>
              <p className="project-detail-desc">{activeProject.summary}</p>
              <div className="project-header-actions">
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <i className="fab fa-github"></i> View GitHub Repository
                  </a>
                )}
                <button className="btn btn-secondary btn-sm" onClick={handleOpenCurrentModal}>
                  <i className="fas fa-calculator"></i> View All DAX Formulas & Architecture
                </button>
              </div>
            </div>

            {/* Page Switcher Tabs for Active Project (if multiple pages exist) */}
            {pageKeys.length > 1 && (
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
                        <i className={p.tabIcon || 'fas fa-chart-line'}></i> {p.tabName}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Showcase Featured Window Frame Card */}
            {activePage && (
              <div className="glass-card showcase-featured-card">
                <div className="featured-grid">
                  {/* Left Column: Window Frame */}
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
                          <span>{activeProject.pbixName || activeProject.title}</span>
                        </div>
                        <div className="window-badges">
                          <span className="window-badge-item">{activeProject.records}</span>
                          <span className="window-badge-item">Interactive Report</span>
                        </div>
                      </div>

                      <div className="window-viewport showcase-media">
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
                    {pageKeys.length > 1 && (
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
                    )}
                  </div>

                  {/* Right Column: Dynamic Details */}
                  <div className="featured-content">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <span className="badge badge-amber">
                        <i className="fas fa-chart-pie"></i> {activeProject.category === 'excel' ? 'Advanced Excel' : 'Power BI Desktop'}
                      </span>
                      <span className="badge badge-cyan">{activeProject.badge.split('•')[1]?.trim() || 'DAX Intelligence'}</span>
                    </div>

                    <h3 className="featured-title">
                      {activePage.title}
                    </h3>
                    <div className="featured-subtitle">{activePage.subtitle}</div>

                    <p className="featured-desc">{activePage.desc}</p>

                    {activePage.kpis && (
                      <div className="featured-kpi-grid">
                        {activePage.kpis.map((kpi, kIdx) => (
                          <div className="mini-kpi-card" key={kIdx}>
                            <div className="mini-kpi-val">{kpi.val}</div>
                            <div className="mini-kpi-lbl">{kpi.lbl}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {activePage.features && (
                      <div className="featured-tags">
                        {activePage.features.map((feat, fIdx) => (
                          <span className="skill-pill" key={fIdx}>
                            {feat}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="featured-actions-row">
                      <button className="btn btn-primary btn-sm" onClick={handleOpenCurrentModal}>
                        <i className="fas fa-calculator"></i> View All DAX Formulas & Model
                      </button>
                      {activeProject.githubUrl && (
                        <a
                          href={activeProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary btn-sm"
                        >
                          <i className="fab fa-github"></i> Open GitHub Repo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Deepdive Workflow & Interactive Highlights */}
            {activeProject.deepdive && (
              <div className="glass-card project-deepdive-card" style={{ marginTop: '24px' }}>
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
                            paddingLeft: '22px',
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
                            paddingLeft: '22px',
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
            )}
          </div>

          {/* Bottom Back to Home CTA Box */}
          <div className="projects-bottom-cta">
            <div className="cta-inner-card">
              <h3 className="cta-title">Ready to Discuss Your Data & Analytics Needs?</h3>
              <p className="cta-sub">
                Explore how automated reporting, Star Schema modeling, and executive Power BI dashboards can transform your operational workflows.
              </p>
              <div className="cta-actions">
                <button className="btn btn-outline" onClick={onBackToHome}>
                  <i className="fas fa-arrow-left"></i> Return to Main Portfolio
                </button>
                <a href="#contact" className="btn btn-primary" onClick={onBackToHome}>
                  <i className="fas fa-paper-plane"></i> Get in Touch with Adarsh
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
