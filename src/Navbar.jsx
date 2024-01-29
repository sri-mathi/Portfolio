import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item h5">
            <Link to="/about" className="nav-link p-3 ">
              About
            </Link>
          </li>
          <li className="nav-item h5">
            <Link to="/education" className="nav-link p-3">
              Education
            </Link>
          </li>
          <li className="nav-item h5">
            <Link to="/project" className="nav-link p-3 ">
              Projects
            </Link>
          </li>
          <li className="nav-item h5">
            <Link to="/exper" className="nav-link p-3 ">
              Experience
            </Link>
          </li>
          <li className="nav-item h5">
          <Link to="/resume" className="nav-link p-3 ">
              Resume
            </Link>
          </li>
        </ul>
      </nav>
      <br />
    </div>
  );
}

export default Navbar;
