import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom'
import ContactForm from './ContactForm';

class CosmeticDentistry extends React.Component {
  render() {
    return (
      <div class='container'>
        <Header />
        <img src="img/CosmeticDentistry.jpg" class="img-fluid" alt="hero" />
        <div class="card-blocks">
          <div class="row">
            <div class="col-md-7 card-container">
              <div class="card card-primary">
                <div class="card-header">
                  Cosmetic Dentistry Treatments
                </div>
                <div class="card-body">
                  <p class="card-text">Here at GK Dental we provide a variety of restorative dentistry procedures. A bridge, dental veneers or teeth lightening treatment may be all you need to get the perfect smile you have dreamed of. Feeling good about your smile will result in higher self-esteem and improved self-confidence.</p>
                  <p class="card-text">All of the cosmetic dentistry treatments we have on offer are completed using the best quality equipment and latest dental procedures available. Through keeping up to date with the latest cosmetic dental treatments, we can ensure you are getting the best results possible.</p>
                </div>
              </div>
            </div>
            <div class="col-md-5 card-container">
              <ContactForm />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 col-12 card-container">
              <div class="card card-primary">
                <div class="card-header">
                  Your Expectations
                </div>
                <div class="card-body">
                  <p class="card-text">Our cosmetic dentists put time & effort into ensuring every individual patient's expectations are met. By discussing your unique requirements we can decide on the best course of action together.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 card-container">
              <div class="card card-primary">
                <div class="card-header">
                  Dental treatment we provide
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
                  Call Today for your free consultation
                </div>
                <div class="card-body">
                  <p class="card-title">Call now to register as a NHS patient</p>
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

export default CosmeticDentistry;