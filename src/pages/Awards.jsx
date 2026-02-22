import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, MapPin, Award, Star, Crown } from 'lucide-react';

// --- DATA (Extracted from your CV) ---
const awardsData = [
  {
    title: "2nd Place - Data Storm 2025",
    organization: "Vietnam Datathon",
    location: "Ho Chi Minh City",
    date: "January 2026",
    color: "text-yellow-400", // Gold
    icon: <Trophy size={32} className="text-yellow-400" />,
    description: "Led a team of four to secure 2nd place among 134 teams. Engineered a Financial Regression pipeline on banking datasets that ranked 1st in modeling accuracy.",
    details: [
      "Architected 'StormCast', a full-stack Automated Decisioning Engine (ReactJS, FastAPI).",
      "Developed Causal LightGBM logic to optimize risk-adjusted margins by 10-15% under uncertainty.",
      "Forecasted transaction liquidity and spending power with high precision."
    ]
  },
  {
    title: "Special Award for Educational Contribution",
    organization: "SEAMEO RECSAM (12th Regional Congress)",
    location: "George Town, Malaysia",
    date: "March 2022",
    color: "text-blue-400", // Blue/Silver
    icon: <Award size={32} className="text-blue-400" />,
    description: " Recognized for developing an educational Python game that applies Realistic Mathematics Education (RME) principles to support basic math learning.",
    details: [
      "Led a team of five in the Search for SEAMEO Young Scientist.",
      "Integrated real-world examples into game logic to gamify STEM education.",
      "Documented the pedagogical approach in a comprehensive research report."
    ]
  },
  {
    title: "3rd place - Class Website Design 2023 Competition",
    organization: "Faculty of Information Technology, Ton Duc Thang University",
    location: "Ho Chi Minh City, Vietnam",
    date: "April 2023",
    color: "text-purple-400", // Purple
    icon: <Crown size={32} className="text-purple-400" />,
    description: "Awarded for designing an intuitive and visually appealing website for the class.",
    details: [
      "Designed a class website with wordpress.",
      "Directed the overall design, performance, and user experience of the website."
    ]
  }
];

// --- COMPONENT: AWARD CARD ---
const AwardCard = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative group"
    >
      <div className="flex flex-col md:flex-row gap-8 items-start">
        
        {/* Icon Box (Glowing) */}
        <div className={`hidden md:flex flex-shrink-0 w-20 h-20 rounded-2xl bg-slate-900 border border-slate-800 items-center justify-center shadow-lg group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 relative z-10 ${data.color.replace('text', 'border').replace('400', '500/20')}`}>
          {data.icon}
          {/* Inner Glow */}
          <div className={`absolute inset-0 opacity-20 blur-xl ${data.color.replace('text', 'bg')}`} />
        </div>

        {/* Card Content */}
        <div className="flex-grow w-full bg-slate-900/40 border border-slate-800 backdrop-blur-md rounded-2xl p-6 md:p-8 hover:bg-slate-900/60 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden">
          
          {/* Subtle Background Pattern */}
          <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none rotate-12">
            <Trophy size={140} />
          </div>

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
            <div>
              <h3 className={`text-2xl font-bold mb-2 group-hover:brightness-125 transition-all ${data.color}`}>
                {data.title}
              </h3>
              <div className="text-lg text-slate-300 font-medium flex items-center gap-2">
                <Star size={18} className={data.color} />
                {data.organization}
              </div>
            </div>
            
            <div className="flex flex-col items-start md:items-end gap-1 text-sm text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <Calendar size={14} /> {data.date}
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} /> {data.location}
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-400 leading-relaxed mb-6 border-l-2 border-slate-700 pl-4">
            {data.description}
          </p>

          {/* Key Details / Highlights */}
          {data.details && (
            <div className="bg-slate-950/30 rounded-xl p-4 border border-slate-800/50">
              <ul className="space-y-2">
                {data.details.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${data.color.replace('text', 'bg')}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>
    </motion.div>
  );
};

const Awards = () => {
  return (
    // Layout aligned exactly with Projects/Experience/Education
    <div className="min-h-screen pt-20 px-6 md:px-20 max-w-6xl mx-auto pb-20">
      
      {/* Page Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6">
          Honors & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Awards
          </span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          Recognition for my contributions in Data Science, Software Engineering, and Educational Technology on national and regional stages.
        </p>
      </motion.div>

      {/* Awards List */}
      <div className="flex flex-col gap-10">
        {awardsData.map((award, idx) => (
          <AwardCard key={idx} data={award} index={idx} />
        ))}
      </div>

    </div>
  );
};

export default Awards;