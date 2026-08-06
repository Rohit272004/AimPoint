import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ProductCard from '../../components/ProductCard/ProductCard';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { PRODUCTS_DATA, SERVICES_DATA, COMPANY_INFO } from '../../constants/company';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      <Hero />

      {/* About Preview Section */}
      <section className="home-about-section">
        <div className="container">
          <div className="home-about-grid">
            <div className="home-about-image-wrapper">
              <div className="about-img-box">
                <ShieldCheck size={64} color="#0F4C81" />
                <h3>Enterprise Grade Standards</h3>
                <p>Building resilient technical infrastructure for modern business operations.</p>
              </div>
            </div>
            <div className="home-about-content">
              <SectionTitle subtitle="About AimPoint" title="Empowering Business Through Robust IT Infrastructure" centered={false} />
              <p className="home-about-para">
                {COMPANY_INFO.description}
              </p>
              <ul className="home-about-features">
                <li><CheckCircle2 size={18} color="#1D74F5" /> Certified enterprise hardware and server solutions</li>
                <li><CheckCircle2 size={18} color="#1D74F5" /> End-to-end network design and deployment</li>
                <li><CheckCircle2 size={18} color="#1D74F5" /> Dedicated technical support and AMC maintenance</li>
              </ul>
              <div className="home-about-btn-wrap">
                <Link to="/about" className="btn btn-primary">
                  Read More <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="home-products-section">
        <div className="container">
          <SectionTitle subtitle="Our Hardware & Equipment" title="Enterprise Products" centered={true} />
          <div className="products-grid">
            {PRODUCTS_DATA.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="section-cta-center">
            <Link to="/products" className="btn btn-secondary">
              View All Products <ArrowRight size={16} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="home-services-section">
        <div className="container">
          <SectionTitle subtitle="What We Do" title="Professional IT Services" centered={true} />
          <div className="services-grid">
            {SERVICES_DATA.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="section-cta-center">
            <Link to="/services" className="btn btn-primary">
              Explore All Services <ArrowRight size={16} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="home-contact-preview">
        <div className="container">
          <div className="contact-preview-box">
            <div className="contact-preview-info">
              <span className="section-subtitle">Get In Touch</span>
              <h2>Ready to Upgrade Your IT Infrastructure?</h2>
              <p>Contact our technical team today to discuss your business requirements and receive expert assistance.</p>
              
              <ul className="contact-info-list">
                <li>
                  <Phone size={20} className="c-icon" />
                  <span>{COMPANY_INFO.phone}</span>
                </li>
                <li>
                  <Mail size={20} className="c-icon" />
                  <span>{COMPANY_INFO.email}</span>
                </li>
                <li>
                  <MapPin size={20} className="c-icon" />
                  <span>{COMPANY_INFO.address}</span>
                </li>
              </ul>
            </div>
            <div className="contact-preview-action">
              <Link to="/contact" className="btn btn-primary btn-large">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
