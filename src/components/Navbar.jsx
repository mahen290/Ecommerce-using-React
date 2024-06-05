import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <ul type = "none" className = "Navbar">
        <li className = "li"> Main Page </li>
        <li className = "li"> About Us </li>
        <li className = "li"> Products </li>
        <li className = "li"> Services </li>
        <li className = "li"> Our Clients </li>
        <li className = "li"> Help </li>
        <li className = "li"> Contact Us </li>
      </ul>
    </div>
  );
}

export default Navbar;
