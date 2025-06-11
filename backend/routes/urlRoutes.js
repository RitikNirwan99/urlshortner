const express = require('express');
const router = express.Router();
const shortid = require('shortid');
const Url = require('../models/Url');



router.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body;
  const shortId = shortid.generate();

  try {
    let url = new Url({ originalUrl, shortId });
    await url.save();
    res.json({ shortUrl: `${process.env.BASE_URL}/${shortId}` });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
