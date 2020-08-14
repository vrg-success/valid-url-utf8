const validUrlUtf8 = require('valid-url-utf8');

it('validations', () => {
  const links = {
    correct: [
      'https://site-name.domain',
      'www.site-name.domain',
      'site-name.domain',
      'русскоязычное-название.рф',
    ],
    incorrect: [
      'www.sit e-name.domain',
      'www.<site-name>.domain',
      'www.site-name.d',
      'site-n/ame.domain',
      'site-name.d/omain',
      'https://.....w....w....//',
      'https://www.youtube.cf..ff/watch?v=nKr9cWIEKtk',
    ],
  };

  links.incorrect.forEach(url => expect(validUrlUtf8(url)).toBe(true));
  links.incorrect.forEach(url => expect(validUrlUtf8(url)).toBe(false));
});
