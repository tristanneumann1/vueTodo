const router = require('express').Router();
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tristanneumann0@gmail.com',
    pass:process.env.password,
  }
});
const footer = '\n\n\n';

router.route('/email')
  .post((req, res) => {
    const {nom, prenom, email, message} = req.body;
    const mailOptions = {
      from: email,
      to: 'tristanneumann1@gmail.com',
      subject: `email from site: ${prenom} ${nom}`,
      text: message + footer + email,
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if(err) {
        console.log(err);
        res.status(400).send('Email error occured');
      } else {
        res.status(202).send(info);
      }
    });
  });

module.exports = router;