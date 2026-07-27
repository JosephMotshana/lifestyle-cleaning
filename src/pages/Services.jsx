import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Sparkles, Truck, Shirt, LayoutGrid, Paperclip, Flower } from 'lucide-react';

export default function Services() {
  const serviceList = [
    { title: 'Residential Cleaning', icon: <Home size={24} />, desc: 'Routine cleaning designed to keep your home fresh, tidy and comfortable. This service may include dusting, sweeping, mopping, vacuuming, bathroom cleaning, kitchen surface cleaning and general organisation.' },
    { title: 'Commercial Cleaning', icon: <Paperclip size={24} />, desc: 'Professional cleaning for offices, shops, salons and other business premises. This service may include dusting, vacuuming, mopping, sanitising workstations, cleaning kitchens and bathrooms, emptying bins and maintaining shared areas to create a clean and professional environment for employees and customers.Commercial cleaning can be booked as a once-off service or arranged on a regular schedule. A quotation is provided according to the size of the premises and cleaning requirements.' },
    { title: 'Pre/Post-Occupational Cleaning', icon: <Truck size={24} />, desc: 'Professional cleaning for properties before moving in or after moving out. We prepare the space by cleaning floors, bathrooms, kitchens, cupboards, surfaces and other areas so the property is fresh and ready for occupation.' },
    { title: 'Laundry Services', icon: <Shirt size={24} />, desc: 'Convenient washing, drying and neatly folding of clothing, bedding and household linen. Pick-up and drop-off services are also available for added convenience.' },
    { title: 'Deep Cleaning', icon: <Sparkles size={24} />, desc: 'A detailed top-to-bottom clean that targets built-up dirt, grease, dust and hard-to-reach areas. Ideal for homes that need extra attention, seasonal cleaning or a complete refresh.' },
    { title: 'Gardening', icon: <Flower size={24} />, desc: 'An intensive outdoors refresh tackling overgrown lawn, garden beds, weeds, and pristine hedge trimming.' },
  ];

  return (
    <div className="services-page">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-main-title">Our Services</h2>
          <p className="services-subtitle">Tailored cleaning layouts engineered beautifully around your homes and businesses.</p>
        </div>

        {/* Card Grid Layout */}
        <div className="services-grid">
          {serviceList.map((srv, idx) => (
            <div key={idx} className="service-card">
              <div className="service-icon-box">
                {srv.icon}
              </div>
              <div className="service-content">
                <h4 className="service-card-title">{srv.title}</h4>
                <p className="service-card-desc">{srv.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Notice Banner */}
        <div className="pricing-banner">
          <h3 className="banner-title">Need a tailored pricing structure?</h3>
          <p className="banner-desc">Prices vary based on the size of the space, layouts, and unique requirements. Let us build a dynamic checklist just for you.</p>
          <Link to="/quote" className="btn-banner">
            Get Booking Estimation
          </Link>
        </div>
      </div>
    </div>
  );
}