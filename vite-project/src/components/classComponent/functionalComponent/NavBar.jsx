import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/css/NavBar.css'

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav className="navbar">
      <div className="logo"></div>
      <ul className="nav-links">
        <li>
          <Link
            to="/"
            className={activeLink === '/' ? 'active' : ''}
            onClick={() => handleLinkClick('/')}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/use-effect"
            className={activeLink === '/use-effect' ? 'active' : ''}
            onClick={() => handleLinkClick('/use-effect')}
          >
            UseEffect
          </Link>
        </li>
        <li>
          <Link
            to="/use-memo"
            className={activeLink === '/use-memo' ? 'active' : ''}
            onClick={() => handleLinkClick('/use-memo')}
          >
            UseMemo
          </Link>
        </li>
        <li>
          <Link
            to="/class-comp"
            className={activeLink === '/class-comp' ? 'active' : ''}
            onClick={() => handleLinkClick('/class-comp')}
          >
            Class Component
          </Link>
        </li>
        <li>
          <Link
            to="/use-ref"
            className={activeLink === '/use-ref' ? 'active' : ''}
            onClick={() => handleLinkClick('/use-ref')}
          >
            UseRef
          </Link>
        </li>
        <li>
          <Link
            to="/gallery"
            className={activeLink === '/gallery' ? 'active' : ''}
            onClick={() => handleLinkClick('/gallery')}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={activeLink === '/contact' ? 'active' : ''}
            onClick={() => handleLinkClick('/contact')}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className={activeLink === '/login' ? 'active' : ''}
            onClick={() => handleLinkClick('/login')}
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={activeLink === '/about' ? 'active' : ''}
            onClick={() => handleLinkClick('/about')}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
