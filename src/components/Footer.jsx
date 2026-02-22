import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    // Added 'relative z-50' to ensure it sits ON TOP of the background
    // Changed bg to 'slate-900' for contrast
    <footer className="relative z-50 w-full bg-slate-900 border-t border-slate-800 pt-10 pb-8 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        
        {/* Social Links */}
        <div className="flex gap-8 mb-6">
          {[
            { icon: Github, link: "https://github.com/yourusername" },
            { icon: Linkedin, link: "https://linkedin.com/in/yourusername" },
            { icon: Mail, link: "mailto:your.email@example.com" }
          ].map((social, idx) => (
            <a 
              key={idx}
              href={social.link} 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-400 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300 p-2 bg-slate-800/50 rounded-full hover:bg-slate-800"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>

        {/* Text */}
        <div className="text-center">
          <p className="text-slate-300 font-medium">Designed & Built by Keni Nicholas Ondang</p>
          <p className="text-slate-500 text-xs mt-2 font-mono">
            React.js · Tailwind CSS · Framer Motion
          </p>
          <p className="text-slate-600 text-[10px] mt-4">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;