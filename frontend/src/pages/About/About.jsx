import React from 'react';
import { COMPANY_INFO } from '../../constants/company';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Target, Eye, CheckCircle,Users,Server, Network, Headphones } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1>About AimPoint Technology</h1>
          <p>Building reliable foundations for enterprise computing and secure digital infrastructure.</p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="about-intro-section">
  <div className="container">
    <div className="about-intro-grid">

      <div className="about-intro-text">
        <SectionTitle
          subtitle="Who We Are"
          title="Building Reliable IT Infrastructure for Modern Businesses"
          centered={false}
        />

        <p className="about-desc">
          Founded in <strong>2026</strong>, <strong>AimPoint Technology</strong> is
          an emerging IT infrastructure and technology solutions company dedicated to
          helping businesses build secure, reliable, and scalable technology
          environments. We provide enterprise servers, networking solutions,
          wireless infrastructure, power backup systems,
          software licensing, and professional IT support tailored to business
          requirements.
        </p>

        <p className="about-desc">
          Our goal is to deliver dependable technology backed by quality products,
          technical expertise, and responsive customer service. Whether you are
          setting up a new office, upgrading your existing infrastructure, or
          expanding your business operations, AimPoint Technologies is committed to
          providing practical solutions that support your long-term growth.
        </p>

      </div>

      <div className="about-highlight-box">

        <div className="highlight-item">
          <Server size={32} color="#1D74F5" />
          <div>
            <h4>Enterprise IT Solutions</h4>
            <p>
              Reliable servers, networking equipment, and business technology
              solutions designed for modern organizations.
            </p>
          </div>
        </div>

        <div className="highlight-item">
          <Network size={32} color="#1D74F5" />
          <div>
            <h4>Professional Deployment</h4>
            <p>
              Complete installation, configuration, and implementation of IT
              infrastructure tailored to your business needs.
            </p>
          </div>
        </div>

        <div className="highlight-item">
          <Headphones size={32} color="#1D74F5" />
          <div>
            <h4>Dedicated Technical Support</h4>
            <p>
              Prompt assistance, maintenance services, and ongoing technical
              support to keep your business running efficiently.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon-box">
                <Target size={36} color="#0F4C81" />
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide businesses with dependable, high-performance IT infrastructure and professional technical services that ensure operational stability, security, and scalability.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon-box">
                <Eye size={36} color="#0F4C81" />
              </div>
              <h3>Our Vision</h3>
              <p>
                To become the most trusted technology infrastructure partner known for uncompromising hardware quality, technical integrity, and enduring client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="container">
          <SectionTitle subtitle="Core Values" title="Why Choose AimPoint Technology" centered={true} />
          <div className="why-grid">
            <div className="why-card">
              <CheckCircle size={24} color="#1D74F5" />
              <h4>Technical Expertise</h4>
              <p>Our engineers possess deep knowledge in network architecture, server deployment, and system maintenance.</p>
            </div>
            <div className="why-card">
              <CheckCircle size={24} color="#1D74F5" />
              <h4>Quality Assurance</h4>
              <p>We source and supply only certified, reliable enterprise-grade hardware from trusted global manufacturers.</p>
            </div>
            <div className="why-card">
              <CheckCircle size={24} color="#1D74F5" />
              <h4>Transparent Consultation</h4>
              <p>We recommend solutions based strictly on your operational requirements, ensuring optimal investment value.</p>
            </div>
            <div className="why-card">
              <CheckCircle size={24} color="#1D74F5" />
              <h4>Dedicated Support</h4>
              <p>From initial installation to ongoing AMC upkeep, our support team remains responsive and proactive.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
