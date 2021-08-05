// Require
const banner = require('../utils/banner');

/* ------------------------ division ------------------------ */

// Sample banner
const sample = 'Lime version 0.1.0\n'
  + 'Mathematics computation engine\n'
  + '2021 Lime Project Team, MIT license\n'
  + 'https://github.com/onenylxus/lime';

// Banner test
describe('Banner test', () => {
  test('matching banner', () => {
    expect(banner()).toStrictEqual(sample);
  });
});
