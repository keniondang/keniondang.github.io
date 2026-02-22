// src/data/projectsData.js

export const projectsData = [
  {
    id: "customer-intelligence",
    title: "Customer Intelligence & Retention Dashboard",
    tagline: "Predicting 'silent churn' and automating retention strategies for 46M+ records.",
    category: "Business Intelligence",
    timeSpan: "Nov 2025 - Jan 2026",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop", 
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543286386-713df548e9cc?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
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
      github: "https://github.com/yourusername/project-repo", 
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
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2670&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2670&auto=format&fit=crop"
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
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop"
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
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop"],
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
    metrics: "92% Accuracy"
  },
  {
    id: "recommendation-system",
    title: "E-Commerce Recommender",
    tagline: "Personalized product suggestions using Collaborative Filtering.",
    category: "Recommender Systems",
    timeSpan: "Nov 2024",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2670&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2670&auto=format&fit=crop"],
    description: "Built a matrix factorization model to recommend products to users based on purchase history.",
    summary: ["Using the MovieLens dataset approach, I built a recommender for a mock e-commerce store."],
    achievables: ["Implemented Matrix Factorization (SVD).", "Built a 'Customers who bought this also bought' feature."],
    tech: ["Python", "Scikit-Surprise", "Flask"],
    links: { github: "#" },
    metrics: "+15% CTR"
  },
  {
    id: "finance-dashboard",
    title: "Personal Finance Visualizer",
    tagline: "Interactive dashboard for tracking expenses and investment growth.",
    category: "Data Viz",
    timeSpan: "Oct 2024",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2670&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2670&auto=format&fit=crop"],
    description: "A D3.js powered dashboard to visualize spending habits.",
    summary: ["Connects to CSV exports from banks and categorizes transactions automatically."],
    achievables: ["Built complex interactive charts with D3.js.", "Automated categorization with regex."],
    tech: ["JavaScript", "D3.js", "React"],
    links: { github: "#" },
    metrics: "100+ Users"
  }
];