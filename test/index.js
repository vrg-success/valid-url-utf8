import validUrlUtf8 from 'valid-url-utf8';


const data = [
  'https://site-name.domain', 
  'www.site-name.domain', 
  'site-name.domain',
  'русскоязычное-название.рф',
  'www.sit e-name.domain',
  'www.site-name.d',
  'site-n/ame.domain',
  'site-name.d/omain'
];

data.forEach(url => {
  const isValid = validUrlUtf8(url);
  document.body.appendChild(`${url} = ${isValid}</br>`);
});