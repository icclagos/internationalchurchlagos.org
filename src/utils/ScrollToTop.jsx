import { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    const handleScrollToTop = () => {
      if (window.scrollY > 500) {
        document.getElementById('scroll-to-top').classList.remove('hidden');
      } else {
        document.getElementById('scroll-to-top').classList.add('hidden');
      }
    };
    
    window.addEventListener('scroll', handleScrollToTop);
    return () => window.removeEventListener('scroll', handleScrollToTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      id="scroll-to-top"
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg z-50 hidden transition-all duration-300"
      aria-label="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};

export default ScrollToTop;