import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Sparkles, Truck, Shirt, LayoutGrid } from 'lucide-react';

export default function Services() {
  const serviceList = [
    { title: 'Standard Cleaning', icon: <Home size={24} />, desc: 'Reliable, recurring tidy ups to keep your living spaces fresh and healthy.' },
    { title: 'Deep Cleaning', icon: <Sparkles size={24} />, desc: 'An intensive top-to-bottom sanitize tackling hidden grime, baseboards, and appliances.' },
    { title: 'Move-in / Move-out Cleaning', icon: <Truck size={24} />, desc: 'Perfect for landlords, tenants, and property owners setting up new beginnings.' },
    { title: 'Laundry Assistance', icon: <Shirt size={24} />, desc: 'Professional fabric washing, drying, and organization to lift the load off your week.' },
    { title: 'Home Organization / Packages', icon: <LayoutGrid size={24} />, desc: 'Decluttering spaces and building customized monthly maintenance schedules.' },
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