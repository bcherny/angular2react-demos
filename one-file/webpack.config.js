module.exports = {
  devtool: 'source-map',
  devServer: {
    contentBase: __dirname + '/dist',
    compress: true,
    // hot: true,
    https: true,
    port: 9000
  },
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}