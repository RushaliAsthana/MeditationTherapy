import React from "react";
import Logo from "./assets/MeditationTherapyPics/logo.png";
import FaUser from "./assets/MeditationTherapyPics/fa-user.png";
function NavigationBar()
{
  return <nav className="navbar  navbar-expand-md fixed-top meditation-navbar">
  <a className="navbar-brand" href="#"><img height="40px" src={Logo}/></a>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <img src={FaUser} className="img-responsive ml-auto mr-3" height="25px"></img>
    <i className="fa fa-bars theme-pink" aria-hidden="true"></i>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav ml-auto">
   <button className="btn  btn-sm d-none d-md-block d-lg-block d-xl-block"> <i  aria-hidden="true" className="fa fa-search theme-pink  mr-2"></i></button>
  <input className="form-control form-control-sm mt-1 mr-4" placeholder="Search"></input>
  <img src={FaUser} className="img-responsive ml-auto mt-1 d-none d-md-block d-lg-block d-xl-block " height="30px"></img>
      <li className="nav-item">
        <a className="nav-link" href="#"></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>    
    </ul>
  </div>  
</nav>
}
export default NavigationBar;