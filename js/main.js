/**
 * ADARSH SINGH RAMAKAR - PORTFOLIO INTERACTION ENGINE
 * Project: Food Delivery Analytics Dashboard (Power BI)
 * Repo: https://github.com/adarsh28102002/food.swig.analystis
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
  initScrollNav();
  initCounters();
  initShowcasePages();
  initModals();
  initContactForm();
});

/* ===================================================================
   1. THEME TOGGLE (DARK / LIGHT)
   =================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggle');
  if (!themeToggleBtn) return;

  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    updateThemeIcon(nextTheme);
  });
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  if (theme === 'light') {
    btn.innerHTML = '<i class="fas fa-moon"></i>';
    btn.setAttribute('aria-label', 'Switch to Dark Mode');
  } else {
    btn.innerHTML = '<i class="fas fa-sun"></i>';
    btn.setAttribute('aria-label', 'Switch to Light Mode');
  }
}

/* ===================================================================
   2. MOBILE NAV & SCROLL SPY
   =================================================================== */
function initMobileNav() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  }
}

function initScrollNav() {
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    if (navbar) {
      if (scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/* ===================================================================
   3. ANIMATED COUNTER NUMBERS
   =================================================================== */
function initCounters() {
  const countElements = document.querySelectorAll('.counter-val');
  if (!countElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetVal = parseFloat(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
        animateValue(el, 0, targetVal, 1600, prefix, suffix, decimals);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.25 });

  countElements.forEach(el => observer.observe(el));
}

function animateValue(obj, start, end, duration, prefix, suffix, decimals) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const easeOutQuad = 1 - Math.pow(1 - progress, 3);
    const current = start + (end - start) * easeOutQuad;
    obj.textContent = `${prefix}${current.toFixed(decimals)}${suffix}`;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      obj.textContent = `${prefix}${end.toFixed(decimals)}${suffix}`;
    }
  };
  window.requestAnimationFrame(step);
}

/* ===================================================================
   4. INTERACTIVE 6-PAGE DASHBOARD GALLERY SWITCHER
   =================================================================== */
