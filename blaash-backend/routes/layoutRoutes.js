const express = require('express');
const { saveLayout, getLayout } = require('../controllers/layoutController');
const router = express.Router();

// Route to save layout data for a user
router.post('/save-layout', saveLayout);

// Route to fetch the saved layout for a user
router.get('/get-layout', getLayout);

module.exports = router;
