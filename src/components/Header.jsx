import React from "react";

const Header = () => {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light"
    style={{ backgroundColor: "#007bff", color: "#fff" }}>
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars"></i>
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="/" className="nav-link">
            
          </a>
        </li>
      </ul>

      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#" role="button">
            <i className="fas fa-user"></i> 3123510408 Sef Danny
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
