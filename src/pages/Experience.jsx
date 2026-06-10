import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight, Award, Linkedin, ExternalLink } from 'lucide-react';
import Placeholder from '../components/Placeholder';
import Logo from '../components/Logo';
import Gallery from '../components/Gallery';

// --- LINKS (replace with your real LinkedIn / social content link) ---
const FPT_SOCIAL_URL = "PLACEHOLDER_LINKEDIN_SOCIAL_CONTENT_LINK"; // e.g. an FPT IS LinkedIn post you made

// --- DATA ---
const experiences = [
  {
    role: "AI Chatbot Content & Experience Intern",
    company: "AI Hay",
    logo: "PLACEHOLDER_ai_hay_logo", // drop /assets/logos/ai-hay.png here later
    period: "Apr 2026 - Present",
    description: "AI Hay is FAI Tech's flagship AI knowledge discovery platform with 10M+ downloads, ranked #2 in Vietnam for MAUs (Sensor Tower, 2025). As it prepared to launch Imely, an AI companion app, in Indonesia, I served as the primary Indonesian market intelligence resource for the CEO and Product Team, owning the research that shaped product positioning and go-to-market strategy.",
    longDescription: "[Expand on AI Hay here: tell the fuller story of the research you led, how a typical week looked, how your findings actually changed product decisions, what you learned about the Indonesian market, and how you worked with the CEO, product, marketing, and engineering teams.]",
    achievements: [
      "Spearheaded an end-to-end Indonesian market research and viability assessment for Imely, covering market sizing, competitor landscape, consumer behavior, user acquisition, and regulatory compliance.",
      "Conducted product research on direct and indirect AI competitors in Indonesia, mapping the competitive landscape to identify an unaddressed market gap and deliver strategic differentiation recommendations.",
      "Identified key Indonesian consumer behavioral drivers, translating cultural insights on Gen Z digital escapism and payment behavior into actionable product positioning and go-to-market strategies.",
      "Delivered weekly research briefings to the CEO and Product Team on cultural nuance, consumer trends, and competitive developments to support product development and launch planning.",
      "Localized all product strings into Bahasa Indonesia and QC'd the Indonesian LLM and TTS responses against a structured testing framework; curated linguistic data on Indonesian speech patterns to improve the models."
    ],
    tech: ["Market Research", "Competitive Analysis", "Consumer Behavior", "Go-to-Market", "Product Strategy"]
  },
  {
    role: "Data Science Intern",
    company: "FPT Information System",
    logo: "/assets/logos/fpt.png", // replace with your actual FPT logo file path
    period: "Apr 2025 - Sep 2025",
    description: "FPT Information System is a subsidiary of FPT Corporation, Vietnam's largest publicly listed tech company ($2.47B revenue, 54,000+ employees) serving 3,000+ enterprise and government clients across Southeast Asia. I delivered weekly progress reports to senior stakeholders on automated data pipelines and enterprise BI solutions, and also worked with the HR team to create content for the company's social media and LinkedIn.",
    longDescription: "[Expand on FPT here: the fuller story of the pipeline and BI work, the scale and messiness of the Splunk data, the technical problems you solved, who consumed your dashboards and what decisions they drove, and what you learned working inside a large enterprise.]",
    achievements: [
      "Interpreted and analyzed millions of log records from multiple Splunk sources to identify operational patterns, anomalies, and trends, enabling data-driven decision-making for senior stakeholders.",
      "Designed interactive, live-connected Power BI dashboards on top of a SQL Server model, transforming raw operational data into real-time visual insights that supported ongoing business programs and stakeholder reporting.",
      "Built an end-to-end data pipeline in Python to automate ingestion and preprocessing of high-volume Splunk data, ensuring data quality and integrity for reliable downstream analysis.",
      "Engineered a self-structuring SQL Server database using dynamic SQL to automatically load and integrate preprocessed datasets across multiple tables, optimizing storage and query performance.",
      "Collaborated with the HR team to create content for FPT IS's social media and LinkedIn channels, contributing to employer branding and company culture."
    ],
    gallery: [
      { src: "/assets/photos/fpt-1.jpg", alt: "FPT internship", caption: "" },
      { src: "/assets/photos/fpt-2.jpg", alt: "FPT internship", caption: "" },
      { src: "/assets/photos/fpt-3.jpg", alt: "FPT internship", caption: "" }
    ],
    socialLink: FPT_SOCIAL_URL,
    socialLabel: "See the LinkedIn content I made",
    tech: ["Python", "SQL Server", "Power BI", "Splunk", "ETL"]
  }
];

// --- COMPONENTS ---

const ExperienceCard = ({ data, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-8 md:pl-12 py-6 group"
    >
      {/* Timeline Line & Dot */}
      <div className="absolute left-0 top-0 h-full w-[2px] bg-slate-800 group-last:bg-gradient-to-b group-last:from-slate-800 group-last:to-transparent">
        <div className="absolute top-8 -left-[5px] h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6] ring-4 ring-slate-950 transition-all duration-300 group-hover:scale-150 group-hover:ring-blue-500/30" />
      </div>

      {/* Card Content */}
      <div className="relative p-6 md:p-8 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md hover:bg-slate-900/60 hover:border-blue-500/30 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <div className="flex items-center gap-4">
            <Logo src={data.logo} alt={`${data.company} logo`} size={44} />
            <div>
              <h3 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
                {data.role}
              </h3>
              <div className="text-blue-400 font-medium flex items-center gap-2 mt-1">
                <Briefcase size={16} />
                <span>{data.company}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-mono w-fit">
            <Calendar size={14} />
            {data.period}
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 mb-6 leading-relaxed">
          {data.description}
        </p>

        {/* Expanded narrative (website-only depth) */}
        {data.longDescription && (
          <div className="mb-6">
            <Placeholder>{data.longDescription}</Placeholder>
          </div>
        )}

        {/* Achievements List */}
        <div className="mb-6 space-y-3">
          <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider flex items-center gap-2">
            <Award size={16} className="text-blue-500" /> Key Achievements
          </h4>
          <ul className="space-y-2">
            {data.achievements.map((item, i) => (
              <li key={i} className="flex items-start text-slate-400 text-sm">
                <ChevronRight size={16} className="text-blue-500 mt-0.5 mr-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
          {data.tech.map((tech, i) => (
            <span 
              key={i} 
              className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800/50 border border-slate-700 rounded-full hover:text-blue-300 hover:border-blue-500/50 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Social / content link */}
        {data.socialLink && (
          <div className="mt-5">
            <a
              href={data.socialLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium hover:bg-blue-500/20 hover:border-blue-500/50 transition-all"
            >
              <Linkedin size={16} />
              {data.socialLabel || "View related content"}
              <ExternalLink size={14} />
            </a>
          </div>
        )}

        {/* Photo Gallery (adaptive) */}
        {data.gallery && data.gallery.length > 0 && (
          <Gallery images={data.gallery} />
        )}

      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div className="min-h-screen pt-20 px-6 md:px-20 max-w-6xl mx-auto pb-20">
      
      {/* Page Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6">
          Professional <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Experience
          </span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          From market and product research to scalable data systems — turning large-scale data into insights and decisions that move products forward.
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative border-l-0 md:border-l-0 ml-0 md:ml-4">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} data={exp} index={idx} />
        ))}
      </div>

    </div>
  );
};

export default Experience;