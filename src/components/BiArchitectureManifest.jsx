import React, { useState } from 'react';

export default function BiArchitectureManifest() {
  const [activeTab, setActiveTab] = useState('manifest');

  return (
    <section className="manifest-section" id="architecture">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <i className="fas fa-terminal"></i> DESIGN INTELLIGENCE & ARCHITECTURE
          </span>
          <h2 className="section-title">
            Enterprise BI <span className="text-gradient">System Architecture</span>
          </h2>
          <p className="section-subtitle">
            Structured data analytics workflows, dimensional Star Schema modeling, and mathematically validated DAX measure engines engineered for executive decision-making.
          </p>
        </div>

        {/* Terminal / Design System Cockpit Frame */}
        <div className="terminal-design-box glass-card">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="terminal-title">
              <i className="fas fa-microchip" style={{ color: 'var(--accent-cyan)' }}></i>
              <span>adarsh@analytics-cockpit: ~/bi-architecture-system.manifest</span>
            </div>
            <div className="terminal-tabs">
              <button 
                className={`terminal-tab-btn ${activeTab === 'manifest' ? 'active' : ''}`}
                onClick={() => setActiveTab('manifest')}
              >
                <i className="fas fa-file-code"></i> SYSTEM MANIFEST
              </button>
              <button 
                className={`terminal-tab-btn ${activeTab === 'pipeline' ? 'active' : ''}`}
                onClick={() => setActiveTab('pipeline')}
              >
                <i className="fas fa-project-diagram"></i> PIPELINE WORKFLOW
              </button>
              <button 
                className={`terminal-tab-btn ${activeTab === 'dax' ? 'active' : ''}`}
                onClick={() => setActiveTab('dax')}
              >
                <i className="fas fa-calculator"></i> DAX CALCULATION ENGINE
              </button>
            </div>
          </div>

          <div className="terminal-body">
            {activeTab === 'manifest' && (
              <pre className="terminal-code">
{`+----------------------------------------------------------------------------------------+
|  TARGET: Enterprise BI & Retention Analytics - RECOMMENDED PRODUCTION ARCHITECTURE     |
+----------------------------------------------------------------------------------------+
|                                                                                        |
|  PATTERN: Executive Cockpit + Data-Dense Drilldown + Automated Win-Back                |
|     Conversion: Decision-driven with real-time KPI alerts & time-intelligence          |
|     Slicers: Multi-criteria (City, Membership Plan, Acquisition Channel, Year)        |
|     Sections:                                                                          |
|       1. Executive KPI Cockpit                                                         |
|       2. Customer Risk Segmentation & Retention Diagnostics                            |
|       3. Multi-Store Salesperson & Manager Matrix Audit                                |
|       4. Automated n8n Win-Back Retention Workflow                                     |
|                                                                                        |
|  CORE STACK:                                                                           |
|     Power BI Desktop • DAX (Time-Intelligence) • Power Query (M-Code) • Advanced Excel   |
|     Workflow Automation: n8n Cron Scheduler (10:00 AM) • Google Sheets API             |
|                                                                                        |
|  MEASURED BUSINESS IMPACT:                                                             |
|     • 50% Automation Reduction in manual MIS reporting overhead                        |
|     • 99.4% Reconciliation Accuracy across order & inventory transactions              |
|     • ₹13.97M Revenue at Risk isolated & protected across 10,000 customer records      |
|     • 6+ Hours Saved per week via automated Power Query transformation pipelines       |
|                                                                                        |
|  DATASET BENCHMARKS:                                                                   |
|     • Customer Churn: 10,000 records | 9.17% Churn Rate | 3,600+ At-Risk Segment       |
|     • Retail Multi-Store: Stores A, B, C, D | $4.34M Net Sales | YoY Dynamic Arrows    |
|     • Food Delivery BI: ~200,000 orders | ₹165M Total Revenue | 6 Interactive Views     |
|                                                                                        |
|  AVOID (Anti-patterns & Critical Rules):                                               |
|     [x] Circular Many-to-Many relationships in Data Model (Enforce Star Schema 1:*)    |
|     [x] Hardcoded volatile calculations (Enforce reusable DAX Measures)                |
|     [x] Truncated data chips and clipped KPI cards across mobile/desktop               |
|     [x] Slow DAX iterators on large fact tables (Favor CALCULATE & DIVIDE with safety) |
|                                                                                        |
+----------------------------------------------------------------------------------------+`}
              </pre>
            )}

            {activeTab === 'pipeline' && (
              <pre className="terminal-code">
{`┌─────────────────────────────────────────────────────────────────┐
│  1. RAW DATA INGESTION & AUDIT                                  │
│     Excel Workbooks, CSV Exports, Google Sheets, Transactional  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  2. POWER QUERY (M) ETL & HYGIENE                               │
│     Deduplicate CustomerIDs, eliminate blanks, type coercion,   │
│     RiskSegment categorization (0-30d Active, >90d Churned)     │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  3. STAR SCHEMA DIMENSIONAL MODELING                            │
│     Central Fact Tables (Orders, Sales) + Conformed Dimensions  │
│     (Customers, Restaurants, Contiguous DAX DateTable)          │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  4. HIGH-PERFORMANCE DAX MEASURE ENGINE                         │
│     Time-Intelligence YTD, MoM, YoY SAMEPERIODLASTYEAR,         │
│     Dynamic HEX color formatting & SELECTEDVALUE chart titles   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  5. AUTOMATED WORKFLOWS & DECISION STORYTELLING                 │
│     Scheduled daily 10:00 AM n8n notifications & executive      │
│     drill-through dashboards deployed to stakeholders           │
└─────────────────────────────────────────────────────────────────┘`}
              </pre>
            )}

            {activeTab === 'dax' && (
              <pre className="terminal-code">
{`// 1. Core Churn Rate (Safe Division with Zero Handling)
Churn Rate = 
DIVIDE(
    CALCULATE(DISTINCTCOUNT(CustomerData[CustomerID]), CustomerData[Churned_90d] = 1),
    DISTINCTCOUNT(CustomerData[CustomerID]),
    0
)

// 2. Year-over-Year Growth with Dynamic UNICHAR Directional Arrows
Previous Year = 
VAR PY = CALCULATE([Total Net], SAMEPERIODLASTYEAR('Date'[Date]))
VAR CY = [Total Net]
VAR Pct = IF(PY = 0 || ISBLANK(PY), BLANK(), DIVIDE(CY - PY, PY))
VAR Arrow = IF(CY >= PY, UNICHAR(9650), UNICHAR(9660)) /* ▲ or ▼ */
RETURN
IF(
    ISBLANK(PY) || PY = 0,
    BLANK(),
    FORMAT(Pct, "0.00%") & " " & Arrow
)

// 3. Dynamic Gradient Theming (Hex Switching Logic)
RiskSegment Colour =
VAR MaxVal = MAXX(ALLSELECTED(CustomerData[RiskSegment]), [Total Customers])
VAR MinVal = MINX(ALLSELECTED(CustomerData[RiskSegment]), [Total Customers])
VAR CurVal = [Total Customers]
RETURN
SWITCH(
    TRUE(),
    CurVal = MaxVal, "#3C096C",  /* Deep Purple for Highest Risk */
    CurVal = MinVal, "#7B2CBF",  /* Medium Purple */
    "#E0AAFF"                    /* Soft Violet for Baseline */
)`}
              </pre>
            )}
          </div>
        </div>

        {/* Feature & Domain Benchmark Matrix (README Style) */}
        <div className="readme-matrix-card glass-card">
          <div className="matrix-card-header">
            <h4>
              <i className="fas fa-table" style={{ color: 'var(--accent-emerald)' }}></i>
              <span> Domain Architecture & Benchmark Matrix</span>
            </h4>
            <span className="badge badge-emerald">Verified Standards</span>
          </div>

          <div className="matrix-table-wrap">
            <table className="readme-table">
              <thead>
                <tr>
                  <th>Domain / Project</th>
                  <th>Primary Pattern</th>
                  <th>Data Volume</th>
                  <th>Key DAX / Tech Capability</th>
                  <th>Key Measured ROI / Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Customer Churn & Retention</strong></td>
                  <td><span className="badge badge-purple">Risk Segmentation</span></td>
                  <td>10,000 Records</td>
                  <td><code>CALCULATE</code>, <code>HEX Theme</code>, n8n Cron</td>
                  <td className="table-highlight">₹13.97M Revenue at Risk Isolated</td>
                </tr>
                <tr>
                  <td><strong>Retail Store Sale Performance</strong></td>
                  <td><span className="badge badge-emerald">Executive Cockpit</span></td>
                  <td>Stores A, B, C, D</td>
                  <td><code>SAMEPERIODLASTYEAR</code>, <code>UNICHAR Arrows</code></td>
                  <td className="table-highlight">$4.34M Net Sales YoY Tracking</td>
                </tr>
                <tr>
                  <td><strong>Food Delivery Analytics</strong></td>
                  <td><span className="badge badge-amber">6-Page BI Suite</span></td>
                  <td>~200,000 Transactions</td>
                  <td><code>Star Schema</code>, <code>Drill-Through</code>, AOV</td>
                  <td className="table-highlight">80.11% Delivered, ₹165M Volume</td>
                </tr>
                <tr>
                  <td><strong>Operational MIS Automation</strong></td>
                  <td><span className="badge badge-cyan">ETL Pipeline</span></td>
                  <td>Daily / Weekly MIS</td>
                  <td>Power Query M-Code, <code>XLOOKUP</code>, LET</td>
                  <td className="table-highlight">6+ Hours Saved / Week (50% reduction)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
