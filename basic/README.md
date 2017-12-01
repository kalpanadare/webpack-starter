### webpack-starter

#### Install webpack globally - for running small script

```sh
npm install webpack -g
mkdir webpack-starter && cd webpack-starter
```
#### basic concept 
```shell
mkdir basic && cd basic
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
#### When running webpack, need to give initial js (app.js) file, which includes developers.js automatically and outputs to bundle.js
```sh
webpack ./app.js bundle.js
node bundle.js
```
#### It prints 
['Princya','Pavithran','Annammal','Joseph']
