// import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <section id="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-gray">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <h1>
                <span><b style={{color: "orangered"}}>Exer</b>Notion</span>
              </h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">Add Activity</a>
                </li>
                <li className="nav-item">
                  <Link to ="/ActivityHistory" className="nav-link">History</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Subsribe</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Sign up</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </section>
    );
}

export default Navbar;