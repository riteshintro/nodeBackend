
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail', // or your chosen service
    auth: {
        user: 'riteshkumarmaurya563@gmail.com',
        pass: 'Wing@563'
    }
});

exports.sendMail=(req, res) => {
    const { to, subject, content } = req.body; // Extract email data from request body
console.log(req, "this is the request");
    // mailer.sendMail(to, subject, content)
    //     .then(() => res.json({ message: 'Email sent successfully!' }))
    //     .catch(error => res.status(500).json({ error: 'Failed to send email' }));
            const mailOptions = {
                from: 'riteshintro@gmail.com',
                to,
                subject,
                html: content // Can also use text: 'plain text content'
            };
        
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error(error);
                    // Handle error appropriately (e.g., return an error response)
                } else {
                    console.log('Email sent: ' + info.response);
                    // Handle successful email sending (e.g., return a success response)
                }
            }).then(() => res.json({ message: 'Email sent successfully!' }))
                .catch(error => res.status(500).json({ error: 'Failed to send email' }));
        };
// };

exports.sendMail = (to, subject, htmlContent) => {
    const mailOptions = {
        from: 'riteshintro@gmail.com',
        to,
        subject,
        html: htmlContent // Can also use text: 'plain text content'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            // Handle error appropriately (e.g., return an error response)
        } else {
            console.log('Email sent: ' + info.response);
            // Handle successful email sending (e.g., return a success response)
        }
    });
};

exports.getUserById = (req, res, next) => {
    const userId = req.params.id;
    const user = { id: userId, name: 'John Doe' };
    res.json(user);
};
