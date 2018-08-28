var path = require('path');
module.exports = {
  entry: "./js/main.js",
  output: {
    path: __dirname,
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
  }
}