/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { ProvidePlugin } = require('webpack');
const webpack = require('webpack');

// config helpers:
const ensureArray = (config) => config && (Array.isArray(config) ? config : [config]) || []; // eslint-disable-line no-mixed-operators
const when = (condition, config, negativeConfig) => (condition ? ensureArray(config) : ensureArray(negativeConfig));

// primary config:
const title = 'Coding For Llamas';
const outDir = path.resolve(__dirname, 'dist');
const srcDir = path.resolve(__dirname, 'src');
const baseUrl = '/';

module.exports = ({
  production, analyze,
} = {
}) => ({
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  entry: {
    app: [`${srcDir}/main.tsx`],
    vendor: ['bootstrap'],
  },

  mode: production ? 'production' : 'development',

  output: {
    path: outDir,
    publicPath: baseUrl,
    filename: production ? '[name].[chunkhash].bundle.js' : '[name].[fullhash].bundle.js',
    chunkFilename: production ? '[name].[chunkhash].chunk.js' : '[name].[fullhash].chunk.js',
  },

  performance: { hints: false },

  devServer: {
    contentBase: outDir,
    hot: true,
    // serve index.html for all 404 (required for push-state)
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/' },
        { from: /^\//, to: '/' },
        { from: /./, to: '/' },
      ],
    },
    port: parseInt(process.env.PORT, 10),
  },

  devtool: production ? 'nosources-source-map' : 'source-map',

  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/i,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },

  module: {
    rules: [
      // TypeScript && Javascript: Use TS-Loader to transpile
      {
        test: /\.(t|j)sx?$/,
        use: { loader: 'ts-loader' },
        exclude: [/node_modules/],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      { test: /\.html$/i, loader: 'html-loader' },
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(scss|css)$/,
        use: [
          production ? MiniCssExtractPlugin.loader : 'style-loader',
          { loader: 'css-loader', options: { sourceMap: false, importLoaders: 1 } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      // embed small images and fonts as Data Urls and larger ones as files:
      { test: /\.(png|gif|jpg|cur)$/i, loader: 'url-loader', options: { limit: 8192 } },
      { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff2' } },
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff' } },
      // load these fonts normally, as files:
      { test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'file-loader' },
    ],
  },

  plugins: [
    new ProvidePlugin({
      Popper: ['popper.js', 'default'],
    }),
    // Generates HTML file from template
    new HtmlWebpackPlugin({
      template: `${srcDir}/index.ejs`,
      minify: production ? { removeComments: true, collapseWhitespace: true } : undefined,
      metadata: { title, baseUrl },
    }),
    // Extracts CSS into seperate files.
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      allChunks: true,
      metadata: { title, baseUrl },
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static/favicon.ico', to: 'favicon.ico' },
      ],
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV',
      'AuthProductionBaseURL', 'PORT', 'BackendUrl', 'GoogleClientId', 'userRoles', 'HashString']),
    ...when(analyze, new BundleAnalyzerPlugin()),
  ],
});
