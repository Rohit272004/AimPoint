import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Home } from 'lucide-react';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="container not-found-container">
        <div className="not-found-icon-box">
          <AlertCircle size={64} color="#0F4C81" />
        </div>
        <h1 className="not-found-code">404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link to="/" className="btn btn-primary">
          <Home size={18} style={{ marginRight: '8px' }} /> Back to Homepage
        </Link>
      </div>
    </div>
  );
}
