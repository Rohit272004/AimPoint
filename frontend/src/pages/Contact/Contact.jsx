import React, { useState } from 'react';
import { COMPANY_INFO } from '../../constants/company';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import './Contact.css';

export default function Contact() {

  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    const subject = "Quotation Request";

    const message = `
Hello AimPoint Technology,

I would like to request a quotation.

Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}

Service:
${formData.service}

Message:
${formData.message}
`;

    window.open(
      `https://wa.me/918369000767?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our technical team for inquiries, quotes, and consultations.</p>
        </div>
      </div>

      <section className="contact-main-section">
        <div className="container">
          <div className="contact-grid">
            {/* Left Column: Info */}
            <div className="contact-info-col">
              <SectionTitle subtitle="Reach Out" title="Let's Discuss Your IT Infrastructure" centered={false} />
              <p className="contact-info-desc">
                Whether you need enterprise servers, complete network deployment, surveillance systems, or ongoing maintenance support, our team is ready to assist you.
              </p>

              <ul className="contact-details-list">
                <li>
                  <div className="contact-icon-box">
                    <MapPin size={22} color="#1D74F5" />
                  </div>
                  <div>
                    <h4>Office Address</h4>
                    <p>{COMPANY_INFO.address}</p>
                  </div>
                </li>
                <li>
                  <div className="contact-icon-box">
                    <Phone size={22} color="#1D74F5" />
                  </div>
                  <div>
                    <h4>Phone Number</h4>
                    <p><a href="tel:+918369000767">+91 8369000767</a></p>
                  </div>
                </li>
                <li>
                  <div className="contact-icon-box">
                    <Mail size={22} color="#1D74F5" />
                  </div>
                  <div>
                    <h4>Email Address</h4>
                    <p><a href="mailto:aimpointtechnology26@gmail.com">
                      aimpointtechnology26@gmail.com
                    </a></p>
                  </div>
                </li>
                <li>
                  <div className="contact-icon-box">
                    <Clock size={22} color="#1D74F5" />
                  </div>
                  <div>
                    <h4>Business Hours</h4>
                    <p>{COMPANY_INFO.businessHours}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Column: Contact Form */}
            <div className="contact-form-col">
              <div className="contact-form-wrapper">
                <h3>Send Us a Message</h3>
                {submitted ? (
                  <div className="success-message">
                    <CheckCircle2 size={48} color="#10b981" />
                    <h4>Thank You, {formData.name}!</h4>
                    <p>Your message has been received. Our technical team will get back to you shortly.</p>
                    <button
                      className="btn btn-primary"
                      style={{ marginTop: '20px' }}
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', message: '' });
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Xyz "
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Company Name *</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Xyz "
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@company.com"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 8104000567 "
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message / Requirements *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your IT infrastructure requirements..."
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary submit-btn">
                      Submit Enquiry <Send size={16} style={{ marginLeft: '8px' }} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Placeholder Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-wrapper">
            <div className="map-placeholder-content">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sneh+C-202%2C+2nd+Floor%2C+Pavitradham+Phase+2%2C+Tivri+Naigaon+East"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin size={36} color="#0F4C81" />
                <h3>Aim<span className='point'>Point</span> Technology Headquarters</h3>
                <p>{COMPANY_INFO.address}</p>
                </a>
                {/* <span className="map-note">Interactive map placeholder - Silicon Valley, CA</span> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
