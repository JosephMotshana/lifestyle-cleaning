import React from 'react';
import { MessageSquare, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const handleInquirySubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        
        {/* Contact Info Channels */}
        <div className="contact-info-panel">
          <div className="panel-header">
            <h2 className="panel-title">How We Reach You</h2>
            <p className="panel-desc">Have a quick question or want to lock down an immediate booking? Reach out directly via our official channels.</p>
          </div>

          <div className="channels-stack">
            <a href="https://wa.me/27602752239" target="_blank" rel="noreferrer" className="channel-link-box">
              <div className="channel-icon-badge badge-whatsapp"><MessageSquare size={20} /></div>
              <div className="channel-label-box">
                <span className="channel-tag">WhatsApp Business</span>
                <span className="channel-value">060 275 2239</span>
              </div>
            </a>

            <div className="channel-link-box">
              <div className="channel-icon-badge badge-email"><Mail size={20} /></div>
              <div className="channel-label-box">
                <span className="channel-tag">Email Enquiries</span>
                <span className="channel-value">info@lifestylecleaning.co.za</span>
              </div>
            </div>

            <div className="channel-link-box">
              <div className="channel-icon-badge badge-area"><MapPin size={20} /></div>
              <div className="channel-label-box">
                <span className="channel-tag">Service Areas</span>
                <span className="channel-value">Gauteng and Surrounding Areas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Form */}
        <div className="contact-form-panel">
          <h3 className="form-panel-title">Send us a direct message</h3>
          <form className="contact-form" onSubmit={handleInquirySubmit}>
            <div className="form-row-two-columns">
              <div className="form-field">
                <label className="field-label">Your Name</label>
                <input type="text" className="field-input" placeholder="Lee-Ann" />
              </div>
              <div className="form-field">
                <label className="field-label">Phone Number</label>
                <input type="text" className="field-input" placeholder="060 275 2239" />
              </div>
            </div>
            <div className="form-field">
              <label className="field-label">Email Address</label>
              <input type="email" className="field-input" placeholder="name@example.com" />
            </div>
            <div className="form-field">
              <label className="field-label">Message</label>
              <textarea rows="4" className="field-textarea" placeholder="Tell us how we can help..."></textarea>
            </div>
            <button type="submit" className="btn-form-submit">
              Submit Inquiry
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}