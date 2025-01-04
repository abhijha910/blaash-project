const admin = require('../config/firebaseConfig');

// Send OTP to the user's email
const sendOtp = async (req, res) => {
  const email = req.body.email;
  
  try {
    // Create an OTP (You can use Firebase Auth or your own method for generating OTP)
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Save OTP to Firebase or other database (this is just an example)
    await admin.database().ref('otps').child(email).set({ otp });

    // Send OTP to email (you can implement an email service here)
    // For example, using nodemailer to send the OTP to user's email

    return res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error("Error sending OTP:", error);
    return res.status(500).json({ error: 'Failed to send OTP' });
  }
};

// Verify OTP entered by the user
const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  
  try {
    const otpData = await admin.database().ref('otps').child(email).once('value');
    const storedOtp = otpData.val()?.otp;
    
    if (storedOtp === otp) {
      // OTP is correct, proceed with user authentication
      return res.status(200).json({ message: 'OTP verified successfully' });
    } else {
      return res.status(400).json({ error: 'Invalid OTP' });
    }
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return res.status(500).json({ error: 'Failed to verify OTP' });
  }
};

module.exports = { sendOtp, verifyOtp };
