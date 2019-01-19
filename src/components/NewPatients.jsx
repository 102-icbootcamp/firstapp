import React from 'react';
import Header from './Header';
import scrollToComponent from 'react-scroll-to-component';

class NewPatients extends React.Component {
  scroll(ref) {
    scrollToComponent(ref, { offset: 0, align: 'top', duration: 500, ease:'inCirc'});
  }

  render() {
    return (
      <div class='container'>
        <Header />
        <img src="img/hero.jpg" class="img-fluid" alt="hero" />
        <div class="info-section">
          <div class="subtitle">NHS Dental Treatment</div>
          <p class="text">The information below is a comprehensive guide about NHS dental services at our practice. Click on any of below questions and you will be redirected to the answer:</p>
        </div>
        <ul class="list-primary">
          <li onClick={() => this.scroll(this.preReg)}>What happens pre-resgistration?</li>
          <li onClick={() => this.scroll(this.treatment)}>What treatment can I get as an NHS patient?</li>
          <li onClick={() => this.scroll(this.payment)}>Will I have to pay for NHS treatment?</li>
          <li onClick={() => this.scroll(this.free)}>Who gets free treatment on the NHS?</li>
          <li onClick={() => this.scroll(this.priorapproval)}>What is Prior Approval?</li>
          <li onClick={() => this.scroll(this.emergency)}>What if I need dental care in an emergency?</li>
          <li onClick={() => this.scroll(this.expectations)}>What can I expect from my dentist?</li>
          <li onClick={() => this.scroll(this.practiceexpect)}>What does the practice expect from me?</li>
          <li onClick={() => this.scroll(this.unhappy)}>What if I'm unhappy with my dental care?</li>
          <li onClick={() => this.scroll(this.more)}>How to find out more?</li>
        </ul>
        <div class="info-section" ref={(section) => { this.preReg = section; }}>
          <div class="subtitle">What happens pre-resgistration?</div>
          <p class="text">
            • We will ask for some information about you, for example your name and address <br />
            • Arrange for you to have a registration dental appointment <br />
            • You can ask to register your child at the same time. <br />
            • Try to register your child soon after they are born, or as soon as their first tooth appears
          </p>
          <p class="text">
            Your dentist will: <br />
            • Ask about any health problems you have had <br />
            • Examine your mouth, teeth and gums <br />
            • Tell you how to keep your mouth, teeth and gums healthy <br />
            • Tell you if you need treatment. <br />
            • If you need treatment, your dentist will explain your options, including what treatments can be done on the NHS let you know how much the treatment may cost, give you a treatment plan setting out the treatment you need (see below for more information on treatment plans), and  tell you when you need to come back for another check-up or more treatment.
          </p>
        </div>
        <div class="info-section" ref={(section) => { this.treatment = section; }}>
          <div class="subtitle">What treatment can I get as an NHS patient?</div>
          <p class="text">• As a registered NHS patient, you can get all the care, advice and treatment you need to keep your mouth, teeth and gums healthy.</p>
          <p class="text">
            If you want any cosmetic work, you will need to pay for it privately. Some treatments are not available under the NHS, for example: <br />
            - Teeth whitening <br />
            - White fillings in back teeth <br />
            - White crowns on back teeth <br />
            - Dental implants. <br />
            - As a mixed practice we provide both NHS treatment and private treatment.  If you choose to get private treatment,
          </p>
          <p class="text">
           Your dentist will: <br />
            • Tell you how much any private treatment will cost <br />
            • Explain your treatment options (including what you can have done on the NHS), and <br />
            • Get your agreement to any treatment. <br />
          </p>
        </div>
        <div class="info-section" ref={(section) => { this.payment = section; }}>
          <div class="subtitle">Will I have to pay for NHS treatment?</div>
          <p class="text">
            A NHS dental examination in Scotland is free of charge for everyone. <br />
            Following a dental examination, the dentist will advise you on any treatment you require and the likely cost. We will also provide an itemised treatment plan, if requested. <br />
            NHS patients, who pay for their treatment, pay 80% of the treatment costs (including any x-rays), up to a maximum of £384. <br />
            Examples of costs for some types of NHS treatment are shown in the table below.
          </p>
          <table class="primary-table">
            <thead>
              <tr>
                <th>Treatment</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Examination</td>
                <td>No Charge</td>
              </tr>
              <tr>
                <td>Two Small X-rays</td>
                <td>£4.76</td>
              </tr>
              <tr>
                <td>Simple gum treatment (scale & polish)</td>
                <td>£10.88</td>
              </tr>
              <tr>
                <td>Large amalgam (silver) filling</td>
                <td>£19.00</td>
              </tr>
              <tr>
                <td>Root canal treatment (front tooth)</td>
                <td>£40.00</td>
              </tr>
              <tr>
                <td>Single crown (including arch fee)</td>
                <td>£73.56</td>
              </tr>
              <tr>
                <td>Simple extraction (including visit fee)</td>
                <td>£6.84</td>
              </tr>
              <tr>
                <td>Complete dentures (upper and lower)</td>
                <td>£150.28</td>
              </tr>
            </tbody>
          </table>
          <p class="text">A dentist can charge a patient if they fail to attend for an appointment without giving due notice.</p>
        </div>
        <div class="info-section" ref={(section) => { this.free = section; }}>
          <div class="subtitle">Who gets free treatment on the NHS?</div>
          <p class="text">
            NHS treatment is free for: <br />
            • Everyone aged under 18; <br />
            • Those aged under 18 in full-time education; <br />
            • Pregnant and nursing mothers, until the baby is 12 months old; <br />
            • Those with certificated exemption from payment due to: <br />
              - Income Support <br />
              - Pension Credit guarantee Credit <br />
              - Universal Credit <br />
              - Income related Employment Support Allowance <br />
              - Income-based job Seekers Allowance <br />
              - Valid NHS Tax Credit Exemption Certificate <br />
              - Valid HC2 <br />
            Please take evidence of any exemption with you to the dentist. <br />
            If your exemption from payment changes during a course of treatment please advise the dentist.
          </p>
          <p class="text">
            To find out more about getting free NHS dental treatment, or about help if you are on a low income, phone the NHS inform Helpline on 0800 22 44 88.
          </p>
        </div>
        <div class="info-section" ref={(section) => { this.priorapproval = section; }}>
          <div class="subtitle">What is Prior Approval?</div>
          <p class="text">
            Your dentist may inform you that they have to apply for prior approval before your treatment can be started. Dentists are required to seek approval from NHS Scotland, for certain treatments and treatments of high value This process may take a little time and delay your treatment slightly.
          </p>
        </div>
        <div class="info-section" ref={(section) => { this.emergency = section; }}>
          <div class="subtitle">What if I need dental care in an emergency?</div>
          <p class="text">
            • During opening hours, contact us as early in the day as possible <br />
            • Outside opening hours, call the practice and an answer-phone message will let you know how to get advice or treatment
          </p>
          <p class="text">
            Chipped tooth, broken ortho, broken dentures are not emergency’s.
          </p>
          <p class="text">
            Emergency’s: Trauma, oral-facial swelling, prolonged/ uncontrolled fleeding following extraction, trismus, medical condition likely to be exacerbated by dental condition
          </p>
          <p class="text">
            Urgent Treatment: Dental & soft tissue infection, severe dental or facial pain, fractured tooth/teeth with pulpal exposure
          </p>
          <p class="text">
            Routine: mild/moderate pain not require intervention within 24hrs, loose or displace crown, bridges and veneers, fractured or loose or displaced fillings.
          </p>
          <p class="text">
            Broken ortho appliance: see an orthodontist
          </p>
        </div>
        <div class="info-section" ref={(section) => { this.expectations = section; }}>
          <div class="subtitle">What can I expect from my dentist?</div>
          <p class="text">Your dentist will:</p>
          <p class="text">
            • If you are registered, provide any NHS dental treatment you need to keep your mouth, teeth and gums healthy <br />
            • Explain your treatment options and let you know what treatment can be done under the NHS <br />
            • Make sure you know how much your treatment may cost <br />
            • Let you know about any changes to your treatment, and ask for your agreement to any treatment.
          </p>
        </div>
        <div class="info-section" ref={(section) => { this.practiceexpect = section; }}>
          <div class="subtitle">What does the practice expect from me?</div>
          <p class="text">
            You should: <br />
            • attend for treatment as often as your dentist recommends <br />
            • let us know as soon as possible if you can't attend an appointment - we can charge a fee if you cancel with less than 24 hour notice or don't turn up for an appointment.  If you regularly miss appointments, we can end your registration <br />
            • let us know when any of your personal information changes, for example, if you move house <br />
            • pay for your treatment when asked - we can refuse to treat you if you haven't paid for previous treatment and can end your registration <br />
            • treat dental staff with respect - if you are abusive, violent or threaten a member of staff or another patient at your dental practice, we can refuse to treat you and can end your registration immediately <br />
            • follow advice on how to look after your mouth, teeth and gums <br />
            • follow advice on how to look after your child's mouth, teeth and gums (visit the Childsmile website at www.child-smile.org for more information about this) <br />
            • let us know about any changes to your general health or to any medicine you are taking, and <br />
            • ask if you don't understand something. <br />
          </p>
        </div>
        <div class="info-section" ref={(section) => { this.unhappy = section; }}>
          <div class="subtitle">What if I'm unhappy with my dental care?</div>
          <p class="text">
            • If you are unhappy with your dental care, speak to your dentist or a member of staff at the dental practice. <br />
            • If you are still unhappy, you can make a complaint. We will tell you how to do this.
          </p>
        </div>
        <div class="info-section" ref={(section) => { this.more = section; }}>
          <div class="subtitle">How to find out more?</div>
          <p class="text">
            For more information about our services: <br />
            • ask the staff at your dental practice
          </p>
          <p class="text">
            (This information is available on the Scottish Government website www.scotland.gov.uk.  The information was obtained from a leaflet that was produced by the Scottish Government Health Directorates, with the help of Health Rights Information Scotland, a project of Consumer Focus Scotland. It is produced in association with the British Dental Association).
          </p>
        </div>
      </div>
    )
  }
}

export default NewPatients;