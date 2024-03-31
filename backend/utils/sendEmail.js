import nodeMailer from "nodemailer";

export async function sendEmail(
  subject,
  message,
  send_to,
  sent_from,
  reply_to
) {
  const transporter = nodeMailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465, //comes from service we use (zoho) Use `true` for port 465, `false` for all other ports
    // port: 587, // outlook port
    // secure: true,
    auth: {
      //contains username and password of email service we using
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const emailOptions = {
    // grabs all the parameters from this function and store in object
    from: sent_from,
    to: send_to,
    replyTo: reply_to,
    subject: subject,
    html: message,
  }; // these are the options needed to be in place to send email.
  transporter.sendMail(emailOptions, function (err, info) {
    // if error occurs its info will be saved in 'err'
    // if email sends successfully its response will be saved in 'info
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
}
