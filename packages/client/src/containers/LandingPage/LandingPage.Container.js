import React from 'react';
import './LandingPage.Style.css';
import { ProductsList } from './ProductsList';
import { products } from './Products';
import { Navbar } from '../Navbar/Navbar';

export const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="navbar">
        <div className="landing-page-header">
          <span>Simply Spices</span>
        </div>
        <Navbar />
        <ProductsList products={products} />
      </div>
    </div>
  );
};
