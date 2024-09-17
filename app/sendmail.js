import nodemailer from "nodemailer";
import isCaptchaOk from "./verifCaptcha.js";

export default function sendMail(request, response) {
  const captcha = isCaptchaOk(request, response);
  const { name, email, message } = request.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    to: "jeremy81-17@hotmail.fr",
    subject: `${name} vous a contacté via le formulaire de votre site`,
    text: `${name} - ${email} 
    ${message}`,
  };
  if (!captcha) {
    response
      .status(400)
      .json({ message: "Échec de la vérification du captcha" });
  }
  transporter.sendMail(mailOptions);
  response.status(200).json({ message: "mail envoyé avec succès" });
}
