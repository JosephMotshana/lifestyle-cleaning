import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  ShieldCheck, 
  Award, 
  Clock, 
  Star, 
  Home as HomeIcon, 
  Sparkles, 
  Truck, 
  Shirt, 
  Paperclip, 
  Flower, 
  Calendar, 
  Sparkle, 
  CheckCircle2 
} from 'lucide-react';

export default function Home() {
  const homeServices = [
    { title: 'Residential Cleaning', icon: <HomeIcon size={24} />,},
    { title: 'Commercial Cleaning', icon: <Paperclip size={24} />,},
    { title: 'Pre/Post-Occupational', icon: <Truck size={24} />, },
    { title: 'Laundry Services', icon: <Shirt size={24} />, },
    { title: 'Deep Cleaning', icon: <Sparkles size={24} />,},
    { title: 'Gardening & Yard Care', icon: <Flower size={24} />,},
  ];

  return (
    <div className="home-page">
      {/* 1. Hero Section (Image Background & CTA Buttons Only) */}
      <section className="hero-section">
        <div className="hero-container">
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
              <Phone size={20} className="phone-icon" /> Call / WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* 2. Problem & Solution Section */}
      <section className="problem-solution-section">
        <div className="problem-solution-container">
          <h2 className="section-title">Cleaning should not add more stress to your life.</h2>
          <p className="problem-narrative">
            Between work, family, moving and running a business, keeping every space clean can become overwhelming.
          </p>
          <div className="solution-highlight-box">
            <p className="solution-narrative">
              <strong>Lifestyle Cleaning</strong> takes care of the cleaning with dependable staff, professional service and attention to detail — giving you more time to focus on what matters.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Services Overview */}
      <section className="home-services-section">
        <div className="home-services-container">
          <div className="section-header">
            <h2 className="section-title">Our Key Services</h2>
            <p className="section-subtitle">Flexible solutions designed to elevate your living and working environment.</p>
          </div>
          <div className="home-services-grid">
            {homeServices.map((srv, idx) => (
              <div key={idx} className="home-service-card">
                <div className="service-icon-wrapper">{srv.icon}</div>
                <h3 className="service-card-title">{srv.title}</h3>
                <p className="service-card-desc">{srv.desc}</p>
              </div>
            ))}
          </div>
          <div className="center-btn-wrapper">
            <Link to="/services" className="btn-secondary-outline">
              View All Service Details
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="why-us-section">
        <div className="why-us-container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Lifestyle Cleaning</h2>
            <p className="section-subtitle">We build long-term relationships through quality, security, and consistent results.</p>
          </div>
          <div className="why-us-grid">
            <div className="why-card">
              <Award size={32} className="why-icon" />
              <h4>Quality You Can Trust</h4>
              <p>Thorough checklists and meticulous care for every room or property.</p>
            </div>
            <div className="why-card">
              <ShieldCheck size={32} className="why-icon" />
              <h4>Vetted & Dependable Staff</h4>
              <p>Reliable, trustworthy teams trained to handle your space with care.</p>
            </div>
            <div className="why-card">
              <Clock size={32} className="why-icon" />
              <h4>Flexible Scheduling</h4>
              <p>Custom recurring intervals or one-off visits tailored to your schedule.</p>
            </div>
            <div className="why-card">
              <Star size={32} className="why-icon" />
              <h4>Satisfaction Guaranteed</h4>
              <p>Transparent communication and dedicated service quality from day one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How It Works */}
      <section className="how-it-works-section">
        <div className="how-it-works-container">
          <div className="section-header">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">3 simple steps to a cleaner space</p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <Calendar size={28} className="step-icon" />
              <h3>1. Request a Quote</h3>
              <p>Fill out our simple quote form or message us directly with your property requirements.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <Sparkle size={28} className="step-icon" />
              <h3>2. We Clean & Refresh</h3>
              <p>Our professional team arrives on time fully equipped to transform your space.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <CheckCircle2 size={28} className="step-icon" />
              <h3>3. Enjoy Your Free Time</h3>
              <p>Relax in a pristine, spotless environment and focus on what truly matters to you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call to Action Banner */}
      <section className="cta-banner-section">
        <div className="cta-banner-container">
          <h2 className="cta-title">Ready for a Spotless Space?</h2>
          <p className="cta-desc">Get in touch with us today for a personalized quote or to schedule your service.</p>
          <div className="cta-buttons">
            <Link to="/quote" className="btn-cta-primary">
              Get Your Free Quote
            </Link>
            <Link to="/contact" className="btn-cta-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}