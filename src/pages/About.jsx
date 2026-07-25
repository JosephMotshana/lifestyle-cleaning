import React from 'react';
import { Eye, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        
        {/* Our Story Card */}
        <div className="story-card">
          <h2 className="story-title">Our Story</h2>
          <p className="story-text">
            <strong>LIFESTYLE Cleaning</strong> was created to provide reliable, professional, and quality homecare and cleaning services that help clients enjoy cleaner, healthier living spaces. We treat every home with custom attention, ensuring your peace of mind is preserved.
          </p>
        </div>

        {/* Vision and Mission Split */}
        <div className="vision-mission-grid">
          <div className="about-split-card">
            <div className="split-icon-badge">
              <Eye size={24} />
            </div>
            <div className="split-content">
              <h3 className="split-title">Our Vision</h3>
              <p className="split-desc">To become a trusted household name in homecare services across our community and surrounding areas.</p>
            </div>
          </div>

          <div className="about-split-card">
            <div className="split-icon-badge">
              <Target size={24} />
            </div>
            <div className="split-content">
              <h3 className="split-title">Our Mission</h3>
              <p className="split-desc">Deliver quality service with professionalism, consistency, and care—one home at a time.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}