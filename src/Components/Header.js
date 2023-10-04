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
          MENU
        </button>
        {isDropdownOpen && (
          <div className={`dropdown-list ${isDropdownOpen ? 'open' : ''}`} >
            <h3>
              <Link to="/library" onClick={() => handleMenuClick('/library')}>
                Library
              </Link>
            </h3>
            <h3>
              <Link to="/florist" onClick={() => handleMenuClick('/florist')}>
                Florist
              </Link>
            </h3>
            <h3>
              <Link to="/cafe" onClick={() => handleMenuClick('/cafe')}>
                Cafe
              </Link>
            </h3>
            <h3>
              <Link to="/bakery" onClick={() => handleMenuClick('/bakery')}>
                Bakery
              </Link>
            </h3>
          </div>
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
