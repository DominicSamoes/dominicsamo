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
    service: 'outlook',
    auth: {
        user: 'email@outlook.com',
        pass: ''
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
    

})