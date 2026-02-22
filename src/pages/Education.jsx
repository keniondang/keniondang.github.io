import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, Star } from 'lucide-react';

// --- DATA (Replace placeholders with your real CV info) ---
const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Ton Duc Thang University", // Replace with your actual university
    location: "Ho Chi Minh City, Vietnam",
    period: "Oct 2022 -  Oct 2026 (Expected)",
    // gpa: "3.6/4.0", // Uncomment if you want to display GPA
    description: "Final-year Computer Science student in a fully English-taught program, awarded with a full scholarship. Currently ranked 2nd in Class (Top 7 in Faculty) with a GPA of 8.7/10.0, combining strong Software Engineering principles with advanced Machine Learning to develop and architect scalable solutions that drive strategic decision-making.",
    coursework: [
      "Data Structures & Algorithms",
      "Machine Learning",
      "Database Systems",
      "Logical Thinking",
      "Applied Maths for CS"
    ],
    achievements: [
      "Dean's List for Academic Excellence (2023, 2024)",
      "Research Assistant: NLP Lab",
      "President of the Computer Science Club"
    ]
  },
  {
    degree: "SCUT Global Engineering Summer Program",
    institution: "South China University of Technology", // Replace with your summer school
    location: "Guangzhou, China", 
    period: "Jul 2024",
    description: "Joined an intensive 2-week summer program, gaining hands-on experience in cutting-edge technologies through courses specializing in Artificial Intelligence and industry visits to big China tech companies. Engaged in cultural exchange and connecting with international peers. Completed a comprehensive research report on 3D Vision Intelligence, analyzing Point Cloud data structures and Visual Odometry algorithms for autonomous navigation systems.",
    coursework: ["Large Language Models", "3D Vision Intelligence", "Artificial Intelligence"],
    achievements: ["Completed Capstone Project on AI Ethics"]
  },
  {
    degree: "High School Diploma, Specialization in Mathematics and Natural Sciences",
    institution: "Sophos School Indonesia", // Replace with your high school
    location: "Tangerang, Indonesia",
    period: " Jun 2019 - Jun 2022",
    description: "Ranked 1st in Class with the GPA of 9.3/10.0 under the International Oxford AQA Curriculum, completing specialized coursework in basic programming (Python & HTML) and computational logic.",
    achievements: [
      "Valedictorian / Top 5% of Class",
      "Gold Medal in National Math Olympiad",
      "Varsity Basketball Team Captain"
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
            <div>
              <h3 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
                {data.degree}
              </h3>
              <div className="text-lg text-slate-300 font-medium flex items-center gap-2">
                <BookOpen size={18} className="text-blue-500" />
                {data.institution}
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

    </div>
  );
};

export default Education;