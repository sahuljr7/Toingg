// PricingCard.js or PricingCard.jsx

import React from 'react';
import PropTypes from 'prop-types';

const PricingCard = ({ title, price, features, color }) => {
  return (
    <div className={`rounded-lg shadow-lg p-6 ${color}`}>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex justify-center items-center mb-6">
        <span className="text-4xl font-bold mr-1">$</span>
        <span className="text-5xl font-bold">{price}</span>
        <span className="ml-1 text-xl">/mo</span>
      </div>
      <ul className="mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 2.293a1 1 0 011.414 1.414l-12 12a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L5 12.586l11.293-11.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="bg-blue-500 text-white rounded-lg px-6 py-2 hover:bg-blue-600 transition duration-300">Choose Plan</button>
    </div>
  );
};

PricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.string.isRequired,
};

export default PricingCard;
