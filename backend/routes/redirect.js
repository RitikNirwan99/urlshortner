const Url = require('../models/url');

module.exports = async (req, res) => {
  const { shortId } = req.params;
  try {
    const url = await Url.findOne({ shortId });
    if (url) {
      url.clicks++;
      await url.save();
      return res.redirect(url.originalUrl);
    } else {
      return res.status(404).send('Not found');
    }
  } catch (err) {
    return res.status(500).send('Server error');
  }
};
