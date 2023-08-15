import React from 'react';

const CibilScoreSemicircle = ({ score }) => {
  const getColor = (score) => {
    if (score < 400) return '#FF0000';
    if (score < 700) return '#FFA500';
    return '#008000';
  };

  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 900) * circumference;
  const strokeColor = getColor(score);

  return (
    <div className="cibil-score-semicircle">
      <svg width={2 * radius} height={radius} viewBox={`0 0 ${2 * radius} ${radius}`}>
        <circle
          className="background-circle"
          cx={radius}
          cy={radius}
          r={radius}
          fill="none"
          stroke="#d9edfe"
          strokeWidth="12"
        />
        <circle
          className="progress-circle"
          cx={radius}
          cy={radius}
          r={radius}
          fill="none"
          stroke={strokeColor}
          strokeWidth="12"
          strokeDasharray={`${progress} ${circumference}`}
        />
      </svg>
      <p className="score">{score}</p>
      
    </div>
  );
};

export default CibilScoreSemicircle;
// import React from 'react';
// import './CibilScoreSemicircle.css';

// const CibilScoreSemicircle = ({ score }) => {
//   const getColor = (score) => {
//     if (score < 400) return '#FF0000';
//     if (score < 700) return '#FFA500';
//     return '#008000';
//   };

//   const radius = 80;
//   const circumference = 2 * Math.PI * radius;
//   const progress = (score / 900) * circumference;
//   const strokeColor = getColor(score);

//   return (
//     <div className="cibil-score-semicircle">
//       <svg width={2 * radius} height={radius} viewBox={`0 0 ${2 * radius} ${radius}`}>
//         <circle
//           className="background-circle"
//           cx={radius}
//           cy={radius}
//           r={radius}
//           fill="none"
//           stroke="#d9edfe"
//           strokeWidth="12"
//         />
//         <circle
//           className="progress-circle"
//           cx={radius}
//           cy={radius}
//           r={radius}
//           fill="none"
//           stroke={strokeColor}
//           strokeWidth="12"
//           strokeDasharray={`${progress} ${circumference}`}
//         />
//       </svg>
//       <p className="score">{score}</p>
//     </div>
//   );
// };

// export default CibilScoreSemicircle;
