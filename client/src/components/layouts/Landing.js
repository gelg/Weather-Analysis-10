import React from 'react';
import '../../App.css';

const Landing = () =>
{
  return (
    <div>
      <h1 className="mt-3 mb-5 title navyText text-center"> Weather Analysis</h1>
      <p className="mt-3 mb-5 secondaryText navyText mL30 mR30">
         One Day Weather: This page takes in a city, country, and or state input and
         should return the weather of that location for the day if available
      </p>
      <p className="mt-3 mb-5 secondaryText navyText mL30 mR30">
        Five Day By Three Hour Weather: This page takes in a city, country, and or state input and
        should return the weather of that location for 5 days seperated into increments of 3 hours
        if available.
      </p>
      <p className="mt-3 mb-5 secondaryText navyText mL30 mR30">
        Requests: This page takes in a date and should return the requests made on that day.
      </p>
      <p className="mt-3 mb-5 secondaryText navyText mL30 mR30">
        Analysis: This takes in a value from Analysis Search section of the reuests that come up in requests,
        and should bring out the corresponding weather data.
      </p>
    </div>
  )
}

export default Landing;
