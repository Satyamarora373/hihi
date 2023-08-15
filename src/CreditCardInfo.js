import React from 'react';
import './CreditCardInfo.css';

const CreditCardInfo = ({ cibilScore }) => {
  const cardImage = cibilScore >= 700
    ? 'high-credit-card.jpg'
    : cibilScore >= 600
    ? 'moderate-credit-card.jpg'
    : 'basic-credit-card.jpg';

  const cardFeatures = cibilScore >= 700
    ? 'Premium rewards, travel benefits, no annual fee.'
    : cibilScore >= 600
    ? 'Cashback, travel discounts, annual fee waived first year.'
    : 'Building credit history, low credit limit, annual fee.';

  return (
    <div className="credit-card-info">
      <div className="card-image">
        <img src="standard_chartered_platinum_rewards_card.png" alt="Credit Card" />
      </div>
      <h3 className="card-features">{cardFeatures}</h3>
    </div>
  );
};

export default CreditCardInfo;
