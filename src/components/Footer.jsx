import React from 'react';
import { Link } from 'react-router-dom';
// Using only the absolute standard core icons to prevent version bugs
import { MessageSquare, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Branding & Mission */}
        <div className="footer-brand">
          <h2 className="footer-logo">
            LIFESTYLE<span className="highlight">Cleaning</span>
          </h2>
          <p>
            Structured cleaning layouts engineered beautifully around your homes, businesses, and busy dynamic schedules. Your dirt, our problem.
          </p>
          <div className="social-links">
            {/* Inline SVG for LinkedIn to completely bypass package errors */}
            <a href="https://www.linkedin.com/company/acts-quadrant/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            
            {/* Inline SVG for Facebook to completely bypass package errors */}
            <a href="https://web.facebook.com/people/ACTS-quadrant/61587171284968/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>

            <a href="https://wa.me/27602752239" target="_blank" rel="noreferrer" aria-label="WhatsApp Business">
              <MessageSquare size={20} />
            </a>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="footer-section">
          <h3>Network</h3>
          <ul className="footer-links">
            <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
            <li><Link to="/services" onClick={scrollToTop}>Services</Link></li>
            <li><Link to="/about" onClick={scrollToTop}>Our Mission</Link></li>
            <li><Link to="/quote" onClick={scrollToTop}>Get a Quote</Link></li>
            <li><Link to="/contact" onClick={scrollToTop}>Join Us</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h3>Get in Touch</h3>
          <ul className="footer-contact">
            <li>
              <Mail size={16} className="highlight" />
              <a href="mailto:info@lifestylecleaning.co.za">info@lifestylecleaning.co.za</a>
            </li>
            <li>
              <MapPin size={16} className="highlight" />
              <span>Gauteng and Surrounding Areas</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} Lifestyle Cleaning. All rights reserved.</p>
          <a href="https://actsquadrant.com/" target="_blank" rel="noreferrer" className="hero-btn">
            Powered By Acts Quadrant
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;