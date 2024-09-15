// /api/index.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

// Enable CORS for your frontend
app.use(cors());

// Route to handle API request
app.get('/api/points/:address', async (req, res) => {
  const address = req.params.address;

  try {
    const response = await axios.get(`https://app.usual.money/api/points/${address}`, {
      headers: {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json",
        "authorization": ""
        "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Brave\";v=\"128\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
      }
    });

    // Send the data back to the frontend
    res.json(response.data);

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Failed to fetch data from API' });
  }
});

// Listen on port (not needed on Vercel, handled by Vercel)
module.exports = app;
