// Important modules this config uses
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.base').default;
const getPublicPath = require('./webpack.base').getPublicPath;
const commonConfigs = require('./commons.json');

const PROJECT = process.env.DRVR_PROJECT;

module.exports = baseConfig({
  // In production, we skip all hot-reloading stuff
  entry: [
    path.join(process.cwd(), `src/projects/${PROJECT}`),
  ],

  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    filename: 'js/[name]_[chunkhash].js',
    chunkFilename: 'js/[name]_[chunkhash].chunk.js',
  },

  // where compile locally
  outputFolder: path.resolve(process.cwd(), `builds/prod/${PROJECT}`),

  // We use ExtractTextPlugin so we get a seperate CSS file instead
  // of the CSS being in the JS and injected as a style tag
  cssLoaders: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: 'css-loader?modules&importLoaders=1',
  }),

  plugins: [

    // Minify and optimize for production
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false, // hide uglifier errors in the terminal
      },
      sourceMap: true, // source maps for minimized code or want correct line numbers for uglifyjs warnings
    }),

    // Minify and optimize the index.html
    new HtmlWebpackPlugin(Object.assign({}, commonConfigs.htmlPlugin, {
      base: getPublicPath(),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    })),

    // Extract the CSS into a seperate file
    // new ExtractTextPlugin({css/[name].[contenthash].css'),
    new ExtractTextPlugin({
      filename: 'css/[name].[contenthash].css',
      disable: false,
      allChunks: true,
    }),
  ],
});
