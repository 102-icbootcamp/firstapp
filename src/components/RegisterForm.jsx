import React from 'react';
import axios from 'axios';

class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      dob: '',
      mobile: '',
      homePhone: '',
      email: '',
      address: '',
      city: '',
      postcode: '',
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
    axios.post('/registerform', {
      name: this.state.name,
      dob: this.state.dob,
      mobile: this.state.mobile,
      homePhone: this.state.homePhone,
      email: this.state.email,
      address: this.state.address,
      city: this.state.city,
      postcode: this.state.postcode,
      message: this.state.message
    }).then((response) => {
      console.log('hey', response);
      if (response.data.status) {
        this.setState({
          response: 'Form received. Our staff will be in contact with you soon to book in a registry check up appointment with one of our dentists'
        });
      } else {
        this.setState({
          response: 'An error occured, try again later'
        });
      }
      this.setState({
        name: '',
        dob: '',
        mobile: '',
        homePhone: '',
        email: '',
        address: '',
        city: '',
        postcode: '',
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
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input type="text" class="form-control" value={this.state.name} placeholder="Full Name" onChange={(e) => { this.onInputChange('name', e) }} required />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" value={this.state.dob} placeholder="Date Of Birth" onChange={(e) => { this.onInputChange('dob', e) }} required  />
              </div>
              <div class="form-group">
                <input type="tel" class="form-control" value={this.state.mobile} placeholder="Mobile Phone" onChange={(e) => { this.onInputChange('mobile', e) }} required />
              </div>
              <div class="form-group">
                <input type="tel" class="form-control" value={this.state.homePhone} placeholder="Home Phone" onChange={(e) => { this.onInputChange('homePhone', e) }} required />
              </div>
              <div class="form-group">
                <input type="email" class="form-control" value={this.state.email} aria-describedby="emailHelp" placeholder="Email" onChange={(e) => { this.onInputChange('email', e) }} required />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <input type="text" class="form-control" value={this.state.address} placeholder="Home Address" onChange={(e) => { this.onInputChange('address', e) }} required />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" value={this.state.city} placeholder="City" onChange={(e) => { this.onInputChange('city', e) }} required  />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" value={this.state.postcode} placeholder="Postcode" onChange={(e) => { this.onInputChange('postcode', e) }} required  />
              </div>
              <div class="form-group">
               <textarea class="form-control" value={this.state.message} placeholder="Message (If you would like to register your family, simply write down their full names and dates of birth here.)" rows="3" onChange={(e) => { this.onInputChange('message', e) }}></textarea>
              </div>
            </div>
          </div>
          <button type='submit' class="checkup-btn btn-small">{ this.state.loading ? 'Sending...' : 'Register' }</button>
          <p class="form-response">{ this.state.response }</p>
        </form>
        </div>
      </div>
    )
  }
}

export default RegisterForm;

// { this.state.loading ? <img src="img/loading.gif" alt="Loading" class="img-fluid" /> : 'Call Me Back' }