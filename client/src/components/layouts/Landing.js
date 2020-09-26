import React from 'react';
import '../../App.css';

const Landing = () =>
{
  return (
    <div>
      <h1 className="mt-3 mb-5 title navyText text-center"> Weather Analysis</h1>
      <p className="mt-3 mb-5 secondaryText navyText mL30 mR30">
         One Day Weather:
      </p>
      <p className="mt-3 mb-5 secondaryText navyText mL30 mR30">
        Four Day Hourly Weather Average:
      </p>
      <p className="mt-3 mb-5 secondaryText navyText mL30 mR30">
        One Week Weather:
      </p>
    </div>
  )
}

export default Landing;
