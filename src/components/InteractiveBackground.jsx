import React, { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    // Configuration
    const spacing = 30; // Space between dots
    const baseRadius = 1.2;
    const hoverRadius = 400; // Radius of mouse influence
    const color = "rgba(59, 130, 246, 1)"; // Tailwind Blue-500

    let mouse = { x: -1000, y: -1000 };

    // Resize handling
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Initialize Grid
    const initParticles = () => {
      particles = [];
      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          particles.push({
            x,
            y,
            originX: x,
            originY: y,
            size: baseRadius,
            alpha: 0.1
          });
        }
      }
    };

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        // Calculate distance between mouse and particle
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Interaction Logic
        let scale = 1;
        let alpha = 0.15; // Base opacity

        if (distance < 200) {
          // If mouse is close, scale up and brighten
          const force = (200 - distance) / 200;
          scale = 1 + force * 2; // Grow up to 3x size
          alpha = 0.15 + force * 0.8; // Opacity up to ~1.0
        }

        // Draw the dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = color.replace('1)', `${alpha})`);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Track Mouse
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Start
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-slate-950">
      
      {/* 1. Deep Atmospheric Glows (Static Background Layers) */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]" />

      {/* 2. The Interactive Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full block"
      />
      
      {/* 3. Vignette Overlay (Darkens edges for focus) */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-slate-950/90 pointer-events-none" />
    </div>
  );
};

export default InteractiveBackground;