import React, { useState } from 'react';
import './CreditCardPage.css';
import CibilScoreSemicircle from './CibilScoreSemiCircle';
import UserEligibility from './UserEligibility';
import CreditCardInfo from './CreditCardInfo';

function CreditCardPage() {
  const [cibilScore, setCibilScore] = useState(650); // Replace with actual CIBIL score

  const handleScoreChange = (event) => {
    setCibilScore(parseInt(event.target.value, 10));
  };

  return (
    <div className="credit-card-page">
      <h1>CIBIL SCORE</h1>
      <CibilScoreSemicircle score={cibilScore} />
      <UserEligibility cibilScore={cibilScore} />
      <CreditCardInfo cibilScore={cibilScore} />
    </div>
  );
}

export default CreditCardPage;
