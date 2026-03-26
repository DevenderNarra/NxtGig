import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-icon">N</span>
          <span>NxtGig</span>
        </Link>

        {/* Desktop links */}
        <ul className="navbar__links">
          <li>
            <Link to="/" className={`navbar__link${location.pathname === '/' ? ' active' : ''}`}>
              Home
            </Link>
          </li>
          <li>
            <button className="navbar__link navbar__link--btn" onClick={() => scrollTo('how-it-works')}>
              How It Works
            </button>
          </li>
          <li>
            <Link to="/projects" className="btn btn-primary navbar__cta">
              Get Started
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button className="navbar__hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          <span className={`bar${menuOpen ? ' open' : ''}`} />
          <span className={`bar${menuOpen ? ' open' : ''}`} />
          <span className={`bar${menuOpen ? ' open' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}>
        <Link to="/" className="navbar__mobile-link">Home</Link>
        <button className="navbar__mobile-link" onClick={() => scrollTo('how-it-works')}>How It Works</button>
        <Link to="/projects" className="navbar__mobile-link navbar__mobile-cta">Get Started →</Link>
      </div>
    </nav>
  );
}
