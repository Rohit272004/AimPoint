import React from 'react';
import './SectionTitle.css';

export default function SectionTitle({ subtitle, title, centered = true }) {
  return (
    <div className={`section-title-wrapper ${centered ? 'centered' : ''}`}>
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
      <h2 className="section-heading">{title}</h2>
    </div>
  );
}
