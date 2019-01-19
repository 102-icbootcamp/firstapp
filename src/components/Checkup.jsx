import React from 'react';
import { Link } from 'react-router-dom'

class Checkup extends React.Component {
  render() {
    return (
      <div class="checkup container checkup-desktop">
        <div class="card checkup-card">
          <img src="img/checkup.jpg" class="card-img checkup-img" alt="checkup" />
          <div class="card-img-overlay checkup-overlay">
            <p class="card-text checkup-text">Are you ready to book your free Check - Up appointment?</p>
            <p class="card-text">
              <a href="tel:01387 266456"><button class="checkup-btn checkup-btn-phone"><span class="checkup-icon"><i class="fas fa-phone"></i></span>Talk to us now</button></a>
              <Link to="/contact"><button class="checkup-btn checkup-btn-desktop"><span class="checkup-icon"><i class="fas fa-phone"></i></span>Talk to us now</button></Link>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Checkup;