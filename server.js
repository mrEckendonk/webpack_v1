const experss = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = experss();
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    }),
);

app.listen(3000, function() {
    console.log('server is running at 3000!\n');
});
