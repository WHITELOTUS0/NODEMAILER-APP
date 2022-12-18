const nodemailer = require('nodemailer');
      let transporter = nodemailer.createTransport({
             host: 'smtp.mailtrap.io',
             port: 2525,
             auth: {
                 user: "947a065d4a3b10",
                 pass: "3c1f0be0c5e4b0"
             }
     });

     message = {
        from: "from-example@email.com",
        to: "to-example@email.com",
        subject: "Subject",
        text: "Hello SMTP Email"
   };
   transporter.sendMail(message);