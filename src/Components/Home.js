import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Home.css';
import shopPhoto from '../images/home-page-pic.jpg';
import bakeryHomePhoto from '../images/bakery-home.jpg';
import floristHomePhoto from '../images/florist-home.jpg';
import libraryHomePhoto from '../images/library-home.jpg';
import cafeHomePhoto from '../images/cafe-home.jpg';
import shopPhoto2 from '../images/shop2.jpg';

function Home() {
  return (
    <div>
      <Header />
      <div className="main-box">
        <h1>Welcome to VerdeEphemera</h1>
        <h3>(Savor Life's Temporal Joys)</h3>
        <div className="picture-gallery">
          <img src={bakeryHomePhoto} alt="Image 1" />
          <img src={floristHomePhoto} alt="Image 2" />
          <img src={libraryHomePhoto} alt="Image 3" />
          <img src={cafeHomePhoto} alt="Image 3" />
        </div>
      </div>
      
      <div className="shop-info">
        <div className="shop-photo" >
          <img src={shopPhoto} alt="Shop Photo" />
        </div>
        <div className="shop-description">
          <h2>
            Verde Ephemera is a unique oasis nestled in the heart of the city, where the boundaries between literature, nature, and culinary artistry blur to create an enchanting experience like no other. Our establishment is a harmonious blend of a library, florist, cafe, and bakery, designed to transport you to a world where time stands still.
          </h2>
        </div>
      </div>

      <div className="shop-info2">
        <div className="shop-photo2" >
          <img src={shopPhoto2} alt="Shop Photo" />
        </div>
        <div className="shop-description2">
          <h2>
            Step into Verde Ephemera and be transported to a realm of dark and cozy elegance. The warm, dimly lit ambiance welcomes you with open arms, encouraging you to leave the hustle and bustle of the outside world behind. Soft, mellow lighting enhances the intimate atmosphere, inviting you to linger and lose yourself in the moment.
          </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;