import React from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  Briefcase,
  Network,
  Headphones,
  Server,
  MonitorCog,
  HardDriveDownload,
  Wrench,
  ArrowRight,
} from "lucide-react";
import './ServiceCard.css';

export default function ServiceCard({ service }) {
  const getServiceIcon = (id) => {
    switch (id) {
    case "it-infrastructure":
      return <Layers size={28} color="#1D74F5" />;

    case "turnkey-projects":
      return <Briefcase size={28} color="#1D74F5" />;

    case "network-installation":
      return <Network size={28} color="#1D74F5" />;

    case "technical-support":
      return <Headphones size={28} color="#1D74F5" />;

    case "hardware-installation":
      return <Server size={28} color="#1D74F5" />;

    case "software-deployment":
      return <MonitorCog size={28} color="#1D74F5" />;

    case "data-recovery":
      return <HardDriveDownload size={28} color="#1D74F5" />;

    case "amc-support":
      return <Wrench size={28} color="#1D74F5" />;

    default:
      return <Layers size={28} color="#1D74F5" />;
  }
  };

  return (
    <div className="service-card">
      <div className="service-icon-wrapper">
        {getServiceIcon(service.id)}
      </div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-desc">{service.shortDesc}</p>
      <Link to="/services" className="service-learn-more">
        Learn More <ArrowRight size={16} />
      </Link>
    </div>
  );
}
