// Require
const crosstest = require('../utils/crosstest');
const finder = require('../utils/finder');
const Bundle = require('../dist/bundle');
const Lime = require('../src/lime');

/* ------------------------ division ------------------------ */

// Variables
let count = 0;

// Matching test
describe('Command matching test', () => {
  finder('src/commands').forEach((key) => {
    test(key, () => {
      expect(finder('tests/commands', '.json').includes(key)).toBeTruthy();
    });
  });
});

// Unit tests
finder('tests/commands', '.json').forEach((key) => {
  const unit = require(`./commands/${key}`);

  describe(unit.name, () => {
    count += crosstest(test, expect, Lime, Bundle, unit);
  });
});

// Report
describe('Report', () => {
  test(`Number of tests: ${count}`, () => {
    expect(true).toBeTruthy();
  });
});
