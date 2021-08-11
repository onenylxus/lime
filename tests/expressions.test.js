// Require
const crosstest = require('../utils/crosstest');
const finder = require('../utils/finder');
const Bundle = require('../dist/bundle');
const Lime = require('../src/lime');

/* ------------------------ division ------------------------ */

// Variables
let count = 0;

// Counting test
describe('Expression counting test', () => {
  finder('src/expressions').forEach((key) => {
    test(key, () => {
      expect(finder('tests/expressions', '.json').includes(key)).toBeTruthy();
    });
  });
});

// Unit tests
finder('tests/expressions', '.json').forEach((key) => {
  const unit = require(`./expressions/${key}`);

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
