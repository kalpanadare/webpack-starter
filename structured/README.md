### webpack-starter

#### This is for running webpack sample in structured way
```sh
mkdir structured && cd structured
npm init
npm install webpack --save-dev
```
#### base configuration
```shell
touch webpack.config.js
mkdir src bin 
cd src
touch app.js developers.js 
```
##### developers.js (Define a object and export it)
```js
var developers = ['Princya','Pavithran','Annammal','Joseph'];
module.exports = developers
```
##### app.js (since developers is exported, the developers can require it)
```js
developers = require('./developers.js')
console.log(developers);
```
##### webpack.config.js
Add the initial js in entry point, and specify output folder with filename
```js
const path = require('path');
 module.exports = {
     entry: './src/app.js',
     output: {
         path: path.resolve(__dirname, 'bin'),
         filename: 'app.bundle.js'
     }
 };
 ```
#### Build
Now build with webpack and run it with node
```sh
webpack
node bundle.js
```
#### It prints 
['Princya','Pavithran','Annammal','Joseph']
