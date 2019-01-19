import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'

class Footer extends React.Component {
  render() {
    return (
      <Fragment>
        <div class="footer footer-mobile">
          <p>Address</p>
          <hr />
          <p>
            7 Great Kings St, <br />
            Dumfries, <br />
            DG1 1BA <br />
          </p>
          <hr />
          <p><a href="tel:01387 266456">
            CALL US <br />
            01387 266456
          </a></p>
          <div class="btn-social-group">
            <a target="_blank" class="btn-social"><i class="fab fa-google-plus-g"></i></a>
            <a href="https://www.facebook.com/Great-King-St-NHS-Family-Dental-Practice-132691876805580/" target="_blank" class="btn-social"><i class="fab fa-facebook-f"></i></a>
            <a target="_blank" class="btn-social"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
        <div class="footer footer-desktop">
          <div class="container">
            <div class="row">
              <div class="col-lg-3">
                <p class="footer-title"><b>ABOUT US:</b></p>
                <p class="footer-detail">Here at Great King St Dental we provide a thorough and complete service. We emphasises on prevention as well as personalised attention and take great pride in the level of professionalism that we offer.</p>
              </div>
              <div class="col-lg-3">
                <p class="footer-title"><b>CONTACT INFO:</b></p>
                <p class="footer-detail">
                  7 GREAT KING STREET <br />
                  DUMFRIES <br />
                  DG1 1BA <br />
                </p>
                <p class="footer-detail">
                  <b>T: </b><a href="tel:01387266456">01387 266456</a><br/>
                  <b>E: </b>info.gkdental@gmail.com
                </p>
              </div>
              <div class="col-lg-3">
                <p class="footer-title"><b>OUR SERVICES:</b></p>
                <p class="footer-detail">
                  <Link to="/treatments">> Treatments</Link> <br />
                  <Link to="/cosmetic-dentistry">> Cosmetic Dentistry</Link> <br />
                  <Link to="/dentures">> Dentures</Link> <br />
                  <Link to="/implants">> Implants</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Footer;