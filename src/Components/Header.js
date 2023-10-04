import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import heartImage from './../images/anatomicalheart.png'
import tweet from './../images/tweet.jpg';

function Header() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(tweet);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleMenuClick = (path) => {
    navigate(path);
    closeDropdown();
  }

  const showTweet = () => {
    setModalImage(tweet);
    toggleModal();
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/">VerdeEphemera</a>
      </div>
      <div className="dropdown-menu">
        <button className="dropdown-button" onClick={toggleDropdown}>
          See What We Have To Offer
        </button>
        {isDropdownOpen && (
          <ul className={`dropdown-list ${isDropdownOpen ? 'open' : ''}`} >
            <li>
              <Link to="/library" onClick={() => handleMenuClick('/library')}>
                Library
              </Link>
            </li>
            <li>
              <Link to="/florist" onClick={() => handleMenuClick('/florist')}>
                Florist
              </Link>
            </li>
            <li>
              <Link to="/cafe" onClick={() => handleMenuClick('/cafe')}>
                Cafe
              </Link>
            </li>
            <li>
              <Link to="/bakery" onClick={() => handleMenuClick('/bakery')}>
                Bakery
              </Link>
            </li>
          </ul>
        )}
      </div>
      <div className="fun-thing" onClick={showTweet}>
        <img
          src={heartImage}
          alt="Fun Image"
          height="150px"
        />
      </div>
      {isModalOpen && (
        <div className="modal-container" onClick={toggleModal}>
          <div className="modal-content">
            <img src={modalImage} alt="Enlarged Image" />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
