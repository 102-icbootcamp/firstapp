import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom'

class Implants extends React.Component {
  render() {
    return (
      <div class='container'>
        <Header />
        <img src="img/implants.jpg" class="img-fluid mx-auto" alt="hero" />
        <div class="card-blocks">
          <div class="row">
            <div class="col-md-7 card-container">
              <div class="card card-primary">
                <div class="card-header">
                  Why Choose GK Dental for your Dental Implants
                </div>
                <div class="card-body">
                  <p class="card-text">10 Reasons to choose us for your Dental Implant treatment:</p>
                  <p class="card-text text-left">
                    <ol>
                      <li>Our Implantologist has many years of experience</li>
                      <li>We are ethical and we do not compromise on quality</li>
                      <li>Clear pricing and no surprises</li>
                      <li>We have invested close to a 100k on a 3D scanner so we can provide accurate treatment planning (No need to travel for a scan)</li>
                      <li>Affordable prices and easy payment plans</li>
                      <li>Free consultation</li>
                      <li>Always happy to see you</li>
                      <li>We show you real cases similar to yours and the results</li>
                      <li>Strict cross infection procedures</li>
                      <li>Do you really need more reasons?</li>
                    </ol>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-5 card-container">
              <div class="card card-primary">
                <p class="card-title" style={{'color': '#00B7B2'}}>
                  <span style={{'fontSize': '145px', 'lineHeight': '174px'}}>0%</span> <br/>
                  <span style={{'fontSize': '78px', 'lineHeight': '94px'}}>Finance</span> <br/>
                  <span style={{'fontSize': '54px', 'lineHeight': '65px'}}>Available</span>
              </p>
              </div>
            </div>
            <div class="col-md-7 card-container">
              <div class="card card-primary" style={{'minHeight': '352px'}}>
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/jLBUEKccyrA" allowfullscreen></iframe>
                </div>
              </div>
            </div>
            <div class="col-md-5 card-container">
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
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 col-12 card-container">
              <div class="card card-primary">
                <div class="card-header">
                  Clinical Consultation
                </div>
                <div class="card-body">
                  <p class="card-text">During your visit, you will be requested to complete a dental and medical history questionnaire. This will include a comprehensive oral assessment. Digital photographs, impressions and x-rays may be taken with your consent. No treatment is provided at this relaxed and informative consultation. Importantly it is a two way process in which GK Dentalcan guide you through a series of options which best suit your specific needs.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 card-container">
              <div class="card card-primary">
                <div class="card-header">
                  Treatment Planning
                </div>
                <div class="card-body">
                  <p class="card-text">GK Dental will create a bespoke written treatment plan focusing on your objectives, detailing options and costs for one or more of the GK DentalImplant services: Missing Teeth, Denture Stabilisation, No Teeth, Computer Guided Surgery, Bone Grafting & Sinus Lifts.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 card-container">
              <div class="card card-primary">
                <div class="card-header">
                  Treatment
                </div>
                <div class="card-body">
                  <p class="card-text">Each patient is unique and some may require an initial appointment for preparatory work to be carried out. Alternatively you may proceed straight to implant placement which is usually followed by a healing period of 10 days.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 card-container">
              <div class="card card-primary">
                <div class="card-header">
                  Healing
                </div>
                <div class="card-body">
                  <p class="card-text">The time allowed for implants to integrate will vary depending on bone conditions. Over approximately the next 2 to 6 months the implant will integrate with the bone to become solid. During the healing period a fixed bridge or removable denture is used to close your gap.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 card-container">
              <div class="card card-primary">
                <div class="card-header">
                  Restoration
                </div>
                <div class="card-body">
                  <p class="card-text">Final teeth are usually fitted between 3 and 9 months after implant placement (with the exception of teeth in a day, where the provisional teeth are fitted on the day of placement).</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 card-container">
              <div class="card card-primary">
                <div class="card-header">
                  Maintenance
                </div>
                <div class="card-body">
                  <p class="card-text">Regular dental examinations and hygiene appointments will be recommended to maintain the health of your mouth, teeth and implants.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 card-container">
              <div class="card card-primary">
                <div class="card-header">
                  Aftercare and Guarantee
                </div>
                <div class="card-body">
                  <p class="card-text">GK Dentalis always available to help and advise where required. We are proud of the work we provide and our implant treatment has a four-year guarantee.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 card-container">
              <div class="card card-primary">
                <div class="card-header">
                  Payment
                </div>
                <div class="card-body">
                  <p class="card-text">We understand that everyone’s financial obligations are unique and at GK Dentalwe are committed to formulating a financial plan that suits you and your budget.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Implants;