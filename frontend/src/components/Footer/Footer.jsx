import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../../constants/company';
import './Footer.css';
import logo from "../../assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col footer-brand-col">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="" className="logo" />
            <span>AimPoint <span className="highlight">Technology</span></span>
          </Link>
          <p className="footer-desc">
            {COMPANY_INFO.description}
          </p>

        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Contact Details</h3>
          <ul className="footer-contact-list">
            <li>
              <MapPin size={18} className="footer-icon" />
              <span>{COMPANY_INFO.address}</span>
            </li>
            <li>
              <Phone size={18} className="footer-icon" />
              <span><a href="tel:+918369000767">+91 8369000767</a></span>
            </li>
            <li>
              <Mail size={18} className="footer-icon" />
              <span><a href="mailto:aimpointtechnology26@gmail.com">
                aimpointtechnology26@gmail.com
              </a></span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>&copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
