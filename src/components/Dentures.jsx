import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom'

class Dentures extends React.Component {
  render() {
    return (
      <div class='container'>
        <Header />
        <img src="img/dentures.jpg" class="img-fluid" alt="hero" />
        <div class="card-blocks">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-12 card-container">
              <div class="card card-primary">
                <div class="card-header">
                  Denture Clinic Dumfries
                </div>
                <div class="card-body">
                  <p class="card-text">Our denture technician’s sole responsibility is to make dentures and he is an expert in his field.</p>
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
                      <li>Embarrassed about your dentures?</li>
                      <li>Suffering from saggy cheeks and a lack of full lip support?</li>
                      <li>Loose dentures?</li>
                      <li>Dentures look too artificial?</li>
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
                  <p class="card-title">Call now to book your consultation</p>
                  <Link to="/contact"><button type='submit' class="checkup-btn btn-small checkup-btn-desktop">Talk to us now</button></Link>
                  <a href="tel:01387266456"><button type='submit' class="checkup-btn btn-small checkup-btn-phone">Talk to us now</button></a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 card-container">
              <div class="card card-primary">
                <div class="card-header">
                  Our Denture Technician
                </div>
                <div class="card-body">
                  <p class="card-text">From the initial appointment to the fitting of the denture, you will be seen by our denture technician who will also make the denture for you in his lab. Whether you need a full set of dentures or partial dentures to fill in the missing gaps in your smile, get in touch with GK Dental.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 card-container">
              <div class="card card-primary">
                <div class="card-header">
                  Dentures
                </div>
                <div class="card-body">
                  <p class="card-text">Dentures are essentially removable false teeth that fit snugly over the gums and can be made out of acrylic or metal.</p>
                  <p class="card-text">If you have some teeth missing and it's causing problems with your speech and affecting how you eat, it may be worth enquiring about dentures.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dentures;