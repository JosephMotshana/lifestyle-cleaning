import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Award, Star, Phone } from 'lucide-react';

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-subtitle">Welcome to Lifestyle Cleaning</span>
          <h1 className="hero-title">
            Clean Spaces.<br />Better Lifestyle.
          </h1>
          <p className="hero-description">
            Professional cleaning services for homes & businesses. Your dirt, our problem.
          </p>
          <div className="hero-actions">
            <Link to="/quote" className="btn-primary">
              Request a Free Quote
            </Link>
            <a 
              href="https://wa.me/27602752239" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-secondary-phone"
            >
              <Phone size={20} className="phone-icon" />
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image"></div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="badges-section">
        <div className="badges-grid">
          <div className="badge-card">
            <Award size={24} className="badge-icon" />
            <p className="badge-text">Quality You Can Trust</p>
          </div>
          <div className="badge-card">
            <ShieldCheck size={24} className="badge-icon" />
            <p className="badge-text">Reliable & Professional</p>
          </div>
          <div className="badge-card">
            <Clock size={24} className="badge-icon" />
            <p className="badge-text">Eco-Friendly Products</p>
          </div>
          <div className="badge-card">
            <Star size={24} className="badge-icon" />
            <p className="badge-text">Satisfaction Guaranteed</p>
          </div>
        </div>
      </section>

      {/* The Problem & Solution Section */}
      <section className="analysis-section">
        <div className="problem-card">
          <h3 className="card-headingheading-problem">The Problem</h3>
          <ul className="analysis-list">
            <li><span className="icon-marker">❌</span> Busy schedules leave little time for cleaning.</li>
            <li><span className="icon-marker">❌</span> Inconsistent cleaning quality and reliability.</li>
            <li><span className="icon-marker">❌</span> Lack of trustworthy and professional service providers.</li>
          </ul>
        </div>
        <div className="solution-card">
          <h3 className="card-heading-solution">Our Solution</h3>
          <ul className="analysis-list">
            <li><span className="icon-marker">✅</span> Structured custom intervals matching your dynamic lifestyle.</li>
            <li><span className="icon-marker">✅</span> Highly-trained, reliable teams with deep attention to detail.</li>
            <li><span className="icon-marker">✅</span> Transparent, trusted, eco-safe operations you can count on.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}