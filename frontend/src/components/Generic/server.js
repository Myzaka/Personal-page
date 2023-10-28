const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'votreadresse@gmail.com',
    pass: 'votreMotDePasse',
  },
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'votreadresse@gmail.com',
    to: 'test@test.fr', // Votre adresse e-mail
    subject: 'Nouveau Message de Contact',
    text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Erreur lors de l\'envoi de l\'e-mail');
    } else {
      console.log('Email envoyé: ' + info.response);
      res.status(200).send('E-mail envoyé avec succès');
    }
  });
});

app.listen(3001, () => {
  console.log('Serveur backend démarré sur le port 3001');
});
