import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
	try {
		await sendgrid.send({
			to: "zachary.jowett@gmail.com", // Your email where you'll receive emails
			from: "zachary.jowett@gmail.com", // your website email address here
			subject: `[Portfolio] : ${req.body.values.subject}`,
			html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3><strong>From:</strong> ${req.body.values.name}</h3>
              <h3><strong>Email:</strong> ${req.body.values.email} </h3>
              <div style="font-size: 16px;">
              <h3><strong>Message:</strong></h3>
              <p>${req.body.values.email}</p>
              <br>
              </div>
              </div>
      </body>
      </html>`,
		});
	} catch (error) {
		console.log(error);
		return res
			.status(error.statusCode || 500)
			.json({ error: error.message });
	}

	return res.status(200).json({ error: "" });
}

export default sendEmail;
