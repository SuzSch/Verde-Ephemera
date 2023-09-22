import React from 'react';
import Header from './Header'; 
import './Home.css'; 
import shopPhoto from '../images/home-page-pic.jpg';

function Home() {
  return (
    <div>
      <Header />
      <div className="main-box">
        <h1>Welcome to VerdeEphemera</h1>
        <h3>(Savor Life's Temporal Joys)</h3>
        <div className="picture-gallery">
          <img src="image1.jpg" alt="Image 1" />
          <img src="image2.jpg" alt="Image 2" />
          <img src="image3.jpg" alt="Image 3" />
        </div>
      </div>
      <div className="shop-info">
        <div className="shop-photo">
          <img src={shopPhoto} alt="Shop Photo" />
        </div>
        <div className="shop-description">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            vitae elit libero, a pharetra augue. Sed posuere consectetur est at
            lobortis. Vestibulum id ligula porta felis euismod semper.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
