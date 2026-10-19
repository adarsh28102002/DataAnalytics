export const kpiStripData = [
  { target: 4, suffix: '+', label: 'Years MIS & Analytics Experience', decimals: 0 },
  { target: 50, suffix: '%', label: 'Workload Automation Reduction', decimals: 0 },
  { target: 99.4, suffix: '%', label: 'Data Accuracy & Reconciliation', decimals: 1 }
];

export const experienceData = [
  {
    role: 'MIS Executive',
    company: 'Hathway Cable & Datacom LTD',
    period: 'Dec 2024 – Present',
    location: 'Adajan, Surat',
    bullets: [
      'Improved order backlog reporting effectiveness by <strong>30%</strong> through automated Excel dashboards and <strong>automated data insights</strong>.',
      'Enhanced accuracy of daily/weekly MIS reports, reducing data error by <strong>25%</strong> and supporting faster management decisions.',
      'Streamlined manual reporting tasks using advanced Excel formulas & <strong>Power Query</strong>, saving <strong>6+ hours per week</strong> in operational time.'
    ],
    dotColor: ''
  },
  {
    role: 'Team Lead & MIS',
    company: 'Shadowfax',
    period: 'June 2021 – Oct 2023',
    location: 'Kadodara, Surat',
    bullets: [
      'Automated daily inventory & dispatch reports, reducing manual workload by <strong>50%</strong> and improving reporting speed across the operational team.',
      'Coordinated a team to minimize inventory discrepancies and improved operational efficiency, resulting in <strong>20% faster order processing</strong>.'
    ],
    dotColor: 'emerald'
  }
];

export const skillCategories = [
  {
    title: 'Power BI & DAX',
    badge: 'BUSINESS INTELLIGENCE',
    colorKey: 'amber',
    icon: 'fas fa-chart-bar',
    items: [
      { name: 'Power BI Desktop & Service', level: 95 },
      { name: 'DAX Measures & Time-Intelligence', level: 90 },
      { name: 'Star Schema & Dimensional Modeling', level: 92 },
      { name: 'Power Query (M) Transformations', level: 94 }
    ],
    tags: ['Dynamic Slicers', 'Drill-Through', 'Cross-Filtering', 'KPI Cards']
  },
  {
    title: 'Advanced MS Excel',
    badge: 'SPREADSHEET ENGINEERING',
    colorKey: 'emerald',
    icon: 'fas fa-file-excel',
    items: [
      { name: 'Advanced Formulas (XLOOKUP, LET)', level: 98 },
      { name: 'Excel Power Query ETL Automation', level: 95 },
      { name: 'Pivot Tables & Data Slicers', level: 96 },
      { name: 'Google Sheets & Collaborative MIS', level: 90 }
    ],
    tags: ['Automated Dashboards', 'Data Validation', 'Conditional Logic', 'MIS Automation']
  },
  {
    title: 'Data Transformation & MIS',
    badge: 'ETL & MODELING',
    colorKey: 'purple',
    icon: 'fas fa-layer-group',
    items: [
      { name: 'Power Query Data Cleaning & M-Code', level: 94 },
      { name: 'Backlog & Aging Classification Models', level: 92 },
      { name: 'Data Hygiene, Deduplication & Auditing', level: 95 },
      { name: 'Automated Daily/Weekly MIS Workflows', level: 96 }
    ],
    tags: ['Aging Buckets', 'ETL Automation', 'Discrepancy Audit', 'Ad-Hoc Modeling']
  }
];

