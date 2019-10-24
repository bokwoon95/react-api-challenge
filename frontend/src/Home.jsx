import React from "react";
import './Home.css';

export default function Home() {
  return (
    <React.Fragment>
      <div className="container-fluid d-flex align-items-center justify-content-center h-100">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-md-5">
            <h1 className="display-4 text-dark pt-5 mb-2 mt-5">Welcome to the React + API Challenge Landing Page</h1>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button className="BTN btn-dark">REGISTER</button>
        <button className="BTN btn-secondary">LOGIN</button>
      </div>
    </React.Fragment>
  );
}
