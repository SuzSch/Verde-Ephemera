import React from 'react';
import './Footer.css';
import instaPng from './../images/insta.png'

function Footer() {
  return (
    <footer>
      <div className="contact-info">
        <p>Send us an email: suzanne@verde-ephemera.com</p>
        <p>Phone: (503) 555-5555</p>
        <p>Address: 123 Main Street, City, Country</p>
      </div>
      <div className="social-media">
        
        <a href="https://www.instagram.com">
          <img src={instaPng} width={25} alt="Instagram" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
