// src/data/projectsData.js

export const projectsData = [
  {
    id: "customer-intelligence",
    title: "Customer Intelligence & Retention Analytics Dashboard",
    tagline: "Predicting 'silent churn' and automating retention strategy across 46M+ records.",
    category: "Business Intelligence",
    timeSpan: "Nov 2025 - Jan 2026",
    // TODO: replace these stock images with REAL screenshots of your dashboard / model output.
    // Put files in public/assets/projects/ and use paths like "/assets/projects/churn-1.png".
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543286386-713df548e9cc?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
    ],
    description: "In-depth EDA on a 46M+ record e-commerce dataset to uncover behavior patterns, segment profiles, and retention risk signals, paired with a dual-stage churn model.",
    summary: [
      "In a competitive online retail market, generic marketing fails to engage diverse shopper segments, and manual analysis cannot reliably predict churn or surface cross-selling opportunities.",
      "I conducted in-depth Exploratory Data Analysis on 46M+ records to uncover customer behavior patterns and retention risk signals, then engineered a dual-stage predictive system: K-Means segmentation feeding an XGBoost churn model. SHAP analysis translated the model into clear, communicable drivers of churn for stakeholders, supporting targeted retention program design."
    ],
    achievables: [
      "Conducted in-depth EDA on a 46M+ record e-commerce sales dataset to uncover customer behavior patterns, segment profiles, and retention risk signals.",
      "Engineered 47 behavioral features and applied SHAP analysis to identify and communicate the key drivers of customer churn to non-technical stakeholders.",
      "Architected a dual-stage predictive model using K-Means segmentation and XGBoost churn scoring, achieving 80.62% ROC-AUC.",
      "Built scalable ETL pipelines to ingest and transform raw records, ensuring high data integrity for downstream analytics and modeling."
    ],
    tech: ["Python", "K-Means Clustering", "XGBoost", "SHAP", "ETL", "Power BI"],
    hasChurnExplorer: true,
    links: {
      github: "https://github.com/keniondang",
      demo: null,
      report: "PLACEHOLDER_DRIVE_REPORT_customer_intelligence" // replace with this project's Google Drive report link
    },
    metrics: "Information Technology Project (TDTU)"
  },
  {
    id: "indonesian-consumer-behavior",
    title: "Indonesian Digital Consumer Behavior Analysis",
    tagline: "Mapping Indonesia's digital market: e-commerce, app rankings, and Gen Z payment behavior.",
    category: "Market Research",
    timeSpan: "2025",
    // TODO: replace with real screenshots (Power BI / EDA charts) — /assets/projects/indo-1.png etc.
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
    ],
    description: "Built a market analytics foundation on Indonesian digital consumer behavior, translating raw data into product recommendations for the Indonesian market.",
    summary: [
      "Entering the Indonesian digital market requires more than intuition. I built a data-backed view of how Indonesian consumers actually behave online, from e-commerce trends to digital payment adoption.",
      "I collected and processed public datasets spanning e-commerce trends, app store rankings, and digital payment adoption, then ran EDA in Python and aggregated large-scale data in SQL to surface where the market is moving, identifying significant growth in mobile commerce and Gen Z digital spending, and visualized it all in Power BI for non-technical stakeholders."
    ],
    achievables: [
      "Collected and processed public datasets on Indonesian digital consumer behavior spanning e-commerce trends, app store rankings, and digital payment adoption.",
      "Conducted EDA with Python (Pandas, Matplotlib, Seaborn) to identify key consumer trends, spending patterns, and digital adoption behaviors across demographics.",
      "Queried and aggregated large-scale datasets in SQL, identifying significant growth in mobile commerce and Gen Z digital spending habits.",
      "Developed interactive Power BI dashboards, translating raw data into clear, actionable product recommendations for the Indonesian digital market."
    ],
    tech: ["Python", "Pandas", "SQL", "Power BI", "Market Research", "EDA"],
    links: { github: "https://github.com/keniondang", demo: null, report: "PLACEHOLDER_DRIVE_REPORT_indonesian_consumer" },
    metrics: "Independent Research"
  },
  {
    id: "datathon-stormcast",
    title: "StormCast — Financial Regression & Decisioning Engine",
    tagline: "2nd of 134 teams at Data Storm 2025; 1st in the 24-hour modeling sprint.",
    category: "Predictive Analytics",
    timeSpan: "Jan 2026",
    // TODO: replace with real screenshots (StormCast dashboard / charts) — /assets/projects/storm-1.png etc.
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2670&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2670&auto=format&fit=crop"
    ],
    description: "Led a team of 4 to 2nd place among 134 teams, engineering a financial regression pipeline on banking datasets to forecast transaction liquidity and spending power.",
    summary: [
      "Data Storm 2025 was a national datathon: 134 teams, banking datasets, and a 24-hour sprint. The challenge was forecasting transaction liquidity and spending power under real uncertainty.",
      "I led a team of four, engineering a financial regression pipeline that ranked 1st in the 24-hour Hackathon sprint and carried us to 2nd place overall. We built a full-stack analytics engine featuring causal inference modeling, supply-risk forecasting, and real-time Power BI dashboarding to support business decision-making."
    ],
    achievables: [
      "Led a team of 4 to 2nd place among 134 competing teams; ranked 1st in the 24-hour Hackathon modeling sprint.",
      "Engineered a financial regression pipeline on banking datasets to forecast transaction liquidity and spending power.",
      "Developed Causal LightGBM logic to optimize risk-adjusted margins under uncertainty.",
      "Built a full-stack analytics engine (ReactJS, FastAPI) with causal inference, supply-risk forecasting, and real-time Power BI dashboarding."
    ],
    tech: ["Python", "LightGBM", "Causal Inference", "FastAPI", "ReactJS", "Power BI"],
    links: { github: "https://github.com/keniondang", demo: null, report: "PLACEHOLDER_DRIVE_REPORT_stormcast" },
    metrics: "Vietnam Datathon — 2nd / 134 teams"
  },
  {
    id: "predictive-pricing-inventory",
    title: "Predictive Pricing & Inventory Intelligence",
    tagline: "Forecasting optimal buy/sell prices and automating store-level stocking decisions.",
    category: "Predictive Analytics",
    timeSpan: "2025",
    // TODO: replace with real screenshots — /assets/projects/pricing-1.png etc.
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2670&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2670&auto=format&fit=crop"
    ],
    description: "An XGBoost & Random Forest pipeline that predicts optimal buy/sell prices and sales volumes, paired with a FastAPI optimization engine that automates store-level buy/reject decisions.",
    summary: [
      "Pricing and stocking decisions in a fast-moving resale market are hard to get right by hand — they depend on product age, holding costs, and shifting demand.",
      "I built a predictive pipeline using XGBoost and Random Forest to forecast optimal buy/sell prices and sales volumes, modeling factors like phone age, holding costs, and historical trends. On top of it, I deployed a Greedy Search optimization engine via FastAPI that automates store-level 'buy' or 'reject' decisions based on real-time stock levels and forecasted demand."
    ],
    achievables: [
      "Developed an XGBoost and Random Forest pipeline to predict optimal buy/sell prices and sales volumes, modeling phone age, holding costs, and historical trends.",
      "Deployed a Greedy Search optimization engine via FastAPI that automates store-level buy/reject decisions based on real-time stock levels and forecasted demand.",
      "Designed the system to turn raw inventory and pricing data into actionable, automated decisioning."
    ],
    tech: ["Python", "XGBoost", "Random Forest", "FastAPI", "Greedy Search Optimization"],
    links: { github: "https://github.com/keniondang", demo: null, report: null },
    metrics: "Personal Project"
  },
  {
    id: "zumath-educational-game",
    title: "Zumath — Python Educational Game",
    tagline: "A Zuma-inspired math game that reinforces concepts through gamified play.",
    category: "Software / EdTech",
    timeSpan: "2022",
    // TODO: replace with real screenshots — /assets/projects/zumath-1.png etc.
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=2670&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=2670&auto=format&fit=crop"
    ],
    description: "A Python-based math learning game inspired by Zuma, built for the SEAMEO competition to make mathematics engaging through gamification.",
    summary: [
      "Built for the SEAMEO competition (associated with Sophos School Indonesia), Zumath set out to make learning math genuinely fun rather than a chore.",
      "I developed a Python-based math learning game inspired by Zuma, blending educational content with arcade-style gameplay. Pygame handled the game physics, Tkinter the interface, and NumPy the mathematical computations behind the puzzles — all designed to reinforce mathematical concepts through play."
    ],
    achievables: [
      "Developed a Python-based math learning game inspired by Zuma, integrating educational gameplay.",
      "Implemented Pygame for game physics, Tkinter for the UI, and NumPy for mathematical computations.",
      "Designed an interactive, engaging interface to reinforce mathematical concepts through gamification."
    ],
    tech: ["Python", "Pygame", "NumPy", "Tkinter", "PyCharm"],
    links: { github: "https://github.com/keniondang", demo: null, report: null },
    metrics: "SEAMEO Competition · Sophos School Indonesia"
  },
  {
    id: "pos-web-application",
    title: "Point of Sale (POS) Web Application",
    tagline: "A full POS system for sales, inventory, and employees with real-time analytics.",
    category: "Full-Stack / Web",
    timeSpan: "2024",
    // TODO: replace with real screenshots — /assets/projects/pos-1.png etc.
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2670&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2670&auto=format&fit=crop"
    ],
    description: "A web-based POS system for managing sales, inventory, and employees, with secure authentication, real-time transactions, and interactive analytics.",
    summary: [
      "Built as the final project for TDTU's Web Programming & Application course, this POS system covers the full retail workflow — sales, inventory, and staff management — in one web app.",
      "I implemented secure login with admin-controlled account creation and email-based authentication, a real-time transaction system with dynamic cart updates and PDF invoice generation, and interactive sales reports powered by Chart.js and DataTables.js for real-time analytics."
    ],
    achievables: [
      "Developed a POS system for managing sales, inventory, and employees.",
      "Implemented secure login with admin-controlled account creation and email-based authentication.",
      "Built a real-time transaction system with dynamic cart updates and PDF invoice generation.",
      "Designed interactive sales reports with Chart.js and DataTables.js for real-time analytics."
    ],
    tech: ["PHP", "MySQL", "JavaScript", "AJAX", "jQuery", "Bootstrap", "Chart.js", "DataTables.js"],
    links: { github: "https://github.com/keniondang", demo: null, report: null },
    metrics: "Course Final Project (TDTU) · Team · Graded 9.5"
  }
];
