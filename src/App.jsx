// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar.jsx';
import VideoSection from './components/VideoSection.jsx';
import AboutUs from './components/AboutUs';  // Import AboutUs component
import Courses from './components/Courses.jsx';
import ContactUs from './components/ContactUs.jsx';
import Footer from './components/Footer.jsx';
// In App.jsx or main.jsx
import './styles.css';

function App() {
  return (
    <div>
      <Navbar />
      <VideoSection />
      <AboutUs />  {/* Render the AboutUs section */}
      <Courses />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
