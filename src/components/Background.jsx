import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 w-full h-full overflow-hidden bg-slate-950">
      
      {/* 1. The Grid Pattern (The "Tech" Look) */}
      <div 
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `linear-gradient(#4f4f4f 1px, transparent 1px), linear-gradient(to right, #4f4f4f 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* 2. The Radial Fade (Softens the edges) */}
      <div className="absolute inset-0 bg-slate-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* 3. Animated Glowing Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" 
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -50, 0], 
          y: [0, 50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" 
      />
    </div>
  );
};

export default Background;