const dashboardPagesData = {
  'p1': {
    title: 'Page 1: Executive Overview',
    subtitle: 'Core KPIs, Monthly Trends, Revenue by City & Top 10 Restaurants',
    image: 'assets/images/swiggy_p1_overview.png',
    desc: 'High-level business summary providing owners with instant insights into revenue ($165M), total volume (200K orders), order status breakdown (80.11% delivered, 9.97% cancelled), and top performing outlets.',
    kpis: [
      { val: '165M', lbl: 'Total Revenue' },
      { val: '200K', lbl: 'Total Orders' },
      { val: '824.57', lbl: 'Avg Order Value' },
      { val: '44.55m', lbl: 'Avg Delivery Time' }
    ],
    features: ['City-Wise Dropdown Filter', 'Revenue by City Horizontal Bars', 'Orders Status Donut Breakdown', 'Top 10 Restaurants Matrix']
  },
  'p2': {
    title: 'Page 2: Customer Analytics',
    subtitle: 'Customer Acquisition, Retention & Order Frequency',
    image: 'assets/images/swiggy_p2_customer.png',
    desc: 'Deep-dive into customer purchasing behavior, measuring repeat vs. new customer ratios, registration growth trends over time, and identifying high-value patrons.',
    kpis: [
      { val: '200K', lbl: 'Analyzed Orders' },
      { val: 'DAX', lbl: 'Repeat Customer %' },
      { val: 'YTD', lbl: 'Sign-up Trends' },
      { val: 'Dynamic', lbl: 'AOV Segments' }
    ],
    features: ['New vs Repeat Customers', 'Customer Sign-up Trend', 'Top Customers by Revenue', 'Order Frequency Distribution']
  },
  'p3': {
    title: 'Page 3: Restaurant Performance',
    subtitle: 'Cuisine Demand, Ratings vs Revenue & Cost Buckets',
    image: 'assets/images/swiggy_p3_restaurant.png',
    desc: 'Evaluates partner restaurant performance across cuisines, cost categories (Budget < 500, Mid Range < 1000, Premium > 1000), customer ratings, and revenue contributions.',
    kpis: [
      { val: 'Top 10', lbl: 'Revenue Drivers' },
      { val: '3 Buckets', lbl: 'Cost Categories' },
      { val: '4 Rating', lbl: 'Classification Tiers' },
      { val: 'Cuisine', lbl: 'Volume Matrix' }
    ],
    features: ['Orders by Primary Cuisine', 'Rating vs Revenue Correlation', 'Order Distribution by Cost Bucket', 'Restaurant Rating & Votes']
  },
  'p4': {
    title: 'Page 4: Delivery & Operations',
    subtitle: 'SLA Efficiency, Delay Patterns & Cancellation Rates',
    image: 'assets/images/swiggy_p4_delivery.png',
    desc: 'Identifies operational bottlenecks, tracking on-time vs. late delivery benchmarks (≤ 45 mins vs > 45 mins), order cancellations (9.97%), and city-wise operational health.',
    kpis: [
      { val: '44.55m', lbl: 'Avg Delivery Time' },
      { val: '80.11%', lbl: 'On-Time Deliveries' },
      { val: '9.91%', lbl: 'Late Order Rate' },
      { val: '9.97%', lbl: 'Cancellation Rate' }
    ],
    features: ['Delivery Time Trendline', 'On-Time vs Late Delivery Split', 'City vs Order Status Matrix', 'Delay Root-Cause Drill']
  },
  'p5': {
    title: 'Page 5: Advanced Insights (Dynamic KPI & Q&A)',
    subtitle: 'Dynamic Parameter Metric Switching & Natural Language Exploration',
    image: 'assets/images/swiggy_p5_advanced.png',
    desc: 'Employs a disconnected parameter table paired with DAX SELECTEDVALUE to dynamically re-chart visuals between Revenue, Orders, AOV, and Delivery Time on the fly, with native Power BI Q&A visual.',
    kpis: [
      { val: 'SELECTEDVALUE', lbl: 'DAX Function' },
      { val: '4 Metrics', lbl: 'Dynamic Switcher' },
      { val: 'Q&A AI', lbl: 'Natural Language' },
      { val: 'Ad-Hoc', lbl: 'Self-Serve BI' }
    ],
    features: ['Dynamic KPI Slicer Table', 'Interactive Bar/Line Metric Switching', 'Power BI Natural Language Q&A', 'Self-Serve Management View']
  },
  'p6': {
    title: 'Page 6: Restaurant Details — Drill-Through',
    subtitle: 'Store-Level Investigation & Deep-Dive Diagnostics',
    image: 'assets/images/swiggy_p6_drilldown.png',
    desc: 'Enables executive stakeholders to right-click any restaurant across the dashboard and drill straight into dedicated store-level revenue, customer mix, rating distribution, and order volume.',
    kpis: [
      { val: 'Drill-Through', lbl: 'Navigation Action' },
      { val: 'Store-Level', lbl: 'Diagnostics' },
      { val: 'Cuisine Mix', lbl: 'Breakdown' },
      { val: 'Order History', lbl: 'Timeline' }
    ],
    features: ['Contextual Drill-Through Filter', 'Single-Restaurant Revenue Card', 'Specific Delivery Performance', 'Item & Cuisine Demand']
  },
  'model': {
    title: 'Star Schema Data Architecture',
    subtitle: 'Dimensional Modeling with 1-to-Many Single-Direction Filtering',
    image: 'assets/images/swiggy_model.png',
    desc: 'Structured star schema design with central Orders Fact table connected to Customers, Restaurants, and DateTable dimension tables for high-performance reporting and clean DAX calculations.',
    kpis: [
      { val: '1 Fact', lbl: 'Orders Table' },
      { val: '3 Dims', lbl: 'Dimension Tables' },
      { val: '1-to-Many', lbl: 'Relationships' },
      { val: 'Clean M', lbl: 'Power Query ETL' }
    ],
    features: ['Orders Central Fact Table', 'Customers Dimension Table', 'Restaurants Dimension Table', 'DateTable Dedicated Dimension']
  }
};

