/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const path = require('path');
const express = require('express');
const enforce = require('express-sslify');

const app = express();

/* istanbul ignore if */
if (process.env.NODE_ENV === 'production') app.use(enforce.HTTPS({ trustProtoHeader: true }));

// set up rate limiter: maximum of five requests per minute
const RateLimit = require('express-rate-limit');

const limiter = new RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5,
});

// apply rate limiter to all requests
app.use(limiter);

app.use(express.static(path.normalize(path.join(__dirname, 'dist'))));
app.use('/', express.static(path.normalize(path.join(__dirname, 'dist'))));
app.get('/*', (req, res) => {
  res.sendFile(path.normalize(path.join(__dirname, 'dist/index.html')));
});
app.listen(process.env.PORT, () => {
  console.log(`Magic happens on port ${process.env.PORT}`); // eslint-disable-line no-console
});

module.exports = app;
