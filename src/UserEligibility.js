import React from 'react';
import './UserEligibility.css';

const UserEligibility = ({ cibilScore }) => {
  const eligibility = cibilScore >= 750 ? 'High' : cibilScore >= 600 ? 'Moderate' : 'Low';
  const variety = cibilScore >= 750 ? 'Platinum' : cibilScore >= 600 ? 'Gold' : 'Silver';
  return (
    <div className="user-eligibility">
      {/* <h2>User Eligibility</h2> */}
      <h2>User eligibility: {eligibility}</h2>
      <h3>User is eligible for {variety} Credit Card</h3>
    </div>
  );
};

export default UserEligibility;