function initShowcasePages() {
  const tabBtns = document.querySelectorAll('.page-tab-btn');
  const showcaseImg = document.getElementById('showcaseMainImg');
  const showcaseTitle = document.getElementById('showcasePageTitle');
  const showcaseSubtitle = document.getElementById('showcasePageSubtitle');
  const showcaseDesc = document.getElementById('showcasePageDesc');
  const showcaseKpiContainer = document.getElementById('showcaseKpiGrid');
  const showcaseFeatures = document.getElementById('showcaseFeaturesList');
  const showcaseMediaWrap = document.querySelector('.showcase-media');

  if (!tabBtns.length || !showcaseImg) return;

  function switchPage(pageKey) {
    const data = dashboardPagesData[pageKey];
    if (!data) return;

    tabBtns.forEach(btn => {
      if (btn.getAttribute('data-page') === pageKey) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update image with smooth fade
    showcaseImg.style.opacity = '0.3';
    setTimeout(() => {
      showcaseImg.src = data.image;
      showcaseImg.alt = data.title;
      showcaseImg.style.opacity = '1';
    }, 150);

    if (showcaseTitle) showcaseTitle.textContent = data.title;
    if (showcaseSubtitle) showcaseSubtitle.textContent = data.subtitle;
    if (showcaseDesc) showcaseDesc.textContent = data.desc;

    if (showcaseKpiContainer) {
      showcaseKpiContainer.innerHTML = data.kpis.map(k => `
        <div class="mini-kpi-card">
          <div class="mini-kpi-val">${k.val}</div>
          <div class="mini-kpi-lbl">${k.lbl}</div>
        </div>
      `).join('');
    }

    if (showcaseFeatures) {
      showcaseFeatures.innerHTML = data.features.map(f => `
        <span class="skill-pill">${f}</span>
      `).join('');
    }

    if (showcaseMediaWrap) {
      showcaseMediaWrap.setAttribute('data-active-img', data.image);
      showcaseMediaWrap.setAttribute('data-active-title', data.title);
    }
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const pageKey = btn.getAttribute('data-page');
      switchPage(pageKey);
    });
  });
}

/* ===================================================================
   5. MODAL & DAX VIEWER
   =================================================================== */
