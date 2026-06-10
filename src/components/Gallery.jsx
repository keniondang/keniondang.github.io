import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';

/**
 * Gallery — adaptive image gallery that flexes to however many images you give it.
 *
 *  1 image   -> single featured photo
 *  2 images  -> side by side
 *  3-4       -> tidy grid
 *  5+        -> grid showing the first 4, last tile becomes "+N more" -> opens lightbox
 *
 * Every image opens a full lightbox on click (arrow / swipe / Esc to navigate & close).
 * Images are lazy-loaded so they don't fight the background animations.
 *
 * Props:
 *   images: [{ src, alt, caption }]  (caption optional)
 *
 * To add photos later, just push objects into the `images` array on each card's data.
 * An item with no `src` (or src starting with "PLACEHOLDER") renders as a marked
 * placeholder tile instead of a broken image.
 */

const isPlaceholder = (src) => !src || String(src).startsWith('PLACEHOLDER');

const Thumb = ({ img, onClick, className = '', overlay = null }) => {
  if (isPlaceholder(img.src)) {
    return (
      <div
        className={`relative rounded-xl border border-dashed border-amber-500/40 bg-amber-500/5 flex flex-col items-center justify-center text-amber-300/80 ${className}`}
      >
        <ImageOff size={22} className="mb-1" />
        <span className="text-[10px] font-bold uppercase tracking-wider">Photo placeholder</span>
        {img.alt && <span className="text-[10px] text-amber-200/60 mt-1 px-2 text-center">{img.alt}</span>}
      </div>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900 ${className}`}
    >
      <img
        src={img.src}
        alt={img.alt || ''}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors" />
      {overlay}
    </button>
  );
};

const Gallery = ({ images = [] }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const real = images.filter((i) => !isPlaceholder(i.src));
  const openAt = useCallback((i) => { setIndex(i); setOpen(true); }, []);
  const next = useCallback(() => setIndex((p) => (p + 1) % real.length), [real.length]);
  const prev = useCallback(() => setIndex((p) => (p - 1 + real.length) % real.length), [real.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, next, prev]);

  if (!images.length) return null;

  const count = images.length;

  // Layout selection
  let layout;
  if (count === 1) {
    layout = (
      <div className="h-56 md:h-72">
        <Thumb img={images[0]} onClick={() => openAt(0)} className="w-full h-full" />
      </div>
    );
  } else if (count === 2) {
    layout = (
      <div className="grid grid-cols-2 gap-3 h-48 md:h-56">
        {images.map((img, i) => (
          <Thumb key={i} img={img} onClick={() => openAt(i)} className="w-full h-full" />
        ))}
      </div>
    );
  } else if (count <= 4) {
    layout = (
      <div className="grid grid-cols-2 gap-3 h-64 md:h-72">
        {images.map((img, i) => (
          <Thumb key={i} img={img} onClick={() => openAt(i)} className="w-full h-full" />
        ))}
      </div>
    );
  } else {
    // 5+ : show first 4, overlay "+N more" on the 4th
    const shown = images.slice(0, 4);
    const moreCount = count - 4;
    layout = (
      <div className="grid grid-cols-2 gap-3 h-64 md:h-72">
        {shown.map((img, i) => {
          const isLast = i === 3;
          return (
            <Thumb
              key={i}
              img={img}
              onClick={() => openAt(i)}
              className="w-full h-full"
              overlay={
                isLast ? (
                  <div className="absolute inset-0 bg-slate-950/70 flex items-center justify-center text-white font-bold text-lg backdrop-blur-[1px]">
                    +{moreCount} more
                  </div>
                ) : null
              }
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className="mt-4">
      {layout}

      {/* Lightbox */}
      <AnimatePresence>
        {open && real.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-300 hover:text-white bg-slate-900/60 rounded-full border border-slate-700"
            >
              <X size={22} />
            </button>

            <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src={real[index].src}
                alt={real[index].alt || ''}
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
              {real[index].caption && (
                <p className="text-center text-sm text-slate-400 mt-3">{real[index].caption}</p>
              )}

              {real.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-3 bg-slate-900/70 hover:bg-slate-800 text-white rounded-full border border-slate-700"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-slate-900/70 hover:bg-slate-800 text-white rounded-full border border-slate-700"
                  >
                    <ChevronRight size={24} />
                  </button>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-slate-500 font-mono">
                    {index + 1} / {real.length}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
