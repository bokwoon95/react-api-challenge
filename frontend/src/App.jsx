import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import './App.css';

export default function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
        {/* Left Align */}
        <Link to="/" className="navbar-brand display-4">
          React + API
        </Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item NAVBAR-ITEM">
            <Link to="/" className="text-muted">Home</Link>
          </li>
          <li className="nav-item NAVBAR-ITEM">
            <Link to="/search" className="text-muted">Search</Link>
          </li>
          <li className="nav-item"></li>
        </ul>
        {/* End Left Align */}

        {/* Right Align */}
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item NAVBAR-ITEM">
              <Link to="/" className="text-muted">Register</Link>
            </li>
            <li className="nav-item NAVBAR-ITEM">
              <Link to="/" className="text-muted">Login</Link>
            </li>
            <li className="nav-item"></li>
          </ul>
        </div>
        {/* End Right Align */}
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </Router>
  );
}
