import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import logoImg from '../assets/logo.jpeg'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Class assignment extracted out of the inline template literal markup
  const getNavItemClass = (path) => {
    return location.pathname === path ? 'nav-item active' : 'nav-item';
  };

  const getMobileNavItemClass = (path) => {
    return location.pathname === path ? 'mobile-nav-item mobile-active' : 'mobile-nav-item';
  };

  const getMobileDropdownClass = () => {
    return isOpen ? 'navbar-mobile-dropdown open' : 'navbar-mobile-dropdown';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo Section */}
        <Link to="/" className="navbar-logo-link" onClick={closeMenu}>
          <div className="navbar-logo-wrapper">
            <img 
              src={logoImg} 
              alt="Lifestyle Cleaning Logo" 
              className="navbar-logo-image" 
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-desktop-menu">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={getNavItemClass(link.path)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/quote" className="btn-nav-quote">
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="navbar-mobile-toggle">
          <button onClick={toggleMenu} aria-label="Toggle navigation menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={getMobileDropdownClass()}>
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={closeMenu}
            className={getMobileNavItemClass(link.path)}
          >
            {link.name}
          </Link>
        ))}
        <Link to="/quote" onClick={closeMenu} className="btn-mobile-quote">
          Get a Quote
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;