export const dashboardPagesData = {
  p1: {
    id: 'p1',
    tabName: 'P1: Overview',
    tabIcon: 'fas fa-chart-line',
    title: 'Page 1: Executive Overview',
    subtitle: 'Core KPIs, Monthly Trends, Revenue by City & Top 10 Restaurants',
    image: 'assets/images/swiggy_p1_overview.png',
    desc: 'High-level business summary providing owners with instant insights into revenue (₹165M), total volume (200K orders), order status breakdown (80.11% delivered, 9.97% cancelled), and top performing outlets.',
    kpis: [
      { val: '₹165M', lbl: 'Total Revenue' },
      { val: '200K', lbl: 'Total Orders' },
      { val: '₹824.57', lbl: 'Avg Order Value' },
      { val: '44.55m', lbl: 'Avg Delivery Time' }
    ],
    features: ['City-Wise Dropdown Filter', 'Revenue by City Horizontal Bars', 'Orders Status Donut Breakdown', 'Top 10 Restaurants Matrix']
  },
  p2: {
    id: 'p2',
    tabName: 'P2: Customer',
    tabIcon: 'fas fa-users',
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
  p3: {
    id: 'p3',
    tabName: 'P3: Restaurant',
    tabIcon: 'fas fa-utensils',
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
  p4: {
    id: 'p4',
    tabName: 'P4: Delivery',
    tabIcon: 'fas fa-motorcycle',
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
  p5: {
    id: 'p5',
    tabName: 'P5: Dynamic KPI',
    tabIcon: 'fas fa-sliders-h',
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
  p6: {
    id: 'p6',
    tabName: 'P6: Drill-Through',
    tabIcon: 'fas fa-search-plus',
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
  model: {
    id: 'model',
    tabName: 'Star Schema',
    tabIcon: 'fas fa-project-diagram',
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

export const foodDeliveryFullData = {
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

export const storeSaleData = {
  id: 'store-sale',
  category: 'powerbi',
  title: 'Retail Store Sale & Performance Dashboard',
  subtitle: 'Store Sale Dashboard | Multi-Store Executive Performance & YoY Analysis',
  tag: 'Latest Power BI Project',
  badge: 'Power BI • YoY DAX • Retail BI',
  githubUrl: 'https://github.com/adarsh28102002/PowerBI-Store-Sale-Dashboard',
  pbixName: 'Store_Sale_Dashboard.pbix',
  records: 'Multi-Store Retail',
  coverImage: 'assets/images/store_sale_overview.png',
  summary: 'Interactive and dynamic Power BI Dashboard engineered to analyze multi-location retail store performance (Stores A, B, C, D) and regional management territories. Delivers real-time executive tracking of net sales ($4.34M), customer reach (1,371), return volumes (372), and discount optimization (7.31%). Features Year-over-Year (YoY) dynamic UNICHAR arrows, traffic-light product color coding, and detailed store manager & salesperson operational matrices.',
  kpis: [
    { val: '$4.34M', lbl: 'Total Net Sales' },
    { val: '1,371', lbl: 'Total Customers' },
    { val: '372', lbl: 'Total Returns' },
    { val: '7.31%', lbl: 'Avg Discount' },
    { val: 'YoY %', lbl: 'Dynamic Arrows' },
    { val: '5 Regions', lbl: 'North, East, West, Central, South' },
    { val: '4 Stores', lbl: 'Stores A, B, C, D' },
    { val: 'Matrix', lbl: 'Store & Rep Audit' }
  ],
  architectureWorkflow: [
    'Raw Data Ingestion & ETL: Loaded retail transactional data (Sheet1), normalized data types, and validated sales, discounts, and return flags.',
    'Automated Date Dimension: Generated dedicated Date table using CALENDAR(MIN(Sheet1[Date]), MAX(Sheet1[Date])) with Month, Year, and Day attributes.',
    'Core KPI Measures: Created high-efficiency DAX formulas for Total Net, Average Discount, DISTINCTCOUNT Total Customers, and Total Returns.',
    'Time Intelligence (YoY Growth): Implemented SAMEPERIODLASTYEAR with dynamic UNICHAR(9650) / UNICHAR(9660) directional indicators and conditional formatting.',
    'Dynamic Traffic-Light Logic: Programmed custom HEX color switching measures (#2ECC71 green, #E74C3C red, and dark red/pink gradient for max/min product sales).',
    'Executive Cockpit & Operational Audit: Built Executive Overview with multi-select slicers (Year, Location, Manager, Type, Payment) and granular store matrix tables.'
  ],
  daxMeasures: [
    {
      name: 'Date Table Creation (Contiguous Calendar Dimension)',
      code: `Date = CALENDAR(MIN(Sheet1[Date]), MAX(Sheet1[Date]))
Month = MONTH('Date'[Date])
Year = YEAR('Date'[Date])
Day = DAY('Date'[Date])`
    },
    {
      name: 'Core KPI Measures (Sales, Discounts, Customers, Returns)',
      code: `Total Net = SUM(Sheet1[Net Total])

Average Discount = AVERAGE(Sheet1[Discount])

Total Customer = DISTINCTCOUNT(Sheet1[CustomerName])

Total Return = SUM(Sheet1[Returned])`
    },
    {
      name: 'Previous Year Comparison & Growth Arrows (YoY)',
      code: `Previous Year = 
VAR PY = CALCULATE([Total Net], SAMEPERIODLASTYEAR('Date'[Date]))
VAR CY = [Total Net]
VAR Pct = IF(PY = 0 || ISBLANK(PY), BLANK(), DIVIDE(CY - PY, PY))
VAR Arrow = IF(CY >= PY, UNICHAR(9650), UNICHAR(9660)) /* Up or Down Arrow */
RETURN
IF(
    ISBLANK(PY) || PY = 0,
    BLANK(),
    FORMAT(Pct, "0.00%") & " " & Arrow
)`
    },
    {
      name: 'Dynamic Arrow Conditional Color Formatting',
      code: `Arrow Color = 
VAR PY = CALCULATE([Total Net], SAMEPERIODLASTYEAR('Date'[Date]))
VAR CY = [Total Net]
RETURN
IF(
    ISBLANK(PY) || PY = 0,
    BLANK(),
    IF(CY >= PY, "#2ECC71", "#E74C3C") /* Green for up, Red for down */
)`
    },
    {
      name: 'Dynamic Color for Bar Charts (Traffic Light Logic)',
      code: `Product Color Segment = 
VAR CitySales = [Total Net]
VAR MaxSales = MAXX(ALLSELECTED(Sheet1[Product]), [Total Net])
VAR MinSales = MINX(ALLSELECTED(Sheet1[Product]), [Total Net])
RETURN
SWITCH(
    TRUE(),
    CitySales = MaxSales, "#DD2D4A", /* Dark Red for Highest */
    CitySales = MinSales, "#F26A8D", /* Light Pink for Lowest */
    "#F49CBB"                        /* Neutral Pink for Others */
)`
    },
    {
      name: 'Dynamic KPI Selection (Disconnected Parameter Table)',
      code: `KPI List = 
DATATABLE(
    "KPI Name", STRING,
    "Sort", INTEGER,
    {
        {"Total Net", 1},
        {"Average Discount", 2},
        {"Total Return", 3},
        {"Total Customer", 4}
    }
)

Selected KPI Value = 
SWITCH(
    SELECTEDVALUE('KPI List'[KPI Name]),
    "Total Net", [Total Net],
    "Average Discount", [Average Discount],
    "Total Return", [Total Return],
    "Total Customer", [Total Customer],
    BLANK()
)`
    }
  ],
  pages: {
    overview: {
      id: 'overview',
      tabName: 'Executive Summary',
      tabIcon: 'fas fa-chart-line',
      title: 'Executive Store Sale Summary',
      subtitle: 'Core KPIs, Product Breakdown, Monthly Trends & Multi-Criteria Slicers',
      image: 'assets/images/store_sale_overview.png',
      desc: 'Real-time executive cockpit tracking Total Net Sales ($4.34M), Customer reach (1,371), Returns (372), and Average Discount (7.31%) alongside Year-over-Year (YoY) comparison. Features slicers for Year, Location, Region Manager, Customer Type, and Payment Method.',
      kpis: [
        { val: '$4.34M', lbl: 'Total Net Sales' },
        { val: '1,371', lbl: 'Total Customers' },
        { val: '372', lbl: 'Total Returns' },
        { val: '7.31%', lbl: 'Avg Discount' }
      ],
      features: ['YoY Comparison with Dynamic Arrows', 'Net by Product Traffic Light Bars', 'Area Seasonal Monthly Trend', 'Donut Customer & Payment Split']
    },
    tables: {
      id: 'tables',
      tabName: 'Store & Staff Audit',
      tabIcon: 'fas fa-table',
      title: 'Detailed Store & Salesperson Data Matrices',
      subtitle: 'Region Manager Contribution, Individual Store Benchmarks & Product Matrix',
      image: 'assets/images/store_sale_tables.png',
      desc: 'Operational drill-down matrices providing cross-tabulation across Stores A, B, C, and D. Enables region managers and franchise owners to audit individual salesperson metrics, product performance per store, and regional targets.',
      kpis: [
        { val: 'Stores A-D', lbl: 'Store Outlets' },
        { val: 'Managers', lbl: 'Territory Audit' },
        { val: 'Sales Staff', lbl: 'Rep Contribution' },
        { val: 'Cross-Tab', lbl: 'Product Line Matrix' }
      ],
      features: ['Region Manager Performance Matrix', 'Store-wise Salesperson Contribution', 'Product vs Location Cross-Tabulation', 'Hierarchical Matrix Drill']
    },
    datetable: {
      id: 'datetable',
      tabName: 'Date Modeling',
      tabIcon: 'fas fa-calendar-alt',
      title: 'Automated Date Dimension Architecture',
      subtitle: 'Continuous Date Table Generation & Time Intelligence Modeling',
      image: 'assets/images/store_sale_datetable.png',
      desc: 'Engineered DAX CALENDAR data pipeline establishing a contiguous date dimension from minimum to maximum transaction dates, enabling SAMEPERIODLASTYEAR and time-series aggregations without gaps.',
      kpis: [
        { val: 'CALENDAR', lbl: 'DAX Generation' },
        { val: 'SAMEPERIOD', lbl: 'Time Intelligence' },
        { val: 'Dynamic', lbl: 'Year/Month Slicing' },
        { val: 'Zero Gaps', lbl: 'Contiguous Dates' }
      ],
      features: ['Auto Date Boundary Detection', 'Month / Year / Day Dimension Fields', 'Contiguous Time-Series Anchor', 'Time-Intelligence Compatibility']
    },
    dax_kpis: {
      id: 'dax_kpis',
      tabName: 'DAX Measures',
      tabIcon: 'fas fa-code',
      title: 'Core KPI DAX Architecture & Conditional Logic',
      subtitle: 'SUM, AVERAGE, DISTINCTCOUNT & Conditional Format Measures',
      image: 'assets/images/store_sale_kpis.png',
      desc: 'Production-tested DAX calculation expressions computing net sales, discount percentages, customer counts, and returns, coupled with programmatic conditional formatting rules.',
      kpis: [
        { val: 'SUM / AVG', lbl: 'Aggregation Measures' },
        { val: 'DISTINCT', lbl: 'Customer Counting' },
        { val: 'UNICHAR', lbl: 'Dynamic Indicator Icons' },
        { val: 'HEX Logic', lbl: 'Color Measures' }
      ],
      features: ['DISTINCTCOUNT Customer Logic', 'Dynamic Return Aggregation', 'Programmatic Arrow UNICHAR', 'Conditional Hex Color Output']
    }
  },
  deepdive: {
    workflow: [
      {
        num: '1.',
        title: 'Power Query & Data Cleaning',
        text: 'Loaded retail sales data (Sheet1), normalized column data types, handled text anomalies, and established data hygiene for robust calculation.'
      },
      {
        num: '2.',
        title: 'Date Dimension & Star-Like Architecture',
        text: 'Generated a dedicated Date table using DAX CALENDAR, ensuring seamless time-intelligence calculations without data gaps.'
      },
      {
        num: '3.',
        title: 'YoY Growth & Conditional DAX Formatting',
        text: 'Programmed SAMEPERIODLASTYEAR calculations with dynamic UNICHAR arrows (▲ / ▼) and color-coded hex measures (#2ECC71 / #E74C3C).'
      }
    ],
    highlights: [
      {
        icon: '✔',
        title: 'Executive KPI Cockpit',
        text: 'Instant visibility into $4.34M in sales, 1,371 customers, and discounts with live multi-select filtering.'
      },
      {
        icon: '✔',
        title: 'Traffic-Light Bar Styling',
        text: 'Custom DAX measure switches highest and lowest product sales to dark red and pink tones dynamically.'
      },
      {
        icon: '✔',
        title: 'Operational Drill Matrices',
        text: 'Multi-store matrices evaluate store manager performance and salesperson quotas across Stores A, B, C, and D.'
      }
    ]
  }
};

export const foodDeliveryProjectData = {
  id: 'food-delivery',
  category: 'powerbi',
  title: 'Food Delivery Analytics Dashboard',
  subtitle: 'Comprehensive 6-Page BI Suite Analyzing ~200,000 Food Delivery Transactions',
  tag: 'Flagship Power BI Project',
  badge: 'Power BI • Star Schema • DAX',
  githubUrl: 'https://github.com/adarsh28102002/food.swig.analystis',
  pbixName: 'Food_Delivery_Analytics.pbix',
  records: '~200,000 Transactions',
  coverImage: 'assets/images/swiggy_p1_overview.png',
  summary: foodDeliveryFullData.summary,
  kpis: foodDeliveryFullData.kpis,
  architectureWorkflow: foodDeliveryFullData.architectureWorkflow,
  daxMeasures: foodDeliveryFullData.daxMeasures,
  pages: dashboardPagesData,
  deepdive: {
    workflow: [
      {
        num: '1.',
        title: 'Power Query ETL',
        text: 'Ingested ~200K records from Kaggle, performed type coercion, cleaned city text, handled missing fields, and generated clean calculated columns.'
      },
      {
        num: '2.',
        title: 'Star Schema Modeling',
        text: 'Separated transaction facts (Orders) from dimensions (Customers, Restaurants, DateTable) with clean 1-to-many relationships and single-direction filtering.'
      },
      {
        num: '3.',
        title: 'Advanced DAX Measures',
        text: 'Developed measures for Total Revenue, Total Orders, AOV, Delivered %, Cancellation %, Late Delivery %, Repeat Customers, and MoM Growth.'
      }
    ],
    highlights: [
      {
        icon: '✔',
        title: 'Dynamic KPI Parameter',
        text: 'Disconnected parameter table + SELECTEDVALUE DAX to swap chart metrics without duplicating visuals.'
      },
      {
        icon: '✔',
        title: 'Contextual Drill-Through',
        text: 'Right-click on any restaurant name to navigate straight to an isolated store diagnostic page.'
      },
      {
        icon: '✔',
        title: 'Delivery SLA Diagnostics',
        text: 'Segmented order delivery times (≤45m vs >45m) to pinpoint operational bottlenecks across courier fleets.'
      }
    ]
  }
};

export const allProjects = [storeSaleData, foodDeliveryProjectData];

export const certificationsData = [
  {
    id: 'powerbi',
    title: 'Power BI Specialist Certification',
    issuer: 'Simplilearn Verified',
    year: '2026',
    credentialId: 'SL-PBIS-876543',
    img: 'assets/images/cert_powerbi.jpg',
    badgeClass: 'badge-amber',
    skills: ['DAX Modeling', 'Power Query ETL', 'Star Schema', 'Dashboard UX'],
    desc: 'Awarded to Singh Adarsh Ramakar upon rigorous evaluation of data modeling, DAX architecture, automated ETL workflows, and professional business intelligence dashboard delivery.'
  },
  {
    id: 'excel',
    title: 'Advanced MS Excel Specialist',
    issuer: 'Simplilearn Verified',
    year: '2026',
    credentialId: 'SL-2023-AX-874',
    img: 'assets/images/cert_excel.jpg',
    badgeClass: 'badge-emerald',
    skills: ['Dynamic Formulas', 'Power Query Automation', 'Pivot Reporting', 'MIS Modeling'],
    desc: 'Awarded to Singh Adarsh Ramakar upon demonstration of advanced spreadsheet engineering, Power Query M transformations, dynamic lookups, and executive report automation.'
  }
];

