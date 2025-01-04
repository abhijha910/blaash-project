const express = require('express');
const { sendOtp, verifyOtp } = require('../controllers/authController');
const router = express.Router();

// Route to send OTP to the user's email
router.post('/send-otp', sendOtp);

// Route to verify the OTP entered by the user
router.post('/verify-otp', verifyOtp);

module.exports = router;
