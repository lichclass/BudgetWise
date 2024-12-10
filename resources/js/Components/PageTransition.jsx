import { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';

export default function PageTransition({ children }) {
  const [isVisible, setIsVisible] = useState(true);
  const { component } = usePage();

  // Create a unique key based on the current page component
  const pageKey = component;

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 300);
    
    return () => clearTimeout(timer);
  }, [pageKey]);

  return (
    <div 
      className={`transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      key={pageKey}
    >
      {children}
    </div>
  );
}