import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
// Ensure this import matches the file name where you saved the Quote page
import Quote from './pages/Quote'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Update this path definition to match the exact imported variable */}
        <Route path="/quote" element={<Quote />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;