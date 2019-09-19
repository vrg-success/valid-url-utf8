const validUrlUtf8 = require('valid-url-utf8');


const data = [
  'https://site-name.domain', 
  'www.site-name.domain', 
  'site-name.domain',
  'русскоязычное-название.рф',
  'www.sit e-name.domain',
  'www.site-name.d',
  'site-n/ame.domain',
  'site-name.d/omain',
  'https://.....w....w....//'
];

data.forEach(url => {
  const isValid = validUrlUtf8(url);
  console.log(`${url} = ${isValid}`);
});