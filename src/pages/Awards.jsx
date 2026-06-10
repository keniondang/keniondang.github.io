import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, MapPin, Award, Star, Users, Heart } from 'lucide-react';
import Placeholder from '../components/Placeholder';
import Gallery from '../components/Gallery';

// --- DATA (Extracted from your CV) ---
const awardsData = [
  {
    title: "2nd Place — Data Storm 2025 Data Science Contest",
    organization: "Vietnam Datathon",
    location: "Ho Chi Minh City, Vietnam",
    date: "Jan 2026",
    color: "text-yellow-400", // Gold
    icon: <Trophy size={32} className="text-yellow-400" />,
    description: "Led a team of 4 to 2nd place among 134 competing teams, engineering a financial regression pipeline on banking datasets to forecast transaction liquidity and spending power — ranking 1st in the 24-hour Hackathon sprint.",
    gallery: [
      { src: "/assets/photos/datathon-1.jpg", alt: "Data Storm 2025", caption: "" },
      { src: "/assets/photos/datathon-2.jpg", alt: "Data Storm 2025", caption: "" },
      { src: "/assets/photos/datathon-3.jpg", alt: "Data Storm 2025", caption: "" },
      // you have 3+ for this one — add the rest; 5+ auto-collapses into a "+N more" tile
    ],
    details: [
      "Built a full-stack analytics engine (ReactJS, FastAPI) for automated decisioning.",
      "Developed Causal LightGBM logic to optimize risk-adjusted margins under uncertainty.",
      "Delivered causal inference, supply-risk forecasting, and real-time Power BI dashboarding for business decision-making."
    ]
  },
  {
    title: "Special Award for Educational Contribution",
    organization: "SEAMEO RECSAM (12th Regional Congress)",
    location: "George Town, Malaysia",
    date: "Mar 2022",
    color: "text-blue-400", // Blue/Silver
    icon: <Award size={32} className="text-blue-400" />,
    description: "Led a team of 5 in applying data-informed research methodology to develop and deploy a Python-based learning platform, validating learning outcomes through structured user testing.",
    gallery: [
      { src: "/assets/photos/seameo-1.jpg", alt: "SEAMEO RECSAM congress", caption: "" },
      // you have 1 for this one — it renders as a single featured photo
    ],
    details: [
      "Applied Realistic Mathematics Education (RME) principles to gamify STEM learning.",
      "Validated learning outcomes through structured user testing.",
      "Contributed findings to a regional STEM education report."
    ]
  },
  {
    title: "3rd Place — Class Website Design Competition",
    organization: "Faculty of Information Technology, TDTU",
    location: "Ho Chi Minh City, Vietnam",
    date: "2023",
    color: "text-purple-400",
    icon: <Award size={32} className="text-purple-400" />,
    description: "[Minor entry — kept off the CV but included here for completeness. Briefly describe the website you designed, your role, and what placed it 3rd.]",
    isPlaceholder: true,
    details: [
      "[Optional: one or two short points about the design or what you built.]"
    ]
  }
];

// --- ORGANIZATION & ACTIVITIES DATA (from CV) ---
const activitiesData = [
  {
    title: "Event Coordinator",
    organization: "Paimuluan Ne Tonsea (PNT) Christmas & New Year Celebration",
    location: "Jakarta, Indonesia",
    date: "Jan 2026",
    description: "Assisted the Director of Ceremony in coordinating the full event flow for the PNT Christmas 2025 & New Year 2026 celebration, attended by 800+ guests from 55 Tonsea community groups across Jakarta and covered by national media.",
    gallery: [
      { src: "/assets/photos/pnt-1.jpg", alt: "PNT celebration", caption: "" },
      // add your real PNT event photos — layout adapts to the count
    ]
  },
  {
    title: "Worship Leader",
    organization: "Indonesian Consulate General of Ho Chi Minh City",
    location: "Ho Chi Minh City, Vietnam",
    date: "Dec 2024 & Dec 2025",
    description: "Served as Worship Leader for the Indonesian Consulate General's Christmas celebration for 2 consecutive years, leading worship for 150+ guests of the Indonesian community in Ho Chi Minh City.",
    gallery: [
      { src: "/assets/photos/consulate-1.jpg", alt: "Consulate Christmas celebration", caption: "" },
      // add your real Consulate photos here
    ]
  }
];

