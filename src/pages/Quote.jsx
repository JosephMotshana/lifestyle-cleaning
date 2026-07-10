import React, { useState } from 'react';

export default function Quote() {
  const [formData, setFormData] = useState({
    service: 'Standard Residential Cleaning',
    clientType: 'Working Professional',
    bedrooms: '2',
    bathrooms: '1',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    // This captures and routes your form state without inline expressions
    console.log('Estimation Request Submitted:', formData);
  };

  return (
    <div className="quote-page">
      <div className="quote-container">
        
        {/* Header Block */}
        <div className="quote-header">
          <h2 className="quote-main-title">Request a Quote</h2>
          <p className="quote-subtitle">
            Provide details about your space to get an accurate, customized estimation.
          </p>
        </div>

        {/* Estimation Form */}
        <form className="quote-form" onSubmit={handleQuoteSubmit}>
          
          {/* Service Dropdown */}
          <div className="form-field">
            <label className="field-label">What service do you need?</label>
            <select 
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="field-select"
            >
              <option value="Standard Residential Cleaning">Standard Residential Cleaning</option>
              <option value="Deep Cleaning">Deep Cleaning</option>
              <option value="Move-In / Move-Out Clean">Move-In / Move-Out Clean</option>
              <option value="Laundry Assistance">Laundry Assistance</option>
              <option value="Commercial/Office Space">Commercial/Office Space</option>
            </select>
          </div>

          {/* Target Market Category Selection */}
          <div className="form-field">
            <label className="field-label">I am an / We are a:</label>
            <select 
              name="clientType"
              value={formData.clientType}
              onChange={handleChange}
              className="field-select"
            >
              <option value="Working Professional">Working Professional</option>
              <option value="Family Household">Family Household</option>
              <option value="Property Owner / Airbnb Host">Property Owner / Airbnb Host</option>
              <option value="Elderly Household">Elderly Household</option>
            </select>
          </div>

          {/* Sizing Matrix Rows */}
          <div className="form-row-two-columns">
            <div className="form-field">
              <label className="field-label">Number of Bedrooms</label>
              <input 
                type="number" 
                name="bedrooms"
                min="1" 
                value={formData.bedrooms}
                onChange={handleChange}
                className="field-input" 
                placeholder="2" 
              />
            </div>
            <div className="form-field">
              <label className="field-label">Number of Bathrooms</label>
              <input 
                type="number" 
                name="bathrooms"
                min="1" 
                value={formData.bathrooms}
                onChange={handleChange}
                className="field-input" 
                placeholder="1" 
              />
            </div>
          </div>

          {/* Submission Row */}
          <div className="form-action-divider">
            <button type="submit" className="btn-form-submit">
              Calculate & Submit Request
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}