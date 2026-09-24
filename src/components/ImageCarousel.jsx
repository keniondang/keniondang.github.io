import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

const ImageCarousel = ({ images, alt = 'Image', heightClass = 'h-48' }) => {
  const [index, setIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    if (!isFullscreen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsFullscreen(false);
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFullscreen]);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className={`relative w-full ${heightClass} rounded-xl overflow-hidden border border-slate-800 bg-slate-900 group/carousel`}>
        <AnimatePresence initial={false}>
          <motion.img
            key={index}
            src={images[index]}
            alt={`${alt} ${index + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 w-full h-full object-cover cursor-zoom-in"
            onClick={() => setIsFullscreen(true)}
          />
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setIsFullscreen(true)}
          aria-label="View fullscreen"
          className="absolute top-2 right-2 p-1.5 bg-slate-950/60 hover:bg-slate-900 text-white rounded-full backdrop-blur-md border border-slate-700 transition-all opacity-0 group-hover/carousel:opacity-100 z-10"
        >
          <Maximize2 size={16} />
        </button>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-slate-950/60 hover:bg-slate-900 text-white rounded-full backdrop-blur-md border border-slate-700 transition-all opacity-0 group-hover/carousel:opacity-100 z-10"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-slate-950/60 hover:bg-slate-900 text-white rounded-full backdrop-blur-md border border-slate-700 transition-all opacity-0 group-hover/carousel:opacity-100 z-10"
            >
              <ChevronRight size={16} />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to image ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${i === index ? 'bg-blue-500 w-5' : 'bg-slate-600 w-1.5'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {isFullscreen && ReactDOM.createPortal(
        <div
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-6 md:p-12"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            type="button"
            onClick={() => setIsFullscreen(false)}
            aria-label="Close fullscreen"
            className="absolute top-6 right-6 p-2 bg-slate-900/80 hover:bg-slate-800 text-white rounded-full border border-slate-700 transition-all z-10"
          >
            <X size={22} />
          </button>

          <AnimatePresence initial={false}>
            <motion.img
              key={index}
              src={images[index]}
              alt={`${alt} ${index + 1}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </AnimatePresence>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Previous image"
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-slate-900/70 hover:bg-slate-800 text-white rounded-full border border-slate-700 transition-all z-10"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Next image"
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-slate-900/70 hover:bg-slate-800 text-white rounded-full border border-slate-700 transition-all z-10"
              >
                <ChevronRight size={24} />
              </button>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10" onClick={(e) => e.stopPropagation()}>
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Go to image ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${i === index ? 'bg-blue-500 w-6' : 'bg-slate-600 w-2'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>,
        document.body
      )}
    </>
  );
};

export default ImageCarousel;
