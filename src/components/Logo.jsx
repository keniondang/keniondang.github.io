import React from 'react';
import { Building2 } from 'lucide-react';

/**
 * Logo — small, favicon-sized brand mark shown next to a title.
 * Drop your actual logo file path into the `src` field of each card's data.
 * If `src` is missing or starts with "PLACEHOLDER", a marked placeholder shows instead.
 *
 * Keep logos small and square-ish; they sit inline beside the org/school name.
 */
const isPlaceholder = (src) => !src || String(src).startsWith('PLACEHOLDER');

const Logo = ({ src, alt = '', size = 40 }) => {
  if (isPlaceholder(src)) {
    return (
      <div
        title="Logo placeholder — drop your logo file here"
        style={{ width: size, height: size }}
        className="flex-shrink-0 rounded-lg border border-dashed border-amber-500/40 bg-amber-500/5 flex items-center justify-center text-amber-300/70"
      >
        <Building2 size={size * 0.5} />
      </div>
    );
  }
  return (
    <div
      style={{ width: size, height: size }}
      className="flex-shrink-0 rounded-lg bg-white/95 border border-slate-700 flex items-center justify-center overflow-hidden p-1"
    >
      <img src={src} alt={alt} loading="lazy" className="w-full h-full object-contain" />
    </div>
  );
};

export default Logo;
