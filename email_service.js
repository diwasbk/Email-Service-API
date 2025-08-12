import express from "express"
import nodemailer from "nodemailer"
const app = express()
// Middleware to parse JSON request bodies
app.use(express.json())

// Configure Nodemailer transporter for Gmail SMTP
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "your-email@gmail.com", // Your Gmail address
        pass: "your-app-password" // Your App Password
    }
});

// API Endpoint: Send Email
app.post("/api/send-email/:name/:receiver", (req, res) => {
    const mailOptions = {
        form: "your-email@gmail.com", // Sender email address
        to: req.params.receiver,  // Receiver email from URL parameter
        subject: req.body.subject, // Email subject from request body
        html: `<span style="padding: 20px;"><b>Hello, ${req.params.name}</b></span>` + req.body.html // HTML body content
    }
    // Send the email using Nodemailer
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            res.send({
                message: "Email Operation Failed! Please try again later.",
                success: false
            })
        } else {
            res.send({
                message: `Email sent successfully to ${mailOptions.to}`,
                success: true
            })
        }
    })
})

// Start the Express server
app.listen(4000, () => {
    console.log("server is runnning at the port 4000.");

})
