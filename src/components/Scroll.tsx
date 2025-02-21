"use client";
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
        <button
        onClick={scrollToTop}
        className="fixed right-8 z-50 w-12 h-12 flex items-center justify-center bg-transparent text-gray-800 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        style={{ bottom: '100px' }}
        aria-label="Volver arriba"
      >
        <FaArrowUp />
      </button>
      
    )
  );
};

export default ScrollToTop;
