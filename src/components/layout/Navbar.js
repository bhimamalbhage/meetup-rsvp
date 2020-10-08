import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <h1>
          <i className='fas fa-glass-cheers' />
          Meetup RSVP
        </h1>

      </div>
      <ul className="nav-list">
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <span className='sm-hide'></span>
        <li>
          <Link to='/users'>Users</Link>
        </li>
        <li>
          <Link to='/report'>Report</Link>
        </li>
      </ul>
    </div>
  );
}
