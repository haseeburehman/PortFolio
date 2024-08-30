const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
  res.send('Server is running and ready to receive POST requests at /send-email');
});

// Endpoint to handle form submission
app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // or another email service provider
    auth: {
      user: 'haseeb6136@gmail.com', // your email address
      pass: 'your-email-password' // your email password
    }
  });

  // Set up email data
  const mailOptions = {
    from: email,
    to: 'haseeb6136@gmail.com', // your email address
    subject: subject,
    text: `Message from ${name} (${email}):\n\n${message}`
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email');
    }
    res.status(200).send('Email sent successfully');
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
