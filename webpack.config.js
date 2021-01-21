const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
module.exports = {
  entry: `${__dirname}/client/src/index.jsx`,
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', { plugins: ['@babel/plugin-syntax-jsx', '@babel/plugin-proposal-class-properties'] }],
          },
        },
      },
    ],
  },

  output: {
    filename: 'bundle.js',
    path: `${__dirname}/client/dist`,
	},
  plugins: [
 new CompressionPlugin({
 filename: `[path].gz[query]`,
 algorithm: 'gzip',
 test: /\.js$|\.css$|\.html$/,
 threshold: 10240,
 minRatio: 0.7
 }),
 new BrotliPlugin({
 filename: `[path].br[query]`,
 test: /\.js$|\.css$|\.html$/,
 threshold: 10240,
 minRatio: 0.7
 })
]
};