// --- COMMUNITY & SERVICE DATA (website-only; all placeholders to replace) ---
const communityData = [
  {
    title: "Community Live-In Program",
    organization: "Bogor, Indonesia",
    date: "1 week",
    description: "[Describe the Bogor live-in: what the program was, what you did day to day, who you worked with, and what you took away from it.]",
    gallery: [
      { src: "/assets/photos/bogor-1.jpg", alt: "Bogor live-in program", caption: "" },
      // add your real Bogor photos
    ]
  },
  {
    title: "Orphanage Volunteer",
    organization: "Yayasan Sayap Ibu Indonesia — Bintaro",
    date: "2 weeks",
    description: "[Describe your time at Yayasan Sayap Ibu: your responsibilities, who you helped, and what the experience meant to you.]",
    gallery: [
      { src: "/assets/photos/sayapibu-1.jpg", alt: "Yayasan Sayap Ibu volunteering", caption: "" },
      // add your real photos — be mindful of children's privacy/consent before posting identifiable faces
    ]
  },
  {
    title: "Church Ministry — Singer, Worship Leader, Multimedia & Social Media",
    organization: "Indonesia Bethel Church (Ho Chi Minh City) & GBI Visi Pemulihan (Indonesia)",
    date: "Ongoing",
    description: "[Describe your church involvement across both communities: the worship-leading and singing, the multimedia and social media work you handle, how long you've served, and the scale of the congregations.]",
    gallery: [
      { src: "/assets/photos/church-1.jpg", alt: "Church ministry", caption: "" },
      // add your real worship / ministry photos
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
          {data.isPlaceholder ? (
            <div className="mb-6">
              <Placeholder>{data.description}</Placeholder>
            </div>
          ) : (
            <p className="text-slate-400 leading-relaxed mb-6 border-l-2 border-slate-700 pl-4">
              {data.description}
            </p>
          )}

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

          {/* Photo Gallery (adaptive) */}
          {data.gallery && data.gallery.length > 0 && (
            <Gallery images={data.gallery} />
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
          Recognition, leadership, and service — from national data science stages to community and church work across Indonesia and Vietnam.
        </p>
      </motion.div>

      {/* Awards List */}
      <div className="flex flex-col gap-10">
        {awardsData.map((award, idx) => (
          <AwardCard key={idx} data={award} index={idx} />
        ))}
      </div>

      {/* Organization & Activities */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24"
      >
        <div className="inline-block mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2 flex items-center gap-3">
            <Users className="text-blue-500" size={28} /> Organization & Activities
          </h2>
          <div className="h-1 w-full bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6]" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {activitiesData.map((act, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900/40 border border-slate-800 backdrop-blur-md rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex justify-between items-start gap-4 mb-3">
                <h3 className="text-lg font-bold text-slate-100">{act.title}</h3>
                <span className="text-xs text-slate-400 font-mono whitespace-nowrap flex items-center gap-1 mt-1">
                  <Calendar size={12} /> {act.date}
                </span>
              </div>
              <div className="text-sm text-blue-400 font-medium mb-3 flex items-center gap-2">
                <Star size={14} /> {act.organization}
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">{act.description}</p>
              {act.gallery && act.gallery.length > 0 && <Gallery images={act.gallery} />}
              <div className="text-xs text-slate-500 font-mono mt-4 flex items-center gap-1">
                <MapPin size={12} /> {act.location}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Community & Service (website-only) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24"
      >
        <div className="inline-block mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2 flex items-center gap-3">
            <Heart className="text-blue-500" size={28} /> Community & Service
          </h2>
          <div className="h-1 w-full bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6]" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {communityData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900/40 border border-slate-800 backdrop-blur-md rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex justify-between items-start gap-4 mb-2">
                <h3 className="text-lg font-bold text-slate-100">{item.title}</h3>
                <span className="text-xs text-slate-400 font-mono whitespace-nowrap flex items-center gap-1 mt-1">
                  <Calendar size={12} /> {item.date}
                </span>
              </div>
              <div className="text-sm text-blue-400 font-medium mb-3 flex items-center gap-2">
                <Star size={14} /> {item.organization}
              </div>
              <Placeholder>{item.description}</Placeholder>
              {item.gallery && item.gallery.length > 0 && <Gallery images={item.gallery} />}
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  );
};

export default Awards;