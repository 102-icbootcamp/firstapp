import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import Header from './Header';
import Hero from './Hero';
import Details from './Details';
import Treatment from './Treatment';
import Checkup from './Checkup';

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <div class='container'>
          <Header />
          <Hero />
          <Details />
          <hr />
          <Treatment />
          <hr />
          <Checkup />
        </div>
        <div class="checkup checkup-phone">
          <div class="card checkup-card">
            <img src="img/checkup.jpg" class="card-img checkup-img" alt="checkup" />
            <div class="card-img-overlay checkup-overlay">
              <p class="card-text checkup-text">Are you ready to book your free Check - Up appointment?</p>
              <p class="card-text">
                <a href="tel:000"><button class="checkup-btn checkup-btn-phone"><span class="checkup-icon"><i class="fas fa-phone"></i></span>Talk to us now</button></a>
                <Link to="/contact"><button class="checkup-btn checkup-btn-desktop"><span class="checkup-icon"><i class="fas fa-phone"></i></span>Talk to us now</button></Link>
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Home;