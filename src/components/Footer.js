import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-icon">N</span>
            <span>NxtGig</span>
          </div>
          <p className="footer__tagline">
            Transforming students into real-world developers through live SaaS projects.
          </p>
        </div>

        <div className="footer__links-group">
          <h4>Platform</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Browse Projects</Link></li>
          </ul>
        </div>

        <div className="footer__links-group">
          <h4>Program</h4>
          <ul>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#get-started">Get Started</a></li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© 2025 NxtGig. All rights reserved.</span>
        <span>Built with ❤️ for student developers</span>
      </div>
    </footer>
  );
}
