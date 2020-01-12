'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Autoprefixer = require('autoprefixer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = env => {
  const isDev = env.NODE_ENV === 'development';
  const isProd = env.NODE_ENV === 'production';

  return {
    name: 'tunaiku-ui',
    entry: {
      'tunaiku-ui': path.join(__dirname, '/packages/tunaiku-ui-styles/tunaiku-ui.scss'),
    },
    output: {
      path: path.join(__dirname, './dist'),
      filename: `${isProd ? '[name].min.css.js' : '[name].css.js'}`,
    },
    devtool: isDev ? 'cheap-module-eval-source-map' : false,
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: () => [new Autoprefixer()],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                sassOptions: {
                  minimize: false,
                  includePaths: [path.resolve(path.join(__dirname, '/node_modules'))],
                  implementation: require('node-sass'),
                  outputStyle: isProd ? 'compressed' : 'expanded',
                },
              },
            },
          ],
        },
      ],
    },
    optimization: {
      minimize: false,
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            output: {
              comments: false,
            },
          },
        }),
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: `${isProd ? '[name].min.css' : '[name].css'}`,
      }),
      new PrettierPlugin(),
      new CompressionPlugin(),
    ],
  };
};
