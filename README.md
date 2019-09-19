[![npm version](https://badge.fury.io/js/valid-url-utf8.svg)](https://badge.fury.io/js/valid-url-utf8)


### Installation
```
yarn add valid-url-utf8
// or
npm install valid-url-utf8 
```

### Usage
```
import validUrlUtf8 from 'valid-url-utf8';
// or
const validUrlUtf8 = require('valid-url-utf8');


validUrlUtf8('https://site-name.domain'); // True
validUrlUtf8('www.site-name.domain'); // True
validUrlUtf8('site-name.domain'); // True
validUrlUtf8('русскоязычное-название.рф'); // True

validUrlUtf8('www.sit e-name.domain'); // False
validUrlUtf8('www.site-name.d'); // False
validUrlUtf8('site-n/ame.domain'); // False
validUrlUtf8('site-name.d/omain'); // False
```