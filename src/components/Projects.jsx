import React, { useState } from 'react';
import { dashboardPagesData } from '../data/portfolioData';

export default function Projects({ onOpenProjectModal }) {
  const [activePageKey, setActivePageKey] = useState('p1');
  const [imgOpacity, setImgOpacity] = useState(1);

  const activePage = dashboardPagesData[activePageKey];

  const handlePageSwitch = (key) => {
    if (key === activePageKey) return;
    setImgOpacity(0.3);
    setTimeout(() => {
      setActivePageKey(key);
      setImgOpacity(1);
    }, 150);
  };

  const pageKeys = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'model'];

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag"><i className="fab fa-github"></i> Flagship Power BI Project</span>
          <h2 className="section-title">Food Delivery Analytics Dashboard</h2>
          <p className="section-subtitle">
            Comprehensive 6-page interactive business intelligence suite analyzing ~200,000 real-world food delivery transactions. Architected with Power Query ETL, Star Schema dimensional modeling, and advanced DAX measures.
          </p>
          <div className="project-header-actions">
            <a 
              href="https://github.com/adarsh28102002/food.swig.analystis" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-sm"
            >
              <i className="fab fa-github"></i> GitHub Repository
            </a>
            <button className="btn btn-secondary btn-sm" onClick={onOpenProjectModal}>
              <i className="fas fa-calculator"></i> View All DAX Formulas & Model
            </button>
          </div>
        </div>

        {/* 6-Page Switcher Ribbon with smooth horizontal swipe/scroll on mobile */}
        <div className="page-switcher-wrapper">
          <div className="page-switcher-bar">
            {pageKeys.map((key) => {
              const p = dashboardPagesData[key];
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

        {/* Flagship Showcase Card */}
        <div className="glass-card showcase-featured-card">
          <div className="featured-grid">
            {/* Left Side: Power BI Window Frame */}
            <div className="showcase-window-column">
              <div className="dashboard-window-frame" onClick={onOpenProjectModal}>
                <div className="window-topbar">
                  <div className="window-dots">
                    <span className="red"></span>
                    <span className="yellow"></span>
                    <span className="green"></span>
                  </div>
                  <div className="window-title">
                    <i className="fas fa-chart-pie" style={{ color: 'var(--accent-amber)' }}></i>
                    <span>Food_Delivery_Analytics.pbix</span>
                  </div>
                  <div className="window-badges">
                    <span className="window-badge-item">200K Rows</span>
                    <span className="window-badge-item">Power BI Desktop</span>
                  </div>
                </div>

                <div className="window-viewport showcase-media" onClick={onOpenProjectModal}>
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
                  const p = dashboardPagesData[key];
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
                <span className="badge badge-amber"><i className="fas fa-chart-pie"></i> Power BI Desktop</span>
                <span className="badge badge-cyan">Star Schema</span>
              </div>

              <h3 className="featured-title" id="showcasePageTitle">{activePage.title}</h3>
              <div className="featured-subtitle">
                {activePage.subtitle}
              </div>

              <p className="featured-desc">
                {activePage.desc}
              </p>

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
                  <span className="skill-pill" key={fIdx}>{feat}</span>
                ))}
              </div>

              <div className="featured-actions-row">
                <button className="btn btn-primary btn-sm" onClick={onOpenProjectModal}>
                  <i className="fas fa-calculator"></i> View All DAX Formulas & Model
                </button>
                <a 
                  href="https://github.com/adarsh28102002/food.swig.analystis" 
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
              <h4 style={{ fontSize: '1.15rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-sitemap" style={{ color: 'var(--accent-cyan)' }}></i>
                <span>End-to-End Analytics Workflow</span>
              </h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '16px' }}>
                Built from raw transactional data to executive reporting following rigorous industry data modeling standards:
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ fontSize: '0.88rem', color: 'var(--text-muted)', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-cyan)', fontWeight: 'bold' }}>1.</span>
                  <strong>Power Query ETL:</strong> Ingested ~200K records from Kaggle, performed type coercion, cleaned city text, handled missing fields, and generated clean calculated columns.
                </li>
                <li style={{ fontSize: '0.88rem', color: 'var(--text-muted)', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-cyan)', fontWeight: 'bold' }}>2.</span>
                  <strong>Star Schema Modeling:</strong> Separated transaction facts (<code>Orders</code>) from dimensions (<code>Customers</code>, <code>Restaurants</code>, <code>DateTable</code>) with clean 1-to-many relationships and single-direction filtering.
                </li>
                <li style={{ fontSize: '0.88rem', color: 'var(--text-muted)', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-cyan)', fontWeight: 'bold' }}>3.</span>
                  <strong>Advanced DAX Measures:</strong> Developed measures for Total Revenue, Total Orders, AOV, Delivered %, Cancellation %, Late Delivery %, Repeat Customers, and MoM Growth.
                </li>
              </ul>
            </div>

            <div className="deepdive-col">
              <h4 style={{ fontSize: '1.15rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-sliders-h" style={{ color: 'var(--accent-emerald)' }}></i>
                <span>Interactive Capabilities Built</span>
              </h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '16px' }}>
                Designed for operational decision-making with seamless business exploration:
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ fontSize: '0.88rem', color: 'var(--text-muted)', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-emerald)' }}>✔</span>
                  <strong>Dynamic KPI Parameter:</strong> Disconnected parameter table + <code>SELECTEDVALUE</code> DAX to swap chart metrics without duplicating visuals.
                </li>
                <li style={{ fontSize: '0.88rem', color: 'var(--text-muted)', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-emerald)' }}>✔</span>
                  <strong>Contextual Drill-Through:</strong> Right-click on any restaurant name to navigate straight to an isolated store diagnostic page.
                </li>
                <li style={{ fontSize: '0.88rem', color: 'var(--text-muted)', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-emerald)' }}>✔</span>
                  <strong>Delivery SLA Diagnostics:</strong> Segmented order delivery times (≤45m vs &gt;45m) to pinpoint operational bottlenecks across courier fleets.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
