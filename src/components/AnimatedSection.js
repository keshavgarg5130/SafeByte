'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedSection({ children, delay = 0, className = '' }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.style.animationDelay = `${delay}ms`;
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  return (
    <section ref={sectionRef} className={`opacity-0 ${className}`}>
      {children}
    </section>
  );
}
