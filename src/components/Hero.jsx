import React, { useState, useEffect, useRef } from 'react';
import { kpiStripData } from '../data/portfolioData';

function AnimatedCounter({ target, suffix = '', decimals = 0 }) {
  const [value, setValue] = useState(0);
  const counterRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            let start = 0;
            const duration = 1600;
            let startTimestamp = null;

            const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              const easeOutQuad = 1 - Math.pow(1 - progress, 3);
              const current = start + (target - start) * easeOutQuad;
              setValue(current);
              if (progress < 1) {
                window.requestAnimationFrame(step);
              } else {
                setValue(target);
              }
            };
            window.requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={counterRef} className="counter-val">
      {value.toFixed(decimals)}{suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-status-pill">
            <span className="status-pulse"></span>
            <span>Available for Data Analyst & MIS Roles</span>
          </div>

          <h1 className="hero-title">
            Transforming Complex Data Into <span className="text-gradient">Actionable Intelligence</span>
          </h1>

          <p className="hero-lead">
            I am <strong>Singh Adarsh Ramakar</strong>, an MIS Executive with <strong>4+ years of proven expertise</strong> in data analysis, dimensional modeling, automated reporting, and executive dashboard engineering using <strong>Power BI, Advanced Excel, Power Query, and DAX</strong>.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary" id="heroViewProject">
              <i className="fas fa-chart-pie"></i>
              <span>Explore Project</span>
            </a>
            <a 
              href="assets/docs/Adarsh_Singh_Resume.pdf" 
              download="Singh_Adarsh_Ramakar_Resume.pdf" 
              className="btn btn-secondary" 
              id="heroDownloadResume"
            >
              <i className="fas fa-download"></i>
              <span>Download Resume</span>
            </a>
            <a href="#contact" className="btn btn-outline" id="heroContactBtn">
              <i className="fas fa-paper-plane"></i>
              <span>Contact Me</span>
            </a>
          </div>

          {/* Hero KPI Strip with Animated Counters */}
          <div className="hero-kpi-strip">
            {kpiStripData.map((kpi, idx) => (
              <div className="kpi-chip" key={idx}>
                <div className="kpi-chip-val">
                  <AnimatedCounter 
                    target={kpi.target} 
                    suffix={kpi.suffix} 
                    decimals={kpi.decimals} 
                  />
                </div>
                <div className="kpi-chip-label">{kpi.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Visual Profile Card */}
        <div className="hero-visual">
          <div className="visual-card-wrap">
            <div className="visual-card-glow"></div>
            
            {/* Floating Highlights */}
            <div className="float-badge top-left">
              <div className="float-badge-icon" style={{ background: 'var(--accent-emerald-glow)', color: 'var(--accent-emerald)' }}>
                <i className="fas fa-bolt"></i>
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>POWER QUERY</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700 }}>6+ Hours Saved / Wk</div>
              </div>
            </div>

            <div className="float-badge bottom-right">
              <div className="float-badge-icon" style={{ background: 'var(--accent-amber-glow)', color: 'var(--accent-amber)' }}>
                <i className="fas fa-chart-line"></i>
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>STAR SCHEMA</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700 }}>6-Page Power BI Suite</div>
              </div>
            </div>

            <div className="profile-card">
              <div className="profile-avatar-frame">
                <img
                  src="/DataAnalytics/assets/images/adarsh_headshot.png"
                  alt="Singh Adarsh Ramakar - Data Analyst & MIS Executive"
                  loading="eager"
                  onError={(e) => { e.currentTarget.src = "assets/images/adarsh_headshot.png"; }}
                />
              </div>
              <div className="profile-info-block">
                <div className="profile-name">Singh Adarsh Ramakar</div>
                <div className="profile-role">Data Analyst & MIS Executive</div>
                <div className="profile-location-chip">
                  <i className="fas fa-map-marker-alt" style={{ color: 'var(--accent-cyan)' }}></i>
                  <span>Surat, Gujarat, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