const foodDeliveryFullData = {
  title: 'Food Delivery Analytics Dashboard — Power BI',
  githubUrl: 'https://github.com/adarsh28102002/food.swig.analystis',
  badge: 'Power BI • Star Schema • DAX',
  summary: 'End-to-end business intelligence project developed using Microsoft Power BI to transform ~200,000 food delivery records into interactive business intelligence across sales, customer retention, restaurant efficiency, delivery operations, and ad-hoc Q&A exploration.',
  kpis: [
    { val: '₹165M', lbl: 'Total Revenue' },
    { val: '200K', lbl: 'Total Orders' },
    { val: '₹824.57', lbl: 'Avg Order Value' },
    { val: '44.55m', lbl: 'Avg Delivery Time' },
    { val: '80.11%', lbl: 'Delivered Orders' },
    { val: '9.97%', lbl: 'Cancelled Orders' },
    { val: '9.91%', lbl: 'Delayed Orders' },
    { val: '6 Pages', lbl: 'Dedicated BI Views' }
  ],
  architectureWorkflow: [
    'Raw Data (~200K Records from Kaggle) → Power Query ETL',
    'Data Cleaning: Type corrections, text trimming, rate extraction, column renaming',
    'Star Schema: Central Orders Fact Table + Customers, Restaurants, DateTable Dimensions',
    'Calculated Columns: FilterCity, Cost Bucket, Rating Bucket, Delivery Status, Order Month',
    'DAX Measures: Core KPIs, Status Measures, Customer Retention, Time-Intelligence YTD',
    'Interactive 6-Page Dashboard with Drill-through, Slicers, and Dynamic KPI Parameter Tables'
  ],
  daxMeasures: [
    {
      name: 'Total Revenue & Average Order Value',
      code: `Total Orders = COUNT(Orders[OrderID])

Total Revenue = SUM(Orders[OrderValue])

Avg Order Value = DIVIDE([Total Revenue], [Total Orders])

Avg Delivery Time = AVERAGE(Orders[DeliveryTimeMins])`
    },
    {
      name: 'Status & Delivery Performance Measures',
      code: `Delivered Orders = CALCULATE([Total Orders], Orders[OrderStatus] = "Delivered")

Cancelled Orders = CALCULATE([Total Orders], Orders[OrderStatus] = "Cancelled")

Cancellation % = DIVIDE([Cancelled Orders], [Total Orders])

Late Orders = CALCULATE([Total Orders], Orders[Delivery Status] = "Late")

Late Delivery % = DIVIDE([Late Orders], [Total Orders])`
    },
    {
      name: 'Customer Retention & Loyalty (DAX)',
      code: `Repeat Customers = 
COUNTROWS(
    FILTER(
        VALUES(Orders[CustomerID]),
        CALCULATE(COUNT(Orders[OrderID])) > 1
    )
)

Repeat Customer % = DIVIDE([Repeat Customers], [Total Customers])

Orders Per Customer = DIVIDE([Total Orders], [Total Customers])`
    },
    {
      name: 'Time-Intelligence (YTD & MoM Growth %)',
      code: `Revenue YTD = TOTALYTD([Total Revenue], DateTable[Date])

Orders YTD = TOTALYTD([Total Orders], DateTable[Date])

Revenue Previous Month = 
CALCULATE([Total Revenue], DATEADD(DateTable[Date], -1, MONTH))

Revenue Growth % = 
DIVIDE([Total Revenue] - [Revenue Previous Month], [Revenue Previous Month])`
    },
    {
      name: 'Calculated Columns (Bucketing & Data Hygiene)',
      code: `// Cost Bucket
Cost Bucket = 
SWITCH(
    TRUE(),
    Restaurants[CostForTwo] < 500, "Budget",
    Restaurants[CostForTwo] < 1000, "Mid Range",
    "Premium"
)

// Rating Bucket
Rating Bucket = 
SWITCH(
    TRUE(),
    Restaurants[Rating] >= 4.5, "Excellent",
    Restaurants[Rating] >= 4.0, "Good",
    Restaurants[Rating] >= 3.0, "Average",
    "Low"
)

// Delivery Status
Delivery Status = IF(Orders[DeliveryTimeMins] > 45, "Late", "On Time")`
    }
  ]
};

