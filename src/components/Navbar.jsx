import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  
  const links = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
    { name: "Awards", path: "/awards" }
  ];

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl text-slate-100 flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          Keni Nicholas<span className="text-blue-500">Ondang</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-medium transition-all duration-300 relative ${
                location.pathname === link.path ? 'text-blue-400' : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.span 
                  layoutId="underline" 
                  className="absolute left-0 top-full mt-1 w-full h-[1px] bg-blue-500" 
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;