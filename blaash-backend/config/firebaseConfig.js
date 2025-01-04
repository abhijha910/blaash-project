const admin = require('firebase-admin');

// Initialize Firebase Admin SDK with service account key (replace with your actual path)
const serviceAccount = require('../path/to/your/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-project-id.firebaseio.com" // Your Firebase DB URL
});

module.exports = admin;
