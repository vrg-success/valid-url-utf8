const validUrlUtf8 = require('valid-url-utf8');

it('validations', () => {
  // correct
  expect(validUrlUtf8('https://site-name.domain')).toBe(true);
  expect(validUrlUtf8('www.site-name.domain')).toBe(true);
  expect(validUrlUtf8('site-name.domain')).toBe(true);
  expect(validUrlUtf8('русскоязычное-название.рф')).toBe(true);

  // incorrect
  expect(validUrlUtf8('www.sit e-name.domain')).toBe(false);
  expect(validUrlUtf8('www.<site-name>.domain')).toBe(false);
  expect(validUrlUtf8('www.site-name.d')).toBe(false);
  expect(validUrlUtf8('site-n/ame.domain')).toBe(false);
  expect(validUrlUtf8('site-name.d/omain')).toBe(false);
  expect(validUrlUtf8('https://.....w....w....//')).toBe(false);
  expect(validUrlUtf8('https://www.youtube.cf..ff/watch?v=nKr9cWIEKtk')).toBe(
    false
  );
});
