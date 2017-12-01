### webpack-starter

#### This is for running webpack application using file-loader
``sh
mkdir image && cd image
npm init
npm install webpack --save-dev
npm install file-loader --save-dev
npm install style-loader --save-dev
```
#### basic concept 
```shell
touch webpack.config.js
mkdir src bin 
cd app dist images
cd app
touch app.js
```
##### app.js 
import image from './../images/doc.png';
```
##### webpack.config.js
```js
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
 ```
#### When running webpack
```sh
webpack
```
