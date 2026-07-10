import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // Start dark — hero is always the first section and it's dark-themed
  const [isDark, setIsDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const darkSectionsInView = useRef<Set<Element>>(new Set());

  // Passive scroll listener — only drives the glass-background threshold
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // IntersectionObserver: watch every [data-theme] section.
  // rootMargin '-80px 0px -50% 0px' creates a sensor zone that is
  // the top ~half of the viewport, offset below the navbar height (80px).
  // When a dark section enters this zone the navbar flips dark; when all
  // dark sections leave it flips back to light.
  useEffect(() => {
    darkSectionsInView.current.clear();
    let observer: IntersectionObserver | null = null;

    // Small delay so DOM is ready after route transitions
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('[data-theme]');
      if (!sections.length) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const theme = entry.target.getAttribute('data-theme');
            if (entry.isIntersecting && theme === 'dark') {
              darkSectionsInView.current.add(entry.target);
            } else {
              darkSectionsInView.current.delete(entry.target);
            }
          });
          setIsDark(darkSectionsInView.current.size > 0);
        },
        {
          rootMargin: '-80px 0px -50% 0px',
          threshold: 0,
        }
      );

      sections.forEach((s) => observer!.observe(s));
    }, 150);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
      darkSectionsInView.current.clear();
    };
  }, [location.pathname]);

  const isHomePage = location.pathname === '/';

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    setIsOpen(false);
    if (isHomePage) {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      id="navbar"
      className={[
        'navbar',
        isScrolled ? 'scrolled' : '',
        isDark ? 'navbar-dark' : 'navbar-light',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="nav-container">
        {/* Logo swaps between white (dark sections) and coloured (light sections) */}
        <Link to="/" className="nav-logo">
          <img
            src={isDark ? '/images/snia_white.png' : '/images/Main logo (1).png'}
            alt="SLASSCOM National Ingenuity Awards 2026"
            className="nav-logo-img"
          />
        </Link>

        <div className={`nav-links ${isOpen ? 'open' : ''}`} id="navLinks">
          <Link to={isHomePage ? '#home' : '/'} onClick={(e) => handleLinkClick(e, 'home')}>
            Home
          </Link>
          <Link to={isHomePage ? '#about' : '/#about'} onClick={(e) => handleLinkClick(e, 'about')}>
            About
          </Link>
          <Link to={isHomePage ? '#categories' : '/#categories'} onClick={(e) => handleLinkClick(e, 'categories')}>
            Categories
          </Link>
          <Link to="/winners" className={location.pathname === '/winners' ? 'active' : ''}>
            Winners Showcase
          </Link>
          <Link to={isHomePage ? '#contact' : '/#contact'} onClick={(e) => handleLinkClick(e, 'contact')}>
            Contact
          </Link>
        </div>

        <div
          className={`menu-toggle ${isOpen ? 'active' : ''}`}
          id="menuToggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};
