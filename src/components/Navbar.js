import React from "react";
// import { Button } from 'antd';
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import "./nav.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="cocktail db logo" className="logo" />
        <Link to="/" className="home-link">Home</Link>
        <Link to="/about" className="about-link">About</Link>
      </nav>
    </div>
  );
}
