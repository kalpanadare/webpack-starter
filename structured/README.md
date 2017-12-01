### webpack-starter

#### This is for running webpack sample in structured way
```sh
mkdir structured && cd structured
npm init
npm install webpack --save-dev
```
#### basic concept 
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
#### When running webpack, you no need to specify basic files 
```sh
webpack
node bundle.js
```
#### It prints 
['Princya','Pavithran','Annammal','Joseph']
