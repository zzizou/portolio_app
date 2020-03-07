
import './navbar.css'
import React from 'react';

function Navbar(){
    return (
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
      <button className="mr-auto navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="#">Me</a>
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">Portfolio <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">CV</a>
          </li>        
        </ul>
        <button className="btn custombtn">Try It</button>
      </div>
      </div>
    </nav>
   
    );
};

export default Navbar;