var path = require('path');
module.exports = {
  entry: './client/src/index.js',
  output: {
    filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
    
    ]
  },

  plugins: []
}