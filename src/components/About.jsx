import React from 'react';
import { experienceData } from '../data/portfolioData';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag"><i className="fas fa-user-tie"></i> Professional Profile</span>
          <h2 className="section-title">Analytical Mindset & Hands-on Execution</h2>
          <p className="section-subtitle">Bridging operational data silos with robust dimensional data models, automated ETL, and intuitive decision-support dashboards.</p>
        </div>

        <div className="about-grid">
          {/* Analytical Profile & Strengths */}
          <div className="glass-card about-summary-card">
            <h3 style={{ fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fas fa-lightbulb" style={{ color: 'var(--accent-cyan)' }}></i>
              <span>Core Analytical Philosophy</span>
            </h3>
            
            <div className="about-bio">
              <p>
                With over 4 years of dedicated experience in <strong>MIS reporting, operational analytics, and dashboard architecture</strong>, I specialize in eliminating repetitive manual overhead and establishing trustworthy single-sources-of-truth.
              </p>
              <p>
                My methodology spans the full data lifecycle: starting with complex transactional data and raw logs, performing data hygiene and dimensional modeling via <strong>Power Query & Star Schema</strong>, authoring mathematically sound <strong>DAX measures</strong>, and deploying interactive, drill-down visual dashboards that leadership can act on immediately.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-box">
                <div className="highlight-title">Core Domain</div>
                <div className="highlight-desc">MIS, Logistics, Telecom & E-Commerce</div>
              </div>
              <div className="highlight-box">
                <div className="highlight-title">Technical Core</div>
                <div className="highlight-desc">Power BI, Advanced Excel, DAX, Power Query</div>
              </div>
              <div className="highlight-box">
                <div className="highlight-title">Process Automation</div>
                <div className="highlight-desc">Power Query, Dynamic Formulas, ETL</div>
              </div>
              <div className="highlight-box">
                <div className="highlight-title">Location</div>
                <div className="highlight-desc">Surat, Gujarat, India</div>
              </div>
            </div>

            <div style={{ marginTop: '10px' }}>
              <a href="#contact" className="btn btn-secondary btn-sm">
                <i className="fas fa-handshake"></i> Let's Discuss Opportunities
              </a>
            </div>
          </div>

          {/* Professional Work History Timeline */}
          <div className="glass-card timeline-card">
            <h3>
              <i className="fas fa-briefcase" style={{ color: 'var(--accent-emerald)' }}></i>
              <span>Work Experience Timeline</span>
            </h3>

            <div className="timeline-list">
              {experienceData.map((exp, idx) => (
                <div className="timeline-item" key={idx}>
                  <div className={`timeline-dot ${exp.dotColor}`}></div>
                  <div className="timeline-header">
                    <div className="timeline-role">{exp.role}</div>
                    <div className="timeline-company">{exp.company}</div>
                    <div className="timeline-meta">
                      <span><i className="far fa-calendar-alt"></i> {exp.period}</span>
                      <span><i className="fas fa-map-marker-alt"></i> {exp.location}</span>
                    </div>
                  </div>
                  <ul className="timeline-bullets">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} dangerouslySetInnerHTML={{ __html: bullet }} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
