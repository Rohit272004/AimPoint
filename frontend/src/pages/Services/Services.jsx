import React from 'react';
import { SERVICES_DATA } from '../../constants/company';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

export default function Services() {
  return (
    <div className="services-page">
      <div className="page-header">
        <div className="container">
          <h1>Professional IT Services</h1>
          <p>Comprehensive technical solutions designed to ensure seamless business operations.</p>
        </div>
      </div>

      <section className="services-listing-section">
        <div className="container">
          <SectionTitle subtitle="Our Expertise" title="End-to-End IT Infrastructure Services" centered={true} />
          
          <div className="services-page-grid">
            {SERVICES_DATA.map((service) => (
              <div key={service.id} className="service-detail-card">
                <div className="service-card-main-content">
                  <ServiceCard service={service} />
                </div>
                <div className="service-extended-info">
                  <p className="service-full-desc">{service.fullDesc}</p>
                  <h5 className="benefits-title">Key Benefits:</h5>
                  <ul className="service-benefits-list">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={16} color="#1D74F5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="service-card-action">
                    <Link to="/contact" className="btn btn-secondary" style={{ width: '100%', fontSize: '0.9rem', padding: '10px' }}>
                      Enquire Service <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
