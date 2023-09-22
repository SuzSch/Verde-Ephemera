import React, { useState } from 'react';
import './Header.css';

function Header() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/">VerdeEphemera</a>
      </div>
      <div className="dropdown-menu">
        <button className="dropdown-button" onClick={toggleDropdown}>
          What We Offer
        </button>
        {isDropdownOpen && (
          <ul className="dropdown-list">
            <li>
              <a href="/library" onClick={closeDropdown}>
                Library
              </a>
            </li>
            <li>
              <a href="/florist" onClick={closeDropdown}>
                Florist
              </a>
            </li>
            <li>
              <a href="/cafe" onClick={closeDropdown}>
                Cafe
              </a>
            </li>
            <li>
              <a href="/bakery" onClick={closeDropdown}>
                Bakery
              </a>
            </li>
          </ul>
        )}
      </div>
      <div className="fun-thing">
        <a href="/">Fun Thing</a>
      </div>
    </header>
  );
}

export default Header;
