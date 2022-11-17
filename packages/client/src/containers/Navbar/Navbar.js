import React from 'react';
import './Navbar.css';

export function Navbar() {
  return (
    <div>
      <ul className="nav-info">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <input type="text" placeholder="Search Spices" />
        </li>
      </ul>
    </div>
  );
}
