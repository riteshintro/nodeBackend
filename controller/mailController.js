const nodemailer = require('nodemailer');

exports.sendMail=(req,res)=> {
    const {to}= req.body;
    console.log(to)
    // console.log(req.body,"this is the request body");
    // const { to, subject, content } = req.body;
    console.log(req)
    const transporter = nodemailer.createTransport({
      service: 'Outlook',
      auth: {
        user: 'riteshintro@outlook.com',
        pass: 'Wing@563'
      }
    });
  
    // Define your email content
    const mailOptions = {
      from: 'riteshintro@outlook.com',
      to: to,
      subject: 'Subject of your email',
      text: 'Text content of your email',
      html:`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Your Email Title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
      <body>
        <div style="color: #cccccc; font-size: 12px; line-height: 1.5; text-align: center;">
          A concise summary of your email content.
        </div>
      
        <table style="width: 600px; margin: 0 auto; border: 1px solid #ddd;">
          <tr>
            <td style="padding: 20px; background-color: #f5f5f5;">
              </td>
          </tr>
          <tr>
            <td style="padding: 20px;">
              <h1>Your Email Subject</h1>
              <p>Here's your main email content with clear formatting and calls to action.</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px; text-align: center; background-color: #f5f5f5;">
              <p>Copyright &copy; 2024 Your Company Name</p>
              <p><a href="unsubscribe">Unsubscribe</a></p>
            </td>
          </tr>
        </table>
      </body>
      </html>
      `
    };
  
    // Send the email
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        res.status(500).json({ error: 'Failed to send email' })
      } else {
        res.json({ message: 'Email sent successfully!' })
     
      }
    });
  }