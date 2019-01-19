import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand my-auto" href="#" >
          <img src="img/logo.png" style={{maxWidth: '242px'}} />
        </a>
        <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse flex-md-column" id="navbarCollapse">
            <div class="ml-auto">
              <Link to='/register-now'><button class="navbar-btn">CLICK HERE TO REGISTER NOW</button></Link>
            </div>
            <div class="ml-auto text-main">
              7 Great King Street, Dumfries, DG1 1BA
            </div>
            <div class="ml-auto text-secondary-large">
              CALL US: 01387 266456
            </div>
            <hr />
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <Link to='/'><a class="nav-link" href="#">Home</a></Link>
              </li>
              <li class="nav-item">
                <Link to='/why-choose-us'><a class="nav-link">Why Choose Us</a></Link>
              </li>
              <li class="nav-item">
                <Link to='/new-patients'><a class="nav-link" href="#">New Patients</a></Link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Treatments
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/cosmetic-dentistry"><a class="dropdown-item">Cosemtic Dentistry</a></Link>
                  <Link to="/dentures"><a class="dropdown-item">Dentures</a></Link>
                  <Link to="/implants"><a class="dropdown-item">Implants</a></Link>
                </div>
              </li>
              <li class="nav-item">
                <Link to='/'><a class="nav-link" href="#">Fees & Offers</a></Link>
              </li>
              <li class="nav-item">
                <Link to='/emergency-dentist'><a class="nav-link" href="#">Emergency Dentist</a></Link>
              </li>
              <li class="nav-item">
                <Link to='/contact'><a class="nav-link" href="#">Contact</a></Link>
              </li>
            </ul>
        </div>
      </nav>
    )
  }
}

export default Header;