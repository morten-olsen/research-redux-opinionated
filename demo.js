const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const api = require('./api');
const app = express();

const traditionalConfig = require('./traditional/webpack.config.js');
const traditionalBundler = webpack(traditionalConfig);
app.get('/traditional', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.use('/traditional', webpackDevMiddleware(traditionalBundler));

const standardizedConfig = require('./standardised/webpack.config.js');
const standardizedBundler = webpack(standardizedConfig);
app.get('/standardised', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.use('/standardized', webpackDevMiddleware(standardizedBundler));

app.use('/api', api);
app.listen(process.env.PORT || 3004);
