const router = require('express').Router();
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'test@example.com',
  from: 'test@example.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
};
sgMail.send(msg);
const footer = '\n\n\nmessage from: ';


router.route('/email')
  .post((req, res) => {
    const {nom, prenom, email, message} = req.body;
    const msg = {
      to: 'tristanneumann1@gmail.com',
      from: email,
      subject: 'message from travaux chez moi: ' + nom + ' ' + prenom,
      text: message + footer + email,
    };
    sgMail.send(msg, (err, info) => {
      if(err) {
        console.log(err);
        res.status(400).send('Email error occured');
      } else {
        console.log(info);
        res.status(202).send(info);
      }
    });
  });

module.exports = router;