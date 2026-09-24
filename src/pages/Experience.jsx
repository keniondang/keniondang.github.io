import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight, Download, PlayCircle } from 'lucide-react';

// --- DATA ---
const experiences = [
  {
    company: "AI Hay",
    logo: `${process.env.PUBLIC_URL}/images/logos/ai-hay.jpg`,
    companyContext: "FAI Tech's AI platform (10M+ downloads, #2 in Vietnam by MAU), launching the AI companion app Imely across four Asian markets.",
    roles: [
      {
        role: "Product Operations",
        period: "July 2026 - Present",
        achievements: [
          "Built 5 tools used by 25+ team members and partners across 4 markets, including a localization tool replacing manual spreadsheet translation and an AI tool turning 100+ daily customer reviews into product insights.",
          "Planned the user retention strategy by benchmarking 4 competitors and analyzing in-app behavior data, shipping 2 customer experience and gamification features across 4 markets.",
          "Managed 2 market collaborators in Taiwan and Thailand, onboarding them to the product and tools and guiding their research, localization, AI output feedback, and creator recruitment.",
          "Aligned 6 cross-functional teams (engineering, data, marketing, brand, design, growth) on specs and sequenced delivery; defined with the data team the retention and WAU metrics the product now runs on."
        ],
        tech: ["Product Strategy", "Retention Analytics", "Competitive Research", "Localization", "Stakeholder Management"]
      },
      {
        role: "AI Chatbot Content & Experience Intern",
        period: "April 2026 - June 2026",
        achievements: [
          "Led the Indonesia market viability assessment across 3 competitors, covering sizing, consumer behavior, and regulatory compliance, identifying the gap that shaped Imely's positioning.",
          "Briefed the Product Team weekly as the primary Indonesian market intelligence resource, informing 4 launch and roadmap decisions.",
          "Localized 2,700+ Indonesian strings and ran a QA framework on AI (LLM, TTS) output, surfacing a launch-blocking safety gap, then closed it by curating local speech data and feeding results back to engineering.",
          "Interviewed 5 users and creators on the product experience and sourced/onboarded 15 Indonesian content creators, authoring guidelines that standardized quality across 100+ characters."
        ],
        tech: ["Market Research", "Localization QA", "LLM/TTS Evaluation", "User Interviews"]
      }
    ]
  },
  {
    company: "FPT Information System (FPT IS)",
    logo: `${process.env.PUBLIC_URL}/images/logos/fpt-is.jpg`,
    companyContext: "Subsidiary of FPT Corporation, Vietnam's largest tech company, with 54,000+ employees across 30+ countries.",
    roles: [
      {
        role: "Data Science Intern",
        period: "April 2025 - September 2025",
        achievements: [
          "Designed and implemented an end-to-end Python pipeline to automate ingestion and preprocessing of millions of records from multiple Splunk sources, cutting processing time by 70%.",
          "Engineered a self-structuring SQL Server database utilizing dynamic SQL to automatically load and integrate high-volume datasets across multiple tables, optimizing storage and query performance.",
          "Built a scalable tabular semantic model in SQL Server Analysis Services to support fast analytics.",
          "Designed interactive, live-connected Power BI dashboards that transformed raw log data into real-time, enterprise-scale insights, enabling data-driven decision-making for senior stakeholders.",
          {
            text: "Collaborated with the HR department and coworkers to produce engaging content for FPT IS's social media channels, contributing to a vibrant company culture.",
            videoLink: "#"
          }
        ],
        tech: ["SQL Server", "SSAS", "Power BI", "Splunk", "ETL"]
      }
    ]
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

        {/* Company Header */}
        <div className="mb-6 flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl overflow-hidden border border-slate-700 bg-slate-800 flex-shrink-0">
            <img src={data.logo} alt={`${data.company} logo`} className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-100">
              {data.company}
            </h3>
            {data.companyContext && (
              <p className="text-sm text-slate-500 mt-1 italic max-w-2xl">
                {data.companyContext}
              </p>
            )}
          </div>
        </div>

        {/* Roles */}
        <div className="space-y-8">
          {data.roles.map((role, i) => (
            <div key={i} className={i > 0 ? "pt-8 border-t border-slate-800/50" : ""}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">
                <h4 className="text-lg font-semibold text-blue-400">{role.role}</h4>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono w-fit">
                  <Calendar size={12} />
                  {role.period}
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {role.achievements.map((item, j) => {
                  const text = typeof item === 'string' ? item : item.text;
                  const videoLink = typeof item === 'string' ? null : item.videoLink;
                  return (
                    <li key={j} className="flex items-start text-slate-400 text-sm">
                      <ChevronRight size={16} className="text-blue-500 mt-0.5 mr-2 shrink-0" />
                      <span>
                        {text}
                        {videoLink && (
                          <a
                            href={videoLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 ml-2 text-blue-400 hover:text-blue-300 font-medium whitespace-nowrap"
                          >
                            <PlayCircle size={14} /> Watch video
                          </a>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <div className="flex flex-wrap gap-2">
                {role.tech.map((tech, k) => (
                  <span
                    key={k}
                    className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800/50 border border-slate-700 rounded-full hover:text-blue-300 hover:border-blue-500/50 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
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
          From enterprise BI pipelines to running product operations for an AI app used across four markets — turning data into decisions, and decisions into shipped work.
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
        <a
          href={`${process.env.PUBLIC_URL}/KeniNicholasOndang_CV_EmiratesElevate.pdf`}
          download
          className="group px-8 py-4 bg-slate-900 border border-slate-700 text-slate-300 rounded-xl font-medium hover:border-blue-500 hover:text-white transition-all flex items-center gap-3"
        >
          <Download size={20} />
          Download Full Resume
          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>

    </div>
  );
};

export default Experience;
