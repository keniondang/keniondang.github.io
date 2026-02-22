import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // "Instant" makes it jump to top immediately.
    // Use "smooth" if you prefer a scrolling animation.
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;