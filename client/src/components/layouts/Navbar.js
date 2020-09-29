import React from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';

const Navbar = () =>
{
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navyBackground">
      <div className="collapse navbar-collapse">
        <Link to="/" className="navbar-brand ml-1 title"> Weather Analysis </Link>
        <ul className="navbar-nav">
          <li className="nav-item active ml-3">
            <Link to="/OneDayWeather" className="nav-link secondaryText"> One Day Weather </Link>
          </li>
          <li className="nav-item active ml-5">
            <Link to="/FiveDayByThreeHourWeather" className="nav-link secondaryText"> Five Day By Three Hour Weather </Link>
          </li>
          <li className="nav-item active ml-5">
            <Link to="/Requests" className="nav-link secondaryText"> Requests </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
