const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const items = require('./routes/api/items');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//send email
app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account ) => {
        const htmlEmail = `
            <h3>Contact Details</h3>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Email: ${req.body.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${req.body.message}</p>
            `

            const transporter = nodemailer.createTransport({
                service: "gmail",
                host: 'smtp.gmail.com',
                port: 465,
                auth: {
                    user: 'vaaintyleaders@gmail.com',
                    pass: 'vanityleaders2020'
                }
            });

            let mailOptions = {
                from: req.body.email,
                to: 'vaaintyleaders@gmail.com',
                replyTo: 'test@testaccount.com',
                subject: 'Vanity Leaders Contact Form',
                text: req.body.message,
                html: htmlEmail
            }

            transporter.sendMail(mailOptions, (err,info) => {
                if (err) {
                    return console.log(err)
                }

                console.log('Message sent: %s', info.message)
                console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
            })
    })
});

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// use routes

app.use('/api/items', items);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));