import React from 'react';
import { Link } from 'react-router-dom';
import {
  Server,
  BatteryCharging,
  Cable,
  Network,
  Router,
  Wifi,
  Cpu,
  Phone,
  Printer,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import './ProductCard.css';

export default function ProductCard({ product }) {
  // Select icon based on product id
  const getProductIcon = (id) => {
    switch (id) {
      case "enterprise-servers":
        return <Server size={32} color="#0F4C81" />;

      case "ups-power-solutions":
        return <BatteryCharging size={32} color="#0F4C81" />;

      case "network-cables":
        return <Cable size={32} color="#0F4C81" />;

      case "network-switches":
        return <Network size={32} color="#0F4C81" />;

      case "routers":
        return <Router size={32} color="#0F4C81" />;

      case "wireless-solutions":
        return <Wifi size={32} color="#0F4C81" />;

      case "processors":
        return <Cpu size={32} color="#0F4C81" />;

      case "telephony":
        return <Phone size={32} color="#0F4C81" />;

      case "printers-scanners":
        return <Printer size={32} color="#0F4C81" />;

      case "software-licenses":
        return <ShieldCheck size={32} color="#0F4C81" />;

      default:
        return <Server size={32} color="#0F4C81" />;
    }
  };

  return (
    <div className="product-card">
      <div className="product-card-header">
        <div className="product-icon-box">
          {getProductIcon(product.id)}
        </div>
        <span className="product-tag">Enterprise Grade</span>
      </div>
      <div className="product-card-body">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-desc">{product.shortDesc}</p>
      </div>
      <div className="product-card-footer">
        <Link to="/contact" className="product-enquiry-link">
          Enquire Now <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
