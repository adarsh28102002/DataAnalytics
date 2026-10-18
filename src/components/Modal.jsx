import React, { useState, useEffect } from 'react';
import { allProjects, foodDeliveryFullData } from '../data/portfolioData';

export default function Modal({ isOpen, onClose, modalData }) {
  const [copiedMeasureIdx, setCopiedMeasureIdx] = useState(null);

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

  const data = modalData?.project || allProjects[0] || foodDeliveryFullData;
  const firstPageKey = data.pages ? Object.keys(data.pages)[0] : null;
  const modalImgSrc = data.pages && firstPageKey ? data.pages[firstPageKey].image : 'assets/images/store_sale_overview.png';

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
      <div className="modal-content">
        <button className="modal-close-btn" id="modalCloseBtn" aria-label="Close Modal" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>

        <div id="modalDynamicContent">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '16px' }}>
              <div style={{ maxWidth: '100%' }}>
                <span className="badge badge-amber">{data.badge}</span>
                <h2 style={{ fontSize: '1.7rem', marginTop: '8px', wordBreak: 'break-word' }}>{data.title}</h2>
                <a 
                  href={data.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.86rem', display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '4px', wordBreak: 'break-all' }}
                >
                  <i className="fab fa-github"></i> {data.githubUrl}
                </a>
              </div>
              <a href={data.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm" style={{ width: '100%', maxWidth: '200px', justifyContent: 'center' }}>
                <i className="fab fa-github"></i> Open in GitHub
              </a>
            </div>

            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-card)', width: '100%' }}>
              <img src={modalImgSrc} alt={data.title} style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }} />
            </div>

            <div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>Project Overview</h4>
              <p style={{ fontSize: '0.96rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>{data.summary}</p>
            </div>

            <div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '12px' }}>Key Measured KPIs (Live from Report)</h4>
              <div className="modal-kpi-grid">
                {data.kpis.map((k, idx) => (
                  <div className="mini-kpi-card" key={idx}>
                    <div className="mini-kpi-val">{k.val}</div>
                    <div className="mini-kpi-lbl">{k.lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '10px' }}>Full End-to-End Analytics Workflow</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {data.architectureWorkflow.map((step, idx) => (
                  <li key={idx} style={{ fontSize: '0.9rem', color: 'var(--text-muted)', paddingLeft: '18px', position: 'relative', wordBreak: 'break-word' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-cyan)' }}>▹</span> {step}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <i className="fas fa-calculator" style={{ color: 'var(--accent-amber)' }}></i> Complete DAX Measures & Calculated Columns
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
                      >
                        <i className={copiedMeasureIdx === idx ? 'fas fa-check' : 'fas fa-copy'}></i>{' '}
                        {copiedMeasureIdx === idx ? 'Copied!' : 'Copy DAX'}
                      </button>
                    </div>
                    <pre style={{ background: 'var(--bg-primary)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-subtle)', overflowX: 'auto', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#38bdf8', maxWidth: '100%' }}>
                      <code>{measure.code}</code>
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
