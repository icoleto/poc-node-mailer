const nodemailer = require("nodemailer");

async function main() {



const  transporter = nodemailer.createTransport({
  service: `Hotmail`,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    }
});

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"Example" <${process.env.EMAIL}>`, // sender address
    to: "emailto@hotmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: ``, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);