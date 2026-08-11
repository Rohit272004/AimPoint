import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Server } from 'lucide-react';
import './Navbar.css';
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="" className="logo-icon-wrapper" />
          <span className="logo-text">Aim<span className='point'>Point</span> <span className="logo-highlight">Technology</span></span>
        </Link>

        <nav className={`navbar-nav ${isOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li>
              <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://wa.me/918369000767"
                target="_blank"
                rel="noopener noreferrer"
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}
              >
                Connect With US
              </NavLink>
            </li>
          </ul>
          <div className="navbar-action-mobile">
            <Link to="/contact" className="btn btn-primary quote-btn" onClick={closeMenu}>
              Request Quote
            </Link>
          </div>
        </nav>

        <div className="navbar-action-desktop">
          <Link to="/contact" className="btn btn-primary quote-btn">
            Request Quote
          </Link>
        </div>

        <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
