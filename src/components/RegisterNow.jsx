import React from 'react';
import Header from './Header';
import RegisterForm from './RegisterForm';

class RegisterNow extends React.Component {
  render() {
    return (
        <div class='container'>
          <Header />
          <img src="img/hero.jpg" class="img-fluid" alt="hero" />
          <RegisterForm />
        </div>
    )
  }
}

export default RegisterNow
