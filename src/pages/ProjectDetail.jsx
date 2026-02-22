import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Github, ExternalLink, Calendar, 
  FileText, ChevronLeft, ChevronRight, Layers, CheckCircle 
} from 'lucide-react';

// Import your data
import { projectsData } from '../data/projectsData';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);
  const [currentImage, setCurrentImage] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-400">
        Project not found. <Link to="/projects" className="text-blue-400 ml-2">Back to Projects</Link>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <div className="min-h-screen pt-24 px-6 md:px-20 max-w-6xl mx-auto pb-20">

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <span className="px-3 py-1 text-xs font-bold text-slate-950 bg-blue-400 rounded-full">
            {project.category}
          </span>
          <span className="flex items-center text-slate-400 text-sm">
            <Calendar size={14} className="mr-2" /> {project.timeSpan}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">{project.title}</h1>
        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
          {project.tagline}
        </p>
      </motion.div>

      {/* --- IMAGE CAROUSEL (UPDATED FIX) --- */}
      <div className="relative w-full h-[400px] md:h-[600px] bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 mb-16 group">
        
        {/* We removed mode='wait' and made images absolute to prevent layout jumps */}
        <AnimatePresence initial={false}>
          <motion.img 
            key={currentImage}
            src={project.gallery[currentImage]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover"
            alt={`Slide ${currentImage + 1}`}
          />
        </AnimatePresence>
        
        {/* Carousel Controls */}
        {project.gallery.length > 1 && (
          <>
            <button 
              type="button" 
              onClick={prevImage} 
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-slate-950/50 hover:bg-slate-900 text-white rounded-full backdrop-blur-md border border-slate-700 transition-all opacity-0 group-hover:opacity-100 z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              type="button" 
              onClick={nextImage} 
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-slate-950/50 hover:bg-slate-900 text-white rounded-full backdrop-blur-md border border-slate-700 transition-all opacity-0 group-hover:opacity-100 z-10"
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {project.gallery.map((_, idx) => (
                <div key={idx} className={`w-2 h-2 rounded-full transition-all ${idx === currentImage ? 'bg-blue-500 w-6' : 'bg-slate-600'}`} />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        
        {/* Left Column: Content */}
        <div className="md:col-span-2 space-y-12">
          
          {/* Executive Summary */}
          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-4 flex items-center gap-2">
              <FileText className="text-blue-500" size={24} /> Executive Summary
            </h2>
            <div className="text-slate-400 leading-relaxed space-y-4">
              {project.summary.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Key Achievables */}
          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-4 flex items-center gap-2">
              <CheckCircle className="text-green-500" size={24} /> Key Achievables
            </h2>
            <ul className="grid gap-3">
              {project.achievables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300 bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                  <span className="mt-1 w-2 h-2 rounded-full bg-green-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

        </div>

        {/* Right Column: Sidebar Meta */}
        <div className="space-y-8">
          
          {/* Links Card */}
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm">
            <h3 className="text-lg font-bold text-slate-100 mb-4">Project Links</h3>
            <div className="space-y-3">
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors p-2 hover:bg-slate-800 rounded-lg">
                  <Github size={20} /> Source Code
                </a>
              )}
              {project.links.demo && (
                <a href={project.links.demo} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors p-2 hover:bg-slate-800 rounded-lg">
                  <ExternalLink size={20} /> Live Demo
                </a>
              )}
              {project.links.report && (
                <a href={project.links.report} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors p-2 hover:bg-slate-800 rounded-lg">
                  <FileText size={20} /> Read Full Report (PDF)
                </a>
              )}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm">
            <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
              <Layers size={20} className="text-purple-400"/> Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ProjectDetail;