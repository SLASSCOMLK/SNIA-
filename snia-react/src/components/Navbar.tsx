import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setIsOpen(false);
    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const isTransparentDark = (isHomePage || location.pathname === '/winners') && !isScrolled;

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isTransparentDark ? 'navbar-transparent-dark' : ''}`} id="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img 
            src={isTransparentDark ? "/images/snia_white.png" : "/images/Main logo (1).png"} 
            alt="SLASSCOM National Ingenuity Awards 2026" 
            className="nav-logo-img" 
          />
        </Link>
        <div className={`nav-links ${isOpen ? 'open' : ''}`} id="navLinks">
          <Link to={isHomePage ? '#home' : '/'} onClick={(e) => handleLinkClick(e, 'home')}>Home</Link>
          <Link to={isHomePage ? '#about' : '/#about'} onClick={(e) => handleLinkClick(e, 'about')}>About</Link>
          <Link to={isHomePage ? '#categories' : '/#categories'} onClick={(e) => handleLinkClick(e, 'categories')}>Categories</Link>
          <Link to="/winners" className={location.pathname === '/winners' ? 'active' : ''}>Winners Showcase</Link>
          <Link to={isHomePage ? '#contact' : '/#contact'} onClick={(e) => handleLinkClick(e, 'contact')}>Contact</Link>
        </div>
        <div className={`menu-toggle ${isOpen ? 'active' : ''}`} id="menuToggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};
