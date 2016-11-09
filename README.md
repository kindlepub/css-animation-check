# Css Animation Check

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

> 

## Installation

```sh
npm install css-animation-check --save-dev
```

## Usage

```js

var cssAnimationCheck = require('css-animation-check')
cssAnimationCheck(projectDirectoryPath) //=> Map[[fileName,fileItem]]

//animationDefaults found in css-animation-check/lib/keys.json
var cssAnimationOptions = {
    animated:[".animate"], //animated properties
    exempt:[], //exempt directories - root only
    files:[".jsx"] //file types to check
};

cssAnimationCheck(projectDirectoryPath,cssAnimationOptions) //=> Map[[fileName,fileItem]] + doesn't update keys.json 

var animationOptionName = 'animated'
var optionValue = 'dynamics' // String or Array ['dynamics','.animate']
cssAnimationCheck.option(animationOptionName,optionValue) // updates keys.json file 


```

## License

MIT license

[npm-url]: https://npmjs.org/package/css-animation-check
