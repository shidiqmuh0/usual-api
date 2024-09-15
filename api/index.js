const express = require('express');
const { createServer } = require('@vercel/node');
const axios = require('axios');

const app = express();

app.get('/api/points/:address', async (req, res) => {
  const address = req.params.address;

  try {
    const response = await axios.get(`https://app.usual.money/api/points/${address}`, {
      headers: {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json",
        "authorization": "",
        "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Brave\";v=\"128\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Failed to fetch data from API' });
  }
});

// Export the Express app wrapped in the serverless function handler
module.exports = createServer(app);
