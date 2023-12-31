import React, { useState, useRef, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Slider from "../Slider";
import Book1 from "../../images/book-4.jpg";
import Book2 from "../../images/book-5.jpg";
import Book3 from "../../images/book-6.jpg";
import librarySlider1 from "../../images/library-home.jpg";
import librarySlider2 from "../../images/library2.jpg";
import librarySlider3 from "../../images/library3.jpg";
import ItemList from "../ItemList";
import './LibraryControl.css';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { addBookToFirestore } from '../firebase';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemDetail from '../ItemDetail'

function LibraryControl() {

  const handleAddBook = () => {
    const bookData = {
      tile: 'New Book Title',
      description: "A new book description",
    };
    addBookToFirestore(bookData);
  };

  const auth = getAuth();

  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Registration error', errorMessage)
      });
  };

  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Login error:', errorMessage);
      });
  };

  const [isFormVisible, setFormVisible] = useState(false);
  const wrapperRef = useRef(null);

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  const handleClickOutside = (event) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target) &&
      !event.target.classList.contains('popup-trigger')
    ) {
      setFormVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      setIsLoggedIn(true);
      setUserEmail(email);
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      await registerUser(email, password);
      setIsLoggedIn(true);
      setUserEmail(email);
    } catch (error) {
      console.error("Registration error:", error.message);
    }
  };

  const sliderImages = [librarySlider1, librarySlider2, librarySlider3];

  const styles = {
    header: {
      textAlign: 'center',
      marginTop: '50px',
      marginBottom: '50px',
      color: 'antiquewhite',
    }
  }
  const libraryItems = [
    {
      itemId: 1,
      title: 'Book Title',
      description: 'A great book.',
      image: Book1,
    },
    {
      itemId: 2,
      title: 'Book Title',
      description: 'A great book.',
      image: Book2,
    },
    {
      itemId:3,
      title: 'Book Title',
      description: 'A great book.',
      image: Book3,
    },
  ];

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  return (
    <div>
      <Header />
      <div className="popup-wrapper">
        {isLoggedIn ? (
          <p>Welcome {userEmail}</p>
        ) : (
          <button className="hover-trigger popup-trigger" onClick={toggleForm}>
            Log-in or Create Account
          </button>
        )}
        <div className={`popup-content ${isFormVisible ? 'active' : ''}`}>
          <form onSubmit={handleLogin}>
            <h2>Log-in</h2>
            <div>
              <label htmlFor="login-email">Email:</label>
              <input type="email" id="login-email" name="login-email" value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="login-password">Password:</label>
              <input type="password" id="login-password" name="login-password" value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)} required />
            </div>
            <button type="submit">Log In</button>
          </form>
          <form onSubmit={handleRegistration}>
            <h2>Create Account</h2>
            {/* <div>
              <label htmlFor="signup-name">Name:</label>
              <input type="text" id="signup-name" name="signup-name" required />
            </div> */}
            <div>
              <label htmlFor="signup-email">Email:</label>
              <input type="email" id="signup-email" name="signup-email" value={email}
                onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="signup-password">Password:</label>
              <input type="password" id="signup-password" name="signup-password" value={password}
                onChange={(e) => setPassword(e.target.value)} required />
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
      <Routes>
      <Route path="/Item/:itemId" element={<ItemDetail libraryItems={libraryItems} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default LibraryControl;
