import React from 'react';

export default function Resume() {
  return (
    <section className="resume-section" id="resume">
      <div className="container resume-wrapper">
        <div className="section-header">
          <span className="section-tag"><i className="fas fa-file-alt"></i> Curriculum Vitae</span>
          <h2 className="section-title">Official Resume & Qualifications</h2>
          <p className="section-subtitle">Review my credentials, work accomplishments, and download a clean copy.</p>
        </div>

        {/* Single Direct Resume Download Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '36px' }}>
          <a 
            href="assets/docs/Adarsh_Singh_Resume.pdf" 
            download="Singh_Adarsh_Ramakar_Resume.pdf" 
            className="btn btn-primary" 
            id="resumeDownloadBtn" 
            style={{ padding: '14px 34px', fontSize: '1.05rem', display: 'inline-flex', alignItems: 'center', gap: '10px', boxShadow: '0 8px 25px rgba(6, 182, 212, 0.4)' }}
          >
            <i className="fas fa-download"></i>
            <span>Download Resume (PDF)</span>
          </a>
        </div>

        {/* In-Page Formatted Resume Document Sheet */}
        <div className="resume-doc-sheet" id="printableResumeArea">
          <div className="resume-doc-header">
            <div>
              <h2 className="doc-candidate-name">SINGH ADARSH RAMAKAR</h2>
              <div className="doc-candidate-title">Data Analyst & MIS Executive (4+ Years Experience)</div>
            </div>
            <div className="doc-contact-items">
              <div><i className="fas fa-envelope"></i> adarshsinghas2020@gmail.com</div>
              <div><i className="fas fa-phone-alt"></i> +91 6354441918</div>
              <div><i className="fas fa-map-marker-alt"></i> Surat, Gujarat, India</div>
              <div><i className="fab fa-linkedin"></i> LinkedIn | <i className="fab fa-github"></i> GitHub</div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="doc-section">
            <h3 className="doc-section-heading">Professional Summary</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-main)' }}>
              MIS Executive with <strong>4+ years of experience</strong> in MIS reporting, data analysis, dashboard development, and process automation using <strong>Excel and Power BI</strong>. Proven track record of reducing data error rates by 25%, boosting backlog reporting effectiveness by 30%, and saving 6+ hours weekly through Power Query and automated Excel data modeling.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="doc-section">
            <h3 className="doc-section-heading">Technical Skills</h3>
            <ul className="doc-bullet-list">
              <li><strong>Data Analytics:</strong> Data Cleaning, Data Transformation, Data Visualization, Dimensional Modeling, Reporting</li>
              <li><strong>BI & Analytics:</strong> Power BI, DAX, Power Query (M), Star Schema</li>
              <li><strong>Spreadsheet:</strong> Advanced MS Excel (XLOOKUP, Dynamic Arrays, Pivot Tables), Google Sheets</li>
              <li><strong>Data Transformation:</strong> Power Query, ETL Automation, Data Hygiene, Backlog Aging Models</li>
              <li><strong>Presentation:</strong> PowerPoint (Executive reporting & data storytelling)</li>
              <li><strong>Soft Skills:</strong> Problem-Solving, Attention to Detail, Time Management, Communication, Critical Thinking, Adaptability, Decision-Making</li>
            </ul>
          </div>

          {/* Work Experience */}
          <div className="doc-section">
            <h3 className="doc-section-heading">Work Experience</h3>

            <div style={{ marginBottom: '18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>MIS EXECUTIVE — Hathway Cable & Datacom LTD</h4>
                <span className="mono" style={{ fontSize: '0.84rem', color: 'var(--accent-cyan)' }}>Dec 2024 – Present | Adajan Surat</span>
              </div>
              <ul className="doc-bullet-list" style={{ marginTop: '8px' }}>
                <li>Improved order backlog reporting effectiveness by <strong>30%</strong> through automated Excel dashboards and automated data insights.</li>
                <li>Enhanced accuracy of daily/weekly MIS reports, reducing data error by <strong>25%</strong> and supporting faster management decisions.</li>
                <li>Streamlined manual reporting tasks using Excel formulas & Power Query, saving <strong>6+ hours per week</strong> in operational time.</li>
              </ul>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>TEAM LEAD & MIS — Shadowfax</h4>
                <span className="mono" style={{ fontSize: '0.84rem', color: 'var(--accent-cyan)' }}>June 2021 – Oct 2023 | Kadodara Surat</span>
              </div>
              <ul className="doc-bullet-list" style={{ marginTop: '8px' }}>
                <li>Automated daily inventory & dispatch reports, reducing manual workload by <strong>50%</strong> and improving reporting speed across team.</li>
                <li>Coordinated a team to minimize discrepancies and improved operational efficiency, resulting in <strong>20% faster order processing</strong>.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="doc-section">
            <h3 className="doc-section-heading">Featured Projects</h3>
            <div>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)' }}>Food Delivery Analytics Dashboard | Power BI | Power Query | DAX | Star Schema</h4>
              <ul className="doc-bullet-list" style={{ marginTop: '8px' }}>
                <li>Processed and analyzed <strong>~200K food delivery transactions</strong>, performing data cleaning, transformation, feature engineering, and dimensional modeling using Power Query and a Star Schema.</li>
                <li>Developed DAX measures and time-intelligence KPIs to analyze revenue, order volume, AOV, customer retention, cancellations, delivery performance, and growth trends.</li>
                <li>Identified high-performing cities and restaurants, repeat-customer behavior, popular cuisines, pricing segments, revenue trends, and late-delivery patterns to uncover key business drivers.</li>
                <li>Built a <strong>6-Page interactive Power BI dashboard</strong> with dynamic KPI selection, drill-through, slicers, and cross-filtering to support data-driven decisions across sales, customers, restaurants, and operations.</li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div className="doc-section" style={{ marginBottom: 0 }}>
            <h3 className="doc-section-heading">Certifications</h3>
            <ul className="doc-bullet-list">
              <li><strong>Power BI</strong> — Simplilearn | 2026</li>
              <li><strong>MS Excel</strong> — Simplilearn | 2026</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
