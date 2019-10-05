

import React from 'react';

import zizou from '../Navbar/zizou.png';

const navbar = () => {
    return  <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
    <div className="container">  
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" >
    <img src={zizou} width="30" height="30" class="d-inline-block align-top" alt="" />
    Bootstrap
    </a>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
             <li className="nav-item">
              <a className="nav-link" data-scroll href="#services">Services</a>
            </li>
            <li className="nav-item">
                    <a className="nav-link" data-scroll href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-scroll href="#blogs">Blogs</a>
      </li>
            <li className="nav-item">
                    <a className="nav-link" href="#testimonial">Testimonials</a>
            </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Sign In</button>
        </form>
      </div>
    </div>
    </nav>
  
};

export default navbar;