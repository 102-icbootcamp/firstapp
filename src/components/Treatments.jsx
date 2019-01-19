import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom'

class Treatments extends React.Component {
  render() {
    return (
      <div class='container'>
        <Header />
        <img src="img/dentalTreatments.jpg" class="img-fluid" alt="hero" />
        <div class="card-blocks">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-12 card-container">
              <div class="card card-primary">
                <div class="card-header">
                  Treatments at GK Dental Dentistry
                </div>
                <div class="card-body">
                  <p class="card-text">Here at GK Dental we provide a variety of restorative dentistry procedures. A bridge, dental veneers or teeth Whitening treatment may be all you need to get the perfect smile you have dreamed of. Feeling good about your smile will result in higher self-esteem and improved self-confidence.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 card-container">
              <div class="card card-primary">
                <div class="card-header">
                  Professional Advice
                </div>
                <div class="card-body">
                  <p class="card-text">
                    <ul class="text-left">
                      <li>Chipped Teeth Solution</li>
                      <li>Missing Teeth Solutions</li>
                      <li>Root Canal Treatment</li>
                      <li>Fillings</li>
                      <li>Dental Bridges</li>
                      <li>Full or Partial Dentures</li>
                      <li>Crowns</li>
                      <li>Emergency Dental Work</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 card-container">
              <div class="card card-primary">
                <div class="card-header">
                  Call Today to register
                </div>
                <div class="card-body">
                  <p class="card-title">Taking on new NHS patients</p>
                  <Link to="/contact"><button type='submit' class="checkup-btn btn-small checkup-btn-desktop">Talk to us now</button></Link>
                  <a href="tel:01387266456"><button type='submit' class="checkup-btn btn-small checkup-btn-phone">Talk to us now</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Treatments;