import React from 'react';
import Header from './Header';
import ContactForm from './ContactForm';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <div class='container'>
          <Header />
          <img src="img/contactus.jpg" class="img-fluid" alt="hero" />
          <div class="card-blocks">
            <div class="row">
              <div class="col-md-7 card-container">
                <div class="card card-primary card-form">
                  <div class="card-header">
                    Great King St Dental Practice
                  </div>
                  <div class="card-body">
                    <p class="card-text">Great King St Dental Practice registering new NHS patients based in central Dumfries. We provide our dental procedures to both NHS and private patients. From general dentistry to dental implants we cater to every patient's individual needs. If you would like any more information about our procedures or would like to book a dental consultation please do not hesitate to contact us.</p>
                    <p class="card-text">
                      <span class="card-text-header">Address</span><br/>
                      7 Great King Street, <br/>
                      Dumfries, <br/>
                      DG1 1BA
                    </p>
                    <p class="card-text">
                      <span class="card-text-header">Phone</span><br/>
                      01387 266456
                    </p>
                    <p class="card-text">
                      <span class="card-text-header">Email</span><br/>
                      info.gkdental@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-5 card-container">
                <ContactForm message={true} />
              </div>
            </div>
          </div>
        </div>
        <Map google={this.props.google} zoom={14} initialCenter={{ lat: 55.0695693, lng:-3.6110444 }}>
          <Marker onClick={this.onMarkerClick}
            name={'Current location'} />
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDhK74Gti7he83pV-fqDOfFRptgzk2ygSM')
})(Contact)
