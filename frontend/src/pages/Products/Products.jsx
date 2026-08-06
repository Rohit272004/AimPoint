import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../../constants/company';
import ProductCard from '../../components/ProductCard/ProductCard';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Search } from 'lucide-react';
import './Products.css';

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = PRODUCTS_DATA.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-page">
      <div className="page-header">
        <div className="container">
          <h1>Enterprise Products & Equipment</h1>
          <p>Certified hardware solutions engineered for high performance, reliability, and security.</p>
        </div>
      </div>

      <section className="products-listing-section">
        <div className="container">
          <div className="products-filter-bar">
            <SectionTitle subtitle="Hardware Catalog" title="Our Equipment Lineup" centered={false} />
            <div className="search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="no-results">
              <p>No products found matching your search criteria.</p>
            </div>
          ) : (
            <div className="products-page-grid">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-item-wrapper">
                  <ProductCard product={product} />
                  <div className="product-extended-details">
                    <p className="full-desc">{product.fullDesc}</p>
                    <ul className="product-feature-list">
                      {product.features.map((feat, idx) => (
                        <li key={idx}>• {feat}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
