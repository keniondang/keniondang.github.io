import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Search, Globe2, LineChart, Users,
  Sparkles, MapPin, GraduationCap, Languages
} from 'lucide-react';
import Placeholder from '../components/Placeholder';

// --- WHAT I DO (edit freely) ---
const pillars = [
  {
    icon: <Search size={22} />,
    title: "Research",
    desc: "Market, product, and user research — turning questions about a market into evidence a team can act on."
  },
  {
    icon: <LineChart size={22} />,
    title: "Data & Analytics",
    desc: "Interpreting large-scale data to surface trends, model behavior, and translate findings into decisions."
  },
  {
    icon: <Globe2 size={22} />,
    title: "Market Intuition",
    desc: "A native read on the Indonesian digital market and consumer behavior, shaped by living across three countries."
  },
  {
    icon: <Users size={22} />,
    title: "Communication",
    desc: "Briefing stakeholders, leading teams in competitions, and bridging technical work and product strategy."
  }
];

// --- QUICK FACTS (edit freely) ---
const facts = [
  { icon: <MapPin size={16} />, label: "Based in", value: "[Your current base — e.g. Ho Chi Minh City → relocating to Jakarta]" },
  { icon: <GraduationCap size={16} />, label: "Studying", value: "B.Sc. Computer Science, TDTU (Expected Oct 2026)" },
  { icon: <Languages size={16} />, label: "Languages", value: "English (C1), Indonesian (Native)" },
  { icon: <Sparkles size={16} />, label: "Status", value: "[e.g. Open to July–Dec 2026 internships]" }
];

const About = () => {
  return (
    <div className="min-h-screen pt-20 px-6 md:px-20 max-w-6xl mx-auto pb-24">

      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6">
          About <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Me
          </span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          A research & data analytics specialist with an international background and a habit of turning data into decisions.
        </p>
      </motion.div>

      {/* Story */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 grid md:grid-cols-3 gap-10"
      >
        <h2 className="text-2xl font-bold text-slate-100 md:col-span-1">My Story</h2>
        <div className="md:col-span-2 space-y-5">
          <p className="text-slate-400 leading-relaxed">
            I'm an Indonesian student of Computer Science specializing in Data Science and Research Analytics, currently completing my degree in Vietnam on a full scholarship. My work sits where research meets data — understanding markets and users, then backing those insights with analysis a team can build on.
          </p>
          <Placeholder>
            [Write your real story here — in your own voice. Some prompts: What drew you to data and research? What's it like being an Indonesian studying across Vietnam and China? What kind of problems do you love solving? What are you hoping to do next, and why Grab / this kind of role? A few honest paragraphs here will do more than any bullet list.]
          </Placeholder>
        </div>
      </motion.section>

      {/* What I Do */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-2xl font-bold text-slate-100 mb-8">What I Bring</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-900/40 border border-slate-800 backdrop-blur-md rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                {p.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">{p.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Quick Facts */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-2xl font-bold text-slate-100 mb-8">Quick Facts</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {facts.map((f, i) => {
            const isPlaceholder = f.value.trim().startsWith('[');
            return (
              <div key={i} className="flex items-start gap-3 bg-slate-900/30 border border-slate-800 rounded-xl p-4">
                <div className="text-blue-400 mt-0.5">{f.icon}</div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">{f.label}</div>
                  {isPlaceholder
                    ? <Placeholder inline>{f.value}</Placeholder>
                    : <div className="text-slate-200 text-sm">{f.value}</div>}
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-5"
      >
        <Link to="/experience">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] inline-flex items-center gap-2 transform hover:-translate-y-1">
            My Experience <ArrowRight size={20} />
          </button>
        </Link>
        <Link to="/contact">
          <button className="px-8 py-4 bg-slate-900/50 border border-slate-700 text-slate-300 hover:border-blue-500 hover:text-white rounded-xl font-semibold text-lg transition-all backdrop-blur-md inline-flex items-center gap-2">
            Get in Touch <ArrowRight size={20} />
          </button>
        </Link>
      </motion.div>

    </div>
  );
};

export default About;
