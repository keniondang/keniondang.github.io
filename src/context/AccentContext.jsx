import React, { createContext, useContext, useState, useEffect } from 'react';

/**
 * AccentContext
 * A lightweight accent-color switcher. Keeps the site's dark aesthetic intact,
 * only swapping the accent hue used for highlights. Sets a CSS variable
 * (--accent) on <html> AND exposes the active accent's Tailwind-ish hex so
 * components using inline styles can read it.
 *
 * NOTE: most existing components use hard-coded Tailwind `blue-*` classes, so
 * this won't recolor everything automatically — it drives the switcher UI,
 * the --accent CSS var (usable anywhere), and any component that opts in by
 * reading `useAccent()`. Blue stays the default so nothing looks off.
 */

export const ACCENTS = [
  { id: 'blue',   label: 'Blue',   hex: '#3b82f6' },
  { id: 'violet', label: 'Violet', hex: '#8b5cf6' },
  { id: 'emerald',label: 'Emerald',hex: '#10b981' },
  { id: 'amber',  label: 'Amber',  hex: '#f59e0b' },
  { id: 'rose',   label: 'Rose',   hex: '#f43f5e' },
];

const AccentContext = createContext({ accent: ACCENTS[0], setAccentId: () => {} });

export const useAccent = () => useContext(AccentContext);

export const AccentProvider = ({ children }) => {
  // Note: no localStorage (not supported in some sandboxed previews) — defaults to blue each load.
  const [accentId, setAccentId] = useState('blue');
  const accent = ACCENTS.find((a) => a.id === accentId) || ACCENTS[0];

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent.hex);
  }, [accent]);

  return (
    <AccentContext.Provider value={{ accent, accentId, setAccentId }}>
      {children}
    </AccentContext.Provider>
  );
};
