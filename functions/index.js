const functions = require("firebase-functions");

const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
admin.initializeApp();

let transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
        user: "apikey",
        pass: "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",
    },
});


exports.sendEmail = functions.https.onRequest((request, response) => {
    const email_form = 'valeriocordax@gmail.com';
    const message = 'test message for the app!';

    const mailOptions = {
        from:
    }
})