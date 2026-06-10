import React from 'react';
import { PencilLine } from 'lucide-react';

/**
 * Placeholder
 * Wraps clearly-marked filler text so nothing accidentally ships as a real claim.
 * Replace the children with your own copy, then delete the <Placeholder> wrapper.
 *
 * Usage:
 *   <Placeholder>Your real text goes here later.</Placeholder>
 *   <Placeholder inline>short inline filler</Placeholder>
 */
const Placeholder = ({ children, inline = false }) => {
  if (inline) {
    return (
      <span className="text-amber-300/90 bg-amber-500/10 border border-dashed border-amber-500/40 rounded px-1.5 py-0.5">
        {children}
      </span>
    );
  }
  return (
    <div className="relative rounded-xl border border-dashed border-amber-500/40 bg-amber-500/5 p-4 my-2">
      <span className="absolute -top-2.5 left-3 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-slate-950 px-2 py-0.5 rounded-full border border-amber-500/40">
        <PencilLine size={10} /> Placeholder — replace
      </span>
      <div className="text-amber-200/80 text-sm leading-relaxed pt-1">
        {children}
      </div>
    </div>
  );
};

export default Placeholder;
