const express = require('express');
const router = express.Router(); // ← THIS LINE WAS MISSING
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer'); // only if you’re sending email

router.post('/', async (req, res) => {
  try {
    console.log("📥 Received contact form data:", req.body);

    const { name, email, message } = req.body;

    const newMessage = new Contact({ name, email, message });
    await newMessage.save();
    console.log("✅ Message saved to MongoDB");

    // Optional: email sending
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'vinothinim012@gmail.com',
        pass: 'mllj saet byfv zayb',
      },
    });

    const mailOptions = {
      from: email,
      to: 'vinothinim012@gmail.com',
      subject: `New message from ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully");

    res.status(200).json({ message: 'Message saved and email sent successfully!' });
  } catch (err) {
    console.error("❌ Error occurred:", err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
