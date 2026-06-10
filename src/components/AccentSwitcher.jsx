import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette } from 'lucide-react';
import { ACCENTS, useAccent } from '../context/AccentContext';

/**
 * AccentSwitcher
 * A small floating button (bottom-right) that opens a row of accent swatches.
 * Drives the --accent CSS variable; keeps the dark theme intact.
 */
const AccentSwitcher = () => {
  const { accent, setAccentId } = useAccent();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex items-center gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            className="flex items-center gap-2 bg-slate-900/90 border border-slate-700 rounded-full px-3 py-2 backdrop-blur-md shadow-lg"
          >
            {ACCENTS.map((a) => (
              <button
                key={a.id}
                aria-label={`Accent ${a.label}`}
                onClick={() => setAccentId(a.id)}
                className={`w-6 h-6 rounded-full transition-transform hover:scale-110 ${
                  accent.id === a.id ? 'ring-2 ring-offset-2 ring-offset-slate-900 ring-white' : ''
                }`}
                style={{ background: a.hex }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        aria-label="Change accent color"
        onClick={() => setOpen((o) => !o)}
        className="w-12 h-12 rounded-full bg-slate-900/90 border border-slate-700 backdrop-blur-md shadow-lg flex items-center justify-center text-slate-200 hover:text-white hover:border-slate-500 transition-colors"
        style={{ color: accent.hex }}
      >
        <Palette size={20} />
      </button>
    </div>
  );
};

export default AccentSwitcher;
