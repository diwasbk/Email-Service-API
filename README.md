# Email Service API

This is a simple Node.js backend API for sending emails using **Nodemailer** and **Express** with Gmail SMTP.

---

## Features

- Send emails with dynamic receiver, subject, and HTML content  
- Uses URL parameters for receiver email and recipient name  
- Uses Gmail SMTP with Nodemailer for sending emails  
- Simple JSON API interface  

---

## Getting Started

### Prerequisites

- Node.js installed  
- A Gmail account  
- An **App Password** generated from your Google Account (if 2FA enabled)  

### Setup Gmail App Password

1. Go to your Google Account Security settings.  
2. Enable 2-Step Verification (if not already).  
3. Create an App Password for "Mail" and "Other" device.  
4. Copy the generated 16-character password — you'll need it below.  

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/diwasbk/Email-Service-API.git
````

2. Navigate into the project folder:

```bash
cd Email-Service-API
```

3. Install dependencies:

```bash
npm install
```

4. Open `email_service.js` and update the transporter configuration with your Gmail address and app password:

```js
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "your-email@gmail.com",
        pass: "your-app-password"
    }
});
```

---

## Usage

Start the server:

```bash
nodemon email_service.js
```

Server will run on:
`http://localhost:4000`

---

## API Endpoint

`POST /api/send-email/:name/:receiver`

* **:name** — Recipient's name (used in email greeting)
* **:receiver** — Receiver's email address

### Example Request URL

```
http://localhost:4000/api/send-email/Receiver/receiver@example.com
```


### Request Body JSON Example

```json
{
  "subject": "API Email Testing - Service Verification",
  "html": "<div style=\"font-family: Arial, sans-serif; color: #333; padding: 20px;\"><h2 style=\"color: #4CAF50;\">Backend API Email Service</h2><p>This is a test email sent via our <b>Backend API Email Service</b> to verify that the email-sending functionality is working correctly.</p><p>If you are receiving this message, the API is functioning as expected.</p><br><p>Best regards,</p><p><b>diwascodes</b> || Backend Email API Services</p></div>"
}
```

---

You can test this API endpoint using tools like **Postman**, **Thunder Client**, or **curl** by making a **POST** request to the above URL with the JSON body.

---

## Notes

* Store your Gmail password securely using environment variables in production.
* Gmail has sending limits and may block suspicious activity.
* Using Gmail App Passwords is recommended over your regular password.

---

## Author

[Diwas Bk](https://github.com/diwasbk)
