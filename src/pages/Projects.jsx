import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link

// IMPORT DATA
import { projectsData } from '../data/projectsData'; // Import the data file we just made

// --- COMPONENT: PROJECT CARD ---
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col"
    >
      {/* 1. IMAGE SECTION (Clickable) */}
      <Link to={`/projects/${project.id}`} className="relative h-48 md:h-64 overflow-hidden block">
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-all duration-500 z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 text-xs font-bold text-slate-950 bg-blue-400 rounded-full shadow-lg shadow-blue-500/20">
            {project.category}
          </span>
        </div>
      </Link>

      {/* 2. CONTENT SECTION */}
      <div className="p-6 flex flex-col flex-grow backdrop-blur-sm">
        <div className="flex justify-between items-start mb-4">
          <Link to={`/projects/${project.id}`} className="hover:underline decoration-blue-500 underline-offset-4">
            <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
          </Link>
          
          {/* Quick Links (Github/Demo) - Keep these for quick access */}
          <div className="flex gap-3">
             {/* Only showing the detail icon now to encourage clicking through */}
             <Link to={`/projects/${project.id}`} className="text-slate-400 hover:text-blue-400 transition-colors" title="View Details">
              <ExternalLink size={20} />
            </Link>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {project.metrics && (
          <div className="mb-4 flex items-center gap-2 text-xs font-mono text-green-400">
             <TrendingUp size={14} /> 
             <span>{project.metrics}</span>
          </div>
        )}

        <div className="pt-4 border-t border-slate-800/50 flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span key={i} className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold text-slate-400 bg-slate-950 border border-slate-800 rounded hover:border-slate-600 transition-colors">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-6 md:px-20 max-w-6xl mx-auto pb-20">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6">
          Featured <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Projects
          </span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          A collection of data pipelines, machine learning models, and full-stack applications I have engineered.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Map through the imported data */}
        {projectsData.map((proj, idx) => (
          <ProjectCard key={idx} project={proj} index={idx} />
        ))}
      </div>

    </div>
  );
};

export default Projects;