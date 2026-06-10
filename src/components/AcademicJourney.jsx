import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';

/**
 * AcademicJourney
 * A connected three-stop "path" telling the international education story.
 * Each stop has its own accent color + a small cultural SVG motif (drawn inline,
 * no image assets needed). Stops light up on scroll along a glowing connector.
 *
 * Order follows the timeline: Indonesia -> China -> Vietnam.
 */

// --- Cultural motifs (simple, tasteful line glyphs — not clip-art) ---

// Indonesia: a stylized candi bentar (split temple gateway) — two tapering towers with a gap
const IndonesiaMotif = ({ color }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    {/* left tower */}
    <path d="M10 54V22l3-3v-4l3 2v-5l3 3v-3l3 4v38" />
    {/* stepped notches, left */}
    <path d="M13 30h9M14 38h8M15 46h7" opacity="0.6" />
    {/* right tower (mirror) */}
    <path d="M54 54V22l-3-3v-4l-3 2v-5l-3 3v-3l-3 4v38" />
    {/* stepped notches, right */}
    <path d="M51 30h-9M50 38h-8M49 46h-7" opacity="0.6" />
    {/* base */}
    <path d="M8 54h17M39 54h17" />
  </svg>
);

// China: a stylized pagoda with tiered roofs
const ChinaMotif = ({ color }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    <path d="M32 8l14 8H18l14-8z" />
    <path d="M20 16l-6 8h36l-6-8" />
    <path d="M22 24l-4 7h28l-4-7" />
    <path d="M24 31v18h16V31" />
    <path d="M30 49v-8h4v8" />
  </svg>
);

// Vietnam: a stylized lotus (Vietnam's national flower) over water
const VietnamMotif = ({ color }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    <path d="M32 14c3 7 3 14 0 22-3-8-3-15 0-22z" />
    <path d="M32 36c-6-3-12-2-17 2 5 5 12 6 17 2" />
    <path d="M32 36c6-3 12-2 17 2-5 5-12 6-17 2" />
    <path d="M32 36c-2-6-7-10-13-11 1 7 6 12 13 11z" opacity="0.7" />
    <path d="M32 36c2-6 7-10 13-11-1 7-6 12-13 11z" opacity="0.7" />
    <path d="M12 48c6 3 34 3 40 0" opacity="0.6" />
  </svg>
);

const BLUE = "#3b82f6"; // matches the toolkit icons / site accent

const stops = [
  {
    country: "Indonesia",
    city: "Tangerang",
    school: "Sophos School — Oxford AQA",
    note: "Where it started",
    year: "2022",
    accent: BLUE,
    Motif: IndonesiaMotif
  },
  {
    country: "China",
    city: "Guangzhou",
    school: "South China University of Technology",
    note: "AI summer program",
    year: "2024",
    accent: BLUE,
    Motif: ChinaMotif
  },
  {
    country: "Vietnam",
    city: "Ho Chi Minh City",
    school: "Ton Duc Thang University",
    note: "B.Sc. Computer Science",
    year: "2022–26",
    accent: BLUE,
    Motif: VietnamMotif
  }
];

const Stop = ({ data, index }) => {
  const { country, city, school, note, year, accent, Motif } = data;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative flex-1 group"
    >
      <div
        className="relative rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md p-8 md:p-9 h-full transition-all duration-300 hover:bg-slate-900/60 hover:border-blue-500/30 overflow-hidden"
      >
        {/* Soft glow corner (blue, theme-consistent) */}
        <div
          className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-2xl opacity-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-25 bg-blue-500"
        />

        {/* Motif + year row */}
        <div className="flex items-start justify-between mb-7">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center border border-blue-500/20 bg-blue-500/10 transition-all duration-300 group-hover:border-blue-500/40">
            <Motif color={accent} />
          </div>
          <span className="text-xs font-mono text-slate-500 flex items-center gap-1 mt-1">
            <Calendar size={12} /> {year}
          </span>
        </div>

        {/* Country */}
        <h3 className="text-2xl font-bold text-slate-200 mb-1.5">
          {country}
        </h3>
        <div className="text-sm text-slate-400 flex items-center gap-1 mb-5">
          <MapPin size={13} /> {city}
        </div>

        {/* School + note */}
        <p className="text-slate-200 font-medium leading-relaxed">{school}</p>
        <p className="text-sm text-slate-500 mt-1.5">{note}</p>
      </div>
    </motion.div>
  );
};

const AcademicJourney = () => {
  return (
    <div className="relative mt-4">
      {/* Glowing connector line (desktop, behind the cards) */}
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 z-0">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
          style={{ originX: 0 }}
          className="h-full w-full bg-gradient-to-r from-blue-500/20 via-blue-500/50 to-blue-500/20"
        />
      </div>

      {/* Stops */}
      <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-5 items-stretch">
        {stops.map((s, i) => (
          <React.Fragment key={s.country}>
            <Stop data={s} index={i} />
            {i < stops.length - 1 && (
              <div className="hidden md:flex items-center text-slate-600 text-2xl font-light self-center">
                →
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default AcademicJourney;
