import React from 'react';
import { Link } from 'react-router-dom';
import {
  Server,
  Network,
  Wifi,
  Video,
  ArrowRight,
} from "lucide-react"
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span> Professional IT Infrastructure
          </div>
          <h1 className="hero-headline">
            Reliable Technology, <br />
            <span className="highlight-text">Trusted Relationships</span>
          </h1>
          <p className="hero-description">
            AimPoint Technologies provides reliable IT infrastructure solutions including enterprise servers, networking, computing, surveillance, wireless solutions, and technical support for businesses.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              Request Quote <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
            <Link to="/services" className="btn btn-secondary">
              Our Services
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="server-rack-graphic">
            <div className="rack-header">
              <span className="rack-led red"></span>
              <span className="rack-led yellow"></span>
              <span className="rack-led green"></span>
              <span className="rack-title">AIMPOINT TECHNOLOGIES</span>
            </div>

            <div className="rack-units">
              <div className="rack-unit">
                <div className="unit-info">
                  <Server size={20} color="#1D74F5" />
                  <span>Enterprise Servers</span>
                </div>
                <div className="unit-status">AVAILABLE</div>
              </div>

              <div className="rack-unit">
                <div className="unit-info">
                  <Network size={20} color="#1D74F5" />
                  <span>Network Infrastructure</span>
                </div>
                <div className="unit-status">READY</div>
              </div>

              <div className="rack-unit">
                <div className="unit-info">
                  <Wifi size={20} color="#1D74F5" />
                  <span>Wireless Solutions</span>
                </div>
                <div className="unit-status">DEPLOYMENT</div>
              </div>

              <div className="rack-unit">
                <div className="unit-info">
                  <Video size={20} color="#1D74F5" />
                  <span>Security Systems</span>
                </div>
                <div className="unit-status">INSTALLATION</div>
              </div>
            </div>
          </div>

          <div className="floating-card card-1">
            <span className="f-title">Professional IT Solutions</span>
            <span className="f-sub">
              Servers, Networking & Infrastructure
            </span>
          </div>

          <div className="floating-card card-2">
            <span className="f-title">Reliable Technical Support</span>
            <span className="f-sub">
              Installation, AMC & Consultation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
