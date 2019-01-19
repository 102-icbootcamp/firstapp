import React from 'react';
import axios from 'axios';

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      forename: '',
      surname: '',
      telephone: '',
      email: '',
      message: '',
      response: '',
      loading: false
    }
  }

  onInputChange(field, e) {
    this.setState({
      [field]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      response: '',
      loading: true
    });
    axios.post('/contactform', {
      forename: this.state.forename,
      surname: this.state.surname,
      telephone: this.state.telephone,
      email: this.state.email,
      message: this.state.message
    }).then((response) => {
      console.log('hey', response);
      if (response.data.status) {
        this.setState({
          response: 'Message was sent successfully'
        });
      } else {
        this.setState({
          response: 'An error occured, try again later'
        });
      }
      this.setState({
        forename: '',
        surname: '',
        telephone: '',
        email: '',
        message: '',
        loading: false
      });
    })
  }

  render() {
    return (
      <div class="card card-primary card-form">
        <div class="card-header">
          Request a call back and speak to one of our team today
        </div>
        <div class="card-body">
         <form onSubmit={this.onSubmit.bind(this)}>
            <p>{ this.state.response }</p>
           <div class="form-group">
             <input type="text" class="form-control" value={this.state.forename} placeholder="Forename" onChange={(e) => { this.onInputChange('forename', e) }} required />
           </div>
           <div class="form-group">
             <input type="text" class="form-control" value={this.state.surname} placeholder="Surname" onChange={(e) => { this.onInputChange('surname', e) }} required  />
           </div>
           <div class="form-group">
             <input type="tel" class="form-control" value={this.state.telephone} placeholder="Telephone" onChange={(e) => { this.onInputChange('telephone', e) }} required />
           </div>
           <div class="form-group">
             <input type="email" class="form-control" value={this.state.email} aria-describedby="emailHelp" placeholder="Email" onChange={(e) => { this.onInputChange('email', e) }} required />
           </div>
           {
            this.props.message ?
              <div class="form-group">
               <textarea class="form-control" value={this.state.message} placeholder="Message (If you are looking to register please provide fullname, DOB, full address, phone no. and email)" rows="3" onChange={(e) => { this.onInputChange('message', e) }}></textarea>
             </div> :
             ''
           }
           <button type='submit' class="checkup-btn btn-small">{ this.state.loading ? 'Sending...' : 'Call Me Back' }</button>
         </form>
        </div>
      </div>
    )
  }
}

export default ContactForm;

// { this.state.loading ? <img src="img/loading.gif" alt="Loading" class="img-fluid" /> : 'Call Me Back' }