import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import NewPatients from './components/NewPatients';
import RegisterNow from './components/RegisterNow';
import Treatments from './components/Treatments';
import CosmeticDentistry from './components/CosmeticDentistry';
import Dentures from './components/Dentures';
import Implants from './components/Implants';
import EmergencyDentist from './components/EmergencyDentist';

import Footer from './components/Footer';

// const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <Router>
    <div>
      <div class="navbar-band"></div>
      <Switch>
        <Route path="/new-patients" component={NewPatients} />
        <Route path="/register-now" component={RegisterNow} />
        <Route path="/why-choose-us" component={WhyChooseUs} />
        <Route path="/treatments" component={Treatments} />
        <Route path="/cosmetic-dentistry" component={CosmeticDentistry} />
        <Route path="/dentures" component={Dentures} />
        <Route path="/implants" component={Implants} />
        <Route path="/emergency-dentist" component={EmergencyDentist} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  </Router>,
  document.getElementById('app')
);