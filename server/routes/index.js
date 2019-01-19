var path = require('path');
var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: 'dumfries.webserver@gmail.com',
    pass: 'gkdental123'
  },
  tls: {
    rejectUnauthorized: false
  }
});

module.exports = function(app) {
  app.post('/contactform', function(req, res) {
    let message = `
      <h2>Contact Request</h2>
      <h3><b>Details</b></h3>
      <ul>
        <li><b>Name: </b>${req.body.forename} ${req.body.surname}</li>
        <li><b>Telephone: </b>${req.body.telephone}</li>
        <li><b>Email: </b>${req.body.email}</li>
      </ul>
      <h3><b>Message</b></h3>
      <p>${req.body.message}</p>
    `;
    let data = {
      from: '"GKDental" <dumfries.webserver@gmail.com>',
      to: 'dumfries.webserver@gmail.com',
      subject: 'Contact Request',
      html: message
    };
    transporter.sendMail(data, (error, info) => {
      if (error) {
        console.log(error);
        res.send({ status: false })
      }
      res.send({ status: true })
    });
  });

  app.post('/registerform', function(req, res) {
    let message = `
      <h2>Register Form</h2>
      <h3><b>Details</b></h3>
      <ul>
        <li><b>Full Name: </b>${req.body.name}</li>
        <li><b>Date Of Birth: </b>${req.body.dob}</li>
        <li><b>Mobile Phone: </b>${req.body.mobile}</li>
        <li><b>Home Phone: </b>${req.body.homePhone}</li>
        <li><b>Email: </b>${req.body.email}</li>
        <li><b>Home Address: </b>${req.body.address}</li>
        <li><b>City: </b>${req.body.city}</li>
        <li><b>Postcode: </b>${req.body.postcode}</li>
      </ul>
      <h3><b>Message</b></h3>
      <p>${req.body.message}</p>
    `;
    let data = {
      from: '"GKDental" <dumfries.webserver@gmail.com>',
      to: 'dumfries.webserver@gmail.com',
      subject: 'Register Form',
      html: message
    };
    transporter.sendMail(data, (error, info) => {
      if (error) {
        console.log(error);
        res.send({ status: false })
      }
      res.send({ status: true })
    });
  });

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
  });
};