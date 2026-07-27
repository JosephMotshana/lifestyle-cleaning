import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Sparkles, Truck, Shirt, Paperclip, Flower } from 'lucide-react';

// Import your custom images from assets
import residentialImg from '../assets/residential.jpeg';
import commercialImg from '../assets/commercial.jpeg';
import prepostImg from '../assets/prepost.jpeg';
import laundryImg from '../assets/laundry.jpeg';
import deepImg from '../assets/deep.jpeg';

export default function Services() {
  const serviceList = [
    { 
      title: 'Residential Cleaning', 
      icon: <Home size={20} />, 
      image: residentialImg,
      desc: 'Routine cleaning designed to keep your home fresh, tidy and comfortable. This service may include dusting, sweeping, mopping, vacuuming, bathroom cleaning, kitchen surface cleaning and general organisation.' 
    },
    { 
      title: 'Commercial Cleaning', 
      icon: <Paperclip size={20} />, 
      image: commercialImg,
      desc: 'Professional cleaning for offices, shops, salons and other business premises. Maintaining shared areas to create a clean and professional environment for employees and customers.' 
    },
    { 
      title: 'Pre/Post-Occupational Cleaning', 
      icon: <Truck size={20} />, 
      image: prepostImg,
      desc: 'Professional cleaning for properties before moving in or after moving out. We prepare the space by cleaning floors, bathrooms, kitchens, cupboards, and surfaces so the property is fresh and ready.' 
    },
    { 
      title: 'Laundry Services', 
      icon: <Shirt size={20} />, 
      image: laundryImg,
      desc: 'Convenient washing, drying and neatly folding of clothing, bedding and household linen. Pick-up and drop-off services are also available for added convenience.' 
    },
    { 
      title: 'Deep Cleaning', 
      icon: <Sparkles size={20} />, 
      image: deepImg,
      desc: 'A detailed top-to-bottom clean that targets built-up dirt, grease, dust and hard-to-reach areas. Ideal for homes that need extra attention, seasonal cleaning or a complete refresh.' 
    },
    { 
      title: 'Gardening', 
      icon: <Flower size={20} />, 
      // Temporary placeholder image for Gardening
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=600',
      desc: 'An intensive outdoors refresh tackling overgrown lawn, garden beds, weeds, and pristine hedge trimming.' 
    },
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
              <div className="service-card-image-wrapper">
                <img src={srv.image} alt={srv.title} className="service-card-image" />
              </div>
              <div className="service-content">
                <div className="service-card-header">
                  <div className="service-icon-box">{srv.icon}</div>
                  <h4 className="service-card-title">{srv.title}</h4>
                </div>
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