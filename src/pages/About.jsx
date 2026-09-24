import React from 'react';
import { motion } from 'framer-motion';
import { Languages, MapPin, Briefcase } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const facts = [
  {
    icon: <Languages size={24} className="text-blue-400" />,
    title: "Languages",
    lines: ["English — C1, written & verbal", "Indonesian — native", "Vietnamese — conversational"]
  },
  {
    icon: <MapPin size={24} className="text-blue-400" />,
    title: "Markets I've Worked",
    lines: ["Vietnam, Indonesia", "Taiwan, Thailand (collaborator management)"]
  },
  {
    icon: <Briefcase size={24} className="text-blue-400" />,
    title: "Right Now",
    lines: ["Product Operations @ AI Hay", "Final-year CS @ Ton Duc Thang University"]
  }
];

const About = () => {
  return (
    <div className="min-h-screen pt-20 px-6 md:px-20 max-w-5xl mx-auto pb-20">

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
          Not just a data scientist — a problem solver who's most useful when dropped into a system he doesn't know yet.
        </p>
      </motion.div>

      {/* Story */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
        className="space-y-6 text-lg text-slate-400 leading-relaxed mb-20 max-w-3xl"
      >
        <motion.p variants={fadeInUp}>
          A volcano erupted near my destination once, while I was waiting to board a flight in Indonesia. The flight didn't go. What stayed with me wasn't the delay — it was realizing that somewhere, within minutes, a group of people had decided which aircraft went where instead, which crew was still legal to fly, what happened to the departure slot, and what several hundred passengers were owed. Every one of those decisions was made from data, under time pressure, and couldn't be undone. I'd been curious about aviation since I was a kid, mostly about what happens backstage — that day gave the curiosity a shape.
        </motion.p>
        <motion.p variants={fadeInUp}>
          My own work runs fast, but nothing I ship is permanent — when I get a decision wrong, I roll it back on Monday. That contrast is what pulled me toward reading operational data so someone else can decide quickly: it's the thread running through a churn model built on 46 million transactions, real-time log streams turned into dashboards an IT team used to watch system health, and the tools I now build so a product team doesn't have to argue about retention from instinct.
        </motion.p>
        <motion.p variants={fadeInUp}>
          I'm Indonesian, working in Vietnam, in my second language — running product across Taiwanese and Thai markets that weren't mine to start with. I'm most useful when I meet an unfamiliar system: I want to know which decision it exists to support, then make that decision easier to repeat.
        </motion.p>
      </motion.div>

      {/* Quick Facts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {facts.map((fact, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-slate-900/40 border border-slate-800 backdrop-blur-md rounded-2xl p-6"
          >
            <div className="p-3 bg-blue-500/10 rounded-lg w-fit text-blue-400 mb-4 border border-blue-500/20">
              {fact.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-200 mb-3">{fact.title}</h3>
            <div className="space-y-1">
              {fact.lines.map((line, i) => (
                <p key={i} className="text-sm text-slate-400">{line}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default About;
