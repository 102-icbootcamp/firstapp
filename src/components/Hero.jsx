import React from 'react';

class Hero extends React.Component {
  render() {
    return (
      <div class='hero'>
        <img src="img/hero.jpg" class="img-fluid" alt="Responsive image" />
        <div class="jumbotron jumbotron-fluid jumbotron-main">
          <div class="container">
            <p class="lead">Learn more about our cosmetic dentistry and facial aesthetic treatments including teeth whitening, white fillings and much more. We provide complete smile makeovers to improve your confidence and make you feel and look younger.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero;