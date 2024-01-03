require('dotenv').config();

const nodeMailer = require('nodemailer');
const {createTransport} = require("nodemailer");

async function sendEmail(email, name, content) {

    const html = `
        <div> 
        <h1>From ${name}</h1>
        <h1>email: ${email}</h1>
        <p>${content}</p>
        </div>
        `
    ;


    // create transporter object using nodemailer
    const transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PW
        }
    });


    const info = await transporter.sendMail({
        from: `"Personal Website" <teihyunggg@gmail.com>`,
        to: process.env.NODEMAILER_TO,
        subject: `For homepage inquiry`,
        html: html,
    });

    console.log("Message sent: %s", info.messageId);

}

module.exports = sendEmail;