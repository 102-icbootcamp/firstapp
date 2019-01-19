import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom'
import ContactForm from './ContactForm';

class EmergencyDentist extends React.Component {
  render() {
    return (
      <div class='container'>
        <Header />
        <img src="img/EmergencyDentist.jpg" class="img-fluid" alt="hero" />
        <div class="card-blocks">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-12 card-container">
              <div class="card card-primary">
                <div class="card-header">
                  Our Registered Patients
                </div>
                <div class="card-body">
                  <p class="card-text text-left">
                    <ul>
                      <li>During opening hours, contact us as early in the day as possible</li>
                      <li>Outside opening hours, call the practice and an answer-phone message will let you know how to get advice or treatment.</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 card-container">
              <ContactForm />
            </div>
            <div class="col-lg-4 col-md-6 col-12 card-container">
              <div class="card card-primary">
                <div class="card-header">
                  Call Today for your free consultation
                </div>
                <div class="card-body">
                  <p class="card-title">Call now if you have a dental emergency</p>
                  <Link to="/contact"><button type='submit' class="checkup-btn btn-small checkup-btn-desktop">Talk to us now</button></Link>
                  <a href="tel:01387266456"><button type='submit' class="checkup-btn btn-small checkup-btn-phone">Talk to us now</button></a>
                </div>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card card-primary">
              <div class="card-header">
                What happens next?
              </div>
              <div class="card-body text-left">
                <p class="card-text">On dialling the dental clinic during clinic hours, you will be answered by a member of staff who will take preliminary details and inform the emergency dentist who is on call that day. You will be given an appointment.</p>
                <p class="card-text">If you have dental insurance you will be provided with the necessary documentation after the treatment to enable you to make your claim.</p>
                <p class="card-text">Our emergency dentists will carry out a dental examination and determine the most appropriate type of treatment to be administered. This will be emergency temporary, emergency basic or emergency full treatment that may be followed up by subsequent appointments during normal surgery hours.</p>
                <p class="card-text">We accept patients from all major Private Dental Insurance providers</p>
                <p class="card-text">We accept patients for treatment who have insurance cover from all the major insurance providers including CIGNA, AXA, BUPA, DENPLAN, DENCOVER, SIMPLYHEALTH, and AVIVA.</p>
                <p class="card-text">Our dental clinic has dentists highly experienced in oral surgery, endodontics and orthodontics. Our dentists are empathetic in the treatment of nervous patients and will help you feel relaxed.  All the dentists are experienced in providing emergency dental treatment.</p>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card card-primary">
              <div class="card-header">
                FAQ
              </div>
              <div class="card-body text-left">
                <p class="card-text">
                  <span class="faq-heading">What should you do in case of a dental emergency?</span><br />
                  In the event of an emergency, immediately call the dental practice and schedule an appointment. Describe your emergency in detail so you can get instant advice before your scheduled appointment.
                </p>
                <p class="card-text">
                  <span class="faq-heading">How can you cure a toothache?</span><br />
                  Immediately contact a dentist in case you are suffering from a toothache. Take some recommended painkillers like Paracetamol or Ibuprofen. You should make sure that you read the label first and avoid going over the maximum dose.
                </p>
                <p class="card-text">
                  <span class="faq-heading">In cases of swelling, what should you do?</span><br />
                  Usually, a swelling occurs because of an infection. There might be a slight infection in your teeth or gum tissue, or there might even be large amount of abscess that has to be drained. An infected swelling would usually feel quite tender and warm to the touch. You have to call immediately so you could be accurately diagnosed. After checking your teeth thoroughly, an appropriate treatment would be prescribed, as well as antibiotics.
                </p>
                <p class="card-text">
                  <span class="faq-heading">What should you do in case your crown falls off?</span><br />
                  You have to keep your crown secure so you can have it re-cemented as soon as you can to prevent further damage. Sometimes, a root canal treatment is recommended. Call the dental practice immediately in case this happens.
                </p>
                <p class="card-text">
                  <span class="faq-heading">What should you do in case you have a broken denture?</span><br />
                  Usually, a broken denture is relatively easy to repair. But never attempt to repair it on your own since this could result to further damage. Immediately schedule an appointment for repair.
                </p>
                <p class="card-text">
                  <span class="faq-heading">What are dental injuries?</span><br />
                  Dental injuries include teeth that may be forced out of their position (extruded), broken (fractured) or knocked out. Injuries to the mouth are generally painful and have to be immediately treated by a dentist.
                </p>
                <p class="card-text">
                  <span class="faq-heading">Knocked Out Teeth</span><br />
                  Once a tooth has been knocked out, you should recover it and remove any dirt or debris by washing it. You should not handle the root so you could protect the fibers in the root surface. But you can try to put the clean tooth back in its socket since it is possible to re-implant the tooth within 30 minutes of injury. Or you could alternatively store the tooth inside a glass of cold milk. Immediately schedule an appointment by calling the dental emergency hotline.
                </p>
                <p class="card-text">
                  <span class="faq-heading">Extruding Teeth</span><br />
                  If the tooth is pushed inward or outward and is out of place, you should apply a light finger pressure to reposition it to its normal alignment. Do not force it into its socket. Use a moist tissue or gauze to hold the tooth in its place. Immediately see a dentist.
                </p>
                <p class="card-text">
                  <span class="faq-heading">Fractured Teeth</span><br />
                  The treatment of a fractured tooth depends on the degree of its injury. But whatever the degree of damage might be, you should see a dentist to get the appropriate treatment. Do not panic because it is easy to restore a fractured tooth. But if it feels painful, try to avoid biting in that area or eating hot or cold foods for the mean time.
                </p>
                <p class="card-text">
                  <span class="faq-heading">Minor Fracture</span><br />
                  For a minor fracture, a dentist can smooth it out and minimize the injury or do a composite restoration to it. It's very important to take extra care of your tooth for several days after the treatment.
                </p>
                <p class="card-text">
                  <span class="faq-heading">Moderate Fracture</span><br />
                  You may have a moderate fracture if there is damage to your enamel, dentin or pulp. A permanent crown may be used if there is no permanent damage to the pulp. But if there were damage to it, then you would need further treatment.
                </p>
                <p class="card-text">
                  <span class="faq-heading">Severe Fracture</span><br />
                  Usually, a severe fracture would mean that the tooth is traumatized and there is little chance of recovery. Dental injuries include puncture wounds, tears and lacerations to the tongue, cheek or lips. In the event of an injury, have the wound cleaned, sutured and repaired. If there is bleeding due to a tongue laceration, then try to pull the tongue forward and use gauze to put some pressure on it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EmergencyDentist;