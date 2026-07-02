import React, { useRef, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  const trophyRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<string>('perspective(1000px) rotateY(0deg) rotateX(0deg)');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!trophyRef.current) return;
    const rect = trophyRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    setTiltStyle(`perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`);
  };

  const handleMouseLeave = () => {
    setTiltStyle('perspective(1000px) rotateY(0deg) rotateX(0deg)');
  };

  const handleScrollToHighlights = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('highlights');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Generate particles once on mount using useMemo
  const particles = useMemo(() => {
    const particleCount = 25;
    return Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      bottom: -Math.random() * 20,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 8,
      opacity: Math.random() * 0.4 + 0.1,
    }));
  }, []);

  return (
    <section className="hero section animate-fadeInUp" id="home" data-theme="dark">
      <div className="hero-bg">
        <img src="/images/SNIA2026.jpg" alt="Awards Stage Background" />
        <img src="/images/SNIA2026.jpg" alt="Awards Stage Background" />
      </div>

      <div className="hero-particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: `${p.left}%`,
              bottom: `${p.bottom}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              opacity: p.opacity
            }}
          />
        ))}
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="line">SLASSCOM</span>
            <span className="line">National Ingenuity</span>
            <span className="line gold">Awards 2026</span>
          </h1>
          <p className="hero-description">
            Celebrating bold ideas, scalable innovations, and transformative solutions shaping Sri Lanka's knowledge and
            innovation economy.
          </p>
          <div className="hero-buttons">
            <Link to="/winners" className="btn-primary">
              View Winners Showcase <i className="fas fa-arrow-right ml-1"></i>
            </Link>
            <a href="#highlights" onClick={handleScrollToHighlights} className="btn-secondary">
              Watch Highlights
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div
            ref={trophyRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: tiltStyle }}
            className="hero-image-wrapper trophy-wrapper"
          >
            <div className="rotating-trophy">
              {Array.from({ length: 17 }).map((_, i) => (
                <img
                  key={i}
                  src="/images/SNIA_Award.png"
                  className="trophy-layer"
                  style={{
                    transform: `translateZ(-${i}px)`,
                    filter: `brightness(${1 - (i * 0.02)})`
                  }}
                  alt="Trophy layer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
