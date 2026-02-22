import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight, Trello, Award } from 'lucide-react';

// --- DATA ---
const experiences = [
  {
    role: "Data Science Intern",
    company: "FPT Information System", // Replace with actual company
    period: "April 2025 - September 2025",
    description: "Worked as an on-site Data Science Intern, delivering weekly progress reports to managers and supervisors on the development of automated data pipelines and enterprise BI solutions. Beyond technical responsibilities, actively collaborated with the HR department and coworkers to produce engaging content for FPT IS social media channels, contributing to a vibrant company culture.",
    achievements: [
      "Designed and implement an end-to-end data pipeline to automate ingestion and preprocessing of millions of records from multiple Splunk sources, reducing manual data handling.",
      "Engineered a self-structuring SQL Server database utilizing dynamic SQL to automatically load and integrate high-volume datasets across multiple tables, optimizing storage and query performance",
      "Built a scalable tabular semantic model in SQL Server Analysis Services to support fast analytics.",
      "Designed interactive, live-connected Power BI dashboards that transformed raw log data into realtime, enterprise-scale insights, enabling data-driven decision-making for senior stakeholders."
    ],
    tech: ["SQL Server", "SSAS", "Power BI", "Splunk", "ETL"]
  },
  // Add more experiences here if needed
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
          <div>
            <h3 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
              {data.role}
            </h3>
            <div className="text-blue-400 font-medium flex items-center gap-2 mt-1">
              <Briefcase size={16} />
              <span>{data.company}</span>
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

        {/* Achievements List */}
        <div className="mb-6 space-y-3">
          <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider flex items-center gap-2">
            <Award size={16} className="text-blue-500" /> Key Achievables
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

      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div className="min-h-screen pt-20 px-6 md:px-20 max-w-6xl mx-auto">
      
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
          My journey in the tech industry, focused on building scalable data systems and delivering business value.
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative border-l-0 md:border-l-0 ml-0 md:ml-4">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} data={exp} index={idx} />
        ))}
      </div>

      {/* Bottom CTA (Resume) */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-20 flex justify-center pb-20"
      >
        <button className="group px-8 py-4 bg-slate-900 border border-slate-700 text-slate-300 rounded-xl font-medium hover:border-blue-500 hover:text-white transition-all flex items-center gap-3">
          <Trello size={20} />
          Download Full Resume
          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>

    </div>
  );
};

export default Experience;