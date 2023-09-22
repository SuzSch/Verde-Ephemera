import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './Header.css';

function Header() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleMenuClick = (path) => {
    navigate(path);
    closeDropdown();
  }

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
          <ul className="dropdown-list" style={{ display: isDropdownOpen ? 'block' : 'none' }} >
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
      <div className="fun-thing">
        <a href="/">Fun Thing</a>
      </div>
    </header>
  );
}

export default Header;
