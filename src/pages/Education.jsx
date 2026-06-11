import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, Star, BadgeCheck } from 'lucide-react';
import Placeholder from '../components/Placeholder';
import Logo from '../components/Logo';
import Gallery from '../components/Gallery';

// --- CERTIFICATIONS DATA (from CV) ---
const certifications = [
  {
    issuer: "IBM SkillsBuild",
    logo: "/assets/logos/ibm.png", // replace with your actual IBM logo
    items: ["Data Fundamentals", "Data Literacy", "Data Analytics"],
    note: "Covered foundational concepts in data and analytics — the essentials I rely on as a base for my research and data work."
  },
  {
    issuer: "Kaggle",
    logo: "/assets/logos/kaggle.png", // replace with your actual Kaggle logo
    items: ["Python", "Pandas", "Data Visualization", "Intro to SQL", "Advanced SQL"],
    note: "Reinforced core coding fundamentals in Python, Pandas, and SQL from my first two years of university."
  }
];

// --- DATA (Replace placeholders with your real CV info) ---
const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Ton Duc Thang University (TDTU)",
    logo: "/assets/logos/tdtu.png", // replace with your actual TDTU logo
    location: "Ho Chi Minh City, Vietnam",
    period: "Expected Oct 2026",
    gallery: [
      { src: "/assets/photos/tdtu-1.jpg", alt: "TDTU campus / photo", caption: "" },
      // add as many real photos as you have — layout adapts to the count
    ],
    description: "TDTU is a leading research university in Vietnam, ranked Top 501–600 in QS World University Rankings. Final-year student on a full academic scholarship in a fully English-taught program, currently ranked 2nd in Class (Top 7 in Faculty) with a GPA of 8.7/10.0 (~3.7/4.0). Coursework spans Data Science, Machine Learning, Statistics, and Software Engineering.",
    longDescription: "At TDTU I'm studying Computer Science with a focus on AI and data. My coursework has spanned AI, machine learning, and NLP, along with big data, data visualization, web development, and cross-platform development. The AI and data subjects are where I've focused most, and they're what shaped my move toward research and data analytics.",
    coursework: [
      "Data Science",
      "Machine Learning",
      "Statistics",
      "Database Systems",
      "Software Engineering"
    ],
    achievements: [
      "Ranked 2nd in Class (Top 7 in Faculty)",
      "GPA: 8.7/10.0 (~3.7/4.0)",
      "Full academic scholarship",
      "2nd place, Data Storm 2025 (national datathon)"
    ]
  },
  {
    degree: "SCUT Global Engineering Summer Program",
    institution: "South China University of Technology (SCUT)",
    logo: "/assets/logos/scut.png", // replace with your actual SCUT logo
    location: "Guangzhou, China",
    period: "Jul 2024",
    gallery: [
      { src: "/assets/photos/scut-1.jpg", alt: "SCUT program / China company visit", caption: "" },
      // add your real SCUT / company-visit photos here
    ],
    description: "Selected for a competitive 2-week AI-focused program with visits to leading Chinese tech companies and cultural exchange with international peers. Authored a research report on 3D Vision Intelligence covering Point Cloud data structures and Visual Odometry algorithms for autonomous navigation.",
    longDescription: "The summer program included visits to leading Chinese tech companies, and the one that stood out most was Tencent, where seeing the sheer scale of their office and how they work left a strong impression. The coursework covered AI topics including large language models. Beyond the technical side, the cultural exchange and time spent with international peers was a memorable part of the experience.",
    coursework: ["Large Language Models", "3D Vision Intelligence", "Artificial Intelligence"],
    achievements: ["Authored a research report on 3D Vision Intelligence"]
  },
  {
    degree: "High School Diploma — Mathematics & Natural Sciences",
    institution: "Sophos School Indonesia",
    logo: "/assets/logos/sophos.png", // replace with your actual Sophos logo
    location: "Tangerang, Indonesia",
    period: "Jun 2022",
    gallery: [
      { src: "/assets/photos/sophos-1.jpg", alt: "Sophos School / high school photo", caption: "" },
      // add your real high-school photos here
    ],
    description: "Ranked 1st in Class with a GPA of 9.3/10.0 under the International Oxford AQA curriculum, completing specialized coursework in basic programming (Python & HTML) and computational logic.",
    longDescription: "My high school followed the Oxford AQA track, with AQA examinations, and I specialized in mathematics and the sciences. This is also where I wrote code for the first time, starting with HTML and web development, and where I joined the competition in which my team built a Python game called Zumath (listed in my projects). That first taste of building something real with code is what set me on the path toward data science.",
    achievements: [
      "Ranked 1st in Class",
      "GPA: 9.3/10.0",
      "Represented school at an international congress"
    ],
    coursework: ["Python", "Web Programming"],
  }
];

