import React, { useState, useEffect, useRef } from 'react';

const chars = "-_~`!@#$%^&*()+=[]{}|;:,.<>?/";

const HackerText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  const scramble = () => {
    let pos = 0;
    
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const scrambled = text.split("")
        .map((char, index) => {
          if (index < pos) {
            return text[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplayText(scrambled);
      pos += 1 / 3;

      if (pos >= text.length) {
        clearInterval(intervalRef.current);
      }
    }, 30);
  };

  // Scramble on mount
  useEffect(() => {
    scramble();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <span 
      className={className}
      onMouseEnter={scramble} // Re-scramble on hover
    >
      {displayText}
    </span>
  );
};

export default HackerText;