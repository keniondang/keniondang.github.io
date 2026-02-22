import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Cpu, Terminal, Database, Code, 
  ChevronsDown, Sparkles
} from 'lucide-react';

// --- IMPORT YOUR IMAGE ---
import myProfilePic from '../assets/1.png';

// --- COMPONENTS: SPOTLIGHT CARD (Unchanged) ---
const SpotlightCard = ({ children, className = "" }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = React.useState(0);
  const divRef = React.useRef(null);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md transition-all duration-300 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 50 }
  }
};

const skills = [
  { category: "Machine Learning", icon: <Cpu size={20} />, desc: "Predictive Models & NLP", items: ["XGBoost", "LightGBM", "Scikit-Learn", "SHAP"] },
  { category: "Engineering", icon: <Terminal size={20} />, desc: "Full-Stack Deployment", items: ["FastAPI", "React.js", "Docker", "CI/CD"] },
  { category: "Data Systems", icon: <Database size={20} />, desc: "High-Volume Pipelines", items: ["SQL Server", "Big Data (46M+)", "Power BI", "SSAS"] },
  { category: "Core Stack", icon: <Code size={20} />, desc: "Languages & Tools", items: ["Python", "SQL", "JavaScript", "HTML/CSS"] }
];

const Home = () => {
  return (
    <div className="min-h-screen">
      
      {/* 1. HERO SECTION */}
      {/* Removed pt-20 to allow true vertical centering, we will shift text manually */}
      <section className="relative min-h-screen flex items-center px-6 md:px-20 max-w-7xl mx-auto overflow-hidden">
        
        {/* --- BACKGROUND PROFILE IMAGE --- */}
        {/* Changed top-0 to bottom-0 so the image rests on the floor of the section */}
        <div className="absolute right-0 bottom-0 h-[95vh] w-full md:w-[60%] z-0 pointer-events-none">
          {/* THE FIX: Changed object-cover to object-contain. 
              object-bottom md:object-right-bottom ensures the image aligns to the bottom right without stretching or cropping.
          */}
          <img 
            src={myProfilePic} 
            alt="Profile" 
            className="w-auto h-full max-h-none object-cover opacity-50 md:opacity-80 mix-blend-lighten md:mix-blend-normal transform translate-x-10 md:translate-x-40 scale-110 md:scale-115 origin-bottom-right"
          />
        </div>

        {/* --- MAIN TEXT CONTENT --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          /* THE FIX: Added -translate-y-12 md:-translate-y-20 to pull the entire block higher up the screen */
          className="relative z-10 max-w-3xl -translate-y-12 md:-translate-y-20"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium inline-flex items-center gap-2 shadow-lg shadow-blue-900/20 backdrop-blur-sm">
              <Sparkles size={14} /> Open to Work
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-bold text-slate-100 mb-6 leading-[1.1] tracking-tight">
            Building systems that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient bg-300%">
              bridge the gap.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-300/80 mb-8 max-w-xl leading-relaxed">
            I combine <strong>Data Science</strong> with <strong>Full-Stack Engineering</strong> to turn raw numbers into profit-driving applications.
            From analyzing massive datasets to deploying scalable web apps.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-5">
            <Link to="/projects">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center gap-2 transform hover:-translate-y-1">
                View My Work <ArrowRight size={20} />
              </button>
            </Link>
            <Link to="/about">
              <button className="px-8 py-4 bg-slate-900/50 border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white rounded-xl font-semibold text-lg transition-all backdrop-blur-md">
                About Me
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 2, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-10 text-slate-500 hidden md:block z-10"
        >
          <ChevronsDown size={24} />
        </motion.div>
      </section>

      {/* 2. SKILLS SECTION */}
      <section className="py-20 px-6 md:px-20 border-t border-slate-800/50 bg-slate-950/50 relative z-20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Technical Arsenal</h2>
            <div className="h-1 w-20 bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6]"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <SpotlightCard className="p-6 h-full group">
                  <div className="p-3 bg-blue-500/10 rounded-lg w-fit text-blue-400 mb-4 group-hover:text-blue-300 group-hover:bg-blue-500/20 transition-colors shadow-inner border border-blue-500/20">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-200 mb-1">{skill.category}</h3>
                  <p className="text-sm text-slate-500 mb-6 font-mono">{skill.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {skill.items.map((item, i) => (
                      <span key={i} className="text-xs font-medium text-slate-400 bg-slate-950/50 px-2 py-1 rounded border border-slate-800 group-hover:border-slate-700 transition-colors">
                        {item}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTRO SECTION */}
      <section className="py-32 px-6 md:px-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6 leading-tight">
            Not just a Data Scientist. <br/>
            <span className="text-slate-500">A problem solver.</span>
          </h2>
        </div>
        <div className="md:w-1/2">
          <p className="text-lg text-slate-400 leading-relaxed mb-6">
            Most data projects fail because they never leave the notebook. I focus on the "Last Mile" of Data Science—deploying models into reliable, user-friendly applications that stakeholders can actually use.
          </p>
          <Link to="/about" className="text-blue-400 font-semibold hover:text-blue-300 inline-flex items-center gap-2 group text-lg">
            Read my full journey <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;