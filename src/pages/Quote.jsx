import React, { useState } from 'react';

export default function Quote() {
  const [formData, setFormData] = useState({
    propertyType: 'Residential', // Default property type
    service: 'Standard Residential Cleaning',
    // Residential fields
    bedrooms: '2',
    bathrooms: '1',
    // Commercial fields
    squareMeters: '',
    workstations: '',
    // Contact Info
    fullName: '',
    email: '',
    phone: ''
  });

  // Services categorized by property type
  const residentialServices = [
    'Standard Residential Cleaning',
    'Airbnb / Short-Term Rental Cleaning',
    'Pre/Post Occupational Cleaning',
    'Laundry Cleaning',
    'Gardening & Outdoor Maintenance',
    'Pool Cleaning'
  ];

  const commercialServices = [
    'Office Routine Cleaning',
    'Commercial Cleaning',
    'Retail & Salon Cleaning',
    'Post-Renovation / Move-In Cleaning',
    'Commercial Gardening & Grounds Maintenance'
  ];

  // Handle Property Type Change (resets default service & clears non-relevant inputs)
  const handlePropertyTypeChange = (e) => {
    const selectedType = e.target.value;
    const defaultService = selectedType === 'Residential' 
      ? residentialServices[0] 
      : commercialServices[0];

    setFormData((prev) => ({
      ...prev,
      propertyType: selectedType,
      service: defaultService
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    console.log('Quote Request Submitted:', formData);
    // You can hook up your email API or backend submission here
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
          
          {/* 1. Property Type Selector */}
          <div className="form-field">
            <label className="field-label">Property Type</label>
            <select 
              name="propertyType"
              value={formData.propertyType}
              onChange={handlePropertyTypeChange}
              className="field-select"
            >
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial / Office</option>
            </select>
          </div>

          {/* 2. Dynamic Service Dropdown */}
          <div className="form-field">
            <label className="field-label">Select Service</label>
            <select 
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="field-select"
            >
              {formData.propertyType === 'Residential'
                ? residentialServices.map((srv, idx) => (
                    <option key={idx} value={srv}>{srv}</option>
                  ))
                : commercialServices.map((srv, idx) => (
                    <option key={idx} value={srv}>{srv}</option>
                  ))
              }
            </select>
          </div>

          {/* 3. Dynamic Inputs Based on Property Type */}
          {formData.propertyType === 'Residential' ? (
            /* Residential Sizing Inputs */
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
                  required
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
                  required
                />
              </div>
            </div>
          ) : (
            /* Commercial Sizing Inputs */
            <div className="form-row-two-columns">
              <div className="form-field">
                <label className="field-label">Estimated Size (m²)</label>
                <input 
                  type="number" 
                  name="squareMeters"
                  min="1" 
                  value={formData.squareMeters}
                  onChange={handleChange}
                  className="field-input" 
                  placeholder="e.g. 150" 
                  required
                />
              </div>
              <div className="form-field">
                <label className="field-label">Number of Workstations / Desks</label>
                <input 
                  type="number" 
                  name="workstations"
                  min="0" 
                  value={formData.workstations}
                  onChange={handleChange}
                  className="field-input" 
                  placeholder="e.g. 12" 
                />
              </div>
            </div>
          )}

          {/* 4. Contact Details */}
          <div className="form-field">
            <label className="field-label">Full Name</label>
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="field-input" 
              placeholder="John Doe" 
              required
            />
          </div>

          <div className="form-row-two-columns">
            <div className="form-field">
              <label className="field-label">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="field-input" 
                placeholder="john@example.com" 
                required
              />
            </div>
            <div className="form-field">
              <label className="field-label">Phone / WhatsApp Number</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="field-input" 
                placeholder="060 123 4567" 
                required
              />
            </div>
          </div>

          {/* Submission Button */}
          <div className="form-action-divider">
            <button type="submit" className="btn-form-submit">
              Submit Quote Request
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}