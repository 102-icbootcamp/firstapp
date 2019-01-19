import React from 'react';
import { Link } from 'react-router-dom'

class Details extends React.Component {
  render() {
    return (
      <div class="details row">
        <div class="detail-box col-lg-4">
          <h3>Great King St Dental Practice in Dumfries</h3>
          <p>Here at Great King St Dental Practice we provide a thorough and complete service. We emphasise on prevention as well as personalised attention and take great pride in the level of professionalism that we offer.</p>
          <Link to="/treatments"><button class="button">VIEW OUR SERVICES</button></Link>
        </div>
        <div class="detail-box col-lg-4">
          <div class="row">
            <div class="col-lg-2 col-md-1"><span class="detail-icon"><i class="fas fa-map-marker-alt"></i></span></div>
            <div class="col-lg-10 col-md-11 col-icon-card">
              <h3>Location</h3>
              <p class="detail-body">Great King St Dental Practice is conveniently located in the city centre of Dumfires. We are located next to Royal Mail. We also have a main bus stop outside the surgery. Please feel free to contact us if you have any questions about directions to our location.</p>
            </div>
          </div>
        </div>
        <div class="detail-box col-lg-4">
          <div class="row">
            <div class="col-lg-2 col-md-1"><span class="detail-icon detail-icon-card"><i class="fas fa-credit-card"></i></span></div>
            <div class="col-lg-10 col-md-11 col-icon-card">
              <h3>Finance</h3>
              <p class="detail-body">To ensure that payment is one less worry to have, we offer a wide range of finance packages tailored to your individual needs to help spread the costs of your treatment. Please feel free to speak to any of our team if you would like further information regarding finance options.</p>
            </div>
          </div>
        </div>
        <div class="detail-box col-lg-4 offset-lg-4">
          <div class="row">
            <div class="col-lg-2 col-md-1"><span class="detail-icon"><i class="far fa-calendar-alt"></i></span></div>
            <div class="col-lg-10 col-md-11 col-icon-card">
              <h3>Appointments</h3>
              <p class="detail-body">Making an appointment to see us at Great King St Dental Practice can be done in several ways. Please feel free to contact us via phone, email or make an appointment request via the online form.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Details;