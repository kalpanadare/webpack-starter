const path = require('path');

module.exports = {
  entry: './app/app.js',
  output: {
	filename: 'bundle.js',
	path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: [
          {
            loader: 'file-loader?name=/images/[name].[ext]' //
          }
        ]
      }
    ]
  }
};
