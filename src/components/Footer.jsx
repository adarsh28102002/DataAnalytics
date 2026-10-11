import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="nav-brand">
          <div className="brand-badge">AS</div>
          <div className="brand-name">
            <span className="brand-title">Singh Adarsh Ramakar</span>
            <span className="brand-sub">Data Analyst & MIS Executive</span>
          </div>
        </div>
        <p className="footer-text">
          © {new Date().getFullYear()} Singh Adarsh Ramakar. Crafted with high-precision Data Analytics aesthetic.
        </p>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
          Power BI • Advanced Excel • DAX • Power Query • MIS Automation
        </div>
      </div>
    </footer>
  );
}
