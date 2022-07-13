import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [link, updateLink] = useState('/');
  return (
    <header className="header">
      <h1 className="title">Math Magician</h1>
      <ul className="links">
        <li className="link-item first-item">
          <NavLink
            to="/"
            className={link === '/' ? 'link selected' : 'link'}
            onClick={() => updateLink('/')}
          >
            Home
          </NavLink>
        </li>
        <li className="link-item">
          <NavLink
            to="/calculator"
            className={link === '/calculator' ? 'link selected' : 'link'}
            onClick={() => updateLink('/calculator')}
          >
            Calculator
          </NavLink>
        </li>
        <li className="link-item">
          <NavLink
            to="quote"
            className={link === '/quote' ? 'link selected' : 'link'}
            onClick={() => updateLink('/quote')}
          >
            Quote
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
