const path = require('path');

module.exports = {
  entry: path.join(__dirname, './src/index.ts'),
  output: {
    path: path.join(__dirname, './dist/client'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'file-loader',
        options: { name: '[name].[ext]' }
      },
      { test: /\.ts?$/, loader: 'ts-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.(s?)css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  }
};