// --- COMPONENT: EDUCATION CARD ---
const EducationCard = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative group"
    >
      {/* Connector Line (visible on desktop) */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-800 -z-10 group-last:bottom-auto group-last:h-full hidden md:block" />
      
      <div className="flex flex-col md:flex-row gap-8 items-start">
        
        {/* Icon Box */}
        <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 items-center justify-center shadow-lg group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300 relative z-10">
          <GraduationCap size={32} className="text-blue-500" />
        </div>

        {/* Card Content */}
        <div className="flex-grow w-full bg-slate-900/40 border border-slate-800 backdrop-blur-md rounded-2xl p-6 md:p-8 hover:bg-slate-900/60 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden">
          
          {/* Subtle Background Icon */}
          <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none">
            <Award size={140} />
          </div>

          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
            <div className="flex items-start gap-3">
              <Logo src={data.logo} alt={`${data.institution} logo`} size={40} />
              <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
                  {data.degree}
                </h3>
                <div className="text-lg text-slate-300 font-medium flex items-center gap-2">
                  <BookOpen size={18} className="text-blue-500" />
                  {data.institution}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-start md:items-end gap-1 text-sm text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <Calendar size={14} /> {data.period}
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} /> {data.location}
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-400 leading-relaxed mb-6 border-l-2 border-blue-500/30 pl-4">
            {data.description}
          </p>

          {/* Expanded narrative (website-only depth) */}
          {data.longDescription && (
            <Placeholder>{data.longDescription}</Placeholder>
          )}

          {/* Achievements */}
          {data.achievements && (
            <div className="mb-6">
              <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Star size={14} className="text-yellow-500" /> Key Achievements
              </h4>
              <ul className="grid md:grid-cols-2 gap-2">
                {data.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Coursework Tags */}
          {data.coursework && (
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {data.coursework.map((course, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full hover:bg-blue-500/20 transition-colors cursor-default"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Photo Gallery (adaptive — flexes to however many photos you add) */}
          {data.gallery && data.gallery.length > 0 && (
            <div className="mt-6">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Gallery</h4>
              <Gallery images={data.gallery} />
            </div>
          )}

        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    // Updated Layout: Matches Projects/Experience pages exactly
    <div className="min-h-screen pt-20 px-6 md:px-20 max-w-6xl mx-auto pb-20">
      
      {/* Page Header (Removed extra padding and badge) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6">
          Education & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Certifications
          </span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          A timeline of my academic journey, from foundational studies in Indonesia to advanced technical research in Vietnam and abroad.
        </p>
      </motion.div>

      {/* Education List */}
      <div className="flex flex-col gap-12">
        {educationData.map((edu, idx) => (
          <EducationCard key={idx} data={edu} index={idx} />
        ))}
      </div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <div className="inline-block mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2 flex items-center gap-3">
            <BadgeCheck className="text-blue-500" size={28} /> Certifications
          </h2>
          <div className="h-1 w-full bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6]" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900/40 border border-slate-800 backdrop-blur-md rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
                <Logo src={cert.logo} alt={`${cert.issuer} logo`} size={28} /> {cert.issuer}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cert.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {cert.note && (
                <div className="mt-4">
                  <Placeholder>{cert.note}</Placeholder>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  );
};

export default Education;