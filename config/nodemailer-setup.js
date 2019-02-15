const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_MAIL,
    password: process.env.GMAIL_PASS
  }
});

function sendConfirmationMail(userDoc) {
  return transport.sendMail({
    from: "HopOnHopOff <hopon.hopoff.travel@gmail.com",
    to: `${userDoc.lastName} <${userDoc.email}>`,
    subject: "Confirmation reservation",
    text: `Dear, ${userDoc.lastName}! 
     Happy to have you on our Euro Trip.
Here’s your details of the trip: (Move info from Summary Page)
Awesome! Hope you’re excited as we are :sourire:. Pack your bag and relax, we’ll handle everything else for you.
Welcome on board! 
    `,
    html: `<h1 >Welcome, ${userDoc.lastName}!</h1>`
  });
}

module.exports = { sendConfirmationMail };
