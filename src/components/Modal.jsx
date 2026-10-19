import React, { useState, useEffect } from 'react';
import { allProjects, foodDeliveryFullData } from '../data/portfolioData';

export default function Modal({ isOpen, onClose, modalData }) {
  const [copiedMeasureIdx, setCopiedMeasureIdx] = useState(null);
  const [activePageKey, setActivePageKey] = useState(null);
  const [imgOpacity, setImgOpacity] = useState(1);

  const data = modalData?.project || allProjects[0] || foodDeliveryFullData;
  const pageKeys = data?.pages ? Object.keys(data.pages) : [];

  useEffect(() => {
    if (pageKeys.length > 0) {
      setActivePageKey(pageKeys[0]);
    }
  }, [modalData]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, onClose]);

  if (!isOpen || !modalData) return null;

  const handleCopyDax = (code, idx) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedMeasureIdx(idx);
      setTimeout(() => setCopiedMeasureIdx(null), 2000);
    });
  };

  const handlePageSelect = (key) => {
    if (key === activePageKey) return;
    setImgOpacity(0.4);
    setTimeout(() => {
      setActivePageKey(key);
      setImgOpacity(1);
    }, 120);
  };

  const currentPage = (data.pages && activePageKey && data.pages[activePageKey])
    ? data.pages[activePageKey]
    : (data.pages && pageKeys.length > 0 ? data.pages[pageKeys[0]] : null);

  const modalImgSrc = currentPage ? currentPage.image : (data.coverImage || 'assets/images/store_sale_overview.png');

  return (
    <div 
      className={`modal-overlay ${isOpen ? 'active' : ''}`} 
      id="projectModal" 
      role="dialog" 
      aria-modal="true"
      onClick={(e) => {
        if (e.target.classList.contains('modal-overlay')) onClose();
      }}
    >
      <div className="modal-content modal-full-detail">
        <button className="modal-close-btn" id="modalCloseBtn" aria-label="Close Modal" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>

        <div id="modalDynamicContent">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            
            {/* Header / Meta */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '16px' }}>
              <div style={{ maxWidth: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px' }}>
                  <span className="badge badge-amber">{data.badge}</span>
                  {data.records && (
                    <span className="badge badge-cyan">
                      <i className="fas fa-database"></i> {data.records}
                    </span>
                  )}
                  {data.pbixName && (
                    <span className="badge badge-purple">
                      <i className="fas fa-file-invoice"></i> {data.pbixName}
                    </span>
                  )}
                </div>
                <h2 style={{ fontSize: '1.75rem', marginTop: '6px', fontWeight: 800, color: 'var(--text-main)', wordBreak: 'break-word' }}>
                  {data.title}
                </h2>
                {data.githubUrl && (
                  <a 
                    href={data.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.86rem', display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '4px', wordBreak: 'break-all' }}
                  >
                    <i className="fab fa-github"></i> {data.githubUrl}
                  </a>
                )}
              </div>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {data.githubUrl && (
                  <a href={data.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    <i className="fab fa-github"></i> View GitHub Repo
                  </a>
                )}
                <button className="btn btn-outline btn-sm" onClick={onClose}>
                  <i className="fas fa-times"></i> Close Full View
                </button>
              </div>
            </div>

            {/* If project has multiple dashboard pages, show Page Tabs switcher inside the Modal */}
            {pageKeys.length > 1 && (
              <div className="modal-page-switcher">
                <span className="modal-page-label">
                  <i className="fas fa-layer-group"></i> Switch Dashboard View:
                </span>
                <div className="modal-page-tabs">
                  {pageKeys.map((key) => {
                    const p = data.pages[key];
                    const isTabActive = (activePageKey === key) || (!activePageKey && key === pageKeys[0]);
                    return (
                      <button
                        key={key}
                        className={`modal-page-tab-btn ${isTabActive ? 'active' : ''}`}
                        onClick={() => handlePageSelect(key)}
                      >
                        <i className={p.tabIcon || 'fas fa-chart-bar'}></i>
                        <span>{p.tabName}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* High-Resolution Screenshot Viewport */}
            <div className="modal-viewport-frame">
              <div className="window-topbar" style={{ background: 'var(--bg-card-solid)', borderBottom: '1px solid var(--border-subtle)', padding: '8px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className="window-dots" style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308' }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }}></span>
                </div>
                <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  {currentPage ? currentPage.title : data.title}
                </div>
                <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>Live Production View</span>
              </div>
              <img 
                src={modalImgSrc} 
                alt={currentPage?.title || data.title} 
                style={{ 
                  width: '100%', 
                  aspectRatio: '16/9', 
                  objectFit: 'cover', 
                  display: 'block',
                  transition: 'opacity 0.2s ease',
                  opacity: imgOpacity
                }} 
              />
            </div>

            {/* Current Page Context (if active) */}
            {currentPage && (
              <div className="modal-page-detail-box" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--text-main)', margin: 0 }}>
                    {currentPage.title}
                  </h4>
                  <span className="badge badge-cyan">{currentPage.subtitle}</span>
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '12px' }}>
                  {currentPage.desc}
                </p>

                {currentPage.kpis && currentPage.kpis.length > 0 && (
                  <div className="modal-kpi-grid" style={{ marginBottom: '12px' }}>
                    {currentPage.kpis.map((k, idx) => (
                      <div className="mini-kpi-card" key={idx}>
                        <div className="mini-kpi-val">{k.val}</div>
                        <div className="mini-kpi-lbl">{k.lbl}</div>
                      </div>
                    ))}
                  </div>
                )}

                {currentPage.features && currentPage.features.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {currentPage.features.map((f, idx) => (
                      <span key={idx} className="skill-pill" style={{ fontSize: '0.74rem' }}>
                        <i className="fas fa-check" style={{ color: 'var(--accent-emerald)', marginRight: '4px' }}></i> {f}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Project Overview */}
            <div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '8px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-info-circle" style={{ color: 'var(--accent-cyan)' }}></i> Complete Project Summary
              </h4>
              <p style={{ fontSize: '0.96rem', lineHeight: 1.65, color: 'var(--text-muted)' }}>{data.summary}</p>
            </div>

            {/* Overall Project KPIs */}
            {data.kpis && data.kpis.length > 0 && (
              <div>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '12px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fas fa-chart-line" style={{ color: 'var(--accent-emerald)' }}></i> Key Measured Business KPIs
                </h4>
                <div className="modal-kpi-grid">
                  {data.kpis.map((k, idx) => (
                    <div className="mini-kpi-card" key={idx}>
                      <div className="mini-kpi-val">{k.val}</div>
                      <div className="mini-kpi-lbl">{k.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Full End-to-End Analytics Workflow */}
            {data.architectureWorkflow && data.architectureWorkflow.length > 0 && (
              <div>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '10px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fas fa-sitemap" style={{ color: 'var(--accent-cyan)' }}></i> Full End-to-End Analytics Workflow
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {data.architectureWorkflow.map((step, idx) => (
                    <li key={idx} style={{ fontSize: '0.9rem', color: 'var(--text-muted)', paddingLeft: '22px', position: 'relative', wordBreak: 'break-word', lineHeight: 1.5 }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--accent-cyan)', fontWeight: 700 }}>
                        {idx + 1}.
                      </span>{' '}
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* DAX Measures / Code */}
            {data.daxMeasures && data.daxMeasures.length > 0 && (
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <i className="fas fa-calculator" style={{ color: 'var(--accent-amber)' }}></i> Complete DAX Measures & Calculation Logic
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {data.daxMeasures.map((measure, idx) => (
                    <div key={idx} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '16px', maxWidth: '100%', overflow: 'hidden' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem', fontWeight: 700, color: 'var(--accent-cyan)', wordBreak: 'break-word' }}>
                          {measure.name}
                        </span>
                        <button 
                          className="btn btn-sm btn-secondary" 
                          onClick={() => handleCopyDax(measure.code, idx)}
                          title="Copy Code to Clipboard"
                        >
                          <i className={copiedMeasureIdx === idx ? 'fas fa-check' : 'fas fa-copy'}></i>{' '}
                          {copiedMeasureIdx === idx ? 'Copied!' : 'Copy Code'}
                        </button>
                      </div>
                      <pre style={{ background: 'var(--bg-primary)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-subtle)', overflowX: 'auto', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#38bdf8', maxWidth: '100%', lineHeight: 1.5 }}>
                        <code>{measure.code}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
