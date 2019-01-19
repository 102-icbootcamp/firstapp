import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom'
import ContactForm from './ContactForm';

class Home extends React.Component {
  render() {
    return (
      <div class='container'>
        <Header />
        <img src="img/whychooseushero.jpg" class="img-fluid" alt="hero" />
        <div class="card-blocks">
          <div class="row">
            <div class="col-md-7 card-container">
              <div class="card card-primary">
                <div class="card-header">
                  Why Choose Great King St Dental Practice?
                </div>
                <div class="card-body">
                  <p class="card-text">We take great pride in the services that our dentists offer and go to great lengths to ensure that every time you book an appointment you are treated with dignity, respect and care. We want you to enjoy our service, ensuring that we give you a great smile as well as service to smile about.</p>
                  <p class="card-text">You will be given complete consultations with your dentist. These are ideal opportunities for you to tell us about any changes since your last visit, any discomforts or pains that may have appeared or just to ask for advice or guidance. We will always be happy to talk and offer you the help that you need.</p>
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
                  Professional Advice
                </div>
                <div class="card-body">
                  <p class="card-text">By discussing your options with you, one on one, we can ensure we provide you with the procedure that will be most effective for you.</p>
                  <p class="card-text">Our aim is to provide our patients with beautiful smiles.</p>
                  <p class="card-text">Book an initial consultation with one of our dentists to discuss any of the procedures we have available.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 card-container">
              <div class="card card-primary">
                <div class="card-header">
                  Services
                </div>
                <div class="card-body">
                  <p class="card-text">
                    <ul>
                      <li>All Cosmetic Dentistry</li>
                      <li>Teeth lightening</li>
                      <li>Veneers & crowns</li>
                      <li>Dental implants</li>
                      <li>Dental hygiene advice/preventative dentistry</li>
                      <li>General dentistry</li>
                      <li>Emergency appointments</li>
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
            <div class="col-lg-4 col-md-6 col-12 card-container">
              <div class="card card-primary">
                <div class="card-header">
                  Alexandros Kyriazatis <br/>
                  GDC No: 194876
                </div>
                <div class="card-body">
                  <p class="card-text">Alexandros studied dentistry in Athens and qualified in 2010, gaining his Degree with Merit.</p>
                  <p class="card-text">Then, he worked at 401 Military Hospital of Athens and 251 Air force Hospital at the Prosthodontic department for one year before joining our practice in April 2011. In 2012, in order to expand his knowledge & skills, with a particular interest in Dental Implants, Alex took part in a Postgraduate course, at University of Central Lancashire, Preston. He gained his MSc in Dental Implantology in August 2016.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 card-container">
              <div class="card card-primary">
                <div class="card-header">
                  Dimitra Pissa <br />
                  GDC No: 261494
                </div>
                <div class="card-body">
                  <p class="card-text">Qualified DipDS Thessaloniki 2008. Started working at Great King Street 19th October 2016, as well as working at another practice in Edinburgh. Works Wednesday & Thursday.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 card-container">
              <div class="card card-primary">
                <div class="card-header">
                  Kirsty Kennedy <br />
                  GDC No: 261494
                </div>
                <div class="card-body">
                  <p class="card-text">Kirsty started dental nursing in 1997.  Gained NEBDN cert in dental nursing in May , NEBDN in OHE 2009. Trained as a childsmile EDDN 2010-2011. She joined our practice in March 2011.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 card-container">
              <div class="card card-primary">
                <div class="card-header">
                  Stephanie Robertson <br />
                  GDC No: 253545
                </div>
                <div class="card-body">
                  <p class="card-text">Joined the practice August 2011 on reception, started nursing June 2012 and qualified June 2014.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 card-container">
              <div class="card card-primary">
                <div class="card-header">
                  Jade Dunlop <br />
                  GDC No: Awaiting
                </div>
                <div class="card-body">
                  <p class="card-text">Recently qualified as dental nurse, awaiting registration with GDC, started working at Great King Street 18th October 2016.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 card-container">
              <div class="card card-primary">
                <div class="card-header">
                  Kirsty Hulme
                </div>
                <div class="card-body">
                  <p class="card-text">Kirsty Hulme has worked at the practice since November 2011. She has been Practice Manager here at Great King Street since September 2015.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 card-container">
              <div class="card card-primary">
                <div class="card-header">
                  Hannah Smith
                </div>
                <div class="card-body">
                  <p class="card-text">Trainee dental nurse, started with practice 21st March 2016, has started working towards her SVQ in Dental Nursing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;