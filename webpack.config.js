const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const { loadPresets, loadModeConfig } = require('./build-utils/configLoaders');

module.exports = (
  { mode = 'production', presets = '' } = { mode: 'production', presets: '' }
) => {
  return merge(
    {
      mode,
      context: __dirname + '/src',
      entry: './ClientApp.tsx',
      output: {
        filename: 'bundle.js',
        chunkFilename: '[name].chunk.[chunkhash].js',
      },
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
      devServer: {
        historyApiFallback: true,
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, './index.html'),
          inject: 'body',
        }),
        new webpack.ProgressPlugin(),
      ],
    },
    loadPresets(presets),
    loadModeConfig(mode)
  );
};
