### webpack-starter

#### This is for running webpack application using file-loader
#### Installation
```sh
mkdir image && cd image
npm init
npm install webpack --save-dev
npm install file-loader --save-dev
npm install style-loader --save-dev
```

```sh
touch webpack.config.js
mkdir app dist images
cd app
touch app.js
```
Then find an png image  and add it into images folder
##### app.js 
```js
import image from './../images/doc.png';
```
##### webpack.config.js
Webpack identifies the images and loads it to dist folder using file-loader
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
now go and check in dist/images folder created and the given image added to this

