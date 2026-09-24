// src/data/projectsData.js

export const projectsData = [
  {
    id: "customer-intelligence",
    title: "Customer Intelligence & Retention Dashboard",
    tagline: "Predicting 'silent churn' and automating retention strategies for 46M+ records.",
    category: "Business Intelligence",
    timeSpan: "Nov 2025 - Feb 2026",
    image: `${process.env.PUBLIC_URL}/images/projects/customer-intelligence-1.jpg`,
    gallery: [
      `${process.env.PUBLIC_URL}/images/projects/customer-intelligence-1.jpg`,
      `${process.env.PUBLIC_URL}/images/projects/customer-intelligence-2.jpg`,
      `${process.env.PUBLIC_URL}/images/projects/customer-intelligence-3.jpg`
    ],
    description: "Engineered a high-volume pipeline for 46M+ records to predict 'silent churn' and automate retention strategies utilizing K-Means segmentation, churn prediction models and recommendation systems.",
    summary: [
      "In the competitive online retail market, generic marketing strategies fail to engage diverse shopper segments, and manual analysis cannot predict churn or identify cross-selling opportunities effectively.",
      "I engineered a full-stack intelligence platform using FastAPI and React, utilizing K-Means for customer segmentation and XGBoost to predict churn risks with 80% accuracy. Additionally, I integrated a personalized Recommendation System that suggests relevant products to specific user clusters, enabling data-driven cross-selling and proactive retention strategies."
    ],
    achievables: [
      "Architected a dual-stage predictive system on a 46M+ record dataset using K-Means for segmentation and XGBoost for churn scoring, achieving an 80.62% ROC-AUC.",
      "Cleaned all records by engineering a robus preprocessing pipeline resolving data anomalies",
      "Developed an ALS Matrix Factorization model for implicit data, reaching a 49.6% Hit Rate bybalancing automated replenishment with algorithmic discovery.",
      "Engineered 47 behavioral features and utilized SHAP analysis to transparently identify and communicate key risk drivers to stakeholders.",
      "Built a prototype with FastAPI and React.js, optimizing real-time inference by preloading 2GB of serialized models for low-latency performance."
    ],
    tech: ["Python", "JavaScript", "K-Means Clustering", "XGBoost", "SMOTE", "SHAP", "Elbow Method", "Silhouette Score"],
    links: {
      github: "#",
      demo: "#",
      report: "/assets/reports/customer-intelligence.pdf"
    },
    metrics: "Information Technology Project (TDTU)"
  },
  {
    id: "profit-forecast",
    title: "Predictive Asset Valuation & Velocity Engine",
    tagline: "Balancing inventory costs against sales demand to maximize Net Profit.",
    category: "Predictive Analytics",
    timeSpan: "Jun 2025 - Jul 2025",
    image: `${process.env.PUBLIC_URL}/images/projects/profit-forecast-1.jpg`,
    gallery: [
      `${process.env.PUBLIC_URL}/images/projects/profit-forecast-1.jpg`,
      `${process.env.PUBLIC_URL}/images/projects/profit-forecast-2.jpg`,
      `${process.env.PUBLIC_URL}/images/projects/profit-forecast-3.jpg`
    ],
    description: "Engineered a real-time valuation engine using XGBoost and Time-Series forecasting to optimize trade-in margins for the secondary mobile market",
    summary: [
      "Most forecasting models optimize for MAPE (Error), but a 5% error in a low-margin product hurts more than a 5% error in a high-margin one. I shifted the loss function to directly optimize for Net Profit.",
      "Using LightGBM with a custom objective function, the model penalizes under-forecasting high-margin items more severely than over-forecasting low-cost items."
    ],
    achievables: [
      "Built an end-to-end platform using Flask and SQL Server, managing everything from relational schema design and ETL pipelines to real-time API deployment.",
      "Engineered a Multi-Quantile Pricing Engine (XGBoost & LGBM) to forecast floor and ceiling valuations, utilizing SHAP for automated appraisal transparency across 70+ device models.",
      "Implemented Time-Series models (Prophet) with custom logistic growth to predict inventory needs, factoring in device lifecycle decay and successor-release impacts.",
      "Developed a real-time engine to classify sales velocity (Prime vs. Aging stock) by integrating 90-day rolling historical trends into automated buy-back logic."
    ],
    tech: ["Python", "XGBoost", "Random Forest", "Time-Series Forecasting", "FastAPI", "Microsoft SQL Server", "ReactJS", "Docker"],
    links: { github: "#", demo: "#" },
    metrics: "Personal Project"
  },
  {
    id: "predictive-pricing",
    title: "Full-Stack Microservices Restaurant Information System.",
    tagline: "Streamlining enterprise operations through a fault-tolerant, event-driven microservices architecture to ensure high availability.",
    category: "Software Architecture",
    timeSpan: "Nov 2024 - Dec 2024",
    image: `${process.env.PUBLIC_URL}/images/projects/predictive-pricing-1.jpg`,
    gallery: [
      `${process.env.PUBLIC_URL}/images/projects/predictive-pricing-1.jpg`,
      `${process.env.PUBLIC_URL}/images/projects/predictive-pricing-2.jpg`,
      `${process.env.PUBLIC_URL}/images/projects/predictive-pricing-3.jpg`
    ],
    description: "Designed a scalable microservices system with .NET Core and Apache Kafka to automate enterprise operations with 99.9% uptime.",
    summary: [
      "In the hospitality industry, manual workflows create operational bottlenecks that frustrate customers and cause order errors during peak hours. Traditional point-of-sale systems often fail to synchronize front-of-house orders with kitchen operations in real-time.",
      "I engineered a scalable, event-driven microservices system using .NET Core and Apache Kafka. The solution digitizes the entire lifecycle—from QR-code ordering to real-time Kitchen Display Screens (KDS)—automating workflow coordination to eliminate errors and ensuring 99.5% operational uptime under heavy load."
    ],
    achievables: [
      "Architected a microservices system using C# ASP.NET Core and Docker, leveraging PostgreSQL, MongoDB, and Apache Kafka for polyglot persistence and real-time event streaming.",
      "Applied Factory, Singleton, and Observer patterns to build decoupled, autonomous services, ensuring high scalability and 99.9% system uptime.",
      "Validated system through load testing for 150 concurrent users, achieving 99.5% order accuracy and sub-second notification speeds to streamline kitchen operations."
    ],
    tech: ["C#", "ASP.NET Core 8 Web API", "CQRS Pattern", "PostgreSQL", "MongoDB", "Apache Kafka", "ReactJS", "Docker", "Nginx"],
    links: { github: "#", demo: "#" },
    metrics: "Software Engineering Project (TDTU)"
  },
  {
    id: "nlp-sentiment",
    title: "NLP Sentiment Analyzer",
    tagline: "Real-time social media sentiment tracking for brand monitoring.",
    category: "NLP & AI",
    timeSpan: "Dec 2024 - Jan 2025",
    image: `${process.env.PUBLIC_URL}/images/projects/nlp-sentiment-1.jpg`,
    gallery: [
      `${process.env.PUBLIC_URL}/images/projects/nlp-sentiment-1.jpg`,
      `${process.env.PUBLIC_URL}/images/projects/nlp-sentiment-2.jpg`,
      `${process.env.PUBLIC_URL}/images/projects/nlp-sentiment-3.jpg`
    ],
    description: "Analyzing customer sentiment across Twitter and Reddit to detect PR crises early.",
    summary: [
      "Brands need to know when public sentiment turns negative. This tool ingests live tweets and uses a BERT-based model to classify sentiment.",
      "It alerts PR teams via Slack when negative sentiment spikes beyond a threshold."
    ],
    achievables: [
      "Fine-tuned BERT model achieving 92% accuracy.",
      "Integrated with Slack API for real-time alerts.",
      "Processed 10k+ tweets/hour."
    ],
    tech: ["Python", "BERT", "HuggingFace", "Kafka"],
    links: { github: "#" },
    metrics: "NLP Project (TDTU)"
  },
  {
    id: "finance-dashboard",
    title: "Personal Finance Visualizer",
    tagline: "Interactive dashboard for tracking expenses and investment growth.",
    category: "Data Viz",
    timeSpan: "Oct 2024",
    image: `${process.env.PUBLIC_URL}/images/projects/finance-dashboard-1.jpg`,
    gallery: [
      `${process.env.PUBLIC_URL}/images/projects/finance-dashboard-1.jpg`,
      `${process.env.PUBLIC_URL}/images/projects/finance-dashboard-2.jpg`,
      `${process.env.PUBLIC_URL}/images/projects/finance-dashboard-3.jpg`
    ],
    description: "A D3.js powered dashboard to visualize spending habits.",
    summary: ["Connects to CSV exports from banks and categorizes transactions automatically."],
    achievables: ["Built complex interactive charts with D3.js.", "Automated categorization with regex."],
    tech: ["JavaScript", "D3.js", "React"],
    links: { github: "#" },
    metrics: "Personal Project"
  },
  {
    id: "datathon-stormcast",
    title: "StormCast: Financial Regression & Decisioning Engine",
    tagline: "2nd of 134 teams at Data Storm 2025; 1st in the 24-hour modeling sprint.",
    category: "Predictive Analytics",
    timeSpan: "Jan 2026",
    image: `${process.env.PUBLIC_URL}/images/projects/datathon-stormcast-1.jpg`,
    gallery: [
      `${process.env.PUBLIC_URL}/images/projects/datathon-stormcast-1.jpg`,
      `${process.env.PUBLIC_URL}/images/projects/datathon-stormcast-2.jpg`,
      `${process.env.PUBLIC_URL}/images/projects/datathon-stormcast-3.jpg`
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
    links: { github: "#", demo: "#" },
    metrics: "Vietnam Datathon · 2nd of 134 teams"
  },
  {
    id: "zumath-educational-game",
    title: "Zumath: Python Educational Game",
    tagline: "A Zuma-inspired math game that reinforces concepts through gamified play.",
    category: "Software / EdTech",
    timeSpan: "2022",
    image: `${process.env.PUBLIC_URL}/images/projects/zumath-educational-game-1.jpg`,
    gallery: [
      `${process.env.PUBLIC_URL}/images/projects/zumath-educational-game-1.jpg`,
      `${process.env.PUBLIC_URL}/images/projects/zumath-educational-game-2.jpg`,
      `${process.env.PUBLIC_URL}/images/projects/zumath-educational-game-3.jpg`
    ],
    description: "A Python-based math learning game inspired by Zuma, built for the SEAMEO competition to make mathematics engaging through gamification.",
    summary: [
      "Built for the SEAMEO competition (associated with Sophos School Indonesia), Zumath set out to make learning math genuinely fun rather than a chore.",
      "I developed a Python-based math learning game inspired by Zuma, blending educational content with arcade-style gameplay. Pygame handled the game physics, Tkinter the interface, and NumPy the mathematical computations behind the puzzles, all designed to reinforce mathematical concepts through play."
    ],
    achievables: [
      "Developed a Python-based math learning game inspired by Zuma, integrating educational gameplay.",
      "Implemented Pygame for game physics, Tkinter for the UI, and NumPy for mathematical computations.",
      "Designed an interactive, engaging interface to reinforce mathematical concepts through gamification."
    ],
    tech: ["Python", "Pygame", "NumPy", "Tkinter", "PyCharm"],
    links: { github: "#" },
    metrics: "SEAMEO Competition · Sophos School Indonesia"
  },
  {
    id: "pos-web-application",
    title: "Point of Sale (POS) Web Application",
    tagline: "A full POS system for sales, inventory, and employees with real-time analytics.",
    category: "Full-Stack / Web",
    timeSpan: "2024",
    image: `${process.env.PUBLIC_URL}/images/projects/pos-web-application-1.jpg`,
    gallery: [
      `${process.env.PUBLIC_URL}/images/projects/pos-web-application-1.jpg`,
      `${process.env.PUBLIC_URL}/images/projects/pos-web-application-2.jpg`,
      `${process.env.PUBLIC_URL}/images/projects/pos-web-application-3.jpg`
    ],
    description: "A web-based POS system for managing sales, inventory, and employees, with secure authentication, real-time transactions, and interactive analytics.",
    summary: [
      "Built as the final project for TDTU's Web Programming & Application course, this POS system covers the full retail workflow (sales, inventory, and staff management) in one web app.",
      "I implemented secure login with admin-controlled account creation and email-based authentication, a real-time transaction system with dynamic cart updates and PDF invoice generation, and interactive sales reports powered by Chart.js and DataTables.js for real-time analytics."
    ],
    achievables: [
      "Developed a POS system for managing sales, inventory, and employees.",
      "Implemented secure login with admin-controlled account creation and email-based authentication.",
      "Built a real-time transaction system with dynamic cart updates and PDF invoice generation.",
      "Designed interactive sales reports with Chart.js and DataTables.js for real-time analytics."
    ],
    tech: ["PHP", "MySQL", "JavaScript", "AJAX", "jQuery", "Bootstrap", "Chart.js", "DataTables.js"],
    links: { github: "#" },
    metrics: "Cross Platform Application Project (TDTU)"
  }
];
