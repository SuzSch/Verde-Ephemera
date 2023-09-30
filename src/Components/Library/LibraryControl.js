import React, { useState, useRef, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Slider from "../Slider";
import librarySlider1 from "../../images/slider-book1.jpeg";
import librarySlider2 from "../../images/book-4.jpg";
import librarySlider3 from "../../images/book-5.jpg";
import ItemList from "../ItemList";
import './LibraryControl.css';

function LibraryControl() {
  const libraryItems = [
    {
      title: 'Book Title',
      description: 'A great book.',
      image: librarySlider1,
    },
    {
      title: 'Book Title',
      description: 'A great book.',
      image: librarySlider2,
    },
    {
      title: 'Book Title',
      description: 'A great book.',
      image: librarySlider3,
    },
  ];

  const sliderImages = [librarySlider1, librarySlider2, librarySlider3];

  const styles = {
    header: {
      textAlign: 'center',
      marginTop: '50px',
      marginBottom: '50px',
    }
  }

  const [isFormVisible, setFormVisible] = useState(false);
  const wrapperRef = useRef(null);

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setFormVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="popup-wrapper">
        <button className="hover-trigger" onClick={toggleForm}>
          Log-in or Create Account
        </button>
        <div className={`popup-content ${isFormVisible ? 'active' : ''}`}>
          <form>
            <h2>Log-in</h2>
            <div>
              <label htmlFor="login-email">Email:</label>
              <input type="email" id="login-email" name="login-email" required />
            </div>
            <div>
              <label htmlFor="login-password">Password:</label>
              <input type="password" id="login-password" name="login-password" required />
            </div>
            <button type="submit">Log In</button>
          </form>
          <form>
            <h2>Create Account</h2>
            <div>
              <label htmlFor="signup-name">Name:</label>
              <input type="text" id="signup-name" name="signup-name" required />
            </div>
            <div>
              <label htmlFor="signup-email">Email:</label>
              <input type="email" id="signup-email" name="signup-email" required />
            </div>
            <div>
              <label htmlFor="signup-password">Password:</label>
              <input type="password" id="signup-password" name="signup-password" required />
            </div>
            <button type="submit">Create Account</button>
          </form>
        </div>
      </div>
      <h1 style={styles.header}>Welcome to the VerdeEphemera Library</h1>
      <Slider
        images={sliderImages}
        interval={5000}
        autoplay={true}
      />
      <h2 style={styles.header}>This is some text about the library and how cool it is.</h2>
      <ItemList
        items={libraryItems}
        buttonText="Check Me Out"
      />
      <Footer />
    </div>
  );
}

export default LibraryControl;
