import React from 'react';

class Treatment extends React.Component {
  render() {
    return (
      <div class="treatment-plans">
        <h3 class="treatment-header"><b>Example NHS Treatment Plans</b> at Great King St Dental Practice</h3>
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-sm-6">
              <div class="treatment-card">
                <p class="treatment-card-title">Treatment Plan 1</p>
                <ul class="treatment-card-list">
                  <li>Exam</li>
                  <li>Scale and Polish</li>
                  <li>Two X-Rays</li>
                </ul>
                <p class="treatment-card-price">£15.64</p>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="treatment-card">
                <p class="treatment-card-title">Treatment Plan 2</p>
                <ul class="treatment-card-list">
                  <li>Three Amalgam Fillings</li>
                </ul>
                <p class="treatment-card-price">£40.80</p>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="treatment-card">
                <p class="treatment-card-title">Treatment Plan 3</p>
                <ul class="treatment-card-list">
                  <li>Exam</li>
                  <li>X-Ray</li>
                  <li>Scale and Polish</li>
                  <li>Composite Filling</li>
                  <li>Extractions</li>
                </ul>
                <p class="treatment-card-price">£40.56</p>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="treatment-card">
                <p class="treatment-card-title">Treatment Plan 4</p>
                <ul class="treatment-card-list">
                  <li>Three X-Rays</li>
                  <li>Amalgam Filling</li>
                  <li>Root Filling</li>
                </ul>
                <p class="treatment-card-price">£108.52</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Treatment;