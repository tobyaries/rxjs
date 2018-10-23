const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

var path = require('path');
module.exports = {
  entry: "./js/main.js",
  output: {
    path: path.join(__dirname,'dist'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
		  {
			loader: 'babel-loader',
			options: {
               presets: ['env'],
			   "plugins": ['transform-decorators-legacy']
             }
		  }
		],
		exclude:/node_module/
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Some Tests',
      template: './index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    host:'127.0.0.1',
    port: 1984,
    historyApiFallback:{
      rewrites:[
        {from:/./,to:'/404.html'}
      ]
    },
    overlay: true,
    inline: true,
    hot: true
  }
}