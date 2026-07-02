import React, { useState, useEffect, useRef } from 'react';

interface StatProps {
  target: number;
  label: string;
  suffix?: string;
  delayClass: string;
}

const StatItem: React.FC<StatProps> = ({ target, label, suffix = '', delayClass }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !animated) {
        setAnimated(true);
        const duration = 2000;
        const startTime = performance.now();

        const updateCounter = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(eased * target);
          setCount(current);

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        };
        requestAnimationFrame(updateCounter);
      }
    }, { threshold: 0.2 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [target, animated]);

  return (
    <div ref={elementRef} className={`stat-item ${delayClass}`}>
      <div style={{ display: 'inline-flex', alignItems: 'baseline' }}>
        <span className="stat-number">{count}</span>
        {suffix && <span className="stat-suffix">{suffix}</span>}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export const Stats: React.FC = () => {
  return (
    <section className="stats section" id="stats" data-theme="dark">
      <div className="container">
        <div className="stats-grid">
          <StatItem target={8} suffix="th" label="Edition of SNIA" delayClass="reveal" />
          <StatItem target={9} label="Provinces Represented" delayClass="reveal delay-1" />
          <StatItem target={16} label="Award Categories" delayClass="reveal delay-2" />
          <StatItem target={300} suffix="+" label="Innovators Recognised" delayClass="reveal delay-3" />
        </div>
      </div>
    </section>
  );
};
