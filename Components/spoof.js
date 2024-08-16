const nodemailer = require("nodemailer");
const fs = require("fs");

// Create a transport object to send our email through
// nodemailer automatically configrues the port

// There is one IP address in stevens-edu.mail.protection.outlook.com that gets filtered for spam (thanks Spamhouse we hate you), but the rest are good.
// Just brute force through them. I think one of them is a remnant from the old Stevens IT days
const transporter = nodemailer.createTransport({
    host: 'stevens-edu.mail.protection.outlook.com',
    auth: {
        user: 'nfarvard@stevens.edu',
        pass: "Random_Password_Here"
    },
    port: 25            // For some reason, Stevens mail is still using the old port for SMTP
});

// Read text to send
// If you're building this off Github, you'll need to create your own email.txt since I added that to .gitignore
let email_content = fs.readFileSync("./email.txt", {encoding: 'utf-8'});

transporter.sendMail({
    from: 'Nariman Farvardin <nfarvard@stevens.edu>',
    to: 'RANDOM_EMAIL_HERE',
    subject: 'RANDOM_SUBJECT_HERE',
    text: email_content,
    attachments: [
        {
            path: `<Insert absolute path to attachments>`
        }
    ]
}, (err, info) => {
    if (err)
    {
        console.error(err);
    }
    else
    {
        console.dir(info);
    }
});