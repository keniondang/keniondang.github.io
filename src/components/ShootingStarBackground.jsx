import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const ShootingStarBackground = () => {
  const canvasRef = useRef(null);
  
  // 1. Mouse Tracking for Spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  // 2. The Shooting Star Animation Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let meteors = [];

    // Resize Canvas
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Meteor {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.len = Math.random() * 80 + 10;
        this.speed = Math.random() * 10 + 6;
        this.size = Math.random() * 1 + 0.1;
        // Shooting angle (45 degrees)
        this.vx = -this.speed; 
        this.vy = this.speed;  
        this.life = 0;
        this.maxLife = 100;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life++;

        // Reset if out of bounds or "dead"
        if (this.x < 0 || this.y > canvas.height || this.life > this.maxLife) {
          this.reset();
          // Randomize start position to be mostly top/right
          this.x = Math.random() * canvas.width + 200;
          this.y = -100;
        }
      }

      draw() {
        ctx.strokeStyle = `rgba(59, 130, 246, ${1 - this.life / this.maxLife})`; // Fade out blue
        ctx.lineWidth = this.size;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.len, this.y + this.len); // Trail
        ctx.stroke();
      }
    }

    // Initialize 20 meteors
    const initMeteors = () => {
      meteors = [];
      for (let i = 0; i < 20; i++) {
        meteors.push(new Meteor());
      }
    };

    const animate = () => {
      // Clear with slight trail effect (optional, removed for crispness)
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      meteors.forEach(m => {
        m.update();
        m.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    initMeteors();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // 3. Dynamic Gradient Spotlight
  const backgroundStyle = useMotionTemplate`
    radial-gradient(
      500px circle at ${mouseX}px ${mouseY}px,
      rgba(29, 78, 216, 0.15),
      transparent 80%
    )
  `;

  return (
    <div 
      className="fixed inset-0 z-0 w-full h-full bg-slate-950 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* A. Deep Atmospheric Blobs (Breathing) */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-blue-900/20 rounded-full blur-[120px]" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] bg-purple-900/10 rounded-full blur-[120px]" 
      />

      {/* B. The Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* C. Mouse Spotlight */}
      <motion.div
        className="absolute inset-0 opacity-100 transition duration-300"
        style={{ background: backgroundStyle }}
      />

      {/* D. Shooting Stars Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
      />

      {/* E. Vignette (Dark Edges) */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
    </div>
  );
};

export default ShootingStarBackground;