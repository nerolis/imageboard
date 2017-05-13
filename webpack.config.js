module.exports = {
  entry: './client/src/index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
              test: /\.css$/,
              loader: []
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.(gif|png)$/,
                loader: 'url-loader?limit-200000'
}
    ]
  },
  plugins: []
}