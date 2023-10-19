const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  // service: 'gmail',
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
})

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'sebashersan@gmail.com',
    to: 'hernandez2019251010@unitropico.edu.co',
    subject: 'Nuevo mensaje de contacto',
    text: `Nombre: ${name} \nCorreo: ${email} \nMensaje: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) =>{
    if (error) {
      console.error(error);
      res.status(500).send('Error al enciar el correo');
    } else {
      console.log('Correo enviado: '+ info.response);
      res.status(200).send('Correo enviado con éxito');
    }
  });

});

app.listen(3001, () =>{
  console.log('Servidor Express en funcionamiento en el puerto 3001');
  console.log(process.env.USER);
});