function initModals() {
  const modalOverlay = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBody = document.getElementById('modalDynamicContent');

  if (!modalOverlay || !modalBody) return;

  document.querySelectorAll('[data-open-project]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const data = foodDeliveryFullData;

      modalBody.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 16px;">
            <div>
              <span class="badge badge-amber">${data.badge}</span>
              <h2 style="font-size: 1.85rem; margin-top: 8px;">${data.title}</h2>
              <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-cyan); font-family: var(--font-mono); font-size: 0.9rem; display: inline-flex; align-items: center; gap: 6px; margin-top: 4px;">
                <i class="fab fa-github"></i> ${data.githubUrl}
              </a>
            </div>
            <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
              <i class="fab fa-github"></i> Open in GitHub
            </a>
          </div>

          <div style="border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border-card);">
            <img src="assets/images/swiggy_p1_overview.png" alt="Executive Overview" style="width: 100%; aspect-ratio: 16/9; object-fit: cover;">
          </div>

          <div>
            <h4 style="font-size: 1.15rem; margin-bottom: 8px;">Project Overview</h4>
            <p style="font-size: 1rem; line-height: 1.6; color: var(--text-muted);">${data.summary}</p>
          </div>

          <div>
            <h4 style="font-size: 1.15rem; margin-bottom: 12px;">Key Measured KPIs (Live from Report)</h4>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;">
              ${data.kpis.map(k => `
                <div class="mini-kpi-card">
                  <div class="mini-kpi-val">${k.val}</div>
                  <div class="mini-kpi-lbl">${k.lbl}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <div>
            <h4 style="font-size: 1.15rem; margin-bottom: 10px;">Full End-to-End Analytics Workflow</h4>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
              ${data.architectureWorkflow.map(step => `
                <li style="font-size: 0.92rem; color: var(--text-muted); padding-left: 20px; position: relative;">
                  <span style="position: absolute; left: 0; color: var(--accent-cyan);">▹</span> ${step}
                </li>
              `).join('')}
            </ul>
          </div>

          <div>
            <h4 style="font-size: 1.25rem; margin-bottom: 16px; color: var(--text-main); display: flex; align-items: center; gap: 8px;">
              <i class="fas fa-calculator" style="color: var(--accent-amber);"></i> Complete DAX Measures & Calculated Columns
            </h4>
            <div style="display: flex; flex-direction: column; gap: 18px;">
              ${data.daxMeasures.map(measure => `
                <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 18px;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                    <span style="font-family: var(--font-mono); font-size: 0.9rem; font-weight: 700; color: var(--accent-cyan);">${measure.name}</span>
                    <button class="btn btn-sm btn-secondary" onclick="navigator.clipboard.writeText(\`${measure.code.replace(/`/g, '\\`')}\`); this.textContent = 'Copied!'; setTimeout(() => this.textContent = 'Copy DAX', 2000);">
                      <i class="fas fa-copy"></i> Copy DAX
                    </button>
                  </div>
                  <pre style="background: var(--bg-primary); padding: 14px; border-radius: 8px; border: 1px solid var(--border-subtle); overflow-x: auto; font-family: var(--font-mono); font-size: 0.82rem; color: #38bdf8;"><code>${measure.code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;

      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Certificate Open Triggers
  document.querySelectorAll('[data-open-cert]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const certType = trigger.getAttribute('data-open-cert');
      const isPowerBI = certType === 'powerbi';
      const imgSrc = isPowerBI ? 'assets/images/cert_powerbi.jpg' : 'assets/images/cert_excel.jpg';
      const certTitle = isPowerBI ? 'Power BI Specialist Certification' : 'Advanced MS Excel Specialist Certification';

      modalBody.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div style="border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border-card);">
            <img src="${imgSrc}" alt="${certTitle}" style="width: 100%; aspect-ratio: 4/3; object-fit: cover;">
          </div>
          <div>
            <span class="badge ${isPowerBI ? 'badge-amber' : 'badge-emerald'}">Verified Credential | Simplilearn 2026</span>
            <h2 style="font-size: 1.7rem; margin-top: 8px;">${certTitle}</h2>
            <p style="margin-top: 8px;">Awarded to <strong>Singh Adarsh Ramakar</strong> upon rigorous evaluation of data modeling, DAX architecture, automated ETL workflows, and professional business intelligence dashboard delivery.</p>
          </div>
        </div>
      `;

      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) closeModal();
  });

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

/* ===================================================================
   7. CONTACT FORM & INSTANT COPY
   =================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const statusBox = document.getElementById('formStatus');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('senderName').value;
      const email = document.getElementById('senderEmail').value;
      const subject = document.getElementById('senderSubject').value;
      const message = document.getElementById('senderMessage').value;

      if (statusBox) {
        statusBox.className = 'form-status success';
        statusBox.innerHTML = `
          <strong><i class="fas fa-check-circle"></i> Thank you, ${name}!</strong><br>
          Your message has been staged. Dispatching to <strong>adarshsinghas2020@gmail.com</strong>...
        `;
      }

      const mailtoLink = `mailto:adarshsinghas2020@gmail.com?subject=${encodeURIComponent(subject || 'Analytics Opportunity Inquiry')}&body=${encodeURIComponent(`Hi Adarsh,\n\nMy name is ${name} (${email}).\n\n${message}`)}`;
      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 1000);
    });
  }

  document.querySelectorAll('[data-copy-text]').forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy-text');
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2200);
      });
    });
  });
}
