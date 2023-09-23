import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="contact-info">
        <p>Email: example@example.com</p>
        <p>Phone: (503) 555-5555</p>
        <p>Address: 123 Main Street, City, Country</p>
      </div>
      <div className="social-media">
        <a href="https://www.facebook.com">
          <img src="facebook-icon.png" alt="Facebook" />
        </a>
        <a href="https://www.twitter.com">
          <img src="twitter-icon.png" alt="Twitter" />
        </a>
        <a href="https://www.instagram.com">
          <img src="instagram-icon.png" alt="Instagram" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
