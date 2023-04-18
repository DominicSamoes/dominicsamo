const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');

// Server used to send emails
const app = express();
app.use(express.json());
app.use('/', router);
app.listen(5000, () => console.log('Server Running'));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'samoxcorp@gmail.com',
        pass: 'egadovrljilsfnrz'
    }
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post('/contact', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;
    
    const mail = {
        from: name,
        to: 'samoxcorp@gmail.com',
        subject: 'Contact - Portfolio Website',
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Phone: ${phone}</p>
               <p>Message: ${message}</p>`,
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
        } else {
            res.json({ code: 200, status: "Message Sent" });
        }
    });
});