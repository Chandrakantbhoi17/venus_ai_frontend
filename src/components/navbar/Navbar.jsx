// src/components/Navbar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/', { state: { scrollToContact: true } });
  };

  return (
    <nav className={`shadow-lg navbar navbar-expand-lg navbar-light bg-light shadow-sm w-100 sticky-top ${styles.navbar}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Venus AI</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li><a className="dropdown-item" href="#">AI / ML Integration </a></li>
                <li><a className="dropdown-item" href="#">Product Development</a></li>
                <li><a className="dropdown-item" href="#">Mobile App Development</a></li>
                <li><a className="dropdown-item" href="#">E-commerce Development</a></li>
                <li><a className="dropdown-item" href="#">Web Design & Development</a></li>
                <li><a className="dropdown-item" href="#">Corporate Identity</a></li>
                <li><a className="dropdown-item" href="#">Data Center Management</a></li>
                <li><a className="dropdown-item" href="#">UI/UX Design</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="productsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                <li><a className="dropdown-item" href="#">A</a></li>
                <li><a className="dropdown-item" href="#">B</a></li>
                <li><a className="dropdown-item" href="#">C</a></li>
                <li><a className="dropdown-item" href="#">D</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={handleContactClick}>
                Contact Us
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
