import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand display-4" href="#">
        React + API
      </a>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/search">Search</Link>
        </li>
        <li className="nav-item"></li>
      </ul>
    </nav>
  );
}
