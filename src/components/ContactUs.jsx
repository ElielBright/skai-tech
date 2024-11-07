// src/components/ContactUs.jsx
import React from 'react';

function ContactUs() {
  return (
    <div className="contact-us" id="contact">
      <div className="container">
        <h2>We'll be excited to hear from you! Send us a message.</h2>
        <form action="https://formspree.io/f/xyyrwyya" method="POST">
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" placeholder="Your message" required></textarea>
          <button type="submit"><i className="fa fa-paper-plane"></i> Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
