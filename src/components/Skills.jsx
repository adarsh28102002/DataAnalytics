import React from 'react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag"><i className="fas fa-tools"></i> Verified Technical Stack</span>
          <h2 className="section-title">Practiced Tools & Analytics Capabilities</h2>
          <p className="section-subtitle">A transparent view of technologies, analytical workflows, and business intelligence techniques applied across real-world operations.</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div className="glass-card skill-category-card" key={idx}>
              <div className="skill-cat-header">
                <div className={`skill-cat-icon icon-${cat.colorKey === 'amber' ? 'powerbi' : cat.colorKey === 'emerald' ? 'excel' : 'analytics'}`}>
                  <i className={cat.icon}></i>
                </div>
                <div>
                  <h3 className="skill-cat-title">{cat.title}</h3>
                  <span style={{ fontSize: '0.78rem', color: `var(--accent-${cat.colorKey})`, fontFamily: 'var(--font-mono)' }}>
                    {cat.badge}
                  </span>
                </div>
              </div>

              <div className="skill-items-list">
                {cat.items.map((item, itemIdx) => (
                  <div className="skill-item" key={itemIdx}>
                    <div className="skill-item-info">
                      <span className="skill-name">{item.name}</span>
                      <span className="skill-level-text">{item.level}%</span>
                    </div>
                    <div className="skill-progress-bar">
                      <div 
                        className={`skill-progress-fill fill-${cat.colorKey}`} 
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="skill-tags-cloud">
                {cat.tags.map((tag, tagIdx) => (
                  <span className="skill-pill" key={tagIdx}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Operational & Soft Skills Strip */}
        <div style={{ marginTop: '36px' }} className="glass-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '4px' }}>
                <i className="fas fa-layer-group" style={{ color: 'var(--accent-purple)' }}></i>
                <span> Data Analytics Lifecycle & Soft Competencies</span>
              </h4>
              <p style={{ fontSize: '0.9rem' }}>From problem identification to executive storytelling and operational dispatch coordination.</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <span className="badge badge-cyan">Data Cleaning</span>
              <span className="badge badge-emerald">Data Transformation</span>
              <span className="badge badge-amber">Executive Reporting</span>
              <span className="badge badge-cyan">Problem-Solving</span>
              <span className="badge badge-emerald">Attention to Detail</span>
              <span className="badge badge-amber">Decision-Making</span>
              <span className="badge badge-cyan">PowerPoint Presentations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
